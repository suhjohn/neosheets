import {
  calculateTextHeight,
  cn,
  getSortedCellRange,
  getTextHeight,
  getTextWidth,
} from "@/lib/utils";
import { type CellData, type CellDisplay } from "@/types/sheet";
import type React from "react";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSheetContext } from "./SheetContext";
import { Textarea } from "./ui/textarea";

type CellProps = {
  rowIndex: number;
  colIndex: number;
  width: number;
  onChange: (
    rowIndex: number,
    colIndex: number,
    value: string,
    display: CellDisplay
  ) => void;
  onClick: (rowIndex: number, colIndex: number) => void;
  onDoubleClick: (rowIndex: number, colIndex: number) => void;
  // Add this line
  onContextMenu: (
    event: React.MouseEvent,
    rowIndex: number,
    colIndex: number
  ) => void;
  onMouseDown: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    rowIndex: number,
    colIndex: number
  ) => void;
  onMouseEnter: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    rowIndex: number,
    colIndex: number
  ) => void;
};
const Cell = memo<CellProps>(
  ({
    rowIndex,
    colIndex,
    width,
    onClick: onCellClick,
    onDoubleClick: onCellDoubleClick,
    onContextMenu,
    onMouseDown,
    onMouseEnter,
  }) => {
    const { state, dispatch, handleCellUpdate } = useSheetContext();
    const {
      cellStates,
      selectedCellRange,
      editingCellPosition,
      selectedCellPosition,
      rowStates,
      editingValue,
    } = state;

    const isSelected =
      selectedCellPosition?.row === rowIndex &&
      selectedCellPosition?.col === colIndex;
    const isEditing =
      editingCellPosition?.row === rowIndex &&
      editingCellPosition?.col === colIndex;
    const sortedRange = useMemo(
      () =>
        selectedCellRange &&
        getSortedCellRange({
          maybeStart: selectedCellRange?.start || selectedCellPosition,
          maybeEnd: selectedCellRange?.end || selectedCellPosition,
        }),
      [selectedCellRange, selectedCellPosition]
    );
    const isInRange =
      sortedRange &&
      sortedRange.start.row <= rowIndex &&
      sortedRange.end.row >= rowIndex &&
      sortedRange.start.col <= colIndex &&
      sortedRange.end.col >= colIndex;

    const cellState: CellData = cellStates[colIndex]?.[rowIndex] || {
      value: "",
      display: "hide",
    };

    const [textareaSize, setTextareaSize] = useState({
      width,
      height: 0,
    });
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const pRef = useRef<HTMLParagraphElement>(null);
    const prevIsEditingRef = useRef(isEditing);
    const font = "Inter 14px"; // TODO: get font

    const updateTextareaSize = useCallback(
      (value: string) => {
        if (textareaRef.current) {
          const textWidth = getTextWidth(value, font);
          setTextareaSize({
            width: Math.max(textWidth, width),
            height: Math.max(getTextHeight(value), 24),
          });
        }
      },
      [width]
    );

    useEffect(() => {
      if (isEditing && !prevIsEditingRef.current && textareaRef.current) {
        textareaRef.current.focus();
        textareaRef.current.setSelectionRange(
          editingValue.length,
          editingValue.length
        );
      }
      prevIsEditingRef.current = isEditing;
    }, [isEditing, editingValue]);

    // useEffect(() => {
    //   setEditingValue(
    //     cellState.formula !== undefined
    //       ? cellState.formula
    //       : cellState.value.toString()
    //   );
    // }, [cellState.value, cellState.formula, setEditingValue]);

    useEffect(() => {
      updateTextareaSize(
        cellState.formula !== undefined
          ? cellState.formula
          : cellState.value.toString()
      );
    }, [isEditing, cellState.value, updateTextareaSize, cellState.formula]);

    const handleBlur = useCallback(() => {
      handleCellUpdate(rowIndex, colIndex, editingValue, cellState.display);
    }, [handleCellUpdate, rowIndex, colIndex, editingValue, cellState.display]);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({
          type: "SET_EDITING_VALUE",
          payload: e.target.value,
        });
        updateTextareaSize(e.target.value);
      },
      [dispatch, updateTextareaSize]
    );

    const handleTextareaKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
          handleBlur();
        }
      },
      [handleBlur]
    );

    const handleClick = useCallback(
      (
        e:
          | React.MouseEvent<HTMLDivElement>
          | React.MouseEvent<HTMLTextAreaElement>
          | React.KeyboardEvent<HTMLDivElement>
      ) => {
        onCellClick(rowIndex, colIndex);
        if (isEditing) {
          handleBlur();
        }
        e.stopPropagation();
        e.preventDefault();
      },
      [rowIndex, colIndex, onCellClick, isEditing, handleBlur]
    );

    const handleDoubleClick = useCallback(() => {
      onCellDoubleClick(rowIndex, colIndex);
      if (isEditing) {
        handleBlur();
      }
    }, [rowIndex, colIndex, onCellDoubleClick, isEditing, handleBlur]);
    const textareaHeight = Math.max(
      24,
      textareaSize.height,
      rowStates[rowIndex]?.maxRowHeight ?? 0
    );
    const getRangeBorderClasses = () => {
      if (!isInRange || !selectedCellRange) return "";

      const classes = [];
      if (rowIndex === Math.min(sortedRange.start.row, sortedRange.end.row)) {
        classes.push("border-t-blue-500 dark:border-t-blue-500");
      }
      if (rowIndex === Math.max(sortedRange.start.row, sortedRange.end.row)) {
        classes.push("border-b-blue-500 dark:border-b-blue-500");
      }
      if (colIndex === Math.min(sortedRange.start.col, sortedRange.end.col)) {
        classes.push("border-l-blue-500 dark:border-l-blue-500");
      }
      if (colIndex === Math.max(sortedRange.start.col, sortedRange.end.col)) {
        classes.push("border-r-blue-500 dark:border-r-blue-500");
      }

      return classes.length > 0 ? `${classes.join(" ")}` : "";
    };

    const handleCellKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        console.log("[Cell.tsx] handleCellKeyDown");
        if (e.key === "Enter") {
          handleClick(e);
        }
      },
      [handleClick]
    );

    const cellContent = isEditing ? (
      <Textarea
        ref={textareaRef}
        value={editingValue}
        onKeyDown={handleTextareaKeyDown}
        onChange={handleChange}
        onBlur={handleBlur}
        className={cn(
          "text-black dark:text-white z-[10000] w-full h-full px-1 py-0 border-0 rounded-none resize-none overflow-hidden",
          "absolute top-[-1px] left-[-1px] box-border dark:focus-visible:ring-blue-700 focus-visible:ring-blue-300"
        )}
        style={{
          width: `${textareaSize.width}px`,
          height: `${textareaHeight}px`,
        }}
      />
    ) : (
      <div
        ref={pRef}
        className={cn(
          "px-1 py-0 w-full h-full m-0 text-sm border-transparent text-black dark:text-white",
          cellState.display === "wrap"
            ? "whitespace-pre- break-words"
            : "whitespace-pre overflow-hidden"
        )}
        style={{
          width: `${width - 1}px`,
          height: `${textareaHeight}px`,
        }}
      >
        {cellState.value}
      </div>
    );
    const height = Math.max(24, rowStates[rowIndex]?.maxRowHeight ?? 0);
    const wrappedHeight = Math.max(
      calculateTextHeight({
        text: cellState.value.toString() ?? "",
        width: width / 2,
        font,
        lineHeight: 1.4,
      }),
      rowStates[rowIndex]?.maxRowHeight ?? 0
    );

    const handleContextMenu = useCallback(
      (e: React.MouseEvent) => {
        e.preventDefault();
        onContextMenu(e, rowIndex, colIndex);
      },
      [onContextMenu, rowIndex, colIndex]
    );
    const handleMouseDown = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        onMouseDown(e, rowIndex, colIndex);
      },
      [onMouseDown, rowIndex, colIndex]
    );

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        onMouseEnter(e, rowIndex, colIndex);
      },
      [onMouseEnter, rowIndex, colIndex]
    );

    return (
      <div
        className={cn(
          "flex-shrink-0",
          "border-[0.5px]",
          "border-zinc-200",
          "dark:border-zinc-800",
          "relative",
          "p-0",
          "border-spacing-0",
          "z-0",
          isSelected
            ? "z-[10] ring-1 ring-blue-500 dark:ring-blue-500 ring-inset border-blue-500 dark:border-blue-500"
            : "",
          isInRange
            ? `bg-blue-50 dark:bg-blue-900 ${getRangeBorderClasses()}`
            : ""
        )}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onContextMenu={handleContextMenu}
        onKeyDown={handleCellKeyDown}
        style={{
          width,
          height: cellState.display === "wrap" ? wrappedHeight : height,
        }}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
      >
        {cellContent}
      </div>
    );
  }
);

Cell.displayName = "Cell";

export default Cell;
