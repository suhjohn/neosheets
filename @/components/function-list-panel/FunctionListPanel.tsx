import { Search } from "lucide-react";
import { useEffect, useRef, type FC } from "react";
import { useSearchFunctions } from "../../hooks/useFunction";
import { Input } from "../ui/input";
import { CreateFunctionDialog } from "./CreateFunctionDialog";
import FunctionList from "./FunctionList";

type FunctionListPanelProps = {
  selectedFunctionId?: string;
  onSelectFunction?: (id: string) => void;
  showCreateFunctionButton?: boolean;
};

export const FunctionListPanel: FC<FunctionListPanelProps> = ({
  selectedFunctionId,
  onSelectFunction,
  showCreateFunctionButton = true,
}) => {
  const { searchTerm, setSearchTerm, filteredFunctions } = useSearchFunctions();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollPosition = sessionStorage.getItem("functionListScrollPosition");
    if (scrollPosition) {
      scrollRef.current?.scrollTo(0, parseInt(scrollPosition));
    }
  }, [scrollRef]);

  return (
    <div className="flex w-60 flex-shrink-0">
      <div className="flex w-full flex-col border-x border-stone-200 dark:border-stone-800">
        {/** Header */}
        <div className="flex-col border-b border-stone-200 dark:border-stone-800">
          <div className="flex h-10 w-full p-2 items-center">
            <div className="flex gap-1 items-center">
              <p className="text-xsm">{`Formulas`}</p>
            </div>
            {showCreateFunctionButton && <CreateFunctionDialog />}
          </div>
          {/** Search input */}
          <div className="px-2 pb-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
              <Input
                type="text"
                placeholder="Search formulas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 text-xs"
              />
            </div>
          </div>
        </div>
        {/** Body */}
        <div
          ref={scrollRef}
          onScroll={(e) => {
            sessionStorage.setItem(
              "functionListScrollPosition",
              e.currentTarget.scrollTop.toString()
            );
          }}
          className="overflow-auto"
        >
          {filteredFunctions !== undefined && (
            <FunctionList
              filteredFunctions={filteredFunctions}
              onSelectFunction={onSelectFunction}
              selectedFunctionId={selectedFunctionId}
            />
          )}
        </div>
      </div>
    </div>
  );
};
