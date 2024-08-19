// @/hooks/useSpreadsheetes.ts
import { localForageInstance } from "@/lib/storage";
import { initialState } from "@/state/sheetReducer";
import { CreateSpreadsheetArgs, Spreadsheet } from "@/types/sheet";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

export const KEY = "spreadsheets";

/**
 * useCreateSpreadsheet
 *
 * Hook to create a new spreadsheet.
 */
export const useCreateSpreadsheet = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createSpreadsheet"],
    mutationFn: async (args: z.infer<typeof CreateSpreadsheetArgs>) => {
      const spreadsheets =
        (await localForageInstance.getItem<Spreadsheet[]>(KEY)) || [];
      const newSpreadsheet: Spreadsheet = {
        id: uuidv4(),
        name: args.name || "Untitled Spreadsheet",
        lastOpenedAt: new Date().toISOString(),
        sheets: [
          {
            ...initialState,
            id: uuidv4(),
          },
        ], // Initialize with default sheets if needed
      };
      spreadsheets.push(newSpreadsheet);
      await localForageInstance.setItem(KEY, spreadsheets);
      queryClient.setQueryData<Spreadsheet[]>(["spreadsheets"], spreadsheets);
      queryClient.setQueryData<Spreadsheet>(
        ["spreadsheet", newSpreadsheet.id],
        newSpreadsheet
      );
      return newSpreadsheet;
    },
  });
};

/**
 * useDeleteSpreadsheet
 *
 * Hook to delete an existing spreadsheet by ID.
 */
export const useDeleteSpreadsheet = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteSpreadsheet"],
    mutationFn: async (id: string) => {
      const spreadsheets =
        (await localForageInstance.getItem<Spreadsheet[]>(KEY)) || [];
      const updatedSpreadsheets = spreadsheets.filter(
        (sheet) => sheet.id !== id
      );
      await localForageInstance.setItem(KEY, updatedSpreadsheets);
      queryClient.removeQueries({ queryKey: ["spreadsheet", id] });
      queryClient.setQueryData<Spreadsheet[]>(
        ["spreadsheets"],
        updatedSpreadsheets
      );
    },
  });
};

/**
 * useUpdateSpreadsheet
 *
 * Hook to update an existing spreadsheet's details.
 */
export const useUpdateSpreadsheet = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateSpreadsheet"],
    mutationFn: async (updatedSpreadsheet: Spreadsheet) => {
      const spreadsheets =
        (await localForageInstance.getItem<Spreadsheet[]>(KEY)) || [];
      const newSpreadsheets = spreadsheets.map((sheet) =>
        sheet.id === updatedSpreadsheet.id ? updatedSpreadsheet : sheet
      );
      await localForageInstance.setItem(KEY, newSpreadsheets);
      queryClient.setQueryData<Spreadsheet[]>(
        ["spreadsheets"],
        newSpreadsheets
      );
      queryClient.setQueryData<Spreadsheet>(
        ["spreadsheet", updatedSpreadsheet.id],
        updatedSpreadsheet
      );
      return updatedSpreadsheet;
    },
  });
};

export async function updateSheet(
  spreadsheetId: string,
  sheet: Spreadsheet["sheets"][0]
) {
  const spreadsheets =
    (await localForageInstance.getItem<Spreadsheet[]>(KEY)) || [];
  const updatedSpreadsheets = spreadsheets.map((spreadsheet) => {
    if (spreadsheet.id === spreadsheetId) {
      const updatedSheets = spreadsheet.sheets.map((s) =>
        s.id === sheet.id ? sheet : s
      );
      return { ...spreadsheet, sheets: updatedSheets };
    }
    return spreadsheet;
  });
  await localForageInstance.setItem(KEY, updatedSpreadsheets);
  return updatedSpreadsheets;
}

/**
 * useUpdateSheet
 *
 * Hook to update a specific sheet within a spreadsheet.
 */
export const useUpdateSheet = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateSheet"],
    mutationFn: async ({
      spreadsheetId,
      sheet,
    }: {
      spreadsheetId: string;
      sheet: Spreadsheet["sheets"][0];
    }) => {
      const updatedSpreadsheets = await updateSheet(spreadsheetId, sheet);
      queryClient.setQueryData<Spreadsheet[]>(
        ["spreadsheets"],
        updatedSpreadsheets
      );
      queryClient.invalidateQueries({
        queryKey: ["spreadsheet", spreadsheetId],
      });
      return;
    },
  });
};

export const getSpreadsheet = async (spreadsheetId: string) => {
  const spreadsheets =
    (await localForageInstance.getItem<Spreadsheet[]>(KEY)) || [];
  return spreadsheets.find((sheet) => sheet.id === spreadsheetId);
};

/**
 * useSpreadsheet
 *
 * Hook to fetch a single spreadsheet by ID.
 */
export const useSpreadsheet = (id: string) => {
  const [spreadsheet, setSpreadsheet] = useState<Spreadsheet | null>(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const _getSpreadsheet = async (spreadsheetId: string) => {
      setIsPending(true);
      const res = await getSpreadsheet(spreadsheetId);
      if (!res) {
        throw new Error("Spreadsheet not found");
      }
      setSpreadsheet(res);
      setIsPending(false);
    };
    void _getSpreadsheet(id);
  }, [id]);
  return {
    data: spreadsheet,
    isPending,
  };
};

/**
 * useSpreadsheets
 *
 * Hook to fetch all spreadsheets.
 */
export const useSpreadsheets = () => {
  return useQuery({
    queryKey: ["spreadsheets"],
    queryFn: async () => {
      const spreadsheets =
        (await localForageInstance.getItem<Spreadsheet[]>(KEY)) || [];
      if (spreadsheets.length === 0) {
        // Initialize with default spreadsheets if necessary
        const defaultSpreadsheets: Spreadsheet[] = [];
        await localForageInstance.setItem(KEY, defaultSpreadsheets);
        return defaultSpreadsheets;
      }
      return spreadsheets;
    },
  });
};
