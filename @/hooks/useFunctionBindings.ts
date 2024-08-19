import { DEFAULT_FUNCTION_BINDINGS } from "@/fixtures";
import { localForageInstance } from "@/lib/storage";
import { FunctionBindingsType } from "@/types/sheet";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

const KEY = "functionBindings";

export const useFunctionBindings = (sheetId: string) => {
  return useQuery({
    queryKey: [KEY, sheetId],
    queryFn: async () => {
      const functionBindingss = await localForageInstance.getItem<
        FunctionBindingsType[]
      >(KEY);
      if (functionBindingss === null) {
        return {
          sheetId,
          functionBindings: DEFAULT_FUNCTION_BINDINGS,
        };
      }
      const res = functionBindingss.find((f) => f.sheetId === sheetId);
      return (
        res ?? {
          sheetId,
          functionBindings: DEFAULT_FUNCTION_BINDINGS,
        }
      );
    },
  });
};

export const UpdatefunctionBindingsArgs = z.object({
  sheetId: z.string(),
  functionBindings: z.array(
    z.object({
      name: z.string(),
      functionId: z.string(),
      isCustom: z.boolean(),
    })
  ),
});

export type UpdatefunctionBindingsArgsType = z.infer<
  typeof UpdatefunctionBindingsArgs
>;

export const useUpdatefunctionBindings = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updatefunctionBindings"],
    mutationFn: async (args: UpdatefunctionBindingsArgsType) => {
      const functionBindings =
        (await localForageInstance.getItem<FunctionBindingsType[]>(KEY)) ?? [];
      const newfunctionBindings = functionBindings.filter(
        (f) => f.sheetId !== args.sheetId
      );
      newfunctionBindings.push(args);
      await localForageInstance.setItem(KEY, newfunctionBindings);
      const res = newfunctionBindings.find((f) => f.sheetId === args.sheetId);
      if (res === undefined) {
        throw new Error("Failed to update function bindings");
      }
      queryClient.setQueryData<FunctionBindingsType>([KEY, args.sheetId], res);
    },
  });
};
