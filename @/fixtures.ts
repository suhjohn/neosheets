import { FunctionBindingType, FunctionType } from "./types/sheet";

const SUM_FUNCTION_ID = "201eea36-932c-4768-8479-57d6c68e7c14";
const AVG_FUNCTION_ID = "68ea7581-71ad-4718-b15f-a2aaf1f34608";

export const DEFAULT_FUNCTIONS: FunctionType[] = [
  {
    id: SUM_FUNCTION_ID,
    functionName: "SUM",
    functionBody:
      "function sum(...args) { return args.reduce((a, b) => a + b, 0); }",
    description: "Adds two numbers together",
    createdAt: "2024-08-01T00:00:00.000Z",
    updatedAt: "2024-08-01T00:00:00.000Z",
  },
  {
    id: AVG_FUNCTION_ID,
    functionName: "AVERAGE",
    functionBody:
      "function average(...args) { return args.reduce((a, b) => a + b, 0) / args.length; }",
    description: "Averages two numbers",
    createdAt: "2024-08-01T00:00:00.000Z",
    updatedAt: "2024-08-01T00:00:00.000Z",
  },
];

export const DEFAULT_FUNCTION_BINDINGS: FunctionBindingType[] = [
  {
    name: "SUM",
    functionId: SUM_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "AVERAGE",
    functionId: AVG_FUNCTION_ID,
    isCustom: false,
  },
];

export const DEFAULT_FONT_FAMILY = "Inter";
export const DEFAULT_FONT_SIZE = 14;
