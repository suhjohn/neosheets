import { SpreadsheetPage } from "@/components/SpreadsheetPage";
import { json, LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Params, useParams } from "@remix-run/react";
import { ClientOnly } from "remix-utils/client-only";

export const meta: MetaFunction = () => {
  return [
    { title: "neosheets" },
    { name: "description", content: "A new way to create spreadsheets" },
  ];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  return json({ id });
};

export default function Index() {
  const { id } = useParams<Params<string>>();
  return (
    <ClientOnly fallback={null}>
      {() => (id ? <SpreadsheetPage id={id} /> : <></>)}
    </ClientOnly>
  );
}
