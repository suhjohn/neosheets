import {
  cellAddressToString,
  ColumnData,
  stringToCellAddress,
} from "@/types/sheet";
import {
  CircularDependencyError,
  evaluateFormula,
  functionBindingsType,
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
  prevData: ColumnData[];
  colIndex: number;
  rowIndex: number;
  newFormula: string;
  functionBindings: functionBindingsType;
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
  const newDependencies = getCellDependencies(newFormula);

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
      };
    }
    if (!newData[col][row].dependencies)
      newData[col][row].dependencies = new Set();
    newData[col][row].dependencies.add(cellAddress);
  });

  // Update the current cell
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
    newData[colIndex][rowIndex] = {
      value: newValue,
      formula: newFormula,
      dependencies: newDependencies,
      display,
    };
  } catch (error) {
    if (error instanceof CircularDependencyError) {
      newData[colIndex][rowIndex] = {
        value: "#REF!",
        formula: newFormula,
        dependencies: newDependencies,
        display,
        error: "circular_dependency",
      };
    } else {
      throw error;
    }
  }
  return newData;
};
