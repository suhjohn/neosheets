import { SecretsPage } from "@/components/SecretsPage";
import { ClientOnly } from "remix-utils/client-only";

export default function Function() {
  return <ClientOnly fallback={null}>{() => <SecretsPage />}</ClientOnly>;
}
