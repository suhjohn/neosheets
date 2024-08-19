import { SpreadsheetsPage } from "@/components/SpreadsheetsPage";
import { ClientOnly } from "remix-utils/client-only";

export default function Function() {
  return <ClientOnly fallback={null}>{() => <SpreadsheetsPage />}</ClientOnly>;
}
