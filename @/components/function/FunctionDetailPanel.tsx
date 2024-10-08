"use client";
import { useFunction } from "../../hooks/useFunction";
import { DefaultFunctionDetailPanel } from "./DefaultFunctionDetailPanel";
import { LLMFunctionDetailPanel } from "./LlmFunctionDetailPanel";

type FunctionDetailPanelProps = {
  id: string;
  showMenuButton?: boolean;
};

export function FunctionDetailPanel({
  id,
  showMenuButton,
}: FunctionDetailPanelProps) {
  const { data: functionData } = useFunction(id);
  return (
    <>
      {functionData?.type === "function" && (
        <DefaultFunctionDetailPanel
          key={id}
          id={id}
          showMenuButton={showMenuButton}
        />
      )}
      {functionData?.type === "llm" && (
        <LLMFunctionDetailPanel
          key={id}
          id={id}
          showMenuButton={showMenuButton}
        />
      )}
    </>
  );
}
