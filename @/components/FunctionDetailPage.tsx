"use client";
import { analyzeFunctions } from "@/lib/reflectFunction";
import { cn } from "@/lib/utils";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { xcodeLight } from "@uiw/codemirror-theme-xcode";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { ChevronRight, SidebarIcon } from "lucide-react";

import { useCallback, useEffect, useState } from "react";
import { AutoResizeTextarea } from "./AutoResizeTextarea";
import { ClickableInput } from "./ClickableInput";
import {
  UpdateFunctionArgsType,
  useFunction,
  useUpdateFunction,
} from ".//hooks/useFunction";
import { DrawerSideNavigation } from "./SideNavigation";
import { Button } from "./ui/button";
import { useTheme } from "remix-themes";
import { Link } from "@remix-run/react";

type FunctionDetailPageProps = {
  id: string;
};

export function FunctionDetailPage({ id }: FunctionDetailPageProps) {
  const { data } = useFunction(id);
  const { mutateAsync: callUpdate } = useUpdateFunction();
  const [functionState, setFunctionState] = useState<UpdateFunctionArgsType>({
    id,
    functionName: "",
    functionBody: "",
    description: "",
  });
  const [showSaved, setShowSaved] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [resolvedTheme, _] = useTheme();

  useEffect(() => {
    let ignore = false;
    if (data && !ignore) {
      setFunctionState({
        id: data.id,
        functionName: data.functionName,
        functionBody: data.functionBody,
        description: data.description || "",
      });
    }
    return () => {
      ignore = true;
    };
  }, [data]);

  const validateFunction = useCallback(
    (code: string) => {
      const analysis = analyzeFunctions(code);
      // check if object with name === "run" exists
      const runFunction = analysis.find((f) => f.name === "run");
      if (!runFunction) {
        setError(
          "Function must contain a function named 'run'. 'run' should be the entrypoint."
        );
        return false;
      }
      setError(null);
      return true;
    },
    [analyzeFunctions]
  );

  const handleChange = useCallback(
    async (newState: UpdateFunctionArgsType) => {
      validateFunction(newState.functionBody);
      setFunctionState(newState);
      await callUpdate(newState);
      setShowSaved(true);
    },
    [callUpdate]
  );

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
    <div className="flex h-[100dvh] w-full">
      <DrawerSideNavigation
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
      <div className="flex justify-center md:p-2 h-full w-full">
        <div className="flex flex-col items-center w-full border border-zinc-200 dark:border-zinc-800 rounded-md">
          {/** Header */}
          <div className="flex w-full px-2 md:px-4 border-b border-zinc-200 dark:border-zinc-800 h-12">
            <div className="flex gap-1 items-center">
              <Button
                onClick={() => setIsDrawerOpen(true)}
                variant={"ghost"}
                className="p-1 h-auto w-auto md:hidden"
              >
                <SidebarIcon size={16} className="text-zinc-500" />
              </Button>
              <Link to="/function" className="">
                <p className="text-sm">Functions</p>
              </Link>
              <ChevronRight size={16} className="text-zinc-500" />
              <Link to={`/function/${functionState.id}`} className="">
                <p className="text-sm">{functionState.id.slice(0, 6)}</p>
              </Link>
            </div>
          </div>
          <div className="max-w-screen-md flex flex-col flex-shrink-0 w-full p-12 space-y-4">
            <div className="flex flex-col space-y-2">
              {/** Header */}
              <div className="flex w-full items-center space-x-2">
                <ClickableInput
                  rootClassName={cn("w-full")}
                  buttonClassName={cn("text-xl")}
                  inputClassName={cn("text-xl")}
                  value={functionState.functionName}
                  parse={(value) => value}
                  onBlur={(value) =>
                    handleChange({
                      ...functionState,
                      functionName: value,
                    })
                  }
                />
                <div>
                  {showSaved && <p className="text-xs text-zinc-500">Saved</p>}
                </div>
              </div>
              <AutoResizeTextarea
                placeholder="Add description..."
                value={functionState.description}
                onChange={(e) => {
                  handleChange({
                    ...functionState,
                    description: e.target.value,
                  });
                }}
                minRows={1}
                maxRows={10}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <CodeMirror
                className="text-sm rounded-lg overflow-hidden"
                theme={resolvedTheme === "dark" ? vscodeDark : xcodeLight}
                extensions={[javascript(), EditorView.lineWrapping]}
                value={functionState.functionBody}
                onChange={(value) => {
                  handleChange({ ...functionState, functionBody: value });
                }}
              />
              {error && <p className="text-red-400 text-sm">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
