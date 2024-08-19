import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "h-full",
          "w-full",
          "rounded-md",
          "border",
          "border-zinc-300",
          "dark:border-zinc-700",
          "px-3",
          "py-2",
          "text-sm",
          "ring-offset-background",
          "file:border-0",
          "file:bg-transparent",
          "file:text-sm",
          "file:font-medium",
          "bg-transparent",
          "placeholder:text-muted-foreground",
          "disabled:cursor-not-allowed",
          "disabled:opacity-50",
          "focus-visible:outline-1",
          "focus-visible:outline-blue-500",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
