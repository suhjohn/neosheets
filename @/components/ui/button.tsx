import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  cn(
    "inline-flex",
    "items-center",
    "justify-center",
    "whitespace-nowrap",
    "rounded-md",
    "text-xs",
    "font-medium",
    "ring-offset-background",
    "transition-colors",
    "focus-visible:outline-1",
    "focus-visible:outline-blue-500",
    "disabled:pointer-events-none",
    "disabled:opacity-50"
  ),
  {
    variants: {
      variant: {
        default:
          "bg-blue-500 hover:bg-blue-500/90 aria-selected:bg-blue-500/90 text-white",
        destructive:
          "bg-red-500 text-destructive-foreground hover:bg-red-500/90",
        outline:
          "border hover:bg-stone-100 dark:hover:bg-stone-900 dark:border-stone-800 border-stone-200",
        secondary:
          "bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700",
        ghost:
          "hover:bg-stone-100 hover:dark:bg-stone-900",
        selected: "bg-stone-100 dark:bg-stone-900 text-stone-900 dark:text-stone-50",
        icon: "text-stone-500 hover:text-stone-800 dark:text-stone-500 dark:hover:text-stone-200",
        destructiveIcon: "text-red-500 hover:text-red-800 dark:text-red-500 dark:hover:text-red-200",
        link: "text-blue-500 underline-offset-4 hover:underline",
        unstyled: "",
      },
      size: {
        default: "h-7 min-w-7 px-3 flex-shrink-0",
        sm: "h-8 rounded-md min-w-8 px-2",
        lg: "h-10 rounded-md min-w-10 px-2",
        icon: "h-8 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
