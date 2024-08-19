import * as ts from "typescript";

interface FunctionInfo {
  name: string;
  params: string;
  returnType: string;
}

export function analyzeFunctions(code: string): FunctionInfo[] {
  const sourceFile = ts.createSourceFile(
    "temp.ts",
    code,
    ts.ScriptTarget.Latest,
    true
  );
  const functionInfos: FunctionInfo[] = [];

  function visit(node: ts.Node) {
    if (ts.isFunctionDeclaration(node) && node.name) {
      const name = node.name.text;

      const params = node.parameters
        .map((param) => {
          const paramName = param.name.getText(sourceFile);
          const isOptional = param.questionToken ? "?" : "";
          const paramType = param.type ? param.type.getText(sourceFile) : "any";
          const isRest = param.dotDotDotToken ? "..." : "";
          return `${isRest}${paramName}${isOptional}: ${paramType}`;
        })
        .join(", ");

      const returnType = node.type ? node.type.getText(sourceFile) : "any";

      functionInfos.push({
        name,
        params,
        returnType,
      });
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  return functionInfos;
}
