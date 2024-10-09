import {
  useDeleteSecretKey,
  useSecretKeys,
  useUpsertSecretKey
} from "/build/_shared/chunk-QS53LNHJ.js";
import {
  ClientOnly,
  ClosedNavigation,
  z
} from "/build/_shared/chunk-QLLD56SL.js";
import {
  Button,
  Eye,
  EyeOff,
  Input
} from "/build/_shared/chunk-GEIKSKTT.js";
import "/build/_shared/chunk-PL57PC3R.js";
import {
  cn
} from "/build/_shared/chunk-JF5W5KJ6.js";
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
import {
  require_react
} from "/build/_shared/chunk-QPVUD6NO.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// @/lib/zod.ts
function generateFormFields(schema) {
  return Object.entries(schema.shape).map(([key, value]) => {
    let type = "text";
    if (value instanceof z.ZodNumber)
      type = "number";
    if (value instanceof z.ZodBoolean)
      type = "checkbox";
    return {
      name: key,
      type,
      label: key.charAt(0).toUpperCase() + key.slice(1),
      required: !value.isOptional()
    };
  });
}

// @/types/secret.ts
var SECRET_KEY_NAMES = [
  "OPENAI_API_KEY",
  "OPENAI_ORGANIZATION_ID",
  "ANTHROPIC_API_KEY",
  "GEMINI_API_KEY",
  "GROQ_API_KEY",
  "OPENROUTER_API_KEY",
  "TOGETHER_API_KEY",
  "AWS_ACCESS_KEY_ID",
  "AWS_SECRET_ACCESS_KEY",
  "AWS_SESSION_TOKEN",
  "AWS_REGION",
  "AZURE_API_KEY"
];
var SecretKeyName = z.enum(SECRET_KEY_NAMES);
var KnownSecretKeysSchema = z.object(
  SECRET_KEY_NAMES.reduce((acc, key) => {
    acc[key] = z.string().min(1, { message: `${key} cannot be empty` }).optional();
    return acc;
  }, {})
);
var SecretKeysSchema = z.object({
  id: z.string(),
  // Unique identifier for the secret keys entry
  body: KnownSecretKeysSchema.catchall(
    z.string().min(1, { message: "Secret key value cannot be empty" })
  )
});

// @/components/SecretsPage.tsx
var import_react2 = __toESM(require_react(), 1);

// @/components/PasswordInput.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var PasswordInput = ({
  rootClassName,
  className,
  ...rest
}) => {
  const [show, setShow] = (0, import_react.useState)(false);
  const type = show ? "text" : "password";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("relative", rootClassName), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { type, className: cn("pr-8", className), ...rest }, void 0, false, {
      fileName: "@/components/PasswordInput.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        type: "button",
        onClick: () => setShow((prev) => !prev),
        className: "absolute right-0 top-0 transform translate-y-1/2 px-2",
        children: show ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeOff, { size: 16 }, void 0, false, {
          fileName: "@/components/PasswordInput.tsx",
          lineNumber: 25,
          columnNumber: 17
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { size: 16 }, void 0, false, {
          fileName: "@/components/PasswordInput.tsx",
          lineNumber: 25,
          columnNumber: 40
        }, this)
      },
      void 0,
      false,
      {
        fileName: "@/components/PasswordInput.tsx",
        lineNumber: 20,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "@/components/PasswordInput.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
};

// @/components/SecretsPage.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var SecretsPage = () => {
  const { data } = useSecretKeys();
  const upsertSecretKey = useUpsertSecretKey();
  const deleteSecretKey = useDeleteSecretKey();
  const [newKey, setNewKey] = (0, import_react2.useState)("");
  const [newValue, setNewValue] = (0, import_react2.useState)("");
  const fields = generateFormFields(KnownSecretKeysSchema).sort(
    (a, b) => a.name.localeCompare(b.name)
  );
  const customFields = Object.keys(data?.body || {}).filter(
    (key) => !fields.map((field) => field.name).includes(key)
  );
  const handleChange = (fieldName, e) => {
    if (data === void 0)
      return;
    const value = e.target.value;
    upsertSecretKey.mutate({
      id: data.id,
      body: {
        ...data.body,
        [fieldName]: value
      }
    });
  };
  const handleAdd = async () => {
    if (data === void 0)
      return;
    await upsertSecretKey.mutateAsync({
      id: data.id,
      body: {
        ...data.body,
        [newKey]: newValue
      }
    });
    setNewKey("");
    setNewValue("");
  };
  const handleDelete = (field) => {
    if (data === void 0)
      return;
    deleteSecretKey.mutate(field);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-[100dvh] w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ClosedNavigation, {}, void 0, false, {
      fileName: "@/components/SecretsPage.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "div",
      {
        className: cn(
          "max-w-screen-lg",
          "flex-1",
          "p-4",
          "pt-16",
          "md:p-16",
          "gap-4",
          "flex",
          "flex-col",
          "overflow-y-auto"
        ),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-2xl", children: "Secrets" }, void 0, false, {
            fileName: "@/components/SecretsPage.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Secrets are values that you use in your functions to access external services. We define a set of standard secrets that are available to all functions. You can also define your own secrets." }, void 0, false, {
            fileName: "@/components/SecretsPage.tsx",
            lineNumber: 77,
            columnNumber: 13
          }, this),
          fields.map((field) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-7 gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { className: "col-span-3", value: field.label, disabled: true }, void 0, false, {
              fileName: "@/components/SecretsPage.tsx",
              lineNumber: 84,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              PasswordInput,
              {
                rootClassName: "col-span-3",
                type: "password",
                value: data?.body[field.name],
                onChange: (e) => {
                  handleChange(field.name, e);
                }
              },
              void 0,
              false,
              {
                fileName: "@/components/SecretsPage.tsx",
                lineNumber: 85,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              Button,
              {
                className: "col-span-1 h-full",
                variant: "ghost",
                disabled: true,
                children: "Delete"
              },
              void 0,
              false,
              {
                fileName: "@/components/SecretsPage.tsx",
                lineNumber: 93,
                columnNumber: 17
              },
              this
            )
          ] }, field.name, true, {
            fileName: "@/components/SecretsPage.tsx",
            lineNumber: 83,
            columnNumber: 15
          }, this)),
          customFields.map((field) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-7 gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { className: "col-span-3", value: field, disabled: true }, void 0, false, {
              fileName: "@/components/SecretsPage.tsx",
              lineNumber: 104,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              PasswordInput,
              {
                rootClassName: "col-span-3",
                type: "password",
                value: data?.body[field],
                onChange: (e) => {
                  handleChange(field, e);
                }
              },
              void 0,
              false,
              {
                fileName: "@/components/SecretsPage.tsx",
                lineNumber: 105,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              Button,
              {
                className: "col-span-1 h-full",
                variant: "destructive",
                onClick: () => {
                  handleDelete(field);
                },
                children: "Delete"
              },
              void 0,
              false,
              {
                fileName: "@/components/SecretsPage.tsx",
                lineNumber: 113,
                columnNumber: 17
              },
              this
            )
          ] }, field, true, {
            fileName: "@/components/SecretsPage.tsx",
            lineNumber: 103,
            columnNumber: 15
          }, this)),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-7 gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              Input,
              {
                className: "col-span-3",
                placeholder: "VARIABLE_NAME",
                value: newKey,
                onChange: (e) => setNewKey(e.target.value)
              },
              void 0,
              false,
              {
                fileName: "@/components/SecretsPage.tsx",
                lineNumber: 125,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              PasswordInput,
              {
                rootClassName: "col-span-3",
                type: "password",
                className: "col-span-3",
                placeholder: "VALUE",
                value: newValue,
                onChange: (e) => setNewValue(e.target.value)
              },
              void 0,
              false,
              {
                fileName: "@/components/SecretsPage.tsx",
                lineNumber: 131,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              Button,
              {
                className: "col-span-1 h-full",
                variant: "secondary",
                onClick: handleAdd,
                children: "Add"
              },
              void 0,
              false,
              {
                fileName: "@/components/SecretsPage.tsx",
                lineNumber: 139,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "@/components/SecretsPage.tsx",
            lineNumber: 124,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "@/components/SecretsPage.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "@/components/SecretsPage.tsx",
        lineNumber: 62,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "@/components/SecretsPage.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "@/components/SecretsPage.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
};

// app/routes/secrets._index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/secrets._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/secrets._index.tsx"
  );
  import.meta.hot.lastModified = "1728365768394.5483";
}
function Function() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ClientOnly, { fallback: null, children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SecretsPage, {}, void 0, false, {
    fileName: "app/routes/secrets._index.tsx",
    lineNumber: 24,
    columnNumber: 45
  }, this) }, void 0, false, {
    fileName: "app/routes/secrets._index.tsx",
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
//# sourceMappingURL=/build/routes/secrets._index-B7RRCTVU.js.map
