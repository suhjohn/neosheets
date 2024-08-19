import { ASTNode, Token } from "../../types/ast";
import { parse } from "./parser";

describe("parse", () => {
  test("parses a simple number", () => {
    const tokens: Token[] = [{ type: "NUMBER", value: "42" }];
    const expected: ASTNode = { type: "Number", value: 42 };
    expect(parse(tokens)).toEqual(expected);
  });

  test("parses a cell reference", () => {
    const tokens: Token[] = [{ type: "CELL_REF", value: "A1" }];
    const expected: ASTNode = {
      type: "CellReference",
      columnIndex: 0,
      rowIndex: 0,
    };
    expect(parse(tokens)).toEqual(expected);
  });

  test("parses a binary operation", () => {
    const tokens: Token[] = [
      { type: "NUMBER", value: "1" },
      { type: "OPERATOR", value: "+" },
      { type: "NUMBER", value: "2" },
    ];
    const expected: ASTNode = {
      type: "BinaryOperation",
      operator: "+",
      left: { type: "Number", value: 1 },
      right: { type: "Number", value: 2 },
    };
    expect(parse(tokens)).toEqual(expected);
  });

  test("parses a function call", () => {
    const tokens: Token[] = [
      { type: "FUNCTION", value: "SUM" },
      { type: "LPAREN", value: "(" },
      { type: "CELL_REF", value: "A1" },
      { type: "COMMA", value: "," },
      { type: "CELL_REF", value: "B2" },
      { type: "RPAREN", value: ")" },
    ];
    const expected: ASTNode = {
      type: "Function",
      name: "SUM",
      arguments: [
        { type: "CellReference", columnIndex: 0, rowIndex: 0 },
        { type: "CellReference", columnIndex: 1, rowIndex: 1 },
      ],
    };
    expect(parse(tokens)).toEqual(expected);
  });

  test("parses a range", () => {
    const tokens: Token[] = [
      { type: "CELL_REF", value: "A1" },
      { type: "COLON", value: ":" },
      { type: "CELL_REF", value: "B2" },
    ];
    const expected: ASTNode = {
      type: "Range",
      start: { type: "CellReference", columnIndex: 0, rowIndex: 0 },
      end: { type: "CellReference", columnIndex: 1, rowIndex: 1 },
    };
    expect(parse(tokens)).toEqual(expected);
  });

  test("parses a complex expression", () => {
    const tokens: Token[] = [
      { type: "FUNCTION", value: "SUM" },
      { type: "LPAREN", value: "(" },
      { type: "CELL_REF", value: "A1" },
      { type: "COLON", value: ":" },
      { type: "CELL_REF", value: "B2" },
      { type: "COMMA", value: "," },
      { type: "NUMBER", value: "3" },
      { type: "OPERATOR", value: "*" },
      { type: "LPAREN", value: "(" },
      { type: "NUMBER", value: "4" },
      { type: "OPERATOR", value: "+" },
      { type: "NUMBER", value: "5" },
      { type: "RPAREN", value: ")" },
      { type: "RPAREN", value: ")" },
    ];
    const expected: ASTNode = {
      type: "Function",
      name: "SUM",
      arguments: [
        {
          type: "Range",
          start: { type: "CellReference", columnIndex: 0, rowIndex: 0 },
          end: { type: "CellReference", columnIndex: 1, rowIndex: 1 },
        },
        {
          type: "BinaryOperation",
          operator: "*",
          left: { type: "Number", value: 3 },
          right: {
            type: "BinaryOperation",
            operator: "+",
            left: { type: "Number", value: 4 },
            right: { type: "Number", value: 5 },
          },
        },
      ],
    };
    expect(parse(tokens)).toEqual(expected);
  });

  test("throws an error for invalid tokens", () => {
    const tokens: Token[] = [{ type: "INVALID" as any, value: "invalid" }];
    expect(() => parse(tokens)).toThrow("Unexpected token");
  });

  test("throws an error for invalid cell reference", () => {
    const tokens: Token[] = [{ type: "CELL_REF", value: "INVALID" }];
    expect(() => parse(tokens)).toThrow("Invalid cell reference");
  });
});
