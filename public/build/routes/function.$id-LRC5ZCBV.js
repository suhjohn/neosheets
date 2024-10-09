import {
  FunctionDetailPanel,
  require_node
} from "/build/_shared/chunk-N3VVPNKS.js";
import "/build/_shared/chunk-BGH6VZHG.js";
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
import {
  useParams
} from "/build/_shared/chunk-PFYYXXJI.js";
import {
  createHotContext
} from "/build/_shared/chunk-F7C5E7EQ.js";
import "/build/_shared/chunk-MWML3QXM.js";
import "/build/_shared/chunk-2N23GYW7.js";
import "/build/_shared/chunk-QPVUD6NO.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// @/components/FunctionDetailPage.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
"use client";
function FunctionDetailPage({ id }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[100dvh] flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClosedNavigation, {}, void 0, false, {
      fileName: "@/components/FunctionDetailPage.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FunctionListPanel, { selectedFunctionId: id }, void 0, false, {
      fileName: "@/components/FunctionDetailPage.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FunctionDetailPanel, { id }, void 0, false, {
      fileName: "@/components/FunctionDetailPage.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "@/components/FunctionDetailPage.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/function.$id.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/function.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/function.$id.tsx"
  );
  import.meta.hot.lastModified = "1728365768394.3499";
}
function Function() {
  _s();
  const {
    id
  } = useParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ClientOnly, { fallback: null, children: () => id ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FunctionDetailPage, { id }, void 0, false, {
    fileName: "app/routes/function.$id.tsx",
    lineNumber: 42,
    columnNumber: 19
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, {}, void 0, false, {
    fileName: "app/routes/function.$id.tsx",
    lineNumber: 42,
    columnNumber: 52
  }, this) }, void 0, false, {
    fileName: "app/routes/function.$id.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_s(Function, "yQgCIz/jJfqV1l9s2yoba81MT5A=", false, function() {
  return [useParams];
});
_c = Function;
var _c;
$RefreshReg$(_c, "Function");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Function as default
};
//# sourceMappingURL=/build/routes/function.$id-LRC5ZCBV.js.map
