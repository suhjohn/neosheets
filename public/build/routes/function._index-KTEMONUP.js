import {
  FunctionListPanel
} from "/build/_shared/chunk-ZMGISGPB.js";
import "/build/_shared/chunk-KN5JZJEW.js";
import {
  ClientOnly,
  ClosedNavigation
} from "/build/_shared/chunk-QLLD56SL.js";
import "/build/_shared/chunk-GEIKSKTT.js";
import "/build/_shared/chunk-PL57PC3R.js";
import "/build/_shared/chunk-JF5W5KJ6.js";
import "/build/_shared/chunk-2WFCNDEW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-G5LS6WKY.js";
import "/build/_shared/chunk-PFYYXXJI.js";
import {
  createHotContext
} from "/build/_shared/chunk-F7C5E7EQ.js";
import "/build/_shared/chunk-MWML3QXM.js";
import "/build/_shared/chunk-2N23GYW7.js";
import "/build/_shared/chunk-QPVUD6NO.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// @/components/FunctionListPage.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
"use client";
function FunctionListPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-[100dvh] w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClosedNavigation, {}, void 0, false, {
      fileName: "@/components/FunctionListPage.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FunctionListPanel, {}, void 0, false, {
      fileName: "@/components/FunctionListPage.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "@/components/FunctionListPage.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/function._index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/function._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/function._index.tsx"
  );
  import.meta.hot.lastModified = "1728365768394.448";
}
function Function() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ClientOnly, { fallback: null, children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FunctionListPage, {}, void 0, false, {
    fileName: "app/routes/function._index.tsx",
    lineNumber: 30,
    columnNumber: 45
  }, this) }, void 0, false, {
    fileName: "app/routes/function._index.tsx",
    lineNumber: 30,
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
//# sourceMappingURL=/build/routes/function._index-KTEMONUP.js.map
