import {
  useCreateSpreadsheet,
  useDeleteSpreadsheet,
  useSpreadsheets,
  useUpdateSpreadsheet
} from "/build/_shared/chunk-M3HYQYO2.js";
import {
  Anchor2,
  Arrow2,
  CheckboxItem,
  Content2,
  Group,
  Item2,
  ItemIndicator,
  Label,
  Portal,
  RadioGroup,
  RadioItem,
  Root3,
  Separator,
  Sub,
  SubContent,
  SubTrigger,
  createMenuScope
} from "/build/_shared/chunk-BGH6VZHG.js";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "/build/_shared/chunk-KN5JZJEW.js";
import {
  ClientOnly,
  DrawerNavigation,
  OpenNavigation,
  Primitive,
  composeEventHandlers,
  createContextScope,
  useCallbackRef,
  useControllableState
} from "/build/_shared/chunk-QLLD56SL.js";
import {
  Button,
  Check,
  ChevronRight,
  Circle,
  Input,
  Loader,
  PanelLeft,
  Plus
} from "/build/_shared/chunk-GEIKSKTT.js";
import "/build/_shared/chunk-PL57PC3R.js";
import {
  cn,
  formatAppleDate
} from "/build/_shared/chunk-JF5W5KJ6.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-2WFCNDEW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-G5LS6WKY.js";
import {
  Link,
  useNavigate
} from "/build/_shared/chunk-PFYYXXJI.js";
import {
  createHotContext
} from "/build/_shared/chunk-F7C5E7EQ.js";
import "/build/_shared/chunk-MWML3QXM.js";
import "/build/_shared/chunk-2N23GYW7.js";
import {
  require_react
} from "/build/_shared/chunk-QPVUD6NO.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// @/components/SpreadsheetsPage.tsx
var import_react2 = __toESM(require_react(), 1);

// @/components/ui/context-menu.tsx
var React2 = __toESM(require_react(), 1);

// node_modules/.pnpm/@radix-ui+react-context-menu@2.2.1_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3_huoui5thitfhrjrcszm6dyrnq4/node_modules/@radix-ui/react-context-menu/dist/index.mjs
var React = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var CONTEXT_MENU_NAME = "ContextMenu";
var [createContextMenuContext, createContextMenuScope] = createContextScope(CONTEXT_MENU_NAME, [
  createMenuScope
]);
var useMenuScope = createMenuScope();
var [ContextMenuProvider, useContextMenuContext] = createContextMenuContext(CONTEXT_MENU_NAME);
var ContextMenu = (props) => {
  const { __scopeContextMenu, children, onOpenChange, dir, modal = true } = props;
  const [open, setOpen] = React.useState(false);
  const menuScope = useMenuScope(__scopeContextMenu);
  const handleOpenChangeProp = useCallbackRef(onOpenChange);
  const handleOpenChange = React.useCallback(
    (open2) => {
      setOpen(open2);
      handleOpenChangeProp(open2);
    },
    [handleOpenChangeProp]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    ContextMenuProvider,
    {
      scope: __scopeContextMenu,
      open,
      onOpenChange: handleOpenChange,
      modal,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Root3,
        {
          ...menuScope,
          dir,
          open,
          onOpenChange: handleOpenChange,
          modal,
          children
        }
      )
    }
  );
};
ContextMenu.displayName = CONTEXT_MENU_NAME;
var TRIGGER_NAME = "ContextMenuTrigger";
var ContextMenuTrigger = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeContextMenu, disabled = false, ...triggerProps } = props;
    const context = useContextMenuContext(TRIGGER_NAME, __scopeContextMenu);
    const menuScope = useMenuScope(__scopeContextMenu);
    const pointRef = React.useRef({ x: 0, y: 0 });
    const virtualRef = React.useRef({
      getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...pointRef.current })
    });
    const longPressTimerRef = React.useRef(0);
    const clearLongPress = React.useCallback(
      () => window.clearTimeout(longPressTimerRef.current),
      []
    );
    const handleOpen = (event) => {
      pointRef.current = { x: event.clientX, y: event.clientY };
      context.onOpenChange(true);
    };
    React.useEffect(() => clearLongPress, [clearLongPress]);
    React.useEffect(() => void (disabled && clearLongPress()), [disabled, clearLongPress]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor2, { ...menuScope, virtualRef }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Primitive.span,
        {
          "data-state": context.open ? "open" : "closed",
          "data-disabled": disabled ? "" : void 0,
          ...triggerProps,
          ref: forwardedRef,
          style: { WebkitTouchCallout: "none", ...props.style },
          onContextMenu: disabled ? props.onContextMenu : composeEventHandlers(props.onContextMenu, (event) => {
            clearLongPress();
            handleOpen(event);
            event.preventDefault();
          }),
          onPointerDown: disabled ? props.onPointerDown : composeEventHandlers(
            props.onPointerDown,
            whenTouchOrPen((event) => {
              clearLongPress();
              longPressTimerRef.current = window.setTimeout(() => handleOpen(event), 700);
            })
          ),
          onPointerMove: disabled ? props.onPointerMove : composeEventHandlers(props.onPointerMove, whenTouchOrPen(clearLongPress)),
          onPointerCancel: disabled ? props.onPointerCancel : composeEventHandlers(props.onPointerCancel, whenTouchOrPen(clearLongPress)),
          onPointerUp: disabled ? props.onPointerUp : composeEventHandlers(props.onPointerUp, whenTouchOrPen(clearLongPress))
        }
      )
    ] });
  }
);
ContextMenuTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "ContextMenuPortal";
var ContextMenuPortal = (props) => {
  const { __scopeContextMenu, ...portalProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { ...menuScope, ...portalProps });
};
ContextMenuPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "ContextMenuContent";
var ContextMenuContent = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeContextMenu, ...contentProps } = props;
    const context = useContextMenuContext(CONTENT_NAME, __scopeContextMenu);
    const menuScope = useMenuScope(__scopeContextMenu);
    const hasInteractedOutsideRef = React.useRef(false);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Content2,
      {
        ...menuScope,
        ...contentProps,
        ref: forwardedRef,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (event) => {
          props.onCloseAutoFocus?.(event);
          if (!event.defaultPrevented && hasInteractedOutsideRef.current) {
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          props.onInteractOutside?.(event);
          if (!event.defaultPrevented && !context.modal)
            hasInteractedOutsideRef.current = true;
        },
        style: {
          ...props.style,
          // re-namespace exposed content custom properties
          ...{
            "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      }
    );
  }
);
ContextMenuContent.displayName = CONTENT_NAME;
var GROUP_NAME = "ContextMenuGroup";
var ContextMenuGroup = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeContextMenu, ...groupProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Group, { ...menuScope, ...groupProps, ref: forwardedRef });
  }
);
ContextMenuGroup.displayName = GROUP_NAME;
var LABEL_NAME = "ContextMenuLabel";
var ContextMenuLabel = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeContextMenu, ...labelProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { ...menuScope, ...labelProps, ref: forwardedRef });
  }
);
ContextMenuLabel.displayName = LABEL_NAME;
var ITEM_NAME = "ContextMenuItem";
var ContextMenuItem = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeContextMenu, ...itemProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, { ...menuScope, ...itemProps, ref: forwardedRef });
  }
);
ContextMenuItem.displayName = ITEM_NAME;
var CHECKBOX_ITEM_NAME = "ContextMenuCheckboxItem";
var ContextMenuCheckboxItem = React.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...checkboxItemProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxItem, { ...menuScope, ...checkboxItemProps, ref: forwardedRef });
});
ContextMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "ContextMenuRadioGroup";
var ContextMenuRadioGroup = React.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...radioGroupProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, { ...menuScope, ...radioGroupProps, ref: forwardedRef });
});
ContextMenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "ContextMenuRadioItem";
var ContextMenuRadioItem = React.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...radioItemProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioItem, { ...menuScope, ...radioItemProps, ref: forwardedRef });
});
ContextMenuRadioItem.displayName = RADIO_ITEM_NAME;
var INDICATOR_NAME = "ContextMenuItemIndicator";
var ContextMenuItemIndicator = React.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...itemIndicatorProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator, { ...menuScope, ...itemIndicatorProps, ref: forwardedRef });
});
ContextMenuItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME = "ContextMenuSeparator";
var ContextMenuSeparator = React.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...separatorProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { ...menuScope, ...separatorProps, ref: forwardedRef });
});
ContextMenuSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "ContextMenuArrow";
var ContextMenuArrow = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeContextMenu, ...arrowProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow2, { ...menuScope, ...arrowProps, ref: forwardedRef });
  }
);
ContextMenuArrow.displayName = ARROW_NAME;
var SUB_NAME = "ContextMenuSub";
var ContextMenuSub = (props) => {
  const { __scopeContextMenu, children, onOpenChange, open: openProp, defaultOpen } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, { ...menuScope, open, onOpenChange: setOpen, children });
};
ContextMenuSub.displayName = SUB_NAME;
var SUB_TRIGGER_NAME = "ContextMenuSubTrigger";
var ContextMenuSubTrigger = React.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...triggerItemProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubTrigger, { ...menuScope, ...triggerItemProps, ref: forwardedRef });
});
ContextMenuSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "ContextMenuSubContent";
var ContextMenuSubContent = React.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...subContentProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    SubContent,
    {
      ...menuScope,
      ...subContentProps,
      ref: forwardedRef,
      style: {
        ...props.style,
        // re-namespace exposed content custom properties
        ...{
          "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    }
  );
});
ContextMenuSubContent.displayName = SUB_CONTENT_NAME;
function whenTouchOrPen(handler) {
  return (event) => event.pointerType !== "mouse" ? handler(event) : void 0;
}
var Root2 = ContextMenu;
var Trigger = ContextMenuTrigger;
var Portal2 = ContextMenuPortal;
var Content22 = ContextMenuContent;
var Label2 = ContextMenuLabel;
var Item22 = ContextMenuItem;
var CheckboxItem2 = ContextMenuCheckboxItem;
var RadioItem2 = ContextMenuRadioItem;
var ItemIndicator2 = ContextMenuItemIndicator;
var Separator2 = ContextMenuSeparator;
var SubTrigger2 = ContextMenuSubTrigger;
var SubContent2 = ContextMenuSubContent;

// @/components/ui/context-menu.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var ContextMenu2 = Root2;
var ContextMenuTrigger2 = Trigger;
var ContextMenuSubTrigger2 = React2.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  SubTrigger2,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "ml-auto h-4 w-4" }, void 0, false, {
        fileName: "@/components/ui/context-menu.tsx",
        lineNumber: 35,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  true,
  {
    fileName: "@/components/ui/context-menu.tsx",
    lineNumber: 25,
    columnNumber: 3
  },
  this
));
ContextMenuSubTrigger2.displayName = SubTrigger2.displayName;
var ContextMenuSubContent2 = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  SubContent2,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/context-menu.tsx",
    lineNumber: 44,
    columnNumber: 3
  },
  this
));
ContextMenuSubContent2.displayName = SubContent2.displayName;
var ContextMenuContent2 = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  Content22,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/context-menu.tsx",
    lineNumber: 60,
    columnNumber: 5
  },
  this
) }, void 0, false, {
  fileName: "@/components/ui/context-menu.tsx",
  lineNumber: 59,
  columnNumber: 3
}, this));
ContextMenuContent2.displayName = Content22.displayName;
var ContextMenuItem2 = React2.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  Item22,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/context-menu.tsx",
    lineNumber: 78,
    columnNumber: 3
  },
  this
));
ContextMenuItem2.displayName = Item22.displayName;
var ContextMenuCheckboxItem2 = React2.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  CheckboxItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "h-4 w-4" }, void 0, false, {
        fileName: "@/components/ui/context-menu.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "@/components/ui/context-menu.tsx",
        lineNumber: 104,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "@/components/ui/context-menu.tsx",
        lineNumber: 103,
        columnNumber: 5
      }, this),
      children
    ]
  },
  void 0,
  true,
  {
    fileName: "@/components/ui/context-menu.tsx",
    lineNumber: 94,
    columnNumber: 3
  },
  this
));
ContextMenuCheckboxItem2.displayName = CheckboxItem2.displayName;
var ContextMenuRadioItem2 = React2.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  RadioItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Circle, { className: "h-2 w-2 fill-current" }, void 0, false, {
        fileName: "@/components/ui/context-menu.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "@/components/ui/context-menu.tsx",
        lineNumber: 127,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "@/components/ui/context-menu.tsx",
        lineNumber: 126,
        columnNumber: 5
      }, this),
      children
    ]
  },
  void 0,
  true,
  {
    fileName: "@/components/ui/context-menu.tsx",
    lineNumber: 118,
    columnNumber: 3
  },
  this
));
ContextMenuRadioItem2.displayName = RadioItem2.displayName;
var ContextMenuLabel2 = React2.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  Label2,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/context-menu.tsx",
    lineNumber: 142,
    columnNumber: 3
  },
  this
));
ContextMenuLabel2.displayName = Label2.displayName;
var ContextMenuSeparator2 = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  Separator2,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-border", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/context-menu.tsx",
    lineNumber: 158,
    columnNumber: 3
  },
  this
));
ContextMenuSeparator2.displayName = Separator2.displayName;
var ContextMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "span",
    {
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "@/components/ui/context-menu.tsx",
      lineNumber: 171,
      columnNumber: 5
    },
    this
  );
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

// @/components/SpreadsheetsPage.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var SpreadsheetsPage = () => {
  const { data: spreadsheets, isLoading } = useSpreadsheets();
  const updateSpreadsheet = useUpdateSpreadsheet();
  const createSpreadsheet = useCreateSpreadsheet();
  const deleteSpreadsheet = useDeleteSpreadsheet();
  const [open, setOpen] = (0, import_react2.useState)(false);
  const [renamingId, setRenamingId] = (0, import_react2.useState)(null);
  const [newName, setNewName] = (0, import_react2.useState)("");
  const [isRenameDialogOpen, setIsRenameDialogOpen] = (0, import_react2.useState)(false);
  const navigate = useNavigate();
  const handleAdd = async () => {
    const newSpreadsheet = await createSpreadsheet.mutateAsync({
      name: `Untitled Spreadsheet - ${(/* @__PURE__ */ new Date()).toISOString()}`
    });
    navigate(`/spreadsheet/${newSpreadsheet.id}`);
  };
  const handleDelete = (id) => {
    deleteSpreadsheet.mutate(id);
  };
  const handleRename = (id, currentName) => {
    setRenamingId(id);
    setNewName(currentName);
    setIsRenameDialogOpen(true);
  };
  const handleRenameSubmit = (id) => {
    if (newName.trim() === "") {
      return;
    }
    updateSpreadsheet.mutateAsync({
      id,
      name: newName,
      lastOpenedAt: (/* @__PURE__ */ new Date()).toISOString(),
      // Update other required fields if necessary
      sheets: spreadsheets?.find((s) => s.id === id)?.sheets || []
    });
    setIsRenameDialogOpen(false);
    setRenamingId(null);
    setNewName("");
  };
  const handleRenameCancel = () => {
    setIsRenameDialogOpen(false);
    setRenamingId(null);
    setNewName("");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-[100dvh] w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(OpenNavigation, {}, void 0, false, {
      fileName: "@/components/SpreadsheetsPage.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:p-4 flex w-full h-full bg-white dark:bg-black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dark:bg-stone-950 bg-stone-25 lg:border w-full flex justify-center border-stone-200 dark:border-stone-800 rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "div",
      {
        className: cn(
          "w-full",
          "flex-1",
          "gap-4",
          "flex",
          "flex-col",
          "overflow-y-auto"
        ),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col h-full divide-y divide-stone-200 dark:divide-stone-800", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between px-4 h-10", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center h-full", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:hidden", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  Button,
                  {
                    onClick: () => setOpen(true),
                    variant: "icon",
                    className: "p-0 mr-2 w-auto",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PanelLeft, { size: 16 }, void 0, false, {
                      fileName: "@/components/SpreadsheetsPage.tsx",
                      lineNumber: 102,
                      columnNumber: 23
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "@/components/SpreadsheetsPage.tsx",
                    lineNumber: 97,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  DrawerNavigation,
                  {
                    open,
                    onClose: () => setOpen(false)
                  },
                  void 0,
                  false,
                  {
                    fileName: "@/components/SpreadsheetsPage.tsx",
                    lineNumber: 104,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "@/components/SpreadsheetsPage.tsx",
                lineNumber: 96,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: cn("text-sm"), children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: `Spreadsheets ` }, void 0, false, {
                  fileName: "@/components/SpreadsheetsPage.tsx",
                  lineNumber: 110,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-stone-400", children: `${spreadsheets?.length}` }, void 0, false, {
                  fileName: "@/components/SpreadsheetsPage.tsx",
                  lineNumber: 111,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "@/components/SpreadsheetsPage.tsx",
                lineNumber: 109,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "@/components/SpreadsheetsPage.tsx",
              lineNumber: 95,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { onClick: handleAdd, variant: "secondary", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Plus, { className: "w-4 h-4 mr-2" }, void 0, false, {
                fileName: "@/components/SpreadsheetsPage.tsx",
                lineNumber: 117,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Create spreadsheet" }, void 0, false, {
                fileName: "@/components/SpreadsheetsPage.tsx",
                lineNumber: 118,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "@/components/SpreadsheetsPage.tsx",
              lineNumber: 116,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "@/components/SpreadsheetsPage.tsx",
            lineNumber: 94,
            columnNumber: 15
          }, this),
          isLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 h-full flex flex-col text-left items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Loader, { className: "w-8 h-8 text-stone-500 dark:text-stone-400 animate-spin" }, void 0, false, {
            fileName: "@/components/SpreadsheetsPage.tsx",
            lineNumber: 123,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "@/components/SpreadsheetsPage.tsx",
            lineNumber: 122,
            columnNumber: 17
          }, this),
          spreadsheets?.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 h-full flex flex-col text-left items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-6 items-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "gap-2 flex flex-col max-w-96", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Spreadsheets" }, void 0, false, {
                fileName: "@/components/SpreadsheetsPage.tsx",
                lineNumber: 130,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xsm text-stone-600 dark:text-stone-400", children: "Spreadsheets are what you are familiar with from Excel or Google Sheets. Once you create a spreadsheet, they will show up here." }, void 0, false, {
                fileName: "@/components/SpreadsheetsPage.tsx",
                lineNumber: 131,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "@/components/SpreadsheetsPage.tsx",
              lineNumber: 129,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { onClick: handleAdd, children: "Create new spreadsheet" }, void 0, false, {
              fileName: "@/components/SpreadsheetsPage.tsx",
              lineNumber: 137,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "@/components/SpreadsheetsPage.tsx",
            lineNumber: 128,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "@/components/SpreadsheetsPage.tsx",
            lineNumber: 127,
            columnNumber: 17
          }, this),
          spreadsheets?.length !== void 0 && spreadsheets.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full grid grid-cols-6 px-4 h-10 items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xsm text-stone-500 col-span-5", children: "Name" }, void 0, false, {
              fileName: "@/components/SpreadsheetsPage.tsx",
              lineNumber: 144,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xsm text-stone-500 col-span-1 text-right", children: "Last opened" }, void 0, false, {
              fileName: "@/components/SpreadsheetsPage.tsx",
              lineNumber: 145,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "@/components/SpreadsheetsPage.tsx",
            lineNumber: 143,
            columnNumber: 19
          }, this),
          spreadsheets?.map((spreadsheet) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ContextMenu2, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ContextMenuTrigger2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                className: cn(
                  "h-10 px-4 flex items-center justify-between gap-2 hover:bg-stone-100 dark:hover:bg-stone-900"
                ),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  Link,
                  {
                    to: `/spreadsheet/${spreadsheet.id}`,
                    className: "grid grid-cols-6 w-full items-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "w-full text-sm col-span-5", children: spreadsheet.name }, void 0, false, {
                        fileName: "@/components/SpreadsheetsPage.tsx",
                        lineNumber: 163,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xs text-stone-500 col-span-1 text-right", children: formatAppleDate(spreadsheet.lastOpenedAt) }, void 0, false, {
                        fileName: "@/components/SpreadsheetsPage.tsx",
                        lineNumber: 166,
                        columnNumber: 27
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "@/components/SpreadsheetsPage.tsx",
                    lineNumber: 159,
                    columnNumber: 25
                  },
                  this
                ) }, void 0, false, {
                  fileName: "@/components/SpreadsheetsPage.tsx",
                  lineNumber: 158,
                  columnNumber: 23
                }, this)
              },
              void 0,
              false,
              {
                fileName: "@/components/SpreadsheetsPage.tsx",
                lineNumber: 153,
                columnNumber: 21
              },
              this
            ) }, void 0, false, {
              fileName: "@/components/SpreadsheetsPage.tsx",
              lineNumber: 152,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ContextMenuContent2, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                ContextMenuItem2,
                {
                  onClick: () => handleRename(spreadsheet.id, spreadsheet.name),
                  children: "Rename"
                },
                void 0,
                false,
                {
                  fileName: "@/components/SpreadsheetsPage.tsx",
                  lineNumber: 174,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                ContextMenuItem2,
                {
                  className: "text-red-600",
                  onClick: () => handleDelete(spreadsheet.id),
                  children: "Delete"
                },
                void 0,
                false,
                {
                  fileName: "@/components/SpreadsheetsPage.tsx",
                  lineNumber: 181,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "@/components/SpreadsheetsPage.tsx",
              lineNumber: 173,
              columnNumber: 19
            }, this)
          ] }, spreadsheet.id, true, {
            fileName: "@/components/SpreadsheetsPage.tsx",
            lineNumber: 151,
            columnNumber: 17
          }, this)),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-6 gap-2" }, void 0, false, {
            fileName: "@/components/SpreadsheetsPage.tsx",
            lineNumber: 190,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "@/components/SpreadsheetsPage.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this)
      },
      void 0,
      false,
      {
        fileName: "@/components/SpreadsheetsPage.tsx",
        lineNumber: 83,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "@/components/SpreadsheetsPage.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "@/components/SpreadsheetsPage.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dialog, { open: isRenameDialogOpen, onOpenChange: setIsRenameDialogOpen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogContent, { className: "h-auto w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogTitle, { children: "Rename Spreadsheet" }, void 0, false, {
        fileName: "@/components/SpreadsheetsPage.tsx",
        lineNumber: 198,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "@/components/SpreadsheetsPage.tsx",
        lineNumber: 197,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        Input,
        {
          type: "text",
          value: newName,
          onChange: (e) => setNewName(e.target.value),
          placeholder: "Enter new name"
        },
        void 0,
        false,
        {
          fileName: "@/components/SpreadsheetsPage.tsx",
          lineNumber: 200,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogFooter, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { variant: "outline", onClick: handleRenameCancel, children: "Cancel" }, void 0, false, {
          fileName: "@/components/SpreadsheetsPage.tsx",
          lineNumber: 207,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { onClick: () => handleRenameSubmit(renamingId), children: "Rename" }, void 0, false, {
          fileName: "@/components/SpreadsheetsPage.tsx",
          lineNumber: 210,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "@/components/SpreadsheetsPage.tsx",
        lineNumber: 206,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "@/components/SpreadsheetsPage.tsx",
      lineNumber: 196,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "@/components/SpreadsheetsPage.tsx",
      lineNumber: 195,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "@/components/SpreadsheetsPage.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
};

// app/routes/spreadsheet._index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/spreadsheet._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/spreadsheet._index.tsx"
  );
  import.meta.hot.lastModified = "1728365768394.7585";
}
function Function() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ClientOnly, { fallback: null, children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SpreadsheetsPage, {}, void 0, false, {
    fileName: "app/routes/spreadsheet._index.tsx",
    lineNumber: 24,
    columnNumber: 45
  }, this) }, void 0, false, {
    fileName: "app/routes/spreadsheet._index.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = Function;
var _c;
$RefreshReg$(_c, "Function");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Function as default
};
//# sourceMappingURL=/build/routes/spreadsheet._index-NHQV6EPN.js.map
