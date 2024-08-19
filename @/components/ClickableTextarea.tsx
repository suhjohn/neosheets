import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { FC, useEffect, useState } from "react";
import { ZodError } from "zod";

export type ClickableTextareaProps = {
  value: string;
  parse: (value: string) => string;
  placeholder?: string;
  description?: string;
  label?: string;
  onClick?: () => void;
  onBlur?: (value: string) => void;
  rootClassName?: ClassValue[] | ClassValue;
  textareaClassName?: ClassValue[] | ClassValue;
  buttonClassName?: ClassValue[] | ClassValue;
  rows?: number;
};

export const ClickableTextarea: FC<ClickableTextareaProps> = ({
  value,
  parse,
  placeholder,
  description,
  label,
  onClick,
  onBlur,
  rootClassName,
  textareaClassName,
  buttonClassName,
  rows = 3,
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [textareaContent, setTextareaContent] = useState<string>(value);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    setTextareaContent(value);
  }, [value]);

  const handleFinish = () => {
    setIsClicked(false);
    onBlur?.(textareaContent);
  };

  const isEmpty = textareaContent === "";

  return (
    <div className={cn(["flex", "flex-col", rootClassName])}>
      {label && (
        <label
          className={cn([
            "px-2",
            "text-xs",
            "text-zinc-500",
            "dark:text-zinc-400",
          ])}
        >
          {label}
        </label>
      )}
      {!isClicked && (
        <button
          onClick={() => {
            setIsClicked(true);
            onClick?.();
          }}
          className={cn([
            "px-2",
            "py-1",
            "rounded-md",
            "border-2",
            "justify-start",
            "text-left",
            "border-transparent",
            "hover:border-zinc-200",
            "dark:hover:border-zinc-700",
            "min-h-8",
            "focus-visible:outline-0",
            "focus-visible:ring-0",
            "focus-visible:border-blue-500",
            "text-sm",
            isEmpty && ["text-zinc-400", "dark:text-zinc-500"],
            buttonClassName,
          ])}
        >
          <p>{isEmpty ? placeholder : textareaContent}</p>
        </button>
      )}
      {isClicked && (
        <textarea
          className={cn([
            "rounded-md",
            "px-2",
            "py-1",
            "min-h-8",
            "border-2",
            "ring-0",
            "outline-0",
            "focus-visible:outline-0",
            "focus-visible:ring-0",
            "focus-visible:border-blue-500",
            "text-sm",
            "bg-transparent",
            "resize-none",
            textareaClassName,
          ])}
          autoFocus
          rows={rows}
          onBlur={() => handleFinish()}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              handleFinish();
            }
          }}
          value={textareaContent}
          onChange={(event) => {
            try {
              setTextareaContent(parse(event.target.value));
              setError(undefined);
            } catch (e) {
              setTextareaContent(event.target.value);
              if (e instanceof ZodError && e.errors.length > 0) {
                setError(e.errors[0]?.message);
              }
            }
          }}
        />
      )}
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
