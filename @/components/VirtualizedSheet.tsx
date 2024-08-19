// Original path: components/VirtualizedSheet.tsx
import { COLUMN_HEADER_HEIGHT } from "@/constants";
import { useNormalizedBindings } from "@/hooks/useFunctionBindings";
import { cn, getCellsForRow } from "@/lib/utils";
import { getRowHeight } from "@/state/utils";
import { SheetStateContext, useDispatch } from "@/store/useSheetStore";
import { useVirtualizer } from "@tanstack/react-virtual";
import type React from "react";
import {
  type FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useStore } from "zustand";
import { useShallow } from "zustand/react/shallow";
import { useElementResize } from "../hooks/useElementResize";
import Row from "./Row";

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
  spreadsheetId: string;
  rowCount: number;
  onContextMenu: (event: React.MouseEvent) => void;
}

const VirtualizedSheet: FC<VirtualizedSheetProps> = ({
  spreadsheetId,
  onContextMenu,
}) => {
  const sheetStateStore = useContext(SheetStateContext);
  if (!sheetStateStore) {
    throw new Error("SheetStateContext is not provided");
  }
  const {
    headerStates,
    selectedCellPosition,
    editingCellPosition,
    cellStates,
    rowStates,
    promises,
    rowCount,
    selectedRows,
    editingValue,
    selectedCellRange,
    clipboard,
    showClipboard,
  } = useStore(
    sheetStateStore,
    useShallow((state) => state.currentSheetState)
  );
  const tableRef = useStore(
    sheetStateStore,
    useShallow((state) => state.tableRef)
  );
  const dispatch = useDispatch(spreadsheetId);
  const { data: normalizedBindings } = useNormalizedBindings(spreadsheetId);

  const [isDragging, setIsDragging] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDraggingRows, setIsDraggingRows] = useState(false);
  const [dragStartRow, setDragStartRow] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const BUFFER_ROWS = 5; // Adjusted for useVirtualizer

  const totalWidth = useMemo(
    () => headerStates.reduce((acc, header) => acc + header.width, 0) + 46, // Add total width of all columns plus row header width
    [headerStates]
  );

  // Initialize the virtualizer
  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => containerRef.current,
    estimateSize: (index) => getRowHeight({ rowIndex: index, rowStates }),
    measureElement:
      typeof window !== "undefined" &&
        navigator.userAgent.indexOf("Firefox") === -1
        ? (element) => element?.getBoundingClientRect().height
        : undefined,
    overscan: BUFFER_ROWS,
  });
  const virtualRows = rowVirtualizer.getVirtualItems();

  const {
    isResizing,
    resizeStartX,
    resizeEndX,
    resizingColumn,
    handleMouseDownX: handleMouseDownColumnHeader,
    handleMouseLeaveX: handleMouseLeaveColumnHeader,
    resizeStartY,
    resizeEndY,
    resizingRow,
    handleMouseDownY: handleMouseDownRowHeader,
    handleMouseLeaveY: handleMouseLeaveRowHeader,
  } = useElementResize({
    onResizeX: ({ colIndex, width }) => {
      dispatch({
        type: "HANDLE_RESIZE_COLUMN",
        payload: { colIndex, width },
      });
    },
    onResizeY: ({ rowIndex, height }) => {
      if (selectedRows.length > 0) {
        dispatch({
          type: "HANDLE_RESIZE_ROWS",
          payload: selectedRows.map((i) => ({ rowIndex: i, height })),
        });
      } else {
        dispatch({
          type: "HANDLE_RESIZE_ROWS",
          payload: [{ rowIndex, height }],
        });
      }
      rowVirtualizer.measure();
    },
  });

  // State and refs for auto-scrolling
  const [autoScrollDirection, setAutoScrollDirection] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const autoScrollAnimationFrame = useRef<number | null>(null);
  const autoScrollMargin = 5; // Pixels from edge to trigger auto-scroll
  const scrollSpeed = 10; // Pixels per frame

  // Handler to detect mouse position and set scroll direction
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;

      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let directionX = 0;
      let directionY = 0;

      if (mouseX < autoScrollMargin) {
        directionX = -1; // Scroll Left
      } else if (mouseX > rect.width - autoScrollMargin) {
        directionX = 1; // Scroll Right
      }

      if (mouseY < autoScrollMargin) {
        directionY = -1; // Scroll Up
      } else if (mouseY > rect.height - autoScrollMargin) {
        directionY = 1; // Scroll Down
      }

      if (directionX !== 0 || directionY !== 0) {
        setAutoScrollDirection({ x: directionX, y: directionY });
      } else {
        setAutoScrollDirection(null);
      }
    },
    [isDragging]
  );

  // Effect to handle adding/removing mousemove listener
  useEffect(() => {
    if (isDragging || isDraggingRows) {
      document.addEventListener("mousemove", handleMouseMove);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
    }

    // Cleanup on unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging, isDraggingRows, handleMouseMove]);

  // Function to perform scrolling
  const performScroll = useCallback(() => {
    if (autoScrollDirection && containerRef.current) {
      const { x, y } = autoScrollDirection;
      containerRef.current.scrollBy(x * scrollSpeed, y * scrollSpeed);
      // Schedule the next scroll
      autoScrollAnimationFrame.current = requestAnimationFrame(performScroll);
    }
  }, [autoScrollDirection, scrollSpeed]);

  // Effect to start auto-scrolling when direction changes
  useEffect(() => {
    if (autoScrollDirection) {
      autoScrollAnimationFrame.current = requestAnimationFrame(performScroll);
    } else {
      if (autoScrollAnimationFrame.current) {
        cancelAnimationFrame(autoScrollAnimationFrame.current);
        autoScrollAnimationFrame.current = null;
      }
    }

    // Cleanup on unmount or when autoScrollDirection changes
    return () => {
      if (autoScrollAnimationFrame.current) {
        cancelAnimationFrame(autoScrollAnimationFrame.current);
        autoScrollAnimationFrame.current = null;
      }
    };
  }, [autoScrollDirection, performScroll]);

  // Handler to stop dragging and auto-scrolling on mouse up
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setAutoScrollDirection(null); // Stop auto-scrolling
  }, []);

  // Existing useEffect to add mouseup listener
  useEffect(() => {
    tableRef.current?.focus({
      preventScroll: true,
    });
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseUp, tableRef]);

  const handleMouseEnter = useCallback(
    (
      _: React.MouseEvent<HTMLDivElement>,
      rowIndex: number,
      colIndex: number
    ) => {
      if (!isDragging) {
        return;
      }
      dispatch({
        type: "HANDLE_DRAG_CELLS",
        payload: { row: rowIndex, col: colIndex },
      });
    },
    [dispatch, isDragging]
  );

  const handleCellClick = useCallback(() => {
    tableRef.current?.focus({
      preventScroll: true,
    });
  }, [tableRef]);

  const handleMouseDown = useCallback(() => {
    tableRef.current?.focus({
      preventScroll: true,
    });
    setIsDragging(true);
  }, [tableRef]);

  const handleTextareaBlur = useCallback(() => {
    tableRef.current?.focus({
      preventScroll: true,
    });
  }, [tableRef]);

  useEffect(() => {
    // resize the virtualizer when the row heights change
    rowVirtualizer.measure();
  }, [rowStates, rowVirtualizer]);

  // Scroll to cell logic remains the same
  const scrollToCell = useCallback(
    (row: number, col: number) => {
      if (!containerRef.current) return;
      const boundingClient = containerRef.current.getBoundingClientRect();
      const containerWidth = boundingClient.width;
      const containerHeight = boundingClient.height;
      const visibleWindowLeft = scrollLeft;
      const visibleWindowTop = scrollTop;

      const headerHeight = COLUMN_HEADER_HEIGHT; // Height of the header row
      const indexWidth = 48; // Width of the index column

      let cellLeft = indexWidth;
      for (let i = 0; i < col; i++) {
        cellLeft += headerStates[i].width;
      }
      const cellRight = cellLeft + headerStates[col].width;

      let cellTop = headerHeight;
      for (let i = 0; i < row; i++) {
        cellTop += getRowHeight({ rowIndex: i, rowStates });
      }
      const cellBottom = cellTop + getRowHeight({ rowIndex: row, rowStates });

      // Calculate the boundaries of the visible area
      const visibleLeft = visibleWindowLeft + indexWidth;
      const visibleRight = visibleWindowLeft + containerWidth;
      const visibleTop = visibleWindowTop + headerHeight;
      const visibleBottom = visibleWindowTop + containerHeight;

      let newScrollLeft = scrollLeft;
      let newScrollTop = scrollTop;

      // Check horizontal position
      if (cellLeft < visibleLeft) {
        newScrollLeft = cellLeft - indexWidth;
      } else if (cellRight > visibleRight) {
        newScrollLeft = cellRight - containerWidth + indexWidth;
      }

      // Check vertical position
      if (cellTop < visibleTop) {
        newScrollTop = cellTop - headerHeight;
      } else if (cellBottom > visibleBottom) {
        newScrollTop = cellBottom - containerHeight;
      }

      // Ensure we don't scroll past the start
      newScrollLeft = Math.max(0, newScrollLeft);
      newScrollTop = Math.max(0, newScrollTop);

      // Scroll if necessary
      if (newScrollLeft !== scrollLeft || newScrollTop !== scrollTop) {
        containerRef.current.scrollTo({
          left: newScrollLeft,
          top: newScrollTop,
        });
        setScrollLeft(newScrollLeft);
        setScrollTop(newScrollTop);
        rowVirtualizer.scrollToIndex(row, { align: "center" });
      }
    },
    [
      headerStates,
      rowStates,
      scrollLeft,
      scrollTop,
      containerRef,
      rowVirtualizer,
    ]
  );

  const handleTableKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      const newState = dispatch({
        type: "HANDLE_TABLE_KEYBOARD_EVENT",
        payload: event,
      });
      // Scroll to the selected cell
      if (newState !== null) {
        if (
          event.key === "ArrowUp" ||
          event.key === "ArrowDown" ||
          event.key === "ArrowLeft" ||
          event.key === "ArrowRight"
        ) {
          if (event.shiftKey) {
            if (!newState.selectedCellRange) {
              return;
            }
            const { end } = newState.selectedCellRange;
            scrollToCell(end.row, end.col);
          } else {
            if (!newState.selectedCellPosition) {
              return;
            }
            const { row, col } = newState.selectedCellPosition;
            scrollToCell(row, col);
          }
          event.preventDefault();
          event.stopPropagation();
        }
      }
      if (
        (event.metaKey && (event.key === "c" || event.key === "v")) ||
        (event.ctrlKey && (event.key === "c" || event.key === "v")) ||
        (event.metaKey && event.key === "a") ||
        (event.ctrlKey && event.key === "a")
      ) {
        event.preventDefault();
        event.stopPropagation();
      }
      if (event.key === "Enter") {
        event.preventDefault();
        event.stopPropagation();
        // protects a random newline from being added in the cell. fml
        tableRef.current?.focus({
          preventScroll: true,
        });
      }
    },
    [dispatch, scrollToCell, tableRef]
  );

  const handleSelectRow = useCallback(
    (rowIndex: number) => {
      dispatch({
        type: "HANDLE_DRAG_ROWS",
        payload: [rowIndex],
      });
      setDragStartRow(rowIndex);
      setIsDraggingRows(true);
    },
    [dispatch]
  );

  const handleSelectRows = useCallback(
    (from: number, to: number) => {
      const newSelection = Array.from(
        { length: to - from + 1 },
        (_, i) => from + i
      );
      dispatch({
        type: "HANDLE_DRAG_ROWS",
        payload: newSelection,
      });
    },
    [dispatch]
  );

  const handleRowMouseEnter = useCallback(
    (rowIndex: number) => {
      if (isDraggingRows && dragStartRow !== null) {
        const start = Math.min(dragStartRow, rowIndex);
        const end = Math.max(dragStartRow, rowIndex);
        const selectedRows = Array.from(
          { length: end - start + 1 },
          (_, i) => start + i
        );
        dispatch({
          type: "HANDLE_DRAG_ROWS",
          payload: selectedRows,
        });
      }
    },
    [isDraggingRows, dragStartRow, dispatch]
  );

  const handleRowMouseUp = useCallback(() => {
    setIsDraggingRows(false);
    setDragStartRow(null);
  }, []);

  useEffect(() => {
    document.addEventListener("mouseup", handleRowMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleRowMouseUp);
    };
  }, [handleRowMouseUp]);

  const handleRowContextMenu = useCallback(
    (e: React.MouseEvent, rowIndex: number) => {
      e.preventDefault();
      e.stopPropagation();
      if (!selectedRows.includes(rowIndex)) {
        handleSelectRow(rowIndex);
      }
      onContextMenu(e);
    },
    [handleSelectRow, selectedRows, onContextMenu]
  );

  const handleRowMouseDown = useCallback(
    (e: React.MouseEvent, rowIndex: number) => {
      e.preventDefault();
      if (e.shiftKey && selectedRows.length > 0) {
        // Shift-click: select a range of rows
        const lastSelectedRow = selectedRows[selectedRows.length - 1];
        const start = Math.min(lastSelectedRow, rowIndex);
        const end = Math.max(lastSelectedRow, rowIndex);
        handleSelectRows(start, end);
      } else {
        if (!selectedRows.includes(rowIndex)) {
          handleSelectRow(rowIndex);
        }
      }
    },
    [selectedRows, handleSelectRows, handleSelectRow]
  );

  const handleScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      const newScrollTop = e.currentTarget.scrollTop;
      const newScrollLeft = e.currentTarget.scrollLeft;
      if (!containerRef.current) {
        return;
      }
      const prevScrollTop = scrollTop;
      setScrollTop(newScrollTop);
      setScrollLeft(newScrollLeft);
      const allRows = rowVirtualizer.getVirtualItems();
      const newScrollEnd = newScrollTop + containerRef.current.clientHeight;
      const visibleRowsWithoutBuffer = allRows.filter(
        (row) => row.start >= newScrollTop && row.start < newScrollEnd
      );
      if (isDragging && newScrollTop > prevScrollTop) {
        const lastRow =
          visibleRowsWithoutBuffer[visibleRowsWithoutBuffer.length - 1];
        if (lastRow && selectedCellRange?.end !== undefined) {
          dispatch({
            type: "HANDLE_DRAG_CELLS",
            payload: {
              row: lastRow.index,
              col: selectedCellRange.end.col,
            },
          });
        }
      }

      // scrolling top -> drag up
      if (isDragging && newScrollTop < prevScrollTop) {
        const firstRow = visibleRowsWithoutBuffer[0];
        if (firstRow && selectedCellRange?.end !== undefined) {
          dispatch({
            type: "HANDLE_DRAG_CELLS",
            payload: {
              row: firstRow.index,
              col: selectedCellRange?.end.col,
            },
          });
        }
      }
      // scrolling down -> drag down
      if (
        dragStartRow !== null &&
        isDraggingRows &&
        newScrollTop > prevScrollTop
      ) {
        const lastRow =
          visibleRowsWithoutBuffer[visibleRowsWithoutBuffer.length - 1];
        const start = Math.min(dragStartRow, lastRow.index);
        const end = Math.max(dragStartRow, lastRow.index);
        const newSelection = Array.from(
          { length: end - start + 1 },
          (_, i) => start + i
        );
        dispatch({
          type: "HANDLE_DRAG_ROWS",
          payload: newSelection,
        });
      }
      // scrolling up -> drag up
      if (
        dragStartRow !== null &&
        isDraggingRows &&
        newScrollTop < prevScrollTop
      ) {
        const firstRow = visibleRowsWithoutBuffer[0];
        const start = Math.min(dragStartRow, firstRow.index);
        const end = Math.max(dragStartRow, firstRow.index);
        const newSelection = Array.from(
          { length: end - start + 1 },
          (_, i) => start + i
        );
        dispatch({
          type: "HANDLE_DRAG_ROWS",
          payload: newSelection,
        });
      }
    },
    [
      dispatch,
      isDragging,
      dragStartRow,
      isDraggingRows,
      selectedCellRange,
      rowVirtualizer,
      scrollTop,
    ]
  );

  // Autofill state
  const [isAutofilling, setIsAutofilling] = useState(false);
  const autofillStart = useRef<{ row: number; col: number } | null>(null);
  const [autofillEnd, setAutofillEnd] = useState<{ row: number; col: number } | null>(null);

  // Handler for initiating autofill
  const handleInitiateAutofill = useCallback(
    (start: { row: number; col: number }) => {
      setIsAutofilling(true);
      autofillStart.current = start;
    },
    []
  );

  // Global mouse move handler
  const handleAutofillMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isAutofilling && containerRef.current && autofillStart?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const mouseY = e.clientY - rect.top + containerRef.current.scrollTop;

        // Calculate current row based on mouseY
        let currentRow = 0;
        let accumulatedHeight = COLUMN_HEADER_HEIGHT; // Assuming a constant height for headers
        for (let i = 0; i < rowCount; i++) {
          const rowHeight = getRowHeight({ rowIndex: i, rowStates });
          accumulatedHeight += rowHeight;
          if (mouseY < accumulatedHeight) {
            currentRow = i;
            break;
          }
        }

        setAutofillEnd({ row: currentRow, col: autofillStart.current.col });
      }
    },
    [isAutofilling, rowCount, rowStates]
  );

  // Global mouse up handler
  const handleAutofillMouseUp = useCallback(() => {
    if (isAutofilling && autofillStart.current && autofillEnd) {
      const start = autofillStart.current;
      const end = autofillEnd;
      // Dispatch the PERFORM_AUTOFILL action
      dispatch({
        type: "PERFORM_AUTOFILL",
        payload: {
          fillRange: {
            start: { row: start.row, col: start.col },
            end: { row: end.row, col: end.col },
          },
        },
      });
      setIsAutofilling(false);
      autofillStart.current = null;
      setAutofillEnd(null);
    }
  }, [isAutofilling, dispatch, autofillStart, autofillEnd]);
  useEffect(() => {
    if (isAutofilling) {
      document.addEventListener("mousemove", handleAutofillMouseMove);
      document.addEventListener("mouseup", handleAutofillMouseUp);
    } else {
      document.removeEventListener("mousemove", handleAutofillMouseMove);
      document.removeEventListener("mouseup", handleAutofillMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleAutofillMouseMove);
      document.removeEventListener("mouseup", handleAutofillMouseUp);
    };
  }, [isAutofilling, handleAutofillMouseMove, handleAutofillMouseUp]);


  // Memoize all cellRowStates for virtualRows
  const memoizedCellRowStates = useMemo(() => {
    const cache: Record<number, ReturnType<typeof getCellsForRow>> = {};
    virtualRows.forEach((virtualRow) => {
      const row = virtualRow.index;
      cache[row] = getCellsForRow(cellStates, row);
    });
    return cache;
  }, [virtualRows, cellStates]);

  return (
    <div
      ref={containerRef}
      className={cn(
        `focus:outline-none h-full w-full overflow-scroll relative`
      )}
      onMouseUp={
        resizingColumn !== null
          ? handleMouseLeaveColumnHeader
          : resizingRow !== null
            ? handleMouseLeaveRowHeader
            : undefined
      }
      onScroll={(e) => {
        handleScroll(e);
      }}
    >
      {/** Top left block */}
      <div
        style={{ width: "46px", height: `${COLUMN_HEADER_HEIGHT}px` }}
        className={cn(
          "fixed",
          "z-[1000]",
          "flex-shrink-0",
          "px-0",
          "border",
          "border-stone-300",
          "dark:border-stone-700",
          "border-r-4",
          "border-b-4",
          "bg-stone-50",
          "dark:bg-stone-900"
        )}
      />
      <div
        style={{
          height: rowVirtualizer.getTotalSize(),
          width: totalWidth,
          position: "relative",
        }}
      >
        {isResizing &&
          resizingColumn !== null &&
          resizeEndX !== null &&
          resizeStartX !== null && (
            <div
              className={cn(
                "absolute top-0 bottom-0 left-[2px] w-[4px] bg-stone-300 dark:bg-stone-700 z-[1000]"
              )}
              style={{
                left: `${scrollLeft +
                  resizeStartX +
                  resizeEndX -
                  headerStates[resizingColumn].width
                  }px`,
              }}
            />
          )}
        {isResizing &&
          resizingRow !== null &&
          resizeStartY !== null &&
          resizeEndY !== null &&
          containerRef.current?.offsetTop !== undefined && (
            <div
              className={cn(
                "absolute",
                "top-0",
                "left-0",
                "right-0",
                "w-full",
                "h-[4px]",
                "bg-stone-300",
                "dark:bg-stone-700",
                "z-[1000]"
              )}
              style={{
                top: `${scrollTop +
                  resizeStartY +
                  resizeEndY -
                  getRowHeight({ rowIndex: resizingRow, rowStates }) -
                  (containerRef.current?.offsetTop ?? 0)
                  }px`,
              }}
            />
          )}
        <div className="sticky top-0 left-0 z-[100]">
          <div
            className="flex z-[100] ml-[46px]"
            style={{ position: "sticky", left: 0 }} // Make header sticky
          >
            {headerStates.map((header, index) => (
              <div
                key={`header-${index}`}
                className={cn(
                  "flex-shrink-0",
                  "p-0",
                  "text-center",
                  "relative",
                  "border",
                  "border-stone-300",
                  "dark:border-stone-700",
                  "bg-stone-50",
                  "dark:bg-stone-900"
                )}
                style={{
                  width: `${header.width}px`,
                  maxWidth: `${header.width}px`,
                  height: `${COLUMN_HEADER_HEIGHT}px`,
                }}
              >
                <div className="flex justify-center items-center h-full">
                  <p className="text-stone-600 dark:text-stone-400 text-xs">
                    {header.value}
                  </p>
                </div>
                <div
                  className="absolute top-0 w-[9px] right-[-5px] z-10 h-full cursor-col-resize bg-transparent hover:bg-stone-300"
                  onMouseDown={(e) =>
                    handleMouseDownColumnHeader({
                      e,
                      width: header.width,
                      colIndex: index,
                    })
                  }
                />
              </div>
            ))}
          </div>
        </div>
        {/* Render Table */}
        <div
          onKeyDown={
            editingCellPosition === null ? handleTableKeyDown : undefined
          }
          tabIndex={0}
          ref={tableRef}
          className={cn("flex border-0 focus:outline-none relative")}
        >
          <div
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              width: "100%",
              position: "relative",
            }}
          >
            {virtualRows.map((virtualRow) => {
              const row = virtualRow.index;
              const cellRowStates = memoizedCellRowStates[row];
              return (
                <Row
                  spreadsheetId={spreadsheetId}
                  key={`row-${row}`}
                  promises={promises}
                  rowIndex={row}
                  top={virtualRow.start}
                  rowStates={rowStates}
                  headerStates={headerStates}
                  cellRowStates={cellRowStates}
                  isDraggingRows={isDraggingRows}
                  selectedRows={selectedRows}
                  selectedCellPosition={selectedCellPosition}
                  editingCellPosition={editingCellPosition}
                  editingValue={editingValue}
                  selectedCellRange={selectedCellRange}
                  clipboard={clipboard}
                  showClipboard={showClipboard}
                  normalizedBindings={normalizedBindings ?? []}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseDownRowHeader={handleMouseDownRowHeader}
                  handleMouseDown={handleMouseDown}
                  handleCellClick={handleCellClick}
                  onContextMenu={onContextMenu}
                  handleTextareaBlur={handleTextareaBlur}
                  dispatch={dispatch}
                  handleRowMouseEnter={handleRowMouseEnter}
                  handleRowMouseDown={handleRowMouseDown}
                  handleRowContextMenu={handleRowContextMenu}
                  autofillRange={
                    {
                      start: autofillStart.current,
                      end: autofillEnd,
                    }
                  }
                  onAutofillInitiate={handleInitiateAutofill}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

VirtualizedSheet.displayName = "VirtualizedSheet";

export default VirtualizedSheet;