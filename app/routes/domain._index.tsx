import { DomainPage } from "@/components/DomainPage";
import { ClientOnly } from "remix-utils/client-only";

export default function Function() {
  return <ClientOnly fallback={null}>{() => <DomainPage />}</ClientOnly>;
}
