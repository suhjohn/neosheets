import {
  QueryClient,
  QueryClientProvider,
  require_build
} from "/build/_shared/chunk-PL57PC3R.js";
import {
  cn
} from "/build/_shared/chunk-JF5W5KJ6.js";
import "/build/_shared/chunk-2WFCNDEW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-G5LS6WKY.js";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// empty-module:./sessions.server
var require_sessions = __commonJS({
  "empty-module:./sessions.server"(exports, module) {
    module.exports = {};
  }
});

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = "/build/css-bundle-Z2NAYQ2X.css";

// app/root.tsx
var import_react2 = __toESM(require_react(), 1);
var import_remix_themes = __toESM(require_build(), 1);

// app/globals.css?url
var globals_default = "/build/_assets/globals-RDZGTGK3.css?url";

// app/root.tsx
var import_sessions = __toESM(require_sessions(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: cssBundleHref
}, {
  rel: "stylesheet",
  href: globals_default
}];
function AppWithProviders() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix_themes.ThemeProvider, { specifiedTheme: data.theme, themeAction: "/action/set-theme", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(App, {}, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 71,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 70,
    columnNumber: 10
  }, this);
}
_s(AppWithProviders, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c = AppWithProviders;
function App() {
  _s2();
  const [queryClient] = (0, import_react2.useState)(() => new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1e3
      }
    }
  }));
  const [theme] = (0, import_remix_themes.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", className: cn(theme), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", { src: "https://unpkg.com/typescript@latest/lib/typescript.js" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { className: "overscroll-none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 90,
    columnNumber: 10
  }, this);
}
_s2(App, "O+zQdxPB5QCWIgUuMJL+k4rC5Ts=", false, function() {
  return [import_remix_themes.useTheme];
});
_c2 = App;
var _c;
var _c2;
$RefreshReg$(_c, "AppWithProviders");
$RefreshReg$(_c2, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AppWithProviders as default,
  links
};
//# sourceMappingURL=/build/root-2YZL3TEF.js.map
