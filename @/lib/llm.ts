// @/lib/llm.ts
import { Resource } from "@/types/resource";
import { SecretKeys } from "@/types/secret";
import { LlmFunctionType } from "@/types/sheet";
import { extractMustacheVariables } from "./utils";

/**
 * Validates that all secretKeyName references in the resource's authorization
 * exist within the provided secretKeys.
 *
 * @param resource - The resource to validate.
 * @param secretKeys - The set of secret keys available.
 * @returns An object indicating validity and any missing keys.
 */
export function validateResourceAuthorization(
  resource: Resource,
  secretKeys: SecretKeys
): { isValid: boolean; missingKeys: string[] } {
  const missingKeys: string[] = [];
  const { authorization } = resource;

  // Helper function to check if a key exists in secretKeys
  const keyExists = (keyName: string): boolean => !!secretKeys.body[keyName];

  switch (authorization.authMethod) {
    case "bearerToken":
      if (!keyExists(authorization.secretKeyName)) {
        missingKeys.push(authorization.secretKeyName);
      }
      break;

    case "apiKey":
      if (!keyExists(authorization.secretKeyName)) {
        missingKeys.push(authorization.secretKeyName);
      }
      break;

    case "oauth2":
      if (!keyExists(authorization.clientIdKeyName)) {
        missingKeys.push(authorization.clientIdKeyName);
      }
      if (!keyExists(authorization.clientSecretKeyName)) {
        missingKeys.push(authorization.clientSecretKeyName);
      }
      break;

    case "hmac":
      if (!keyExists(authorization.accessKeyName)) {
        missingKeys.push(authorization.accessKeyName);
      }
      if (!keyExists(authorization.secretKeyName)) {
        missingKeys.push(authorization.secretKeyName);
      }
      break;

    case "mtls":
      if (!keyExists(authorization.clientCertKeyName)) {
        missingKeys.push(authorization.clientCertKeyName);
      }
      if (!keyExists(authorization.clientKeyKeyName)) {
        missingKeys.push(authorization.clientKeyKeyName);
      }
      break;

    case "basic":
      // Basic Auth may not use SecretKeys
      break;

    case "custom":
      // Custom auth might have different validation
      // Implement as needed
      break;

    default:
      // Unknown auth method
      break;
  }

  return {
    isValid: missingKeys.length === 0,
    missingKeys,
  };
}

export const generateFunctionBody = ({
  functionData,
  secretKeys,
}: {
  functionData: LlmFunctionType & { resource: Resource };
  secretKeys: SecretKeys;
}) => {
  // const isValid = validateResourceAuthorization(
  //   functionData.resource,
  //   secretKeys
  // );
  // if (!isValid.isValid) {
  //   throw new Error(`Missing secret keys: ${isValid.missingKeys.join(", ")}`);
  // }
  const { authorization, additionalHeaders: resourceAdditionalHeaders } =
    functionData.resource;

  // Helper function to safely escape secret keys to prevent injection attacks
  const escapeSecret = (value: string | undefined): string =>
    value === undefined ? "" : value.replace(/`/g, "\\`").replace(/\$/g, "\\$");

  // Initialize variables to hold secret key values
  let authorizationHeader = "";
  let additionalHeaders = "";

  switch (authorization.authMethod) {
    case "bearerToken": {
      const bearerToken = secretKeys.body[authorization.secretKeyName];
      authorizationHeader = `Authorization: "Bearer ${escapeSecret(
        bearerToken
      )}",`;
      break;
    }
    case "apiKey": {
      const apiKey = secretKeys.body[authorization.secretKeyName];
      authorizationHeader = `"${escapeSecret(
        authorization.apiKeyName
      )}": "${escapeSecret(apiKey)}",`;
      break;
    }
    case "oauth2": {
      const clientId = secretKeys.body[authorization.clientIdKeyName];
      const clientSecret = secretKeys.body[authorization.clientSecretKeyName];
      // Example: Including clientId and clientSecret in the body or headers
      additionalHeaders += `"Client-ID": "${escapeSecret(clientId)}",\n`;
      additionalHeaders += `"Client-Secret": "${escapeSecret(
        clientSecret
      )}",\n`;
      break;
    }
    case "hmac": {
      const accessKey = secretKeys.body[authorization.accessKeyName];
      const secretKey = secretKeys.body[authorization.secretKeyName];
      // Example: Generating HMAC signature (pseudo-code)
      additionalHeaders += `"Access-Key": "${escapeSecret(accessKey)}",\n`;
      additionalHeaders += `"Signature": "${escapeSecret(secretKey)}",\n`;
      break;
    }
    case "mtls": {
      const clientCert = secretKeys.body[authorization.clientCertKeyName];
      const clientKey = secretKeys.body[authorization.clientKeyKeyName];
      // Example: Including certificates in the request (may require different handling)
      // This is a placeholder as handling certificates usually involves more secure methods
      additionalHeaders += `"Client-Cert": "${escapeSecret(clientCert)}",\n`;
      additionalHeaders += `"Client-Key": "${escapeSecret(clientKey)}",\n`;
      break;
    }
    case "basic":
      // Basic Auth typically uses username and password, not secret keys
      // Handle accordingly if needed
      break;
    case "custom":
      // Custom auth might require different handling based on customAuthDetails
      // Implement as needed
      break;
    default:
      // Handle unknown auth methods if necessary
      break;
  }
  if (
    resourceAdditionalHeaders &&
    Object.keys(resourceAdditionalHeaders).length > 0
  ) {
    additionalHeaders += Object.entries(resourceAdditionalHeaders)
      .map(([key, value]) => `"${key}": "${escapeSecret(value)}",`)
      .join("\n");
  }

  const variables = Array.from(
    new Set(
      functionData.messages.flatMap((message) =>
        extractMustacheVariables(message.content)
      )
    )
  );
  const argsType = `type Args = {
    ${variables.map((varName) => `  ${varName}: string;`).join("\n")}
    };\n`;
  // Generate the function body with injected headers and body
  const functionBody = `function getValueAtPath(
      data: any,
      path: Array<string | number>
    ): any {
      let current: JsonValue | undefined = data;
      for (const key of path) {
        if (
          current !== undefined &&
          current !== null &&
          typeof current === 'object'
        ) {
          current = Array.isArray(current)
            ? current[key as number]
            : current[key as string];
        } else {
          return undefined; // Not an object or array, or path does not exist
        }
      }
      if (typeof current !== 'string') {
        return undefined;
      }
      return current;
    }\n\n${argsType}\n\nasync function run(args: Args) {
    // Validate that all required args are provided
    const missingArgs = [${variables
      .map((v) => `"${v}"`)
      .join(", ")}].filter(arg => !(arg in args));
    if (missingArgs.length > 0) {
      throw new Error("Missing arguments: " + missingArgs.join(", "));
    }
    // Replace Mustache variables in messages
    const messages = ${JSON.stringify(
        functionData.messages,
        null,
        2
      )}.map(message => ({
      ...message,
      content: message.content.replace(/{{\\s*(\\w+)\\s*}}/g, (_, key) => {
        if (key in args) {
          return args[key];
        } else {
          return "";
        }
      })
    }));
    
    let requestBody;
    ${functionData.resource.getBody !== undefined && `
    const getBody = ${functionData.resource.getBody};
    requestBody = getBody({ messages, model: "${functionData.model}", args: ${functionData.args ? JSON.stringify(JSON.parse(functionData.args)) : "{}"} });`}
    ${functionData.resource.getBody === undefined && `
      requestBody = {
      messages: messages,
      model: "${functionData.model}",
      ${functionData.args
      ? `...${JSON.stringify(JSON.parse(functionData.args))},`
      : ""
    }
    };`}

    const response = await fetch("${functionData.resource.apiUrl}", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "anthropic-dangerous-direct-browser-access": "true",
        ${authorizationHeader}
        ${additionalHeaders}
      },
      body: JSON.stringify(requestBody, null, 2),
    });

    if (!response.ok) {
      throw new Error(\`Request failed with status \${response.status}\`);
    }
    

    const data = await response.json();
    ${functionData.outputPath !== undefined
      ? `
      // Extract value using outputPath
      const result = getValueAtPath(data, ${JSON.stringify(functionData.outputPath)});
      return result;
      `
      : `
      return data;
      `
    }
  }`;
  return functionBody;
};
