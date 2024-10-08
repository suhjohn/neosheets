"use client";
import { FunctionListPanel } from "./function-list-panel/FunctionListPanel";
import { ClosedNavigation } from "./SideNavigation";

export function FunctionListPage() {
  return (
    <div className="flex h-[100dvh] w-full">
      <ClosedNavigation />
      <FunctionListPanel />
    </div>
  );
}
