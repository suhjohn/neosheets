import { z } from "zod";

export function generateFormFields(schema: z.ZodObject<any>) {
  return Object.entries(schema.shape).map(([key, value]) => {
    let type = "text";
    if (value instanceof z.ZodNumber) type = "number";
    if (value instanceof z.ZodBoolean) type = "checkbox";
    // Add more type checks as needed

    return {
      name: key,
      type,
      label: key.charAt(0).toUpperCase() + key.slice(1),
      required: !value.isOptional(),
    };
  });
}
