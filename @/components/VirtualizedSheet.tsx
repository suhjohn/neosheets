// VirtualizedSheet.tsx
import { Table } from "@/components/ui/table";
import { cn, getRowHeight } from "@/lib/utils";
import { getFullTableHeight } from "@/state/sheetState";
import type React from "react";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { useColumnResize } from "../hooks/useColumnResize";
import Cell from "./Cell";
import { useSheetContext } from "./SheetContext";

export type KeyBindings =
  | "Alt + Enter"
  | "Shift + Enter"
  | "Enter"
  | "Escape"
  | "ArrowUp"
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "Backspace";

interface VirtualizedSheetProps {
  rowCount: number;
  rowHeight: number;
  onContextMenu: (
    event: React.MouseEvent,
    rowIndex: number,
    colIndex: number
  ) => void;
}

const VirtualizedSheet = forwardRef<
  { scrollToCell: (row: number, col: number) => void },
  VirtualizedSheetProps
>(({ rowCount, onContextMenu }, ref) => {
  const {
    state,
    dispatch,
    tableRef,
    handleTableKeyDown,
    handleCellUpdate: handleCellChange,
  } = useSheetContext();
  const { handleMouseDown: handleMouseDownColumnHeader } = useColumnResize({
    onResize: ({ colIndex, width }) => {
      dispatch({
        type: "HANDLE_RESIZE_COLUMN",
        payload: { colIndex, width },
      });
    },
  });
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);
  const { rowStates, headerStates } = state;

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseDown = useCallback(
    (
      event: React.MouseEvent<HTMLDivElement>,
      rowIndex: number,
      colIndex: number
    ) => {
      setIsDragging(true);
      dispatch({
        type: "HANDLE_UNCLICKED_TO_CLICKED_CELL",
        payload: { row: rowIndex, col: colIndex },
      });
    },
    [dispatch, setIsDragging]
  );

  const handleMouseEnter = useCallback(
    (
      event: React.MouseEvent<HTMLDivElement>,
      rowIndex: number,
      colIndex: number
    ) => {
      if (isDragging) {
        dispatch({
          type: "HANDLE_DRAG_CELLS",
          payload: { row: rowIndex, col: colIndex },
        });
      }
    },
    [dispatch, isDragging]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseUp]);

  const [scrollTop, setScrollTop] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const containerHeight =
    containerRef.current?.clientHeight ?? window.innerHeight;
  const fullTableHeight = getFullTableHeight({ ...state });

  const handleScroll = useCallback((event: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(event.currentTarget.scrollTop);
    setScrollLeft(event.currentTarget.scrollLeft);
  }, []);
  const {
    yStart,
    visibleRowStartIndex,
    visibleRowEndIndex,
    visibleColumnStartIndex,
    visibleColumnEndIndex,
    totalWidth,
  } = useMemo(() => {
    let yStart = 0;
    let rowStartIndex = 0;
    let rowEndIndex = 0;
    let accumulatedHeight = 0;

    // Calculate the start row index and yStart position
    while (rowStartIndex < rowCount && yStart + accumulatedHeight < scrollTop) {
      accumulatedHeight = getRowHeight({
        rowIndex: rowStartIndex,
        rowStates,
        cellState: headerStates[0],
      });
      yStart += accumulatedHeight;
      rowStartIndex++;
    }

    rowEndIndex = rowStartIndex;
    accumulatedHeight = 0;

    // Calculate the end row index
    while (rowEndIndex < rowCount && accumulatedHeight < containerHeight) {
      accumulatedHeight += getRowHeight({
        rowIndex: rowEndIndex,
        rowStates,
        cellState: headerStates[0],
      });
      rowEndIndex++;
    }

    let accumulatedWidth = 0;
    let colStartIndex = 0;
    let colEndIndex = 0;
    const columnCount = headerStates.length;

    // Calculate the start column index
    while (colStartIndex < columnCount && accumulatedWidth < scrollLeft) {
      accumulatedWidth += headerStates[colStartIndex].width;
      colStartIndex++;
    }

    // Calculate the end column index
    while (
      colEndIndex < columnCount &&
      accumulatedWidth < scrollLeft + containerWidth
    ) {
      accumulatedWidth += headerStates[colEndIndex].width;
      colEndIndex++;
    }

    const totalWidth = headerStates.reduce(
      (sum, header) => sum + header.width,
      0
    );

    return {
      yStart,
      visibleRowStartIndex: rowStartIndex,
      visibleRowEndIndex: rowEndIndex,
      visibleColumnStartIndex: colStartIndex,
      visibleColumnEndIndex: colEndIndex,
      totalWidth,
    };
  }, [
    scrollTop,
    containerHeight,
    rowCount,
    headerStates,
    rowStates,
    scrollLeft,
    containerWidth,
  ]);

  const visibleRows = useMemo(() => {
    const rows = Array.from(
      { length: visibleRowEndIndex - visibleRowStartIndex },
      (_, index) => visibleRowStartIndex + index
    );
    return rows;
  }, [visibleRowStartIndex, visibleRowEndIndex]);

  const visibleColumns = useMemo(() => {
    return headerStates;
  }, [headerStates]);

  const scrollToCell = useCallback(
    (row: number, col: number) => {
      const visibleWindowLeft = scrollLeft;
      const visibleWindowTop = scrollTop;
      const isCellHiddenVertically =
        row <= visibleRowStartIndex || row >= visibleRowEndIndex;
      const isCellHiddenHorizontally =
        col <= visibleColumnStartIndex || col >= visibleColumnEndIndex;

      const cellLeft = headerStates
        .slice(0, col)
        .reduce((sum, header) => sum + header.width, 0);
      const cellRight = cellLeft + headerStates[col].width;

      const cellTop = rowStates[row]?.hidden
        ? 0
        : // eslint-disable-next-line @typescript-eslint/no-unused-vars
          Object.entries(rowStates).reduce((sum, [_, rowState], index) => {
            return index <= row && !rowState.hidden
              ? sum + rowState.height
              : sum;
          }, 0);

      const cellBottom =
        cellTop + (rowStates[row]?.hidden ? 0 : rowStates[row].height);

      if (isCellHiddenVertically) {
        let newScrollTop;
        if (cellTop < visibleWindowTop) {
          newScrollTop = cellTop;
        } else {
          newScrollTop =
            cellBottom -
            containerHeight +
            (rowStates[row]?.hidden ? 0 : rowStates[row].height);
        }
        containerRef.current?.scrollTo({ top: newScrollTop });
      }

      if (isCellHiddenHorizontally) {
        let newScrollLeft;
        if (cellLeft < visibleWindowLeft) {
          newScrollLeft = cellLeft;
        } else {
          newScrollLeft = cellRight - containerWidth + headerStates[col].width;
        }
        containerRef.current?.scrollTo({ left: newScrollLeft });
      }

      tableRef.current?.focus({ preventScroll: true });
    },
    [
      scrollLeft,
      scrollTop,
      visibleRowStartIndex,
      visibleRowEndIndex,
      visibleColumnStartIndex,
      visibleColumnEndIndex,
      headerStates,
      rowStates,
      containerHeight,
      containerWidth,
      tableRef,
    ]
  );

  useImperativeHandle(ref, () => ({
    scrollToCell,
  }));

  const handleCellDoubleClick = useCallback(
    (rowIndex: number, colIndex: number) => {
      dispatch({
        type: "HANDLE_DOUBLE_CLICK_CELL",
        payload: { row: rowIndex, col: colIndex },
      });
      scrollToCell(rowIndex, colIndex);
    },
    [dispatch, scrollToCell]
  );

  const handleCellClick = useCallback(
    (rowIndex: number, colIndex: number) => {
      dispatch({
        type: "HANDLE_UNCLICKED_TO_CLICKED_CELL",
        payload: { row: rowIndex, col: colIndex },
      });
    },
    [dispatch]
  );
  return (
    <div className="overflow-auto" onScroll={handleScroll} ref={containerRef}>
      <div
        style={{
          width: `${totalWidth}px`,
          height: `${fullTableHeight}px`,
          position: "relative",
        }}
      >
        <div className="sticky top-0 flex z-10">
          <div
            style={{ width: "46px", height: "24px" }}
            className={cn(
              "fixed",
              "z-[1000]",
              "flex-shrink-0",
              "px-0",
              "border",
              "border-zinc-200",
              "dark:border-zinc-800",
              "border-r-4",
              "border-b-4",
              "bg-zinc-50",
              "dark:bg-zinc-900"
            )}
          />
          <div className="flex z-[100] ml-[46px]">
            {visibleColumns.map((header, index) => {
              const colIndex = index;
              return (
                <div
                  key={colIndex}
                  className={cn(
                    "flex-shrink-0",
                    "p-0",
                    "text-center",
                    "relative",
                    "border",
                    "border-zinc-200",
                    "dark:border-zinc-800",
                    "bg-zinc-50 dark:bg-zinc-900"
                  )}
                  style={{
                    width: `${header.width}px`,
                    maxWidth: `${header.width}px`,
                    height: "24px",
                  }}
                >
                  <div className="flex justify-center items-center h-full">
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs">
                      {header.value}
                    </p>
                  </div>
                  <div
                    className="absolute top-0 w-[9px] right-[-5px] z-10 h-full cursor-col-resize bg-transparent hover:bg-zinc-300"
                    onMouseDown={(e) =>
                      handleMouseDownColumnHeader({
                        e,
                        width: header.width,
                        colIndex,
                      })
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
        <Table
          onKeyDown={handleTableKeyDown}
          tabIndex={0}
          ref={tableRef}
          className={cn("border-0 focus:outline-none relative ml-46px z-0")}
        >
          <div
            style={{
              position: "absolute",
              top: `${yStart}px`,
              left: `0px`,
            }}
          >
            {visibleRows.map((rowIndex) => (
              <div
                key={rowIndex}
                className={cn(
                  "flex hover:bg-zinc-100 dark:hover:bg-zinc-900",
                  "z-0"
                )}
              >
                <div
                  style={{
                    width: "46px",
                    height: getRowHeight({
                      rowIndex,
                      rowStates,
                      cellState: headerStates[0],
                    }),
                  }}
                  className={cn(
                    "flex",
                    "items-center",
                    "justify-center",
                    "text-xs",
                    "px-0",
                    "sticky",
                    "left-0",
                    "z-[100]",
                    "overflow-hidden",
                    "text-zinc-600",
                    "dark:text-zinc-400",
                    "bg-zinc-50",
                    "dark:bg-zinc-900",
                    "border",
                    "border-zinc-200",
                    "dark:border-zinc-800"
                  )}
                >
                  {rowIndex + 1}
                </div>
                {visibleColumns.map((header, colIndex) => {
                  return (
                    <Cell
                      key={`${rowIndex}-${colIndex}`}
                      rowIndex={rowIndex}
                      colIndex={colIndex}
                      width={header.width}
                      onChange={handleCellChange}
                      onClick={handleCellClick}
                      onDoubleClick={handleCellDoubleClick}
                      onContextMenu={onContextMenu}
                      onMouseEnter={handleMouseEnter}
                      onMouseDown={handleMouseDown}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </Table>
      </div>
    </div>
  );
});

VirtualizedSheet.displayName = "VirtualizedSheet";

export default VirtualizedSheet;
