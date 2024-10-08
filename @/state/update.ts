// @/state/update.ts
import {
  DEFAULT_CELL_BORDER_WIDTH,
  DEFAULT_CELL_HEIGHT,
  DEFAULT_CELL_PADDING,
  DEFAULT_FONT_FAMILY,
  DEFAULT_FONT_SIZE,
  DEFAULT_LINE_HEIGHT,
} from "@/constants";
import { generateFunctionBody } from "@/lib/llm";
import { updateCellFormula } from "@/lib/table/formula";
import { calculateTextHeight } from "@/lib/utils";
import { Resource } from "@/types/resource";
import { SecretKeys } from "@/types/secret";
import {
  LlmFunctionType,
  type FunctionBindingsWithFunctionsType,
  type SheetState,
  type UpdateCellArgsType,
} from "@/types/sheet";

export const handleValueUpdate = (
  state: SheetState,
  payload: UpdateCellArgsType
) => {
  const { row, col, value, display } = payload;
  const existingCell = state.cellStates[col][row];
  const displayMode = display || existingCell?.display || "hide";
  let maxRowHeight = 0;
  const font = `${DEFAULT_FONT_SIZE}px ${DEFAULT_FONT_FAMILY}`;
  for (let i = 0; i < state.headerStates.length; i++) {
    const cell = state.cellStates[i][row];
    if (cell) {
      const text = i === col ? value : cell.value;
      const display = i === col ? displayMode : cell.display;
      const height = calculateTextHeight({
        text,
        width:
          state.headerStates[i].width -
          DEFAULT_CELL_BORDER_WIDTH * 4 -
          DEFAULT_CELL_PADDING * 4,
        font,
        display,
        lineHeight: DEFAULT_LINE_HEIGHT,
      });
      maxRowHeight = Math.max(maxRowHeight, height, DEFAULT_CELL_HEIGHT);
    }
  }
  const newState: SheetState = {
    ...state,
    editingValue: "",
    editingCellPosition: null,
    cellStates: state.cellStates.map((column, colIndex) =>
      colIndex === col
        ? {
            ...column,
            [row]: {
              ...(state.cellStates[colIndex][row] ?? {}),
              value: value,
              display: displayMode,
            },
          }
        : column
    ),
    rowStates: {
      ...state.rowStates,
      [row]: {
        ...state.rowStates[row],
        height: maxRowHeight,
      },
    },
  };
  return newState;
};

function transformFunctionBindings({
  functionBindings,
  secretKeys,
}: {
  functionBindings: FunctionBindingsWithFunctionsType;
  secretKeys: SecretKeys;
}): { [functionName: string]: { id: string; functionBody: string } } {
  const transformedBindings: {
    [functionName: string]: { id: string; functionBody: string };
  } = {};
  functionBindings.functionBindings.forEach((binding) => {
    if (binding.function) {
      if (binding.function.type === "llm") {
        transformedBindings[binding.name.toUpperCase()] = {
          id: binding.function.id,
          functionBody: generateFunctionBody({
            functionData: binding.function as LlmFunctionType & {
              resource: Resource;
            },
            secretKeys,
          }),
        };
      } else {
        transformedBindings[binding.name.toUpperCase()] = {
          id: binding.function.id,
          functionBody: binding.function.functionBody,
        };
      }
    }
  });
  return transformedBindings;
}

export const handleFormulaUpdate = ({
  state,
  payload,
  functionBindings,
  secretKeys,
}: {
  state: SheetState;
  payload: UpdateCellArgsType;
  functionBindings: FunctionBindingsWithFunctionsType;
  secretKeys: SecretKeys;
}) => {
  const { row, col, value, display } = payload;
  const transformedFunctionBindings = transformFunctionBindings({
    functionBindings,
    secretKeys,
  });
  const { cellStates, promises } = updateCellFormula({
    prevData: state.cellStates,
    colIndex: col,
    rowIndex: row,
    newFormula: value,
    functionBindings: transformedFunctionBindings,
    display,
  });
  return {
    ...state,
    editingValue: "",
    editingCellPosition: null,
    cellStates,
    promises
  };
};
