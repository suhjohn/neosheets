// SheetContext.tsx
import {
  initialState,
  type SheetAction,
  sheetReducer,
} from "@/state/sheetState";
import { type CellDisplay, type SheetState } from "@/types/sheet";
import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";

interface SheetContextType {
  state: SheetState;
  dispatch: React.Dispatch<SheetAction>;
  tableRef: React.RefObject<HTMLDivElement>;
  handleTableKeyDown: (event: React.KeyboardEvent) => void;
  handleCellUpdate: (
    rowIndex: number,
    colIndex: number,
    value: string,
    display: CellDisplay
  ) => void;
}

const SheetContext = createContext<SheetContextType | undefined>(undefined);

export const useSheetContext = () => {
  const context = useContext(SheetContext);
  if (!context) {
    throw new Error("useSheetContext must be used within a SheetProvider");
  }
  return context;
};

const shouldFocusFn: ((
  event: React.KeyboardEvent,
  state: SheetState
) => boolean)[] = [
  (event: React.KeyboardEvent, state: SheetState) =>
    event.key === "Enter" &&
    state.editingCellPosition !== null &&
    !event.shiftKey,
  (event: React.KeyboardEvent) => event.key === "Escape",
];

export const SheetProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(sheetReducer, initialState);
  const tableRef = React.createRef<HTMLDivElement>();
  const handleTableKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      dispatch({ type: "HANDLE_KEYBOARD_EVENT", payload: event });
      shouldFocusFn.some((fn) => fn(event, state)) && tableRef.current?.focus();
    },
    [dispatch, tableRef, state]
  );

  const handleCellUpdate = useCallback(
    (
      rowIndex: number,
      colIndex: number,
      value: string,
      display: CellDisplay
    ) => {
      dispatch({
        type: "HANDLE_UPDATE_CELL",
        payload: { row: rowIndex, col: colIndex, value, display },
      });
      tableRef.current?.focus({
        preventScroll: true,
      });
    },
    [dispatch, tableRef]
  );

  return (
    <SheetContext.Provider
      value={{
        state,
        dispatch,
        tableRef,
        handleTableKeyDown,
        handleCellUpdate,
      }}
    >
      {children}
    </SheetContext.Provider>
  );
};
