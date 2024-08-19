"use client";
import { FunctionDetailPanel } from "./function/FunctionDetailPanel";
import { FunctionListPanel } from "./function-list-panel/FunctionListPanel";
import { ClosedNavigation } from "./SideNavigation";

type FunctionDetailPageProps = {
  id: string;
};

export function FunctionDetailPage({ id }: FunctionDetailPageProps) {
  return (
    <div className="h-[100dvh] flex">
      <ClosedNavigation />
      <FunctionListPanel selectedFunctionId={id} />
      <FunctionDetailPanel id={id} />
    </div>
  );
}
