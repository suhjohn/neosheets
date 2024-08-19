import { type CellAddress, type SheetState } from "@/types/sheet";
import { handleSelectedToEditing } from "./common";

export const handleKeyboardEvent = (
  state: SheetState,
  event: React.KeyboardEvent
): SheetState => {
  switch (event.key) {
    case "ArrowUp":
      if (event.shiftKey) {
        return handleExpandSelectedRange({
          state,
          newEnd: {
            row: Math.max(0, state.selectedCellPosition?.row || 0 - 1),
            col: state.selectedCellPosition?.col || 0,
          },
        });
      }
      return handleMoveSelectedCellPosition(state, "up");
    case "ArrowDown":
      if (event.shiftKey) {
        return handleExpandSelectedRange({
          state,
          newEnd: {
            row: Math.min(
              state.rowCount - 1,
              state.selectedCellPosition?.row || 0 + 1
            ),
            col: state.selectedCellPosition?.col || 0,
          },
        });
      }
      return handleMoveSelectedCellPosition(state, "down");
    case "ArrowLeft":
      if (event.shiftKey) {
        return handleExpandSelectedRange({
          state,
          newEnd: {
            row: state.selectedCellPosition?.row || 0,
            col: Math.max(0, state.selectedCellPosition?.col || 0 - 1),
          },
        });
      }
      return handleMoveSelectedCellPosition(state, "left");
    case "ArrowRight":
      if (event.shiftKey) {
        return handleExpandSelectedRange({
          state,
          newEnd: {
            row: state.selectedCellPosition?.row || 0,
            col: Math.min(
              state.cellStates.length - 1,
              state.selectedCellPosition?.col || 0 + 1
            ),
          },
        });
      }
      return handleMoveSelectedCellPosition(state, "right");
    case "Escape":
      return handleEscapeKey(state);
    case "Enter":
      if (state.editingCellPosition) {
        return handleMoveSelectedCellPosition(state, "down");
      }
      if (state.selectedCellPosition) {
        return handleSelectedToEditing(state);
      }
      return state;
    case "Backspace": {
      if (state.selectedCellPosition && !state.editingCellPosition) {
        return {
          ...state,
          cellStates: state.cellStates.map((column, colIndex) =>
            colIndex === state.selectedCellPosition?.col
              ? {
                  ...column,
                  [state.selectedCellPosition?.row]: {
                    value: "",
                    display: "hide",
                  },
                }
              : column
          ),
        };
      }
      return state;
    }
    default:
      return state;
  }
};

const handleMoveSelectedCellPosition = (
  state: SheetState,
  direction: "up" | "down" | "left" | "right"
): SheetState => {
  if (!state.selectedCellPosition) {
    return state;
  }
  const { row, col } = state.selectedCellPosition;
  switch (direction) {
    case "up":
      return {
        ...state,
        selectedCellPosition: {
          row: Math.max(0, row - 1),
          col,
        },
      };
    case "down":
      return {
        ...state,
        selectedCellPosition: {
          row: Math.min(state.rowCount - 1, row + 1),
          col,
        },
      };
    case "left":
      return {
        ...state,
        selectedCellPosition: {
          row,
          col: Math.max(0, col - 1),
        },
      };
    case "right":
      return {
        ...state,
        selectedCellPosition: {
          row,
          col: Math.min(state.cellStates.length - 1, col + 1),
        },
      };
  }
};

const handleExpandSelectedRange = ({
  state,
  newEnd,
}: {
  state: SheetState;
  newEnd: CellAddress;
}): SheetState => {
  if (!state.selectedCellPosition) {
    return state;
  }
  if (!state.selectedCellRange) {
    return {
      ...state,
      selectedCellRange: {
        start: state.selectedCellPosition,
        end: newEnd,
      },
    };
  }
  const { start, end } = state.selectedCellRange;
  const updatedEnd = {
    row: Math.max(start.row, Math.min(end.row, newEnd.row)),
    col: Math.max(start.col, Math.min(end.col, newEnd.col)),
  };
  return {
    ...state,
    selectedCellRange: {
      start,
      end: updatedEnd,
    },
  };
};

const handleEscapeKey = (state: SheetState): SheetState => {
  return {
    ...state,
    editingCellPosition: null,
    editingValue: "",
  };
};
