// lexer.ts
import { type FunctionBindingsType, type Token } from "@/types/ast";

export function tokenize({
  input,
  functionBindings,
}: {
  input: string;
  functionBindings: FunctionBindingsType;
}): Token[] {
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
      while (current < input.length && /\d/.test(input[current])) {
        value += input[current];
        current++;
      }
      tokens.push({ type: "NUMBER", value });
      continue;
    }

    if (/[A-Z]/i.test(char)) {
      let value = "";
      // Updated regex to include underscore
      while (current < input.length && /[A-Z0-9_]/i.test(input[current])) {
        value += input[current];
        current++;
      }

      // Check if it's a FUNCTION
      if (functionBindings[value.toUpperCase()]) {
        tokens.push({ type: "FUNCTION", value });
      }
      // Check if it's a valid CELL_REF (e.g., A1, B2)
      else if (/^[A-Z]+[0-9]+$/i.test(value)) {
        tokens.push({ type: "CELL_REF", value });
      }
      // Otherwise, it's a general IDENTIFIER
      else {
        tokens.push({ type: "IDENTIFIER", value });
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

    if (char === "{") {
      tokens.push({ type: "LBRACE", value: "{" });
      current++;
      continue;
    }

    if (char === "}") {
      tokens.push({ type: "RBRACE", value: "}" });
      current++;
      continue;
    }

    if (char === '"') {
      let value = "";
      current++; // Skip the opening quote
      char = input[current];

      while (current < input.length && char !== '"') {
        value += char;
        current++;
        char = input[current];
      }

      if (char === '"') {
        current++; // Skip the closing quote
      } else {
        throw new Error("Unterminated string literal");
      }

      tokens.push({ type: "STRING", value });
      continue;
    }

    throw new Error(`Unrecognized character: ${char}`);
  }
  return tokens;
}
