import { cn } from "@/lib/utils";
import { Link } from "@remix-run/react";
import { IoLogoGithub } from "react-icons/io";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";

export const TopNavigation = () => {
  return (
    <header className={cn("w-full", "sticky", "top-0", "z-10")}>
      <div
        className={cn(
          "flex",
          "w-full",
          "justify-between",
          "space-x-2",
          "py-2",
          "px-4",
          "items-center"
        )}
      >
        {/** Left */}
        <div className={cn("font-bold", "flex", "space-x-8", "items-center")}>
          <Link className="flex space-x-2 items-center" to="/">
            <p>neosheets</p>
          </Link>
          <div className={cn("flex", "space-x-2")}>
            <Button variant={"ghost"}>
              <Link
                to="/table"
                className={cn(
                  "flex space-x-2 items-center text-sm",
                  "font-medium"
                )}
              >
                <p>Table</p>
              </Link>
            </Button>
            <Button variant={"ghost"}>
              <Link
                to="/function"
                className={cn(
                  "flex space-x-2 items-center text-sm",
                  "font-medium"
                )}
              >
                <p>Function</p>
              </Link>
            </Button>
          </div>
        </div>
        {/** Right */}
        <div className="flex gap-2 items-center">
          <Button variant={"ghost"} className="p-0 px-1.5 py-1.5 h-8" asChild>
            <a
              href={"https://github.com/suhjohn/prompt-playground"}
              target="_blank"
              rel="noreferrer"
              className={"flex items-center"}
            >
              <IoLogoGithub size={20} />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
