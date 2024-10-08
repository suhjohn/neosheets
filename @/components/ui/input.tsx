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
          "border",
          "border-stone-200",
          "dark:border-stone-800",
          "rounded-md",
          "px-3",
          "py-2",
          "text-sm",
          "ring-offset-background",
          "font-[300]",
          "file:border-0",
          "file:bg-transparent",
          "file:text-sm",
          "file:font-medium",
          "bg-transparent",
          "placeholder:text-stone-500",
          "disabled:cursor-not-allowed",
          "disabled:opacity-50",
          "focus-visible:outline-none",
          "focus-visible:border",
          "focus-visible:border-blue-500",
          "focus-visible:dark:border-blue-500",
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
