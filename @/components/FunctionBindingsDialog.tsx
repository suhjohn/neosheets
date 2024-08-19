// FunctionBindingsModal.tsx
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
import { useFunctions } from "@/hooks/useFunction";
import { cn } from "@/lib/utils";
import { ChevronRight, PlusIcon, Trash2Icon } from "lucide-react";
import { type FC, useCallback, useMemo, useState } from "react";
import { PiFunction } from "react-icons/pi";
import {
  useFunctionBindings,
  useUpdatefunctionBindings,
} from "../hooks/useFunctionBindings";
import { ClickableInput } from "./ClickableInput";
import { FunctionBindingsSelectPanel } from "./FunctionBindingsSelectPanel";
import { Input } from "./ui/input";

type FunctionBindingsDialogProps = {
  sheetId: string;
};

export const FunctionBindingsDialog: FC<FunctionBindingsDialogProps> = ({
  sheetId,
}) => {
  const [selectedFunctionBinding, setSelectedFunctionBinding] = useState<{
    functionName: string;
    functionId: string;
  } | null>(null);

  const [openCreateNew, setOpenCreateNew] = useState(false);
  const { data: functions } = useFunctions();
  const { data: functionBindings, refetch } = useFunctionBindings(sheetId);
  const [isSaved, setIsSaved] = useState(false);
  const { mutateAsync: updateFunctionBindings } = useUpdatefunctionBindings();
  const showSavedIndicator = useCallback(() => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000); // Hide after 2 seconds
  }, []);
  const [newFunction, setNewFunction] = useState({
    name: "",
    functionId: "",
  });

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
    if (newFunction.name === "" || newFunction.functionId === "") {
      return;
    }
    const newFunctionBindings = [...functionBindings.functionBindings];
    newFunctionBindings.push({
      name: newFunction.name,
      functionId: newFunction.functionId,
      isCustom: true,
      function: null,
    });
    await updateFunctionBindings({
      sheetId,
      functionBindings: newFunctionBindings,
    });
  };

  const handleRemoveFunction = async (name: string) => {
    if (!functionBindings) {
      return;
    }
    const newFunctionBindings = functionBindings.functionBindings.filter(
      (f) => f.name !== name
    );
    await updateFunctionBindings({
      sheetId,
      functionBindings: newFunctionBindings,
    });
    await refetch();
  };

  const handleFunctionNameChange = useCallback(
    (prevName: string, newName: string) => {
      if (!functionBindings) {
        return;
      }
      const newFunctionBindings = [...functionBindings.functionBindings];
      const index = newFunctionBindings.findIndex((f) => f.name === prevName);
      if (index === -1) {
        return;
      }
      newFunctionBindings[index].name = newName;
      debouncedUpdateFunctionBindings(newFunctionBindings);
    },
    [functionBindings, debouncedUpdateFunctionBindings]
  );

  const handleFunctionSelectForNew = useCallback(
    (_: string, newFunctionId: string) => {
      setNewFunction({ ...newFunction, functionId: newFunctionId });
    },
    [newFunction]
  );

  const handleFunctionSelect = useCallback(
    (name: string, newFunctionId: string) => {
      if (!functionBindings) {
        return;
      }
      const newFunctionBindings = [...functionBindings.functionBindings];
      const index = newFunctionBindings.findIndex((f) => f.name === name);
      if (index === -1) {
        return;
      }
      newFunctionBindings[index].functionId = newFunctionId;
      debouncedUpdateFunctionBindings(newFunctionBindings);
    },
    [functionBindings, debouncedUpdateFunctionBindings]
  );
  const nameExists = (name: string) =>
    functionBindings?.functionBindings.some(
      (f) => f.name.toUpperCase() === name.toUpperCase()
    );
  const customFunctionBindings = useMemo(
    () => functionBindings?.functionBindings.filter((f) => f.isCustom) ?? [],
    [functionBindings]
  );
  const isExistingName = functionBindings?.functionBindings.some(
    (f) => f.name.toUpperCase() === newFunction.name.toUpperCase()
  );
  const isEmptyName = newFunction.name === "";
  return (
    <Dialog
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          setSelectedFunctionBinding(null);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant="ghost" size={"sm"}>
          <PiFunction size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col align-top">
        {selectedFunctionBinding === null && (
          <>
            <DialogHeader className="sticky top-0 bg-white dark:bg-stone-950">
              <div className="flex justify-between items-center">
                <DialogTitle>Function Bindings</DialogTitle>
                <div className="flex items-center h-auto">
                  {isSaved && (
                    <p className="text-xs font-medium mr-8 text-stone-500">
                      Saved
                    </p>
                  )}
                  <DialogClose />
                </div>
              </div>
              <DialogDescription className="text-xsm">
                Customize the functions available in this sheet by binding a
                name to the specific implementation of a function. You can map
                the default names to custom functions or create a new binding
                and map it to a custom function.
              </DialogDescription>
            </DialogHeader>
            <div className="max-w-screen-lg flex flex-col overflow-y-auto gap-2">
              {/** Custom functions */}
              <div className="flex flex-col gap-2">
                <div
                  className={cn(
                    "flex",
                    "justify-between",
                    "items-center",
                    "flex-shrink-0",
                    "text-xsm",
                    "h-8",
                    "w-full",
                    "ring-none",
                    "border-none",
                    "sticky",
                    "top-0",
                    "dark:bg-stone-950",
                    "bg-white",
                  )}
                >
                  <div className="h-full flex gap-2 items-center">
                    <p>Bindings</p>
                    <p className="text-stone-700 dark:text-stone-400">{`${customFunctionBindings?.length}`}</p>
                  </div>
                  <Button
                    size={"sm"}
                    variant={"secondary"}
                    className="gap-2 flex-shrink-0"
                    onClick={() => setOpenCreateNew(true)}
                  >
                    <PlusIcon size={16} />
                    <p>Add new</p>
                  </Button>
                </div>
                {openCreateNew && (
                  <div className="flex-shrink-0 h-auto p-2">
                    <div
                      className={cn(
                        "flex items-center flex-shrink-0 h-full gap-2"
                      )}
                    >
                      <div className="w-full h-8">
                        <Input
                          className="w-full h-full"
                          onChange={(e) =>
                            setNewFunction({
                              ...newFunction,
                              name: e.target.value.toUpperCase(),
                            })
                          }
                          value={newFunction.name}
                          placeholder="Type a name to call a function..."
                        />
                      </div>
                      <div className="w-full h-8">
                        <Button
                          onClick={() => {
                            setSelectedFunctionBinding({
                              functionName: newFunction.name,
                              functionId: newFunction.functionId,
                            });
                          }}
                          variant="ghost"
                          className="w-full h-full rounded-none"
                          disabled={isExistingName || isEmptyName}
                        >
                          {newFunction.functionId !== ""
                            ? functions?.find(
                              (f) => f.id === newFunction.functionId
                            )?.functionName
                            : "Select a function"}
                        </Button>
                      </div>
                      <div className="flex gap-2 h-8 justify-end">
                        <Button
                          onClick={() => {
                            setOpenCreateNew(false);
                          }}
                          variant={"ghost"}
                          className="h-full"
                        >
                          Cancel
                        </Button>
                        <Button
                          className="h-full"
                          onClick={() => {
                            handleAddFunction();
                            setNewFunction({ name: "", functionId: "" });
                            setOpenCreateNew(false);
                          }}
                          disabled={
                            isExistingName ||
                            isEmptyName ||
                            newFunction.functionId === ""
                          }
                        >
                          Save
                        </Button>
                      </div>
                    </div>
                    <div className="px-1 py-1">
                      {isExistingName && (
                        <p className="text-xs text-destructive">
                          Name already exists
                        </p>
                      )}
                      {isEmptyName && (
                        <p className="text-xs text-destructive">
                          Name cannot be empty
                        </p>
                      )}
                    </div>
                  </div>
                )}
                <div className={cn("flex flex-col gap-2")}>
                  {customFunctionBindings?.map((binding, index) => (
                    <div
                      key={index}
                      className="flex flex-shrink-0 items-center gap-2"
                    >
                      <div className="w-full flex items-center text-xsm">
                        <ClickableInput
                          rootClassName="w-full"
                          buttonClassName="border hover:border-blue-500 dark:hover:border-blue-500 dark:hover:border"
                          inputClassName="focus-visible:ring focus-visible:ring-blue-500"
                          value={binding.name}
                          onBlur={(value) =>
                            handleFunctionNameChange(binding.name, value)
                          }
                          parse={(value) => {
                            if (nameExists(value) && value !== binding.name) {
                              throw new Error("Name already exists");
                            }
                            return value;
                          }}
                          placeholder="Function name"
                        />
                      </div>
                      {/** Function selector */}
                      <div className="flex h-full w-full items-center h-8">
                        <Button
                          className="w-full h-8 gap-2 flex justify-between"
                          variant="secondary"
                          onClick={() =>
                            setSelectedFunctionBinding({
                              functionName: binding.name,
                              functionId: binding.functionId,
                            })
                          }
                        >
                          <p>{binding.function?.functionName}</p>
                          <ChevronRight size={16} />
                        </Button>
                      </div>
                      <Button
                        size={"sm"}
                        variant="icon"
                        className={cn(
                          "w-8",
                          "flex-shrink-0",
                          "text-destructive",
                          "dark:text-destructive",
                          "hover:dark:text-red-500",
                          "hover:text-red-500"
                        )}
                        onClick={() => handleRemoveFunction(binding.name)}
                      >
                        <Trash2Icon size={16} />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
        {selectedFunctionBinding !== null && (
          <FunctionBindingsSelectPanel
            sheetId={sheetId}
            selectedFunctionBinding={selectedFunctionBinding}
            onBack={() => setSelectedFunctionBinding(null)}
            onFunctionSelect={
              selectedFunctionBinding.functionName === newFunction.name
                ? handleFunctionSelectForNew
                : handleFunctionSelect
            }
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
