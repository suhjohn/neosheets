import { useCallback, useEffect, useState } from "react";

export type UseColumnResizeProps = {
  onResize: ({ colIndex, width }: { colIndex: number; width: number }) => void;
};

export const useColumnResize = ({ onResize }: UseColumnResizeProps) => {
  const [isResizing, setIsResizing] = useState(false);
  const [resizingColumn, setResizingColumn] = useState<number | null>(null);
  const [resizeStartX, setResizeStartX] = useState<number | null>(null);
  const [resizeStartWidth, setResizeStartWidth] = useState<number | null>(null);
  const handleMouseDown = useCallback(
    ({
      e,
      width,
      colIndex,
    }: {
      e: React.MouseEvent<HTMLDivElement>;
      width: number;
      colIndex: number;
    }) => {
      e.preventDefault();
      setIsResizing(true);
      setResizingColumn(colIndex);
      setResizeStartX(e.clientX);
      setResizeStartWidth(width);
    },
    []
  );

  useEffect(() => {
    if (!isResizing) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (
        resizingColumn === null ||
        resizeStartX === null ||
        resizeStartWidth === null
      )
        return;

      const isDev = process.env.NODE_ENV === "development";
      const deltaX = (e.clientX - resizeStartX) * 1;
      const newWidth = Math.max(50, resizeStartWidth + deltaX);
      onResize({ colIndex: resizingColumn, width: newWidth });
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      setResizingColumn(null);
      setResizeStartX(null);
      setResizeStartWidth(null);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing, resizingColumn, resizeStartX, resizeStartWidth, onResize]);
  return {
    handleMouseDown,
  };
};
