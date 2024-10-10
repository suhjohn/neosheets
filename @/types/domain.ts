import { z } from "zod";

export const DomainSettingSchema = z.object({
  path: z.string(),
  parallelism: z.number(),
});

export type DomainSetting = z.infer<typeof DomainSettingSchema>;
