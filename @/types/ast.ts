// ast.ts
export type ASTNode = NumberNode | CellReferenceNode | BinaryOperationNode | FunctionNode | RangeNode;

export interface NumberNode {
  type: 'Number';
  value: number;
}

export interface CellReferenceNode {
  type: 'CellReference';
  columnIndex: number;
  rowIndex: number;
}

export interface BinaryOperationNode {
  type: 'BinaryOperation';
  operator: '+' | '-' | '*' | '/';
  left: ASTNode;
  right: ASTNode;
}

export interface FunctionNode {
  type: 'Function';
  name: string;
  arguments: ASTNode[];
}

export interface RangeNode {
  type: 'Range';
  start: CellReferenceNode;
  end: CellReferenceNode;
}

export type Token = {
  type: 'NUMBER' | 'CELL_REF' | 'OPERATOR' | 'FUNCTION' | 'COMMA' | 'LPAREN' | 'RPAREN' | 'COLON';
  value: string;
};