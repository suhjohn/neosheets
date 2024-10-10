import {
  useDeleteSecretKey,
  useSecretKeys,
  useUpsertSecretKey,
} from "@/hooks/useSecretKeys";
import { cn } from "@/lib/utils";
import { generateFormFields } from "@/lib/zod";
import { KnownSecretKeysSchema } from "@/types/secret";
import { type FC, useState } from "react";
import { PasswordInput } from "./PasswordInput";
import { ClosedNavigation } from "./SideNavigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const SecretsPage: FC = () => {
  const { data } = useSecretKeys();
  const upsertSecretKey = useUpsertSecretKey();
  const deleteSecretKey = useDeleteSecretKey();
  const [newKey, setNewKey] = useState<string>("");
  const [newValue, setNewValue] = useState<string>("");
  const fields = generateFormFields(KnownSecretKeysSchema).sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const customFields = Object.keys(data?.body || {}).filter(
    (key) => !fields.map((field) => field.name).includes(key)
  );
  const handleChange = (
    fieldName: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (data === undefined) return;
    const value = e.target.value;
    upsertSecretKey.mutate({
      id: data.id,
      body: {
        ...data.body,
        [fieldName]: value,
      },
    });
  };
  const handleAdd = async () => {
    if (data === undefined) return;
    await upsertSecretKey.mutateAsync({
      id: data.id,
      body: {
        ...data.body,
        [newKey]: newValue,
      },
    });
    setNewKey("");
    setNewValue("");
  };
  const handleDelete = (field: string) => {
    if (data === undefined) return;
    deleteSecretKey.mutate(field);
  };

  return (
    <div className="flex h-[100dvh] w-full">
      <ClosedNavigation />
      <div className="w-full flex justify-center">
        <div
          className={cn(
            "max-w-screen-lg",
            "flex-1",
            "p-4",
            "pt-16",
            "md:p-16",
            "gap-4",
            "flex",
            "flex-col",
            "overflow-y-auto"
          )}
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl">Secrets</h1>
            <p className="text-sm text-gray-500">
              Secrets are secret values that you want to define outside of your
              formulas to access external services. We define a set of standard
              secrets that are available to all functions. You can also define
              your own secrets.
            </p>
            {fields.map((field) => (
              <div key={field.name} className="grid grid-cols-7 gap-2">
                <Input className="col-span-3" value={field.label} disabled />
                <PasswordInput
                  rootClassName="col-span-3"
                  type={"password"}
                  value={data?.body[field.name]}
                  onChange={(e) => {
                    handleChange(field.name, e);
                  }}
                />
                <Button
                  className="col-span-1 h-full"
                  variant="ghost"
                  disabled={true}
                >
                  Delete
                </Button>
              </div>
            ))}
            {customFields.map((field) => (
              <div key={field} className="grid grid-cols-7 gap-2">
                <Input className="col-span-3" value={field} disabled />
                <PasswordInput
                  rootClassName="col-span-3"
                  type={"password"}
                  value={data?.body[field]}
                  onChange={(e) => {
                    handleChange(field, e);
                  }}
                />
                <Button
                  className="col-span-1 h-full"
                  variant="destructive"
                  onClick={() => {
                    handleDelete(field);
                  }}
                >
                  Delete
                </Button>
              </div>
            ))}
            <div className="grid grid-cols-7 gap-2">
              <Input
                className="col-span-3"
                placeholder="SECRET_NAME"
                value={newKey}
                onChange={(e) => setNewKey(e.target.value)}
              />
              <PasswordInput
                rootClassName="col-span-3"
                type={"password"}
                className="col-span-3"
                placeholder="VALUE"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
              />
              <Button
                className="col-span-1 h-full"
                variant="secondary"
                onClick={handleAdd}
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
