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
          [
            "flex",
            "w-full",
            "bg-transparent",
            "px-2",
            "py-2",
            "border-none",
            "ring-0",
            "outline-0",
            "text-base",
            "text-sm",
            "resize-none",
            "placeholder:text-zinc-400",
            "disabled:cursor-not-allowed",
            "disabled:opacity-50",
            "focus-visible:ring-0",
            "focus-visible:outline-0",
            "focus-visible:border-zinc-400",
            "dark:border-zinc-700",
            "dark:placeholder:text-zinc-600",
            "dark:focus-visible:border-zinc-500",
          ],
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
