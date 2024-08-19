// sheetState.ts
import { generateExcelHeaders, getRowHeight } from "@/lib/utils";
import {
  type CellAddress,
  type CellData,
  type CellDisplay,
  type ColumnState,
  type RowState,
  type SheetState,
} from "@/types/sheet";
import { handleSelectedToEditing } from "./common";
import { handleKeyboardEvent } from "./keyboard";

const DEFAULT_COLUMN_COUNT = 26;
const DEFAULT_ROW_COUNT = 1000;
const BASE_HEIGHT = 24;
const DEFAULT_CELL_STATE: CellData = {
  value: "",
  display: "hide",
};

export const initialState: SheetState = {
  cellStates: Array.from({ length: DEFAULT_COLUMN_COUNT }, () => ({})),
  selectedCellPosition: { row: 0, col: 0 },
  editingCellPosition: null,
  headerStates: generateExcelHeaders(DEFAULT_COLUMN_COUNT).map((header) => ({
    value: header,
    type: "text",
    width: 90,
  })),
  rowStates: {},
  editingValue: "",
  rowCount: DEFAULT_ROW_COUNT,
  selectedCellRange: null,
};

export type SheetAction =
  | { type: "SET_SELECTED_CELL_POSITION"; payload: CellAddress | null }
  | { type: "SET_EDITING_CELL_POSITION"; payload: CellAddress | null }
  | {
      type: "SET_CELL_STATE";
      payload: { colIndex: number; rowIndex: number; cellData: CellData };
    }
  | { type: "SET_HEADER_STATE"; payload: ColumnState[] }
  | { type: "SET_ROW_STATE"; payload: { rowIndex: number; rowState: RowState } }
  | { type: "SET_EDITING_VALUE"; payload: string }
  | {
      type: "SET_SELECTED_CELL_RANGE";
      payload: { start: CellAddress; end: CellAddress } | null;
    }
  | {
      type: "HANDLE_RESIZE_COLUMN";
      payload: { colIndex: number; width: number };
    }
  | {
      type: "HANDLE_DRAG_CELLS";
      payload: CellAddress;
    }
  | {
      type: "HANDLE_UNCLICKED_TO_CLICKED_CELL";
      payload: CellAddress;
    }
  | {
      type: "HANDLE_DOUBLE_CLICK_CELL";
      payload: CellAddress;
    }
  | {
      type: "HANDLE_UPDATE_CELL";
      payload: CellAddress & {
        value: string;
        display?: CellDisplay;
      };
    }
  | {
      type: "HANDLE_KEYBOARD_EVENT";
      payload: React.KeyboardEvent;
    }
  | { type: "INSERT_ROW"; payload: number }
  | { type: "DELETE_ROW"; payload: number }
  | { type: "INSERT_COLUMN"; payload: number }
  | { type: "DELETE_COLUMN"; payload: number }
  | { type: "MOVE_COLUMN"; payload: { fromIndex: number; toIndex: number } }
  | { type: "CLEAR_CELLS"; payload: { start: CellAddress; end: CellAddress } }
  | {
      type: "FORMAT_CELLS";
      payload: {
        start: CellAddress;
        end: CellAddress;
        fontFamily: string;
        fontSize: number;
      };
    };

export const sheetReducer = (
  state: SheetState,
  action: SheetAction
): SheetState => {
  switch (action.type) {
    case "HANDLE_RESIZE_COLUMN":
      return {
        ...state,
        headerStates: state.headerStates.map((header, colIndex) =>
          colIndex === action.payload.colIndex
            ? { ...header, width: action.payload.width }
            : header
        ),
      };
    case "HANDLE_UNCLICKED_TO_CLICKED_CELL":
      return {
        ...state,
        selectedCellPosition: action.payload,
        selectedCellRange: null,
        editingCellPosition: null,
      };
    case "HANDLE_DRAG_CELLS": {
      if (!state.selectedCellPosition) {
        return state;
      }
      return {
        ...state,
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
    case "HANDLE_KEYBOARD_EVENT": {
      return handleKeyboardEvent(state, action.payload);
    }
    case "HANDLE_UPDATE_CELL": {
      const { row, col, value, display } = action.payload;
      const existingCell = state.cellStates[col][row];
      return {
        ...state,
        editingValue: "",
        cellStates: state.cellStates.map((column, colIndex) =>
          colIndex === col
            ? {
                ...column,
                [row]: {
                  value: value,
                  display: display || existingCell?.display || "hide",
                },
              }
            : column
        ),
      };
    }
    case "SET_SELECTED_CELL_POSITION":
      return { ...state, selectedCellPosition: action.payload };
    case "SET_EDITING_CELL_POSITION":
      return { ...state, editingCellPosition: action.payload };
    case "SET_CELL_STATE":
      return {
        ...state,
        cellStates: state.cellStates.map((column, colIndex) =>
          colIndex === action.payload.colIndex
            ? {
                ...column,
                [action.payload.rowIndex]: action.payload.cellData,
              }
            : column
        ),
      };
    case "SET_HEADER_STATE":
      return { ...state, headerStates: action.payload };
    case "SET_ROW_STATE":
      return {
        ...state,
        rowStates: {
          ...state.rowStates,
          [action.payload.rowIndex]: action.payload.rowState,
        },
      };
    case "INSERT_ROW":
      return {
        ...state,
        cellStates: state.cellStates.map((column) => {
          const newColumn = { ...column };
          const keys = Object.keys(column);
          keys.forEach((key) => {
            const rowIndex = parseInt(key);
            if (rowIndex >= action.payload) {
              newColumn[rowIndex + 1] = column[rowIndex];
            }
          });
          newColumn[action.payload] = DEFAULT_CELL_STATE;
          return newColumn;
        }),
        rowStates: {
          ...state.rowStates,
          [action.payload]: {
            height: BASE_HEIGHT,
            hidden: false,
            maxRowHeight: BASE_HEIGHT,
          },
        },
      };
    case "SET_EDITING_VALUE":
      return { ...state, editingValue: action.payload };
    case "DELETE_ROW":
      return {
        ...state,
        cellStates: state.cellStates.map((column) => {
          const newColumn = { ...column };
          const keys = Object.keys(column);
          keys.forEach((key) => {
            const rowIndex = parseInt(key);
            if (rowIndex > action.payload) {
              newColumn[rowIndex - 1] = column[rowIndex];
            }
          });
          delete newColumn[keys.length];
          return newColumn;
        }),
        rowStates: Object.fromEntries(
          Object.entries(state.rowStates).filter(
            ([key]) => parseInt(key) !== action.payload
          )
        ),
      };
    case "INSERT_COLUMN":
      return {
        ...state,
        cellStates: [
          ...state.cellStates.slice(0, action.payload),
          {},
          ...state.cellStates.slice(action.payload),
        ],
        headerStates: [
          ...state.headerStates.slice(0, action.payload),
          { value: "", type: "text", width: 90 },
          ...state.headerStates.slice(action.payload),
        ],
      };
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
      const { start, end } = action.payload;
      return {
        ...state,
        cellStates: state.cellStates.map((column, colIndex) => {
          const newColumn = { ...column };
          for (let rowIndex = start.row; rowIndex <= end.row; rowIndex++) {
            if (colIndex >= start.col && colIndex <= end.col) {
              newColumn[rowIndex] = DEFAULT_CELL_STATE;
            }
          }
          return newColumn;
        }),
      };
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
    default:
      return state;
  }
};

export const getFullTableHeight = ({
  rowCount,
  rowStates,
  headerStates,
}: {
  rowCount: number;
  rowStates: SheetState["rowStates"];
  headerStates: SheetState["headerStates"];
}) => {
  let accumulatedHeight = 0;
  for (let i = 0; i < rowCount; i++) {
    const rowHeight = getRowHeight({
      rowIndex: i,
      rowStates,
      cellState: headerStates[0],
    });
    accumulatedHeight += rowHeight;
  }
  return accumulatedHeight;
};
