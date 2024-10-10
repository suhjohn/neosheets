// @/lib/utils.ts
import { DEFAULT_LINE_HEIGHT } from "@/constants";
import { CellState, SheetState, type CellAddress } from "@/types/sheet";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
// font: string = "Arial 16px"
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
  lineHeight = DEFAULT_LINE_HEIGHT,
  display = "wrap",
}: {
  text: string;
  width: number;
  font: string;
  lineHeight?: number;
  display?: "wrap" | "hide";
}): number {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("Canvas 2D context not supported");
  }
  context.font = font;

  let lineCount = 1;
  let currentLineWidth = 0;
  let lastSpaceIndex = -1;
  const textLength = text.length;

  let lastWrapIndex = 0; // To keep track of where the current line starts

  // Log initial parameters
  // console.log("Calculating text height with parameters:", {
  //   text,
  //   width,
  //   font,
  //   lineHeight,
  //   display,
  // });

  for (let i = 0; i < textLength; i++) {
    const char = text[i];

    if (display === "hide") {
      if (char === "\n") {
        lineCount++;
        // console.log(
        //   `Newline encountered at index ${i}. Incrementing lineCount to ${lineCount}`
        // );
        lastWrapIndex = i + 1;
      }
      continue; // Skip processing characters in "hide" mode except for new lines
    }

    if (char === "\n") {
      lineCount++;
      // console.log(
      //   `Explicit newline at index ${i}. Incrementing lineCount to ${lineCount}`
      // );
      lastWrapIndex = i + 1;
      currentLineWidth = 0;
      lastSpaceIndex = -1;
      continue;
    }

    const charWidth = context.measureText(char).width;
    const potentialWidth = currentLineWidth + charWidth;

    // Log character and current width
    // console.log(
    //   `Processing character '${char}' at index ${i}. Current line width: ${currentLineWidth}, Char width: ${charWidth}, Potential width: ${potentialWidth}`
    // );

    if (potentialWidth > width) {
      if (lastSpaceIndex !== -1 && lastSpaceIndex >= lastWrapIndex) {
        // Wrap at the last space
        lineCount++;
        // console.log(
        //   `Wrapping at last space index ${lastSpaceIndex}. Incrementing lineCount to ${lineCount}`
        // );
        lastWrapIndex = lastSpaceIndex + 1;
        currentLineWidth = 0;
        lastSpaceIndex = -1;
      } else {
        // No space found, force wrap at current character
        lineCount++;
        // console.log(
        //   `No space to wrap. Force wrapping at index ${i}.
        //   Text: ${text.slice(lastWrapIndex, i + 1)}.
        //   Incrementing lineCount to ${lineCount}`
        // );
        lastWrapIndex = i;
        currentLineWidth = charWidth;
        lastSpaceIndex = -1;
      }
    } else {
      currentLineWidth += charWidth;
      if (char === " ") {
        lastSpaceIndex = i;
        // console.log(
        //   `Space found at index ${i}. Updating lastSpaceIndex to ${lastSpaceIndex}`
        // );
      }
    }
  }

  // Log final line count
  // console.log(`Final lineCount: ${lineCount}`, {
  //   currentLineWidth,
  // });

  // Extract font size from the font string (e.g., "16px Arial")
  const fontSizeMatch = font.match(/(\d+)px/);
  const fontSize = fontSizeMatch ? parseInt(fontSizeMatch[1], 10) : 16; // Default to 16 if not specified

  const calculatedHeight = Math.ceil(lineCount * fontSize * lineHeight);
  // console.log(
  //   `Calculated height: ${calculatedHeight}px based on fontSize: ${fontSize}px and lineHeight: ${lineHeight}`
  // );

  return calculatedHeight;
}

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

const wordList = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
  "orange",
  "peach",
  "quince",
  "raspberry",
  "strawberry",
  "tangerine",
  "watermelon",
  "zucchini",
  // Add more words as needed
];

export const generateRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex];
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove non-word chars (except spaces and hyphens)
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-") // Replace multiple hyphens with single hyphen
    .trim(); // Trim leading/trailing spaces and hyphens
}

export function humanizeCase(input: string): string {
  // Step 1: Split the input string
  const words = input.split(/(?=[A-Z])|[-_]/).map((word) => word.toLowerCase());

  // Step 2: Capitalize the first letter of each word
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Step 3: Join the words and handle special cases
  return capitalizedWords
    .join(" ")
    .replace(/Api/g, "API")
    .replace(/Id\b/g, "ID");
}

export const extractMustacheVariables = (text: string): string[] => {
  const regex = /\{\{(.*?)\}\}/g;
  const matches = text.match(regex);
  return matches ? matches.map((match) => match.slice(2, -2).trim()) : [];
};

export const validateJSON = (
  jsonString: string
): { isValid: boolean; error: string | null } => {
  if (!jsonString.trim()) {
    return { isValid: false, error: "JSON cannot be empty" };
  }

  if (!jsonString.startsWith("{") || !jsonString.endsWith("}")) {
    return {
      isValid: false,
      error: "JSON must start with '{' and end with '}'",
    };
  }

  try {
    JSON.parse(jsonString);
    return { isValid: true, error: null };
  } catch (e) {
    console.error(jsonString, e);
    if (e instanceof SyntaxError) {
      const errorMessage = e.message;
      if (errorMessage.includes("Unexpected token")) {
        return {
          isValid: false,
          error:
            "Invalid character found. Check for misplaced commas or quotes.",
        };
      } else if (errorMessage.includes("Unexpected end of JSON input")) {
        return {
          isValid: false,
          error:
            "JSON is incomplete. Make sure all brackets and braces are closed.",
        };
      } else if (errorMessage.includes("Unexpected string in JSON")) {
        return {
          isValid: false,
          error:
            "Unexpected text found. Make sure all the keys in the JSON are in quotes.",
        };
      }
    }
    return {
      isValid: false,
      error: "Invalid JSON structure. Please check your input.",
    };
  }
};

export const generateFillSequence = (
  dataToFill: { [key: string]: CellState },
  fillRange: {
    start: { row: number; col: number };
    end: { row: number; col: number };
  }
): { [key: string]: CellState } => {
  const filledData: { [key: string]: CellState } = {};
  const sourceData: string[] = [];
  const sourceKeys: string[] = [];

  // **Collect source data up to and including the fillRange.start.row**
  for (let row = 0; row <= fillRange.start.row; row++) {
    // Changed from < to <=
    const key = `${fillRange.start.col}-${row}`;
    if (dataToFill[key]) {
      sourceData.push(dataToFill[key].value);
      sourceKeys.push(key);
    }
  }

  if (sourceData.length === 0) return filledData;

  const patternLength = sourceData.length;
  const fillLength = fillRange.end.row - fillRange.start.row; // Adjusted to avoid overlap
  for (let i = 0; i < fillLength; i++) {
    const sourceIndex = i % patternLength;
    const [sourceCol, sourceRow] = sourceKeys[sourceIndex]
      .split("-")
      .map(Number);
    const targetRow = fillRange.start.row + i + 1; // +1 to start filling from the next row
    const targetKey = `${sourceCol}-${targetRow}`;

    const originalCell = dataToFill[sourceKeys[sourceIndex]];

    const value = originalCell.formula
      ? adjustFormula(originalCell.formula, targetRow - sourceRow)
      : extendSequence(sourceData, i + patternLength, targetRow - sourceRow); // i +1 for correct step

    filledData[targetKey] = {
      value,
      formula: undefined,
      display: originalCell.display || "hide",
    };
  }

  return filledData;
};

const extendSequence = (
  sequence: string[],
  index: number,
  step: number
): string => {
  if (sequence.length === 1) {
    return extendSingleCellPattern(sequence[0], step);
  }

  if (isFormulaSequence(sequence)) {
    return extendFormulaSequence(sequence[index % sequence.length], step);
  }

  if (sequence.every((val) => !isNaN(Number(val)))) {
    return extendNumericSequence(sequence, index);
  }

  if (isAlphabetSequence(sequence)) {
    return extendAlphabetSequence(sequence, index);
  }

  if (isDateSequence(sequence)) {
    return extendDateSequence(sequence, index);
  }

  // Default to repeating pattern for text
  return sequence[index % sequence.length];
};

const extendSingleCellPattern = (value: string, step: number): string => {
  if (!isNaN(Number(value))) {
    return String(Number(value) + step);
  }

  if (isValidDate(value)) {
    const date = new Date(value);
    date.setDate(date.getDate() + step);
    return date.toISOString().split("T")[0];
  }

  if (isValidFormula(value)) {
    return adjustFormula(value, step);
  }

  // Handle single-letter alphabetic sequences
  if (/^[A-Za-z]$/.test(value)) {
    const charCode = value.charCodeAt(0);
    // Handle uppercase and lowercase separately
    if (charCode >= 65 && charCode <= 90) {
      // Uppercase A-Z
      return String.fromCharCode(((charCode - 65 + step) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase a-z
      return String.fromCharCode(((charCode - 97 + step) % 26) + 97);
    }
  }

  // For multi-letter strings or unhandled cases, return the original value
  return value;
};

const isDateSequence = (sequence: string[]): boolean => {
  return sequence.every((val) => isValidDate(val));
};

const extendDateSequence = (sequence: string[], index: number): string => {
  const startDate = new Date(sequence[0]);
  const endDate = new Date(sequence[sequence.length - 1]);
  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const step = diffDays / (sequence.length - 1);

  const newDate = new Date(startDate);
  newDate.setDate(startDate.getDate() + Math.round(step * index));
  return newDate.toISOString().split("T")[0];
};

const extendNumericSequence = (sequence: string[], index: number): string => {
  const numbers = sequence.map(Number);
  const diff = numbers[1] - numbers[0];
  return String(numbers[0] + diff * index);
};

const isFormulaSequence = (sequence: string[]): boolean => {
  return sequence.every((val) => isValidFormula(val));
};

const extendFormulaSequence = (formula: string, step: number): string => {
  return adjustFormula(formula, step);
};

const isValidDate = (dateString: string): boolean => {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
};

const isValidFormula = (value: string): boolean => {
  return value.startsWith("=");
};

const adjustFormula = (formula: string, step: number): string => {
  return formula.replace(/([A-Za-z]+)(\d+)/g, (match, col, row) => {
    const newRow = parseInt(row, 10) + step;
    return `${col}${newRow}`;
  });
};

const isAlphabetSequence = (sequence: string[]): boolean => {
  return sequence.every((val) => /^[A-Za-z]+$/.test(val));
};

const extendAlphabetSequence = (sequence: string[], index: number): string => {
  const start = sequence[0];
  const end = sequence[sequence.length - 1];
  const startCode = start.charCodeAt(0);
  const endCode = end.charCodeAt(0);
  const step = (endCode - startCode) / (sequence.length - 1);

  const newCharCode = Math.round(startCode + step * index);
  return String.fromCharCode(newCharCode);
};

export function getCellsForRow(
  cellStates: SheetState["cellStates"],
  rowIndex: number
): Record<number, CellState> {
  const rowCells: Record<number, CellState> = {};

  cellStates.forEach((column, colIndex) => {
    if (column[rowIndex]) {
      rowCells[colIndex] = column[rowIndex];
    }
  });

  return rowCells;
}

export function deepMerge<T extends Record<string, any>>(
  target: T,
  source: Partial<T>
): T {
  const result = { ...target };

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const sourceValue = source[key];
      const targetValue = result[key];

      // Check if the source value is a Promise
      if (isPromise(sourceValue)) {
        result[key] = sourceValue;
      }
      // If both target and source values are objects, merge them recursively
      else if (
        typeof sourceValue === "object" &&
        sourceValue !== null &&
        !Array.isArray(sourceValue)
      ) {
        result[key] = deepMerge(
          targetValue && typeof targetValue === "object" ? targetValue : {},
          sourceValue
        );
      } else {
        result[key] = sourceValue;
      }
    }
  }

  return result;
}

function isPromise(value: any): value is Promise<any> {
  return Boolean(value) && typeof value.then === "function";
}