// @/components/Sheet.tsx
import { useToast } from "@/components/ui/use-toast";
import { DEFAULT_ROW_COUNT } from "@/constants";
import { useUpdateSpreadsheet } from "@/hooks/useSpreadsheetes";
import { cn } from "@/lib/utils";
import { initialState } from "@/state/sheetReducer";
import { SheetStateContext, useDispatch } from "@/store/useSheetStore";
import { Spreadsheet, type CellDisplay, type CellState } from "@/types/sheet";
import { useSearchParams } from "@remix-run/react";
import { PlusIcon, Redo2, SidebarIcon, Undo2, Wand } from "lucide-react";
import Papa from "papaparse";
import type React from "react";
import { useCallback, useContext, useRef, useState } from "react";
import {
  TbCaretDownFilled,
  TbDownload,
  TbTextWrapColumn,
  TbUpload,
} from "react-icons/tb";
import { v4 } from "uuid";
import { useStore } from "zustand";
import { ClickableInput } from "./ClickableInput";
import { ContextMenu, RowContextMenu } from "./ContextMenu";
import CopySheetDialog from "./CopySheetDialog"; // We'll create this component next
import { FunctionBindingsDialog } from "./FunctionBindingsDialog";
import { ResizeRowDialog } from "./ResizeRowDialog";
import { SheetProvider } from "./SheetContext";
import { DrawerNavigation } from "./SideNavigation";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"; // Import Dialog components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import VirtualizedSheet from "./VirtualizedSheet";

interface SheetProps {
  spreadsheetId: string;
  initialSpreadsheet: Spreadsheet;
  rowCount?: number;
}

const DEFAULT_CELL_STATE: CellState = {
  value: "",
  display: "hide",
};

const SpreadsheetContent: React.FC<SheetProps> = ({
  spreadsheetId,
  rowCount = DEFAULT_ROW_COUNT,
}) => {
  const sheetStateStore = useContext(SheetStateContext);
  if (!sheetStateStore) {
    throw new Error("SheetStateContext is not provided");
  }
  const [queryParams, setQueryParams] = useSearchParams();
  const sheetId = queryParams.get("sheetId");
  const state = useStore(sheetStateStore, (state) => state.currentSheetState);
  const tableRef = useStore(sheetStateStore, (state) => state.tableRef);
  const spreadsheet = useStore(sheetStateStore, (state) => state.spreadsheet);
  const setCurrentSheetId = useStore(
    sheetStateStore,
    (state) => state.setCurrentSheetId
  );
  const setSpreadsheet = useStore(
    sheetStateStore,
    (state) => state.setSpreadsheet
  );
  const [open, setOpen] = useState(false);
  const { mutateAsync: updateSpreadsheet } = useUpdateSpreadsheet();
  const dispatch = useDispatch(spreadsheetId);
  const {
    cellStates,
    selectedCellPosition,
    selectedCellRange,
    headerStates,
    selectedRows,
  } = state;
  const [contextMenuPosition, setContextMenuPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [isResizeDialogOpen, setIsResizeDialogOpen] = useState(false);
  const [isCopyDialogOpen, setIsCopyDialogOpen] = useState(false);
  const [sheetToCopy, setSheetToCopy] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [isAutofillDialogOpen, setIsAutofillDialogOpen] = useState(false);
  const [autofillRange, setAutofillRange] = useState<{ startRow: number; col: number; endRow: number; }>({
    col: selectedCellPosition?.col ?? selectedCellRange?.start.col ?? 0,
    startRow: selectedCellPosition?.row ?? selectedCellRange?.start.row ?? 0,
    endRow: 0,
  });

  const handleContextMenu = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenuPosition({ x: event.clientX, y: event.clientY });
  }, []);

  const closeContextMenu = useCallback(() => {
    setContextMenuPosition(null);
  }, []);

  const setSelectedCellDisplay = useCallback(
    (mode: CellDisplay) => {
      if (selectedCellRange) {
        dispatch({
          type: "HANDLE_UPDATE_CELL_RANGE",
          payload: {
            range: selectedCellRange,
            display: mode === "wrap" ? "wrap" : "hide",
          },
        });
      } else if (selectedCellPosition) {
        dispatch({
          type: "HANDLE_UPDATE_CELL",
          payload: {
            row: selectedCellPosition.row,
            col: selectedCellPosition.col,
            value:
              cellStates[selectedCellPosition.col][selectedCellPosition.row]
                .value || "",
            display: mode === "wrap" ? "wrap" : "hide",
          },
        });
        tableRef.current?.focus({
          preventScroll: true,
        });
      }
    },
    [selectedCellRange, selectedCellPosition, dispatch, cellStates, tableRef]
  );

  const insertRow = useCallback(
    (rowIndex: number) => {
      dispatch({
        type: "INSERT_ROW",
        payload: {
          rowIndex
        },
      });
    },
    [dispatch]
  );

  const deleteRows = useCallback(
    (rowIndexes: number[]) => {
      dispatch({
        type: "DELETE_ROWS",
        payload: rowIndexes,
      });
    },
    [dispatch]
  );

  const insertColumn = useCallback(
    (colIndex: number) => {
      dispatch({
        type: "INSERT_COLUMN",
        payload: { colIndex },
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
        type: "HANDLE_TABLE_KEYBOARD_EVENT",
        payload: event,
      });
    },
    [dispatch]
  );

  const handleDownloadCSV = useCallback(() => {
    const { cellStates, rowStates, headerStates } = state;

    // Get all row indices
    const rowIndices = Object.keys(rowStates).map(Number);
    let maxRowIndex = 0;
    for (const col of cellStates) {
      const colMaxRowIndex = Object.keys(col)
        .map(Number)
        .reduce((max, rowIndex) => Math.max(max, rowIndex), 0);
      maxRowIndex = Math.max(maxRowIndex, colMaxRowIndex);
    }
    maxRowIndex = Math.max(maxRowIndex, ...rowIndices);

    // Create header row
    const headerRow: string = headerStates
      .map((header) => `"${header.value}"`)
      .join(",");

    // Create data rows
    const dataRows: string[] = [];
    for (let rowIndex = 0; rowIndex <= maxRowIndex; rowIndex++) {
      const rowData = headerStates.map((_, colIndex) => {
        const cell = (cellStates[colIndex] &&
          cellStates[colIndex][rowIndex]) || { value: "" };
        return `"${cell.value.toString().replace(/"/g, '""')}"`;
      });
      dataRows.push(rowData.join(","));
    }

    // Combine header and data rows
    const csvContent = [headerRow, ...dataRows].join("\n");
    // Create a Blob with the CSV content
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    // Create a link element and trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "sheet_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [state]);

  const handleResizeRow = useCallback(() => {
    setIsResizeDialogOpen(true);
  }, []);

  const handleResizeConfirm = useCallback(
    (resizeType: "specific" | "fit", height: number | null) => {
      if (selectedRows.length > 0) {
        dispatch({
          type: "HANDLE_RESIZE_ROWS",
          payload: selectedRows.map((row) => ({
            rowIndex: row,
            height: resizeType === "fit" ? null : height,
          })),
        });
      }
      setIsResizeDialogOpen(false);
    },
    [dispatch, selectedRows]
  );

  const handleDeleteSheet = (sheetId: string) => {
    // Implement deletion logic (ensure you don't delete the last remaining sheet)
    if (spreadsheet.sheets.length === 1) {
      alert("Cannot delete the last remaining sheet.");
      return;
    }
    updateSpreadsheet({
      ...spreadsheet,
      sheets: spreadsheet.sheets.filter((sheet) => sheet.id !== sheetId),
    });
    setSpreadsheet({
      ...spreadsheet,
      sheets: spreadsheet.sheets.filter((sheet) => sheet.id !== sheetId),
    });
  };
  const handleAddSheet = () => {
    const newSheet = {
      ...initialState,
      id: v4(),
      name: "Sheet " + (spreadsheet.sheets.length + 1),
    };
    setSpreadsheet({
      ...spreadsheet,
      sheets: [...spreadsheet.sheets, newSheet],
    });
    updateSpreadsheet({
      ...spreadsheet,
      sheets: [...spreadsheet.sheets, newSheet],
    });
    setCurrentSheetId(newSheet.id);
    setQueryParams({ sheetId: newSheet.id });
  };
  const handleCopySheet = (sheetId: string) => {
    setSheetToCopy(sheetId);
    setIsCopyDialogOpen(true);
  };
  const handleSetSpreadsheetName = (name: string) => {
    updateSpreadsheet({
      ...spreadsheet,
      name,
    });
    setSpreadsheet({
      ...spreadsheet,
      name,
    });
  };

  const handleDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  }, []);

  const handleDragLeave = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
      setIsDragging(false);

      if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
        const file = event.dataTransfer.files[0];
        if (file.type === "text/csv" || file.name.endsWith(".csv")) {
          Papa.parse(file, {
            header: false,
            complete: (results) => {
              const csvData: string[][] = results.data as string[][];

              if (csvData.length === 0) {
                toast({
                  title: "Error",
                  description: "CSV file is empty.",
                  variant: "destructive",
                });
                return;
              }

              // Dispatch IMPORT_CSV action with parsed data
              dispatch({
                type: "IMPORT_CSV",
                payload: csvData,
              });

              event.dataTransfer.clearData();
              toast({
                title: "Success",
                description: "CSV file successfully imported!",
                variant: "default",
              });
            },
            error: (error) => {
              console.error("Error parsing CSV:", error);
              toast({
                title: "Error",
                description: "Failed to parse the CSV file.",
                variant: "destructive",
              });
            },
          });
        } else {
          toast({
            title: "Error",
            description: "Please drop a valid CSV file.",
            variant: "destructive",
          });
        }
      }
    },
    [dispatch, toast]
  );

  // Trigger the hidden file input when Upload button is clicked
  const handleUploadCSV = () => {
    fileInputRef.current?.click();
  };

  // Handle the file selection and parse the CSV
  const handleFileSelected = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        if (file.type === "text/csv" || file.name.endsWith(".csv")) {
          Papa.parse(file, {
            header: false,
            complete: (results) => {
              const csvData: string[][] = results.data as string[][];

              if (csvData.length === 0) {
                toast({
                  title: "Error",
                  description: "CSV file is empty.",
                  variant: "destructive",
                });
                return;
              }

              // Dispatch IMPORT_CSV action with parsed data
              dispatch({
                type: "IMPORT_CSV",
                payload: csvData,
              });

              toast({
                title: "Success",
                description: "CSV file successfully imported!",
                variant: "default",
              });
            },
            error: (error) => {
              console.error("Error parsing CSV:", error);
              toast({
                title: "Error",
                description: "Failed to parse the CSV file.",
                variant: "destructive",
              });
            },
          });
        } else {
          toast({
            title: "Error",
            description: "Please select a valid CSV file.",
            variant: "destructive",
          });
        }
      }
    },
    [dispatch, toast]
  );

  const handleAutofillConfirm = () => {
    dispatch({
      type: "PERFORM_AUTOFILL",
      payload: {
        fillRange: {
          start: { row: autofillRange.startRow, col: autofillRange.col },
          end: { row: autofillRange.endRow, col: autofillRange.col },
        },
      },
    });
    setIsAutofillDialogOpen(false);
  };

  const handleAutofillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAutofillRange((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  return (
    <div
      className={`relative flex flex-col h-full w-full overflow-hidden flex-1 ${isDragging ? "bg-blue-100 dark:bg-blue-900" : ""
        }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {isDragging && (
        <div className="absolute inset-0 z-[10000] flex items-center justify-center bg-blue-100 bg-opacity-50 dark:bg-blue-900 dark:bg-opacity-50">
          <p className="text-xl font-semibold text-blue-900 dark:text-blue-200">
            Drop CSV file here
          </p>
        </div>
      )}
      <DrawerNavigation open={open} onClose={() => setOpen(false)} />
      <div className="h-12 items-center flex border-b border-b-stone-200 dark:border-b-stone-800">
        <Button onClick={() => setOpen(true)} variant="icon">
          <SidebarIcon size={16} />
        </Button>
        <ClickableInput
          value={spreadsheet.name}
          onBlur={(value) => handleSetSpreadsheetName(value)}
          rootClassName="min-w-96 h-8"
          buttonClassName="h-8 w-full border border-transparent hover:border hover:border-stone-300 dark:hover:border-stone-700"
          inputClassName="h-8 w-full border border-transparent"
          parse={String}
        />
      </div>
      <div className="p-2">
        <div className="flex w-full bg-stone-25 dark:bg-stone-950 px-4 items-center rounded-md">
          <ToggleGroup
            type="single"
            value={getSelectedCell().display}
            onValueChange={setSelectedCellDisplay}
            size={"sm"}
          >
            <TooltipProvider>
              <Tooltip delayDuration={250}>
                <TooltipTrigger>
                  <ToggleGroupItem value="wrap" aria-label="Toggle wrap">
                    <TbTextWrapColumn />
                  </ToggleGroupItem>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Wrap text</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip delayDuration={250}>
                <TooltipTrigger>
                  <Button variant="ghost" size="sm" onClick={() => setIsAutofillDialogOpen(true)}>
                    <Wand size={16} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Autofill</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </ToggleGroup>
          <>
            <FunctionBindingsDialog sheetId={spreadsheetId} />
          </>
          <TooltipProvider>
            <Tooltip delayDuration={250}>
              <TooltipTrigger>
                <Button variant="ghost" size="sm" onClick={handleUploadCSV}>
                  <TbUpload size={16} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">Upload CSV</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip delayDuration={250}>
              <TooltipTrigger>
                <Button variant="ghost" size="sm" onClick={handleDownloadCSV}>
                  <TbDownload size={16} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">Download sheet</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Button variant="ghost" size="sm" onClick={
            () => dispatch({
              type: "UNDO",
            })
          }>
            <Undo2 size={16} />
          </Button>
          <Button variant="ghost" size="sm" onClick={
            () => dispatch({
              type: "REDO",
            })
          }>
            <Redo2 size={16} />
          </Button>
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
              dispatch({
                type: "HANDLE_UPDATE_CELL",
                payload: {
                  row: selectedCellPosition.row,
                  col: selectedCellPosition.col,
                  value: e.target.value,
                  display:
                    cellStates[selectedCellPosition.col][
                      selectedCellPosition.row
                    ].display,
                },
              });
            }
          }}
        />
      </div>
      <VirtualizedSheet
        spreadsheetId={spreadsheetId}
        rowCount={rowCount}
        onContextMenu={handleContextMenu}
      />
      <div className="flex items-center border-t border-t-stone-200 dark:border-t-stone-800">
        <div className={cn("w-[46px]")} />
        {spreadsheet.sheets.map((sheet, index) => (
          <div
            key={sheet.id}
            className={cn(
              "flex items-center",
              {
                "bg-stone-200 dark:bg-stone-800":
                  sheetId === sheet.id || (index === 0 && !sheetId),
              },
              "hover:bg-stone-200 dark:hover:bg-stone-800"
            )}
          >
            <Button
              onClick={() => {
                setQueryParams({ sheetId: sheet.id });
                setCurrentSheetId(sheet.id);
              }}
              variant="unstyled"
              className={cn("flex h-8 items-center px-4 rounded-none", {
                "bg-stone-200 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-800":
                  sheetId === sheet.id || (index === 0 && !sheetId),
              })}
            >
              {sheet.name}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="icon" aria-label="More options">
                  <TbCaretDownFilled size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-[1000]">
                <DropdownMenuItem onSelect={() => handleCopySheet(sheet.id)}>
                  Copy
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => handleDeleteSheet(sheet.id)}>
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
        <Button
          variant="ghost"
          onClick={handleAddSheet}
          className="flex items-center rounded-none h-full"
        >
          <PlusIcon size={16} />
        </Button>
      </div>
      {contextMenuPosition && selectedCellPosition && (
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
          onRunCell={() => { }}
          onDeleteRow={() =>
            selectedCellPosition && deleteRows([selectedCellPosition.row])
          }
          onDeleteColumn={() =>
            selectedCellPosition && deleteColumn(selectedCellPosition.col)
          }
        />
      )}
      {contextMenuPosition && selectedRows.length > 0 && (
        <RowContextMenu
          position={contextMenuPosition}
          numRows={selectedRows.length}
          onClose={closeContextMenu}
          onInsertRow={() => {
            for (let i = 0; i < selectedRows.length; i++) {
              insertRow(selectedRows[0]);
            }
          }}
          onInsertRowBelow={() => {
            for (let i = 0; i < selectedRows.length; i++) {
              insertRow(selectedRows[0] + i + 1);
            }
          }}
          onDeleteRow={() => {
            deleteRows(selectedRows);
          }}
          onClearRow={() => { }}
          onResizeRow={handleResizeRow}
        />
      )}
      <ResizeRowDialog
        isOpen={isResizeDialogOpen}
        onClose={() => setIsResizeDialogOpen(false)}
        onConfirm={handleResizeConfirm}
        selectedRows={selectedRows}
      />
      {/* Copy Sheet Dialog */}
      {isCopyDialogOpen && sheetToCopy && (
        <CopySheetDialog
          isOpen={isCopyDialogOpen}
          onClose={() => setIsCopyDialogOpen(false)}
          sheetId={sheetToCopy}
        />
      )}
      {/* Hidden file input for Upload CSV */}
      <input
        type="file"
        accept=".csv,text/csv"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileSelected}
      />
      {/* Autofill Dialog */}
      <Dialog open={isAutofillDialogOpen} onOpenChange={setIsAutofillDialogOpen}>
        <DialogContent className="h-auto max-w-md">
          <DialogHeader>
            <DialogTitle>Autofill Options</DialogTitle>
            <DialogDescription>
              Specify the range to apply autofill.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="flex flex-col">
              <label htmlFor="startCol" className="mb-1 text-sm font-medium">
                Column
              </label>
              <Input
                type="number"
                id="col"
                name="col"
                value={autofillRange.col}
                onChange={handleAutofillChange}
                min={0}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="startRow" className="mb-1 text-sm font-medium">
                Start Row
              </label>
              <Input
                type="number"
                id="startRow"
                name="startRow"
                value={autofillRange.startRow}
                onChange={handleAutofillChange}
                min={0}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="endRow" className="mb-1 text-sm font-medium">
                End Row
              </label>
              <Input
                type="number"
                id="endRow"
                name="endRow"
                value={autofillRange.endRow}
                onChange={handleAutofillChange}
                min={autofillRange.startRow}
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleAutofillConfirm}>Autofill</Button>
            <Button variant="ghost" onClick={() => setIsAutofillDialogOpen(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const Sheet: React.FC<SheetProps> = (props) => (
  <SheetProvider initialSpreadsheet={props.initialSpreadsheet}>
    <SpreadsheetContent {...props} />
  </SheetProvider>
);

export default Sheet;