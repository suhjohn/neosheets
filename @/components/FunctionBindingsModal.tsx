// FunctionBindingsModal.tsx
"use client";
import { useDebounceCallback } from "usehooks-ts";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { PlusIcon, Trash2Icon } from "lucide-react";
import { FC, useCallback, useState } from "react";
import { MdFunctions } from "react-icons/md";
import { useFunctions } from "../hooks/useFunction";
import {
  useFunctionBindings,
  useUpdatefunctionBindings,
} from "../hooks/useFunctionBindings";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

type functionBindingsModalProps = {
  sheetId: string;
};

export const FunctionBindingsModal: FC<functionBindingsModalProps> = ({
  sheetId,
}) => {
  const { data: functions } = useFunctions();
  const { data: functionBindings, refetch } = useFunctionBindings(sheetId);
  const [isSaved, setIsSaved] = useState(false);
  const { mutateAsync: updateFunctionBindings } = useUpdatefunctionBindings();
  const showSavedIndicator = useCallback(() => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000); // Hide after 2 seconds
  }, []);

  const debouncedUpdateFunctionBindings = useDebounceCallback(
    async (newBindings) => {
      await updateFunctionBindings({
        sheetId,
        functionBindings: newBindings,
      });
      await refetch();
      showSavedIndicator();
    },
    150 // 150ms debounce
  );

  const handleAddFunction = async () => {
    if (!functionBindings) {
      return;
    }
    const newFunctionBindings = [...functionBindings.functionBindings];
    newFunctionBindings.push({
      name: "",
      functionId: "",
      isCustom: true,
    });
    await updateFunctionBindings({
      sheetId,
      functionBindings: newFunctionBindings,
    });
    await refetch();
  };

  const handleRemoveFunction = async (index: number) => {
    if (!functionBindings) {
      return;
    }
    const newFunctionBindings = [...functionBindings.functionBindings];
    newFunctionBindings.splice(index, 1);
    await updateFunctionBindings({
      sheetId,
      functionBindings: newFunctionBindings,
    });
    await refetch();
  };

  const handleFunctionNameChange = useCallback(
    (index: number, newName: string) => {
      if (!functionBindings) {
        return;
      }
      const newFunctionBindings = [...functionBindings.functionBindings];
      newFunctionBindings[index].name = newName;
      debouncedUpdateFunctionBindings(newFunctionBindings);
    },
    [functionBindings, debouncedUpdateFunctionBindings]
  );

  const handleFunctionSelect = useCallback(
    (index: number, newFunctionId: string) => {
      if (!functionBindings) {
        return;
      }
      const newFunctionBindings = [...functionBindings.functionBindings];
      newFunctionBindings[index].functionId = newFunctionId;
      debouncedUpdateFunctionBindings(newFunctionBindings);
    },
    [functionBindings, debouncedUpdateFunctionBindings]
  );

  if (!functions || !functionBindings) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size={"sm"}>
          <MdFunctions size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col align-top">
        <DialogHeader className="sticky top-0 bg-white dark:bg-zinc-950">
          <div className="flex justify-between items-center">
            <DialogTitle>Function Bindings</DialogTitle>
            <div className="flex items-center h-auto">
              {isSaved && (
                <p className="text-xs font-medium mr-8 text-zinc-500">Saved</p>
              )}
              <DialogClose />
            </div>
          </div>
          <DialogDescription>
            Map function names to custom functions
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col overflow-auto gap-2">
          <Table className="w-full dark:bg-zinc-950 ring-none border-none min-w-screen-sm">
            <TableHeader className="ring-none border-none">
              <TableRow className="ring-none border-none h-8">
                <TableHead className="text-left">Function name</TableHead>
                <TableHead className="text-left">Custom Function</TableHead>
                <TableHead className="text-right w-10" />
              </TableRow>
            </TableHeader>
            <TableBody className="border-none overflow-auto">
              {functionBindings.functionBindings.map((func, index) => (
                <TableRow key={index} className="border-none">
                  <TableCell className="p-0 font-medium">
                    {func.isCustom ? (
                      <>
                        <input
                          className={cn(
                            "h-full",
                            "w-full",
                            "rounded-none",
                            "px-4",
                            "ring-none",
                            "border-none",
                            "focus:ring-0",
                            "focus:outline-none",
                            "focus:shadow-none",
                            "focus-visible:ring-0",
                            "focus-visible:outline-none",
                            "bg-transparent",
                            "dark:bg-transparent",
                            "uppercase"
                          )}
                          onChange={(e) =>
                            handleFunctionNameChange(index, e.target.value)
                          }
                          placeholder="Function name"
                          defaultValue={func.name}
                        />
                      </>
                    ) : (
                      <p className="px-4">{func.name}</p>
                    )}
                  </TableCell>
                  <TableCell className="p-0">
                    <Select
                      defaultValue={func.name.toLowerCase()}
                      onValueChange={(value) =>
                        handleFunctionSelect(index, value)
                      }
                    >
                      <SelectTrigger
                        className={cn(
                          "bg-transparent dark:bg-transparent rounded-none",
                          "border-none"
                        )}
                      >
                        <SelectValue placeholder="Select function" />
                      </SelectTrigger>
                      <SelectContent>
                        {functions.map((f) => (
                          <SelectItem
                            key={f.functionName}
                            value={f.functionName.toLowerCase()}
                          >
                            {f.functionName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="p-0">
                    {func.isCustom && (
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-destructive rounded-none"
                        onClick={() => handleRemoveFunction(index)}
                      >
                        <Trash2Icon size={16} />
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button
            variant={"ghost"}
            className="w-32 min-w-auto flex justify-start gap-1 px-4"
            onClick={handleAddFunction}
          >
            <PlusIcon size={16} />
            <p>Add function</p>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
