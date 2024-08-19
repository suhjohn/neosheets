import { DEFAULT_CELL_HEIGHT } from "@/constants";
import { useCallback, useEffect, useState } from "react";

export type UseElementResizeProps = {
  onResizeX: ({ colIndex, width }: { colIndex: number; width: number }) => void;
  onResizeY: ({
    rowIndex,
    height,
  }: {
    rowIndex: number;
    height: number;
  }) => void;
};

export const useElementResize = ({
  onResizeX,
  onResizeY,
}: UseElementResizeProps) => {
  const [isResizing, setIsResizing] = useState(false);
  const [resizingColumn, setResizingColumn] = useState<number | null>(null);
  const [resizeStartX, setResizeStartX] = useState<number | null>(null);
  const [resizeStartWidth, setResizeStartWidth] = useState<number | null>(null);
  const [resizeEndX, setResizeEndX] = useState<number | null>(null);

  const [resizingRow, setResizingRow] = useState<number | null>(null);
  const [resizeStartY, setResizeStartY] = useState<number | null>(null);
  const [resizeStartHeight, setResizeStartHeight] = useState<number | null>(
    null
  );
  const [resizeEndY, setResizeEndY] = useState<number | null>(null);

  const handleMouseDownX = useCallback(
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

  const handleMouseLeaveX = useCallback(() => {
    setIsResizing(false);
    setResizingColumn(null);
    setResizeStartX(null);
    setResizeStartWidth(null);
    setResizeEndX(null);
    if (resizeEndX !== null && resizingColumn !== null) {
      onResizeX({ colIndex: resizingColumn, width: resizeEndX });
    }
  }, [
    onResizeX,
    resizeEndX,
    resizingColumn,
    setIsResizing,
    setResizingColumn,
    setResizeStartX,
    setResizeStartWidth,
  ]);

  const handleMouseDownY = useCallback(
    ({
      e,
      height,
      rowIndex,
    }: {
      e: React.MouseEvent<HTMLDivElement>;
      height: number;
      rowIndex: number;
    }) => {
      e.preventDefault();
      setIsResizing(true);
      setResizingRow(rowIndex);
      setResizeStartY(e.clientY);
      setResizeStartHeight(height);
    },
    []
  );

  const handleMouseLeaveY = useCallback(() => {
    setIsResizing(false);
    setResizingRow(null);
    setResizeStartY(null);
    setResizeStartHeight(null);
    setResizeEndY(null);
    if (resizeEndY !== null && resizingRow !== null) {
      onResizeY({ rowIndex: resizingRow, height: resizeEndY });
    }
  }, [
    onResizeY,
    resizeEndY,
    resizingRow,
    setIsResizing,
    setResizingRow,
    setResizeStartY,
    setResizeStartHeight,
  ]);

  useEffect(() => {
    if (!isResizing) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (
        (resizingColumn === null && resizingRow === null) ||
        (resizeStartX === null && resizeStartY === null) ||
        (resizeStartWidth === null && resizeStartHeight === null)
      )
        return;

      if (
        resizingColumn !== null &&
        resizeStartX !== null &&
        resizeStartWidth !== null
      ) {
        const deltaX = (e.clientX - resizeStartX) * 1;
        const newWidth = Math.max(50, resizeStartWidth + deltaX);
        setResizeEndX(newWidth);
      } else if (
        resizingRow !== null &&
        resizeStartY !== null &&
        resizeStartHeight !== null
      ) {
        const deltaY = (e.clientY - resizeStartY) * 1;
        const newHeight = Math.max(DEFAULT_CELL_HEIGHT, resizeStartHeight + deltaY);
        setResizeEndY(newHeight);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [
    isResizing,
    resizingColumn,
    resizingRow,
    resizeStartX,
    resizeStartY,
    resizeStartWidth,
    resizeStartHeight,
  ]);

  return {
    isResizing,
    resizingColumn,
    resizingRow,
    resizeStartX,
    resizeStartY,
    resizeEndX,
    resizeEndY,
    handleMouseDownX,
    handleMouseDownY,
    handleMouseLeaveX,
    handleMouseLeaveY,
  };
};
