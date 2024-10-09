import { type MetaFunction } from "@remix-run/node";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "@remix-run/react";
import { IoLogoGithub } from "react-icons/io";

export const meta: MetaFunction = () => {
  return [
    { title: "neosheets" },
    { name: "description", content: "A new way to create spreadsheets" },
  ];
};
export default function LandingPage() {
  return (
    <div className="flex flex-col h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" to="#">
          <p
            className={cn(
              "text-xl ext-black dark:text-white rounded-md font-mono font-bold"
            )}
          >
            neosheets
          </p>
        </Link>
      </header>
      <main className="flex-1 flex">
        <section className="w-full h-full flex items-center justify-center">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="flex flex-col gap-4">
                <h1 className="font-mono font-[100] tracking-tighter text-[48px] md:text-[64px] lg:text-[80px]">
                  AI-Powered Spreadsheets
                </h1>
                <p className="mx-auto max-w-screen-md text-md lg:text-lg font-[400]">
                  Write LLM prompts and Typescript functions and use them as
                  formulas. Call REST APIs without having to write clunky App
                  Scripts.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="h-auto text-sm px-0">
                  <Link
                    to="/spreadsheet"
                    className={cn(
                      "w-full h-full flex space-x-2 items-center px-4 py-3",
                      "text-left"
                    )}
                  >
                    <p>Get started</p>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="justify-center flex flex-col gap-2 sm:flex-row py-4 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <Button variant="icon" className="p-0 px-1.5 py-1.5" asChild>
          <Link
            to="https://github.com/suhjohn/neosheets"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoGithub size={20} />
          </Link>
        </Button>
      </footer>
    </div>
  );
}
