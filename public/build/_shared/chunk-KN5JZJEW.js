import {
  Close,
  Content,
  Description,
  Overlay,
  Portal2 as Portal,
  Primitive,
  Root,
  Title,
  Trigger,
  composeEventHandlers,
  createCollection,
  createContextScope,
  useCallbackRef,
  useControllableState,
  useDirection,
  useId
} from "/build/_shared/chunk-QLLD56SL.js";
import {
  X,
  useComposedRefs
} from "/build/_shared/chunk-GEIKSKTT.js";
import {
  cn
} from "/build/_shared/chunk-JF5W5KJ6.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-2WFCNDEW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-G5LS6WKY.js";
import {
  require_react
} from "/build/_shared/chunk-QPVUD6NO.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// @/components/ui/dialog.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
"use client";
var Dialog = Root;
var DialogTrigger = Trigger;
var DialogPortal = Portal;
var DialogClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  Close,
  {
    ref,
    className: cn(
      "absolute top-0 right-0 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-stone-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-stone-100 data-[state=open]:text-stone-500 dark:ring-offset-stone-950 dark:focus:ring-stone-300 dark:data-[state=open]:bg-stone-800 dark:data-[state=open]:text-stone-400",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
        fileName: "@/components/ui/dialog.tsx",
        lineNumber: 27,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Close" }, void 0, false, {
        fileName: "@/components/ui/dialog.tsx",
        lineNumber: 28,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  true,
  {
    fileName: "@/components/ui/dialog.tsx",
    lineNumber: 19,
    columnNumber: 3
  },
  this
));
DialogClose.displayName = Close.displayName;
var DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  Overlay,
  {
    ref,
    className: cn(
      "fixed max-h-[100dvh] inset-0 z-[1000] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/dialog.tsx",
    lineNumber: 37,
    columnNumber: 3
  },
  this
));
DialogOverlay.displayName = Overlay.displayName;
var DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay, {}, void 0, false, {
    fileName: "@/components/ui/dialog.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Content,
    {
      ref,
      className: cn(
        "fixed max-h-[100dvh] h-[95%] left-[50%] top-[50%] z-[1000] grid w-full max-w-screen-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-stone-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-stone-800 dark:bg-stone-950",
        className
      ),
      ...props,
      children
    },
    void 0,
    false,
    {
      fileName: "@/components/ui/dialog.tsx",
      lineNumber: 54,
      columnNumber: 5
    },
    this
  )
] }, void 0, true, {
  fileName: "@/components/ui/dialog.tsx",
  lineNumber: 52,
  columnNumber: 3
}, this));
DialogContent.displayName = Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/dialog.tsx",
    lineNumber: 72,
    columnNumber: 3
  },
  this
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/dialog.tsx",
    lineNumber: 86,
    columnNumber: 3
  },
  this
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/dialog.tsx",
    lineNumber: 100,
    columnNumber: 3
  },
  this
));
DialogTitle.displayName = Title.displayName;
var DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  Description,
  {
    ref,
    className: cn("text-sm text-stone-500 dark:text-stone-400", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/dialog.tsx",
    lineNumber: 115,
    columnNumber: 3
  },
  this
));
DialogDescription.displayName = Description.displayName;

// node_modules/.pnpm/@radix-ui+react-roving-focus@1.1.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3_c7p7fyahj7jvpuxrqgc7mv7csa/node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var React2 = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var GROUP_NAME = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = createCollection(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(
  GROUP_NAME,
  [createCollectionScope]
);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = React2.forwardRef(
  (props, forwardedRef) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Provider, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RovingFocusGroupImpl, { ...props, ref: forwardedRef }) }) });
  }
);
RovingFocusGroup.displayName = GROUP_NAME;
var RovingFocusGroupImpl = React2.forwardRef((props, forwardedRef) => {
  const {
    __scopeRovingFocusGroup,
    orientation,
    loop = false,
    dir,
    currentTabStopId: currentTabStopIdProp,
    defaultCurrentTabStopId,
    onCurrentTabStopIdChange,
    onEntryFocus,
    preventScrollOnEntryFocus = false,
    ...groupProps
  } = props;
  const ref = React2.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const direction = useDirection(dir);
  const [currentTabStopId = null, setCurrentTabStopId] = useControllableState({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId,
    onChange: onCurrentTabStopIdChange
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = React2.useState(false);
  const handleEntryFocus = useCallbackRef(onEntryFocus);
  const getItems = useCollection(__scopeRovingFocusGroup);
  const isClickFocusRef = React2.useRef(false);
  const [focusableItemsCount, setFocusableItemsCount] = React2.useState(0);
  React2.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
    }
  }, [handleEntryFocus]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    RovingFocusProvider,
    {
      scope: __scopeRovingFocusGroup,
      orientation,
      dir: direction,
      loop,
      currentTabStopId,
      onItemFocus: React2.useCallback(
        (tabStopId) => setCurrentTabStopId(tabStopId),
        [setCurrentTabStopId]
      ),
      onItemShiftTab: React2.useCallback(() => setIsTabbingBackOut(true), []),
      onFocusableItemAdd: React2.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount + 1),
        []
      ),
      onFocusableItemRemove: React2.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount - 1),
        []
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Primitive.div,
        {
          tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
          "data-orientation": orientation,
          ...groupProps,
          ref: composedRefs,
          style: { outline: "none", ...props.style },
          onMouseDown: composeEventHandlers(props.onMouseDown, () => {
            isClickFocusRef.current = true;
          }),
          onFocus: composeEventHandlers(props.onFocus, (event) => {
            const isKeyboardFocus = !isClickFocusRef.current;
            if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
              const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
              event.currentTarget.dispatchEvent(entryFocusEvent);
              if (!entryFocusEvent.defaultPrevented) {
                const items = getItems().filter((item) => item.focusable);
                const activeItem = items.find((item) => item.active);
                const currentItem = items.find((item) => item.id === currentTabStopId);
                const candidateItems = [activeItem, currentItem, ...items].filter(
                  Boolean
                );
                const candidateNodes = candidateItems.map((item) => item.ref.current);
                focusFirst(candidateNodes, preventScrollOnEntryFocus);
              }
            }
            isClickFocusRef.current = false;
          }),
          onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
        }
      )
    }
  );
});
var ITEM_NAME = "RovingFocusGroupItem";
var RovingFocusGroupItem = React2.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRovingFocusGroup,
      focusable = true,
      active = false,
      tabStopId,
      ...itemProps
    } = props;
    const autoId = useId();
    const id = tabStopId || autoId;
    const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = useCollection(__scopeRovingFocusGroup);
    const { onFocusableItemAdd, onFocusableItemRemove } = context;
    React2.useEffect(() => {
      if (focusable) {
        onFocusableItemAdd();
        return () => onFocusableItemRemove();
      }
    }, [focusable, onFocusableItemAdd, onFocusableItemRemove]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Collection.ItemSlot,
      {
        scope: __scopeRovingFocusGroup,
        id,
        focusable,
        active,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          Primitive.span,
          {
            tabIndex: isCurrentTabStop ? 0 : -1,
            "data-orientation": context.orientation,
            ...itemProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!focusable)
                event.preventDefault();
              else
                context.onItemFocus(id);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => context.onItemFocus(id)),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if (event.key === "Tab" && event.shiftKey) {
                context.onItemShiftTab();
                return;
              }
              if (event.target !== event.currentTarget)
                return;
              const focusIntent = getFocusIntent(event, context.orientation, context.dir);
              if (focusIntent !== void 0) {
                if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey)
                  return;
                event.preventDefault();
                const items = getItems().filter((item) => item.focusable);
                let candidateNodes = items.map((item) => item.ref.current);
                if (focusIntent === "last")
                  candidateNodes.reverse();
                else if (focusIntent === "prev" || focusIntent === "next") {
                  if (focusIntent === "prev")
                    candidateNodes.reverse();
                  const currentIndex = candidateNodes.indexOf(event.currentTarget);
                  candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                }
                setTimeout(() => focusFirst(candidateNodes));
              }
            })
          }
        )
      }
    );
  }
);
RovingFocusGroupItem.displayName = ITEM_NAME;
var MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function getDirectionAwareKey(key, dir) {
  if (dir !== "rtl")
    return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function getFocusIntent(event, orientation, dir) {
  const key = getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key))
    return void 0;
  if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key))
    return void 0;
  return MAP_KEY_TO_FOCUS_INTENT[key];
}
function focusFirst(candidates, preventScroll = false) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus({ preventScroll });
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
function wrapArray(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}
var Root2 = RovingFocusGroup;
var Item = RovingFocusGroupItem;

export {
  createRovingFocusGroupScope,
  Root2 as Root,
  Item,
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription
};
//# sourceMappingURL=/build/_shared/chunk-KN5JZJEW.js.map
