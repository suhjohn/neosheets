import { DEFAULT_RESOURCES } from "@/fixtures";
import { getRunFunction } from "@/lib/function";
import { localForageInstance } from "@/lib/storage";
import { extractMustacheVariables } from "@/lib/utils";
import { Resource } from "@/types/resource";
import {
  LlmFunctionType,
  type FunctionBindingsType,
  type FunctionBindingsWithFunctionsType,
  type FunctionType,
} from "@/types/sheet";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

const KEY = "functionBindings";

const getFunctionBindings = async (sheetId: string) => {
  const bindings = await localForageInstance.getItem<FunctionBindingsType[]>(
    KEY
  );
  const fns =
    (await localForageInstance.getItem<FunctionType[]>("functions")) || [];
  if (fns === null) {
    throw new Error("Failed to load functions");
  }
  const resources = DEFAULT_RESOURCES;
  const fnIdToFn = fns.reduce((acc, fn) => {
    acc[fn.id] = fn;
    return acc;
  }, {} as Record<string, FunctionType>);
  const resourceIdToResource = resources.reduce((acc, resource) => {
    acc[resource.id] = resource;
    return acc;
  }, {} as Record<string, Resource>);
  const res = bindings?.find((f) => f.sheetId === sheetId);
  const namesSet = new Set<string>();
  if (bindings === null || res === undefined) {
    const functionBindings: FunctionBindingsWithFunctionsType["functionBindings"] =
      [];
    fns.forEach((fn) => {
      let name = fn.functionName;
      if (namesSet.has(name)) {
        let i = 1;
        while (namesSet.has(`${name}_${i}`)) {
          i++;
        }
        name = `${name}_${i}`;
      }
      namesSet.add(name);
      functionBindings.push({
        name,
        functionId: fn.id,
        isCustom: true,
        function: {
          ...fn,
          resource:
            fn.type === "llm" ? resourceIdToResource[fn.resourceId] : null,
        },
      });
    });
    return {
      sheetId,
      functionBindings,
    };
  }
  return {
    sheetId,
    functionBindings: res.functionBindings.map((binding) => ({
      ...binding,
      function: fnIdToFn[binding.functionId]
        ? {
          ...fnIdToFn[binding.functionId],
          resource:
            fnIdToFn[binding.functionId].type === "llm"
              ? resourceIdToResource[
              (fnIdToFn[binding.functionId] as LlmFunctionType).resourceId
              ]
              : null,
        }
        : null,
    })),
  };
};

export const useFunctionBindings = (sheetId: string) => {
  return useQuery({
    queryKey: [KEY, { sheetId }],
    queryFn: async () => {
      return getFunctionBindings(
        sheetId
      ) satisfies Promise<FunctionBindingsWithFunctionsType>;
    },
  });
};

export type NormalizedBindings = {
  name: string;
  params: string;
  description: string | undefined;
  function: FunctionType | null;
}[];

export const useNormalizedBindings = (spreadsheetId: string) => {
  const { data: functionBindings } = useFunctionBindings(spreadsheetId);
  return useQuery({
    queryKey: [
      "normalizedBindings",
      spreadsheetId,
      functionBindings === undefined ? "false" : "true",
    ],
    queryFn: () => {
      if (!functionBindings) {
        return [];
      }
      const bindings = functionBindings.functionBindings.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      const normalized = bindings.map((fn) => {
        let params = "";
        if (fn.function?.type === "function") {
          const runFn = getRunFunction(fn.function?.functionBody ?? "");
          params = runFn.params;
        } else if (fn.function?.type === "llm") {
          const variables = fn.function.messages.flatMap((message) =>
            extractMustacheVariables(message.content)
          );
          // we want to form it as {var1: string, var2: string, ...}
          params = `args:{${variables
            .map((varName) => `${varName}: string`)
            .join(", ")}}`;
        }
        return {
          ...fn,
          name: fn.name.toLowerCase(),
          params: `${params}`,
          description: fn.function?.description,
        };
      });
      return normalized;
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
      const newBindings = await getFunctionBindings(args.sheetId);
      queryClient.setQueryData([KEY, args.sheetId], newBindings);
    },
  });
};
