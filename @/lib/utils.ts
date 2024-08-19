import {
  type CellAddress,
  type ColumnState,
  type RowState,
} from "@/types/sheet";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import ts from "typescript";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateExcelHeaders(length: number): string[] {
  const headers = [];
  for (let i = 0; i < length; i++) {
    headers.push(String.fromCharCode(65 + i));
  }
  return headers;
}

export const transpileTypeScript = (typeScriptCode: string) => {
  // Transpile the TypeScript code to JavaScript using the TypeScript compiler API
  const transpiled = ts.transpileModule(typeScriptCode, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      esModuleInterop: true,
      noImplicitAny: true,
    },
  });
  return transpiled.outputText;
};

export function formatAppleDate(dateStr: string) {
  const date = new Date(dateStr);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dateObj = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (dateObj.getTime() === today.getTime()) {
    return `Today at ${timeFormatter.format(date)}`;
  } else if (dateObj.getTime() === yesterday.getTime()) {
    return `Yesterday at ${timeFormatter.format(date)}`;
  } else if (dateObj.getTime() === tomorrow.getTime()) {
    return `Tomorrow at ${timeFormatter.format(date)}`;
  } else {
    return `${dateFormatter.format(date)} at ${timeFormatter.format(date)}`;
  }
}

export const getTextWidth = (text: string, font: string): number => {
  // Create canvas outside of the function or reuse an existing one
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) {
    console.error("Unable to get 2D context for canvas");
    return 0;
  }

  context.font = font;

  const lines = text.split("\n");
  return Math.max(...lines.map((line) => context.measureText(line).width));
};

export const getTextHeight = (text: string) => {
  const lines = text.split("\n");
  return lines.length * 20;
};

export function calculateTextHeight({
  text,
  width,
  font,
  lineHeight = 1.2,
}: {
  text: string;
  width: number;
  font: string;
  lineHeight?: number;
}): number {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("Canvas 2D context not supported");
  }

  context.font = font;

  let line = "";
  let lineCount = 1;

  for (const char of text) {
    const testLine = line + char;
    const metrics = context.measureText(testLine);
    const testWidth = metrics.width;

    if (testWidth > width) {
      line = char;
      lineCount++;
    } else {
      line = testLine;
    }
  }

  // Calculate the font size from the font string
  const fontSize = parseInt(font.match(/\d+/)?.[0] || "16", 10);

  // Calculate the total height
  const height = lineCount * fontSize * lineHeight;

  return Math.floor(height);
}

export const getRowHeight = ({
  rowIndex,
  rowStates,
  cellState,
}: {
  rowStates: { [key: number]: RowState };
  cellState: ColumnState;
  rowIndex: number;
}) => {
  const height = Math.max(
    24,
    getTextHeight(cellState.value),
    rowStates[rowIndex]?.maxRowHeight ?? 0
  );
  return height;
};

export function isNumber(value: number | string) {
  // First, check if it's already a number
  if (typeof value === "number") {
    return !isNaN(value);
  }

  // If it's a string, try to convert it
  if (typeof value === "string") {
    // Remove leading/trailing whitespace
    value = value.trim();
    if (value === "") {
      return false;
    }

    // Check if it's a valid number string (including decimals)
    return !isNaN(Number(value)) && isFinite(Number(value));
  }

  // If it's neither a number nor a string, it's not a number
  return false;
}

export function getSortedCellRange({
  maybeStart,
  maybeEnd,
}: {
  maybeStart: CellAddress;
  maybeEnd: CellAddress;
}): { start: CellAddress; end: CellAddress } {
  let start = { ...maybeStart };
  let end = { ...maybeEnd };

  // Ensure the top-left (start) and bottom-right (end) order
  if (start.row > end.row || (start.row === end.row && start.col > end.col)) {
    [start, end] = [end, start];
  }

  // If rows are different but columns need adjustment
  if (start.row === end.row) {
    if (start.col > end.col) {
      [start.col, end.col] = [end.col, start.col];
    }
  }

  if (start.col > end.col) {
    [start.col, end.col] = [end.col, start.col];
  }

  return { start, end };
}
