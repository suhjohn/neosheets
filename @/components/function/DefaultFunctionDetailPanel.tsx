// @/components/function/DefaultFunctionDetailPanel.tsx
import { DEFAULT_FUNCTIONS } from "@/fixtures";
import { validateFunction } from "@/lib/function";
import { cn } from "@/lib/utils";
import { javascript } from "@codemirror/lang-javascript";
import { Link, useNavigate } from "@remix-run/react";
import { vscodeDark, vscodeLight } from "@uiw/codemirror-theme-vscode";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { Copy, MoreHorizontal, Trash } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "remix-themes";
import {
  type UpdateFunctionArgsType,
  useCreateFunction,
  useDeleteFunction,
  useFunction,
  useUpdateFunction,
} from "../../hooks/useFunction";
import { AutoResizeTextarea } from "../AutoResizeTextarea";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";

type DefaultFunctionDetailPanelProps = {
  id: string;
  showMenuButton?: boolean;
};

export function DefaultFunctionDetailPanel({
  id,
  showMenuButton = true,
}: DefaultFunctionDetailPanelProps) {
  const { data: functionData } = useFunction(id);
  const { mutateAsync: callUpdate } = useUpdateFunction();
  const [functionState, setFunctionState] = useState<UpdateFunctionArgsType>({
    id,
    functionName: "",
    functionBody: "",
    description: "",
  });
  const [showSaved, setShowSaved] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [resolvedTheme] = useTheme();
  const createFunction = useCreateFunction();

  const deleteFunction = useDeleteFunction();
  const navigate = useNavigate();

  useEffect(() => {
    if (functionData) {
      setFunctionState({
        id: functionData.id,
        functionName: functionData.functionName,
        functionBody: functionData.functionBody,
        description: functionData.description || "",
      });
    }
  }, [functionData]);

  const validateFunctionCb = useCallback((code: string) => {
    try {
      validateFunction(code);
      setError(null);
      return true;
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
      return false;
    }
  }, []);

  const isDefaultFunction = (id: string) => {
    return DEFAULT_FUNCTIONS.map((func) => func.id).includes(id);
  };

  const handleChange = useCallback(
    async (newState: UpdateFunctionArgsType) => {
      validateFunctionCb(newState.functionBody);
      setFunctionState(newState);
      await callUpdate(newState);
      setShowSaved(true);
    },
    [callUpdate, validateFunctionCb]
  );

  const handleCopy = useCallback(async () => {

    const createdFunction = await createFunction.mutateAsync({
      functionName: functionState.functionName,
      functionBody: functionState.functionBody,
      description: functionState.description,
    });
    navigate(`/function/${createdFunction.id}`);
  }, [createFunction, functionState, navigate]);

  const handleDelete = useCallback(async () => {
    await deleteFunction.mutateAsync(id);
    navigate(-1);
  }, [deleteFunction, id, navigate]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (showSaved) {
      timeoutId = setTimeout(() => {
        setShowSaved(false);
      }, 2000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [showSaved]);

  return (
    <div className="flex flex-col w-full">
      {/** Header */}
      <div className="flex-shrink-0 flex w-full px-2 md:px-4 bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 h-10">
        <div className="flex gap-1 items-center justify-between w-full">
          <Link to={`/function/${functionState.id}`} className="">
            <p className="text-xsm">
              {functionState.functionName}-{functionState.id.slice(0, 6)}
            </p>
          </Link>
          {showMenuButton && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleCopy}>
                  <div className="flex items-center gap-2">
                    <Copy size={16} />
                    <p>Clone</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDelete}>
                  <div className="flex items-center gap-2">
                    <Trash size={16} />
                    <p>Delete</p>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
      <div className="flex flex-col flex-shrink-0 w-full space-y-4 px-6 py-8 items-center">
        <div className="max-w-screen-md flex w-full flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div>
              <Badge className="text-xs w-auto px-2 py-1" variant="secondary">
                {isDefaultFunction(functionState.id)
                  ? "Default function"
                  : "Custom function"}
              </Badge>
            </div>
            {/** Header */}
            <div className="flex w-full items-center space-x-2">
              <Input
                className={cn(
                  "w-full font-[500] text-xl border-none disabled:opacity-100 px-0"
                )}
                value={functionState.functionName}
                onChange={(e) => {
                  handleChange({
                    ...functionState,
                    functionName: e.target.value,
                  });
                }}
                disabled={isDefaultFunction(functionState.id)}
              />
              <div>
                {showSaved && <p className="text-xs text-stone-500">Saved</p>}
              </div>
            </div>
            <AutoResizeTextarea
              className="text-sm border-none disabled:opacity-100 px-0"
              placeholder="Add description..."
              value={functionState.description}
              onChange={(e) => {
                handleChange({
                  ...functionState,
                  description: e.target.value,
                });
              }}
              disabled={isDefaultFunction(functionState.id)}
              minRows={1}
              maxRows={10}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <CodeMirror
              className={
                cn("text-xs rounded-lg overflow-hidden")
              }
              theme={resolvedTheme === "dark" ? vscodeDark : vscodeLight}
              extensions={[
                javascript({ typescript: true }),
                EditorView.lineWrapping,
              ]}
              value={functionState.functionBody}
              onChange={(value) => {
                handleChange({ ...functionState, functionBody: value });
              }}
              editable={!isDefaultFunction(functionState.id)}
              readOnly={isDefaultFunction(functionState.id)}
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            {!error && isDefaultFunction(functionState.id) && (
              <p className="text-xs text-stone-500">
                {`This is a default function. You can't edit it.
                  You can clone it to create a new function.`}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
