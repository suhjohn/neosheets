// eval.ts
import { ASTNode } from "@/types/ast";
import { CellAddress, cellAddressToString, ColumnData } from "@/types/sheet";
import ts from "typescript";
import { tokenize } from "./lexer";
import { parse } from "./parser";

// Add this new error class
export class CircularDependencyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CircularDependencyError";
  }
}

function evaluateAst(
  ast: ASTNode,
  data: ColumnData[],
  currentCell: CellAddress,
  evaluationChain: Set<string>,
  functionBindings: functionBindingsType
): any {
  switch (ast.type) {
    case "Number":
      return ast.value;
    case "CellReference":
      const refAddress = cellAddressToString({
        col: ast.columnIndex,
        row: ast.rowIndex,
      });
      if (evaluationChain.has(refAddress)) {
        throw new CircularDependencyError(
          `Circular dependency detected at ${refAddress}`
        );
      }
      evaluationChain.add(refAddress);
      const cellValue = data[ast.columnIndex]?.[ast.rowIndex]?.value;
      if (typeof cellValue === "string" && cellValue.startsWith("=")) {
        return evaluateFormula({
          formula: cellValue,
          data,
          currentCell: { col: ast.columnIndex, row: ast.rowIndex },
          evaluationChain,
          functionBindings,
        });
      }
      return cellValue !== undefined ? cellValue : 0;
    case "Range":
      const startCell = { col: ast.start.columnIndex, row: ast.start.rowIndex };
      const endCell = { col: ast.end.columnIndex, row: ast.end.rowIndex };
      const values = [];
      for (let col = startCell.col; col <= endCell.col; col++) {
        for (let row = startCell.row; row <= endCell.row; row++) {
          values.push(data[col]?.[row]?.value ?? 0);
        }
      }
      return values;
    case "BinaryOperation":
      const left = evaluateAst(
        ast.left,
        data,
        currentCell,
        evaluationChain,
        functionBindings
      );
      const right = evaluateAst(
        ast.right,
        data,
        currentCell,
        evaluationChain,
        functionBindings
      );
      switch (ast.operator) {
        case "+":
          return left + right;
        case "-":
          return left - right;
        case "*":
          return left * right;
        case "/":
          return left / right;
        default:
          throw new Error(`Unknown operator: ${ast.operator}`);
      }
    case "Function":
      const args = ast.arguments.map((arg) =>
        evaluateAst(arg, data, currentCell, evaluationChain, functionBindings)
      );
      const functionObj = functionBindings[ast.name.toUpperCase()];
      if (!functionObj) {
        throw new Error("Function SUM not found");
      }
      const { functionBody } = functionObj;
      const transpiledCode = ts.transpile(`${functionBody}`);
      return eval(`${transpiledCode};\nrun(${args})`);
    default:
      throw new Error(`Unknown AST node type: ${(ast as any).type}`);
  }
}

export type functionBindingsType = {
  [functionName: string]: {
    id: string;
    functionBody: string;
  };
};

export function evaluateFormula({
  formula,
  data,
  currentCell,
  functionBindings,
  evaluationChain = new Set<string>(),
}: {
  formula: string;
  data: ColumnData[];
  currentCell: CellAddress;
  functionBindings: functionBindingsType;
  evaluationChain?: Set<string>;
}): any {
  if (!formula.startsWith("=")) return formula;
  const currentAddress = cellAddressToString(currentCell);
  if (evaluationChain.has(currentAddress)) {
    throw new CircularDependencyError(
      `Circular dependency detected at ${currentAddress}`
    );
  }
  evaluationChain.add(currentAddress);
  const tokens = tokenize(formula.slice(1));
  const ast = parse(tokens);
  return evaluateAst(ast, data, currentCell, evaluationChain, functionBindings);
}

export function getCellDependencies(formula: string): Set<string> {
  if (!formula.startsWith("=")) return new Set();
  const tokens = tokenize(formula.slice(1));
  const ast = parse(tokens);
  const dependencies = new Set<string>();

  function traverse(node: ASTNode) {
    if (node.type === "CellReference") {
      dependencies.add(
        cellAddressToString({ col: node.columnIndex, row: node.rowIndex })
      );
    } else if (node.type === "Range") {
      const start = { col: node.start.columnIndex, row: node.start.rowIndex };
      const end = { col: node.end.columnIndex, row: node.end.rowIndex };
      for (let col = start.col; col <= end.col; col++) {
        for (let row = start.row; row <= end.row; row++) {
          dependencies.add(cellAddressToString({ col, row }));
        }
      }
    } else if ("left" in node) {
      traverse(node.left);
      traverse(node.right);
    } else if ("arguments" in node) {
      node.arguments.forEach(traverse);
    }
  }

  traverse(ast);
  return dependencies;
}
