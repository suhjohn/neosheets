// @/state/common.ts
import { type SheetState } from "@/types/sheet";

export const handleSelectedToEditing = (state: SheetState): SheetState => {
  if (!state.selectedCellPosition) {
    return state;
  }
  const hasFormula =
    state.cellStates[state.selectedCellPosition.col][
      state.selectedCellPosition.row
    ]?.formula !== undefined &&
    state.cellStates[state.selectedCellPosition.col][
      state.selectedCellPosition.row
    ].formula !== "";
  return {
    ...state,
    editingCellPosition: state.selectedCellPosition,
    editingValue: hasFormula
      ? `${
          state.cellStates[state.selectedCellPosition.col][
            state.selectedCellPosition.row
          ]?.formula
        }`
      : state.cellStates[state.selectedCellPosition.col][
          state.selectedCellPosition.row
        ]?.value || "",
  };
};
