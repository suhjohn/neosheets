"use client";

import * as React from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";

type FunctionComboboxProps = {
  functions: { value: string; label: string }[];
  onSelect: (value: string) => void;
  open?: boolean;
};

export function FunctionCombobox({
  functions,
  onSelect,
  open,
}: FunctionComboboxProps) {
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open}>
      <PopoverTrigger asChild></PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search function..." className="h-9" />
          <CommandList>
            <CommandEmpty>No function found.</CommandEmpty>
            <CommandGroup>
              {functions.map((fn) => (
                <CommandItem
                  key={fn.value}
                  value={fn.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    onSelect(currentValue);
                  }}
                >
                  {fn.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === fn.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
