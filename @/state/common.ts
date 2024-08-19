import { type SheetState } from "@/types/sheet";

export const handleSelectedToEditing = (state: SheetState): SheetState => {
  if (!state.selectedCellPosition) {
    return state;
  }
  return {
    ...state,
    editingCellPosition: state.selectedCellPosition,
    editingValue:
      state.cellStates[state.selectedCellPosition.col][
        state.selectedCellPosition.row
      ]?.value.toString() || "",
  };
};
