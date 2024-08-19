// @/components/FunctionBindingsModal.tsx
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { type FC, useState } from "react";
import { useFunctions } from "../hooks/useFunction";
import { FunctionListPanel } from "./function-list-panel/FunctionListPanel";
import { FunctionDetailPanel } from "./function/FunctionDetailPanel";

type FunctionBindingsSelectPanelProps = {
  sheetId: string;
  selectedFunctionBinding: {
    functionName: string;
    functionId: string;
  };
  onBack: () => void;
  onFunctionSelect: (name: string, newFunctionId: string) => void;
};

export const FunctionBindingsSelectPanel: FC<
  FunctionBindingsSelectPanelProps
> = ({ selectedFunctionBinding, onBack, onFunctionSelect }) => {
  const [newSelectedFunctionId, setNewSelectedFunctionId] = useState("");
  const { data: functions } = useFunctions();
  const selectedFunctionId =
    newSelectedFunctionId !== ""
      ? newSelectedFunctionId
      : selectedFunctionBinding.functionId;

  return (
    <>
      <DialogHeader className="sticky top-0 bg-white dark:bg-stone-950">
        <div className="flex justify-between items-center">
          <Button onClick={() => onBack()} variant="icon" className="p-0 gap-1">
            <ChevronLeft size={16} />
            <p>Back to bindings list</p>
          </Button>
          <DialogClose />
        </div>
        <DialogTitle>
          {`Select a function for '${selectedFunctionBinding.functionName}'`}
        </DialogTitle>
        <DialogDescription className="text-xsm">
          {`Choose a function to bind to '${selectedFunctionBinding.functionName}'. When you type =${selectedFunctionBinding.functionName} in a cell, the selected function will be called.`}
        </DialogDescription>
      </DialogHeader>
      <div
        className={cn(
          "flex overflow-hidden border-y border-y-stone-200 dark:border-y-stone-800",
          "border-r border-r-stone-200 dark:border-r-stone-800"
        )}
      >
        <FunctionListPanel
          selectedFunctionId={
            newSelectedFunctionId !== ""
              ? newSelectedFunctionId
              : selectedFunctionBinding.functionId
          }
          onSelectFunction={(id) => setNewSelectedFunctionId(id)}
          showCreateFunctionButton={false}
        />
        {selectedFunctionId !== "" && (
          <FunctionDetailPanel id={selectedFunctionId} showMenuButton={false} />
        )}
      </div>
      <DialogFooter>
        <Button
          onClick={() => {
            onFunctionSelect(
              selectedFunctionBinding.functionName,
              newSelectedFunctionId
            );
            onBack();
          }}
          disabled={selectedFunctionId === ""}
        >
          {selectedFunctionId === ""
            ? "Select a function"
            : `Use '${
                functions?.find((f) => f.id === selectedFunctionId)
                  ?.functionName ?? ""
              }-${selectedFunctionId.toString().slice(0, 6)}' for '${
                selectedFunctionBinding.functionName
              }'`}
        </Button>
      </DialogFooter>
    </>
  );
};
