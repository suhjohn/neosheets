// FunctionList.tsx

import { cn } from "@/lib/utils";
import { FunctionType } from "@/types/sheet";
import { Link } from "@remix-run/react";
import { FC } from "react";
import { Button } from "../ui/button";

type FunctionListProps = {
  filteredFunctions: FunctionType[];
  onSelectFunction?: (id: string) => void;
  selectedFunctionId?: string;
};

const FunctionList: FC<FunctionListProps> = ({
  filteredFunctions,
  onSelectFunction,
  selectedFunctionId,
}) => {
  return (
    <div className="divide-y w-full">
      {filteredFunctions?.map((func) =>
        onSelectFunction ? (
          <Button
            key={func.id}
            onClick={() => onSelectFunction(func.id)}
            variant="ghost"
            className={cn(
              "py-4",
              "px-4",
              "flex",
              "flex-col",
              "gap-2",
              "items-start",
              "w-full",
              "h-auto",
              "justify-between",
              "hover:cursor-pointer",
              "text-left",
              "text-wrap",
              selectedFunctionId !== func.id &&
              "hover:bg-stone-50 dark:hover:bg-stone-900",
              selectedFunctionId === func.id && "bg-stone-100 dark:bg-stone-900"
            )}
          >
            <p className="text-sm font-bold">{func.functionName}</p>
            <p
              className={cn(
                "text-xs dark:text-stone-400 text-stone-600",
                "line-clamp-2 overflow-hidden"
              )}
            >
              {func.description}
            </p>
            <p className="text-xs dark:text-stone-400 text:stone-600">
              {func.createdBy}
            </p>
          </Button>
        ) : (
          <Link key={func.id} to={`/function/${func.id}`}>
            <div
              className={cn(
                "py-4",
                "px-4",
                "flex",
                "flex-col",
                "gap-2",
                "items-start",
                "w-full",
                "justify-between",
                "hover:cursor-pointer",
                selectedFunctionId !== func.id &&
                "hover:bg-stone-50 dark:hover:bg-stone-900",
                selectedFunctionId === func.id &&
                "bg-stone-100 dark:bg-stone-900"
              )}
            >
              <div className="flex justify-between w-full">
                <p className="text-sm font-bold">{func.functionName}</p>
              </div>
              <p
                className={cn(
                  "text-xs dark:text-stone-400 text-stone-600",
                  "line-clamp-2 overflow-hidden"
                )}
              >
                {func.description}
              </p>
              <p className="text-xs dark:text-stone-400 text:stone-600">
                {func.createdBy}
              </p>
            </div>
          </Link>
        )
      )}
    </div>
  );
};

export default FunctionList;
