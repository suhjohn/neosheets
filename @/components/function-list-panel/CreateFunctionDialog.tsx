import { DEFAULT_RESOURCES } from "@/fixtures";
import { validateFunction } from "@/lib/function";
import { cn, extractMustacheVariables, validateJSON } from "@/lib/utils";
import { javascript } from "@codemirror/lang-javascript";
import { json } from "@codemirror/lang-json";
import { useNavigate } from "@remix-run/react";
import { vscodeDark, vscodeLight } from "@uiw/codemirror-theme-vscode";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { ExpandIcon, Plus, XIcon } from "lucide-react";
import { FC, useCallback, useState } from "react";
import { useTheme } from "remix-themes";
import {
  CreateBaseFunctionArgsType,
  CreateLLMFunctionArgsInputType,
  useCreateFunction,
  useCreateLlmFunction,
} from "../../hooks/useFunction";
import { ArrayInput } from "../ArrayInput";
import { AutoResizeTextarea } from "../AutoResizeTextarea";
import { PromptInput } from "../PromptInput";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CloseAlertDialog from "./CloseAlertDialog";

export const CreateFunctionDialog: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [newFunction, setNewFunction] = useState<CreateBaseFunctionArgsType>({
    functionName: "",
    description: "",
    functionBody: "function run() {\n\n}",
  });
  const [newPromptFunction, setNewPromptFunction] =
    useState<CreateLLMFunctionArgsInputType>({
      resourceId: DEFAULT_RESOURCES[0].id,
      messages: [
        {
          role: "system",
          content: "",
        },
      ],
      model: "",
      prompt: null,
      args: `{"max_tokens": 512, "temperature": 1}`,
      outputPath: [],
    });
  const [error, setError] = useState<string | null>(null);
  const [showCloseAlert, setShowCloseAlert] = useState(false);
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"function" | "llm">("function");
  const [functionNameError, setFunctionNameError] = useState<string | null>(
    null
  );
  const [outputPathStr, setOutputPathStr] = useState<string>(
    ""
  );
  // Hooks
  const [resolvedTheme] = useTheme();
  const navigate = useNavigate();
  const createFunction = useCreateFunction();
  const createLlmFunction = useCreateLlmFunction();

  // Validation and handlers
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

  const handleCloseDialog = () => {
    if (
      newFunction.functionName ||
      newFunction.description ||
      newFunction.functionBody !== "function run() {\n\n}"
    ) {
      setShowCloseAlert(true);
    } else {
      setIsOpen(false);
    }
  };

  const handleDiscardChanges = () => {
    setIsOpen(false);
    setShowCloseAlert(false);
    setNewFunction({
      functionName: "",
      description: "",
      functionBody: "function run() {\n\n}",
    });
    setNewPromptFunction({
      resourceId: DEFAULT_RESOURCES[0].id,
      messages: [
        {
          role: "system",
          content: "",
        },
      ],
      model: "",
      prompt: null,
      args: "",
      outputPath: [],
    });
  };

  const handleCreate = async () => {
    if (activeTab === "function") {
      const createdFunction = await createFunction.mutateAsync(newFunction);
      setIsOpen(false);
      setNewFunction({
        functionName: "",
        description: "",
        functionBody: "function run() {\n\n}",
      });
      navigate(`/function/${createdFunction.id}`);
    } else if (activeTab === "llm") {
      const createdFunction = await createLlmFunction.mutateAsync({
        ...newFunction,
        ...newPromptFunction,
        args: newPromptFunction.args,
        prompt: null,
      });
      setIsOpen(false);
      setNewFunction({
        functionName: "",
        description: "",
        functionBody: "function run() {\n\n}",
      });
      setNewPromptFunction({
        resourceId: DEFAULT_RESOURCES[0].id,
        messages: [
          {
            role: "system",
            content: "",
          },
        ],
        model: "",
        prompt: null,
        args: "",
        outputPath: [],
      });
      navigate(`/function/${createdFunction.id}`);
    }
  };

  const handleChange = (value: string) => {
    validateFunctionCb(value);
    setNewFunction({ ...newFunction, functionBody: value });
  };

  const handleJsonChange = (value: string) => {
    setNewPromptFunction({
      ...newPromptFunction,
      args: value,
    });
    const { error } = validateJSON(value);
    setJsonError(error);
  };

  // Extract variables from prompt messages
  const allVariables = newPromptFunction.messages.flatMap((message) =>
    extractMustacheVariables(message.content)
  );
  const uniqueVariables = Array.from(new Set(allVariables));

  const isFormValid =
    !functionNameError &&
    newFunction.functionName.trim() !== "" &&
    newFunction.functionBody.trim() !== "" &&
    !error;

  return (
    <>
      <Dialog
        open={isOpen}
        onOpenChange={!isOpen ? () => setIsOpen(true) : handleCloseDialog}
      >
        <DialogTrigger asChild>
          <Button variant="secondary" className="ml-auto">
            <div className="flex items-center gap-1">
              <Plus size={12} />
              <p>Create</p>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent
          className={cn(
            "h-auto max-w-screen-md w-full p-0 gap-0 overflow-y-auto",
            isExpanded ? "max-h-[95dvh]" : ""
          )}
        >
          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as "function" | "llm")}
          >
            <div
              className={cn(
                "sticky top-0 flex flex-row justify-between items-center w-full p-4",
                "bg-white dark:bg-stone-950 z-10"
              )}
            >
              <p className="text-xsm">New Function</p>
              <TabsList>
                <TabsTrigger value="function">Function</TabsTrigger>
                <TabsTrigger value="llm">Prompt</TabsTrigger>
              </TabsList>
              <div className="flex">
                <Button
                  variant="ghost"
                  className="p-0"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  <ExpandIcon size={16} />
                </Button>
                <Button
                  variant="ghost"
                  className="p-0"
                  onClick={handleCloseDialog}
                >
                  <XIcon size={20} />
                </Button>
              </div>
            </div>
            <div
              className={cn(
                "flex flex-col px-4 gap-4 pb-4",
                isExpanded ? "h-[calc(95vh-180px)]" : ""
              )}
            >
              <Input
                id="name"
                placeholder="Function Name"
                type="text"
                value={newFunction.functionName}
                onChange={(e) => {
                  const value = e.target.value;
                  setNewFunction({
                    ...newFunction,
                    functionName: value,
                  });
                  // Validation
                  const valid = /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(value);
                  if (value.trim() === "") {
                    setFunctionNameError("Function name is required.");
                  } else if (!valid) {
                    setFunctionNameError(
                      "Only alphanumeric and underscores. Cannot start with a number."
                    );
                  } else {
                    setFunctionNameError(null);
                  }
                }}
                className="px-0 py-0 border-none text-xl font-[500] focus-visible:ring-0 h-auto"
              />
              {functionNameError && (
                <p className="text-red-500 text-xs">{functionNameError}</p>
              )}
              <AutoResizeTextarea
                id="description"
                placeholder="Add description..."
                value={newFunction.description}
                minRows={2}
                maxRows={10}
                onChange={(e) =>
                  setNewFunction({
                    ...newFunction,
                    description: e.target.value,
                  })
                }
                className={cn(
                  "px-0 py-0 border-none font-[300] focus-visible:ring-0",
                  isExpanded ? "h-[20%]" : ""
                )}
              />
              <div className="flex flex-1 h-full flex-col overflow-y-auto">
                <div className="pt-4">
                  <TabsContent value="function">
                    <CodeMirror
                      className={cn(
                        "w-full text-xs rounded-lg overflow-hidden",
                        isExpanded ? "h-full" : ""
                      )}
                      minHeight={isExpanded ? "100%" : "120px"}
                      theme={
                        resolvedTheme === "dark" ? vscodeDark : vscodeLight
                      }
                      extensions={[
                        javascript({ typescript: true }),
                        EditorView.lineWrapping,
                      ]}
                      value={newFunction.functionBody}
                      onChange={handleChange}
                    />
                    {error && <p className="text-red-400 text-xsm">{error}</p>}
                  </TabsContent>
                  <TabsContent value="llm" className="flex flex-col gap-4">
                    <div className="flex justify-between w-full gap-4">
                      <div className="flex flex-col gap-4 w-full">
                        <Label>Resource</Label>
                        <Select
                          value={newPromptFunction.resourceId}
                          onValueChange={(value) =>
                            setNewPromptFunction({
                              ...newPromptFunction,
                              resourceId: value,
                            })
                          }
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
                          value={newPromptFunction.model}
                          onChange={(e) =>
                            setNewPromptFunction({
                              ...newPromptFunction,
                              model: e.target.value.trim(),
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div>
                        <Label>Prompt</Label>
                        <p className="text-xs text-stone-500">
                          The prompt used for the LLM. You can use variables like {`{{variable}}`} to insert variables.
                          In the cell, you can use {`=NAME({ variable: "value" or A1 })`} to call the function with
                          a value or reference to a cell.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 items-center">
                        <p className="text-xs">Variables:</p>
                        {uniqueVariables.length === 0 && (
                          <p className="text-xs text-stone-500">None</p>
                        )}
                        {uniqueVariables.map((variable) => (
                          <Badge
                            variant={"secondary"}
                            key={variable}
                            className="text-blue-500"
                          >
                            {variable}
                          </Badge>
                        ))}
                      </div>
                      <PromptInput
                        chatPromptProps={{
                          value: newPromptFunction.messages,
                          onChange: (value) =>
                            setNewPromptFunction({
                              ...newPromptFunction,
                              messages: value,
                            }),
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <Label>Args</Label>
                      <CodeMirror
                        className={cn(
                          "w-full text-xs rounded-lg overflow-hidden",
                          isExpanded ? "h-full" : ""
                        )}
                        theme={
                          resolvedTheme === "dark" ? vscodeDark : vscodeLight
                        }
                        extensions={[json(), EditorView.lineWrapping]}
                        value={newPromptFunction.args}
                        onChange={handleJsonChange}
                      />
                      {newPromptFunction.args !== "" && jsonError && (
                        <p className="text-red-500 text-xs">{jsonError}</p>
                      )}
                    </div>
                    <div className="flex flex-col gap-4">
                      <div>
                        <Label>Output Path</Label>
                        <p className="text-xs text-stone-500">
                          After getting the API response, the path to the output. For OpenAI would be choices,0,message,content.
                        </p>
                      </div>
                      <ArrayInput
                        readOnly={false}
                        value={outputPathStr ?? ""}
                        onChange={(value) => setOutputPathStr(value)}
                        onArrayChange={(value) =>
                          setNewPromptFunction({
                            ...newPromptFunction,
                            outputPath: value,
                          })
                        }
                      />
                    </div>
                  </TabsContent>
                </div>
              </div>
            </div>
            <DialogFooter className="border-t border-stone-200 dark:border-stone-800 p-4">
              <div className="flex justify-end">
                <Button onClick={handleCreate} disabled={!isFormValid}>
                  Create Function
                </Button>
              </div>
            </DialogFooter>
          </Tabs>
        </DialogContent>
      </Dialog>
      <CloseAlertDialog
        showCloseAlert={showCloseAlert}
        setShowCloseAlert={setShowCloseAlert}
        handleDiscardChanges={handleDiscardChanges}
      />
    </>
  );
};
