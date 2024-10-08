// @/state/sheetReducer.ts
import {
  DEFAULT_CELL_BORDER_WIDTH,
  DEFAULT_CELL_HEIGHT,
  DEFAULT_CELL_PADDING,
  DEFAULT_COLUMN_COUNT,
  DEFAULT_COLUMN_WIDTH,
  DEFAULT_FONT_FAMILY,
  DEFAULT_FONT_SIZE,
  DEFAULT_LINE_HEIGHT,
  DEFAULT_ROW_COUNT,
} from "@/constants";
import { DomainSetting } from "@/types/domain";
import { SecretKeys } from "@/types/secret";
import {
  InsertColumnPayload,
  SheetAction,
  type CellState,
  type CellStates,
  type ColumnState,
  type FunctionBindingsWithFunctionsType,
  type RowState,
  type SheetState,
} from "@/types/sheet"; // Ensure PERFORM_AUTOFILL is imported
import {
  calculateTextHeight,
  deepMerge,
  generateExcelHeaders,
  generateFillSequence,
} from "../lib/utils";
import { handleSelectedToEditing } from "./common";
import {
  handleClear,
  handleCopy,
  handlePaste,
  handleTableKeyboardEvent,
} from "./keyboard";
import { handleCellUpdate } from "./update";

const DEFAULT_CELL_STATE: CellState = {
  value: "",
  display: "hide",
};

export const initialState: SheetState = {
  id: "",
  name: `Sheet 1`,
  cellStates: Array.from({ length: DEFAULT_COLUMN_COUNT }, () => ({
    ...Array.from({ length: DEFAULT_ROW_COUNT }, () => {
      return {
        // row col
        value: ``,
        display: "hide",
      };
    }),
  })),
  selectedCellPosition: { row: 0, col: 0 },
  editingCellPosition: null,
  headerStates: generateExcelHeaders(DEFAULT_COLUMN_COUNT).map((header) => ({
    value: header,
    type: "text",
    width: DEFAULT_COLUMN_WIDTH,
  })),
  rowStates: {},
  editingValue: "",
  rowCount: DEFAULT_ROW_COUNT,
  selectedCellRange: null,
  selectedRows: [],
  clipboard: null,
  undoStack: [],
  redoStack: [],
  promises: {},
  autofillTarget: null,
};

export const applyAction = (
  state: SheetState,
  action: SheetAction,
  functionBindings?: FunctionBindingsWithFunctionsType,
  secretKeys?: SecretKeys,
  domainSettings?: DomainSetting[]
): SheetState => {
  switch (action.type) {
    case "SET_CELLS": {
      const cellMap = action.payload; // `col-row` -> CellState
      const newCellStates = state.cellStates.map((column, colIndex) => {
        const updatedColumn = { ...column };

        // Iterate through the cellMap and update relevant cells
        Object.entries(cellMap).forEach(([key, cellState]) => {
          const [colStr, rowStr] = key.split("-");
          const col = parseInt(colStr, 10);
          const row = parseInt(rowStr, 10);

          if (col === colIndex) {
            updatedColumn[row] = {
              ...updatedColumn[row],
              ...cellState,
            };
          }
        });

        return updatedColumn;
      });

      return {
        ...state,
        cellStates: newCellStates,
      };
    }
    case "HANDLE_RESIZE_COLUMN": {
      const newState = {
        ...state,
        headerStates: state.headerStates.map((header, colIndex) =>
          colIndex === action.payload.colIndex
            ? { ...header, width: action.payload.width }
            : header
        ),
      };
      newState.rowStates = Object.fromEntries(
        Object.entries(newState.rowStates).map(([key, value]) => {
          const rowIndex = parseInt(key);
          let maxRowHeight = 0;
          for (let i = 0; i < newState.headerStates.length; i++) {
            const cell = newState.cellStates[i][rowIndex];
            if (cell) {
              const text = cell.value;
              const display = cell.display;
              const height = calculateTextHeight({
                text,
                width:
                  newState.headerStates[i].width -
                  DEFAULT_CELL_BORDER_WIDTH * 4 -
                  DEFAULT_CELL_PADDING * 4,
                font: `${DEFAULT_FONT_SIZE}px ${DEFAULT_FONT_FAMILY}`,
                lineHeight: DEFAULT_LINE_HEIGHT,
                display,
              });
              maxRowHeight = Math.max(
                maxRowHeight,
                height,
                DEFAULT_CELL_HEIGHT
              );
            }
          }
          return [key, { ...value, height: maxRowHeight }];
        })
      );
      return newState;
    }
    case "HANDLE_UNCLICKED_TO_CLICKED_CELL":
      return {
        ...state,
        selectedCellPosition: action.payload,
        selectedCellRange: null,
        selectedRows: [],
        editingCellPosition: null,
      };
    case "HANDLE_DRAG_CELLS": {
      if (!state.selectedCellPosition) {
        return state;
      }
      return {
        ...state,
        selectedRows: [],
        selectedCellRange: {
          start: {
            row: Math.min(state.selectedCellPosition.row, action.payload.row),
            col: Math.min(state.selectedCellPosition.col, action.payload.col),
          },
          end: {
            row: Math.max(state.selectedCellPosition.row, action.payload.row),
            col: Math.max(state.selectedCellPosition.col, action.payload.col),
          },
        },
      };
    }
    case "HANDLE_DOUBLE_CLICK_CELL": {
      return handleSelectedToEditing(state);
    }
    case "HANDLE_TABLE_KEYBOARD_EVENT": {
      return handleTableKeyboardEvent(state, action.payload);
    }
    case "HANDLE_BLUR_CELL": {
      return {
        ...state,
        editingValue: "",
        editingCellPosition: null,
      };
    }
    case "HANDLE_UPDATE_CELL": {
      return handleCellUpdate({
        state,
        payload: action.payload,
        functionBindings,
        secretKeys,
        domainSettings,
      });
    }
    case "HANDLE_UPDATE_CELL_RANGE": {
      const { range, value, display } = action.payload;
      const { start, end } = range;

      // Clone cellStates and rowStates to maintain immutability
      const newCellStates = state.cellStates.map((column) => ({ ...column }));
      const newRowStates = { ...state.rowStates };

      // Precompute font and dimensions to avoid recalculating inside loops
      const font = `${DEFAULT_FONT_SIZE}px ${DEFAULT_FONT_FAMILY}`;

      for (let row = start.row; row <= end.row; row++) {
        let maxRowHeight = DEFAULT_CELL_HEIGHT;

        for (let col = start.col; col <= end.col; col++) {
          const existingCell = state.cellStates[col]?.[row];
          const displayMode = display || existingCell?.display || "hide";
          const newValue =
            value !== undefined ? value : existingCell?.value || "";

          // Update the cell state
          newCellStates[col][row] = {
            ...newCellStates[col][row],
            value: newValue,
            display: displayMode,
          };

          // Calculate the height for the updated cell
          const cellWidth =
            state.headerStates[col].width -
            DEFAULT_CELL_BORDER_WIDTH * 4 -
            DEFAULT_CELL_PADDING * 4;

          const cellHeight = calculateTextHeight({
            text: newValue,
            width: cellWidth,
            font,
            lineHeight: DEFAULT_LINE_HEIGHT,
            display: displayMode,
          });

          // Determine the maximum height required for the row
          maxRowHeight = Math.max(maxRowHeight, cellHeight);
        }

        // After updating cells in the range, check if other cells in the row affect the row height
        for (let col = 0; col < state.headerStates.length; col++) {
          if (col < start.col || col > end.col) {
            const cell = state.cellStates[col]?.[row];
            if (cell) {
              const cellWidth =
                state.headerStates[col].width -
                DEFAULT_CELL_BORDER_WIDTH * 4 -
                DEFAULT_CELL_PADDING * 4;

              const cellHeight = calculateTextHeight({
                text: cell.value || "",
                width: cellWidth,
                font,
                lineHeight: DEFAULT_LINE_HEIGHT,
                display: cell.display,
              });

              maxRowHeight = Math.max(maxRowHeight, cellHeight);
            }
          }
        }

        // Update the row height if it has changed
        if (newRowStates[row]?.height !== maxRowHeight) {
          newRowStates[row] = {
            ...newRowStates[row],
            height: maxRowHeight,
          };
        }
      }

      return {
        ...state,
        cellStates: newCellStates,
        rowStates: newRowStates,
      };
    }
    case "SET_SELECTED_CELL_POSITION":
      return {
        ...state,
        selectedCellPosition: action.payload,
        selectedRows: [],
        selectedCellRange: null,
      };
    case "SET_EDITING_CELL_POSITION":
      return { ...state, editingCellPosition: action.payload };
    case "INSERT_ROW": {
      const { rowIndex, rowData } = action.payload;

      // Create new cellStates with the row inserted
      const newCellStates = state.cellStates.map((column, colIndex) => {
        const newColumn = { ...column };

        // Shift cell states down for rows at or below the insertion point
        Object.keys(newColumn)
          .map(Number)
          .sort((a, b) => b - a)
          .forEach((rowKey) => {
            if (rowKey >= rowIndex) {
              newColumn[rowKey + 1] = column[rowKey];
              delete newColumn[rowKey];
            }
          });

        // Insert the new row data if provided
        if (rowData && rowData.cellStates[colIndex]) {
          newColumn[rowIndex] = rowData.cellStates[colIndex];
        } else {
          newColumn[rowIndex] = DEFAULT_CELL_STATE;
        }

        return newColumn;
      });

      // Shift rowStates down and insert new rowState
      const newRowStates: { [key: number]: RowState } = {};
      Object.keys(state.rowStates)
        .map(Number)
        .sort((a, b) => b - a)
        .forEach((key) => {
          const numericKey = Number(key);
          if (numericKey >= rowIndex) {
            newRowStates[numericKey + 1] = state.rowStates[numericKey];
            delete newRowStates[numericKey];
          } else {
            newRowStates[numericKey] = state.rowStates[numericKey];
          }
        });

      // Insert the new rowState if provided
      if (rowData && rowData.rowState) {
        newRowStates[rowIndex] = rowData.rowState;
      } else {
        newRowStates[rowIndex] = {
          height: DEFAULT_CELL_HEIGHT,
          specifiedHeight: null,
          hidden: false,
        };
      }

      // Update the rowCount to accommodate the new row if necessary
      const updatedRowCount = Math.max(state.rowCount, rowIndex + 1);

      // Adjust selected positions
      let updatedSelectedCellPosition = state.selectedCellPosition;
      if (
        state.selectedCellPosition &&
        state.selectedCellPosition.row >= rowIndex
      ) {
        updatedSelectedCellPosition = {
          ...state.selectedCellPosition,
          row: state.selectedCellPosition.row + 1,
        };
      }

      let updatedSelectedCellRange = state.selectedCellRange;
      if (state.selectedCellRange) {
        const { start, end } = state.selectedCellRange;
        const newStart =
          start.row >= rowIndex ? { ...start, row: start.row + 1 } : start;
        const newEnd = end.row >= rowIndex ? { ...end, row: end.row + 1 } : end;
        updatedSelectedCellRange = { start: newStart, end: newEnd };
      }

      return {
        ...state,
        cellStates: newCellStates,
        rowStates: newRowStates,
        rowCount: updatedRowCount,
        selectedCellPosition: updatedSelectedCellPosition,
        selectedCellRange: updatedSelectedCellRange,
      };
    }
    case "SET_EDITING_VALUE":
      return { ...state, editingValue: action.payload };
    case "DELETE_ROWS": {
      const rowsToDelete = action.payload.sort((a, b) => b - a); // Sort descending
      let newCellStates = [...state.cellStates];
      const newRowStates = { ...state.rowStates };
      let newRowCount = state.rowCount;

      for (const rowIndex of rowsToDelete) {
        // Remove row from cellStates
        newCellStates = newCellStates.map((column) => {
          const newColumn = { ...column };
          delete newColumn[rowIndex];
          // Shift cells up for rows below the deleted row
          Object.keys(newColumn)
            .map(Number)
            .filter((key) => key > rowIndex)
            .sort((a, b) => a - b)
            .forEach((key) => {
              newColumn[key - 1] = newColumn[key];
              delete newColumn[key];
            });
          return newColumn;
        });

        // Remove rowState
        delete newRowStates[rowIndex];
        // Shift rowStates up for rows below the deleted row
        Object.keys(newRowStates)
          .map(Number)
          .filter((key) => key > rowIndex)
          .sort((a, b) => a - b)
          .forEach((key) => {
            newRowStates[key - 1] = newRowStates[key];
            delete newRowStates[key];
          });

        // Decrement the rowCount
        newRowCount -= 1;
      }

      // Adjust selected positions
      let updatedSelectedCellPosition = state.selectedCellPosition;
      if (
        state.selectedCellPosition &&
        state.selectedCellPosition.row >= rowsToDelete[0]
      ) {
        const offset = rowsToDelete.filter(
          (row) => row <= state.selectedCellPosition!.row
        ).length;
        updatedSelectedCellPosition = {
          ...state.selectedCellPosition,
          row: state.selectedCellPosition.row - offset,
        };
      }

      let updatedSelectedCellRange = state.selectedCellRange;
      if (state.selectedCellRange) {
        const { start, end } = state.selectedCellRange;
        const deletedCount = rowsToDelete.filter(
          (row) => row <= end.row
        ).length;
        const newStart =
          start.row > rowsToDelete[rowsToDelete.length - 1]
            ? { ...start, row: start.row - deletedCount }
            : start;
        const newEnd =
          end.row > rowsToDelete[rowsToDelete.length - 1]
            ? { ...end, row: end.row - deletedCount }
            : end;
        updatedSelectedCellRange = { start: newStart, end: newEnd };
      }

      return {
        ...state,
        cellStates: newCellStates,
        rowStates: newRowStates,
        rowCount: newRowCount,
        selectedCellPosition: updatedSelectedCellPosition,
        selectedCellRange: updatedSelectedCellRange,
      };
    }
    case "INSERT_COLUMN": {
      const { colIndex, columnState, cellStates } = action.payload;

      // Define default column state if not provided
      const defaultColumnState: ColumnState = {
        value: `column_${colIndex + 1}`,
        type: "text",
        width: DEFAULT_COLUMN_WIDTH,
      };

      // Define default cell states if not provided
      const defaultCellStates: CellStates = {};
      for (let row = 0; row < state.rowCount; row++) {
        defaultCellStates[row] = {
          value: "",
          display: "hide",
        };
      }

      const newCellStates = [
        ...state.cellStates.slice(0, colIndex),
        cellStates || defaultCellStates, // Ensure it's a Record<number, CellState>
        ...state.cellStates.slice(colIndex),
      ];

      const newHeaderStates = [
        ...state.headerStates.slice(0, colIndex),
        columnState || defaultColumnState,
        ...state.headerStates.slice(colIndex),
      ];

      return {
        ...state,
        cellStates: newCellStates,
        headerStates: newHeaderStates,
      };
    }
    case "DELETE_COLUMN":
      return {
        ...state,
        cellStates: state.cellStates.filter(
          (_, colIndex) => colIndex !== action.payload
        ),
        headerStates: state.headerStates.filter(
          (_, colIndex) => colIndex !== action.payload
        ),
      };
    case "CLEAR_CELLS": {
      return handleClear(action, state);
    }
    case "FORMAT_CELLS": {
      const {
        start: formatStart,
        end: formatEnd,
        fontFamily,
        fontSize,
      } = action.payload;
      return {
        ...state,
        cellStates: state.cellStates.map((column, colIndex) => {
          const newColumn = { ...column };
          for (
            let rowIndex = formatStart.row;
            rowIndex <= formatEnd.row;
            rowIndex++
          ) {
            if (colIndex >= formatStart.col && colIndex <= formatEnd.col) {
              newColumn[rowIndex] = {
                ...newColumn[rowIndex],
                fontFamily,
                fontSize,
              };
            }
          }
          return newColumn;
        }),
      };
    }
    case "HANDLE_RESIZE_ROWS": {
      const rows = action.payload;
      const newRowStates: { [row: number]: RowState } = {};
      rows.forEach(({ rowIndex, height }) => {
        newRowStates[rowIndex] = {
          ...state.rowStates[rowIndex],
          specifiedHeight: height,
        };
      });
      return {
        ...state,
        rowStates: {
          ...state.rowStates,
          ...newRowStates,
        },
      };
    }
    case "HANDLE_DRAG_ROWS":
      return {
        ...state,
        selectedRows: action.payload.sort((a, b) => a - b),
        selectedCellRange: null,
        selectedCellPosition: null,
      };
    case "SET_SHEET_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "COPY_CELLS": {
      return handleCopy(action, state);
    }
    case "PASTE_CELLS": {
      return handlePaste(action, state);
    }
    case "INSERT_ROWS": {
      const { rows } = action.payload;

      // Sort rows in ascending order of rowIndex to avoid conflicts during insertion
      const sortedRows = [...rows].sort((a, b) => a.rowIndex - b.rowIndex);

      let newState = state;
      for (const row of sortedRows) {
        // For each row, create an INSERT_ROW action and apply it
        const insertRowAction: SheetAction = {
          type: "INSERT_ROW",
          payload: {
            rowIndex: row.rowIndex,
            rowData: row.rowData,
          },
        };
        newState = applyAction(
          newState,
          insertRowAction,
          functionBindings,
          secretKeys,
          domainSettings
        );
      }

      return newState;
    }
    case "UNDO": {
      if (state.undoStack.length === 0) return state;
      const inverseAction = state.undoStack[0];
      const newUndoStack = state.undoStack.slice(1, state.undoStack.length);
      const originalAction = getInverseAction(state, inverseAction);
      const newRedoStack = [...state.redoStack];
      if (originalAction) {
        newRedoStack.unshift(originalAction);
      }
      const newState = applyAction(
        state,
        inverseAction,
        functionBindings,
        secretKeys,
        domainSettings
      );
      return {
        ...newState,
        undoStack: newUndoStack.slice(0, 500),
        redoStack: newRedoStack.slice(0, 500),
      };
    }
    case "REDO": {
      if (state.redoStack.length === 0) return state;
      const redoAction = state.redoStack[0];
      const newRedoStack = state.redoStack.slice(1, state.redoStack.length);
      const originalAction = getInverseAction(state, redoAction);
      const newUndoStack = [...state.undoStack];
      if (originalAction) {
        newUndoStack.unshift(originalAction);
      }
      const newState = applyAction(
        state,
        redoAction,
        functionBindings,
        secretKeys,
        domainSettings
      );
      return {
        ...newState,
        undoStack: newUndoStack.slice(0, 500),
        redoStack: newRedoStack.slice(0, 500),
      };
    }
    case "INITIATE_AUTOFILL": {
      // You might want to set some state to indicate autofill has started
      return state;
    }

    case "UPDATE_AUTOFILL_TARGET": {
      const { endRow, endCol } = action.payload;
      return {
        ...state,
        autofillTarget: { row: endRow, col: endCol },
      };
    }

    case "PERFORM_AUTOFILL": {
      const { fillRange } = action.payload;

      // Determine the source range for autofill
      let sourceRange;
      if (state.selectedCellRange) {
        sourceRange = state.selectedCellRange;
      } else if (state.selectedCellPosition) {
        sourceRange = {
          start: state.selectedCellPosition,
          end: state.selectedCellPosition,
        };
      } else {
        console.warn("No source range for autofill");
        return state;
      }

      // Collect existing data from the source range to determine the pattern
      const dataToFill: { [key: string]: CellState } = {};

      for (let col = sourceRange.start.col; col <= sourceRange.end.col; col++) {
        for (
          let row = sourceRange.start.row;
          row <= sourceRange.end.row;
          row++
        ) {
          const key = `${col}-${row}`;
          const cellState = state.cellStates[col]?.[row];
          if (cellState) {
            dataToFill[key] = cellState;
          }
        }
      }

      // Generate filled data using utility functions
      const filledData = generateFillSequence(dataToFill, fillRange);

      // Update cellStates and rowStates
      const newCellStates: SheetState["cellStates"] = [...state.cellStates];
      const newRowStates = { ...state.rowStates };

      Object.entries(filledData).forEach(([key, cellState]) => {
        const [colStr, rowStr] = key.split("-");
        const col = parseInt(colStr, 10);
        const row = parseInt(rowStr, 10);

        if (!newCellStates[col]) {
          newCellStates[col] = {};
        }
        newCellStates[col][row] = {
          ...newCellStates[col][row],
          ...cellState,
        };

        // Recalculate row height if necessary
        const text = cellState.value || "";
        const height = calculateTextHeight({
          text,
          width:
            state.headerStates[col].width -
            DEFAULT_CELL_BORDER_WIDTH * 4 -
            DEFAULT_CELL_PADDING * 4,
          font: `${DEFAULT_FONT_SIZE}px ${DEFAULT_FONT_FAMILY}`,
          lineHeight: DEFAULT_LINE_HEIGHT,
          display: cellState.display || "wrap",
        });
        newRowStates[row] = {
          ...newRowStates[row],
          height: Math.max(height, DEFAULT_CELL_HEIGHT),
        };
      });
      let newState = {
        ...state,
        cellStates: newCellStates,
        rowStates: newRowStates,
        autofillTarget: null,
      };
      Object.entries(filledData).forEach(([key, cellState]) => {
        const [colStr, rowStr] = key.split("-");
        const col = parseInt(colStr, 10);
        const row = parseInt(rowStr, 10);
        const res = handleCellUpdate({
          state: newState,
          payload: {
            row,
            col,
            value: cellState.value,
            display: cellState.display,
          },
          functionBindings,
          secretKeys,
          domainSettings,
        });
        const combinedPromises = deepMerge(
          newState.promises ?? {},
          res.promises ?? {}
        );
        newState = {
          ...res,
          promises: combinedPromises,
          showClipboard: false,
          autofillTarget: null,
        };
      });
      return newState;
    }
    case "IMPORT_CSV": {
      const csvData = action.payload;

      const newCellStates = [...state.cellStates];
      const newRowStates = { ...state.rowStates };
      let updatedRowCount = state.rowCount;

      csvData.forEach((row, rowIndex) => {
        row.forEach((cellValue, colIndex) => {
          if (!newCellStates[colIndex]) {
            newCellStates[colIndex] = {};
          }

          const existingCell = newCellStates[colIndex][rowIndex] || {};
          newCellStates[colIndex][rowIndex] = {
            ...existingCell,
            value: cellValue,
            display: existingCell.display || "hide",
          };
        });

        // Update row count if necessary
        if (rowIndex >= updatedRowCount) {
          updatedRowCount = rowIndex + 1;
        }

        // Initialize rowState if not present
        if (!newRowStates[rowIndex]) {
          newRowStates[rowIndex] = {
            height: DEFAULT_CELL_HEIGHT,
            specifiedHeight: null,
            hidden: false,
          };
        }
      });

      // Update column count if CSV has more columns than current state
      const newColumnCount = Math.max(
        state.headerStates.length,
        csvData[0]?.length || 0
      );

      // Add new header states if needed
      const newHeaderStates = [...state.headerStates];
      while (newHeaderStates.length < newColumnCount) {
        newHeaderStates.push({
          value: `${newHeaderStates.length + 1}`,
          type: "string",
          width: DEFAULT_COLUMN_WIDTH, // Ensure this constant is imported or defined
        });
      }

      // Adjust selected positions if necessary
      let updatedSelectedCellPosition = state.selectedCellPosition;
      if (
        state.selectedCellPosition &&
        state.selectedCellPosition.row >= updatedRowCount
      ) {
        updatedSelectedCellPosition = {
          ...state.selectedCellPosition,
          row: updatedRowCount - 1,
        };
      }

      return {
        ...state,
        cellStates: newCellStates,
        rowStates: newRowStates,
        rowCount: updatedRowCount,
        headerStates: newHeaderStates,
        selectedCellPosition: updatedSelectedCellPosition,
      };
    }
    default:
      return state;
  }
};

export const getInverseAction = (
  sheetState: SheetState,
  action: SheetAction
) => {
  switch (action.type) {
    case "HANDLE_RESIZE_COLUMN": {
      const { colIndex } = action.payload;
      const previousWidth = sheetState.headerStates[colIndex].width;
      const inverseAction: SheetAction = {
        type: "HANDLE_RESIZE_COLUMN",
        payload: { colIndex, width: previousWidth },
      };
      return inverseAction;
    }
    case "HANDLE_UPDATE_CELL": {
      const { col, row } = action.payload;
      const previousCellData = sheetState.cellStates[col][row];
      const inverseAction: SheetAction = {
        type: "HANDLE_UPDATE_CELL",
        payload: {
          col,
          row,
          value: previousCellData.value,
          display: previousCellData.display,
        },
      };
      return inverseAction;
    }
    case "INSERT_ROW": {
      const { rowIndex } = action.payload;
      const inverseAction: SheetAction = {
        type: "DELETE_ROWS",
        payload: [rowIndex],
      };
      return inverseAction;
    }
    case "DELETE_ROWS": {
      const deletedRows = action.payload; // Array of row indices
      const deletedRowData = deletedRows.map((rowIndex) => ({
        rowIndex,
        rowState: sheetState.rowStates[rowIndex],
        cellStates: sheetState.cellStates.map((column) => column[rowIndex]),
      }));

      // We need to handle multiple rows, so we'll create an "INSERT_ROWS" action
      const inverseAction: SheetAction = {
        type: "INSERT_ROWS",
        payload: {
          rows: deletedRowData,
        },
      };
      return inverseAction;
    }
    case "INSERT_COLUMN": {
      const { colIndex } = action.payload;
      const inverseAction: SheetAction = {
        type: "DELETE_COLUMN",
        payload: colIndex,
      };
      return inverseAction;
    }
    case "DELETE_COLUMN": {
      const deletedColIndex = action.payload;
      const deletedColumnState = sheetState.headerStates[deletedColIndex];
      const deletedCellStates = sheetState.cellStates[deletedColIndex];

      const deletedColumnData: InsertColumnPayload = {
        colIndex: deletedColIndex,
        columnState: deletedColumnState,
        cellStates: deletedCellStates, // Record<number, CellState>
      };

      const inverseAction: SheetAction = {
        type: "INSERT_COLUMN",
        payload: deletedColumnData, // Now matches InsertColumnPayload with Record<number, CellState>
      };
      return inverseAction;
    }
    case "MOVE_COLUMN": {
      const { fromIndex, toIndex } = action.payload;
      const inverseAction: SheetAction = {
        type: "MOVE_COLUMN",
        payload: { fromIndex: toIndex, toIndex: fromIndex },
      };
      return inverseAction;
    }
    case "CLEAR_CELLS": {
      const { start, end } = action.payload;
      const previousData: Record<string, CellState> = {};
      for (let col = start.col; col <= end.col; col++) {
        for (let row = start.row; row <= end.row; row++) {
          previousData[`${col}-${row}`] = sheetState.cellStates[col][row];
        }
      }
      const inverseAction: SheetAction = {
        type: "HANDLE_UPDATE_CELL_RANGE",
        payload: {
          range: { start, end },
          previousData, // Extend payload to include previous data
        },
      };
      return inverseAction;
    }
    case "FORMAT_CELLS": {
      const { start, end } = action.payload;
      const previousCellStates: Record<string, CellState> = {};

      for (let col = start.col; col <= end.col; col++) {
        for (let row = start.row; row <= end.row; row++) {
          previousCellStates[`${col}-${row}`] = {
            ...sheetState.cellStates[col][row],
          };
        }
      }

      const inverseAction: SheetAction = {
        type: "SET_CELLS",
        payload: previousCellStates,
      };

      return inverseAction;
    }
    case "HANDLE_RESIZE_ROWS": {
      const resizedRows = action.payload;
      const previousHeights = resizedRows.map(({ rowIndex }) => ({
        rowIndex,
        height: sheetState.rowStates[rowIndex].height,
      }));
      const inverseAction: SheetAction = {
        type: "HANDLE_RESIZE_ROWS",
        payload: previousHeights,
      };
      return inverseAction;
    }
    case "PASTE_CELLS": {
      const { target, sourceData } = action.payload;
      // Ensure sourceData exists to restore previous state
      if (!sourceData) {
        console.warn("No sourceData provided for inverse PASTE_CELLS action.");
        return null;
      }
      const inverseAction: SheetAction = {
        type: "PASTE_CELLS",
        payload: {
          target,
          sourceData, // Restore previous data
        },
      };
      return inverseAction;
    }
    default:
      return null;
  }
};
