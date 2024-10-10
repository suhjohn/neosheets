import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "@remix-run/react";
import { KeyRound, SidebarIcon, Table2 } from "lucide-react";
import { type FC } from "react";
import { GrDomain } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io";
import { TbLambda } from "react-icons/tb";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";

type DrawerSideNavigationProps = {
  open: boolean;
  onClose: () => void;
};

const NavigationContent = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <div className="flex flex-col h-full gap-4 px-2">
      <div className="flex items-center justify-between px-2">
        <Link
          to="/spreadsheet"
          className="font-bold flex space-x-2 items-center"
        >
          <p className={cn("text-black dark:text-white rounded-md font-mono")}>
            neosheets
          </p>
        </Link>
      </div>
      <nav className="flex-1">
        <Button
          variant={isActive("/spreadsheet") ? "selected" : "ghost"}
          className="w-full justify-start px-2 py-2 h-8"
          asChild
        >
          <Link
            to="/spreadsheet"
            className={cn(
              "w-full flex space-x-2 items-center",
              "text-left",
              isActive("/spreadsheet")
                ? "font-semibold"
                : "text-stone-800 dark:text-stone-200"
            )}
          >
            <Table2
              size={16}
              className={
                isActive("/spreadsheet")
                  ? "text-primary"
                  : "text-stone-600 dark:text-stone-400"
              }
            />
            <p>Spreadsheets</p>
          </Link>
        </Button>
        <Button
          variant={isActive("/function") ? "selected" : "ghost"}
          className="w-full justify-start px-2 py-2 h-8"
          asChild
        >
          <Link
            to="/function"
            className={cn(
              "w-full flex space-x-2 items-center",
              "text-left",
              isActive("/function")
                ? "font-semibold"
                : "text-stone-800 dark:text-stone-200"
            )}
          >
            <TbLambda
              size={16}
              className={
                isActive("/function")
                  ? "text-primary"
                  : "text-stone-600 dark:text-stone-400"
              }
            />
            <p>Formula</p>
          </Link>
        </Button>
        <Button
          variant={isActive("/secrets") ? "selected" : "ghost"}
          className="w-full justify-start px-2 py-2 h-8"
          asChild
        >
          <Link
            to="/secrets"
            className={cn(
              "w-full flex space-x-2 items-center",
              "text-left",
              isActive("/secrets")
                ? "font-semibold"
                : "text-stone-800 dark:text-stone-200"
            )}
          >
            <KeyRound
              size={16}
              className={
                isActive("/secrets")
                  ? "text-primary"
                  : "text-stone-600 dark:text-stone-400"
              }
            />
            <p>Secrets</p>
          </Link>
        </Button>
        <Button
          variant={isActive("/domain") ? "selected" : "ghost"}
          className="w-full justify-start px-2 py-2 h-8"
          asChild
        >
          <Link
            to="/domain"
            className={cn(
              "w-full flex space-x-2 items-center",
              "text-left",
              isActive("/domain")
                ? "font-semibold"
                : "text-stone-800 dark:text-stone-200"
            )}
          >
            <GrDomain
              size={16}
              className={
                isActive("/domain")
                  ? "text-primary"
                  : "text-stone-600 dark:text-stone-400"
              }
            />
            <p>Domain settings</p>
          </Link>
        </Button>
      </nav>
      <div className="flex gap-2 items-center justify-between px-2 pb-4">
        <Button variant="icon" className="p-0 px-1.5 py-1.5 h-8" asChild>
          <Link
            to="https://github.com/suhjohn/neosheets"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoGithub size={20} />
          </Link>
        </Button>
        <ThemeToggle />
      </div>
    </div>
  );
};

export const DrawerNavigation: FC<DrawerSideNavigationProps> = ({
  open,
  onClose,
}) => (
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
    <DrawerContent className="h-[100dvh] w-60 z-[1000]">
      <DrawerTitle />
      <DrawerDescription />
      <div className="w-full flex items-center p-2">
        <Button
          onClick={() => onClose()}
          variant={"icon"}
          className="p-0 w-auto"
        >
          <SidebarIcon size={16} />
        </Button>
      </div>
      <NavigationContent />
    </DrawerContent>
  </Drawer>
);

export const OpenNavigation: FC = () => (
  <div className="hidden lg:block h-screen text-stone-200 flex-shrink-0 pt-4 w-60 dark:bg-black">
    <NavigationContent />
  </div>
);

export const ClosedNavigation: FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname.startsWith(path);
  return (
    <div
      className={cn(
        "h-screen",
        "text-stone-200",
        "flex-shrink-0",
        "w-auto",
        "p-2",
        "flex",
        "flex-col",
        "justify-between",
        "border-r",
        "border-r-stone-200",
        "dark:border-r-stone-800",
        "dark:bg-black",
        "bg-white"
      )}
    >
      <nav className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-between px-2">
          <Link
            to="/spreadsheet"
            className="font-bold flex space-x-2 items-center"
          >
            <p
              className={cn("text-black dark:text-white rounded-md font-mono")}
            >
              ns
            </p>
          </Link>
        </div>
        <div className="flex flex-col">
          <Button
            variant={isActive("/table") ? "selected" : "ghost"}
            className="w-full h-8"
            asChild
          >
            <Link
              to="/spreadsheet"
              className={cn(
                "w-auto flex space-x-2 items-center",
                "text-left",
                isActive("/spreadsheet")
                  ? "font-semibold"
                  : "text-stone-800 dark:text-stone-200"
              )}
            >
              <Table2
                size={16}
                className={
                  isActive("/spreadsheet")
                    ? "text-primary"
                    : "text-stone-600 dark:text-stone-400"
                }
              />
            </Link>
          </Button>
          <Button
            variant={isActive("/function") ? "selected" : "ghost"}
            className="w-full h-8"
            asChild
          >
            <Link
              to="/function"
              className={cn(
                "w-auto flex space-x-2 items-center",
                "text-left",
                isActive("/function")
                  ? "font-semibold"
                  : "text-stone-800 dark:text-stone-200"
              )}
            >
              <TbLambda
                size={16}
                className={
                  isActive("/function")
                    ? "text-primary"
                    : "text-stone-600 dark:text-stone-400"
                }
              />
            </Link>
          </Button>
          <Button
            variant={isActive("/secrets") ? "selected" : "ghost"}
            className="w-full h-8"
            asChild
          >
            <Link
              to="/secrets"
              className={cn(
                "w-full flex space-x-2 items-center",
                "text-left",
                isActive("/secrets")
                  ? "font-semibold"
                  : "text-stone-800 dark:text-stone-200"
              )}
            >
              <KeyRound
                size={16}
                className={
                  isActive("/secrets")
                    ? "text-primary"
                    : "text-stone-600 dark:text-stone-400"
                }
              />
            </Link>
          </Button>
          <Button
            variant={isActive("/domain") ? "selected" : "ghost"}
            className="w-full h-8"
            asChild
          >
            <Link
              to="/domain"
              className={cn(
                "w-full flex space-x-2 items-center",
                "text-left",
                isActive("/domain")
                  ? "font-semibold"
                  : "text-stone-800 dark:text-stone-200"
              )}
            >
              <GrDomain
                size={16}
                className={
                  isActive("/domain")
                    ? "text-primary"
                    : "text-stone-600 dark:text-stone-400"
                }
              />
            </Link>
          </Button>
        </div>
      </nav>
      <div className="flex flex-col gap-2 items-center justify-between pb-4">
        <Button variant="icon" className="p-0 px-1.5 py-1.5 h-8" asChild>
          <Link
            to="https://github.com/suhjohn/neosheets"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoGithub size={20} />
          </Link>
        </Button>
        <ThemeToggle />
      </div>
    </div>
  );
};
