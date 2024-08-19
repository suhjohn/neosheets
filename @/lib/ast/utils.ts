// astUtils.ts
import { ASTNode, CellReferenceNode } from "../../types/ast";

export function updateASTForColumnInsertion(
  ast: ASTNode,
  insertedColumnIndex: number
): ASTNode {
  if (ast.type === "CellReference") {
    if (ast.columnIndex >= insertedColumnIndex) {
      return { ...ast, columnIndex: ast.columnIndex + 1 };
    }
  } else if (ast.type === "BinaryOperation") {
    return {
      ...ast,
      left: updateASTForColumnInsertion(ast.left, insertedColumnIndex),
      right: updateASTForColumnInsertion(ast.right, insertedColumnIndex),
    };
  } else if (ast.type === "Function") {
    return {
      ...ast,
      arguments: ast.arguments.map((arg) =>
        updateASTForColumnInsertion(arg, insertedColumnIndex)
      ),
    };
  } else if (ast.type === "Range") {
    return {
      ...ast,
      start: updateASTForColumnInsertion(
        ast.start,
        insertedColumnIndex
      ) as CellReferenceNode,
      end: updateASTForColumnInsertion(
        ast.end,
        insertedColumnIndex
      ) as CellReferenceNode,
    };
  }
  return ast;
}

export function astToString(ast: ASTNode): string {
  if (ast.type === "Number") {
    return ast.value.toString();
  } else if (ast.type === "CellReference") {
    const colLetter = String.fromCharCode(65 + ast.columnIndex);
    return `${colLetter}${ast.rowIndex + 1}`;
  } else if (ast.type === "BinaryOperation") {
    return `(${astToString(ast.left)} ${ast.operator} ${astToString(
      ast.right
    )})`;
  } else if (ast.type === "Function") {
    const args = ast.arguments.map(astToString).join(", ");
    return `${ast.name}(${args})`;
  } else if (ast.type === "Range") {
    return `${astToString(ast.start)}:${astToString(ast.end)}`;
  }
  return "";
}
