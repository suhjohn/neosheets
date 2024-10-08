import {
  createSheetStateStore,
  SheetStateContext,
} from "@/store/useSheetStore";
import { Spreadsheet } from "@/types/sheet";
import { useSearchParams } from "@remix-run/react";
import type React from "react";
import { useRef } from "react";

export const SheetProvider: React.FC<{
  initialSpreadsheet: Spreadsheet;
  children: React.ReactNode;
}> = ({ children, initialSpreadsheet }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [queryParams, _] = useSearchParams();
  const sheetId = queryParams.get("sheetId");
  const store = useRef(
    createSheetStateStore(initialSpreadsheet, sheetId)
  ).current;
  return (
    <SheetStateContext.Provider value={store}>
      {children}
    </SheetStateContext.Provider>
  );
};
