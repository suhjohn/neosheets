export type ASTNode =
  | NumberNode
  | StringNode // Added StringNode
  | CellReferenceNode
  | BinaryOperationNode
  | FunctionNode
  | RangeNode
  | ObjectLiteralNode;

export interface NumberNode {
  type: 'Number';
  value: number;
}

export interface StringNode { // New StringNode Interface
  type: 'String';
  value: string;
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

export interface ObjectLiteralNode {
  type: 'ObjectLiteral';
  properties: { key: string; value: ASTNode }[];
}

export type Token = {
  type: 'NUMBER' | 'CELL_REF' | 'OPERATOR' | 'FUNCTION' | 'COMMA' | 'LPAREN' | 'RPAREN' | 'COLON' | 'LBRACE' | 'RBRACE' | 'STRING' | 'IDENTIFIER';
  value: string;
};

export type FunctionBindingsType = {
  [functionName: string]: {
    id: string;
    functionBody: string;
  };
};
