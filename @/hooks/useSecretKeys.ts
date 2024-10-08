import { localForageInstance } from "@/lib/storage";
import { type SecretKeys } from "@/types/secret";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { v4 } from "uuid";

export const KEYS_QUERY_KEY = "secretKeys";
export const KEYS_LOCAL_STORAGE_KEY = "secretKeys";
export const RESOURCES_QUERY_KEY = "resources";
export const RESOURCES_LOCAL_STORAGE_KEY = "resources";

export function useSecretKeys() {
  return useQuery({
    queryKey: [KEYS_QUERY_KEY],
    queryFn: async () => {
      const existingKeys = await localForageInstance.getItem<SecretKeys>(
        KEYS_LOCAL_STORAGE_KEY
      )
      if (!existingKeys) {
        const newKeys: SecretKeys = {
          id: v4(),
          body: {}
        }
        await localForageInstance.setItem(KEYS_LOCAL_STORAGE_KEY, newKeys);
        return newKeys;
      }
      return existingKeys;
    },
  });
}

export function useUpsertSecretKey() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["upsertSecretKey"],
    mutationFn: async (newSecretKeys: SecretKeys) => {
      await localForageInstance.setItem(KEYS_LOCAL_STORAGE_KEY, newSecretKeys);
      queryClient.setQueryData([KEYS_QUERY_KEY], newSecretKeys);
    },
  });
}

export function useDeleteSecretKey() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteSecretKey"],
    mutationFn: async (key: string) => {
      const keys = await localForageInstance.getItem<SecretKeys>(KEYS_LOCAL_STORAGE_KEY);
      if (!keys) return;
      // delete the key from the body
      delete keys.body[key];
      await localForageInstance.setItem(KEYS_LOCAL_STORAGE_KEY, keys);
      queryClient.setQueryData([KEYS_QUERY_KEY], keys);
    },
  });
}

// export function useCreateResource() {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: async (newResource: Omit<Resource, "id">) => {
//       const resources =
//         (await localForageInstance.getItem<Resource[]>(
//           RESOURCES_LOCAL_STORAGE_KEY
//         )) ?? [];

//       const resourceWithId: Resource = {
//         ...newResource,
//         id: crypto.randomUUID(),
//       };

//       const updatedResources = [...resources, resourceWithId];
//       await localForageInstance.setItem(
//         RESOURCES_LOCAL_STORAGE_KEY,
//         updatedResources
//       );
//       return resourceWithId;
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: [RESOURCES_QUERY_KEY] });
//     },
//   });
// }
