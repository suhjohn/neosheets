// Sheet.tsx
import { cn } from "@/lib/utils";
import { type CellData, type CellDisplay } from "@/types/sheet";
import type React from "react";
import { useCallback, useState } from "react";
import { TbTextWrapColumn } from "react-icons/tb";
import { ContextMenu } from "./ContextMenu";
import { FunctionBindingsModal } from "./FunctionBindingsModal";
import { SheetProvider, useSheetContext } from "./SheetContext";
import { Input } from "./ui/input";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import VirtualizedSheet from "./VirtualizedSheet";

interface SheetProps {
  initialData?: { value: string; display: CellDisplay }[][];
  rowCount?: number;
}

const DEFAULT_CELL_STATE: CellData = {
  value: "",
  display: "hide",
};

const SheetContent: React.FC<SheetProps> = ({ rowCount = 1000 }) => {
  const { state, dispatch, handleCellUpdate } = useSheetContext();
  const { cellStates, selectedCellPosition, headerStates } = state;
  const [contextMenuPosition, setContextMenuPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleContextMenu = useCallback(
    (event: React.MouseEvent, rowIndex: number, colIndex: number) => {
      event.preventDefault();
      dispatch({
        type: "SET_SELECTED_CELL_POSITION",
        payload: { row: rowIndex, col: colIndex },
      });
      setContextMenuPosition({ x: event.clientX, y: event.clientY });
    },
    [dispatch, setContextMenuPosition]
  );

  const closeContextMenu = useCallback(() => {
    setContextMenuPosition(null);
  }, []);

  const setSelectedCellDisplay = useCallback(
    (mode: CellDisplay) => {
      if (selectedCellPosition) {
        dispatch({
          type: "SET_CELL_STATE",
          payload: {
            colIndex: selectedCellPosition.col,
            rowIndex: selectedCellPosition.row,
            cellData: {
              ...cellStates[selectedCellPosition.col][selectedCellPosition.row],
              display: mode,
            },
          },
        });
      }
    },
    [selectedCellPosition, cellStates, dispatch]
  );
  const insertRow = useCallback(
    (rowIndex: number) => {
      dispatch({
        type: "INSERT_ROW",
        payload: rowIndex,
      });
    },
    [dispatch]
  );
  const deleteRow = useCallback(
    (rowIndex: number) => {
      dispatch({
        type: "DELETE_ROW",
        payload: rowIndex,
      });
    },
    [dispatch]
  );
  const insertColumn = useCallback(
    (colIndex: number) => {
      dispatch({
        type: "INSERT_COLUMN",
        payload: colIndex,
      });
    },
    [dispatch]
  );
  const deleteColumn = useCallback(
    (colIndex: number) => {
      dispatch({
        type: "DELETE_COLUMN",
        payload: colIndex,
      });
    },
    [dispatch]
  );

  const getSelectedCell = useCallback(() => {
    if (selectedCellPosition) {
      const selectedCell =
        cellStates[selectedCellPosition.col]?.[selectedCellPosition.row];
      if (selectedCell) {
        return selectedCell;
      }
    }
    return DEFAULT_CELL_STATE;
  }, [selectedCellPosition, cellStates]);

  const handleFunctionInputKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      dispatch({
        type: "HANDLE_KEYBOARD_EVENT",
        payload: event,
      });
    },
    [dispatch]
  );

  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      <div className="px-4">
        <div className="flex w-full bg-zinc-100 dark:bg-zinc-900 px-4 py-1 items-center rounded-full">
          <ToggleGroup
            type="single"
            value={getSelectedCell().display}
            onValueChange={setSelectedCellDisplay}
            size={"sm"}
          >
            <ToggleGroupItem value="wrap" aria-label="Toggle wrap">
              <TbTextWrapColumn />
            </ToggleGroupItem>
          </ToggleGroup>
          <FunctionBindingsModal sheetId="1" />
        </div>
      </div>
      <div className="px-2 flex gap-2 items-center">
        <p>FX</p>
        <Input
          type="text"
          className={cn(
            "w-full",
            "focus-visible:border-none",
            "focus-visible:outline-none",
            "focus-visible:outline-transparent",
            "dark:focus-visible:outline-none",
            "border-none",
            "dark:border-none",
            "rounded-none"
          )}
          value={getSelectedCell().formula || getSelectedCell().value}
          onKeyDown={handleFunctionInputKeyDown}
          onChange={(e) => {
            if (selectedCellPosition) {
              handleCellUpdate(
                selectedCellPosition.row,
                selectedCellPosition.col,
                e.target.value,
                cellStates[selectedCellPosition.col][selectedCellPosition.row]
                  .display
              );
            }
          }}
        />
      </div>
      <VirtualizedSheet
        rowCount={rowCount}
        rowHeight={24}
        onContextMenu={handleContextMenu}
      />
      {contextMenuPosition && (
        <ContextMenu
          position={contextMenuPosition}
          disabledMenuItems={
            selectedCellPosition !== null &&
            (headerStates[selectedCellPosition.col].type === "prompt" ||
              headerStates[selectedCellPosition.col].type === "function")
              ? []
              : ["runCell"]
          }
          onClose={closeContextMenu}
          onInsertRow={() =>
            selectedCellPosition && insertRow(selectedCellPosition.row)
          }
          onInsertRowBelow={() =>
            selectedCellPosition && insertRow(selectedCellPosition.row + 1)
          }
          onInsertColumn={() =>
            selectedCellPosition && insertColumn(selectedCellPosition.col)
          }
          onInsertColumnRight={() =>
            selectedCellPosition && insertColumn(selectedCellPosition.col + 1)
          }
          onWrapText={() => setSelectedCellDisplay("wrap")}
          onRunCell={() => {}}
          onDeleteRow={() =>
            selectedCellPosition && deleteRow(selectedCellPosition.row)
          }
          onDeleteColumn={() =>
            selectedCellPosition && deleteColumn(selectedCellPosition.col)
          }
        />
      )}
    </div>
  );
};

const Sheet: React.FC<SheetProps> = (props) => (
  <SheetProvider>
    <SheetContent {...props} />
  </SheetProvider>
);

export default Sheet;
