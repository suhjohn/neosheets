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
      <header className="flex-shrink-0 px-4 lg:px-6 h-14 flex items-center">
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
                  {`Write LLM prompts with {{ variable }} and arbitrary functions in Typescript as formulas. Use them
                  on a familiar spreadsheet interface.`}
                </p>
              </div>
              <div className="space-x-4 flex">
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
                <Button className="h-auto text-sm px-4" variant="secondary">
                  <Link
                    to="https://github.com/suhjohn/neosheets"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex gap-2">
                      <IoLogoGithub size={20} />
                      <p>Star on GitHub</p>
                    </div>
                  </Link>
                </Button>
              </div>
              <video width="100%" height="480" controls>
                <source
                  src="https://cdn.discordapp.com/attachments/981832774157762570/1294156876111675444/demo-moderation-v1.mov?ex=6709fd03&is=6708ab83&hm=d22c00be8902bf4198bcade41fe013b148655be47d8825146b18b482b01d5136&"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
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
