import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { FC, HTMLInputTypeAttribute, useState } from "react";
import { ZodError } from "zod";
import { Input } from "./ui/input";

export type LabeledInputProps = {
  value: string;
  onChange: (value: string) => void;
  parse: (value: string) => string;
  label?: string;
  placeholder?: string;
  description?: string;
  type?: HTMLInputTypeAttribute;
  onClick?: () => void;
  rootClassName?: ClassValue[] | ClassValue;
  inputClassName?: ClassValue[] | ClassValue;
};

export const LabeledInput: FC<LabeledInputProps> = ({
  value,
  onChange,
  parse,
  description,
  type = "text",
  label,
  rootClassName,
  inputClassName,
}) => {
  const [error, setError] = useState<string | undefined>(undefined);
  return (
    <div className={cn(["flex", "space-y-2", "flex-col", rootClassName])}>
      <label className={cn(["text-sm"])}>{label}</label>
      <Input
        className={cn([inputClassName])}
        autoFocus
        type={type}
        value={value}
        onChange={(event) => {
          try {
            onChange(parse(event.target.value));
            setError(undefined);
          } catch (e) {
            onChange(event.target.value);
            if (e instanceof ZodError && e.errors.length > 0) {
              setError(e.errors[0]?.message);
            }
          }
        }}
      />
      {error === undefined && description !== undefined && (
        <p
          className={cn([
            "word-wrap",
            "px-2",
            "text-xs",
            "text-zinc-500",
            "dark:text-zinc-400",
          ])}
        >
          {description}
        </p>
      )}
      {error !== undefined && (
        <p
          className={cn([
            "word-wrap",
            "px-2",
            "text-xs",
            "text-red-500",
            "dark:text-red-400",
          ])}
        >
          {error}
        </p>
      )}
    </div>
  );
};
