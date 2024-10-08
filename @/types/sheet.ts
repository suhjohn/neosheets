// @/types/sheet.ts
import { z } from "zod";
import { type ChatMessage } from "./chat";
import { Resource } from "./resource";

export const CellDisplaySchema = z.union([
  z.literal("hide"),
  z.literal("wrap"),
]);

export const CellStateSchema = z.object({
  value: z.string(),
  display: CellDisplaySchema,
  type: z
    .union([
      z.literal("string"),
      z.literal("number"),
      z.literal("bigint"),
      z.literal("boolean"),
      z.literal("symbol"),
      z.literal("undefined"),
      z.literal("object"),
      z.literal("function"),
    ])
    .optional(),
  promise: z.promise(z.any()).optional(),
  fontFamily: z.string().optional(),
  fontSize: z.number().optional(),
  formula: z.string().optional(),
  dependencies: z.set(z.string()).optional(),
  error: z.literal("circular_dependency").optional(),
});

export type CellDisplay = z.infer<typeof CellDisplaySchema>;

export const CellAddressSchema = z.object({
  row: z.number(),
  col: z.number(),
});

export const ColumnStateSchema = z.object({
  value: z.string(),
  type: z.string(),
  width: z.number(),
});

export const RowStateSchema = z.object({
  hidden: z.boolean(),
  height: z.number(),
  specifiedHeight: z.number().nullable(),
});

export const ClipboardDataSchema = z.object({
  cells: z.array(z.array(CellStateSchema)),
  start: CellAddressSchema,
  end: CellAddressSchema,
});

export const CellStatesSchema = z.record(z.number(), CellStateSchema);

export const SheetActionSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("SET_SELECTED_CELL_POSITION"),
    payload: CellAddressSchema.nullable(),
  }),
  z.object({
    type: z.literal("SET_EDITING_CELL_POSITION"),
    payload: CellAddressSchema.nullable(),
  }),
  z.object({
    type: z.literal("SET_EDITING_VALUE"),
    payload: z.string(),
  }),
  z.object({
    type: z.literal("SET_CELLS"),
    payload: z.record(z.string(), CellStateSchema),
  }),
  z.object({
    type: z.literal("SET_SELECTED_CELL_RANGE"),
    payload: z
      .object({
        start: CellAddressSchema,
        end: CellAddressSchema,
      })
      .nullable(),
  }),
  z.object({
    type: z.literal("HANDLE_RESIZE_COLUMN"),
    payload: z.object({
      colIndex: z.number(),
      width: z.number(),
    }),
  }),
  z.object({
    type: z.literal("HANDLE_DRAG_CELLS"),
    payload: CellAddressSchema,
  }),
  z.object({
    type: z.literal("HANDLE_UNCLICKED_TO_CLICKED_CELL"),
    payload: CellAddressSchema,
  }),
  z.object({
    type: z.literal("HANDLE_DOUBLE_CLICK_CELL"),
    payload: CellAddressSchema,
  }),
  z.object({
    type: z.literal("HANDLE_UPDATE_CELL"),
    payload: CellAddressSchema.extend({
      value: z.string(),
      display: CellDisplaySchema.optional(),
    }),
  }),
  z.object({
    type: z.literal("HANDLE_UPDATE_CELL_RANGE"),
    payload: z.object({
      range: z.object({
        start: CellAddressSchema,
        end: CellAddressSchema,
      }),
      value: z.string().optional(),
      display: CellDisplaySchema.optional(),
      previousData: z.record(z.string(), CellStateSchema).optional(),
    }),
  }),
  z.object({
    type: z.literal("HANDLE_TABLE_KEYBOARD_EVENT"),
    payload: z.any(), // This should be more specific, but we can't easily represent a React.KeyboardEvent in Zod
  }),
  z.object({
    type: z.literal("INSERT_ROW"),
    payload: z.object({
      rowIndex: z.number(),
      rowData: z
        .object({
          rowState: RowStateSchema,
          cellStates: z.array(CellStateSchema),
        })
        .optional(),
    }),
  }),
  z.object({
    type: z.literal("INSERT_ROWS"),
    payload: z.object({
      rows: z.array(
        z.object({
          rowIndex: z.number(),
          rowData: z
            .object({
              rowState: RowStateSchema,
              cellStates: z.array(CellStateSchema),
            })
            .optional(),
        })
      ),
    }),
  }),
  z.object({
    type: z.literal("DELETE_ROWS"),
    payload: z.array(z.number()),
  }),
  z.object({
    type: z.literal("INSERT_COLUMN"),
    payload: z.object({
      colIndex: z.number(),
      columnState: ColumnStateSchema.optional(),
      cellStates: z.record(z.string(), CellStateSchema).optional(),
    }),
  }),
  z.object({
    type: z.literal("DELETE_COLUMN"),
    payload: z.number(),
  }),
  z.object({
    type: z.literal("MOVE_COLUMN"),
    payload: z.object({
      fromIndex: z.number(),
      toIndex: z.number(),
    }),
  }),
  z.object({
    type: z.literal("CLEAR_CELLS"),
    payload: z.object({
      start: CellAddressSchema,
      end: CellAddressSchema,
    }),
  }),
  z.object({
    type: z.literal("FORMAT_CELLS"),
    payload: z.object({
      start: CellAddressSchema,
      end: CellAddressSchema,
      fontFamily: z.string(),
      fontSize: z.number(),
    }),
  }),
  z.object({
    type: z.literal("HANDLE_RESIZE_ROWS"),
    payload: z.array(
      z.object({
        rowIndex: z.number(),
        height: z.number().nullable(),
      })
    ),
  }),
  z.object({
    type: z.literal("HANDLE_DRAG_ROWS"),
    payload: z.array(z.number()),
  }),
  z.object({
    type: z.literal("SET_SHEET_NAME"),
    payload: z.string(),
  }),
  z.object({
    type: z.literal("COPY_CELLS"),
    payload: z.object({
      start: CellAddressSchema,
      end: CellAddressSchema,
    }),
  }),
  z.object({
    type: z.literal("PASTE_CELLS"),
    payload: z.object({
      target: CellAddressSchema,
      sourceData: z.record(z.string(), CellStateSchema).optional(),
    }),
  }),
  z.object({
    type: z.literal("UNDO"),
    payload: z.any(),
  }),
  z.object({
    type: z.literal("REDO"),
    payload: z.any(),
  }),
  z.object({
    type: z.literal("HANDLE_BLUR_CELL"),
    payload: z.any(),
  }),
  z.object({
    type: z.literal("INITIATE_AUTOFILL"),
    payload: z.object({
      row: z.number(),
      col: z.number(),
    }),
  }),
  z.object({
    type: z.literal("UPDATE_AUTOFILL_TARGET"),
    payload: z.object({
      endRow: z.number(),
      endCol: z.number(),
    }),
  }),
  z.object({
    type: z.literal("PERFORM_AUTOFILL"),
    payload: z.object({
      fillRange: z.object({
        start: CellAddressSchema,
        end: CellAddressSchema,
      }),
    }),
  }),
]);

export type SheetAction = z.infer<typeof SheetActionSchema>;

export const SheetStateSchema = z.object({
  id: z.string(),
  name: z.string(),
  cellStates: z.array(CellStatesSchema),
  selectedCellPosition: z.nullable(CellAddressSchema),
  editingCellPosition: z.nullable(CellAddressSchema),
  headerStates: z.array(ColumnStateSchema),
  rowStates: z.record(RowStateSchema),
  rowCount: z.number(),
  editingValue: z.string(),
  selectedCellRange: z.nullable(
    z.object({
      start: CellAddressSchema,
      end: CellAddressSchema,
    })
  ),
  selectedRows: z.array(z.number()),
  clipboard: z.nullable(ClipboardDataSchema),
  showClipboard: z.boolean().optional(),
  promises: z
    .record(z.string(), z.record(z.string(), z.promise(z.any())))
    .nullable(),
  undoStack: z.array(SheetActionSchema).default([]),
  redoStack: z.array(SheetActionSchema).default([]),
  autofillTarget: z.nullable(CellAddressSchema),
});

export type ClipboardData = z.infer<typeof ClipboardDataSchema>;

export type SheetState = z.infer<typeof SheetStateSchema>;

export type CellState = z.infer<typeof CellStateSchema>;

export type CellAddress = z.infer<typeof CellAddressSchema>;

export type CellStates = z.infer<typeof CellStatesSchema>;

export type ColumnState = z.infer<typeof ColumnStateSchema>;

// export type RowState = {
//   hidden: boolean;
//   height: number; // auto calculated height for the row. Finds the max height of all cells in the row.
//   specifiedHeight: number | null; // height specified by the user. If null, the height is auto calculated.
// };

export type RowState = z.infer<typeof RowStateSchema>;

export type BasicFunctionType = {
  id: string;
  functionName: string;
  description: string;
  functionBody: string;
  type: "function";
  createdBy: string;
  createdAt: string;
  updatedAt: string;
};

export type LlmFunctionType = {
  id: string;
  functionName: string;
  description: string;
  functionBody: string;
  type: "llm";
  resourceId: string;
  model: string;
  messages: ChatMessage[];
  prompt: string | null;
  args?: string;
  outputPath?: (string | number)[];
  createdBy: string;
  createdAt: string;
  updatedAt: string;
};

export type FunctionType = (BasicFunctionType | LlmFunctionType) & {
  resource?: Resource | null;
};

export type FunctionBindingType = {
  name: string;
  functionId: string;
  isCustom: boolean;
};

export type UpdateCellArgsType = CellAddress & {
  value: string;
  display?: CellDisplay;
};

export type FunctionBindingsType = {
  sheetId: string;
  functionBindings: FunctionBindingType[];
};

export type FunctionBindingsWithFunctionsType = {
  sheetId: string;
  functionBindings: (FunctionBindingType & {
    function: FunctionType | null;
  })[];
};

export type CopyCellsAction = {
  type: "COPY_CELLS";
  payload: { start: CellAddress; end: CellAddress };
};

export type PasteCellsAction = {
  type: "PASTE_CELLS";
  payload: {
    target: CellAddress;
    sourceData?: { [key: string]: CellState }; // Added field for inverse action
  };
};

export type ClearCellsAction = {
  type: "CLEAR_CELLS";
  payload: { start: CellAddress; end: CellAddress };
};

export type InsertColumnPayload = {
  colIndex: number;
  columnState?: ColumnState;
  cellStates?: CellStates; // Changed from CellState[] to CellStates (Record<number, CellState>)
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

export const CreateSpreadsheetArgs = z.object({
  name: z.string().min(1).optional().default("Untitled Spreadsheet"),
  // Add more fields if necessary, such as initial sheets
});

export type CreateSpreadsheetArgs = z.infer<typeof CreateSpreadsheetArgs>;

/**
 * SpreadsheetSchema
 *
 * Schema representing a spreadsheet.
 */
export const SpreadsheetSchema = z.object({
  id: z.string(),
  name: z.string(),
  lastOpenedAt: z.string().datetime(),
  sheets: z.array(SheetStateSchema).min(1),
});

export type Spreadsheet = z.infer<typeof SpreadsheetSchema>;