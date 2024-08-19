import { tokenize } from "./lexer";

describe("tokenize", () => {
  test("tokenizes a simple expression", () => {
    const input = "1 + 2";
    const expected = [
      { type: "NUMBER", value: "1" },
      { type: "OPERATOR", value: "+" },
      { type: "NUMBER", value: "2" },
    ];
    expect(tokenize(input)).toEqual(expected);
  });

  test("tokenizes a complex expression", () => {
    const input = "SUM(A1:B2, 3 * (4 + 5))";
    const expected = [
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
    expect(tokenize(input)).toEqual(expected);
  });

  test("ignores whitespace", () => {
    const input = "  A1  +  B2  ";
    const expected = [
      { type: "CELL_REF", value: "A1" },
      { type: "OPERATOR", value: "+" },
      { type: "CELL_REF", value: "B2" },
    ];
    expect(tokenize(input)).toEqual(expected);
  });

  test("throws an error for unrecognized characters", () => {
    const input = "1 + @";
    expect(() => tokenize(input)).toThrowError("Unrecognized character: @");
  });
  test("tokenizes cell references without spaces", () => {
    const input = "A1+B1";
    const expected = [
      { type: "CELL_REF", value: "A1" },
      { type: "OPERATOR", value: "+" },
      { type: "CELL_REF", value: "B1" },
    ];
    expect(tokenize(input)).toEqual(expected);
  });
});
