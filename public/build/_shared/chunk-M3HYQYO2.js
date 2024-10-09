import {
  localForageInstance,
  v4_default,
  z
} from "/build/_shared/chunk-QLLD56SL.js";
import {
  useMutation,
  useQuery,
  useQueryClient
} from "/build/_shared/chunk-PL57PC3R.js";
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
  calculateTextHeight,
  extractMustacheVariables,
  generateExcelHeaders,
  generateFillSequence,
  getSortedCellRange
} from "/build/_shared/chunk-JF5W5KJ6.js";
import {
  require_react
} from "/build/_shared/chunk-QPVUD6NO.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// @/state/common.ts
var handleSelectedToEditing = (state) => {
  if (!state.selectedCellPosition) {
    return state;
  }
  const hasFormula = state.cellStates[state.selectedCellPosition.col][state.selectedCellPosition.row]?.formula !== void 0 && state.cellStates[state.selectedCellPosition.col][state.selectedCellPosition.row].formula !== "";
  return {
    ...state,
    editingCellPosition: state.selectedCellPosition,
    editingValue: hasFormula ? `${state.cellStates[state.selectedCellPosition.col][state.selectedCellPosition.row]?.formula}` : state.cellStates[state.selectedCellPosition.col][state.selectedCellPosition.row]?.value || ""
  };
};

// @/state/keyboard.ts
var handleCopy = (action, state) => {
  const { start, end } = action.payload;
  const { start: sortedStart, end: sortedEnd } = getSortedCellRange({
    maybeStart: start,
    maybeEnd: end
  });
  const copiedCells = [];
  for (let row = sortedStart.row; row <= sortedEnd.row; row++) {
    const rowData = [];
    for (let col = sortedStart.col; col <= sortedEnd.col; col++) {
      const cell = state.cellStates[col]?.[row] || {
        value: "",
        display: "hide"
      };
      rowData.push({ ...cell });
    }
    copiedCells.push(rowData);
  }
  return {
    ...state,
    clipboard: {
      cells: copiedCells,
      start: sortedStart,
      end: sortedEnd
    },
    showClipboard: true
  };
};
var handlePaste = (action, state) => {
  if (!state.clipboard) {
    return state;
  }
  const { target } = action.payload;
  const { cells } = state.clipboard;
  const numRows = cells.length;
  const numCols = cells[0]?.length || 0;
  const endRow = target.row + numRows - 1;
  const endCol = target.col + numCols - 1;
  const newCellStates = [...state.cellStates];
  const newRowStates = { ...state.rowStates };
  let updatedRowCount = state.rowCount;
  const updatedColumnCount = state.cellStates.length;
  if (endRow >= updatedRowCount) {
    updatedRowCount = endRow + 1;
  }
  if (endCol >= updatedColumnCount) {
    for (let col = updatedColumnCount; col <= endCol; col++) {
      newCellStates[col] = {};
      state.headerStates[col] = {
        value: String.fromCharCode(65 + col),
        type: "text",
        width: DEFAULT_COLUMN_WIDTH
        // Ensure DEFAULT_COLUMN_WIDTH is defined
      };
    }
  }
  const finalRowCount = updatedRowCount;
  cells.forEach((rowData, rowIndex) => {
    rowData.forEach((cell, colIndex) => {
      const pasteRow = target.row + rowIndex;
      const pasteCol = target.col + colIndex;
      if (pasteCol >= newCellStates.length || pasteRow >= finalRowCount) {
        return;
      }
      newCellStates[pasteCol] = {
        ...newCellStates[pasteCol],
        [pasteRow]: { ...cell }
      };
      const textWidth = state.headerStates[pasteCol].width - DEFAULT_CELL_BORDER_WIDTH * 4 - DEFAULT_CELL_PADDING * 4;
      const height = calculateTextHeight({
        text: cell.value,
        width: textWidth,
        font: `${DEFAULT_FONT_SIZE}px ${DEFAULT_FONT_FAMILY}`,
        display: cell.display,
        lineHeight: DEFAULT_LINE_HEIGHT
      });
      newRowStates[pasteRow] = {
        ...newRowStates[pasteRow],
        height: Math.max(
          newRowStates[pasteRow]?.height || 0,
          height,
          DEFAULT_CELL_HEIGHT
        )
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
      end: { row: endRow, col: endCol }
    }
  };
};
var handleClear = (action, state) => {
  const { start, end } = action.payload;
  const { start: sortedStart, end: sortedEnd } = getSortedCellRange({
    maybeStart: start,
    maybeEnd: end
  });
  return {
    ...state,
    cellStates: state.cellStates.map((column, colIndex) => {
      const newColumn = { ...column };
      for (let rowIndex = sortedStart.row; rowIndex <= sortedEnd.row; rowIndex++) {
        if (colIndex >= sortedStart.col && colIndex <= sortedEnd.col) {
          newColumn[rowIndex] = {
            value: "",
            display: "hide"
          };
        }
      }
      return newColumn;
    })
  };
};
var keyMap = {
  ArrowUp: (state) => handleMoveSelectedCellPosition(state, "up"),
  "Shift+ArrowUp": (state) => handleExpandSelectedRange(state, "up"),
  ArrowDown: (state) => handleMoveSelectedCellPosition(state, "down"),
  "Shift+ArrowDown": (state) => handleExpandSelectedRange(state, "down"),
  ArrowLeft: (state) => handleMoveSelectedCellPosition(state, "left"),
  "Shift+ArrowLeft": (state) => handleExpandSelectedRange(state, "left"),
  ArrowRight: (state) => handleMoveSelectedCellPosition(state, "right"),
  "Shift+ArrowRight": (state) => handleExpandSelectedRange(state, "right"),
  Enter: (state) => {
    if (state.editingCellPosition) {
      return handleMoveSelectedCellPosition(state, "down");
    }
    if (state.selectedCellPosition) {
      return handleSelectedToEditing(state);
    }
    return state;
  },
  Backspace: (state) => {
    if (state.selectedRows.length > 0) {
      return handleClear(
        {
          type: "CLEAR_CELLS",
          payload: {
            start: {
              row: state.selectedRows[0],
              col: 0
            },
            end: {
              row: state.selectedRows[state.selectedRows.length - 1],
              col: state.headerStates.length - 1
            }
          }
        },
        state
      );
    } else if (state.selectedCellRange && !state.editingCellPosition) {
      return handleClear(
        {
          type: "CLEAR_CELLS",
          payload: state.selectedCellRange
        },
        state
      );
    } else if (state.selectedCellPosition && !state.editingCellPosition) {
      return handleClear(
        {
          type: "CLEAR_CELLS",
          payload: {
            start: state.selectedCellPosition,
            end: state.selectedCellPosition
          }
        },
        state
      );
    }
    return state;
  },
  "Meta+c": (state) => {
    if (state.selectedRows.length > 0) {
      return handleCopy(
        {
          type: "COPY_CELLS",
          payload: {
            start: {
              row: state.selectedRows[0],
              col: 0
            },
            end: {
              row: state.selectedRows[state.selectedRows.length - 1],
              col: state.headerStates.length - 1
            }
          }
        },
        state
      );
    } else if (state.selectedCellRange) {
      return handleCopy(
        {
          type: "COPY_CELLS",
          payload: state.selectedCellRange
        },
        state
      );
    } else if (state.selectedCellPosition) {
      return handleCopy(
        {
          type: "COPY_CELLS",
          payload: {
            start: state.selectedCellPosition,
            end: state.selectedCellPosition
          }
        },
        state
      );
    }
    return state;
  },
  "Meta+v": (state) => {
    if (state.clipboard && state.selectedCellPosition) {
      return handlePaste(
        {
          type: "PASTE_CELLS",
          payload: { target: state.selectedCellPosition }
        },
        state
      );
    }
    return state;
  },
  "Meta+a": (state) => {
    const start = { row: 0, col: 0 };
    const end = {
      row: state.rowCount - 1,
      col: state.headerStates.length - 1
    };
    return {
      ...state,
      selectedCellRange: { start, end },
      selectedCellPosition: null,
      selectedRows: []
    };
  },
  "Meta+z": (state) => applyAction(state, { type: "UNDO" }),
  "Meta+Shift+z": (state) => applyAction(state, { type: "REDO" })
};
var handleTableKeyboardEvent = (state, event) => {
  const keyCombo = [
    event.ctrlKey && "Ctrl",
    event.altKey && "Alt",
    event.shiftKey && "Shift",
    event.metaKey && "Meta"
  ].filter(Boolean).sort();
  keyCombo.push(event.key);
  const command = keyCombo.join("+");
  const handler = keyMap[command];
  return handler ? handler(state) : state;
};
var handleMoveSelectedCellPosition = (state, direction) => {
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
          col
        }
      };
    case "down":
      return {
        ...state,
        selectedCellRange: null,
        selectedCellPosition: {
          row: Math.min(state.rowCount - 1, row + 1),
          col
        }
      };
    case "left":
      return {
        ...state,
        selectedCellRange: null,
        selectedCellPosition: {
          row,
          col: Math.max(0, col - 1)
        }
      };
    case "right":
      return {
        ...state,
        selectedCellRange: null,
        selectedCellPosition: {
          row,
          col: Math.min(state.cellStates.length - 1, col + 1)
        }
      };
  }
};
var handleExpandSelectedRange = (state, direction) => {
  if (!state.selectedCellPosition) {
    return state;
  }
  const start = state.selectedCellRange?.start ?? state.selectedCellPosition;
  const end = state.selectedCellRange?.end ?? state.selectedCellPosition;
  let newEnd;
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
        col: Math.max(0, end.col - 1)
      };
      break;
    case "right":
      newEnd = {
        row: end.row,
        col: Math.min(state.headerStates.length - 1, end.col + 1)
      };
      break;
  }
  return {
    ...state,
    selectedCellRange: { start, end: newEnd }
  };
};

// @/lib/llm.ts
var generateFunctionBody = ({
  functionData,
  secretKeys
}) => {
  const { authorization, additionalHeaders: resourceAdditionalHeaders } = functionData.resource;
  const escapeSecret = (value) => value === void 0 ? "" : value.replace(/`/g, "\\`").replace(/\$/g, "\\$");
  let authorizationHeader = "";
  let additionalHeaders = "";
  switch (authorization.authMethod) {
    case "bearerToken": {
      const bearerToken = secretKeys.body[authorization.secretKeyName];
      authorizationHeader = `Authorization: "Bearer ${escapeSecret(
        bearerToken
      )}",`;
      break;
    }
    case "apiKey": {
      const apiKey = secretKeys.body[authorization.secretKeyName];
      authorizationHeader = `"${escapeSecret(
        authorization.apiKeyName
      )}": "${escapeSecret(apiKey)}",`;
      break;
    }
    case "oauth2": {
      const clientId = secretKeys.body[authorization.clientIdKeyName];
      const clientSecret = secretKeys.body[authorization.clientSecretKeyName];
      additionalHeaders += `"Client-ID": "${escapeSecret(clientId)}",
`;
      additionalHeaders += `"Client-Secret": "${escapeSecret(
        clientSecret
      )}",
`;
      break;
    }
    case "hmac": {
      const accessKey = secretKeys.body[authorization.accessKeyName];
      const secretKey = secretKeys.body[authorization.secretKeyName];
      additionalHeaders += `"Access-Key": "${escapeSecret(accessKey)}",
`;
      additionalHeaders += `"Signature": "${escapeSecret(secretKey)}",
`;
      break;
    }
    case "mtls": {
      const clientCert = secretKeys.body[authorization.clientCertKeyName];
      const clientKey = secretKeys.body[authorization.clientKeyKeyName];
      additionalHeaders += `"Client-Cert": "${escapeSecret(clientCert)}",
`;
      additionalHeaders += `"Client-Key": "${escapeSecret(clientKey)}",
`;
      break;
    }
    case "basic":
      break;
    case "custom":
      break;
    default:
      break;
  }
  if (resourceAdditionalHeaders && Object.keys(resourceAdditionalHeaders).length > 0) {
    additionalHeaders += Object.entries(resourceAdditionalHeaders).map(([key, value]) => `"${key}": "${escapeSecret(value)}",`).join("\n");
  }
  const variables = Array.from(
    new Set(
      functionData.messages.flatMap(
        (message) => extractMustacheVariables(message.content)
      )
    )
  );
  const argsType = `type Args = {
    ${variables.map((varName) => `  ${varName}: string;`).join("\n")}
    };
`;
  const functionBody = `function getValueAtPath(
      data: any,
      path: Array<string | number>
    ): any {
      let current: JsonValue | undefined = data;
      for (const key of path) {
        if (
          current !== undefined &&
          current !== null &&
          typeof current === 'object'
        ) {
          current = Array.isArray(current)
            ? current[key as number]
            : current[key as string];
        } else {
          return undefined; // Not an object or array, or path does not exist
        }
      }
      if (typeof current !== 'string') {
        return undefined;
      }
      return current;
    }

${argsType}

async function run(args: Args) {
    // Validate that all required args are provided
    const missingArgs = [${variables.map((v) => `"${v}"`).join(", ")}].filter(arg => !(arg in args));
    if (missingArgs.length > 0) {
      throw new Error("Missing arguments: " + missingArgs.join(", "));
    }
    // Replace Mustache variables in messages
    const messages = ${JSON.stringify(
    functionData.messages,
    null,
    2
  )}.map(message => ({
      ...message,
      content: message.content.replace(/{{\\s*(\\w+)\\s*}}/g, (_, key) => {
        if (key in args) {
          return args[key];
        } else {
          return "";
        }
      })
    }));

    const requestBody = {
      messages: messages,
      model: "${functionData.model}",
      ${functionData.args ? `...${JSON.stringify(JSON.parse(functionData.args))},` : ""}
    };
    const response = await fetch("${functionData.resource.apiUrl}", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "anthropic-dangerous-direct-browser-access": "true",
        ${authorizationHeader}
        ${additionalHeaders}
      },
      body: JSON.stringify(requestBody, null, 2),
    });

    if (!response.ok) {
      throw new Error(\`Request failed with status \${response.status}\`);
    }
    

    const data = await response.json();
    ${functionData.outputPath !== void 0 ? `
      // Extract value using outputPath
      const result = getValueAtPath(data, ${JSON.stringify(functionData.outputPath)});
      return result;
      ` : `
      return data;
      `}
  }`;
  return functionBody;
};

// @/types/sheet.ts
var CellDisplaySchema = z.union([
  z.literal("hide"),
  z.literal("wrap")
]);
var CellStateSchema = z.object({
  value: z.string(),
  display: CellDisplaySchema,
  type: z.union([
    z.literal("string"),
    z.literal("number"),
    z.literal("bigint"),
    z.literal("boolean"),
    z.literal("symbol"),
    z.literal("undefined"),
    z.literal("object"),
    z.literal("function")
  ]).optional(),
  promise: z.promise(z.any()).optional(),
  fontFamily: z.string().optional(),
  fontSize: z.number().optional(),
  formula: z.string().optional(),
  dependencies: z.set(z.string()).optional(),
  error: z.literal("circular_dependency").optional()
});
var CellAddressSchema = z.object({
  row: z.number(),
  col: z.number()
});
var ColumnStateSchema = z.object({
  value: z.string(),
  type: z.string(),
  width: z.number()
});
var RowStateSchema = z.object({
  hidden: z.boolean(),
  height: z.number(),
  specifiedHeight: z.number().nullable()
});
var ClipboardDataSchema = z.object({
  cells: z.array(z.array(CellStateSchema)),
  start: CellAddressSchema,
  end: CellAddressSchema
});
var CellStatesSchema = z.record(z.number(), CellStateSchema);
var SheetActionSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("SET_SELECTED_CELL_POSITION"),
    payload: CellAddressSchema.nullable()
  }),
  z.object({
    type: z.literal("SET_EDITING_CELL_POSITION"),
    payload: CellAddressSchema.nullable()
  }),
  z.object({
    type: z.literal("SET_EDITING_VALUE"),
    payload: z.string()
  }),
  z.object({
    type: z.literal("SET_CELLS"),
    payload: z.record(z.string(), CellStateSchema)
  }),
  z.object({
    type: z.literal("SET_SELECTED_CELL_RANGE"),
    payload: z.object({
      start: CellAddressSchema,
      end: CellAddressSchema
    }).nullable()
  }),
  z.object({
    type: z.literal("HANDLE_RESIZE_COLUMN"),
    payload: z.object({
      colIndex: z.number(),
      width: z.number()
    })
  }),
  z.object({
    type: z.literal("HANDLE_DRAG_CELLS"),
    payload: CellAddressSchema
  }),
  z.object({
    type: z.literal("HANDLE_UNCLICKED_TO_CLICKED_CELL"),
    payload: CellAddressSchema
  }),
  z.object({
    type: z.literal("HANDLE_DOUBLE_CLICK_CELL"),
    payload: CellAddressSchema
  }),
  z.object({
    type: z.literal("HANDLE_UPDATE_CELL"),
    payload: CellAddressSchema.extend({
      value: z.string(),
      display: CellDisplaySchema.optional()
    })
  }),
  z.object({
    type: z.literal("HANDLE_UPDATE_CELL_RANGE"),
    payload: z.object({
      range: z.object({
        start: CellAddressSchema,
        end: CellAddressSchema
      }),
      value: z.string().optional(),
      display: CellDisplaySchema.optional(),
      previousData: z.record(z.string(), CellStateSchema).optional()
    })
  }),
  z.object({
    type: z.literal("HANDLE_TABLE_KEYBOARD_EVENT"),
    payload: z.any()
    // This should be more specific, but we can't easily represent a React.KeyboardEvent in Zod
  }),
  z.object({
    type: z.literal("INSERT_ROW"),
    payload: z.object({
      rowIndex: z.number(),
      rowData: z.object({
        rowState: RowStateSchema,
        cellStates: z.array(CellStateSchema)
      }).optional()
    })
  }),
  z.object({
    type: z.literal("INSERT_ROWS"),
    payload: z.object({
      rows: z.array(
        z.object({
          rowIndex: z.number(),
          rowData: z.object({
            rowState: RowStateSchema,
            cellStates: z.array(CellStateSchema)
          }).optional()
        })
      )
    })
  }),
  z.object({
    type: z.literal("DELETE_ROWS"),
    payload: z.array(z.number())
  }),
  z.object({
    type: z.literal("INSERT_COLUMN"),
    payload: z.object({
      colIndex: z.number(),
      columnState: ColumnStateSchema.optional(),
      cellStates: z.record(z.string(), CellStateSchema).optional()
    })
  }),
  z.object({
    type: z.literal("DELETE_COLUMN"),
    payload: z.number()
  }),
  z.object({
    type: z.literal("MOVE_COLUMN"),
    payload: z.object({
      fromIndex: z.number(),
      toIndex: z.number()
    })
  }),
  z.object({
    type: z.literal("CLEAR_CELLS"),
    payload: z.object({
      start: CellAddressSchema,
      end: CellAddressSchema
    })
  }),
  z.object({
    type: z.literal("FORMAT_CELLS"),
    payload: z.object({
      start: CellAddressSchema,
      end: CellAddressSchema,
      fontFamily: z.string(),
      fontSize: z.number()
    })
  }),
  z.object({
    type: z.literal("HANDLE_RESIZE_ROWS"),
    payload: z.array(
      z.object({
        rowIndex: z.number(),
        height: z.number().nullable()
      })
    )
  }),
  z.object({
    type: z.literal("HANDLE_DRAG_ROWS"),
    payload: z.array(z.number())
  }),
  z.object({
    type: z.literal("SET_SHEET_NAME"),
    payload: z.string()
  }),
  z.object({
    type: z.literal("COPY_CELLS"),
    payload: z.object({
      start: CellAddressSchema,
      end: CellAddressSchema
    })
  }),
  z.object({
    type: z.literal("PASTE_CELLS"),
    payload: z.object({
      target: CellAddressSchema,
      sourceData: z.record(z.string(), CellStateSchema).optional()
    })
  }),
  z.object({
    type: z.literal("UNDO"),
    payload: z.any()
  }),
  z.object({
    type: z.literal("REDO"),
    payload: z.any()
  }),
  z.object({
    type: z.literal("HANDLE_BLUR_CELL"),
    payload: z.any()
  }),
  z.object({
    type: z.literal("INITIATE_AUTOFILL"),
    payload: z.object({
      row: z.number(),
      col: z.number()
    })
  }),
  z.object({
    type: z.literal("UPDATE_AUTOFILL_TARGET"),
    payload: z.object({
      endRow: z.number(),
      endCol: z.number()
    })
  }),
  z.object({
    type: z.literal("PERFORM_AUTOFILL"),
    payload: z.object({
      fillRange: z.object({
        start: CellAddressSchema,
        end: CellAddressSchema
      })
    })
  })
]);
var SheetStateSchema = z.object({
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
      end: CellAddressSchema
    })
  ),
  selectedRows: z.array(z.number()),
  clipboard: z.nullable(ClipboardDataSchema),
  showClipboard: z.boolean().optional(),
  promises: z.record(z.string(), z.record(z.string(), z.promise(z.any()))).nullable(),
  undoStack: z.array(SheetActionSchema).default([]),
  redoStack: z.array(SheetActionSchema).default([]),
  autofillTarget: z.nullable(CellAddressSchema)
});
function cellAddressToString(address) {
  return `${String.fromCharCode(65 + address.col)}${address.row + 1}`;
}
function stringToCellAddress(str) {
  const match = str.match(/([A-Z]+)(\d+)/);
  if (!match)
    throw new Error(`Invalid cell address: ${str}`);
  const [, col, row] = match;
  return {
    col: col.split("").reduce((acc, char) => acc * 26 + char.charCodeAt(0) - 64, 0) - 1,
    row: parseInt(row) - 1
  };
}
var CreateSpreadsheetArgs = z.object({
  name: z.string().min(1).optional().default("Untitled Spreadsheet")
  // Add more fields if necessary, such as initial sheets
});
var SpreadsheetSchema = z.object({
  id: z.string(),
  name: z.string(),
  lastOpenedAt: z.string().datetime(),
  sheets: z.array(SheetStateSchema).min(1)
});

// @/lib/ast/lexer.ts
function tokenize({
  input,
  functionBindings
}) {
  const tokens = [];
  let current = 0;
  while (current < input.length) {
    let char = input[current];
    if (/\s/.test(char)) {
      current++;
      continue;
    }
    if (/\d/.test(char)) {
      let value = "";
      while (current < input.length && /\d/.test(input[current])) {
        value += input[current];
        current++;
      }
      tokens.push({ type: "NUMBER", value });
      continue;
    }
    if (/[A-Z]/i.test(char)) {
      let value = "";
      while (current < input.length && /[A-Z0-9]/i.test(input[current])) {
        value += input[current];
        current++;
      }
      if (functionBindings[value.toUpperCase()]) {
        tokens.push({ type: "FUNCTION", value });
      } else if (/^[A-Z]+[0-9]+$/i.test(value)) {
        tokens.push({ type: "CELL_REF", value });
      } else {
        tokens.push({ type: "IDENTIFIER", value });
      }
      continue;
    }
    if (/[+\-*/]/.test(char)) {
      tokens.push({ type: "OPERATOR", value: char });
      current++;
      continue;
    }
    if (char === "(") {
      tokens.push({ type: "LPAREN", value: "(" });
      current++;
      continue;
    }
    if (char === ")") {
      tokens.push({ type: "RPAREN", value: ")" });
      current++;
      continue;
    }
    if (char === ",") {
      tokens.push({ type: "COMMA", value: "," });
      current++;
      continue;
    }
    if (char === ":") {
      tokens.push({ type: "COLON", value: ":" });
      current++;
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "LBRACE", value: "{" });
      current++;
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "RBRACE", value: "}" });
      current++;
      continue;
    }
    if (char === '"') {
      let value = "";
      current++;
      char = input[current];
      while (current < input.length && char !== '"') {
        value += char;
        current++;
        char = input[current];
      }
      if (char === '"') {
        current++;
      } else {
        throw new Error("Unterminated string literal");
      }
      tokens.push({ type: "STRING", value });
      continue;
    }
    throw new Error(`Unrecognized character: ${char}`);
  }
  return tokens;
}

// @/lib/ast/parser.ts
function parseCellReference(value) {
  const match = value.match(/([A-Z]+)(\d+)/);
  if (!match) {
    throw new Error(`Invalid cell reference: ${value}`);
  }
  const [, col, row] = match;
  return {
    type: "CellReference",
    columnIndex: col.split("").reduce((acc, char) => acc * 26 + char.charCodeAt(0) - 64, 0) - 1,
    rowIndex: parseInt(row) - 1
  };
}
function parse(tokens) {
  let current = 0;
  function parseExpression() {
    let left = parseTerm();
    while (current < tokens.length && (tokens[current].value === "+" || tokens[current].value === "-")) {
      const operator = tokens[current].value;
      current++;
      const right = parseTerm();
      left = {
        type: "BinaryOperation",
        operator,
        left,
        right
      };
    }
    return left;
  }
  function parseTerm() {
    let left = parseFactor();
    while (current < tokens.length && (tokens[current].value === "*" || tokens[current].value === "/")) {
      const operator = tokens[current].value;
      current++;
      const right = parseFactor();
      left = {
        type: "BinaryOperation",
        operator,
        left,
        right
      };
    }
    return left;
  }
  function parseFactor() {
    const token = tokens[current];
    if (token.type === "NUMBER") {
      current++;
      return { type: "Number", value: parseFloat(token.value) };
    }
    if (token.type === "STRING") {
      current++;
      return { type: "String", value: token.value };
    }
    if (token.type === "CELL_REF") {
      if (current + 1 < tokens.length && tokens[current + 1].type === "COLON") {
        return parseRange();
      }
      current++;
      return parseCellReference(token.value);
    }
    if (token.type === "IDENTIFIER") {
      throw new Error(`Unexpected identifier: ${token.value}`);
    }
    if (token.type === "FUNCTION") {
      return parseFunction();
    }
    if (token.type === "LPAREN") {
      current++;
      const node = parseExpression();
      if (tokens[current].type !== "RPAREN") {
        throw new Error(
          `Expected ')' after expression, got ${tokens[current].type}`
        );
      }
      current++;
      return node;
    }
    if (token.type === "LBRACE") {
      return parseObjectLiteral();
    }
    throw new Error(`Unexpected token: ${JSON.stringify(token)}`);
  }
  function parseFunction() {
    const name = tokens[current].value;
    current++;
    if (tokens[current].type !== "LPAREN") {
      throw new Error(
        `Expected '(' after function name, got ${tokens[current].type}`
      );
    }
    current++;
    const args = [];
    while (tokens[current].type !== "RPAREN") {
      if (tokens[current].type === "COMMA") {
        current++;
        continue;
      }
      if (tokens[current].type === "CELL_REF" && current + 1 < tokens.length && tokens[current + 1].type === "COLON") {
        args.push(parseRange());
      } else {
        args.push(parseExpression());
      }
    }
    current++;
    return { type: "Function", name, arguments: args };
  }
  function parseRange() {
    const start = parseCellReference(tokens[current].value);
    current++;
    if (tokens[current].type !== "COLON") {
      throw new Error(`Expected ':' in range, got ${tokens[current].type}`);
    }
    current++;
    const end = parseCellReference(tokens[current].value);
    current++;
    return { type: "Range", start, end };
  }
  function parseObjectLiteral() {
    current++;
    const properties = [];
    while (tokens[current].type !== "RBRACE") {
      let key;
      if (tokens[current].type === "STRING" || tokens[current].type === "IDENTIFIER") {
        key = tokens[current].value;
        current++;
      } else if (tokens[current].type === "FUNCTION") {
        key = tokens[current].value;
        current++;
      } else {
        throw new Error(
          `Expected string, identifier, or function key, got ${tokens[current].type}`
        );
      }
      if (tokens[current].type !== "COLON") {
        throw new Error(
          `Expected colon after key in object literal, got ${tokens[current].type}`
        );
      }
      current++;
      const value = parseExpression();
      properties.push({ key, value });
      if (tokens[current].type === "COMMA") {
        current++;
      }
    }
    current++;
    return { type: "ObjectLiteral", properties };
  }
  return parseExpression();
}

// @/lib/ast/eval.ts
var CircularDependencyError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "CircularDependencyError";
  }
};
function evaluateAst(ast, data, currentCell, evaluationChain, functionBindings) {
  switch (ast.type) {
    case "Number":
      return ast.value;
    case "String":
      return ast.value;
    case "CellReference": {
      const refAddress = cellAddressToString({
        col: ast.columnIndex,
        row: ast.rowIndex
      });
      if (evaluationChain.has(refAddress)) {
        throw new CircularDependencyError(
          `Circular dependency detected at ${refAddress}`
        );
      }
      evaluationChain.add(refAddress);
      const cellValue = data[ast.columnIndex]?.[ast.rowIndex]?.value;
      if (typeof cellValue === "string" && cellValue.startsWith("=")) {
        return evaluateFormula({
          formula: cellValue,
          data,
          currentCell: { col: ast.columnIndex, row: ast.rowIndex },
          evaluationChain,
          functionBindings
        });
      }
      return cellValue !== void 0 ? cellValue : 0;
    }
    case "Range": {
      const startCell = { col: ast.start.columnIndex, row: ast.start.rowIndex };
      const endCell = { col: ast.end.columnIndex, row: ast.end.rowIndex };
      const values = [];
      for (let col = startCell.col; col <= endCell.col; col++) {
        for (let row = startCell.row; row <= endCell.row; row++) {
          values.push(data[col]?.[row]?.value ?? 0);
        }
      }
      return values;
    }
    case "BinaryOperation": {
      const left = evaluateAst(
        ast.left,
        data,
        currentCell,
        evaluationChain,
        functionBindings
      );
      const right = evaluateAst(
        ast.right,
        data,
        currentCell,
        evaluationChain,
        functionBindings
      );
      switch (ast.operator) {
        case "+":
          return left + right;
        case "-":
          return left - right;
        case "*":
          return left * right;
        case "/":
          return left / right;
        default:
          throw new Error(`Unknown operator: ${ast.operator}`);
      }
    }
    case "Function": {
      const args = ast.arguments.map(
        (arg) => evaluateAst(arg, data, currentCell, evaluationChain, functionBindings)
      );
      const functionObj = functionBindings[ast.name.toUpperCase()];
      if (!functionObj) {
        throw new Error(`Function ${ast.name} not found`);
      }
      const { functionBody } = functionObj;
      const transpiledCode = ts.transpile(`${functionBody}`);
      let argString;
      if (args.length === 1 && typeof args[0] === "object") {
        argString = JSON.stringify(args[0]);
      } else {
        argString = args.join(", ");
      }
      const res = new Function(`${transpiledCode};
return run(${argString});`)();
      return res;
    }
    case "ObjectLiteral": {
      const obj = {};
      for (const { key, value } of ast.properties) {
        obj[key] = evaluateAst(
          value,
          data,
          currentCell,
          evaluationChain,
          functionBindings
        );
      }
      return obj;
    }
    default:
      throw new Error(`Unknown AST node type: ${JSON.stringify(ast)}`);
  }
}
function evaluateFormula({
  formula,
  data,
  currentCell,
  functionBindings,
  evaluationChain = /* @__PURE__ */ new Set()
}) {
  if (!formula.startsWith("="))
    return formula;
  const currentAddress = cellAddressToString(currentCell);
  if (evaluationChain.has(currentAddress)) {
    throw new CircularDependencyError(
      `Circular dependency detected at ${currentAddress}`
    );
  }
  evaluationChain.add(currentAddress);
  const tokens = tokenize({
    input: formula.slice(1),
    functionBindings
  });
  const ast = parse(tokens);
  return evaluateAst(ast, data, currentCell, evaluationChain, functionBindings);
}
function getCellDependencies({
  formula,
  functionBindings
}) {
  if (!formula.startsWith("="))
    return /* @__PURE__ */ new Set();
  const tokens = tokenize({
    input: formula.slice(1),
    functionBindings
  });
  const ast = parse(tokens);
  const dependencies = /* @__PURE__ */ new Set();
  function traverse(node) {
    if (node.type === "CellReference") {
      dependencies.add(
        cellAddressToString({ col: node.columnIndex, row: node.rowIndex })
      );
    } else if (node.type === "Range") {
      const start = { col: node.start.columnIndex, row: node.start.rowIndex };
      const end = { col: node.end.columnIndex, row: node.end.rowIndex };
      for (let col = start.col; col <= end.col; col++) {
        for (let row = start.row; row <= end.row; row++) {
          dependencies.add(cellAddressToString({ col, row }));
        }
      }
    } else if ("left" in node) {
      traverse(node.left);
      traverse(node.right);
    } else if ("arguments" in node) {
      node.arguments.forEach(traverse);
    }
  }
  traverse(ast);
  return dependencies;
}

// @/lib/table/formula.ts
var updateCellFormula = ({
  prevData,
  colIndex,
  rowIndex,
  newFormula,
  functionBindings,
  display = "hide"
}) => {
  const newData = [...prevData];
  if (!newData[colIndex])
    newData[colIndex] = {};
  const cellAddress = cellAddressToString({
    col: colIndex,
    row: rowIndex
  });
  const oldDependencies = newData[colIndex][rowIndex]?.dependencies || /* @__PURE__ */ new Set();
  const newDependencies = getCellDependencies({
    formula: newFormula,
    functionBindings
  });
  oldDependencies.forEach((dep) => {
    const { col, row } = stringToCellAddress(dep);
    if (newData[col]?.[row] && newData[col][row].dependencies !== void 0) {
      newData[col][row].dependencies.delete(cellAddress);
    }
  });
  newDependencies.forEach((dep) => {
    const { col, row } = stringToCellAddress(dep);
    if (!newData[col])
      newData[col] = {};
    if (!newData[col][row]) {
      newData[col][row] = {
        value: "",
        display,
        formula: "0",
        dependencies: /* @__PURE__ */ new Set()
      };
    }
    if (!newData[col][row].dependencies)
      newData[col][row].dependencies = /* @__PURE__ */ new Set();
    newData[col][row].dependencies.add(cellAddress);
  });
  const promises = {};
  try {
    const newValue = evaluateFormula({
      formula: newFormula,
      data: newData,
      currentCell: {
        col: colIndex,
        row: rowIndex
      },
      functionBindings
    });
    if (newValue instanceof Promise) {
      newData[colIndex][rowIndex] = {
        value: "",
        display,
        formula: newFormula,
        dependencies: newDependencies
      };
      if (!promises[colIndex]) {
        promises[colIndex] = {};
      }
      promises[colIndex][rowIndex] = newValue;
    } else {
      newData[colIndex][rowIndex] = {
        value: newValue,
        formula: newFormula,
        dependencies: newDependencies,
        display
      };
    }
  } catch (error) {
    if (error instanceof CircularDependencyError) {
      newData[colIndex][rowIndex] = {
        value: "#REF!",
        formula: newFormula,
        dependencies: newDependencies,
        display,
        error: "circular_dependency"
      };
    } else {
      throw error;
    }
  }
  return {
    cellStates: newData,
    promises
  };
};

// @/state/update.ts
var handleValueUpdate = (state, payload) => {
  const { row, col, value, display } = payload;
  const existingCell = state.cellStates[col][row];
  const displayMode = display || existingCell?.display || "hide";
  let maxRowHeight = 0;
  const font = `${DEFAULT_FONT_SIZE}px ${DEFAULT_FONT_FAMILY}`;
  for (let i = 0; i < state.headerStates.length; i++) {
    const cell = state.cellStates[i][row];
    if (cell) {
      const text = i === col ? value : cell.value;
      const display2 = i === col ? displayMode : cell.display;
      const height = calculateTextHeight({
        text,
        width: state.headerStates[i].width - DEFAULT_CELL_BORDER_WIDTH * 4 - DEFAULT_CELL_PADDING * 4,
        font,
        display: display2,
        lineHeight: DEFAULT_LINE_HEIGHT
      });
      maxRowHeight = Math.max(maxRowHeight, height, DEFAULT_CELL_HEIGHT);
    }
  }
  const newState = {
    ...state,
    editingValue: "",
    editingCellPosition: null,
    cellStates: state.cellStates.map(
      (column, colIndex) => colIndex === col ? {
        ...column,
        [row]: {
          ...state.cellStates[colIndex][row] ?? {},
          value,
          display: displayMode
        }
      } : column
    ),
    rowStates: {
      ...state.rowStates,
      [row]: {
        ...state.rowStates[row],
        height: maxRowHeight
      }
    }
  };
  return newState;
};
function transformFunctionBindings({
  functionBindings,
  secretKeys
}) {
  const transformedBindings = {};
  functionBindings.functionBindings.forEach((binding) => {
    if (binding.function) {
      if (binding.function.type === "llm") {
        transformedBindings[binding.name.toUpperCase()] = {
          id: binding.function.id,
          functionBody: generateFunctionBody({
            functionData: binding.function,
            secretKeys
          })
        };
      } else {
        transformedBindings[binding.name.toUpperCase()] = {
          id: binding.function.id,
          functionBody: binding.function.functionBody
        };
      }
    }
  });
  return transformedBindings;
}
var handleFormulaUpdate = ({
  state,
  payload,
  functionBindings,
  secretKeys
}) => {
  const { row, col, value, display } = payload;
  const transformedFunctionBindings = transformFunctionBindings({
    functionBindings,
    secretKeys
  });
  const { cellStates, promises } = updateCellFormula({
    prevData: state.cellStates,
    colIndex: col,
    rowIndex: row,
    newFormula: value,
    functionBindings: transformedFunctionBindings,
    display
  });
  return {
    ...state,
    editingValue: "",
    editingCellPosition: null,
    cellStates,
    promises
  };
};

// @/state/sheetReducer.ts
var DEFAULT_CELL_STATE = {
  value: "",
  display: "hide"
};
var initialState = {
  id: "",
  name: `Sheet 1`,
  cellStates: Array.from({ length: DEFAULT_COLUMN_COUNT }, () => ({
    ...Array.from({ length: DEFAULT_ROW_COUNT }, () => {
      return {
        // row col
        value: ``,
        display: "hide"
      };
    })
  })),
  selectedCellPosition: { row: 0, col: 0 },
  editingCellPosition: null,
  headerStates: generateExcelHeaders(DEFAULT_COLUMN_COUNT).map((header) => ({
    value: header,
    type: "text",
    width: DEFAULT_COLUMN_WIDTH
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
  autofillTarget: null
};
var applyAction = (state, action, functionBindings, secretKeys) => {
  switch (action.type) {
    case "SET_CELLS": {
      const cellMap = action.payload;
      const newCellStates = state.cellStates.map((column, colIndex) => {
        const updatedColumn = { ...column };
        Object.entries(cellMap).forEach(([key, cellState]) => {
          const [colStr, rowStr] = key.split("-");
          const col = parseInt(colStr, 10);
          const row = parseInt(rowStr, 10);
          if (col === colIndex) {
            updatedColumn[row] = {
              ...updatedColumn[row],
              ...cellState
            };
          }
        });
        return updatedColumn;
      });
      return {
        ...state,
        cellStates: newCellStates
      };
    }
    case "HANDLE_RESIZE_COLUMN": {
      const newState = {
        ...state,
        headerStates: state.headerStates.map(
          (header, colIndex) => colIndex === action.payload.colIndex ? { ...header, width: action.payload.width } : header
        )
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
                width: newState.headerStates[i].width - DEFAULT_CELL_BORDER_WIDTH * 4 - DEFAULT_CELL_PADDING * 4,
                font: `${DEFAULT_FONT_SIZE}px ${DEFAULT_FONT_FAMILY}`,
                lineHeight: DEFAULT_LINE_HEIGHT,
                display
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
        editingCellPosition: null
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
            col: Math.min(state.selectedCellPosition.col, action.payload.col)
          },
          end: {
            row: Math.max(state.selectedCellPosition.row, action.payload.row),
            col: Math.max(state.selectedCellPosition.col, action.payload.col)
          }
        }
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
        editingCellPosition: null
      };
    }
    case "HANDLE_UPDATE_CELL": {
      const { value } = action.payload;
      if (value.startsWith("=")) {
        if (!functionBindings) {
          throw new Error(
            "Function bindings are required to handle formula updates"
          );
        }
        if (!secretKeys) {
          throw new Error("Secret keys are required to handle formula updates");
        }
        const res = handleFormulaUpdate({
          state,
          payload: action.payload,
          functionBindings,
          secretKeys
        });
        const combinedPromises = {
          ...state.promises ?? {},
          ...res.promises ?? {}
        };
        return {
          ...res,
          promises: combinedPromises,
          showClipboard: false
        };
      }
      return {
        ...handleValueUpdate(state, action.payload),
        showClipboard: false
      };
    }
    case "HANDLE_UPDATE_CELL_RANGE": {
      const { range, value, display } = action.payload;
      const { start, end } = range;
      const newCellStates = [...state.cellStates];
      const newRowStates = { ...state.rowStates };
      for (let col = start.col; col <= end.col; col++) {
        for (let row = start.row; row <= end.row; row++) {
          const existingCell = state.cellStates[col]?.[row];
          const displayMode = display || existingCell?.display || "hide";
          newCellStates[col] = {
            ...newCellStates[col],
            [row]: {
              value: value ?? existingCell?.value ?? "",
              display: displayMode
            }
          };
          let maxRowHeight = 0;
          for (let i = 0; i < state.headerStates.length; i++) {
            const cell = i === col ? { value, display: displayMode } : state.cellStates[i]?.[row];
            const isInRange = i >= start.col && i <= end.col;
            if (cell) {
              const text = cell.value ?? "";
              const height = calculateTextHeight({
                text,
                width: state.headerStates[i].width - DEFAULT_CELL_BORDER_WIDTH * 4 - DEFAULT_CELL_PADDING * 4,
                font: `${DEFAULT_FONT_SIZE}px ${DEFAULT_FONT_FAMILY}`,
                lineHeight: DEFAULT_LINE_HEIGHT,
                display: isInRange ? display : cell.display
              });
              maxRowHeight = Math.max(
                maxRowHeight,
                height,
                DEFAULT_CELL_HEIGHT
              );
            }
          }
          newRowStates[row] = {
            ...newRowStates[row],
            height: maxRowHeight
          };
        }
      }
      return {
        ...state,
        cellStates: newCellStates,
        rowStates: newRowStates
      };
    }
    case "SET_SELECTED_CELL_POSITION":
      return {
        ...state,
        selectedCellPosition: action.payload,
        selectedRows: [],
        selectedCellRange: null
      };
    case "SET_EDITING_CELL_POSITION":
      return { ...state, editingCellPosition: action.payload };
    case "INSERT_ROW": {
      const { rowIndex, rowData } = action.payload;
      const newCellStates = state.cellStates.map((column, colIndex) => {
        const newColumn = { ...column };
        Object.keys(column).map(Number).sort((a, b) => b - a).forEach((rowKey) => {
          if (rowKey >= rowIndex) {
            newColumn[rowKey + 1] = column[rowKey];
          }
        });
        if (rowData && rowData.cellStates[colIndex]) {
          newColumn[rowIndex] = rowData.cellStates[colIndex];
        } else {
          newColumn[rowIndex] = DEFAULT_CELL_STATE;
        }
        return newColumn;
      });
      const newRowStates = {};
      Object.keys(state.rowStates).map(Number).sort((a, b) => b - a).forEach((key) => {
        if (key >= rowIndex) {
          newRowStates[key + 1] = state.rowStates[key];
        } else {
          newRowStates[key] = state.rowStates[key];
        }
      });
      if (rowData && rowData.rowState) {
        newRowStates[rowIndex] = rowData.rowState;
      } else {
        newRowStates[rowIndex] = {
          height: DEFAULT_CELL_HEIGHT,
          specifiedHeight: null,
          hidden: false
        };
      }
      return {
        ...state,
        cellStates: newCellStates,
        rowStates: newRowStates
      };
    }
    case "SET_EDITING_VALUE":
      return { ...state, editingValue: action.payload };
    case "DELETE_ROWS": {
      const rowsToDelete = action.payload.sort((a, b) => b - a);
      let newCellStates = [...state.cellStates];
      const newRowStates = { ...state.rowStates };
      for (const rowIndex of rowsToDelete) {
        newCellStates = newCellStates.map((column) => {
          const newColumn = { ...column };
          delete newColumn[rowIndex];
          Object.keys(newColumn).map(Number).filter((key) => key > rowIndex).sort((a, b) => a - b).forEach((key) => {
            newColumn[key - 1] = newColumn[key];
            delete newColumn[key];
          });
          return newColumn;
        });
        delete newRowStates[rowIndex];
        Object.keys(newRowStates).map(Number).filter((key) => key > rowIndex).sort((a, b) => a - b).forEach((key) => {
          newRowStates[key - 1] = newRowStates[key];
          delete newRowStates[key];
        });
      }
      return {
        ...state,
        cellStates: newCellStates,
        rowStates: newRowStates
      };
    }
    case "INSERT_COLUMN": {
      const { colIndex, columnState, cellStates } = action.payload;
      const defaultColumnState = {
        value: `column_${colIndex + 1}`,
        type: "text",
        width: DEFAULT_COLUMN_WIDTH
      };
      const defaultCellStates = {};
      for (let row = 0; row < state.rowCount; row++) {
        defaultCellStates[row] = {
          value: "",
          display: "hide"
        };
      }
      const newCellStates = [
        ...state.cellStates.slice(0, colIndex),
        cellStates || defaultCellStates,
        // Ensure it's a Record<number, CellState>
        ...state.cellStates.slice(colIndex)
      ];
      const newHeaderStates = [
        ...state.headerStates.slice(0, colIndex),
        columnState || defaultColumnState,
        ...state.headerStates.slice(colIndex)
      ];
      return {
        ...state,
        cellStates: newCellStates,
        headerStates: newHeaderStates
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
        )
      };
    case "CLEAR_CELLS": {
      return handleClear(action, state);
    }
    case "FORMAT_CELLS": {
      const {
        start: formatStart,
        end: formatEnd,
        fontFamily,
        fontSize
      } = action.payload;
      return {
        ...state,
        cellStates: state.cellStates.map((column, colIndex) => {
          const newColumn = { ...column };
          for (let rowIndex = formatStart.row; rowIndex <= formatEnd.row; rowIndex++) {
            if (colIndex >= formatStart.col && colIndex <= formatEnd.col) {
              newColumn[rowIndex] = {
                ...newColumn[rowIndex],
                fontFamily,
                fontSize
              };
            }
          }
          return newColumn;
        })
      };
    }
    case "HANDLE_RESIZE_ROWS": {
      const rows = action.payload;
      const newRowStates = {};
      rows.forEach(({ rowIndex, height }) => {
        newRowStates[rowIndex] = {
          ...state.rowStates[rowIndex],
          specifiedHeight: height
        };
      });
      return {
        ...state,
        rowStates: {
          ...state.rowStates,
          ...newRowStates
        }
      };
    }
    case "HANDLE_DRAG_ROWS":
      return {
        ...state,
        selectedRows: action.payload.sort((a, b) => a - b),
        selectedCellRange: null,
        selectedCellPosition: null
      };
    case "SET_SHEET_NAME":
      return {
        ...state,
        name: action.payload
      };
    case "COPY_CELLS": {
      return handleCopy(action, state);
    }
    case "PASTE_CELLS": {
      return handlePaste(action, state);
    }
    case "INSERT_ROWS": {
      const { rows } = action.payload;
      const sortedRows = [...rows].sort((a, b) => a.rowIndex - b.rowIndex);
      let newState = state;
      for (const row of sortedRows) {
        const insertRowAction = {
          type: "INSERT_ROW",
          payload: {
            rowIndex: row.rowIndex,
            rowData: row.rowData
          }
        };
        newState = applyAction(
          newState,
          insertRowAction,
          functionBindings,
          secretKeys
        );
      }
      return newState;
    }
    case "UNDO": {
      if (state.undoStack.length === 0)
        return state;
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
        secretKeys
      );
      return {
        ...newState,
        undoStack: newUndoStack.slice(0, 500),
        redoStack: newRedoStack.slice(0, 500)
      };
    }
    case "REDO": {
      if (state.redoStack.length === 0)
        return state;
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
        secretKeys
      );
      return {
        ...newState,
        undoStack: newUndoStack.slice(0, 500),
        redoStack: newRedoStack.slice(0, 500)
      };
    }
    case "INITIATE_AUTOFILL": {
      return state;
    }
    case "UPDATE_AUTOFILL_TARGET": {
      const { endRow, endCol } = action.payload;
      return {
        ...state,
        autofillTarget: { row: endRow, col: endCol }
      };
    }
    case "PERFORM_AUTOFILL": {
      const { fillRange } = action.payload;
      let sourceRange;
      if (state.selectedCellRange) {
        sourceRange = state.selectedCellRange;
      } else if (state.selectedCellPosition) {
        sourceRange = {
          start: state.selectedCellPosition,
          end: state.selectedCellPosition
        };
      } else {
        console.warn("No source range for autofill");
        return state;
      }
      const dataToFill = {};
      for (let col = sourceRange.start.col; col <= sourceRange.end.col; col++) {
        for (let row = sourceRange.start.row; row <= sourceRange.end.row; row++) {
          const key = `${col}-${row}`;
          const cellState = state.cellStates[col]?.[row];
          if (cellState) {
            dataToFill[key] = cellState;
          }
        }
      }
      const filledData = generateFillSequence(dataToFill, fillRange);
      const newCellStates = [...state.cellStates];
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
          ...cellState
        };
        const text = cellState.value || "";
        const height = calculateTextHeight({
          text,
          width: state.headerStates[col].width - DEFAULT_CELL_BORDER_WIDTH * 4 - DEFAULT_CELL_PADDING * 4,
          font: `${DEFAULT_FONT_SIZE}px ${DEFAULT_FONT_FAMILY}`,
          lineHeight: DEFAULT_LINE_HEIGHT,
          display: cellState.display || "wrap"
        });
        newRowStates[row] = {
          ...newRowStates[row],
          height: Math.max(height, DEFAULT_CELL_HEIGHT)
        };
      });
      return {
        ...state,
        cellStates: newCellStates,
        rowStates: newRowStates,
        autofillTarget: null
        // Reset autofill target after completion
      };
    }
    default:
      return state;
  }
};
var getInverseAction = (sheetState, action) => {
  switch (action.type) {
    case "HANDLE_RESIZE_COLUMN": {
      const { colIndex } = action.payload;
      const previousWidth = sheetState.headerStates[colIndex].width;
      const inverseAction = {
        type: "HANDLE_RESIZE_COLUMN",
        payload: { colIndex, width: previousWidth }
      };
      return inverseAction;
    }
    case "HANDLE_UPDATE_CELL": {
      const { col, row } = action.payload;
      const previousCellData = sheetState.cellStates[col][row];
      const inverseAction = {
        type: "HANDLE_UPDATE_CELL",
        payload: {
          col,
          row,
          value: previousCellData.value,
          display: previousCellData.display
        }
      };
      return inverseAction;
    }
    case "INSERT_ROW": {
      const { rowIndex } = action.payload;
      const inverseAction = {
        type: "DELETE_ROWS",
        payload: [rowIndex]
      };
      return inverseAction;
    }
    case "DELETE_ROWS": {
      const deletedRows = action.payload;
      const deletedRowData = deletedRows.map((rowIndex) => ({
        rowIndex,
        rowState: sheetState.rowStates[rowIndex],
        cellStates: sheetState.cellStates.map((column) => column[rowIndex])
      }));
      const inverseAction = {
        type: "INSERT_ROWS",
        payload: {
          rows: deletedRowData
        }
      };
      return inverseAction;
    }
    case "INSERT_COLUMN": {
      const { colIndex } = action.payload;
      const inverseAction = {
        type: "DELETE_COLUMN",
        payload: colIndex
      };
      return inverseAction;
    }
    case "DELETE_COLUMN": {
      const deletedColIndex = action.payload;
      const deletedColumnState = sheetState.headerStates[deletedColIndex];
      const deletedCellStates = sheetState.cellStates[deletedColIndex];
      const deletedColumnData = {
        colIndex: deletedColIndex,
        columnState: deletedColumnState,
        cellStates: deletedCellStates
        // Record<number, CellState>
      };
      const inverseAction = {
        type: "INSERT_COLUMN",
        payload: deletedColumnData
        // Now matches InsertColumnPayload with Record<number, CellState>
      };
      return inverseAction;
    }
    case "MOVE_COLUMN": {
      const { fromIndex, toIndex } = action.payload;
      const inverseAction = {
        type: "MOVE_COLUMN",
        payload: { fromIndex: toIndex, toIndex: fromIndex }
      };
      return inverseAction;
    }
    case "CLEAR_CELLS": {
      const { start, end } = action.payload;
      const previousData = {};
      for (let col = start.col; col <= end.col; col++) {
        for (let row = start.row; row <= end.row; row++) {
          previousData[`${col}-${row}`] = sheetState.cellStates[col][row];
        }
      }
      const inverseAction = {
        type: "HANDLE_UPDATE_CELL_RANGE",
        payload: {
          range: { start, end },
          previousData
          // Extend payload to include previous data
        }
      };
      return inverseAction;
    }
    case "FORMAT_CELLS": {
      const { start, end } = action.payload;
      const previousCellStates = {};
      for (let col = start.col; col <= end.col; col++) {
        for (let row = start.row; row <= end.row; row++) {
          previousCellStates[`${col}-${row}`] = {
            ...sheetState.cellStates[col][row]
          };
        }
      }
      const inverseAction = {
        type: "SET_CELLS",
        payload: previousCellStates
      };
      return inverseAction;
    }
    case "HANDLE_RESIZE_ROWS": {
      const resizedRows = action.payload;
      const previousHeights = resizedRows.map(({ rowIndex }) => ({
        rowIndex,
        height: sheetState.rowStates[rowIndex].height
      }));
      const inverseAction = {
        type: "HANDLE_RESIZE_ROWS",
        payload: previousHeights
      };
      return inverseAction;
    }
    case "PASTE_CELLS": {
      const { target, sourceData } = action.payload;
      if (!sourceData) {
        console.warn("No sourceData provided for inverse PASTE_CELLS action.");
        return null;
      }
      const inverseAction = {
        type: "PASTE_CELLS",
        payload: {
          target,
          sourceData
          // Restore previous data
        }
      };
      return inverseAction;
    }
    default:
      return null;
  }
};

// @/hooks/useSpreadsheetes.ts
var import_react = __toESM(require_react(), 1);
var KEY = "spreadsheets";
var useCreateSpreadsheet = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createSpreadsheet"],
    mutationFn: async (args) => {
      const spreadsheets = await localForageInstance.getItem(KEY) || [];
      const newSpreadsheet = {
        id: v4_default(),
        name: args.name || "Untitled Spreadsheet",
        lastOpenedAt: (/* @__PURE__ */ new Date()).toISOString(),
        sheets: [
          {
            ...initialState,
            id: v4_default()
          }
        ]
        // Initialize with default sheets if needed
      };
      spreadsheets.push(newSpreadsheet);
      await localForageInstance.setItem(KEY, spreadsheets);
      queryClient.setQueryData(["spreadsheets"], spreadsheets);
      queryClient.setQueryData(
        ["spreadsheet", newSpreadsheet.id],
        newSpreadsheet
      );
      return newSpreadsheet;
    }
  });
};
var useDeleteSpreadsheet = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteSpreadsheet"],
    mutationFn: async (id) => {
      const spreadsheets = await localForageInstance.getItem(KEY) || [];
      const updatedSpreadsheets = spreadsheets.filter(
        (sheet) => sheet.id !== id
      );
      await localForageInstance.setItem(KEY, updatedSpreadsheets);
      queryClient.removeQueries({ queryKey: ["spreadsheet", id] });
      queryClient.setQueryData(
        ["spreadsheets"],
        updatedSpreadsheets
      );
    }
  });
};
var useUpdateSpreadsheet = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateSpreadsheet"],
    mutationFn: async (updatedSpreadsheet) => {
      const spreadsheets = await localForageInstance.getItem(KEY) || [];
      const newSpreadsheets = spreadsheets.map(
        (sheet) => sheet.id === updatedSpreadsheet.id ? updatedSpreadsheet : sheet
      );
      await localForageInstance.setItem(KEY, newSpreadsheets);
      queryClient.setQueryData(
        ["spreadsheets"],
        newSpreadsheets
      );
      queryClient.setQueryData(
        ["spreadsheet", updatedSpreadsheet.id],
        updatedSpreadsheet
      );
      return updatedSpreadsheet;
    }
  });
};
async function updateSheet(spreadsheetId, sheet) {
  const spreadsheets = await localForageInstance.getItem(KEY) || [];
  const updatedSpreadsheets = spreadsheets.map((spreadsheet) => {
    if (spreadsheet.id === spreadsheetId) {
      const updatedSheets = spreadsheet.sheets.map(
        (s) => s.id === sheet.id ? sheet : s
      );
      return { ...spreadsheet, sheets: updatedSheets };
    }
    return spreadsheet;
  });
  await localForageInstance.setItem(KEY, updatedSpreadsheets);
  return updatedSpreadsheets;
}
var getSpreadsheet = async (spreadsheetId) => {
  const spreadsheets = await localForageInstance.getItem(KEY) || [];
  return spreadsheets.find((sheet) => sheet.id === spreadsheetId);
};
var useSpreadsheet = (id) => {
  const [spreadsheet, setSpreadsheet] = (0, import_react.useState)(null);
  const [isPending, setIsPending] = (0, import_react.useState)(true);
  (0, import_react.useEffect)(() => {
    const _getSpreadsheet = async (spreadsheetId) => {
      setIsPending(true);
      const res = await getSpreadsheet(spreadsheetId);
      if (!res) {
        throw new Error("Spreadsheet not found");
      }
      setSpreadsheet(res);
      setIsPending(false);
    };
    void _getSpreadsheet(id);
  }, [id]);
  return {
    data: spreadsheet,
    isPending
  };
};
var useSpreadsheets = () => {
  return useQuery({
    queryKey: ["spreadsheets"],
    queryFn: async () => {
      const spreadsheets = await localForageInstance.getItem(KEY) || [];
      if (spreadsheets.length === 0) {
        const defaultSpreadsheets = [];
        await localForageInstance.setItem(KEY, defaultSpreadsheets);
        return defaultSpreadsheets;
      }
      return spreadsheets;
    }
  });
};

export {
  handleValueUpdate,
  initialState,
  applyAction,
  getInverseAction,
  useCreateSpreadsheet,
  useDeleteSpreadsheet,
  useUpdateSpreadsheet,
  updateSheet,
  useSpreadsheet,
  useSpreadsheets
};
//# sourceMappingURL=/build/_shared/chunk-M3HYQYO2.js.map
