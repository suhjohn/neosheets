import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { SidebarIcon, Table2 } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { IoLogoGithub } from "react-icons/io";
import { TbLambda } from "react-icons/tb";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";

type DrawerSideNavigationProps = {
  open: boolean;
  onClose: () => void;
};

export const DrawerSideNavigation: FC<DrawerSideNavigationProps> = ({
  open,
  onClose,
}) => {
  const NavigationContent = () => (
    <div className="flex flex-col h-full space-y-4 px-2 md:px-0">
      <div className="flex items-center justify-between p-2">
        <Link href="/" className="font-bold flex space-x-2 items-center">
          <p>LLM Workbench</p>
        </Link>
      </div>
      <nav className="flex-1">
        <Button variant="ghost" className="w-full font-left px-2 py-2 h-8">
          <Link
            href="/table"
            className={cn(
              "w-full flex space-x-2 items-center text-sm",
              "font-normal",
              "text-left",
              "text-zinc-800 dark:text-zinc-200"
            )}
          >
            <Table2 size={16} className="text-zinc-600 dark:text-zinc-400" />
            <p>Table</p>
          </Link>
        </Button>
        <Button variant="ghost" className="w-full font-left px-2 py-2 h-8">
          <Link
            href="/function"
            className={cn(
              "w-full flex space-x-2 items-center text-sm",
              "font-normal",
              "text-left",
              "text-zinc-800 dark:text-zinc-200"
            )}
          >
            <TbLambda size={16} className="text-zinc-600 dark:text-zinc-400" />
            <p>Function</p>
          </Link>
        </Button>
      </nav>
      <div className="flex gap-2 items-center justify-between py-4">
        <Button variant="ghost" className="p-0 px-1.5 py-1.5 h-8" asChild>
          <Link
            href="https://github.com/suhjohn/prompt-playground"
            target="_blank"
          >
            <IoLogoGithub size={20} />
          </Link>
        </Button>
        <ThemeToggle />
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Drawer */}
      <div className="md:hidden">
        <Drawer
          direction="left"
          open={open}
          onClose={onClose}
          onOpenChange={(open) => {
            if (!open) {
              onClose();
            }
          }}
        >
          <DrawerContent className="h-screen max-w-64 md:hidden">
            <div className="w-full h-10 flex items-center px-2">
              <Button
                onClick={() => onClose()}
                variant={"ghost"}
                className="p-1 h-auto w-auto"
              >
                <SidebarIcon size={16} className="text-zinc-500" />
              </Button>
            </div>
            <NavigationContent />
          </DrawerContent>
        </Drawer>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block min-h-screen text-zinc-200 flex-shrink-0 w-52 p-2">
        <NavigationContent />
      </div>
    </>
  );
};
