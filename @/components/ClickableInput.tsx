import { cn } from "@/lib/utils";
import { type ClassValue } from "clsx";
import {
  type FC,
  type HTMLInputTypeAttribute,
  useEffect,
  useState,
} from "react";
import { ZodError } from "zod";
import { Button } from "./ui/button";

export type ClickableInputProps = {
  value: string;
  parse: (value: string) => string;
  placeholder?: string;
  description?: string;
  type?: HTMLInputTypeAttribute;
  label?: string;
  onClick?: () => void;
  onBlur?: (value: string) => void;
  rootClassName?: ClassValue[] | ClassValue;
  inputClassName?: ClassValue[] | ClassValue;
  buttonClassName?: ClassValue[] | ClassValue;
  disabled?: boolean;
};

export const ClickableInput: FC<ClickableInputProps> = ({
  value,
  parse,
  placeholder,
  description,
  type = "text",
  label,
  onClick,
  onBlur,
  rootClassName,
  inputClassName,
  buttonClassName,
  disabled = false,
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>(value);
  useEffect(() => {
    setInputText(value);
  }, [value]);
  const [error, setError] = useState<string | undefined>(undefined);
  const handleFinish = () => {
    if (error !== undefined) {
      return;
    }
    setIsClicked(false);
    onBlur?.(inputText);
  };
  const isEmpty = inputText === "";
  return (
    <div className={cn(["flex", "flex-col", "gap-1", rootClassName])}>
      {label !== undefined && (
        <label
          className={cn([
            "px-2",
            "text-xs",
            "text-stone-500",
            "dark:text-stone-400",
          ])}
        >
          {label}
        </label>
      )}
      {!isClicked && (
        <Button
          variant={"unstyled"}
          onClick={() => {
            setIsClicked(true);
            onClick?.();
          }}
          className={cn([
            "px-2",
            "py-1",
            "rounded-md",
            "justify-start",
            `text-left`,
            "focus:border-none",
            "min-h-8",
            "focus-visible:outline-0",
            "focus-visible:ring-0",
            "focus-visible:border-none",
            "text-sm",
            isEmpty && ["text-stone-400", "dark:text-stone-500"],
            buttonClassName,
          ])}
        >
          <p>{isEmpty ? placeholder : inputText}</p>
        </Button>
      )}
      {isClicked && (
        <input
          className={cn([
            "rounded-md",
            "px-2",
            "py-1",
            "min-h-8",
            "border",
            "ring-0",
            "outline-0",
            "focus-visible:outline-0",
            "focus-visible:ring-0",
            "focus-visible:border-none",
            "text-sm",
            "bg-transparent",
            inputClassName,
          ])}
          autoFocus
          type={type}
          disabled={disabled}
          onBlur={() => handleFinish()}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "Escape") {
              handleFinish();
            }
          }}
          value={inputText}
          onChange={(event) => {
            try {
              setInputText(parse(event.target.value));
              setError(undefined);
            } catch (e) {
              setInputText(event.target.value);
              if (e instanceof ZodError && e.errors.length > 0) {
                setError(e.errors[0]?.message);
              } else if (e instanceof Error) {
                setError(e.message);
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
            "text-stone-500",
            "dark:text-stone-400",
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
