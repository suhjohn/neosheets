import { parse } from "./parser";
import { tokenize } from "./lexer";

test("parse function with JOKE", () => {
  const input = '=JOKE({topic: "Apple"})';
  const functionBindings = { JOKE: { id: "joke", functionBody: "..." } };
  const tokens = tokenize({ input, functionBindings });
  const ast = parse(tokens);
  expect(ast).toEqual({
    type: "Function",
    name: "JOKE",
    arguments: [
      {
        type: "ObjectLiteral",
        properties: [
          {
            key: "topic",
            value: {
              type: "String",
              value: "Apple",
            },
          },
        ],
      },
    ],
  });
});
