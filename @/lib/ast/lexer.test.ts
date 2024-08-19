// lexer.test.ts
import { tokenize } from "./lexer";

test("tokenize function with JOKE", () => {
  const input = '=JOKE({topic: "Apple"})';
  const functionBindings = { JOKE: { id: "joke", functionBody: "..." } };
  const tokens = tokenize({ input, functionBindings });
  expect(tokens).toEqual([
    { type: "FUNCTION", value: "JOKE" },
    { type: "LPAREN", value: "(" },
    { type: "LBRACE", value: "{" },
    { type: "IDENTIFIER", value: "topic" },
    { type: "COLON", value: ":" },
    { type: "STRING", value: "Apple" },
    { type: "RBRACE", value: "}" },
    { type: "RPAREN", value: ")" },
  ]);
});
