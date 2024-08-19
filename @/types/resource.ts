import { z } from "zod";
import { AuthSchema } from "./auth";

export const ResourceSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  apiUrl: z.string(),
  logoUrl: z.string(),
  authorization: AuthSchema,
  additionalHeaders: z.record(z.string()).optional(),
});

export type Resource = z.infer<typeof ResourceSchema>;
