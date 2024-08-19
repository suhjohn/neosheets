// @/types/secret.ts
import { z } from "zod";

// Centralized list of known secret key names
export const SECRET_KEY_NAMES = [
  "OPENAI_API_KEY",
  "OPENAI_ORGANIZATION_ID",
  "ANTHROPIC_API_KEY",
  "GEMINI_API_KEY",
  "GROQ_API_KEY",
  "OPENROUTER_API_KEY",
  "TOGETHER_API_KEY",
  "AWS_ACCESS_KEY_ID",
  "AWS_SECRET_ACCESS_KEY",
  "AWS_SESSION_TOKEN",
  "AWS_REGION",
  "AZURE_API_KEY",
] as const;

// Zod enum for secret key names
export const SecretKeyName = z.enum(SECRET_KEY_NAMES);

// TypeScript type for SecretKeyName
export type SecretKeyName = z.infer<typeof SecretKeyName>;

// Define KnownSecretKeysSchema using the centralized SECRET_KEY_NAMES
export const KnownSecretKeysSchema = z.object(
  SECRET_KEY_NAMES.reduce((acc, key) => {
    acc[key] = z
      .string()
      .min(1, { message: `${key} cannot be empty` })
      .optional();
    return acc;
  }, {} as Record<(typeof SECRET_KEY_NAMES)[number], z.ZodOptional<z.ZodString>>)
);

// Define SecretKeysSchema
export const SecretKeysSchema = z.object({
  id: z.string(), // Unique identifier for the secret keys entry
  body: KnownSecretKeysSchema.catchall(
    z.string().min(1, { message: "Secret key value cannot be empty" })
  ),
});

// TypeScript type for SecretKeys
export type SecretKeys = z.infer<typeof SecretKeysSchema>;
