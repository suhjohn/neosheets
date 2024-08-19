import { FunctionDetailPage } from "@/components/FunctionDetailPage";
import { type LoaderFunctionArgs, json } from "@remix-run/node";
import { useParams, type Params } from "@remix-run/react";
import { ClientOnly } from "remix-utils/client-only";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  return json({ id });
};

export default function Function() {
  const { id } = useParams<Params<string>>();
  return (
    <ClientOnly fallback={null}>
      {() => (id ? <FunctionDetailPage id={id} /> : <></>)}
    </ClientOnly>
  );
}
