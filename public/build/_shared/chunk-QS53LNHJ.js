import {
  localForageInstance,
  v4_default
} from "/build/_shared/chunk-QLLD56SL.js";
import {
  useMutation,
  useQuery,
  useQueryClient
} from "/build/_shared/chunk-PL57PC3R.js";

// @/hooks/useSecretKeys.ts
var KEYS_QUERY_KEY = "secretKeys";
var KEYS_LOCAL_STORAGE_KEY = "secretKeys";
function useSecretKeys() {
  return useQuery({
    queryKey: [KEYS_QUERY_KEY],
    queryFn: async () => {
      const existingKeys = await localForageInstance.getItem(
        KEYS_LOCAL_STORAGE_KEY
      );
      if (!existingKeys) {
        const newKeys = {
          id: v4_default(),
          body: {}
        };
        await localForageInstance.setItem(KEYS_LOCAL_STORAGE_KEY, newKeys);
        return newKeys;
      }
      return existingKeys;
    }
  });
}
function useUpsertSecretKey() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["upsertSecretKey"],
    mutationFn: async (newSecretKeys) => {
      await localForageInstance.setItem(KEYS_LOCAL_STORAGE_KEY, newSecretKeys);
      queryClient.setQueryData([KEYS_QUERY_KEY], newSecretKeys);
    }
  });
}
function useDeleteSecretKey() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteSecretKey"],
    mutationFn: async (key) => {
      const keys = await localForageInstance.getItem(KEYS_LOCAL_STORAGE_KEY);
      if (!keys)
        return;
      delete keys.body[key];
      await localForageInstance.setItem(KEYS_LOCAL_STORAGE_KEY, keys);
      queryClient.setQueryData([KEYS_QUERY_KEY], keys);
    }
  });
}

export {
  useSecretKeys,
  useUpsertSecretKey,
  useDeleteSecretKey
};
//# sourceMappingURL=/build/_shared/chunk-QS53LNHJ.js.map
