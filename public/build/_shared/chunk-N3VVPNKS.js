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
  SubContent,
  SubTrigger,
  createMenuScope
} from "/build/_shared/chunk-BGH6VZHG.js";
import {
  ArrayInput,
  AutoResizeTextarea,
  Badge,
  DEFAULT_FUNCTIONS,
  DEFAULT_RESOURCES,
  EditorView,
  Label as Label2,
  PromptInput,
  esm_default,
  javascript,
  json,
  useCreateFunction,
  useCreateLlmFunction,
  useDeleteFunction,
  useFunction,
  useUpdateFunction,
  useUpdateLlmFunction,
  validateFunction,
  vscodeDark,
  vscodeLight
} from "/build/_shared/chunk-ZMGISGPB.js";
import {
  Primitive,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  composeEventHandlers,
  createContextScope,
  useControllableState,
  useId
} from "/build/_shared/chunk-QLLD56SL.js";
import {
  Button,
  Check,
  ChevronRight,
  Circle,
  Copy,
  Ellipsis,
  Input,
  Trash,
  composeRefs
} from "/build/_shared/chunk-GEIKSKTT.js";
import {
  require_build
} from "/build/_shared/chunk-PL57PC3R.js";
import {
  cn,
  extractMustacheVariables,
  validateJSON
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
  require_react
} from "/build/_shared/chunk-QPVUD6NO.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// @/components/function/DefaultFunctionDetailPanel.tsx
var import_react2 = __toESM(require_react(), 1);
var import_remix_themes = __toESM(require_build(), 1);

// @/components/ui/dropdown-menu.tsx
var React2 = __toESM(require_react(), 1);

// node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.1.1_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18._hfj62zklt5zw6dxs7nv7d5revq/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var React = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var DROPDOWN_MENU_NAME = "DropdownMenu";
var [createDropdownMenuContext, createDropdownMenuScope] = createContextScope(
  DROPDOWN_MENU_NAME,
  [createMenuScope]
);
var useMenuScope = createMenuScope();
var [DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME);
var DropdownMenu = (props) => {
  const {
    __scopeDropdownMenu,
    children,
    dir,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  const triggerRef = React.useRef(null);
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    DropdownMenuProvider,
    {
      scope: __scopeDropdownMenu,
      triggerId: useId(),
      triggerRef,
      contentId: useId(),
      open,
      onOpenChange: setOpen,
      onOpenToggle: React.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root3, { ...menuScope, open, onOpenChange: setOpen, dir, modal, children })
    }
  );
};
DropdownMenu.displayName = DROPDOWN_MENU_NAME;
var TRIGGER_NAME = "DropdownMenuTrigger";
var DropdownMenuTrigger = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, disabled = false, ...triggerProps } = props;
    const context = useDropdownMenuContext(TRIGGER_NAME, __scopeDropdownMenu);
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor2, { asChild: true, ...menuScope, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Primitive.button,
      {
        type: "button",
        id: context.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": context.open,
        "aria-controls": context.open ? context.contentId : void 0,
        "data-state": context.open ? "open" : "closed",
        "data-disabled": disabled ? "" : void 0,
        disabled,
        ...triggerProps,
        ref: composeRefs(forwardedRef, context.triggerRef),
        onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
          if (!disabled && event.button === 0 && event.ctrlKey === false) {
            context.onOpenToggle();
            if (!context.open)
              event.preventDefault();
          }
        }),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          if (disabled)
            return;
          if (["Enter", " "].includes(event.key))
            context.onOpenToggle();
          if (event.key === "ArrowDown")
            context.onOpenChange(true);
          if (["Enter", " ", "ArrowDown"].includes(event.key))
            event.preventDefault();
        })
      }
    ) });
  }
);
DropdownMenuTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DropdownMenuPortal";
var DropdownMenuPortal = (props) => {
  const { __scopeDropdownMenu, ...portalProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { ...menuScope, ...portalProps });
};
DropdownMenuPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "DropdownMenuContent";
var DropdownMenuContent = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...contentProps } = props;
    const context = useDropdownMenuContext(CONTENT_NAME, __scopeDropdownMenu);
    const menuScope = useMenuScope(__scopeDropdownMenu);
    const hasInteractedOutsideRef = React.useRef(false);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Content2,
      {
        id: context.contentId,
        "aria-labelledby": context.triggerId,
        ...menuScope,
        ...contentProps,
        ref: forwardedRef,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          if (!hasInteractedOutsideRef.current)
            context.triggerRef.current?.focus();
          hasInteractedOutsideRef.current = false;
          event.preventDefault();
        }),
        onInteractOutside: composeEventHandlers(props.onInteractOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (!context.modal || isRightClick)
            hasInteractedOutsideRef.current = true;
        }),
        style: {
          ...props.style,
          // re-namespace exposed content custom properties
          ...{
            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      }
    );
  }
);
DropdownMenuContent.displayName = CONTENT_NAME;
var GROUP_NAME = "DropdownMenuGroup";
var DropdownMenuGroup = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...groupProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Group, { ...menuScope, ...groupProps, ref: forwardedRef });
  }
);
DropdownMenuGroup.displayName = GROUP_NAME;
var LABEL_NAME = "DropdownMenuLabel";
var DropdownMenuLabel = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...labelProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { ...menuScope, ...labelProps, ref: forwardedRef });
  }
);
DropdownMenuLabel.displayName = LABEL_NAME;
var ITEM_NAME = "DropdownMenuItem";
var DropdownMenuItem = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...itemProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, { ...menuScope, ...itemProps, ref: forwardedRef });
  }
);
DropdownMenuItem.displayName = ITEM_NAME;
var CHECKBOX_ITEM_NAME = "DropdownMenuCheckboxItem";
var DropdownMenuCheckboxItem = React.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...checkboxItemProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxItem, { ...menuScope, ...checkboxItemProps, ref: forwardedRef });
});
DropdownMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "DropdownMenuRadioGroup";
var DropdownMenuRadioGroup = React.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioGroupProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, { ...menuScope, ...radioGroupProps, ref: forwardedRef });
});
DropdownMenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "DropdownMenuRadioItem";
var DropdownMenuRadioItem = React.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioItemProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioItem, { ...menuScope, ...radioItemProps, ref: forwardedRef });
});
DropdownMenuRadioItem.displayName = RADIO_ITEM_NAME;
var INDICATOR_NAME = "DropdownMenuItemIndicator";
var DropdownMenuItemIndicator = React.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...itemIndicatorProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator, { ...menuScope, ...itemIndicatorProps, ref: forwardedRef });
});
DropdownMenuItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME = "DropdownMenuSeparator";
var DropdownMenuSeparator = React.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...separatorProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { ...menuScope, ...separatorProps, ref: forwardedRef });
});
DropdownMenuSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "DropdownMenuArrow";
var DropdownMenuArrow = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...arrowProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow2, { ...menuScope, ...arrowProps, ref: forwardedRef });
  }
);
DropdownMenuArrow.displayName = ARROW_NAME;
var SUB_TRIGGER_NAME = "DropdownMenuSubTrigger";
var DropdownMenuSubTrigger = React.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subTriggerProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubTrigger, { ...menuScope, ...subTriggerProps, ref: forwardedRef });
});
DropdownMenuSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "DropdownMenuSubContent";
var DropdownMenuSubContent = React.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subContentProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
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
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    }
  );
});
DropdownMenuSubContent.displayName = SUB_CONTENT_NAME;
var Root2 = DropdownMenu;
var Trigger = DropdownMenuTrigger;
var Portal2 = DropdownMenuPortal;
var Content22 = DropdownMenuContent;
var Label22 = DropdownMenuLabel;
var Item22 = DropdownMenuItem;
var CheckboxItem2 = DropdownMenuCheckboxItem;
var RadioItem2 = DropdownMenuRadioItem;
var ItemIndicator2 = DropdownMenuItemIndicator;
var Separator2 = DropdownMenuSeparator;
var SubTrigger2 = DropdownMenuSubTrigger;
var SubContent2 = DropdownMenuSubContent;

// @/components/ui/dropdown-menu.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
"use client";
var DropdownMenu2 = Root2;
var DropdownMenuTrigger2 = Trigger;
var DropdownMenuSubTrigger2 = React2.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  SubTrigger2,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-stone-100 data-[state=open]:bg-stone-100 dark:focus:bg-stone-800 dark:data-[state=open]:bg-stone-800",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "ml-auto h-4 w-4" }, void 0, false, {
        fileName: "@/components/ui/dropdown-menu.tsx",
        lineNumber: 37,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  true,
  {
    fileName: "@/components/ui/dropdown-menu.tsx",
    lineNumber: 27,
    columnNumber: 3
  },
  this
));
DropdownMenuSubTrigger2.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent2 = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  SubContent2,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-stone-200 bg-white p-1 text-stone-900 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-50",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/dropdown-menu.tsx",
    lineNumber: 47,
    columnNumber: 3
  },
  this
));
DropdownMenuSubContent2.displayName = SubContent2.displayName;
var DropdownMenuContent2 = React2.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  Content22,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-stone-200 bg-white p-1 text-stone-900 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-50",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/dropdown-menu.tsx",
    lineNumber: 64,
    columnNumber: 5
  },
  this
) }, void 0, false, {
  fileName: "@/components/ui/dropdown-menu.tsx",
  lineNumber: 63,
  columnNumber: 3
}, this));
DropdownMenuContent2.displayName = Content22.displayName;
var DropdownMenuItem2 = React2.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  Item22,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-xs outline-none transition-colors focus:bg-stone-100 focus:text-stone-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-stone-800 dark:focus:text-stone-50",
      inset && "pl-8",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/dropdown-menu.tsx",
    lineNumber: 83,
    columnNumber: 3
  },
  this
));
DropdownMenuItem2.displayName = Item22.displayName;
var DropdownMenuCheckboxItem2 = React2.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  CheckboxItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-stone-100 focus:text-stone-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-stone-800 dark:focus:text-stone-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "h-4 w-4" }, void 0, false, {
        fileName: "@/components/ui/dropdown-menu.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "@/components/ui/dropdown-menu.tsx",
        lineNumber: 109,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "@/components/ui/dropdown-menu.tsx",
        lineNumber: 108,
        columnNumber: 5
      }, this),
      children
    ]
  },
  void 0,
  true,
  {
    fileName: "@/components/ui/dropdown-menu.tsx",
    lineNumber: 99,
    columnNumber: 3
  },
  this
));
DropdownMenuCheckboxItem2.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem2 = React2.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  RadioItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-stone-100 focus:text-stone-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-stone-800 dark:focus:text-stone-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Circle, { className: "h-2 w-2 fill-current" }, void 0, false, {
        fileName: "@/components/ui/dropdown-menu.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "@/components/ui/dropdown-menu.tsx",
        lineNumber: 132,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "@/components/ui/dropdown-menu.tsx",
        lineNumber: 131,
        columnNumber: 5
      }, this),
      children
    ]
  },
  void 0,
  true,
  {
    fileName: "@/components/ui/dropdown-menu.tsx",
    lineNumber: 123,
    columnNumber: 3
  },
  this
));
DropdownMenuRadioItem2.displayName = RadioItem2.displayName;
var DropdownMenuLabel2 = React2.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  Label22,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/dropdown-menu.tsx",
    lineNumber: 147,
    columnNumber: 3
  },
  this
));
DropdownMenuLabel2.displayName = Label22.displayName;
var DropdownMenuSeparator2 = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  Separator2,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-stone-100 dark:bg-stone-800", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/dropdown-menu.tsx",
    lineNumber: 163,
    columnNumber: 3
  },
  this
));
DropdownMenuSeparator2.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "@/components/ui/dropdown-menu.tsx",
      lineNumber: 176,
      columnNumber: 5
    },
    this
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// @/components/function/DefaultFunctionDetailPanel.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
function DefaultFunctionDetailPanel({
  id,
  showMenuButton = true
}) {
  const { data: functionData } = useFunction(id);
  const { mutateAsync: callUpdate } = useUpdateFunction();
  const [functionState, setFunctionState] = (0, import_react2.useState)({
    id,
    functionName: "",
    functionBody: "",
    description: ""
  });
  const [showSaved, setShowSaved] = (0, import_react2.useState)(false);
  const [error, setError] = (0, import_react2.useState)(null);
  const [resolvedTheme] = (0, import_remix_themes.useTheme)();
  const createFunction = useCreateFunction();
  const deleteFunction = useDeleteFunction();
  const navigate = useNavigate();
  (0, import_react2.useEffect)(() => {
    if (functionData) {
      setFunctionState({
        id: functionData.id,
        functionName: functionData.functionName,
        functionBody: functionData.functionBody,
        description: functionData.description || ""
      });
    }
  }, [functionData]);
  const validateFunctionCb = (0, import_react2.useCallback)((code) => {
    try {
      validateFunction(code);
      setError(null);
      return true;
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
      return false;
    }
  }, []);
  const isDefaultFunction = (id2) => {
    return DEFAULT_FUNCTIONS.map((func) => func.id).includes(id2);
  };
  const handleChange = (0, import_react2.useCallback)(
    async (newState) => {
      validateFunctionCb(newState.functionBody);
      setFunctionState(newState);
      await callUpdate(newState);
      setShowSaved(true);
    },
    [callUpdate, validateFunctionCb]
  );
  const handleCopy = (0, import_react2.useCallback)(async () => {
    const createdFunction = await createFunction.mutateAsync({
      functionName: functionState.functionName,
      functionBody: functionState.functionBody,
      description: functionState.description
    });
    navigate(`/function/${createdFunction.id}`);
  }, [createFunction, functionState, navigate]);
  const handleDelete = (0, import_react2.useCallback)(async () => {
    await deleteFunction.mutateAsync(id);
    navigate(-1);
  }, [deleteFunction, id, navigate]);
  (0, import_react2.useEffect)(() => {
    let timeoutId;
    if (showSaved) {
      timeoutId = setTimeout(() => {
        setShowSaved(false);
      }, 2e3);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [showSaved]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-shrink-0 flex w-full px-2 md:px-4 bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 h-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-1 items-center justify-between w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: `/function/${functionState.id}`, className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xsm", children: [
        functionState.functionName,
        "-",
        functionState.id.slice(0, 6)
      ] }, void 0, true, {
        fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
        lineNumber: 128,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
        lineNumber: 127,
        columnNumber: 11
      }, this),
      showMenuButton && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenu2, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuTrigger2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { variant: "ghost", size: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ellipsis, { className: "h-4 w-4" }, void 0, false, {
          fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
          lineNumber: 136,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
          lineNumber: 135,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
          lineNumber: 134,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuContent2, { align: "end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { onClick: handleCopy, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Copy, { size: 16 }, void 0, false, {
              fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
              lineNumber: 142,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Clone" }, void 0, false, {
              fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
              lineNumber: 143,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
            lineNumber: 141,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
            lineNumber: 140,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem2, { onClick: handleDelete, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Trash, { size: 16 }, void 0, false, {
              fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
              lineNumber: 148,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Delete" }, void 0, false, {
              fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
              lineNumber: 149,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
            lineNumber: 147,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
            lineNumber: 146,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
          lineNumber: 139,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
        lineNumber: 133,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
      lineNumber: 126,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col flex-shrink-0 w-full space-y-4 px-6 py-8 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-screen-md flex w-full flex-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Badge, { className: "text-xs w-auto px-2 py-1", variant: "secondary", children: isDefaultFunction(functionState.id) ? "Default function" : "Custom function" }, void 0, false, {
          fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
          lineNumber: 161,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
          lineNumber: 160,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex w-full items-center space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            Input,
            {
              className: cn(
                "w-full font-[500] text-xl border-none disabled:opacity-100 px-0"
              ),
              value: functionState.functionName,
              onChange: (e) => {
                handleChange({
                  ...functionState,
                  functionName: e.target.value
                });
              },
              disabled: isDefaultFunction(functionState.id)
            },
            void 0,
            false,
            {
              fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
              lineNumber: 169,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: showSaved && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xs text-stone-500", children: "Saved" }, void 0, false, {
            fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
            lineNumber: 183,
            columnNumber: 31
          }, this) }, void 0, false, {
            fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
            lineNumber: 182,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
          lineNumber: 168,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          AutoResizeTextarea,
          {
            className: "text-sm border-none disabled:opacity-100 px-0",
            placeholder: "Add description...",
            value: functionState.description,
            onChange: (e) => {
              handleChange({
                ...functionState,
                description: e.target.value
              });
            },
            disabled: isDefaultFunction(functionState.id),
            minRows: 1,
            maxRows: 10
          },
          void 0,
          false,
          {
            fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
            lineNumber: 186,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
        lineNumber: 159,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          esm_default,
          {
            className: cn("text-xs rounded-lg overflow-hidden"),
            theme: resolvedTheme === "dark" ? vscodeDark : vscodeLight,
            extensions: [
              javascript({ typescript: true }),
              EditorView.lineWrapping
            ],
            value: functionState.functionBody,
            onChange: (value) => {
              handleChange({ ...functionState, functionBody: value });
            },
            editable: !isDefaultFunction(functionState.id),
            readOnly: isDefaultFunction(functionState.id)
          },
          void 0,
          false,
          {
            fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
            lineNumber: 202,
            columnNumber: 13
          },
          this
        ),
        error && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-red-400 text-sm", children: error }, void 0, false, {
          fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
          lineNumber: 218,
          columnNumber: 23
        }, this),
        !error && isDefaultFunction(functionState.id) && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xs text-stone-500", children: `This is a default function. You can't edit it.
                  You can clone it to create a new function.` }, void 0, false, {
          fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
          lineNumber: 220,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
        lineNumber: 201,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
      lineNumber: 158,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
      lineNumber: 157,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "@/components/function/DefaultFunctionDetailPanel.tsx",
    lineNumber: 123,
    columnNumber: 5
  }, this);
}

// @/components/function/LlmFunctionDetailPanel.tsx
var import_react4 = __toESM(require_react(), 1);
var import_remix_themes2 = __toESM(require_build(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
function LLMFunctionDetailPanel({
  id,
  showMenuButton = true
}) {
  const { data: functionData } = useFunction(id);
  const { mutateAsync: callUpdate } = useUpdateLlmFunction();
  const [state, setState] = (0, import_react4.useState)({
    id,
    functionName: functionData?.type === "llm" ? functionData?.functionName : "",
    functionBody: functionData?.type === "llm" ? functionData?.functionBody : "",
    description: functionData?.type === "llm" ? functionData?.description : "",
    resourceId: functionData?.type === "llm" ? functionData?.resourceId : "",
    messages: functionData?.type === "llm" ? functionData?.messages : [],
    model: functionData?.type === "llm" ? functionData?.model : "",
    args: functionData?.type === "llm" ? functionData?.args ?? "" : "",
    prompt: null
  });
  const [outputPathStr, setOutputPathStr] = (0, import_react4.useState)(
    functionData?.type === "llm" && functionData?.outputPath ? functionData.outputPath.join(",") : null
  );
  (0, import_react4.useEffect)(() => {
    if (functionData && functionData.type === "llm") {
      setState({
        id: functionData.id,
        functionName: functionData.functionName,
        functionBody: functionData.functionBody,
        description: functionData.description,
        resourceId: functionData.resourceId,
        messages: functionData.messages,
        model: functionData.model,
        args: functionData.args ?? "",
        prompt: functionData.prompt,
        outputPath: functionData.outputPath
      });
      setOutputPathStr(functionData.outputPath?.join(",") ?? "");
    }
  }, [functionData]);
  const [showSaved, setShowSaved] = (0, import_react4.useState)(false);
  const [resolvedTheme] = (0, import_remix_themes2.useTheme)();
  const [jsonError, setJsonError] = (0, import_react4.useState)(null);
  const createLlmFunction = useCreateLlmFunction();
  const deleteFunction = useDeleteFunction();
  const navigate = useNavigate();
  const isDefaultFunction = (0, import_react4.useCallback)(
    (id2) => DEFAULT_FUNCTIONS.some((func) => func.id === id2),
    []
  );
  const handleChange = (0, import_react4.useCallback)(
    async (updatedFields) => {
      let diffExists = false;
      Object.keys(updatedFields).forEach((key) => {
        const typedKey = key;
        if (updatedFields[typedKey] !== void 0) {
          if (JSON.stringify(updatedFields[typedKey]) !== JSON.stringify(state[typedKey])) {
            diffExists = true;
          }
        }
      });
      if (!diffExists) {
        return;
      }
      const updatedState = { ...state, ...updatedFields };
      setState(updatedState);
      await callUpdate({
        id: updatedState.id,
        functionName: updatedState.functionName,
        functionBody: updatedState.functionBody,
        description: updatedState.description,
        resourceId: updatedState.resourceId,
        messages: updatedState.messages,
        model: updatedState.model,
        prompt: null,
        args: updatedState.args,
        outputPath: updatedState.outputPath
      });
      setShowSaved(true);
    },
    [state, callUpdate]
  );
  const handleCopy = (0, import_react4.useCallback)(async () => {
    const createdFunction = await createLlmFunction.mutateAsync(state);
    navigate(`/function/${createdFunction.id}`);
  }, [createLlmFunction, state, navigate]);
  const handleDelete = (0, import_react4.useCallback)(async () => {
    await deleteFunction.mutateAsync(id);
    navigate(-1);
  }, [deleteFunction, id, navigate]);
  (0, import_react4.useEffect)(() => {
    if (showSaved) {
      const timeoutId = setTimeout(() => setShowSaved(false), 2e3);
      return () => clearTimeout(timeoutId);
    }
  }, [showSaved]);
  const allVariables = (0, import_react4.useMemo)(
    () => state.messages.flatMap(
      (message) => extractMustacheVariables(message.content)
    ),
    [state.messages]
  );
  const uniqueVariables = (0, import_react4.useMemo)(
    () => Array.from(new Set(allVariables)),
    [allVariables]
  );
  const handleJsonChange = (value) => {
    setState((prev) => ({ ...prev, args: value }));
    const { error } = validateJSON(value);
    setJsonError(error);
    if (error !== null) {
      handleChange({ args: value });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col w-full max-h-[100dvh] overflow-y-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "z-10 flex-shrink-0 sticky top-0 bg-white dark:bg-stone-950 flex w-full px-2 md:px-4 border-b border-stone-200 dark:border-stone-800 h-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex gap-1 items-center justify-between w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: `/function/${state.id}`, className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-xsm", children: [
        state.functionName,
        "-",
        state.id.slice(0, 6)
      ] }, void 0, true, {
        fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
        lineNumber: 183,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
        lineNumber: 182,
        columnNumber: 11
      }, this),
      showMenuButton && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DropdownMenu2, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DropdownMenuTrigger2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { variant: "ghost", size: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Ellipsis, { className: "h-4 w-4" }, void 0, false, {
          fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
          lineNumber: 191,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
          lineNumber: 190,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
          lineNumber: 189,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DropdownMenuContent2, { align: "end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DropdownMenuItem2, { onClick: handleCopy, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Copy, { size: 16 }, void 0, false, {
              fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
              lineNumber: 197,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Clone" }, void 0, false, {
              fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
              lineNumber: 198,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
            lineNumber: 196,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
            lineNumber: 195,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DropdownMenuItem2, { onClick: handleDelete, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Trash, { size: 16 }, void 0, false, {
              fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
              lineNumber: 203,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Delete" }, void 0, false, {
              fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
              lineNumber: 204,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
            lineNumber: 202,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
            lineNumber: 201,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
          lineNumber: 194,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
        lineNumber: 188,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
      lineNumber: 181,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
      lineNumber: 180,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "z-1 flex flex-col flex-shrink-0 w-full space-y-4 px-6 py-8 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-1 w-full max-w-screen-md overflow-y-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Badge, { className: "text-xs w-auto px-2 py-1", variant: "secondary", children: isDefaultFunction(state.id) ? "Default function" : "Custom function" }, void 0, false, {
        fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
        lineNumber: 215,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
        lineNumber: 214,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex w-full items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          Input,
          {
            className: cn(
              "w-full font-[500] text-xl border-none disabled:opacity-100 px-0"
            ),
            value: state.functionName,
            onChange: (e) => handleChange({ functionName: e.target.value }),
            disabled: isDefaultFunction(state.id)
          },
          void 0,
          false,
          {
            fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
            lineNumber: 223,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: showSaved && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-xs text-stone-500", children: "Saved" }, void 0, false, {
          fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
          lineNumber: 232,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
          lineNumber: 231,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
        lineNumber: 222,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        AutoResizeTextarea,
        {
          className: "text-sm border-none disabled:opacity-100 px-0",
          placeholder: "Add description...",
          value: state.description,
          onChange: (e) => {
            handleChange({
              description: e.target.value === "Add description..." ? "" : e.target.value
            });
          },
          disabled: isDefaultFunction(state.id),
          minRows: 1,
          maxRows: 10
        },
        void 0,
        false,
        {
          fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
          lineNumber: 235,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-between w-full gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-4 w-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label2, { children: "Resource" }, void 0, false, {
              fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
              lineNumber: 252,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              Select,
              {
                value: state.resourceId,
                onValueChange: (value) => handleChange({ resourceId: value }),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectValue, { placeholder: "Select a resource" }, void 0, false, {
                    fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
                    lineNumber: 258,
                    columnNumber: 21
                  }, this) }, void 0, false, {
                    fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
                    lineNumber: 257,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectContent, { children: DEFAULT_RESOURCES.map((resource) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SelectItem, { value: resource.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                      "img",
                      {
                        src: resource.logoUrl,
                        alt: resource.name,
                        className: "w-4 h-4 object-contain"
                      },
                      void 0,
                      false,
                      {
                        fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
                        lineNumber: 264,
                        columnNumber: 27
                      },
                      this
                    ),
                    resource.name
                  ] }, void 0, true, {
                    fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
                    lineNumber: 263,
                    columnNumber: 25
                  }, this) }, resource.id, false, {
                    fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
                    lineNumber: 262,
                    columnNumber: 23
                  }, this)) }, void 0, false, {
                    fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
                    lineNumber: 260,
                    columnNumber: 19
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
                lineNumber: 253,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
            lineNumber: 251,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-4 w-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label2, { children: "Model" }, void 0, false, {
              fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
              lineNumber: 277,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              Input,
              {
                className: "w-full",
                type: "text",
                value: state.model,
                onChange: (e) => handleChange({ model: e.target.value })
              },
              void 0,
              false,
              {
                fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
                lineNumber: 278,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
            lineNumber: 276,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
          lineNumber: 250,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label2, { children: "Prompt" }, void 0, false, {
            fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
            lineNumber: 287,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-wrap gap-2 items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-xs", children: "Variables:" }, void 0, false, {
              fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
              lineNumber: 289,
              columnNumber: 17
            }, this),
            uniqueVariables.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-xs text-stone-500", children: "None" }, void 0, false, {
              fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
              lineNumber: 291,
              columnNumber: 19
            }, this) : uniqueVariables.map((variable) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              Badge,
              {
                variant: "secondary",
                className: "text-orange-500",
                children: variable
              },
              variable,
              false,
              {
                fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
                lineNumber: 294,
                columnNumber: 21
              },
              this
            ))
          ] }, void 0, true, {
            fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
            lineNumber: 288,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            PromptInput,
            {
              chatPromptProps: {
                value: state.messages,
                onChange: (value) => handleChange({ messages: value })
              }
            },
            void 0,
            false,
            {
              fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
              lineNumber: 304,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
          lineNumber: 286,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label2, { children: "Args" }, void 0, false, {
            fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
            lineNumber: 312,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            esm_default,
            {
              className: cn("w-full text-xs rounded-lg overflow-hidden"),
              theme: resolvedTheme === "dark" ? vscodeDark : vscodeLight,
              extensions: [json(), EditorView.lineWrapping],
              value: state.args,
              onChange: handleJsonChange
            },
            void 0,
            false,
            {
              fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
              lineNumber: 313,
              columnNumber: 15
            },
            this
          ),
          state.args !== "" && jsonError && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-red-500 text-xs", children: jsonError }, void 0, false, {
            fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
            lineNumber: 321,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
          lineNumber: 311,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label2, { children: "Output Path" }, void 0, false, {
            fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
            lineNumber: 325,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            ArrayInput,
            {
              readOnly: false,
              value: outputPathStr ?? "",
              onChange: (value) => setOutputPathStr(value),
              onArrayChange: (value) => handleChange({ outputPath: value })
            },
            void 0,
            false,
            {
              fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
              lineNumber: 326,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
          lineNumber: 324,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
        lineNumber: 249,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
      lineNumber: 213,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
      lineNumber: 212,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "@/components/function/LlmFunctionDetailPanel.tsx",
    lineNumber: 178,
    columnNumber: 5
  }, this);
}

// @/components/function/FunctionDetailPanel.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
"use client";
function FunctionDetailPanel({
  id,
  showMenuButton
}) {
  const { data: functionData } = useFunction(id);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    functionData?.type === "function" && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      DefaultFunctionDetailPanel,
      {
        id,
        showMenuButton
      },
      id,
      false,
      {
        fileName: "@/components/function/FunctionDetailPanel.tsx",
        lineNumber: 19,
        columnNumber: 9
      },
      this
    ),
    functionData?.type === "llm" && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      LLMFunctionDetailPanel,
      {
        id,
        showMenuButton
      },
      id,
      false,
      {
        fileName: "@/components/function/FunctionDetailPanel.tsx",
        lineNumber: 26,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "@/components/function/FunctionDetailPanel.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

export {
  DropdownMenu2 as DropdownMenu,
  DropdownMenuTrigger2 as DropdownMenuTrigger,
  DropdownMenuContent2 as DropdownMenuContent,
  DropdownMenuItem2 as DropdownMenuItem,
  DropdownMenuSeparator2 as DropdownMenuSeparator,
  FunctionDetailPanel,
  require_node
};
//# sourceMappingURL=/build/_shared/chunk-N3VVPNKS.js.map
