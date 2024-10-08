// FunctionListItem.tsx

import React, { FC } from "react";
import { Button } from "./ui/button";
import { Link } from "@remix-run/react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { FunctionType } from "@/types/function"; // Adjust the import according to your types

type FunctionListItemProps = {
  func: FunctionType;
  onSelectFunction?: (id: string) => void;
  selectedFunctionId?: string;
};

const FunctionListItem: FC<FunctionListItemProps> = ({
  func,
  onSelectFunction,
  selectedFunctionId,
}) => {
  const content = (
    <div
      className={cn(
        "py-4 px-4 flex flex-col gap-2 items-start w-full justify-between hover:cursor-pointer",
        selectedFunctionId !== func.id
          ? "hover:bg-stone-50 dark:hover:bg-stone-900"
          : "bg-stone-100 dark:bg-stone-900"
      )}
    >
      <div className="flex justify-between w-full">
        <p className="text-sm font-bold">{func.functionName}</p>
        <Badge variant={"secondary"} className="text-xs">
          {func.type}
        </Badge>
      </div>
      <p className="text-xs dark:text-stone-400 text-stone-600 line-clamp-2 overflow-hidden">
        {func.description}
      </p>
      <p className="text-xs dark:text-stone-400 text-stone-600">
        {func.createdBy}
      </p>
    </div>
  );

  if (onSelectFunction) {
    return (
      <Button
        onClick={() => onSelectFunction(func.id)}
        variant="ghost"
        className="w-full h-auto text-left p-0"
      >
        {content}
      </Button>
    );
  } else {
    return (
      <Link to={`/function/${func.id}`} className="w-full">
        {content}
      </Link>
    );
  }
};

export default FunctionListItem;
