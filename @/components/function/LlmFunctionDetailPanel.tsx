// @/components/function/LlmFunctionDetailPanel.tsx
import { DEFAULT_FUNCTIONS, DEFAULT_RESOURCES } from "@/fixtures";
import { cn, extractMustacheVariables, validateJSON } from "@/lib/utils";
import { json } from "@codemirror/lang-json";
import { Link, useNavigate } from "@remix-run/react";
import { vscodeDark, vscodeLight } from "@uiw/codemirror-theme-vscode";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { Copy, MoreHorizontal, Trash } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTheme } from "remix-themes";
import {
  type UpdateFunctionArgsType,
  UpdateLLMFunctionArgsType,
  useCreateLlmFunction,
  useDeleteFunction,
  useFunction,
  useUpdateLlmFunction,
} from "../../hooks/useFunction";
import { ArrayInput } from "../ArrayInput";
import { AutoResizeTextarea } from "../AutoResizeTextarea";
import { PromptInput } from "../PromptInput";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type LLMFunctionDetailPanelProps = {
  id: string;
  showMenuButton?: boolean;
};

type CombinedState = UpdateFunctionArgsType & UpdateLLMFunctionArgsType;

export function LLMFunctionDetailPanel({
  id,
  showMenuButton = true,
}: LLMFunctionDetailPanelProps) {
  const { data: functionData } = useFunction(id);
  const { mutateAsync: callUpdate } = useUpdateLlmFunction();
  const [state, setState] = useState<CombinedState>({
    id,
    functionName:
      functionData?.type === "llm" ? functionData?.functionName : "",
    functionBody:
      functionData?.type === "llm" ? functionData?.functionBody : "",
    description: functionData?.type === "llm" ? functionData?.description : "",
    resourceId: functionData?.type === "llm" ? functionData?.resourceId : "",
    messages: functionData?.type === "llm" ? functionData?.messages : [],
    model: functionData?.type === "llm" ? functionData?.model : "",
    args: functionData?.type === "llm" ? functionData?.args ?? "" : "",
    prompt: null,
  });
  const [outputPathStr, setOutputPathStr] = useState<string | null>(
    functionData?.type === "llm" && functionData?.outputPath
      ? functionData.outputPath.join(",")
      : null
  );
  useEffect(() => {
    if (functionData && functionData.type === "llm") {
      setState({
        id: functionData.id,
        functionName: functionData.functionName,
        functionBody: functionData.functionBody,
        description: functionData.description,
        resourceId: functionData.resourceId,
        messages: functionData.messages,
        model: functionData.model,
        args: functionData.args ?? "",
        prompt: functionData.prompt,
        outputPath: functionData.outputPath,
      });
      setOutputPathStr(functionData.outputPath?.join(",") ?? "");
    }
  }, [functionData]);

  const [showSaved, setShowSaved] = useState<boolean>(false);
  const [resolvedTheme] = useTheme();
  const [jsonError, setJsonError] = useState<string | null>(null);

  const createLlmFunction = useCreateLlmFunction();
  const deleteFunction = useDeleteFunction();
  const navigate = useNavigate();
  const isDefaultFunction = useCallback(
    (id: string) => DEFAULT_FUNCTIONS.some((func) => func.id === id),
    []
  );

  const handleChange = useCallback(
    async (updatedFields: Partial<CombinedState>) => {
      let diffExists = false;
      Object.keys(updatedFields).forEach((key) => {
        const typedKey = key as keyof CombinedState;
        if (updatedFields[typedKey] !== undefined) {
          if (
            JSON.stringify(updatedFields[typedKey]) !==
            JSON.stringify(state[typedKey])
          ) {
            diffExists = true;
          }
        }
      });
      if (!diffExists) {
        return;
      }
      // console.log("updatedFields", updatedFields, state);
      const updatedState = { ...state, ...updatedFields };
      setState(updatedState);
      await callUpdate({
        id: updatedState.id,
        functionName: updatedState.functionName,
        functionBody: updatedState.functionBody,
        description: updatedState.description,
        resourceId: updatedState.resourceId,
        messages: updatedState.messages,
        model: updatedState.model,
        prompt: null,
        args: updatedState.args,
        outputPath: updatedState.outputPath,
      });
      setShowSaved(true);
    },
    [state, callUpdate]
  );

  const handleCopy = useCallback(async () => {
    const createdFunction = await createLlmFunction.mutateAsync(state);
    navigate(`/function/${createdFunction.id}`);
  }, [createLlmFunction, state, navigate]);

  const handleDelete = useCallback(async () => {
    await deleteFunction.mutateAsync(id);
    navigate(-1);
  }, [deleteFunction, id, navigate]);

  useEffect(() => {
    if (showSaved) {
      const timeoutId = setTimeout(() => setShowSaved(false), 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [showSaved]);

  const allVariables = useMemo(
    () =>
      state.messages.flatMap((message) =>
        extractMustacheVariables(message.content)
      ),
    [state.messages]
  );

  const uniqueVariables = useMemo(
    () => Array.from(new Set(allVariables)),
    [allVariables]
  );

  const handleJsonChange = (value: string) => {
    setState((prev) => ({ ...prev, args: value }));
    const { error } = validateJSON(value);
    setJsonError(error);
    if (error !== null) {
      handleChange({ args: value });
    }
  };

  return (
    <div className="flex flex-col w-full max-h-[100dvh] overflow-y-auto">
      {/* Header */}
      <div className="z-10 flex-shrink-0 sticky top-0 bg-white dark:bg-stone-950 flex w-full px-2 md:px-4 border-b border-stone-200 dark:border-stone-800 h-10">
        <div className="flex gap-1 items-center justify-between w-full">
          <Link to={`/function/${state.id}`} className="">
            <p className="text-xsm">
              {state.functionName}-{state.id.slice(0, 6)}
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
      <div className="z-1 flex flex-col flex-shrink-0 w-full space-y-4 px-6 py-8 items-center">
        <div className="flex flex-col gap-1 w-full max-w-screen-md overflow-y-auto">
          <div>
            <Badge className="text-xs w-auto px-2 py-1" variant="secondary">
              {isDefaultFunction(state.id)
                ? "Default function"
                : "Custom function"}
            </Badge>
          </div>
          {/* Header */}
          <div className="flex w-full items-center space-x-2">
            <Input
              className={cn(
                "w-full font-[500] text-xl border-none disabled:opacity-100 px-0"
              )}
              value={state.functionName}
              onChange={(e) => handleChange({ functionName: e.target.value })}
              disabled={isDefaultFunction(state.id)}
            />
            <div>
              {showSaved && <p className="text-xs text-stone-500">Saved</p>}
            </div>
          </div>
          <AutoResizeTextarea
            className="text-sm border-none disabled:opacity-100 px-0"
            placeholder="Add description..."
            value={state.description}
            onChange={(e) => {
              handleChange({
                description:
                  e.target.value === "Add description..." ? "" : e.target.value,
              });
            }}
            disabled={isDefaultFunction(state.id)}
            minRows={1}
            maxRows={10}
          />
          <div className="flex flex-col gap-4">
            <div className="flex justify-between w-full gap-4">
              <div className="flex flex-col gap-4 w-full">
                <Label>Resource</Label>
                <Select
                  value={state.resourceId}
                  onValueChange={(value) => handleChange({ resourceId: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a resource" />
                  </SelectTrigger>
                  <SelectContent>
                    {DEFAULT_RESOURCES.map((resource) => (
                      <SelectItem key={resource.id} value={resource.id}>
                        <div className="flex items-center gap-2">
                          <img
                            src={resource.logoUrl}
                            alt={resource.name}
                            className="w-4 h-4 object-contain"
                          />
                          {resource.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <Label>Model</Label>
                <Input
                  className="w-full"
                  type="text"
                  value={state.model}
                  onChange={(e) => handleChange({ model: e.target.value })}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Label>Prompt</Label>
              <div className="flex flex-wrap gap-2 items-center">
                <p className="text-xs">Variables:</p>
                {uniqueVariables.length === 0 ? (
                  <p className="text-xs text-stone-500">None</p>
                ) : (
                  uniqueVariables.map((variable) => (
                    <Badge
                      variant={"secondary"}
                      key={variable}
                      className="text-orange-500"
                    >
                      {variable}
                    </Badge>
                  ))
                )}
              </div>
              <PromptInput
                chatPromptProps={{
                  value: state.messages,
                  onChange: (value) => handleChange({ messages: value }),
                }}
              />
            </div>
            <div className="flex flex-col gap-4">
              <Label>Args</Label>
              <CodeMirror
                className={cn("w-full text-xs rounded-lg overflow-hidden")}
                theme={resolvedTheme === "dark" ? vscodeDark : vscodeLight}
                extensions={[json(), EditorView.lineWrapping]}
                value={state.args}
                onChange={handleJsonChange}
              />
              {state.args !== "" && jsonError && (
                <p className="text-red-500 text-xs">{jsonError}</p>
              )}
            </div>
            <div className="flex flex-col gap-4">
              <Label>Output Path</Label>
              <ArrayInput
                readOnly={false}
                value={outputPathStr ?? ""}
                onChange={(value) => setOutputPathStr(value)}
                onArrayChange={(value) => handleChange({ outputPath: value })}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
