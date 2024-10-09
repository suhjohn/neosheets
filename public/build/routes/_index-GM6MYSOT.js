import {
  AlignJustify,
  Button,
  ChevronRight,
  CodeXml,
  Feather,
  Input,
  Lightbulb,
  Sparkles
} from "/build/_shared/chunk-GEIKSKTT.js";
import {
  cn
} from "/build/_shared/chunk-JF5W5KJ6.js";
import "/build/_shared/chunk-2WFCNDEW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-G5LS6WKY.js";
import {
  Link
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

// @/components/ui/card.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/card.tsx",
    lineNumber: 9,
    columnNumber: 3
  },
  this
));
Card.displayName = "Card";
var CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/card.tsx",
    lineNumber: 24,
    columnNumber: 3
  },
  this
));
CardHeader.displayName = "CardHeader";
var CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/card.tsx",
    lineNumber: 36,
    columnNumber: 3
  },
  this
));
CardTitle.displayName = "CardTitle";
var CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/card.tsx",
    lineNumber: 51,
    columnNumber: 3
  },
  this
));
CardDescription.displayName = "CardDescription";
var CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cn("p-6 pt-0", className), ...props }, void 0, false, {
  fileName: "@/components/ui/card.tsx",
  lineNumber: 63,
  columnNumber: 3
}, this));
CardContent.displayName = "CardContent";
var CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/card.tsx",
    lineNumber: 71,
    columnNumber: 3
  },
  this
));
CardFooter.displayName = "CardFooter";

// app/routes/_index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1728445307290.654";
}
var meta = () => {
  return [{
    title: "neosheets"
  }, {
    name: "description",
    content: "A new way to create spreadsheets"
  }];
};
function LandingPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "px-4 lg:px-6 h-14 flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: "flex items-center justify-center", to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-bold", children: "neosheets" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "ml-auto flex gap-4 sm:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: "text-sm font-medium hover:underline underline-offset-4", to: "#features", children: "Features" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: "text-sm font-medium hover:underline underline-offset-4", to: "#how-it-works", children: "How It Works" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: "text-sm font-medium hover:underline underline-offset-4", to: "#pricing", children: "Pricing" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "w-full py-12 md:py-24 lg:py-32 xl:py-48", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container px-4 md:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-center space-y-4 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none", children: "Transform Your Writing with neosheets" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 57,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400", children: "Craft powerful prompts using formulas. Elevate your writing process and unlock creativity like never before." }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 60,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 56,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { children: "Get Started" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 66,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { variant: "outline", children: "Learn More" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 67,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 65,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { id: "features", className: "w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container px-4 md:px-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12", children: "Key Features" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CodeXml, { className: "w-8 h-8 mb-2" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 80,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardTitle, { children: "Formula-Based Prompts" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 81,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 79,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContent, { children: "Create dynamic prompts using variables and functions, allowing for endless possibilities and customization." }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 83,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 78,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Lightbulb, { className: "w-8 h-8 mb-2" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 90,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardTitle, { children: "AI-Powered Suggestions" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 91,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 89,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContent, { children: "Get intelligent suggestions for improving your prompts based on your writing style and goals." }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 93,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 88,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlignJustify, { className: "w-8 h-8 mb-2" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 100,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardTitle, { children: "Template Library" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 101,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 99,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContent, { children: "Access a vast library of pre-made templates for various writing styles and genres." }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 103,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 98,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { id: "how-it-works", className: "w-full py-12 md:py-24 lg:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container px-4 md:px-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12", children: "How It Works" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 113,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded-full bg-primary text-primary-foreground p-3 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Feather, { className: "w-6 h-6" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 119,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 118,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-xl font-bold mb-2", children: "1. Create Your Formula" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 121,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Design your prompt formula using our intuitive interface and powerful syntax." }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 124,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 117,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded-full bg-primary text-primary-foreground p-3 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Sparkles, { className: "w-6 h-6" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 131,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 130,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-xl font-bold mb-2", children: "2. Generate Prompts" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 133,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Let FormulaPrompt generate unique and inspiring prompts based on your formula." }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 134,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 129,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded-full bg-primary text-primary-foreground p-3 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronRight, { className: "w-6 h-6" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 141,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 140,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-xl font-bold mb-2", children: "3. Start Writing" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 143,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Use the generated prompts to kickstart your writing process and boost creativity." }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 144,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 139,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 116,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { id: "pricing", className: "w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container px-4 md:px-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12", children: "Pricing Plans" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 154,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardTitle, { children: "Basic" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 160,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardDescription, { children: "For casual writers" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 161,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 159,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-4xl font-bold mb-2", children: "$9.99" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 164,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-sm text-gray-500 dark:text-gray-400 mb-4", children: "per month" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 165,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "space-y-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronRight, { className: "w-4 h-4 mr-2" }, void 0, false, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 170,
                    columnNumber: 23
                  }, this),
                  "100 prompts per month"
                ] }, void 0, true, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 169,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronRight, { className: "w-4 h-4 mr-2" }, void 0, false, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 174,
                    columnNumber: 23
                  }, this),
                  "Basic formula editor"
                ] }, void 0, true, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 173,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronRight, { className: "w-4 h-4 mr-2" }, void 0, false, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 178,
                    columnNumber: 23
                  }, this),
                  "Access to template library"
                ] }, void 0, true, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 177,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 168,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 163,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 158,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardTitle, { children: "Pro" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 186,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardDescription, { children: "For serious writers" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 187,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 185,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-4xl font-bold mb-2", children: "$24.99" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 190,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-sm text-gray-500 dark:text-gray-400 mb-4", children: "per month" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 191,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "space-y-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronRight, { className: "w-4 h-4 mr-2" }, void 0, false, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 196,
                    columnNumber: 23
                  }, this),
                  "Unlimited prompts"
                ] }, void 0, true, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 195,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronRight, { className: "w-4 h-4 mr-2" }, void 0, false, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 200,
                    columnNumber: 23
                  }, this),
                  "Advanced formula editor"
                ] }, void 0, true, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 199,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronRight, { className: "w-4 h-4 mr-2" }, void 0, false, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 204,
                    columnNumber: 23
                  }, this),
                  "AI-powered suggestions"
                ] }, void 0, true, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 203,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 194,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 189,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 184,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardTitle, { children: "Enterprise" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 212,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardDescription, { children: "For teams and organizations" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 213,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 211,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-4xl font-bold mb-2", children: "Custom" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 216,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-sm text-gray-500 dark:text-gray-400 mb-4", children: "Contact us for pricing" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 217,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "space-y-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronRight, { className: "w-4 h-4 mr-2" }, void 0, false, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 222,
                    columnNumber: 23
                  }, this),
                  "All Pro features"
                ] }, void 0, true, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 221,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronRight, { className: "w-4 h-4 mr-2" }, void 0, false, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 226,
                    columnNumber: 23
                  }, this),
                  "Dedicated support"
                ] }, void 0, true, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 225,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronRight, { className: "w-4 h-4 mr-2" }, void 0, false, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 230,
                    columnNumber: 23
                  }, this),
                  "Custom integrations"
                ] }, void 0, true, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 229,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 220,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 215,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 210,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 157,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 153,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 152,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "w-full py-12 md:py-24 lg:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container px-4 md:px-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12", children: "What Our Users Say" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 241,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContent, { className: "pt-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mb-4", children: '"FormulaPrompt has revolutionized my writing process. The formula-based approach allows me to generate unique prompts that I never would have thought of on my own."' }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 247,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-semibold", children: "- Sarah J., Novelist" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 252,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 246,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 245,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContent, { className: "pt-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mb-4", children: '"As a writing instructor, FormulaPrompt has become an invaluable tool in my classroom. It helps students think critically about prompt creation and sparks their creativity."' }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 257,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-semibold", children: "- Mark T., Writing Professor" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 263,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 256,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 255,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContent, { className: "pt-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mb-4", children: `"The AI-powered suggestions in FormulaPrompt have helped me refine my prompts and take my writing to the next level. It's like having a writing coach at my fingertips."` }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 268,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-semibold", children: "- Emily R., Freelance Writer" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 273,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 267,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 266,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 244,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 240,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 239,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container px-4 md:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-center space-y-4 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tighter sm:text-5xl", children: "Ready to Transform Your Writing?" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 283,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400", children: "Join thousands of writers who are already using FormulaPrompt to elevate their craft." }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 286,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 282,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full max-w-sm space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { className: "flex space-x-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { className: "max-w-lg flex-1", placeholder: "Enter your email", type: "email" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 293,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "submit", children: "Get Started" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 294,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 292,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Start your 14-day free trial. No credit card required." }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 296,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 291,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 281,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 280,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 279,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "\xA9 2024 FormulaPrompt. All rights reserved." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 305,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "sm:ml-auto flex gap-4 sm:gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: "text-xs hover:underline underline-offset-4", href: "#", children: "Terms of Service" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 309,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: "text-xs hover:underline underline-offset-4", href: "#", children: "Privacy" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 312,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 308,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 304,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_c = LandingPage;
var _c;
$RefreshReg$(_c, "LandingPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  LandingPage as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-GM6MYSOT.js.map
