import { localForageInstance } from "@/lib/storage";
import { DomainSetting } from "@/types/domain";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const DEFAULT_DOMAIN_SETTINGS: DomainSetting[] = [
  {
    path: "https://api.openai.com/v1/chat/completions",
    parallelism: 5,
  },
  {
    path: "https://api.anthropic.com/v1/messages",
    parallelism: 5,
  },
  {
    path: "https://generativelanguage.googleapis.com/v1beta/models",
    parallelism: 5,
  },
  {
    path: "https://api.together.xyz/v1/chat/completions",
    parallelism: 5,
  },
  {
    path: "https://api.groq.com/openai/v1/chat/completions",
    parallelism: 5,
  },
  {
    path: "https://openrouter.ai/api/v1/chat/completions",
    parallelism: 5,
  },
];

const KEY = "domainSettings";

const getDomainSettings = async () => {
  // Attempt to retrieve existing domain settings from storage
  let domainSettings = await localForageInstance.getItem<DomainSetting[]>(KEY);

  if (!domainSettings || domainSettings.length === 0) {
    // If no settings exist, initialize with default settings
    domainSettings = DEFAULT_DOMAIN_SETTINGS;
    await localForageInstance.setItem(KEY, domainSettings);
  }
  return domainSettings;
};

export const useDomainSettings = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["domainSettings"],
    queryFn: async () => {
      const domainSettings = await getDomainSettings();
      queryClient.setQueryData<DomainSetting[]>([KEY], domainSettings);
      return domainSettings;
    },
  });
};

export function useUpsertDomainSetting() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["upsertDomainSetting"],
    mutationFn: async (newDomainSetting: DomainSetting) => {
      // Retrieve current domain settings from storage
      const currentSettings =
        (await localForageInstance.getItem<DomainSetting[]>(KEY)) || [];

      // Check if the domain setting already exists
      const index = currentSettings.findIndex(
        (setting) => setting.path === newDomainSetting.path
      );
      if (index !== -1) {
        // Update existing domain setting
        currentSettings[index] = {
          ...currentSettings[index],
          ...newDomainSetting,
        };
      } else {
        // Add new domain setting
        currentSettings.push(newDomainSetting);
      }

      // Save the updated domain settings back to storage
      await localForageInstance.setItem(KEY, currentSettings);

      // Update the react-query cache
      queryClient.setQueryData<DomainSetting[]>(
        ["domainSettings"],
        currentSettings
      );
    },
  });
}

export function useDeleteDomainSetting() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteDomainSetting"],
    mutationFn: async (path: string) => {
      // Retrieve current domain settings from storage
      const currentSettings = await localForageInstance.getItem<
        DomainSetting[]
      >(KEY);
      if (!currentSettings) return;

      // Filter out the domain setting to be deleted
      const updatedSettings = currentSettings.filter(
        (setting) => setting.path !== path
      );

      // Save the updated domain settings back to storage
      await localForageInstance.setItem(KEY, updatedSettings);

      // Update the react-query cache
      queryClient.setQueryData<DomainSetting[]>(
        ["domainSettings"],
        updatedSettings
      );
    },
  });
}
