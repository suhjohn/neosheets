import type React from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

interface ResizeRowDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (resizeType: "specific" | "fit", height: number | null) => void;
  selectedRows: number[];
}

export const ResizeRowDialog: React.FC<ResizeRowDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  selectedRows,
}) => {
  const [resizeType, setResizeType] = useState<"specific" | "fit">("specific");
  const [specificHeight, setSpecificHeight] = useState("21");

  const handleConfirm = () => {
    if (resizeType === "specific") {
      onConfirm(resizeType, parseInt(specificHeight, 10));
    } else {
      onConfirm(resizeType, null);
    }
  };

  const formatSelectedRows = (rows: number[]) => {
    if (rows.length <= 3) {
      return rows.join(", ");
    }
    return `${rows[0]}-${rows[rows.length - 1]}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="z-[1000] h-auto w-auto">
        <DialogHeader>
          <DialogTitle>
            Resize row {formatSelectedRows(selectedRows)}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription />
        <RadioGroup
          className="flex flex-col gap-4"
          value={resizeType}
          onValueChange={(value: "specific" | "fit") => setResizeType(value)}
        >
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="specific" id="specific" />
            <div className="flex flex-col gap-2">
              <Label htmlFor="specific">Specify row height</Label>
              <div className="flex items-center space-x-2 text-sm">
                <Input
                  type="number"
                  value={specificHeight}
                  onChange={(e) => setSpecificHeight(e.target.value)}
                  className="w-20"
                />
                <p>pixels (Default: 21)</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="fit" id="fit" />
            <Label htmlFor="fit">Fit to data</Label>
          </div>
        </RadioGroup>
        <DialogFooter>
          <Button onClick={handleConfirm}>OK</Button>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
