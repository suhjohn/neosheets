// hoooks/useFunction.ts

import { DEFAULT_FUNCTIONS } from "@/fixtures";
import { localForageInstance } from "@/lib/storage";
import { ChatMessageSchema } from "@/types/chat";
import { type FunctionType } from "@/types/sheet";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

export const KEY = "functions";

export const CreateBaseFunctionArgs = z.object({
  functionName: z.string().min(1),
  functionBody: z.string(),
  description: z.string(),
});
export type CreateBaseFunctionArgsType = z.infer<typeof CreateBaseFunctionArgs>;

export const CreateLLMFunctionArgs = z.object({
  resourceId: z.string(),
  model: z.string(),
  messages: z.array(ChatMessageSchema),
  prompt: z.string().nullable(),
  args: z.string(),
  outputPath: z.array(z.string().or(z.number())).optional(),
});

export const CreateLLMFunctionArgsInput = z.object({
  resourceId: z.string(),
  model: z.string(),
  messages: z.array(ChatMessageSchema),
  prompt: z.string().nullable(),
  args: z.string(),
  outputPath: z.array(z.string().or(z.number())).optional(),
});

export type CreateLLMFunctionArgsType = z.infer<typeof CreateLLMFunctionArgs>;
export type CreateLLMFunctionArgsInputType = z.infer<
  typeof CreateLLMFunctionArgsInput
>;

export const UpdateFunctionArgs = z.object({
  id: z.string(),
  functionName: z.string().min(1),
  functionBody: z.string(),
  description: z.string(),
});
export type UpdateFunctionArgsType = z.infer<typeof UpdateFunctionArgs>;

export const UpdateLLMFunctionArgs = z.object({
  id: z.string(),
  resourceId: z.string(),
  model: z.string(),
  messages: z.array(ChatMessageSchema),
  prompt: z.string().nullable(),
  args: z.string(),
  outputPath: z.array(z.string().or(z.number())).optional(),
});

export type UpdateLLMFunctionArgsType = z.infer<typeof UpdateLLMFunctionArgs>;

export const useCreateFunction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createFunction"],
    mutationFn: async (args: CreateBaseFunctionArgsType) => {
      const functions =
        (await localForageInstance.getItem<FunctionType[]>(KEY)) || [];
      const newFunction = {
        id: uuidv4(),
        ...args,
        createdBy: "user",
        type: "function" as const,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      functions.push(newFunction);
      await localForageInstance.setItem(KEY, functions);
      queryClient.setQueryData<FunctionType[]>(["functions"], functions);
      queryClient.setQueryData<FunctionType>(
        ["function", newFunction.id],
        newFunction
      );
      queryClient.resetQueries({ queryKey: ["functionBindings"] });
      return newFunction;
    },
  });
};

export const useCreateLlmFunction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createLlmFunction"],
    mutationFn: async (
      args: CreateLLMFunctionArgsType & CreateBaseFunctionArgsType
    ) => {
      const functions =
        (await localForageInstance.getItem<FunctionType[]>(KEY)) || [];
      const newFunction = {
        ...args,
        id: uuidv4(),
        createdBy: "user",
        type: "llm" as const,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      functions.push(newFunction);
      await localForageInstance.setItem(KEY, functions);
      queryClient.setQueryData<FunctionType[]>(["functions"], functions);
      queryClient.setQueryData<FunctionType>(
        ["function", newFunction.id],
        newFunction
      );
      queryClient.resetQueries({ queryKey: ["functionBindings"] });
      return newFunction;
    },
  });
};

const getFunctions = async () => {
  // Retrieve existing functions from storage
  let fns = (await localForageInstance.getItem<FunctionType[]>(KEY)) || [];

  // Create a map for quick lookup of existing functions by ID
  const fnsMap = new Map(fns.map(func => [func.id, func]));

  // Iterate over DEFAULT_FUNCTIONS to merge updates and add new functions
  DEFAULT_FUNCTIONS.forEach(defaultFunc => {
    if (fnsMap.has(defaultFunc.id)) {
      // If the function exists, merge the default function's properties
      const existingFunc = fnsMap.get(defaultFunc.id)!;
      fnsMap.set(defaultFunc.id, { ...existingFunc, ...defaultFunc });
    } else {
      // If it's a new default function, add it to the map
      fnsMap.set(defaultFunc.id, defaultFunc);
    }
  });

  // Convert the map back to an array
  fns = Array.from(fnsMap.values());

  // Update the storage with the merged functions
  await localForageInstance.setItem(KEY, fns);

  return fns;
};

export const useFunctions = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["functions"],
    queryFn: async () => {
      const functions = await getFunctions();
      queryClient.setQueryData<FunctionType[]>(["functions"], functions);
      return functions;
    },
  });
};

export const useFunction = (id: string) => {
  return useQuery({
    queryKey: ["function", id],
    queryFn: async () => {
      const functions =
        (await localForageInstance.getItem<FunctionType[]>(KEY)) || [];
      return functions.find((func) => func.id === id);
    },
  });
};

export const useUpdateFunction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateFunction"],
    mutationFn: async (args: UpdateFunctionArgsType) => {
      const functions =
        (await localForageInstance.getItem<FunctionType[]>(KEY)) || [];
      const newFunctions = functions.map((func) => {
        if (func.id === args.id) {
          return {
            ...func,
            ...args,
            updatedAt: new Date().toISOString(),
          };
        }
        return func;
      });
      await localForageInstance.setItem(KEY, newFunctions);
      queryClient.resetQueries({ queryKey: ["function", args.id] });
      queryClient.setQueryData<FunctionType[]>(["functions"], newFunctions);
    },
  });
};

export const useUpdateLlmFunction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateLlmFunction"],
    mutationFn: async (
      args: UpdateLLMFunctionArgsType & UpdateFunctionArgsType
    ) => {
      const functions =
        (await localForageInstance.getItem<FunctionType[]>(KEY)) || [];
      const newFunctions = functions.map((func) => {
        if (func.id === args.id) {
          const newFunc = {
            ...func,
            ...args,
            updatedAt: new Date().toISOString(),
          };
          queryClient.setQueryData<FunctionType>(
            ["function", args.id],
            newFunc
          );
          return newFunc;
        }
        return func;
      });
      await localForageInstance.setItem(KEY, newFunctions);
      queryClient.setQueryData<FunctionType[]>(["functions"], newFunctions);
      queryClient.resetQueries({ queryKey: ["functionBindings"] });
    },
  });
};

export const useDeleteFunction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteFunction"],
    mutationFn: async (id: string) => {
      const functions =
        (await localForageInstance.getItem<FunctionType[]>(KEY)) || [];
      const newFunctions = functions.filter((func) => func.id !== id);
      await localForageInstance.setItem(KEY, newFunctions);
      queryClient.removeQueries({ queryKey: ["function", id] });
      queryClient.setQueryData<FunctionType[]>(["functions"], newFunctions);
      queryClient.resetQueries({ queryKey: ["functionBindings"] });
    },
  });
};

export const useSearchFunctions = () => {
  const { data: functions } = useFunctions();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFunctions = useCallback(() => {
    if (!searchTerm.trim() || !functions) return functions;
    return functions.filter(
      (func) =>
        func.functionName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        func.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [functions, searchTerm]);

  return { searchTerm, setSearchTerm, filteredFunctions: filteredFunctions() };
};
