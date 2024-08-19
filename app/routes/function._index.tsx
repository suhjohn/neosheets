import { FunctionListPage } from "@/components/FunctionListPage";
import { type LoaderFunction } from "@remix-run/node";
import { ClientOnly } from "remix-utils/client-only";

export const loader: LoaderFunction = async () => {
  // Add any server-side logic here
  return { message: "Hello from /function route" };
};

export default function Function() {
  return <ClientOnly fallback={null}>{() => <FunctionListPage />}</ClientOnly>;
}
