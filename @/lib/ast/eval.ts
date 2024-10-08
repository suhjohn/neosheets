// eval.ts
import { type ASTNode, type FunctionBindingsType } from "@/types/ast";
import {
  cellAddressToString,
  type CellAddress,
  type CellStates,
} from "@/types/sheet";
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
  data: CellStates[],
  currentCell: CellAddress,
  evaluationChain: Set<string>,
  functionBindings: FunctionBindingsType
): string | number | string[] | number[] | (string | number)[] | object {
  switch (ast.type) {
    case "Number":
      return ast.value;
    case "String":
      return ast.value;
    case "CellReference": {
      // eslint-disable-next-line no-case-declarations
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
    }
    case "Range": {
      const startCell = { col: ast.start.columnIndex, row: ast.start.rowIndex };
      const endCell = { col: ast.end.columnIndex, row: ast.end.rowIndex };
      const values = [];
      for (let col = startCell.col; col <= endCell.col; col++) {
        for (let row = startCell.row; row <= endCell.row; row++) {
          values.push(data[col]?.[row]?.value ?? 0);
        }
      }
      return values;
    }
    case "BinaryOperation": {
      const left = evaluateAst(
        ast.left,
        data,
        currentCell,
        evaluationChain,
        functionBindings
      ) as number;
      const right = evaluateAst(
        ast.right,
        data,
        currentCell,
        evaluationChain,
        functionBindings
      ) as number;
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
    }
    case "Function": {
      const args = ast.arguments.map((arg) =>
        evaluateAst(arg, data, currentCell, evaluationChain, functionBindings)
      );
      const functionObj = functionBindings[ast.name.toUpperCase()];
      if (!functionObj) {
        throw new Error(`Function ${ast.name} not found`);
      }
      const { functionBody } = functionObj;
      const transpiledCode = ts.transpile(`${functionBody}`);

      // Prepare the argument string for eval
      let argString: string;
      if (args.length === 1 && typeof args[0] === "object") {
        // If the argument is an object, stringify it
        argString = JSON.stringify(args[0]);
      } else {
        // For positional arguments, join them with commas
        argString = args.join(", ");
      }
      // Adjust the function call accordingly
      const res = new Function(`${transpiledCode};\nreturn run(${argString});`)();
      return res;
    }
    case "ObjectLiteral": {
      const obj: { [key: string]: unknown } = {};
      for (const { key, value } of ast.properties) {
        obj[key] = evaluateAst(
          value,
          data,
          currentCell,
          evaluationChain,
          functionBindings
        ) as string | number | string[] | number[] | (string | number)[];
      }
      return obj;
    }
    default:
      throw new Error(`Unknown AST node type: ${JSON.stringify(ast)}`);
  }
}

export function evaluateFormula({
  formula,
  data,
  currentCell,
  functionBindings,
  evaluationChain = new Set<string>(),
}: {
  formula: string;
  data: CellStates[];
  currentCell: CellAddress;
  functionBindings: FunctionBindingsType;
  evaluationChain?: Set<string>;
}): string | number | string[] | number[] | (string | number)[] | object {
  if (!formula.startsWith("=")) return formula;
  const currentAddress = cellAddressToString(currentCell);
  if (evaluationChain.has(currentAddress)) {
    throw new CircularDependencyError(
      `Circular dependency detected at ${currentAddress}`
    );
  }
  evaluationChain.add(currentAddress);
  const tokens = tokenize({
    input: formula.slice(1),
    functionBindings,
  });
  const ast = parse(tokens);
  return evaluateAst(ast, data, currentCell, evaluationChain, functionBindings);
}

export function getCellDependencies({
  formula,
  functionBindings,
}: {
  formula: string;
  functionBindings: FunctionBindingsType;
}): Set<string> {
  if (!formula.startsWith("=")) return new Set();
  const tokens = tokenize({
    input: formula.slice(1),
    functionBindings,
  });
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
