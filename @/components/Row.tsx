import { DEFAULT_CELL_HEIGHT, DEFAULT_COLUMN_WIDTH } from "@/constants";
import { NormalizedBindings } from "@/hooks/useFunctionBindings";
import { cn, getSortedCellRange } from "@/lib/utils";
import { getRowHeight } from "@/state/utils";
import {
  CellState,
  ClipboardData,
  SheetAction,
  type CellAddress,
  type ColumnState,
  type RowState,
  type SheetState
} from "@/types/sheet";
import equals from "fast-deep-equal";
import type React from "react";
import { memo, useMemo } from "react";
import Cell from "./Cell";
export interface RowProps {
  spreadsheetId: string;
  rowIndex: number;
  top: number;
  rowStates: {
    [row: number]: RowState;
  };
  headerStates: ColumnState[];
  // cellStates: CellStates[];
  cellRowStates: Record<number, CellState>;
  isDraggingRows: boolean;
  promises: Record<number, Record<number, Promise<unknown>>> | null;
  selectedRows: number[];
  selectedCellPosition: CellAddress | null;
  editingCellPosition: CellAddress | null;
  editingValue: string | null;
  selectedCellRange: {
    start: CellAddress;
    end: CellAddress;
  } | null;
  clipboard: ClipboardData | null;
  showClipboard?: boolean;
  normalizedBindings: NormalizedBindings; // TODO refactor this
  handleRowContextMenu: (e: React.MouseEvent, rowIndex: number) => void;
  handleRowMouseDown: (e: React.MouseEvent, rowIndex: number) => void;
  handleRowMouseEnter: (rowIndex: number) => void;
  handleMouseDown: (e: React.MouseEvent) => void;
  handleCellClick: () => void;
  onContextMenu: (e: React.MouseEvent) => void;
  handleTextareaBlur: () => void;
  dispatch: (action: SheetAction) => SheetState;
  handleMouseDownRowHeader: (params: {
    e: React.MouseEvent<HTMLDivElement>;
    height: number;
    rowIndex: number;
  }) => void;
  handleMouseEnter: (
    e: React.MouseEvent<HTMLDivElement>,
    rowIndex: number,
    colIndex: number
  ) => void;
  autofillRange: {
    start: CellAddress | null;
    end: CellAddress | null;
  }
  onAutofillInitiate: (start: { row: number; col: number }) => void;
}

const Row: React.FC<RowProps> = ({
  spreadsheetId,
  rowIndex,
  top,
  rowStates,
  headerStates,
  cellRowStates,
  isDraggingRows,
  promises,
  selectedRows,
  selectedCellPosition,
  editingCellPosition,
  editingValue,
  selectedCellRange,
  clipboard,
  showClipboard,
  normalizedBindings,
  handleRowContextMenu,
  handleRowMouseDown,
  handleRowMouseEnter,
  handleMouseDown,
  handleCellClick,
  onContextMenu,
  handleTextareaBlur,
  handleMouseDownRowHeader,
  dispatch,
  handleMouseEnter,
  autofillRange,
  onAutofillInitiate
}) => {
  const { start, end } = useMemo(() => {
    if (selectedCellRange === null) {
      return { start: null, end: null };
    }
    return getSortedCellRange({
      maybeStart: selectedCellRange.start,
      maybeEnd: selectedCellRange.end,
    });
  }, [selectedCellRange]);

  return (
    <div
      key={`row-${rowIndex}`}
      className={cn("flex hover:bg-stone-100 dark:hover:bg-stone-900 relative")}
      style={{
        position: "absolute",
        top,
        left: 0,
      }}
    >
      <div
        style={{
          width: "46px",
          height: getRowHeight({
            rowIndex,
            rowStates,
          }),
          position: "sticky",
          left: 0,
        }}
        onContextMenu={(e) => handleRowContextMenu(e, rowIndex)}
        onMouseDown={(e) => handleRowMouseDown(e, rowIndex)}
        onMouseEnter={
          isDraggingRows
            ? (e) => {
              e.preventDefault();
              handleRowMouseEnter(rowIndex);
            }
            : undefined
        }
        className={cn(
          "flex",
          "items-center",
          "justify-center",
          "text-[11px]",
          "px-0",
          "z-[100]",
          "overflow-hidden",
          "text-stone-600",
          "dark:text-stone-400",
          "bg-stone-50",
          "dark:bg-stone-900",
          "border-b-[0.5px]",
          "border-t-[0.5px]",
          "border-r",
          "border-stone-300",
          "dark:border-stone-700",
          selectedRows.includes(rowIndex) &&
          "bg-blue-500 dark:bg-blue-500 text-white dark:text-white font-bold dark:border-blue-400 border-blue-600 dark:border-blue-400"
        )}
      >
        <p className="cursor-default">{rowIndex + 1}</p>
        {!isDraggingRows && (
          <div
            className={cn(
              "absolute",
              "w-[46px]",
              "z-[100]",
              "bottom-[-4.5px]",
              "left-0",
              "right-0",
              "h-[9px]",
              "cursor-row-resize",
              "bg-transparent",
              "hover:bg-stone-300",
              "dark:hover:bg-stone-700"
            )}
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (e.button === 2) {
                return;
              }
              handleMouseDownRowHeader({
                e,
                height: getRowHeight({ rowIndex, rowStates }),
                rowIndex,
              });
            }}
          />
        )}
      </div>
      {headerStates.map((_, colIndex) => (
        <div
          key={`${rowIndex}:${colIndex}`}
          className={
            cn(start !== null &&
              end !== null &&
              start.row <= rowIndex &&
              end.row >= rowIndex &&
              start.col <= colIndex &&
              end.col >= colIndex && 'z-[1]')
          }
          onMouseEnter={(e) => handleMouseEnter(e, rowIndex, colIndex)}
        >
          <Cell
            spreadsheetId={spreadsheetId}
            rowIndex={rowIndex}
            colIndex={colIndex}
            cellState={cellRowStates[colIndex]}
            isRowSelected={selectedRows.includes(rowIndex)}
            isTopRowSelected={selectedRows[0] === rowIndex}
            isBottomRowSelected={
              selectedRows[selectedRows.length - 1] === rowIndex
            }
            isSelected={
              selectedCellPosition?.row === rowIndex &&
              selectedCellPosition?.col === colIndex
            }
            isEditing={
              editingCellPosition?.row === rowIndex &&
              editingCellPosition?.col === colIndex
            }
            isPromise={
              promises !== null &&
              promises[colIndex] !== undefined &&
              promises[colIndex][rowIndex] !== null &&
              promises[colIndex][rowIndex] !== undefined
            }
            baseWidth={headerStates[colIndex]?.width || DEFAULT_COLUMN_WIDTH}
            baseHeight={
              rowStates[rowIndex]?.specifiedHeight ||
              rowStates[rowIndex]?.height ||
              DEFAULT_CELL_HEIGHT
            }
            editingValue={
              editingCellPosition?.row === rowIndex &&
                editingCellPosition?.col === colIndex
                ? editingValue
                : null
            }
            normalizedBindings={normalizedBindings}
            rangeState={{
              isInRange:
                start !== null &&
                end !== null &&
                start.row <= rowIndex &&
                end.row >= rowIndex &&
                start.col <= colIndex &&
                end.col >= colIndex,
              isTopBorderInRange: start?.row === rowIndex,
              isBottomBorderInRange: end?.row === rowIndex,
              isLeftBorderInRange: start?.col === colIndex,
              isRightBorderInRange: end?.col === colIndex,
            }}
            clipboard={clipboard}
            showClipboard={showClipboard}
            onMouseDown={handleMouseDown}
            onClick={handleCellClick}
            onContextMenu={onContextMenu}
            onBlur={handleTextareaBlur}
            dispatch={dispatch}
            autofillRange={autofillRange}
            onAutofillInitiate={onAutofillInitiate}
          />
        </div>
      ))}
    </div>
  );
};

export default memo(Row, (prev, next) => {
  const isEqual = equals(prev, next);
  // if (!isEqual) {
  //   // Get all prop keys from prev (assuming prev and next have the same keys)
  //   const propKeys = Object.keys(prev) as (keyof typeof prev)[];
  //   const changedProps: string[] = [];
  //   propKeys.forEach((key) => {
  //     if (JSON.stringify(prev[key]) !== JSON.stringify(next[key])) {
  //       changedProps.push(key);
  //     }
  //   });
  // }
  return isEqual;
});