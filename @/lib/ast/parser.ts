// parser.ts
import {
  type ASTNode,
  type BinaryOperationNode,
  type CellReferenceNode,
  type FunctionNode,
  type NumberNode,
  type ObjectLiteralNode,
  type RangeNode,
  type StringNode, // Imported StringNode
  type Token,
} from "../../types/ast";

function parseCellReference(value: string): CellReferenceNode {
  const match = value.match(/([A-Z]+)(\d+)/);
  if (!match) {
    throw new Error(`Invalid cell reference: ${value}`);
  }
  const [, col, row] = match;
  return {
    type: "CellReference",
    columnIndex:
      col
        .split("")
        .reduce((acc, char) => acc * 26 + char.charCodeAt(0) - 64, 0) - 1,
    rowIndex: parseInt(row) - 1,
  };
}

export function parse(tokens: Token[]): ASTNode {
  let current = 0;

  function parseExpression(): ASTNode {
    let left = parseTerm();

    while (
      current < tokens.length &&
      (tokens[current].value === "+" || tokens[current].value === "-")
    ) {
      const operator = tokens[current].value as "+" | "-";
      current++;
      const right = parseTerm();
      left = {
        type: "BinaryOperation",
        operator,
        left,
        right,
      } as BinaryOperationNode;
    }

    return left;
  }

  function parseTerm(): ASTNode {
    let left = parseFactor();

    while (
      current < tokens.length &&
      (tokens[current].value === "*" || tokens[current].value === "/")
    ) {
      const operator = tokens[current].value as "*" | "/";
      current++;
      const right = parseFactor();
      left = {
        type: "BinaryOperation",
        operator,
        left,
        right,
      } as BinaryOperationNode;
    }

    return left;
  }

  function parseFactor(): ASTNode {
    const token = tokens[current];

    if (token.type === "NUMBER") {
      current++;
      return { type: "Number", value: parseFloat(token.value) } as NumberNode;
    }

    if (token.type === "STRING") {
      // New Handling for STRING Tokens
      current++;
      return { type: "String", value: token.value } as StringNode;
    }

    if (token.type === "CELL_REF") {
      if (current + 1 < tokens.length && tokens[current + 1].type === "COLON") {
        return parseRange();
      }
      current++;
      return parseCellReference(token.value);
    }

    if (token.type === "IDENTIFIER") {
      // Handle identifiers if necessary
      throw new Error(`Unexpected identifier: ${token.value}`);
    }

    if (token.type === "FUNCTION") {
      return parseFunction();
    }

    if (token.type === "LPAREN") {
      current++; // consume left paren
      const node = parseExpression();
      if (tokens[current].type !== "RPAREN") {
        throw new Error(
          `Expected ')' after expression, got ${tokens[current].type}`
        );
      }
      current++; // consume right paren
      return node;
    }

    if (token.type === "LBRACE") {
      return parseObjectLiteral();
    }

    throw new Error(`Unexpected token: ${JSON.stringify(token)}`);
  }

  function parseFunction(): FunctionNode {
    const name = tokens[current].value;
    current++; // consume function name

    if (tokens[current].type !== "LPAREN") {
      throw new Error(
        `Expected '(' after function name, got ${tokens[current].type}`
      );
    }
    current++; // consume left paren

    const args: ASTNode[] = [];
    while (tokens[current].type !== "RPAREN") {
      if (tokens[current].type === "COMMA") {
        current++; // consume comma
        continue;
      }
      if (
        tokens[current].type === "CELL_REF" &&
        current + 1 < tokens.length &&
        tokens[current + 1].type === "COLON"
      ) {
        args.push(parseRange());
      } else {
        args.push(parseExpression());
      }
    }
    current++; // consume right paren
    return { type: "Function", name, arguments: args } as FunctionNode;
  }

  function parseRange(): RangeNode {
    const start = parseCellReference(tokens[current].value);
    current++; // consume start cell reference

    if (tokens[current].type !== "COLON") {
      throw new Error(`Expected ':' in range, got ${tokens[current].type}`);
    }
    current++; // consume colon

    const end = parseCellReference(tokens[current].value);
    current++; // consume end cell reference

    return { type: "Range", start, end } as RangeNode;
  }

  function parseObjectLiteral(): ObjectLiteralNode {
    current++; // consume left brace
    const properties: { key: string; value: ASTNode }[] = [];

    while (tokens[current].type !== "RBRACE") {
      let key: string;

      // Accept STRING, IDENTIFIER, or FUNCTION as keys
      if (
        tokens[current].type === "STRING" ||
        tokens[current].type === "IDENTIFIER"
      ) {
        key = tokens[current].value;
        current++; // consume key
      } else if (tokens[current].type === "FUNCTION") {
        key = tokens[current].value;
        current++; // consume key
      } else {
        throw new Error(
          `Expected string, identifier, or function key, got ${tokens[current].type}`
        );
      }

      if (tokens[current].type !== "COLON") {
        throw new Error(
          `Expected colon after key in object literal, got ${tokens[current].type}`
        );
      }
      current++; // consume colon

      const value = parseExpression();
      properties.push({ key, value });

      if (tokens[current].type === "COMMA") {
        current++; // consume comma
      }
    }

    current++; // consume right brace
    return { type: "ObjectLiteral", properties };
  }

  return parseExpression();
}
