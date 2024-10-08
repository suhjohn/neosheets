// @/store/useSheetStore.ts
import { useFunctionBindings } from "@/hooks/useFunctionBindings";
import { useSecretKeys } from "@/hooks/useSecretKeys";
import { updateSheet } from "@/hooks/useSpreadsheetes";
import {
  applyAction,
  getInverseAction,
  initialState,
} from "@/state/sheetReducer";
import { handleValueUpdate } from "@/state/update";
import { SecretKeys } from "@/types/secret";
import {
  SheetAction,
  Spreadsheet,
  type FunctionBindingsWithFunctionsType,
  type SheetState,
} from "@/types/sheet";
import { createContext, useCallback, useContext } from "react";
import { v4 } from "uuid";
import { createStore, useStore } from "zustand";
import { devtools, subscribeWithSelector } from "zustand/middleware";
import { useShallow } from "zustand/react/shallow";

interface SheetStateStore {
  spreadsheet: Spreadsheet;
  currentSheetState: SheetState;
  dispatch: (
    action: SheetAction,
    functionBindings?: FunctionBindingsWithFunctionsType,
    secretKeys?: SecretKeys
  ) => SheetState;
  currentSheetId: string;
  setCurrentSheetId: (id: string) => void;
  setSpreadsheet: (spreadsheet: Spreadsheet) => void;
  tableRef: React.RefObject<HTMLDivElement>;
  activePromises: Set<string>;
}

export const SheetStateContext = createContext<ReturnType<
  typeof createSheetStateStore
> | null>(null);

export const createSheetStateStore = (
  initialSpreadsheet: Spreadsheet,
  sheetId: string | null
) => {
  const seletedSheet = initialSpreadsheet.sheets.find((s) => s.id === sheetId);
  const store = createStore<SheetStateStore>()(
    subscribeWithSelector(
      devtools((set, get) => ({
        spreadsheet: initialSpreadsheet,
        setSpreadsheet: (spreadsheet: Spreadsheet) => {
          set({ spreadsheet });
        },
        currentSheetState: seletedSheet ||
          initialSpreadsheet.sheets[0] || {
          ...initialState,
          id: sheetId || v4(),
        },
        currentSheetId: sheetId || initialSpreadsheet.sheets[0]?.id || v4(),
        setCurrentSheetId: (id: string) => {
          const sheet = get().spreadsheet.sheets.find((s) => s.id === id);
          if (sheet) {
            set({ currentSheetState: sheet, currentSheetId: id });
          }
        },
        tableRef: { current: null },
        activePromises: new Set<string>(),
        undoStack: [],
        redoStack: [],
        dispatch: (
          action: SheetAction,
          functionBindings?: FunctionBindingsWithFunctionsType,
          secretKeys?: SecretKeys
        ) => {
          const { currentSheetState } = get();
          // Record inverse action
          const inverseAction = getInverseAction(currentSheetState, action);
          const newState = applyAction(
            currentSheetState,
            action,
            functionBindings,
            secretKeys
          );
          const newUndoStack = [...(newState.undoStack ?? [])];
          if (inverseAction) {
            newUndoStack.unshift(inverseAction);
          }
          const newSheetState = {
            ...newState,
            undoStack: newUndoStack,
          };
          set({
            currentSheetState: newSheetState,
            spreadsheet: {
              ...get().spreadsheet,
              sheets: get().spreadsheet.sheets.map((s) =>
                s.id === newSheetState.id ? newSheetState : s
              ),
            },
          });
          void updateSheet(get().spreadsheet.id, {
            ...newSheetState,
            promises: null,
          });
          if (newState.promises !== null) {
            handlePromises(get, set, newState.promises);
          }
          return newSheetState;
        },
      }))
    )
  );
  return store;
};

// Side effect handler for managing promises
const handlePromises = (
  get: () => SheetStateStore,
  set: (state: Partial<SheetStateStore>) => void,
  promises: Record<number, Record<number, Promise<unknown>>>
) => {
  Object.entries(promises).forEach(([colStr, rows]) => {
    const colIndex = parseInt(colStr, 10);
    Object.entries(rows).forEach(([rowStr, promise]) => {
      const rowIndex = parseInt(rowStr, 10);
      const promiseKey = `${colIndex}-${rowIndex}`;

      if (promise instanceof Promise && !get().activePromises.has(promiseKey)) {
        get().activePromises.add(promiseKey);
        promise
          .then((value) => {
            const updatedState = handleValueUpdate(get().currentSheetState, {
              col: colIndex,
              row: rowIndex,
              value: typeof value === "object" ? JSON.stringify(value) : value,
              display: get().currentSheetState.cellStates[colIndex][rowIndex].display,
            });

            updatedState.cellStates[colIndex][rowIndex] = {
              ...updatedState.cellStates[colIndex][rowIndex],
              type: typeof value,
            };
            const newPromises = {
              ...promises,
            }
            delete newPromises[colIndex][rowIndex];
            set({
              currentSheetState: {
                ...updatedState,
                promises: newPromises,
              },
              spreadsheet: {
                ...get().spreadsheet,
                sheets: get().spreadsheet.sheets.map((s) =>
                  s.id === updatedState.id ? updatedState : s
                ),
              },
            });
            void updateSheet(get().spreadsheet.id, {
              ...updatedState,
              promises: null,
            });
            get().activePromises.delete(promiseKey);
          })
          .catch((error) => {
            // Handle rejected promise
            const updatedState = handleValueUpdate(get().currentSheetState, {
              col: colIndex,
              row: rowIndex,
              value: "#ERROR",
              display: get().currentSheetState.cellStates[colIndex][rowIndex].display,
            });

            updatedState.cellStates[colIndex][rowIndex] = {
              ...updatedState.cellStates[colIndex][rowIndex],
              type: "string",
              promise: undefined,
            };

            console.error(error);
            const newPromises = {
              ...promises,
            }
            delete newPromises[colIndex][rowIndex];

            set({
              currentSheetState: {
                ...updatedState,
                promises: newPromises,
              },
              spreadsheet: {
                ...get().spreadsheet,
                sheets: get().spreadsheet.sheets.map((s) =>
                  s.id === updatedState.id ? updatedState : s
                ),
              },
            });

            get().activePromises.delete(promiseKey);
            void updateSheet(get().spreadsheet.id, {
              ...updatedState,
              promises: null,
            });
          });
      }
    });
  });
};

export const useDispatch = (spreadsheetId: string) => {
  const { data: functionBindings } = useFunctionBindings(spreadsheetId);
  const { data: secretKeys } = useSecretKeys();
  const sheetStateStore = useContext(SheetStateContext);
  if (!sheetStateStore) {
    throw new Error("useSheetState must be used within a SheetProvider");
  }
  const dispatchFunction = useStore(
    sheetStateStore,
    useShallow((state) => state.dispatch)
  );
  const dispatch = useCallback(
    (action: SheetAction) => {
      const newState = dispatchFunction(action, functionBindings, secretKeys);
      return newState;
    },
    [dispatchFunction, functionBindings, secretKeys]
  );
  return dispatch;
};
