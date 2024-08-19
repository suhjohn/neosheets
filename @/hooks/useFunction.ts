import { localForageInstance } from "@/lib/storage";
import { FunctionType } from "@/types/sheet";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

const KEY = "functions";

export const CreateFunctionArgs = z.object({
  functionName: z.string().min(1),
  functionBody: z.string(),
  description: z.string(),
});
export type CreateFunctionArgsType = z.infer<typeof CreateFunctionArgs>;

export const UpdateFunctionArgs = z.object({
  id: z.string(),
  functionName: z.string().min(1),
  functionBody: z.string(),
  description: z.string(),
});
export type UpdateFunctionArgsType = z.infer<typeof UpdateFunctionArgs>;

export const useCreateFunction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createFunction"],
    mutationFn: async (args: CreateFunctionArgsType) => {
      const functions =
        (await localForageInstance.getItem<FunctionType[]>(KEY)) || [];
      const newFunction = {
        id: uuidv4(),
        ...args,
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
      return newFunction;
    },
  });
};

export const useFunctions = () => {
  return useQuery({
    queryKey: ["functions"],
    queryFn: async () => {
      return (await localForageInstance.getItem<FunctionType[]>(KEY)) || [];
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

export const useDeleteFunction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteFunction"],
    mutationFn: async (id: string) => {
      const functions =
        (await localForageInstance.getItem<FunctionType[]>(KEY)) || [];
      const newFunctions = functions.filter((func) => func.id !== id);
      await localForageInstance.setItem(KEY, newFunctions);
      queryClient.resetQueries({ queryKey: ["function", id] });
      queryClient.setQueryData<FunctionType[]>(["functions"], newFunctions);
    },
  });
};
