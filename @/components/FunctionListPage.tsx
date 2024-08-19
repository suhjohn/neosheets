"use client";
import { cn, formatAppleDate } from "@/lib/utils";
import { MoreVerticalIcon, Plus, SidebarIcon } from "lucide-react";
import { useState } from "react";
import { useDeleteFunction, useFunctions } from "../hooks/useFunction";
import { DrawerSideNavigation } from "./SideNavigation";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Link } from "@remix-run/react";

export function FunctionListPage() {
  const { data, refetch } = useFunctions();
  const { mutateAsync } = useDeleteFunction();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDelete = async (id: string) => {
    await mutateAsync(id);
    await refetch();
  };

  console.log(data);
  return (
    <div className="flex h-[100dvh] w-full">
      <DrawerSideNavigation
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
      <div className="flex justify-center md:p-2 h-full w-full">
        <div className="flex flex-col w-full border border-zinc-200 dark:border-zinc-800 rounded-md">
          {/** Header */}
          <div className="flex w-full px-2 md:px-4 border-b border-zinc-200 dark:border-zinc-800 h-12 items-center">
            <div className="flex gap-1 items-center">
              <Button
                onClick={() => setIsDrawerOpen(true)}
                variant={"ghost"}
                className="p-1 h-auto w-auto md:hidden"
              >
                <SidebarIcon size={16} className="text-zinc-500" />
              </Button>
              <Link to="/function" className="">
                <p className="text-sm">Functions</p>
              </Link>
            </div>
            <Button variant="secondary" className="ml-auto">
              <Link to="/function/new">
                <div className="flex items-center gap-1">
                  <Plus size={12} />
                  <p>Add function</p>
                </div>
              </Link>
            </Button>
          </div>
          {/** Body */}
          <Table className="border-none">
            <TableHeader className="border-b border-zinc-200 dark:border-zinc-800">
              <TableRow className="h-10 border-none">
                <TableHead className="border-none px-4">Name</TableHead>
                <TableHead className="w-60 border-none px-4">
                  Created At
                </TableHead>
                <TableHead className="w-10 border-none px-4" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.map((func) => (
                <Link key={func.id} to={`/function/${func.id}`}>
                  <TableRow
                    className={cn(
                      "h-10",
                      "max-h-10",
                      "border-b",
                      "border-zinc-100",
                      "dark:border-zinc-900",
                      "rounded-3xl",
                      "hover:bg-zinc-100",
                      "dark:hover:bg-zinc-900",
                      "hover:cursor-pointer"
                    )}
                  >
                    <TableCell className="px-4 border-none">
                      {func.functionName}
                    </TableCell>
                    <TableCell className="border-none px-4">
                      {formatAppleDate(func.createdAt)}
                    </TableCell>
                    <TableCell className="border-none">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="w-auto h-auto p-2">
                            <MoreVerticalIcon
                              className="cursor-pointer"
                              size={16}
                            />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>Rename</DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDelete(func.id)}
                          >
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                </Link>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
