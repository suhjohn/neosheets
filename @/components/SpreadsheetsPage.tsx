import {
  useCreateSpreadsheet,
  useDeleteSpreadsheet,
  useSpreadsheets,
  useUpdateSpreadsheet,
} from "@/hooks/useSpreadsheetes";
import { cn, formatAppleDate } from "@/lib/utils";
import { Link, useNavigate } from "@remix-run/react";
import { Loader, PlusIcon, SidebarIcon } from "lucide-react";
import { FC, useState } from "react";
import { DrawerNavigation, OpenNavigation } from "./SideNavigation";
import { Button } from "./ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";

export const SpreadsheetsPage: FC = () => {
  const { data: spreadsheets, isLoading } = useSpreadsheets();
  const updateSpreadsheet = useUpdateSpreadsheet();
  const createSpreadsheet = useCreateSpreadsheet();
  const deleteSpreadsheet = useDeleteSpreadsheet();
  const [open, setOpen] = useState(false);
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [newName, setNewName] = useState<string>("");
  const [isRenameDialogOpen, setIsRenameDialogOpen] = useState(false);
  const navigate = useNavigate(); // Initialized navigate

  const handleAdd = async () => {
    const newSpreadsheet = await createSpreadsheet.mutateAsync({
      name: `Untitled Spreadsheet - ${new Date().toISOString()}`,
    });
    navigate(`/spreadsheet/${newSpreadsheet.id}`);
  };

  const handleDelete = (id: string) => {
    deleteSpreadsheet.mutate(id);
  };

  const handleRename = (id: string, currentName: string) => {
    setRenamingId(id);
    setNewName(currentName);
    setIsRenameDialogOpen(true);
  };

  const handleRenameSubmit = (id: string) => {
    if (newName.trim() === "") {
      // Optionally, you can show an error message here
      return;
    }
    updateSpreadsheet.mutateAsync({
      id,
      name: newName,
      lastOpenedAt: new Date().toISOString(), // Update other required fields if necessary
      sheets: spreadsheets?.find((s) => s.id === id)?.sheets || [],
    });
    setIsRenameDialogOpen(false);
    setRenamingId(null);
    setNewName("");
  };

  const handleRenameCancel = () => {
    setIsRenameDialogOpen(false);
    setRenamingId(null);
    setNewName("");
  };

  return (
    <div className="flex h-[100dvh] w-full">
      <OpenNavigation />
      <div className="lg:p-4 flex w-full h-full bg-white dark:bg-black">
        <div className="dark:bg-stone-950 bg-stone-25 lg:border w-full flex justify-center border-stone-200 dark:border-stone-800 rounded-md">
          <div
            className={cn(
              "w-full",
              "flex-1",
              "gap-4",
              "flex",
              "flex-col",
              "overflow-y-auto"
            )}
          >
            <div className="flex flex-col h-full divide-y divide-stone-200 dark:divide-stone-800">
              <div className="flex items-center justify-between px-4 h-10">
                <div className="flex items-center h-full">
                  <div className="lg:hidden">
                    <Button
                      onClick={() => setOpen(true)}
                      variant="icon"
                      className="p-0 mr-2 w-auto"
                    >
                      <SidebarIcon size={16} />
                    </Button>
                    <DrawerNavigation
                      open={open}
                      onClose={() => setOpen(false)}
                    />
                  </div>
                  <p className={cn("text-sm")}>
                    <span>{`Spreadsheets `}</span>
                    <span className="text-stone-400">
                      {`${spreadsheets?.length}`}
                    </span>
                  </p>
                </div>
                <Button onClick={handleAdd} variant={"secondary"}>
                  <PlusIcon className="w-4 h-4 mr-2" />
                  <p>Create spreadsheet</p>
                </Button>
              </div>
              {isLoading && (
                <div className="px-4 h-full flex flex-col text-left items-center justify-center">
                  <Loader className="w-8 h-8 text-stone-500 dark:text-stone-400 animate-spin" />
                </div>
              )}
              {spreadsheets?.length === 0 && (
                <div className="px-4 h-full flex flex-col text-left items-center justify-center">
                  <div className="flex flex-col gap-6 items-start">
                    <div className="gap-2 flex flex-col max-w-96">
                      <p>Spreadsheets</p>
                      <p className="text-xsm text-stone-600 dark:text-stone-400">
                        Spreadsheets are what you are familiar with from Excel
                        or Google Sheets. Once you create a spreadsheet, they
                        will show up here.
                      </p>
                    </div>
                    <Button onClick={handleAdd}>Create new spreadsheet</Button>
                  </div>
                </div>
              )}
              {spreadsheets?.length !== undefined &&
                spreadsheets.length > 0 && (
                  <div className="w-full grid grid-cols-6 px-4 h-10 items-center">
                    <p className="text-xsm text-stone-500 col-span-5">Name</p>
                    <p className="text-xsm text-stone-500 col-span-1 text-right">
                      Last opened
                    </p>
                  </div>
                )}
              {spreadsheets?.map((spreadsheet) => (
                <ContextMenu key={spreadsheet.id}>
                  <ContextMenuTrigger>
                    <div
                      className={cn(
                        "h-10 px-4 flex items-center justify-between gap-2 hover:bg-stone-100 dark:hover:bg-stone-900"
                      )}
                    >
                      <div className="w-full flex items-center">
                        <Link
                          to={`/spreadsheet/${spreadsheet.id}`}
                          className="grid grid-cols-6 w-full items-center"
                        >
                          <p className="w-full text-sm col-span-5">
                            {spreadsheet.name}
                          </p>
                          <p className="text-xs text-stone-500 col-span-1 text-right">
                            {formatAppleDate(spreadsheet.lastOpenedAt)}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem
                      onClick={() =>
                        handleRename(spreadsheet.id, spreadsheet.name)
                      }
                    >
                      Rename
                    </ContextMenuItem>
                    <ContextMenuItem
                      className="text-red-600"
                      onClick={() => handleDelete(spreadsheet.id)}
                    >
                      Delete
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              ))}
              <div className="grid grid-cols-6 gap-2"></div>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={isRenameDialogOpen} onOpenChange={setIsRenameDialogOpen}>
        <DialogContent className="h-auto w-96">
          <DialogHeader>
            <DialogTitle>Rename Spreadsheet</DialogTitle>
          </DialogHeader>
          <Input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter new name"
          />
          <DialogFooter>
            <Button variant="outline" onClick={handleRenameCancel}>
              Cancel
            </Button>
            <Button onClick={() => handleRenameSubmit(renamingId!)}>
              Rename
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
