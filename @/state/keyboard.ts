// @/state/keyboard.ts
import { calculateTextHeight, getSortedCellRange } from "@/lib/utils";
import {
  CellState,
  ClearCellsAction,
  CopyCellsAction,
  PasteCellsAction,
  type CellAddress,
  type SheetState,
} from "@/types/sheet";
import { handleSelectedToEditing } from "./common";
// @/state/sheetReducer.ts
import {
  DEFAULT_CELL_BORDER_WIDTH,
  DEFAULT_CELL_HEIGHT,
  DEFAULT_CELL_PADDING,
  DEFAULT_COLUMN_WIDTH,
  DEFAULT_FONT_FAMILY,
  DEFAULT_FONT_SIZE,
  DEFAULT_LINE_HEIGHT,
} from "@/constants";
import { applyAction } from "./sheetReducer";

export const handleCopy = (
  action: CopyCellsAction,
  state: SheetState
): SheetState => {
  const { start, end } = action.payload;
  const { start: sortedStart, end: sortedEnd } = getSortedCellRange({
    maybeStart: start,
    maybeEnd: end,
  });

  const copiedCells: CellState[][] = [];
  for (let row = sortedStart.row; row <= sortedEnd.row; row++) {
    const rowData: CellState[] = [];
    for (let col = sortedStart.col; col <= sortedEnd.col; col++) {
      const cell = state.cellStates[col]?.[row] || {
        value: "",
        display: "hide",
      };
      rowData.push({ ...cell });
    }
    copiedCells.push(rowData);
  }

  // Serialize copiedCells to TSV format for clipboard
  const tsvData = copiedCells
    .map(row => row.map(cell => `"${cell.value.replace(/"/g, '""')}"`).join('\t'))
    .join('\n');

  // Copy serialized data to the system clipboard
  if (navigator.clipboard && window.isSecureContext) {
    try {
      void navigator.clipboard.writeText(tsvData);
      console.log('Copied to system clipboard successfully.');
    } catch (error) {
      console.error('Failed to copy to system clipboard:', error);
    }
  }

  return {
    ...state,
    clipboard: {
      cells: copiedCells,
      start: sortedStart,
      end: sortedEnd,
    },
    showClipboard: true,
  };
};

export const handlePaste = (
  action: PasteCellsAction,
  state: SheetState
): SheetState => {
  if (!state.clipboard) {
    return state; // Nothing to paste
  }

  const { target } = action.payload;
  const { cells } = state.clipboard;

  const numRows = cells.length;
  const numCols = cells[0]?.length || 0;

  const endRow = target.row + numRows - 1;
  const endCol = target.col + numCols - 1;

  const newCellStates = [...state.cellStates];
  const newRowStates = { ...state.rowStates };

  // Optionally expand the sheet if paste exceeds current boundaries
  let updatedRowCount = state.rowCount;
  const updatedColumnCount = state.cellStates.length;

  if (endRow >= updatedRowCount) {
    updatedRowCount = endRow + 1;
  }

  if (endCol >= updatedColumnCount) {
    // Expand cellStates and headerStates
    for (let col = updatedColumnCount; col <= endCol; col++) {
      newCellStates[col] = {};
      state.headerStates[col] = {
        value: String.fromCharCode(65 + col),
        type: "text",
        width: DEFAULT_COLUMN_WIDTH, // Ensure DEFAULT_COLUMN_WIDTH is defined
      };
    }
  }

  // Update rowCount if necessary
  // This assumes that rowCount is used elsewhere to determine sheet dimensions
  const finalRowCount = updatedRowCount;

  cells.forEach((rowData, rowIndex) => {
    rowData.forEach((cell, colIndex) => {
      const pasteRow = target.row + rowIndex;
      const pasteCol = target.col + colIndex;

      // Skip if pasteRow or pasteCol exceeds boundaries even after expansion
      if (pasteCol >= newCellStates.length || pasteRow >= finalRowCount) {
        return;
      }

      newCellStates[pasteCol] = {
        ...newCellStates[pasteCol],
        [pasteRow]: { ...cell },
      };

      // Recalculate row height if necessary
      const textWidth =
        state.headerStates[pasteCol].width -
        DEFAULT_CELL_BORDER_WIDTH * 4 -
        DEFAULT_CELL_PADDING * 4;
      const height = calculateTextHeight({
        text: cell.value,
        width: textWidth,
        font: `${DEFAULT_FONT_SIZE}px ${DEFAULT_FONT_FAMILY}`,
        display: cell.display,
        lineHeight: DEFAULT_LINE_HEIGHT,
      });

      newRowStates[pasteRow] = {
        ...newRowStates[pasteRow],
        height: Math.max(
          newRowStates[pasteRow]?.height || 0,
          height,
          DEFAULT_CELL_HEIGHT
        ),
      };
    });
  });

  return {
    ...state,
    cellStates: newCellStates,
    rowStates: newRowStates,
    rowCount: finalRowCount,
    showClipboard: false,
    selectedCellPosition: target,
    selectedCellRange: {
      start: target,
      end: { row: endRow, col: endCol },
    },
  };
};

export const handleClear = (action: ClearCellsAction, state: SheetState) => {
  const { start, end } = action.payload;
  const { start: sortedStart, end: sortedEnd } = getSortedCellRange({
    maybeStart: start,
    maybeEnd: end,
  });
  return {
    ...state,
    cellStates: state.cellStates.map((column, colIndex) => {
      const newColumn = { ...column };
      for (
        let rowIndex = sortedStart.row;
        rowIndex <= sortedEnd.row;
        rowIndex++
      ) {
        if (colIndex >= sortedStart.col && colIndex <= sortedEnd.col) {
          newColumn[rowIndex] = {
            value: "",
            display: "hide",
          };
        }
      }
      return newColumn;
    }),
  };
};

const keyMap: Record<string, (state: SheetState) => SheetState> = {
  ArrowUp: (state: SheetState) => handleMoveSelectedCellPosition(state, "up"),
  "Shift+ArrowUp": (state: SheetState) =>
    handleExpandSelectedRange(state, "up"),
  ArrowDown: (state: SheetState) =>
    handleMoveSelectedCellPosition(state, "down"),
  "Shift+ArrowDown": (state: SheetState) =>
    handleExpandSelectedRange(state, "down"),
  ArrowLeft: (state: SheetState) =>
    handleMoveSelectedCellPosition(state, "left"),
  "Shift+ArrowLeft": (state: SheetState) =>
    handleExpandSelectedRange(state, "left"),
  ArrowRight: (state: SheetState) =>
    handleMoveSelectedCellPosition(state, "right"),
  "Shift+ArrowRight": (state: SheetState) =>
    handleExpandSelectedRange(state, "right"),
  Enter: (state: SheetState) => {
    if (state.editingCellPosition) {
      return handleMoveSelectedCellPosition(state, "down");
    }
    if (state.selectedCellPosition) {
      return handleSelectedToEditing(state);
    }
    return state;
  },
  Backspace: (state: SheetState) => {
    if (state.selectedRows.length > 0) {
      return handleClear(
        {
          type: "CLEAR_CELLS",
          payload: {
            start: {
              row: state.selectedRows[0],
              col: 0,
            },
            end: {
              row: state.selectedRows[state.selectedRows.length - 1],
              col: state.headerStates.length - 1,
            },
          },
        },
        state
      );
    } else if (state.selectedCellRange && !state.editingCellPosition) {
      return handleClear(
        {
          type: "CLEAR_CELLS",
          payload: state.selectedCellRange,
        },
        state
      );
    } else if (state.selectedCellPosition && !state.editingCellPosition) {
      return handleClear(
        {
          type: "CLEAR_CELLS",
          payload: {
            start: state.selectedCellPosition,
            end: state.selectedCellPosition,
          },
        },
        state
      );
    }
    return state;
  },
  "Meta+c": (state: SheetState) => {
    if (state.selectedRows.length > 0) {
      return handleCopy(
        {
          type: "COPY_CELLS",
          payload: {
            start: {
              row: state.selectedRows[0],
              col: 0,
            },
            end: {
              row: state.selectedRows[state.selectedRows.length - 1],
              col: state.headerStates.length - 1,
            },
          },
        },
        state
      );
    } else if (state.selectedCellRange) {
      return handleCopy(
        {
          type: "COPY_CELLS",
          payload: state.selectedCellRange,
        },
        state
      );
    } else if (state.selectedCellPosition) {
      return handleCopy(
        {
          type: "COPY_CELLS",
          payload: {
            start: state.selectedCellPosition,
            end: state.selectedCellPosition,
          },
        },
        state
      );
    }
    return state;
  },
  "Meta+v": (state: SheetState) => {
    if (state.clipboard && state.selectedCellPosition) {
      return handlePaste(
        {
          type: "PASTE_CELLS",
          payload: { target: state.selectedCellPosition },
        },
        state
      );
    }
    return state;
  },
  "Meta+a": (state: SheetState) => {
    const start: CellAddress = { row: 0, col: 0 };
    const end: CellAddress = {
      row: state.rowCount - 1,
      col: state.headerStates.length - 1,
    };
    return {
      ...state,
      selectedCellRange: { start, end },
      selectedCellPosition: null,
      selectedRows: [],
    };
  },
  "Meta+z": (state: SheetState) => applyAction(state, { type: "UNDO" }),
  "Meta+Shift+z": (state: SheetState) => applyAction(state, { type: "REDO" }),
};

export const handleTableKeyboardEvent = (
  state: SheetState,
  event: React.KeyboardEvent
): SheetState => {
  const keyCombo = [
    event.ctrlKey && "Ctrl",
    event.altKey && "Alt",
    event.shiftKey && "Shift",
    event.metaKey && "Meta",
  ]
    .filter(Boolean)
    .sort();

  keyCombo.push(event.key);
  const command = keyCombo.join("+");
  const handler = keyMap[command as keyof typeof keyMap];
  return handler ? handler(state) : state;
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
        selectedCellRange: null,
        selectedCellPosition: {
          row: Math.max(0, row - 1),
          col,
        },
      };
    case "down":
      return {
        ...state,
        selectedCellRange: null,
        selectedCellPosition: {
          row: Math.min(state.rowCount - 1, row + 1),
          col,
        },
      };
    case "left":
      return {
        ...state,
        selectedCellRange: null,
        selectedCellPosition: {
          row,
          col: Math.max(0, col - 1),
        },
      };
    case "right":
      return {
        ...state,
        selectedCellRange: null,
        selectedCellPosition: {
          row,
          col: Math.min(state.cellStates.length - 1, col + 1),
        },
      };
  }
};

const handleExpandSelectedRange = (
  state: SheetState,
  direction: "up" | "down" | "left" | "right"
): SheetState => {
  if (!state.selectedCellPosition) {
    return state;
  }

  const start = state.selectedCellRange?.start ?? state.selectedCellPosition;
  const end = state.selectedCellRange?.end ?? state.selectedCellPosition;

  let newEnd: CellAddress;
  switch (direction) {
    case "up":
      newEnd = { row: Math.max(0, end.row - 1), col: end.col };
      break;
    case "down":
      newEnd = { row: Math.min(state.rowCount - 1, end.row + 1), col: end.col };
      break;
    case "left":
      newEnd = {
        row: end.row,
        col: Math.max(0, end.col - 1),
      };
      break;
    case "right":
      newEnd = {
        row: end.row,
        col: Math.min(state.headerStates.length - 1, end.col + 1),
      };
      break;
  }

  return {
    ...state,
    selectedCellRange: { start, end: newEnd },
  };
};
