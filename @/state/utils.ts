// @/state/utils.ts
import {
  DEFAULT_CELL_HEIGHT
} from "@/constants";
import {
  type RowState
} from "@/types/sheet";

export const getRowHeight = ({
  rowIndex,
  rowStates,
}: {
  rowIndex: number;
  rowStates: { [key: number]: RowState };
}) => {
  if (
    rowStates[rowIndex]?.specifiedHeight !== null &&
    rowStates[rowIndex]?.specifiedHeight !== undefined
  ) {
    return rowStates[rowIndex].specifiedHeight;
  }
  const height = Math.max(
    DEFAULT_CELL_HEIGHT,
    rowStates[rowIndex]?.height ?? 0
  );
  return height;
};
