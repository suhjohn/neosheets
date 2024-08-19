import { type FunctionBindingsType } from "@/types/ast";
import {
  cellAddressToString,
  type CellState,
  type CellStates,
  stringToCellAddress,
} from "@/types/sheet";
import {
  CircularDependencyError,
  evaluateFormula,
  getCellDependencies,
} from "../ast/eval";

export const updateCellFormula = ({
  prevData,
  colIndex,
  rowIndex,
  newFormula,
  functionBindings,
  display = "hide",
}: {
  prevData: CellStates[];
  colIndex: number;
  rowIndex: number;
  newFormula: string;
  functionBindings: FunctionBindingsType;
  display?: "wrap" | "hide";
}) => {
  const newData = [...prevData];
  if (!newData[colIndex]) newData[colIndex] = {};

  const cellAddress = cellAddressToString({
    col: colIndex,
    row: rowIndex,
  });

  const oldDependencies =
    newData[colIndex][rowIndex]?.dependencies || new Set();

  // Calculate the new dependencies
  const newDependencies = getCellDependencies({
    formula: newFormula,
    functionBindings,
  });

  // Remove this cell from old dependencies' dependents
  oldDependencies.forEach((dep) => {
    const { col, row } = stringToCellAddress(dep);
    if (newData[col]?.[row] && newData[col][row].dependencies !== undefined) {
      newData[col][row].dependencies.delete(cellAddress);
    }
  });

  // Add this cell to new dependencies' dependents
  newDependencies.forEach((dep) => {
    const { col, row } = stringToCellAddress(dep);
    if (!newData[col]) newData[col] = {};
    if (!newData[col][row]) {
      newData[col][row] = {
        value: "",
        display,
        formula: "0",
        dependencies: new Set(),
      } satisfies CellState;
    }
    if (!newData[col][row].dependencies)
      newData[col][row].dependencies = new Set();
    newData[col][row].dependencies.add(cellAddress);
  });

  // Update the current cell
  const promises: Record<number, Record<number, Promise<unknown>>> = {};
  try {
    const newValue = evaluateFormula({
      formula: newFormula,
      data: newData,
      currentCell: {
        col: colIndex,
        row: rowIndex,
      },
      functionBindings,
    });
    if (newValue instanceof Promise) {
      newData[colIndex][rowIndex] = {
        value: "",
        display,
        formula: newFormula,
        dependencies: newDependencies,
      } satisfies CellState;
      if (!promises[colIndex]) {
        promises[colIndex] = {};
      }
      promises[colIndex][rowIndex] = newValue;
    } else {
      newData[colIndex][rowIndex] = {
        value: newValue,
        formula: newFormula,
        dependencies: newDependencies,
        display,
      } satisfies CellState;
    }
  } catch (error) {
    if (error instanceof CircularDependencyError) {
      newData[colIndex][rowIndex] = {
        value: "#REF!",
        formula: newFormula,
        dependencies: newDependencies,
        display,
        error: "circular_dependency",
      } satisfies CellState;
    } else {
      throw error;
    }
  }
  return {
    cellStates: newData,
    promises,
  };
};
