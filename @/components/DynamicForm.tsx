import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { humanizeCase } from "@/lib/utils";
import { generateFormFields } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type z } from "zod";

interface DynamicFormProps {
  schema: z.ZodObject<any>;
  onSubmit: (data: any) => void;
}

export function DynamicForm({ schema, onSubmit }: DynamicFormProps) {
  const fields = generateFormFields(schema);
  const form = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-2">
          {fields.map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name}
              render={({ field: formField }) => (
                <FormItem>
                  <FormLabel>{humanizeCase(field.label)}</FormLabel>
                  <FormControl>
                    <Input
                      {...formField}
                      type={field.type}
                      required={field.required}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
