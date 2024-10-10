// @/components/Cell.tsx

import {
  DEFAULT_CELL_BORDER_WIDTH,
  DEFAULT_CELL_PADDING,
  DEFAULT_FONT_FAMILY,
  DEFAULT_FONT_SIZE,
  DEFAULT_LINE_HEIGHT,
} from "@/constants";
import {
  NormalizedBindings,
  useFunctionBindings,
} from "@/hooks/useFunctionBindings";
import { calculateTextHeight, cn, getTextWidth } from "@/lib/utils";
import {
  CellAddress,
  ClipboardData,
  SheetAction,
  type CellState,
  type SheetState,
} from "@/types/sheet";
import equals from "fast-deep-equal";
import beautify from "js-beautify";
import { Loader } from "lucide-react";
import type React from "react";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { TbLambda } from "react-icons/tb";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import { Textarea } from "./ui/textarea";

// Utility function to prettify params string
const prettifyParams = (params: string): string => {
  return beautify.js(params, {
    indent_size: 2,
  });
};

type CellProps = {
  spreadsheetId: string;
  rowIndex: number;
  colIndex: number;
  isSelected: boolean;
  isEditing: boolean;
  isRowSelected: boolean;
  isTopRowSelected: boolean;
  isBottomRowSelected: boolean;
  isPromise: boolean;
  cellState: CellState;
  baseWidth: number;
  baseHeight: number;
  editingValue: string | null;
  rangeState: {
    isTopBorderInRange: boolean;
    isBottomBorderInRange: boolean;
    isLeftBorderInRange: boolean;
    isRightBorderInRange: boolean;
    isInRange: boolean;
  };
  clipboard: ClipboardData | null;
  showClipboard?: boolean;
  normalizedBindings: NormalizedBindings;
  onContextMenu: (event: React.MouseEvent) => void;
  onClick: () => void;
  onMouseDown: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onBlur: () => void;
  dispatch: (action: SheetAction) => SheetState;
  autofillRange: {
    start: CellAddress | null;
    end: CellAddress | null;
  };
  onAutofillInitiate: (start: { row: number; col: number }) => void;
};

const Cell = memo<CellProps>(
  ({
    spreadsheetId,
    rowIndex,
    colIndex,
    isSelected,
    isRowSelected,
    isTopRowSelected,
    isBottomRowSelected,
    isEditing,
    isPromise,
    cellState,
    baseWidth,
    baseHeight,
    editingValue,
    rangeState,
    clipboard,
    showClipboard,
    normalizedBindings,
    onContextMenu,
    onMouseDown,
    onBlur,
    dispatch,
    autofillRange,
    onAutofillInitiate,
  }) => {
    const { data: functionBindings } = useFunctionBindings(spreadsheetId);
    const [cursorPosition, setCursorPosition] = useState<number>(0);
    const cellRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const pRef = useRef<HTMLParagraphElement>(null);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const {
      isInRange,
      isBottomBorderInRange,
      isTopBorderInRange,
      isLeftBorderInRange,
      isRightBorderInRange,
    } = rangeState;

    const isCurrentlyEditing =
      isEditing &&
      editingValue !== null &&
      textareaRef.current !== document.activeElement;

    const isFormula =
      isEditing && editingValue !== null && editingValue.startsWith("=");
    const font = `${DEFAULT_FONT_SIZE}px ${DEFAULT_FONT_FAMILY}`;
    const { pHeight } = useMemo(() => {
      if (isEditing) {
        return {
          pHeight: baseHeight,
        };
      }
      const text = cellState.value;
      const textWidth = baseWidth;
      const height = calculateTextHeight({
        text,
        width:
          textWidth - DEFAULT_CELL_BORDER_WIDTH * 4 - DEFAULT_CELL_PADDING * 4,
        font,
        display: cellState.display,
        lineHeight: DEFAULT_LINE_HEIGHT,
      });
      return {
        pWidth: textWidth,
        pHeight: height > baseHeight ? height : baseHeight,
      };
    }, [
      cellState.value,
      cellState.display,
      baseWidth,
      baseHeight,
      font,
      isEditing,
    ]);

    const { textareaWidth, textareaHeight } = useMemo(() => {
      if (!isEditing || editingValue === null) {
        return {
          textareaWidth: 0,
          textareaHeight: 0,
        };
      }
      const textWidth = getTextWidth(editingValue, font) + 30;
      const cellRect = cellRef.current?.getBoundingClientRect();
      const maxWidth = window.innerWidth - (cellRect?.left || 0);
      const finalWidth = Math.min(Math.max(textWidth, baseWidth), maxWidth);
      const height = calculateTextHeight({
        text: editingValue,
        width: finalWidth,
        font,
        display: "wrap",
        lineHeight: DEFAULT_LINE_HEIGHT,
      });
      return {
        textareaWidth: finalWidth,
        textareaHeight: height >= baseHeight ? height : baseHeight,
      };
    }, [isEditing, editingValue, baseWidth, font, baseHeight]);

    // Handle textarea changes
    const handleTextareaChange = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (!isEditing) {
          return;
        }
        dispatch({
          type: "SET_EDITING_VALUE",
          payload: e.target.value,
        });
        // Update cursor position when text changes
        setCursorPosition(e.target.selectionStart);
      },
      [dispatch, isEditing]
    );

    // Handle cursor position changes
    const handleCursorChange = useCallback(
      (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
        const cursorPos = e.currentTarget.selectionStart;
        setCursorPosition(cursorPos);
      },
      []
    );

    // Handle function selection from Combobox
    const handleFunctionSelect = useCallback(
      (func: string) => {
        if (textareaRef.current && editingValue !== null) {
          const cursorPosition = textareaRef.current.selectionStart;
          const prefix = editingValue.slice(0, cursorPosition);
          const suffix = editingValue.slice(cursorPosition);

          // Find the start index of the function name
          const lastEqual = prefix.lastIndexOf("=");
          const lastParen = prefix.lastIndexOf("(");
          const functionStart = Math.max(lastEqual, lastParen) + 1;

          const beforeFunction = editingValue.slice(0, functionStart);
          const newValue = `${beforeFunction}${func.toUpperCase()}(`;

          dispatch({
            type: "SET_EDITING_VALUE",
            payload: `${newValue}${suffix}`,
          });
          const newCursorPosition = beforeFunction.length + func.length + 1; // +1 for '('
          textareaRef.current?.setSelectionRange(
            newCursorPosition,
            newCursorPosition
          );
          textareaRef.current?.focus();
          setCursorPosition(newCursorPosition);
        }
      },
      [dispatch, editingValue]
    );

    useEffect(() => {
      if (isCurrentlyEditing) {
        textareaRef.current?.focus({
          preventScroll: true,
        });
        textareaRef.current?.setSelectionRange(
          editingValue.length,
          editingValue.length
        );
        setCursorPosition(editingValue.length);
      }
    }, [editingValue, isCurrentlyEditing]);

    const handleEscape = useCallback(() => {
      if (!isEditing || editingValue === null) {
        return;
      }
      dispatch({
        type: "HANDLE_BLUR_CELL",
      });
      onBlur();
    }, [isEditing, editingValue, dispatch, onBlur]);

    const handleUpdate = useCallback(() => {
      if (!isEditing || editingValue === null) {
        return;
      }
      dispatch({
        type: "HANDLE_UPDATE_CELL",
        payload: {
          row: rowIndex,
          col: colIndex,
          value: editingValue,
          display: cellState.display,
        },
      });
      onBlur();
    }, [
      isEditing,
      editingValue,
      dispatch,
      rowIndex,
      colIndex,
      cellState.display,
      onBlur,
    ]);

    const handleMouseDown = useCallback(
      async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.button === 0 || e.button === 1) {
          if (e.shiftKey) {
            dispatch({
              type: "HANDLE_DRAG_CELLS",
              payload: { row: rowIndex, col: colIndex },
            });
          } else {
            dispatch({
              type: "HANDLE_UNCLICKED_TO_CLICKED_CELL",
              payload: { row: rowIndex, col: colIndex },
            });
          }
        }
        onMouseDown(e);
      },
      [colIndex, dispatch, onMouseDown, rowIndex]
    );

    const handleDoubleClick = useCallback(() => {
      dispatch({
        type: "HANDLE_DOUBLE_CLICK_CELL",
        payload: { row: rowIndex, col: colIndex },
      });
    }, [dispatch, rowIndex, colIndex]);

    const currentFunctionStr = useMemo(() => {
      if (!editingValue || isFormula === false) {
        return null;
      }
      if (!editingValue.startsWith("=")) {
        return null;
      }
      if (cursorPosition === 0) {
        return null;
      }
      const formula = editingValue.substring(1, cursorPosition); // Remove the leading '=' and use up to cursor
      const stack: string[] = [];

      // Regular expression to match function names followed by '(' or ')' characters
      const regex = /([A-Za-z_][A-Za-z0-9_]*)\s*\(|\)/g;
      let match: RegExpExecArray | null;

      while ((match = regex.exec(formula)) !== null) {
        if (match[1]) {
          // If a function name followed by '(', push it onto the stack
          stack.push(match[1].toUpperCase());
        } else {
          // If a ')', pop the last function from the stack
          stack.pop();
        }
      }

      // The current function is the one on top of the stack
      return stack.length > 0 ? stack[stack.length - 1] : null;
    }, [editingValue, cursorPosition, isFormula]);

    const filteredFunctions = useMemo(() => {
      if (!functionBindings || !editingValue || !normalizedBindings) {
        return [];
      }
      // Remove the leading '=' and slice up to cursorPosition
      const value = editingValue.startsWith("=")
        ? editingValue.slice(1, cursorPosition)
        : editingValue.slice(0, cursorPosition);

      // Split the value by commas and parentheses to find the last meaningful segment
      const tokens = value.split(/[\s,()]+/);
      const currentInput = tokens[tokens.length - 1]?.toLowerCase() || "";

      // If the last character is an opening parenthesis, it means a function was just completed
      const lastChar = value.slice(-1);
      const isFunctionComplete = lastChar === "(";
      if (isFunctionComplete || currentInput === "") {
        // If a function is complete or there's no current input, show all functions
        return normalizedBindings;
      }

      // Filter based on the current input segment
      const filtered = normalizedBindings.filter((b) =>
        b.name.startsWith(currentInput)
      );

      return filtered;
    }, [functionBindings, editingValue, normalizedBindings, cursorPosition]);

    const handleTextareaKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (!isEditing) {
          return;
        }
        if (e.key === "Escape") {
          if (isFormula && selectedIndex !== -1) {
            e.preventDefault();
            e.stopPropagation();
            setSelectedIndex(-1);
            return;
          }
          e.preventDefault();
          e.stopPropagation();
          handleEscape();
          return;
        }
        if (e.key === "Enter" && e.altKey) {
          e.preventDefault();
          e.stopPropagation();
          if (textareaRef.current) {
            const textarea = textareaRef.current;
            const { selectionStart, selectionEnd } = textarea;
            const beforeCursor = editingValue?.slice(0, selectionStart);
            const afterCursor = editingValue?.slice(selectionEnd);
            const newValue = `${beforeCursor}\n${afterCursor}`;
            dispatch({
              type: "SET_EDITING_VALUE",
              payload: newValue,
            });
            // Update the cursor position to be after the newline
            setTimeout(() => {
              textarea.setSelectionRange(
                selectionStart + 1,
                selectionStart + 1
              );
              setCursorPosition(selectionStart + 1);
            }, 0);
          }
          return;
        }
        if (e.key === "Enter") {
          e.preventDefault();
          e.stopPropagation();
          handleUpdate();
          return;
        }
      },
      [
        isEditing,
        isFormula,
        selectedIndex,
        handleEscape,
        dispatch,
        editingValue,
        handleUpdate,
      ]
    );
    // Handler for initiating autofill drag
    const handleAutofillMouseDown = useCallback(
      (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();
        onAutofillInitiate({ row: rowIndex, col: colIndex });
      },
      [rowIndex, colIndex, onAutofillInitiate]
    );

    const handleCellKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (isEditing) {
          return;
        }
        if (e.key === "Enter") {
          dispatch({
            type: "HANDLE_UNCLICKED_TO_CLICKED_CELL",
            payload: { row: rowIndex, col: colIndex },
          });
          textareaRef.current?.focus({
            preventScroll: true,
          });
          return;
        }
      },
      [isEditing, rowIndex, colIndex, dispatch]
    );

    const handleContextMenu = useCallback(
      (e: React.MouseEvent) => {
        if (!isRowSelected) {
          dispatch({
            type: "HANDLE_UNCLICKED_TO_CLICKED_CELL",
            payload: { row: rowIndex, col: colIndex },
          });
        }
        onContextMenu(e);
      },
      [onContextMenu, isRowSelected, dispatch, rowIndex, colIndex]
    );
    const isCopied =
      clipboard &&
      showClipboard !== false &&
      rowIndex >= clipboard.start.row &&
      rowIndex <= clipboard.end.row &&
      colIndex >= clipboard.start.col &&
      colIndex <= clipboard.end.col;

    // Determine if the cell is on the border of the clipboard range
    const _isValidCopy = isCopied && clipboard;
    const isOnTopBorder = _isValidCopy && rowIndex === clipboard.start.row;
    const isOnBottomBorder = _isValidCopy && rowIndex === clipboard.end.row;
    const isOnLeftBorder = _isValidCopy && colIndex === clipboard.start.col;
    const isOnRightBorder = _isValidCopy && colIndex === clipboard.end.col;
    const clipboardBorderClasses = [
      isOnTopBorder &&
        "border-t border-dashed border-blue-600 dark:border-t-blue-400",
      isOnBottomBorder &&
        "border-b border-dashed border-blue-600 dark:border-b-blue-400",
      isOnLeftBorder &&
        "border-l border-dashed border-blue-600 dark:border-l-blue-400",
      isOnRightBorder &&
        "border-r border-dashed border-blue-600 dark:border-r-blue-400",
    ].join(" ");
    const rangedBorderClasses = [
      isTopBorderInRange && "border-t-blue-500 dark:border-t-blue-500",
      isBottomBorderInRange && "border-b-blue-500 dark:border-b-blue-500",
      isLeftBorderInRange && "border-l-blue-500 dark:border-l-blue-500",
      isRightBorderInRange && "border-r-blue-500 dark:border-r-blue-500",
    ].join(" ");

    const isInAutofillRange =
      autofillRange &&
      autofillRange.start !== null &&
      autofillRange.end !== null &&
      rowIndex > autofillRange.start?.row &&
      rowIndex <= autofillRange.end?.row &&
      colIndex >= autofillRange.start?.col &&
      colIndex <= autofillRange.end?.col;

    const isAutofillTopBorder =
      isInAutofillRange && rowIndex === autofillRange.start?.row;
    const isAutofillBottomBorder =
      isInAutofillRange && rowIndex === autofillRange.end?.row;
    const isAutofillLeftBorder =
      isInAutofillRange && colIndex === autofillRange.start?.col;
    const isAutofillRightBorder =
      isInAutofillRange && colIndex === autofillRange.end?.col;

    const autofillBorderClasses = [
      isAutofillTopBorder &&
        "border-dashed border-t-stone-500 dark:border-t-stone-500",
      isAutofillBottomBorder &&
        "border-dashed border-b-stone-500 dark:border-b-stone-500",
      isAutofillLeftBorder &&
        "border-dashed border-l-stone-500 dark:border-l-stone-500",
      isAutofillRightBorder &&
        "border-dashed border-r-stone-500 dark:border-r-stone-500",
    ].join(" ");

    const cellContent =
      isEditing && editingValue !== null ? (
        <>
          <Textarea
            id={`textarea-${rowIndex}-${colIndex}`}
            ref={textareaRef}
            value={editingValue}
            onChange={handleTextareaChange}
            onSelect={handleCursorChange} // Added to handle cursor position
            onKeyUp={handleCursorChange} // Added to handle cursor position
            onKeyDown={handleTextareaKeyDown}
            className={cn(
              "rounded-none",
              "border-none",
              "focus-visible:outline-none",
              "text-black",
              "dark:text-stone-300",
              "py-0",
              "border-0",
              "resize-none",
              "overflow-hidden",
              "border-box",
              "break-all",
              `min-h-[${baseHeight}px]`
            )}
            style={{
              paddingLeft: `${DEFAULT_CELL_PADDING}px`,
              paddingRight: `${DEFAULT_CELL_PADDING}px`,
              width: `${textareaWidth}px`,
              height: `${textareaHeight}px`,
              fontSize: `${DEFAULT_FONT_SIZE}px`,
              fontFamily: DEFAULT_FONT_FAMILY,
              lineHeight: `${DEFAULT_LINE_HEIGHT}`,
            }}
          />
          {isFormula && (
            <div className="absolute min-w-64">
              <Command>
                <CommandList role="listbox" aria-label="Formula List">
                  {currentFunctionStr !== null && (
                    <>
                      <CommandGroup className="p-2 sticky top-0 bg-white dark:bg-stone-950 z-10">
                        <p className="text-xs text-stone-500 dark:text-stone-400">
                          Current formula
                        </p>
                        <pre className="text-xs whitespace-pre-wrap">
                          {currentFunctionStr}(
                          {prettifyParams(
                            normalizedBindings?.find(
                              (fn) =>
                                fn.name.toLowerCase().trim() ===
                                currentFunctionStr?.toLowerCase().trim()
                            )?.params || ""
                          )}
                          )
                        </pre>
                      </CommandGroup>
                      <CommandSeparator />
                    </>
                  )}
                  <CommandGroup>
                    {filteredFunctions.map((fn, index) => (
                      <CommandItem
                        key={fn.name}
                        value={fn.name}
                        onSelect={(currentValue) => {
                          handleFunctionSelect(currentValue);
                          setSelectedIndex(-1);
                        }}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={cn(
                          "flex flex-col items-start gap-1",
                          index === selectedIndex &&
                            "bg-stone-50 dark:bg-stone-850"
                        )}
                        role="option"
                      >
                        <div className="flex items-start justify-between w-full text-wrap whitespace-pre text-xs">
                          <pre className="text-xs whitespace-pre-wrap">
                            {`${fn.name.toUpperCase()}(${prettifyParams(
                              fn.params
                            )})`}
                          </pre>
                          {fn.function?.resource?.logoUrl ? (
                            <img
                              src={fn.function.resource.logoUrl}
                              alt={fn.name}
                              className="w-5 h-5 mr-2"
                            />
                          ) : (
                            <div className="w-5 h-5 mr-2 flex items-center justify-center">
                              <TbLambda size={16} />
                            </div>
                          )}
                        </div>
                        <p
                          className={cn(
                            "text-[10px]",
                            "text-stone-500",
                            "dark:text-stone-400"
                          )}
                        >
                          {fn.description ?? "No description"}
                        </p>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                  <CommandEmpty>No function found.</CommandEmpty>
                </CommandList>
              </Command>
            </div>
          )}
        </>
      ) : (
        <p
          ref={pRef}
          className={cn(
            "py-0",
            "m-0",
            "text-sm",
            "border-transparent",
            "text-black dark:text-white",
            "hover:cursor-default",
            "focus:cursor-default",
            "text-stone-800",
            "dark:text-stone-350",
            "focus-visible:cursor-default",
            cellState.display === "wrap"
              ? "whitespace-pre-wrap break-all"
              : "whitespace-pre overflow-hidden"
          )}
          style={{
            paddingLeft: `${DEFAULT_CELL_PADDING}px`,
            paddingRight: `${DEFAULT_CELL_PADDING}px`,
            width: `${baseWidth - 1}px`,
            minHeight: `${pHeight}px`,
            fontSize: `${DEFAULT_FONT_SIZE}px`,
            fontFamily: DEFAULT_FONT_FAMILY,
            lineHeight: `${DEFAULT_LINE_HEIGHT}`,
          }}
        >
          {isPromise ? (
            <span className="w-full h-full flex justify-center items-center">
              <Loader size={16} className="animate-spin" />
            </span>
          ) : cellState.type === "object" ? (
            cellState.value
          ) : (
            cellState.value
          )}
        </p>
      );

    return (
      <div
        ref={cellRef}
        data-cell-row={rowIndex}
        data-cell-col={colIndex}
        className={cn(
          "flex-shrink-0",
          `border-[0.5px]`,
          "bg-white",
          "dark:bg-stone-950",
          "border-stone-200",
          "dark:border-stone-800",
          "relative",
          "p-0",
          "border-spacing-0",
          "z-0",
          "hover:cursor-default",
          "focus:cursor-default",
          "focus-visible:cursor-default",
          isSelected
            ? "z-[10] ring-1 ring-blue-500 dark:ring-blue-500 ring-inset border-blue-500 dark:border-blue-500"
            : "",
          isInRange ? `bg-blue-50 dark:bg-blue-900 ${rangedBorderClasses}` : "",
          isRowSelected ? "bg-blue-50 dark:bg-blue-900" : "",
          isTopRowSelected
            ? "border-t border-t-blue-600 dark:border-t-blue-400 bg-blue-50 dark:bg-blue-900"
            : "",
          isBottomRowSelected
            ? "border-b border-b-blue-600 dark:border-b-blue-400 bg-blue-50 dark:bg-blue-900"
            : "",
          autofillBorderClasses,
          isCopied ? clipboardBorderClasses : ""
        )}
        style={{
          width: baseWidth,
          height: pHeight,
        }}
        tabIndex={0}
        onKeyDown={handleCellKeyDown}
        onDoubleClick={isEditing ? undefined : handleDoubleClick}
        onContextMenu={isEditing ? undefined : handleContextMenu}
        onMouseDown={isEditing ? undefined : handleMouseDown}
      >
        {cellContent}
        {((isInRange && isBottomBorderInRange && isRightBorderInRange) ||
          (!isInRange && isSelected && !isEditing)) && (
          <div
            className="z-[100] absolute bottom-0 right-0 w-2 h-2 bg-blue-500 rounded-full hover:cursor-crosshair"
            style={{
              transform: "translate(50%, 50%)",
            }}
            onMouseDown={handleAutofillMouseDown}
          />
        )}
      </div>
    );
  },
  (prev, next) => {
    return equals(prev, next);
  }
);

Cell.displayName = "Cell";

export default Cell;
