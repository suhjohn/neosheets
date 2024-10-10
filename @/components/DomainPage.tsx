import {
  useDeleteDomainSetting,
  useDomainSettings,
  useUpsertDomainSetting,
} from "@/hooks/useDomain";
import { cn } from "@/lib/utils";
import { type FC, useState } from "react";
import { ClosedNavigation } from "./SideNavigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const DomainPage: FC = () => {
  const { data } = useDomainSettings();

  const upsertDomainSetting = useUpsertDomainSetting();
  const deleteDomainSetting = useDeleteDomainSetting();
  const [newDomainPath, setNewDomainPath] = useState<string>("");
  const [newParallelism, setNewParallelism] = useState<number>(3);

  const handleDelete = async (path: string) => {
    await deleteDomainSetting.mutateAsync(path);
  };
  const handleAdd = async () => {
    await upsertDomainSetting.mutateAsync({
      path: newDomainPath,
      parallelism: newParallelism,
    });
    setNewDomainPath("");
    setNewParallelism(3);
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
            <h1 className="text-2xl">Domain settings</h1>
            <p className="text-sm text-gray-500">
              Manage a whitelist of domains and paths that can be called from
              the formulas. This is useful for preventing malicious formulas
              calling external APIs that can leak sensitive data. You can also
              set maximum parallelism for each domain or path based on your API
              rate limits.
            </p>
            {data?.map((setting) => (
              <div key={setting.path} className="grid grid-cols-7 gap-2">
                <Input
                  className="col-span-5"
                  value={setting.path}
                  type="url"
                  onChange={(e) =>
                    upsertDomainSetting.mutate({
                      ...setting,
                      path: e.target.value,
                    })
                  }
                />
                <Input
                  className="col-span-1"
                  value={setting.parallelism}
                  type="number"
                  onChange={(e) =>
                    upsertDomainSetting.mutate({
                      ...setting,
                      parallelism: parseInt(e.target.value, 10),
                    })
                  }
                />
                <Button
                  className="col-span-1 h-full"
                  variant="destructive"
                  onClick={() => {
                    handleDelete(setting.path);
                  }}
                >
                  Delete
                </Button>
              </div>
            ))}
            <div className="grid grid-cols-7 gap-2">
              <Input
                className="col-span-5"
                placeholder="Path name"
                type="url"
                value={newDomainPath}
                onChange={(e) => setNewDomainPath(e.target.value)}
              />
              <Input
                className="col-span-1"
                placeholder="how many parallel formulas can be called at once?"
                type="number"
                value={newParallelism}
                onChange={(e) =>
                  setNewParallelism(parseInt(e.target.value, 10))
                }
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
