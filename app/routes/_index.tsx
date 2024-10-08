import { SpreadsheetPage } from "@/components/SpreadsheetPage";
import { type MetaFunction } from "@remix-run/node";
import { ClientOnly } from "remix-utils/client-only";

export const meta: MetaFunction = () => {
  return [
    { title: "neosheets" },
    { name: "description", content: "A new way to create spreadsheets" },
  ];
};

export default function Index() {
  return (
    <ClientOnly fallback={null}>
      {() => <SpreadsheetPage id={"1"} />}
    </ClientOnly>
  );
}
