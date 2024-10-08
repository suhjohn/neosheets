import { useSpreadsheet } from "@/hooks/useSpreadsheetes";
import { Loader } from "lucide-react";
import { FC } from "react";
import Sheet from "./Sheet";

type SpreadSheetsPageProps = {
  id: string;
};

export const SpreadsheetPage: FC<SpreadSheetsPageProps> = ({ id }) => {
  const { data: initialSpreadsheet, isPending } = useSpreadsheet(id);
  return ( 
    <div className="h-[100dvh] max-h-[100dvh] flex flex-col">
      {isPending && (
        <div className="flex items-center justify-center h-full">
          <Loader className="animate-spin" />
        </div>
      )}
      {initialSpreadsheet && (
        <Sheet id={id} initialSpreadsheet={initialSpreadsheet} />
      )}
    </div>
  );
};
