import { analyzeFunctions } from "./reflectFunction"; // Adjust the import path as necessary

function normalizeWhitespace(str: string): string {
  return str.replace(/\s+/g, " ").trim();
}

describe("analyzeFunctions", () => {
  test("should correctly analyze a simple function", () => {
    const code = `
      function add(a: number, b: number): number {
        return a + b;
      }
    `;
    const result = analyzeFunctions(code);
    expect(result).toEqual([
      {
        name: "add",
        params: "a: number, b: number",
        returnType: "number",
      },
    ]);
  });

  test("should handle functions with rest parameters", () => {
    const code = `
      function sum(...numbers: number[]): number {
        return numbers.reduce((total, num) => total + num, 0);
      }
    `;
    const result = analyzeFunctions(code);
    expect(result).toEqual([
      {
        name: "sum",
        params: "...numbers: number[]",
        returnType: "number",
      },
    ]);
  });

  test("should handle functions with optional parameters", () => {
    const code = `
      function greet(name: string, age?: number): string {
        return age ? \`Hello, \${name}! You are \${age} years old.\` : \`Hello, \${name}!\`;
      }
    `;
    const result = analyzeFunctions(code);
    expect(result).toEqual([
      {
        name: "greet",
        params: "name: string, age?: number",
        returnType: "string",
      },
    ]);
  });

  test("should handle multiple functions in the same code snippet", () => {
    const code = `
      function add(a: number, b: number): number {
        return a + b;
      }
      function subtract(a: number, b: number): number {
        return a - b;
      }
    `;
    const result = analyzeFunctions(code);
    expect(result).toEqual([
      {
        name: "add",
        params: "a: number, b: number",
        returnType: "number",
      },
      {
        name: "subtract",
        params: "a: number, b: number",
        returnType: "number",
      },
    ]);
  });

  test("should handle functions with complex return types", () => {
    const code = `
      function createPerson(name: string, age: number): { name: string; age: number; isAdult: boolean } {
        return { name, age, isAdult: age >= 18 };
      }
    `;
    const result = analyzeFunctions(code);
    expect(result).toEqual([
      {
        name: "createPerson",
        params: "name: string, age: number",
        returnType: "{ name: string; age: number; isAdult: boolean }",
      },
    ]);
  });

  test("should handle async functions", () => {
    const code = `
      async function fetchData(url: string): Promise<any> {
        const response = await fetch(url);
        return response.json();
      }
    `;
    const result = analyzeFunctions(code);
    expect(result).toEqual([
      {
        name: "fetchData",
        params: "url: string",
        returnType: "Promise<any>",
      },
    ]);
  });

  test("should handle generic functions", () => {
    const code = `
      function identity<T>(arg: T): T {
        return arg;
      }
    `;
    const result = analyzeFunctions(code);
    expect(result).toEqual([
      {
        name: "identity",
        params: "arg: T",
        returnType: "T",
      },
    ]);
  });

  test("should ignore non-function declarations", () => {
    const code = `
      const x = 5;
      let y = "hello";
      function add(a: number, b: number): number {
        return a + b;
      }
    `;
    const result = analyzeFunctions(code);
    expect(result).toEqual([
      {
        name: "add",
        params: "a: number, b: number",
        returnType: "number",
      },
    ]);
  });

  test("should handle empty input", () => {
    const code = "";
    const result = analyzeFunctions(code);
    expect(result).toEqual([]);
  });

  test("should handle input with no functions", () => {
    const code = `
      const x = 5;
      let y = "hello";
    `;
    const result = analyzeFunctions(code);
    expect(result).toEqual([]);
  });

  test("should handle functions with object parameters", () => {
    const code = `
      interface UserData {
        name: string;
        age: number;
        email?: string;
      }

      function processUser(user: UserData): string {
        return \`User \${user.name} is \${user.age} years old\`;
      }
    `;
    const result = analyzeFunctions(code);
    expect(result).toEqual([
      {
        name: "processUser",
        params: "user: UserData",
        returnType: "string",
      },
    ]);
  });

  test("should handle functions with inline object type parameters", () => {
    const code = `
      function greetUser(user: { name: string; age: number }): string {
        return \`Hello, \${user.name}! You are \${user.age} years old.\`;
      }
    `;
    const result = analyzeFunctions(code);
    expect(result).toEqual([
      {
        name: "greetUser",
        params: "user: { name: string; age: number }",
        returnType: "string",
      },
    ]);
  });

  test("should handle functions with complex object parameters", () => {
    const code = `
      function processData(data: {
        id: number;
        details: {
          name: string;
          scores: number[];
        };
        tags?: string[];
      }): { summary: string; avgScore: number } {
        const avgScore = data.details.scores.reduce((sum, score) => sum + score, 0) / data.details.scores.length;
        return {
          summary: \`\${data.details.name} (ID: \${data.id})\`,
          avgScore
        };
      }
    `;
    const result = analyzeFunctions(code);
    const expected = [
      {
        name: "processData",
        params:
          "data: { id: number; details: { name: string; scores: number[]; }; tags?: string[]; }",
        returnType: "{ summary: string; avgScore: number }",
      },
    ];
    expected.forEach((exp, i) => {
      exp.params = normalizeWhitespace(exp.params);
      result[i].params = normalizeWhitespace(result[i].params);
    });
    expect(result).toEqual(expected);
  });
});
