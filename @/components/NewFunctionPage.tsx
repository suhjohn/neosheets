"use client";
import { cn } from "@/lib/utils";
import { javascript } from "@codemirror/lang-javascript";
import { useNavigate } from "@remix-run/react";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { xcodeLight } from "@uiw/codemirror-theme-xcode";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { useState } from "react";
import { useTheme } from "remix-themes";
import { z } from "zod";
import {
  CreateBaseFunctionArgs,
  useCreateFunction,
  useFunctions,
} from "../hooks/useFunction";
import { LabeledInput } from "./LabeledInput";
import { TopNavigation } from "./TopNavigation";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

export default function NewFunctionPage() {
  const { toast } = useToast();

  const [functionState, setFunctionState] = useState({
    functionName: "",
    functionBody: "",
  });
  const { refetch } = useFunctions();
  const { mutateAsync } = useCreateFunction();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [resolvedTheme, _] = useTheme();
  const navigate = useNavigate();

  const handleCreateFunction = async () => {
    try {
      CreateBaseFunctionArgs.parse(functionState);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Error",
          description: JSON.stringify(error.format()),
          variant: "destructive",
        });
      }
      return;
    }
    await mutateAsync({
      functionName: functionState.functionName,
      functionBody: functionState.functionBody,
      description: "",
    });
    await refetch();
    navigate("/function");
  };

  return (
    <div className="flex flex-col">
      <TopNavigation />
      <div className="flex justify-center p-4">
        <div className="flex flex-col max-w-screen-md w-full">
          {/** Header */}
          <div className="w-full flex justify-between">
            <h1 className="text-xl font-medium">Create New Function</h1>
            <Button variant={"default"} onClick={handleCreateFunction}>
              Create
            </Button>
          </div>
          {/** Form */}
          <div className="flex flex-col gap-4 mt-4">
            <LabeledInput
              label="Function Name"
              value={functionState.functionName}
              onChange={(value) =>
                setFunctionState({ ...functionState, functionName: value })
              }
              parse={(value) => value}
            />
            <div className="flex flex-col space-y-2">
              <p className={cn(["text-sm"])}>Body</p>
              <CodeMirror
                theme={resolvedTheme === "dark" ? vscodeDark : xcodeLight}
                extensions={[
                  javascript({ typescript: true }),
                  EditorView.lineWrapping,
                ]}
                value={"function run() {\n  return '';\n}"}
                onChange={(value) => {
                  setFunctionState({ ...functionState, functionBody: value });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
