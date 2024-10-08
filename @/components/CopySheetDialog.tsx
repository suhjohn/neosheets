import React, { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

interface CopySheetDialogProps {
  isOpen: boolean;
  onClose: () => void;
  sheetId: string;
}

const CopySheetDialog: React.FC<CopySheetDialogProps> = ({
  isOpen,
  onClose,
  sheetId,
}) => {
  const [copyOption, setCopyOption] = useState<"existing" | "new">("existing");
  const [newSpreadsheetName, setNewSpreadsheetName] = useState("");

  const handleCopy = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-md h-auto">
        <DialogHeader>
          <DialogTitle>Copy Sheet</DialogTitle>
        </DialogHeader>
        <RadioGroup value={copyOption} onValueChange={(value) => setCopyOption(value as "existing" | "new")}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="existing" id="existing" />
            <Label htmlFor="existing">Copy within the current spreadsheet</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="new" id="new" />
            <Label htmlFor="new">Copy to a new spreadsheet</Label>
          </div>
        </RadioGroup>
        {copyOption === "new" && (
          <div className="space-y-2">
            <Label htmlFor="newSpreadsheetName">New Spreadsheet Name</Label>
            <Input
              id="newSpreadsheetName"
              value={newSpreadsheetName}
              onChange={(e) => setNewSpreadsheetName(e.target.value)}
            />
          </div>
        )}
        <DialogFooter>
          <Button onClick={onClose} variant="outline">
            Cancel
          </Button>
          <Button onClick={handleCopy} disabled={copyOption === "new" && !newSpreadsheetName}>
            Copy
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CopySheetDialog;
