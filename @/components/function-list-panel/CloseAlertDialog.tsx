// CloseAlertDialog.tsx

import { type FC } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";

type CloseAlertDialogProps = {
  showCloseAlert: boolean;
  setShowCloseAlert: (show: boolean) => void;
  handleDiscardChanges: () => void;
};

const CloseAlertDialog: FC<CloseAlertDialogProps> = ({
  showCloseAlert,
  setShowCloseAlert,
  handleDiscardChanges,
}) => {
  return (
    <AlertDialog open={showCloseAlert} onOpenChange={setShowCloseAlert}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Discard this function?</AlertDialogTitle>
          <AlertDialogDescription>
            You will lose all changes made to this function.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setShowCloseAlert(false)}>
            Cancel
          </AlertDialogCancel>
          <Button
            variant={"destructive"}
            onClick={handleDiscardChanges}
            asChild
          >
            <AlertDialogAction>Discard</AlertDialogAction>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CloseAlertDialog;
