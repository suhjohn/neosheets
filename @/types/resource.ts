import { z } from "zod";
import { AuthSchema } from "./auth";
import { ChatMessageSchema } from "./chat";

export const ResourceSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  apiUrl: z.string(),
  logoUrl: z.string(),
  authorization: AuthSchema,
  additionalHeaders: z.record(z.string()).optional(),
  getBody: z
    .function()
    .args(
      z.object({
        messages: ChatMessageSchema.array(),
        model: z.string(),
        args: z.record(z.unknown()),
      })
    )
    .returns(z.record(z.unknown()))
    .optional(),
});

export type Resource = z.infer<typeof ResourceSchema>;
