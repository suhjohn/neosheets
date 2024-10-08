import * as React from "react";
import TextareaAutosize from "react-textarea-autosize";

import { cn } from "@/lib/utils";

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    maxRows?: number;
    minRows?: number;
  };

const AutoResizeTextarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, maxRows, minRows, style, ...props }, ref) => {
    return (
      <TextareaAutosize
        className={cn(
          "flex",
          "w-full",
          "text-base",
          "text-sm",
          "resize-none",
          "rounded-md",
          "border",
          "border-stone-200",
          "dark:border-stone-800",
          "hover:border-stone-300",
          "dark:hover:border-stone-700",
          "focus-visible:border-stone-400",
          "dark:focus-visible:border-stone-600",
          "text-foreground",
          "placeholder:text-stone-500",
          "disabled:cursor-not-allowed",
          "disabled:opacity-50",
          "focus:outline-none",
          "bg-transparent",
          "px-3",
          "py-2",
          "font-[300]",
          className
        )}
        style={{
          ...style,
          height: style !== undefined ? Number(style.height) : undefined,
        }}
        ref={ref}
        maxRows={maxRows}
        minRows={minRows}
        {...props}
      />
    );
  }
);
AutoResizeTextarea.displayName = "Textarea";

export { AutoResizeTextarea };
