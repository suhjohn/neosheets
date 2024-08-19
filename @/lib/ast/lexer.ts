// lexer.ts
import { Token } from "@/types/ast";

export function tokenize(input: string): Token[] {
  const tokens: Token[] = [];
  let current = 0;

  while (current < input.length) {
    let char = input[current];

    if (/\s/.test(char)) {
      current++;
      continue;
    }

    if (/\d/.test(char)) {
      let value = "";
      while (current < input.length && /\d/.test(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({ type: "NUMBER", value });
      continue;
    }

    if (/[A-Z]/i.test(char)) {
      let value = "";
      while (current < input.length && /[A-Z0-9]/i.test(char)) {
        value += char;
        char = input[++current];
      }
      if (value.toUpperCase() === "SUM") {
        tokens.push({ type: "FUNCTION", value });
      } else {
        tokens.push({ type: "CELL_REF", value });
      }
      continue;
    }

    if (/[+\-*/]/.test(char)) {
      tokens.push({ type: "OPERATOR", value: char });
      current++;
      continue;
    }

    if (char === "(") {
      tokens.push({ type: "LPAREN", value: "(" });
      current++;
      continue;
    }

    if (char === ")") {
      tokens.push({ type: "RPAREN", value: ")" });
      current++;
      continue;
    }

    if (char === ",") {
      tokens.push({ type: "COMMA", value: "," });
      current++;
      continue;
    }

    if (char === ":") {
      tokens.push({ type: "COLON", value: ":" });
      current++;
      continue;
    }

    throw new Error(`Unrecognized character: ${char}`);
  }
  return tokens;
}
