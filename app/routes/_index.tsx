import Sheet from "@/components/Sheet";
import { TopNavigation } from "@/components/TopNavigation";
import { type MetaFunction } from "@remix-run/node";
import { ClientOnly } from "remix-utils/client-only";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  console.log("Index");
  return (
    <div className="h-[100dvh] max-h-[100dvh] max-w-[100vw] flex flex-col">
      <TopNavigation />
      <ClientOnly fallback={null}>{() => <Sheet />}</ClientOnly>
    </div>
  );
}
