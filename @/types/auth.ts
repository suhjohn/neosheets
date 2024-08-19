// authSchemas.ts
import { z } from "zod";

// 1. Basic Authentication (No secret key required)
const BasicAuthSchema = z.object({
  authMethod: z.literal("basic"),
  username: z.string(),
  password: z.string(),
});

// 2. Bearer Token Authentication
const BearerTokenAuthSchema = z.object({
  authMethod: z.literal("bearerToken"),
  secretKeyName: z.string(),
});

// 3. API Key Authentication
const ApiKeyAuthSchema = z.object({
  authMethod: z.literal("apiKey"),
  secretKeyName: z.string(),
  apiKeyLocation: z.enum(["header", "query", "cookie"]),
  apiKeyName: z.string(), // The name of the header/query parameter/cookie
});

// 4. OAuth 2.0 Authentication
const OAuth2AuthSchema = z.object({
  authMethod: z.literal("oauth2"),
  clientIdKeyName: z.string(),
  clientSecretKeyName: z.string(),
  tokenUrl: z.string().url(),
  scopes: z.array(z.string()),
  grantType: z.enum([
    "authorization_code",
    "client_credentials",
    "password",
    "implicit",
  ]),
});

// 5. HMAC Authentication
const HmacAuthSchema = z.object({
  authMethod: z.literal("hmac"),
  accessKeyName: z.string(),
  secretKeyName: z.string(),
  algorithm: z.enum(["sha256", "sha1", "md5"]),
});

// 6. Mutual TLS (mTLS) Authentication
const MtlAuthSchema = z.object({
  authMethod: z.literal("mtls"),
  clientCertKeyName: z.string(),
  clientKeyKeyName: z.string(),
});

// 7. Custom Authentication
const CustomAuthSchema = z.object({
  authMethod: z.literal("custom"),
  customAuthType: z.string(), // e.g., "customType1", "customType2"
  customAuthDetails: z.record(z.any()), // Flexible to accommodate various custom details
});

// Discriminated Union of Authentication Methods
export const AuthSchema = z.discriminatedUnion("authMethod", [
  BasicAuthSchema,
  BearerTokenAuthSchema,
  ApiKeyAuthSchema,
  OAuth2AuthSchema,
  HmacAuthSchema,
  MtlAuthSchema,
  CustomAuthSchema,
]);

export type Auth = z.infer<typeof AuthSchema>;
