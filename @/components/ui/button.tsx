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
          "bg-blue-500 hover:bg-blue-500/90 aria-selected:bg-blue-500/90",
        destructive:
          "bg-red-500 text-destructive-foreground hover:bg-red-500/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700",
        ghost:
          "hover:bg-zinc-200 hover:dark:bg-zinc-800 text-zinc-950 dark:text-zinc-50",
        link: "text-blue-500 underline-offset-4 hover:underline",
        unstyled: "",
      },
      size: {
        default: "h-7 min-w-7 px-2 flex-shrink-0",
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
