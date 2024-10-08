import { analyzeFunctions } from "./reflectFunction";

export const validateFunction = (code: string) => {
  const analysis = analyzeFunctions(code);
  console.log(analysis);
  // check if object with name === "run" exists
  const runFunction = analysis.find((f) => f.name === "run");
  if (!runFunction) {
    throw new Error(
      "Function must contain a function named 'run'. 'run' should be the entrypoint."
    );
  }
};

export const getRunFunction = (code: string) => {
  const analysis = analyzeFunctions(code);
  const runFunction = analysis.find((f) => f.name === "run");
  if (!runFunction) {
    throw new Error(
      "Function must contain a function named 'run'. 'run' should be the entrypoint."
    );
  }
  return runFunction;
};
