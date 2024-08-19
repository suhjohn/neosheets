"use client";
import Sheet from "./Sheet";
import { TopNavigation } from "./TopNavigation";

export default function IndexPage() {
  return (
    <div className="h-[100dvh] max-h-[100dvh] flex flex-col">
      <TopNavigation />
      <Sheet />
    </div>
  );
}
