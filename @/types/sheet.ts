// types/sheet.ts
export type CellDisplay = "hide" | "wrap";

export interface CellData {
  value: string | number;
  display: CellDisplay;
  fontFamily?: string;
  fontSize?: number;
  formula?: string;
  dependencies?: Set<string>;
  error?: "circular_dependency";
}

export type CellAddress = { row: number; col: number };

export type ColumnData = { [row: number]: CellData };

export type ColumnState = {
  value: string;
  type: string;
  width: number;
};

export type RowState = {
  height: number;
  hidden: boolean;
  maxRowHeight: number;
};

export type FunctionType = {
  id: string;
  functionName: string;
  description: string;
  functionBody: string;
  createdAt: string;
  updatedAt: string;
};

export type FunctionBindingType = {
  name: string;
    functionId: string;
    isCustom: boolean;
}

export type FunctionBindingsType = {
  sheetId: string;
  functionBindings: FunctionBindingType[];
};

export function cellAddressToString(address: CellAddress): string {
  return `${String.fromCharCode(65 + address.col)}${address.row + 1}`;
}

export function stringToCellAddress(str: string): CellAddress {
  const match = str.match(/([A-Z]+)(\d+)/);
  if (!match) throw new Error(`Invalid cell address: ${str}`);
  const [, col, row] = match;
  return {
    col:
      col
        .split("")
        .reduce((acc, char) => acc * 26 + char.charCodeAt(0) - 64, 0) - 1,
    row: parseInt(row) - 1,
  };
}

export interface SheetState {
  cellStates: ColumnData[];
  selectedCellPosition: CellAddress | null;
  editingCellPosition: CellAddress | null;
  headerStates: ColumnState[];
  rowStates: {
    [row: number]: RowState;
  };
  rowCount: number;
  editingValue: string;
  selectedCellRange: {
    start: CellAddress;
    end: CellAddress;
  } | null;
}

