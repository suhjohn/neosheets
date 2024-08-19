import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import React from "react";

type MenuItemType =
  | "insertRow"
  | "insertColumn"
  | "wrapText"
  | "delete"
  | "runCell"
  | "runColumn";

interface ContextMenuProps {
  position: { x: number; y: number };
  disabledMenuItems: MenuItemType[];
  onClose: () => void;
  onInsertRow: () => void;
  onInsertRowBelow: () => void;
  onInsertColumn: () => void;
  onInsertColumnRight: () => void;
  onWrapText: () => void;
  onDeleteRow: () => void;
  onDeleteColumn: () => void;
  onRunCell: () => void;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  position,
  disabledMenuItems,
  onClose,
  onInsertRow,
  onInsertRowBelow,
  onInsertColumn,
  onInsertColumnRight,
  onWrapText,
  onDeleteRow,
  onDeleteColumn,
  onRunCell,
}) => {
  return (
    <DropdownMenu open={true} onOpenChange={onClose}>
      <DropdownMenuContent
        className="w-52"
        style={{ position: "absolute", top: position.y, left: position.x }}
      >
        <DropdownMenuItem onClick={onInsertRow}>
          Insert Row Above
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onInsertRowBelow}>
          Insert Row Below
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onInsertColumn}>
          Insert Column Left
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onInsertColumnRight}>
          Insert Column Right
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onWrapText}>Wrap Text</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          disabled={disabledMenuItems.includes("runCell")}
          onClick={onRunCell}
        >
          Run Cell
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onDeleteRow}>Delete Row</DropdownMenuItem>
        <DropdownMenuItem onClick={onDeleteColumn}>
          Delete Column
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
