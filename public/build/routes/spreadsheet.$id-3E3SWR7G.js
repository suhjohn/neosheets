import {
  applyAction,
  getInverseAction,
  handleValueUpdate,
  initialState,
  updateSheet,
  useSpreadsheet,
  useUpdateSpreadsheet
} from "/build/_shared/chunk-M3HYQYO2.js";
import {
  useSecretKeys
} from "/build/_shared/chunk-QS53LNHJ.js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  FunctionDetailPanel,
  require_node
} from "/build/_shared/chunk-N3VVPNKS.js";
import "/build/_shared/chunk-BGH6VZHG.js";
import {
  DEFAULT_RESOURCES,
  FunctionListPanel,
  Label,
  Textarea,
  _extends,
  getRunFunction,
  useFunctions
} from "/build/_shared/chunk-ZMGISGPB.js";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Item,
  Root,
  createRovingFocusGroupScope
} from "/build/_shared/chunk-KN5JZJEW.js";
import {
  ClientOnly,
  DrawerNavigation,
  GenIcon,
  Presence,
  Primitive,
  RemoveScrollBar,
  TbCaretDownFilled,
  TbDownload,
  TbLambda,
  TbTextWrapColumn,
  ZodError,
  __assign,
  __rest,
  __spreadArray,
  composeEventHandlers,
  createContextScope,
  createSidecarMedium,
  exportSidecar,
  fullWidthClassName,
  hideOthers,
  localForageInstance,
  styleSingleton,
  useControllableState,
  useDirection,
  useMergeRefs,
  usePrevious,
  useSize,
  v4_default,
  z,
  zeroRightClassName
} from "/build/_shared/chunk-QLLD56SL.js";
import {
  Button,
  ChevronLeft,
  ChevronRight,
  Circle,
  Input,
  Loader,
  PanelLeft,
  Plus,
  Redo2,
  Search,
  Trash2,
  Undo2,
  cva,
  useComposedRefs
} from "/build/_shared/chunk-GEIKSKTT.js";
import {
  useMutation,
  useQuery,
  useQueryClient
} from "/build/_shared/chunk-PL57PC3R.js";
import {
  COLUMN_HEADER_HEIGHT,
  DEFAULT_CELL_BORDER_WIDTH,
  DEFAULT_CELL_HEIGHT,
  DEFAULT_CELL_PADDING,
  DEFAULT_COLUMN_WIDTH,
  DEFAULT_FONT_FAMILY,
  DEFAULT_FONT_SIZE,
  DEFAULT_LINE_HEIGHT,
  DEFAULT_ROW_COUNT,
  calculateTextHeight,
  cn,
  extractMustacheVariables,
  getCellsForRow,
  getSortedCellRange,
  getTextWidth
} from "/build/_shared/chunk-JF5W5KJ6.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-2WFCNDEW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-G5LS6WKY.js";
import {
  useParams,
  useSearchParams
} from "/build/_shared/chunk-PFYYXXJI.js";
import {
  createHotContext
} from "/build/_shared/chunk-F7C5E7EQ.js";
import "/build/_shared/chunk-MWML3QXM.js";
import {
  require_react_dom
} from "/build/_shared/chunk-2N23GYW7.js";
import {
  require_react
} from "/build/_shared/chunk-QPVUD6NO.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// node_modules/.pnpm/use-sync-external-store@1.2.2_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/.pnpm/use-sync-external-store@1.2.2_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React14 = require_react();
        var ReactSharedInternals = React14.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useState17 = React14.useState, useEffect11 = React14.useEffect, useLayoutEffect4 = React14.useLayoutEffect, useDebugValue2 = React14.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false;
        function useSyncExternalStore2(subscribe, getSnapshot, getServerSnapshot) {
          {
            if (!didWarnOld18Alpha) {
              if (React14.startTransition !== void 0) {
                didWarnOld18Alpha = true;
                error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
              }
            }
          }
          var value = getSnapshot();
          {
            if (!didWarnUncachedGetSnapshot) {
              var cachedValue = getSnapshot();
              if (!objectIs(value, cachedValue)) {
                error("The result of getSnapshot should be cached to avoid an infinite loop");
                didWarnUncachedGetSnapshot = true;
              }
            }
          }
          var _useState = useState17({
            inst: {
              value,
              getSnapshot
            }
          }), inst = _useState[0].inst, forceUpdate = _useState[1];
          useLayoutEffect4(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
          }, [subscribe, value, getSnapshot]);
          useEffect11(function() {
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
            var handleStoreChange = function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            };
            return subscribe(handleStoreChange);
          }, [subscribe]);
          useDebugValue2(value);
          return value;
        }
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          var prevValue = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(prevValue, nextValue);
          } catch (error2) {
            return true;
          }
        }
        function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
          return getSnapshot();
        }
        var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var isServerEnvironment = !canUseDOM;
        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore2;
        var useSyncExternalStore$2 = React14.useSyncExternalStore !== void 0 ? React14.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/.pnpm/use-sync-external-store@1.2.2_react@18.3.1/node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/.pnpm/use-sync-external-store@1.2.2_react@18.3.1/node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/.pnpm/use-sync-external-store@1.2.2_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "node_modules/.pnpm/use-sync-external-store@1.2.2_react@18.3.1/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React14 = require_react();
        var shim = require_shim();
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useSyncExternalStore2 = shim.useSyncExternalStore;
        var useRef11 = React14.useRef, useEffect11 = React14.useEffect, useMemo7 = React14.useMemo, useDebugValue2 = React14.useDebugValue;
        function useSyncExternalStoreWithSelector2(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
          var instRef = useRef11(null);
          var inst;
          if (instRef.current === null) {
            inst = {
              hasValue: false,
              value: null
            };
            instRef.current = inst;
          } else {
            inst = instRef.current;
          }
          var _useMemo = useMemo7(function() {
            var hasMemo = false;
            var memoizedSnapshot;
            var memoizedSelection;
            var memoizedSelector = function(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                var _nextSelection = selector(nextSnapshot);
                if (isEqual !== void 0) {
                  if (inst.hasValue) {
                    var currentSelection = inst.value;
                    if (isEqual(currentSelection, _nextSelection)) {
                      memoizedSelection = currentSelection;
                      return currentSelection;
                    }
                  }
                }
                memoizedSelection = _nextSelection;
                return _nextSelection;
              }
              var prevSnapshot = memoizedSnapshot;
              var prevSelection = memoizedSelection;
              if (objectIs(prevSnapshot, nextSnapshot)) {
                return prevSelection;
              }
              var nextSelection = selector(nextSnapshot);
              if (isEqual !== void 0 && isEqual(prevSelection, nextSelection)) {
                return prevSelection;
              }
              memoizedSnapshot = nextSnapshot;
              memoizedSelection = nextSelection;
              return nextSelection;
            };
            var maybeGetServerSnapshot = getServerSnapshot === void 0 ? null : getServerSnapshot;
            var getSnapshotWithSelector = function() {
              return memoizedSelector(getSnapshot());
            };
            var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? void 0 : function() {
              return memoizedSelector(maybeGetServerSnapshot());
            };
            return [getSnapshotWithSelector, getServerSnapshotWithSelector];
          }, [getSnapshot, getServerSnapshot, selector, isEqual]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];
          var value = useSyncExternalStore2(subscribe, getSelection, getServerSelection);
          useEffect11(function() {
            inst.hasValue = true;
            inst.value = value;
          }, [value]);
          useDebugValue2(value);
          return value;
        }
        exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/.pnpm/use-sync-external-store@1.2.2_react@18.3.1/node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "node_modules/.pnpm/use-sync-external-store@1.2.2_react@18.3.1/node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_with_selector_development();
    }
  }
});

// node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js
var require_lodash = __commonJS({
  "node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"(exports, module) {
    var FUNC_ERROR_TEXT = "Expected a function";
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var now = function() {
      return root.Date.now();
    };
    function debounce3(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
        return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = debounce3;
  }
});

// node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js"(exports, module) {
    "use strict";
    module.exports = function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf)
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString)
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a[key], b[key]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/core/output.js
var require_output = __commonJS({
  "node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/core/output.js"(exports, module) {
    "use strict";
    function OutputLine(parent) {
      this.__parent = parent;
      this.__character_count = 0;
      this.__indent_count = -1;
      this.__alignment_count = 0;
      this.__wrap_point_index = 0;
      this.__wrap_point_character_count = 0;
      this.__wrap_point_indent_count = -1;
      this.__wrap_point_alignment_count = 0;
      this.__items = [];
    }
    OutputLine.prototype.clone_empty = function() {
      var line = new OutputLine(this.__parent);
      line.set_indent(this.__indent_count, this.__alignment_count);
      return line;
    };
    OutputLine.prototype.item = function(index) {
      if (index < 0) {
        return this.__items[this.__items.length + index];
      } else {
        return this.__items[index];
      }
    };
    OutputLine.prototype.has_match = function(pattern) {
      for (var lastCheckedOutput = this.__items.length - 1; lastCheckedOutput >= 0; lastCheckedOutput--) {
        if (this.__items[lastCheckedOutput].match(pattern)) {
          return true;
        }
      }
      return false;
    };
    OutputLine.prototype.set_indent = function(indent, alignment) {
      if (this.is_empty()) {
        this.__indent_count = indent || 0;
        this.__alignment_count = alignment || 0;
        this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count);
      }
    };
    OutputLine.prototype._set_wrap_point = function() {
      if (this.__parent.wrap_line_length) {
        this.__wrap_point_index = this.__items.length;
        this.__wrap_point_character_count = this.__character_count;
        this.__wrap_point_indent_count = this.__parent.next_line.__indent_count;
        this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count;
      }
    };
    OutputLine.prototype._should_wrap = function() {
      return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count;
    };
    OutputLine.prototype._allow_wrap = function() {
      if (this._should_wrap()) {
        this.__parent.add_new_line();
        var next = this.__parent.current_line;
        next.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count);
        next.__items = this.__items.slice(this.__wrap_point_index);
        this.__items = this.__items.slice(0, this.__wrap_point_index);
        next.__character_count += this.__character_count - this.__wrap_point_character_count;
        this.__character_count = this.__wrap_point_character_count;
        if (next.__items[0] === " ") {
          next.__items.splice(0, 1);
          next.__character_count -= 1;
        }
        return true;
      }
      return false;
    };
    OutputLine.prototype.is_empty = function() {
      return this.__items.length === 0;
    };
    OutputLine.prototype.last = function() {
      if (!this.is_empty()) {
        return this.__items[this.__items.length - 1];
      } else {
        return null;
      }
    };
    OutputLine.prototype.push = function(item) {
      this.__items.push(item);
      var last_newline_index = item.lastIndexOf("\n");
      if (last_newline_index !== -1) {
        this.__character_count = item.length - last_newline_index;
      } else {
        this.__character_count += item.length;
      }
    };
    OutputLine.prototype.pop = function() {
      var item = null;
      if (!this.is_empty()) {
        item = this.__items.pop();
        this.__character_count -= item.length;
      }
      return item;
    };
    OutputLine.prototype._remove_indent = function() {
      if (this.__indent_count > 0) {
        this.__indent_count -= 1;
        this.__character_count -= this.__parent.indent_size;
      }
    };
    OutputLine.prototype._remove_wrap_indent = function() {
      if (this.__wrap_point_indent_count > 0) {
        this.__wrap_point_indent_count -= 1;
      }
    };
    OutputLine.prototype.trim = function() {
      while (this.last() === " ") {
        this.__items.pop();
        this.__character_count -= 1;
      }
    };
    OutputLine.prototype.toString = function() {
      var result = "";
      if (this.is_empty()) {
        if (this.__parent.indent_empty_lines) {
          result = this.__parent.get_indent_string(this.__indent_count);
        }
      } else {
        result = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count);
        result += this.__items.join("");
      }
      return result;
    };
    function IndentStringCache(options, baseIndentString) {
      this.__cache = [""];
      this.__indent_size = options.indent_size;
      this.__indent_string = options.indent_char;
      if (!options.indent_with_tabs) {
        this.__indent_string = new Array(options.indent_size + 1).join(options.indent_char);
      }
      baseIndentString = baseIndentString || "";
      if (options.indent_level > 0) {
        baseIndentString = new Array(options.indent_level + 1).join(this.__indent_string);
      }
      this.__base_string = baseIndentString;
      this.__base_string_length = baseIndentString.length;
    }
    IndentStringCache.prototype.get_indent_size = function(indent, column) {
      var result = this.__base_string_length;
      column = column || 0;
      if (indent < 0) {
        result = 0;
      }
      result += indent * this.__indent_size;
      result += column;
      return result;
    };
    IndentStringCache.prototype.get_indent_string = function(indent_level, column) {
      var result = this.__base_string;
      column = column || 0;
      if (indent_level < 0) {
        indent_level = 0;
        result = "";
      }
      column += indent_level * this.__indent_size;
      this.__ensure_cache(column);
      result += this.__cache[column];
      return result;
    };
    IndentStringCache.prototype.__ensure_cache = function(column) {
      while (column >= this.__cache.length) {
        this.__add_column();
      }
    };
    IndentStringCache.prototype.__add_column = function() {
      var column = this.__cache.length;
      var indent = 0;
      var result = "";
      if (this.__indent_size && column >= this.__indent_size) {
        indent = Math.floor(column / this.__indent_size);
        column -= indent * this.__indent_size;
        result = new Array(indent + 1).join(this.__indent_string);
      }
      if (column) {
        result += new Array(column + 1).join(" ");
      }
      this.__cache.push(result);
    };
    function Output(options, baseIndentString) {
      this.__indent_cache = new IndentStringCache(options, baseIndentString);
      this.raw = false;
      this._end_with_newline = options.end_with_newline;
      this.indent_size = options.indent_size;
      this.wrap_line_length = options.wrap_line_length;
      this.indent_empty_lines = options.indent_empty_lines;
      this.__lines = [];
      this.previous_line = null;
      this.current_line = null;
      this.next_line = new OutputLine(this);
      this.space_before_token = false;
      this.non_breaking_space = false;
      this.previous_token_wrapped = false;
      this.__add_outputline();
    }
    Output.prototype.__add_outputline = function() {
      this.previous_line = this.current_line;
      this.current_line = this.next_line.clone_empty();
      this.__lines.push(this.current_line);
    };
    Output.prototype.get_line_number = function() {
      return this.__lines.length;
    };
    Output.prototype.get_indent_string = function(indent, column) {
      return this.__indent_cache.get_indent_string(indent, column);
    };
    Output.prototype.get_indent_size = function(indent, column) {
      return this.__indent_cache.get_indent_size(indent, column);
    };
    Output.prototype.is_empty = function() {
      return !this.previous_line && this.current_line.is_empty();
    };
    Output.prototype.add_new_line = function(force_newline) {
      if (this.is_empty() || !force_newline && this.just_added_newline()) {
        return false;
      }
      if (!this.raw) {
        this.__add_outputline();
      }
      return true;
    };
    Output.prototype.get_code = function(eol) {
      this.trim(true);
      var last_item = this.current_line.pop();
      if (last_item) {
        if (last_item[last_item.length - 1] === "\n") {
          last_item = last_item.replace(/\n+$/g, "");
        }
        this.current_line.push(last_item);
      }
      if (this._end_with_newline) {
        this.__add_outputline();
      }
      var sweet_code = this.__lines.join("\n");
      if (eol !== "\n") {
        sweet_code = sweet_code.replace(/[\n]/g, eol);
      }
      return sweet_code;
    };
    Output.prototype.set_wrap_point = function() {
      this.current_line._set_wrap_point();
    };
    Output.prototype.set_indent = function(indent, alignment) {
      indent = indent || 0;
      alignment = alignment || 0;
      this.next_line.set_indent(indent, alignment);
      if (this.__lines.length > 1) {
        this.current_line.set_indent(indent, alignment);
        return true;
      }
      this.current_line.set_indent();
      return false;
    };
    Output.prototype.add_raw_token = function(token) {
      for (var x = 0; x < token.newlines; x++) {
        this.__add_outputline();
      }
      this.current_line.set_indent(-1);
      this.current_line.push(token.whitespace_before);
      this.current_line.push(token.text);
      this.space_before_token = false;
      this.non_breaking_space = false;
      this.previous_token_wrapped = false;
    };
    Output.prototype.add_token = function(printable_token) {
      this.__add_space_before_token();
      this.current_line.push(printable_token);
      this.space_before_token = false;
      this.non_breaking_space = false;
      this.previous_token_wrapped = this.current_line._allow_wrap();
    };
    Output.prototype.__add_space_before_token = function() {
      if (this.space_before_token && !this.just_added_newline()) {
        if (!this.non_breaking_space) {
          this.set_wrap_point();
        }
        this.current_line.push(" ");
      }
    };
    Output.prototype.remove_indent = function(index) {
      var output_length = this.__lines.length;
      while (index < output_length) {
        this.__lines[index]._remove_indent();
        index++;
      }
      this.current_line._remove_wrap_indent();
    };
    Output.prototype.trim = function(eat_newlines) {
      eat_newlines = eat_newlines === void 0 ? false : eat_newlines;
      this.current_line.trim();
      while (eat_newlines && this.__lines.length > 1 && this.current_line.is_empty()) {
        this.__lines.pop();
        this.current_line = this.__lines[this.__lines.length - 1];
        this.current_line.trim();
      }
      this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
    };
    Output.prototype.just_added_newline = function() {
      return this.current_line.is_empty();
    };
    Output.prototype.just_added_blankline = function() {
      return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty();
    };
    Output.prototype.ensure_empty_line_above = function(starts_with, ends_with) {
      var index = this.__lines.length - 2;
      while (index >= 0) {
        var potentialEmptyLine = this.__lines[index];
        if (potentialEmptyLine.is_empty()) {
          break;
        } else if (potentialEmptyLine.item(0).indexOf(starts_with) !== 0 && potentialEmptyLine.item(-1) !== ends_with) {
          this.__lines.splice(index + 1, 0, new OutputLine(this));
          this.previous_line = this.__lines[this.__lines.length - 2];
          break;
        }
        index--;
      }
    };
    module.exports.Output = Output;
  }
});

// node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/core/token.js
var require_token = __commonJS({
  "node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/core/token.js"(exports, module) {
    "use strict";
    function Token(type, text, newlines, whitespace_before) {
      this.type = type;
      this.text = text;
      this.comments_before = null;
      this.newlines = newlines || 0;
      this.whitespace_before = whitespace_before || "";
      this.parent = null;
      this.next = null;
      this.previous = null;
      this.opened = null;
      this.closed = null;
      this.directives = null;
    }
    module.exports.Token = Token;
  }
});

// node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/javascript/acorn.js
var require_acorn = __commonJS({
  "node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/javascript/acorn.js"(exports) {
    "use strict";
    var baseASCIIidentifierStartChars = "\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a";
    var baseASCIIidentifierChars = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a";
    var nonASCIIidentifierStartChars = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc";
    var nonASCIIidentifierChars = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f";
    var unicodeEscapeOrCodePoint = "\\\\u[0-9a-fA-F]{4}|\\\\u\\{[0-9a-fA-F]+\\}";
    var identifierStart = "(?:" + unicodeEscapeOrCodePoint + "|[" + baseASCIIidentifierStartChars + nonASCIIidentifierStartChars + "])";
    var identifierChars = "(?:" + unicodeEscapeOrCodePoint + "|[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "])*";
    exports.identifier = new RegExp(identifierStart + identifierChars, "g");
    exports.identifierStart = new RegExp(identifierStart);
    exports.identifierMatch = new RegExp("(?:" + unicodeEscapeOrCodePoint + "|[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "])+");
    exports.newline = /[\n\r\u2028\u2029]/;
    exports.lineBreak = new RegExp("\r\n|" + exports.newline.source);
    exports.allLineBreaks = new RegExp(exports.lineBreak.source, "g");
  }
});

// node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/core/options.js
var require_options = __commonJS({
  "node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/core/options.js"(exports, module) {
    "use strict";
    function Options(options, merge_child_field) {
      this.raw_options = _mergeOpts(options, merge_child_field);
      this.disabled = this._get_boolean("disabled");
      this.eol = this._get_characters("eol", "auto");
      this.end_with_newline = this._get_boolean("end_with_newline");
      this.indent_size = this._get_number("indent_size", 4);
      this.indent_char = this._get_characters("indent_char", " ");
      this.indent_level = this._get_number("indent_level");
      this.preserve_newlines = this._get_boolean("preserve_newlines", true);
      this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786);
      if (!this.preserve_newlines) {
        this.max_preserve_newlines = 0;
      }
      this.indent_with_tabs = this._get_boolean("indent_with_tabs", this.indent_char === "	");
      if (this.indent_with_tabs) {
        this.indent_char = "	";
        if (this.indent_size === 1) {
          this.indent_size = 4;
        }
      }
      this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char"));
      this.indent_empty_lines = this._get_boolean("indent_empty_lines");
      this.templating = this._get_selection_list("templating", ["auto", "none", "angular", "django", "erb", "handlebars", "php", "smarty"], ["auto"]);
    }
    Options.prototype._get_array = function(name, default_value) {
      var option_value = this.raw_options[name];
      var result = default_value || [];
      if (typeof option_value === "object") {
        if (option_value !== null && typeof option_value.concat === "function") {
          result = option_value.concat();
        }
      } else if (typeof option_value === "string") {
        result = option_value.split(/[^a-zA-Z0-9_\/\-]+/);
      }
      return result;
    };
    Options.prototype._get_boolean = function(name, default_value) {
      var option_value = this.raw_options[name];
      var result = option_value === void 0 ? !!default_value : !!option_value;
      return result;
    };
    Options.prototype._get_characters = function(name, default_value) {
      var option_value = this.raw_options[name];
      var result = default_value || "";
      if (typeof option_value === "string") {
        result = option_value.replace(/\\r/, "\r").replace(/\\n/, "\n").replace(/\\t/, "	");
      }
      return result;
    };
    Options.prototype._get_number = function(name, default_value) {
      var option_value = this.raw_options[name];
      default_value = parseInt(default_value, 10);
      if (isNaN(default_value)) {
        default_value = 0;
      }
      var result = parseInt(option_value, 10);
      if (isNaN(result)) {
        result = default_value;
      }
      return result;
    };
    Options.prototype._get_selection = function(name, selection_list, default_value) {
      var result = this._get_selection_list(name, selection_list, default_value);
      if (result.length !== 1) {
        throw new Error(
          "Invalid Option Value: The option '" + name + "' can only be one of the following values:\n" + selection_list + "\nYou passed in: '" + this.raw_options[name] + "'"
        );
      }
      return result[0];
    };
    Options.prototype._get_selection_list = function(name, selection_list, default_value) {
      if (!selection_list || selection_list.length === 0) {
        throw new Error("Selection list cannot be empty.");
      }
      default_value = default_value || [selection_list[0]];
      if (!this._is_valid_selection(default_value, selection_list)) {
        throw new Error("Invalid Default Value!");
      }
      var result = this._get_array(name, default_value);
      if (!this._is_valid_selection(result, selection_list)) {
        throw new Error(
          "Invalid Option Value: The option '" + name + "' can contain only the following values:\n" + selection_list + "\nYou passed in: '" + this.raw_options[name] + "'"
        );
      }
      return result;
    };
    Options.prototype._is_valid_selection = function(result, selection_list) {
      return result.length && selection_list.length && !result.some(function(item) {
        return selection_list.indexOf(item) === -1;
      });
    };
    function _mergeOpts(allOptions, childFieldName) {
      var finalOpts = {};
      allOptions = _normalizeOpts(allOptions);
      var name;
      for (name in allOptions) {
        if (name !== childFieldName) {
          finalOpts[name] = allOptions[name];
        }
      }
      if (childFieldName && allOptions[childFieldName]) {
        for (name in allOptions[childFieldName]) {
          finalOpts[name] = allOptions[childFieldName][name];
        }
      }
      return finalOpts;
    }
    function _normalizeOpts(options) {
      var convertedOpts = {};
      var key;
      for (key in options) {
        var newKey = key.replace(/-/g, "_");
        convertedOpts[newKey] = options[key];
      }
      return convertedOpts;
    }
    module.exports.Options = Options;
    module.exports.normalizeOpts = _normalizeOpts;
    module.exports.mergeOpts = _mergeOpts;
  }
});

// node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/javascript/options.js
var require_options2 = __commonJS({
  "node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/javascript/options.js"(exports, module) {
    "use strict";
    var BaseOptions = require_options().Options;
    var validPositionValues = ["before-newline", "after-newline", "preserve-newline"];
    function Options(options) {
      BaseOptions.call(this, options, "js");
      var raw_brace_style = this.raw_options.brace_style || null;
      if (raw_brace_style === "expand-strict") {
        this.raw_options.brace_style = "expand";
      } else if (raw_brace_style === "collapse-preserve-inline") {
        this.raw_options.brace_style = "collapse,preserve-inline";
      } else if (this.raw_options.braces_on_own_line !== void 0) {
        this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse";
      }
      var brace_style_split = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
      this.brace_preserve_inline = false;
      this.brace_style = "collapse";
      for (var bs = 0; bs < brace_style_split.length; bs++) {
        if (brace_style_split[bs] === "preserve-inline") {
          this.brace_preserve_inline = true;
        } else {
          this.brace_style = brace_style_split[bs];
        }
      }
      this.unindent_chained_methods = this._get_boolean("unindent_chained_methods");
      this.break_chained_methods = this._get_boolean("break_chained_methods");
      this.space_in_paren = this._get_boolean("space_in_paren");
      this.space_in_empty_paren = this._get_boolean("space_in_empty_paren");
      this.jslint_happy = this._get_boolean("jslint_happy");
      this.space_after_anon_function = this._get_boolean("space_after_anon_function");
      this.space_after_named_function = this._get_boolean("space_after_named_function");
      this.keep_array_indentation = this._get_boolean("keep_array_indentation");
      this.space_before_conditional = this._get_boolean("space_before_conditional", true);
      this.unescape_strings = this._get_boolean("unescape_strings");
      this.e4x = this._get_boolean("e4x");
      this.comma_first = this._get_boolean("comma_first");
      this.operator_position = this._get_selection("operator_position", validPositionValues);
      this.test_output_raw = this._get_boolean("test_output_raw");
      if (this.jslint_happy) {
        this.space_after_anon_function = true;
      }
    }
    Options.prototype = new BaseOptions();
    module.exports.Options = Options;
  }
});

// node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/core/inputscanner.js
var require_inputscanner = __commonJS({
  "node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/core/inputscanner.js"(exports, module) {
    "use strict";
    var regexp_has_sticky = RegExp.prototype.hasOwnProperty("sticky");
    function InputScanner(input_string) {
      this.__input = input_string || "";
      this.__input_length = this.__input.length;
      this.__position = 0;
    }
    InputScanner.prototype.restart = function() {
      this.__position = 0;
    };
    InputScanner.prototype.back = function() {
      if (this.__position > 0) {
        this.__position -= 1;
      }
    };
    InputScanner.prototype.hasNext = function() {
      return this.__position < this.__input_length;
    };
    InputScanner.prototype.next = function() {
      var val = null;
      if (this.hasNext()) {
        val = this.__input.charAt(this.__position);
        this.__position += 1;
      }
      return val;
    };
    InputScanner.prototype.peek = function(index) {
      var val = null;
      index = index || 0;
      index += this.__position;
      if (index >= 0 && index < this.__input_length) {
        val = this.__input.charAt(index);
      }
      return val;
    };
    InputScanner.prototype.__match = function(pattern, index) {
      pattern.lastIndex = index;
      var pattern_match = pattern.exec(this.__input);
      if (pattern_match && !(regexp_has_sticky && pattern.sticky)) {
        if (pattern_match.index !== index) {
          pattern_match = null;
        }
      }
      return pattern_match;
    };
    InputScanner.prototype.test = function(pattern, index) {
      index = index || 0;
      index += this.__position;
      if (index >= 0 && index < this.__input_length) {
        return !!this.__match(pattern, index);
      } else {
        return false;
      }
    };
    InputScanner.prototype.testChar = function(pattern, index) {
      var val = this.peek(index);
      pattern.lastIndex = 0;
      return val !== null && pattern.test(val);
    };
    InputScanner.prototype.match = function(pattern) {
      var pattern_match = this.__match(pattern, this.__position);
      if (pattern_match) {
        this.__position += pattern_match[0].length;
      } else {
        pattern_match = null;
      }
      return pattern_match;
    };
    InputScanner.prototype.read = function(starting_pattern, until_pattern, until_after) {
      var val = "";
      var match;
      if (starting_pattern) {
        match = this.match(starting_pattern);
        if (match) {
          val += match[0];
        }
      }
      if (until_pattern && (match || !starting_pattern)) {
        val += this.readUntil(until_pattern, until_after);
      }
      return val;
    };
    InputScanner.prototype.readUntil = function(pattern, until_after) {
      var val = "";
      var match_index = this.__position;
      pattern.lastIndex = this.__position;
      var pattern_match = pattern.exec(this.__input);
      if (pattern_match) {
        match_index = pattern_match.index;
        if (until_after) {
          match_index += pattern_match[0].length;
        }
      } else {
        match_index = this.__input_length;
      }
      val = this.__input.substring(this.__position, match_index);
      this.__position = match_index;
      return val;
    };
    InputScanner.prototype.readUntilAfter = function(pattern) {
      return this.readUntil(pattern, true);
    };
    InputScanner.prototype.get_regexp = function(pattern, match_from) {
      var result = null;
      var flags = "g";
      if (match_from && regexp_has_sticky) {
        flags = "y";
      }
      if (typeof pattern === "string" && pattern !== "") {
        result = new RegExp(pattern, flags);
      } else if (pattern) {
        result = new RegExp(pattern.source, flags);
      }
      return result;
    };
    InputScanner.prototype.get_literal_regexp = function(literal_string) {
      return RegExp(literal_string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
    };
    InputScanner.prototype.peekUntilAfter = function(pattern) {
      var start = this.__position;
      var val = this.readUntilAfter(pattern);
      this.__position = start;
      return val;
    };
    InputScanner.prototype.lookBack = function(testVal) {
      var start = this.__position - 1;
      return start >= testVal.length && this.__input.substring(start - testVal.length, start).toLowerCase() === testVal;
    };
    module.exports.InputScanner = InputScanner;
  }
});

// node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/core/tokenstream.js
var require_tokenstream = __commonJS({
  "node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/core/tokenstream.js"(exports, module) {
    "use strict";
    function TokenStream(parent_token) {
      this.__tokens = [];
      this.__tokens_length = this.__tokens.length;
      this.__position = 0;
      this.__parent_token = parent_token;
    }
    TokenStream.prototype.restart = function() {
      this.__position = 0;
    };
    TokenStream.prototype.isEmpty = function() {
      return this.__tokens_length === 0;
    };
    TokenStream.prototype.hasNext = function() {
      return this.__position < this.__tokens_length;
    };
    TokenStream.prototype.next = function() {
      var val = null;
      if (this.hasNext()) {
        val = this.__tokens[this.__position];
        this.__position += 1;
      }
      return val;
    };
    TokenStream.prototype.peek = function(index) {
      var val = null;
      index = index || 0;
      index += this.__position;
      if (index >= 0 && index < this.__tokens_length) {
        val = this.__tokens[index];
      }
      return val;
    };
    TokenStream.prototype.add = function(token) {
      if (this.__parent_token) {
        token.parent = this.__parent_token;
      }
      this.__tokens.push(token);
      this.__tokens_length += 1;
    };
    module.exports.TokenStream = TokenStream;
  }
});

// node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/core/pattern.js
var require_pattern = __commonJS({
  "node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/core/pattern.js"(exports, module) {
    "use strict";
    function Pattern(input_scanner, parent) {
      this._input = input_scanner;
      this._starting_pattern = null;
      this._match_pattern = null;
      this._until_pattern = null;
      this._until_after = false;
      if (parent) {
        this._starting_pattern = this._input.get_regexp(parent._starting_pattern, true);
        this._match_pattern = this._input.get_regexp(parent._match_pattern, true);
        this._until_pattern = this._input.get_regexp(parent._until_pattern);
        this._until_after = parent._until_after;
      }
    }
    Pattern.prototype.read = function() {
      var result = this._input.read(this._starting_pattern);
      if (!this._starting_pattern || result) {
        result += this._input.read(this._match_pattern, this._until_pattern, this._until_after);
      }
      return result;
    };
    Pattern.prototype.read_match = function() {
      return this._input.match(this._match_pattern);
    };
    Pattern.prototype.until_after = function(pattern) {
      var result = this._create();
      result._until_after = true;
      result._until_pattern = this._input.get_regexp(pattern);
      result._update();
      return result;
    };
    Pattern.prototype.until = function(pattern) {
      var result = this._create();
      result._until_after = false;
      result._until_pattern = this._input.get_regexp(pattern);
      result._update();
      return result;
    };
    Pattern.prototype.starting_with = function(pattern) {
      var result = this._create();
      result._starting_pattern = this._input.get_regexp(pattern, true);
      result._update();
      return result;
    };
    Pattern.prototype.matching = function(pattern) {
      var result = this._create();
      result._match_pattern = this._input.get_regexp(pattern, true);
      result._update();
      return result;
    };
    Pattern.prototype._create = function() {
      return new Pattern(this._input, this);
    };
    Pattern.prototype._update = function() {
    };
    module.exports.Pattern = Pattern;
  }
});

// node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/core/whitespacepattern.js
var require_whitespacepattern = __commonJS({
  "node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/core/whitespacepattern.js"(exports, module) {
    "use strict";
    var Pattern = require_pattern().Pattern;
    function WhitespacePattern(input_scanner, parent) {
      Pattern.call(this, input_scanner, parent);
      if (parent) {
        this._line_regexp = this._input.get_regexp(parent._line_regexp);
      } else {
        this.__set_whitespace_patterns("", "");
      }
      this.newline_count = 0;
      this.whitespace_before_token = "";
    }
    WhitespacePattern.prototype = new Pattern();
    WhitespacePattern.prototype.__set_whitespace_patterns = function(whitespace_chars, newline_chars) {
      whitespace_chars += "\\t ";
      newline_chars += "\\n\\r";
      this._match_pattern = this._input.get_regexp(
        "[" + whitespace_chars + newline_chars + "]+",
        true
      );
      this._newline_regexp = this._input.get_regexp(
        "\\r\\n|[" + newline_chars + "]"
      );
    };
    WhitespacePattern.prototype.read = function() {
      this.newline_count = 0;
      this.whitespace_before_token = "";
      var resulting_string = this._input.read(this._match_pattern);
      if (resulting_string === " ") {
        this.whitespace_before_token = " ";
      } else if (resulting_string) {
        var matches = this.__split(this._newline_regexp, resulting_string);
        this.newline_count = matches.length - 1;
        this.whitespace_before_token = matches[this.newline_count];
      }
      return resulting_string;
    };
    WhitespacePattern.prototype.matching = function(whitespace_chars, newline_chars) {
      var result = this._create();
      result.__set_whitespace_patterns(whitespace_chars, newline_chars);
      result._update();
      return result;
    };
    WhitespacePattern.prototype._create = function() {
      return new WhitespacePattern(this._input, this);
    };
    WhitespacePattern.prototype.__split = function(regexp, input_string) {
      regexp.lastIndex = 0;
      var start_index = 0;
      var result = [];
      var next_match = regexp.exec(input_string);
      while (next_match) {
        result.push(input_string.substring(start_index, next_match.index));
        start_index = next_match.index + next_match[0].length;
        next_match = regexp.exec(input_string);
      }
      if (start_index < input_string.length) {
        result.push(input_string.substring(start_index, input_string.length));
      } else {
        result.push("");
      }
      return result;
    };
    module.exports.WhitespacePattern = WhitespacePattern;
  }
});

// node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/core/tokenizer.js
var require_tokenizer = __commonJS({
  "node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/core/tokenizer.js"(exports, module) {
    "use strict";
    var InputScanner = require_inputscanner().InputScanner;
    var Token = require_token().Token;
    var TokenStream = require_tokenstream().TokenStream;
    var WhitespacePattern = require_whitespacepattern().WhitespacePattern;
    var TOKEN = {
      START: "TK_START",
      RAW: "TK_RAW",
      EOF: "TK_EOF"
    };
    var Tokenizer = function(input_string, options) {
      this._input = new InputScanner(input_string);
      this._options = options || {};
      this.__tokens = null;
      this._patterns = {};
      this._patterns.whitespace = new WhitespacePattern(this._input);
    };
    Tokenizer.prototype.tokenize = function() {
      this._input.restart();
      this.__tokens = new TokenStream();
      this._reset();
      var current;
      var previous = new Token(TOKEN.START, "");
      var open_token = null;
      var open_stack = [];
      var comments = new TokenStream();
      while (previous.type !== TOKEN.EOF) {
        current = this._get_next_token(previous, open_token);
        while (this._is_comment(current)) {
          comments.add(current);
          current = this._get_next_token(previous, open_token);
        }
        if (!comments.isEmpty()) {
          current.comments_before = comments;
          comments = new TokenStream();
        }
        current.parent = open_token;
        if (this._is_opening(current)) {
          open_stack.push(open_token);
          open_token = current;
        } else if (open_token && this._is_closing(current, open_token)) {
          current.opened = open_token;
          open_token.closed = current;
          open_token = open_stack.pop();
          current.parent = open_token;
        }
        current.previous = previous;
        previous.next = current;
        this.__tokens.add(current);
        previous = current;
      }
      return this.__tokens;
    };
    Tokenizer.prototype._is_first_token = function() {
      return this.__tokens.isEmpty();
    };
    Tokenizer.prototype._reset = function() {
    };
    Tokenizer.prototype._get_next_token = function(previous_token, open_token) {
      this._readWhitespace();
      var resulting_string = this._input.read(/.+/g);
      if (resulting_string) {
        return this._create_token(TOKEN.RAW, resulting_string);
      } else {
        return this._create_token(TOKEN.EOF, "");
      }
    };
    Tokenizer.prototype._is_comment = function(current_token) {
      return false;
    };
    Tokenizer.prototype._is_opening = function(current_token) {
      return false;
    };
    Tokenizer.prototype._is_closing = function(current_token, open_token) {
      return false;
    };
    Tokenizer.prototype._create_token = function(type, text) {
      var token = new Token(
        type,
        text,
        this._patterns.whitespace.newline_count,
        this._patterns.whitespace.whitespace_before_token
      );
      return token;
    };
    Tokenizer.prototype._readWhitespace = function() {
      return this._patterns.whitespace.read();
    };
    module.exports.Tokenizer = Tokenizer;
    module.exports.TOKEN = TOKEN;
  }
});

// node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/core/directives.js
var require_directives = __commonJS({
  "node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/core/directives.js"(exports, module) {
    "use strict";
    function Directives(start_block_pattern, end_block_pattern) {
      start_block_pattern = typeof start_block_pattern === "string" ? start_block_pattern : start_block_pattern.source;
      end_block_pattern = typeof end_block_pattern === "string" ? end_block_pattern : end_block_pattern.source;
      this.__directives_block_pattern = new RegExp(start_block_pattern + / beautify( \w+[:]\w+)+ /.source + end_block_pattern, "g");
      this.__directive_pattern = / (\w+)[:](\w+)/g;
      this.__directives_end_ignore_pattern = new RegExp(start_block_pattern + /\sbeautify\signore:end\s/.source + end_block_pattern, "g");
    }
    Directives.prototype.get_directives = function(text) {
      if (!text.match(this.__directives_block_pattern)) {
        return null;
      }
      var directives = {};
      this.__directive_pattern.lastIndex = 0;
      var directive_match = this.__directive_pattern.exec(text);
      while (directive_match) {
        directives[directive_match[1]] = directive_match[2];
        directive_match = this.__directive_pattern.exec(text);
      }
      return directives;
    };
    Directives.prototype.readIgnored = function(input) {
      return input.readUntilAfter(this.__directives_end_ignore_pattern);
    };
    module.exports.Directives = Directives;
  }
});

// node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/core/templatablepattern.js
var require_templatablepattern = __commonJS({
  "node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/core/templatablepattern.js"(exports, module) {
    "use strict";
    var Pattern = require_pattern().Pattern;
    var template_names = {
      django: false,
      erb: false,
      handlebars: false,
      php: false,
      smarty: false,
      angular: false
    };
    function TemplatablePattern(input_scanner, parent) {
      Pattern.call(this, input_scanner, parent);
      this.__template_pattern = null;
      this._disabled = Object.assign({}, template_names);
      this._excluded = Object.assign({}, template_names);
      if (parent) {
        this.__template_pattern = this._input.get_regexp(parent.__template_pattern);
        this._excluded = Object.assign(this._excluded, parent._excluded);
        this._disabled = Object.assign(this._disabled, parent._disabled);
      }
      var pattern = new Pattern(input_scanner);
      this.__patterns = {
        handlebars_comment: pattern.starting_with(/{{!--/).until_after(/--}}/),
        handlebars_unescaped: pattern.starting_with(/{{{/).until_after(/}}}/),
        handlebars: pattern.starting_with(/{{/).until_after(/}}/),
        php: pattern.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
        erb: pattern.starting_with(/<%[^%]/).until_after(/[^%]%>/),
        // django coflicts with handlebars a bit.
        django: pattern.starting_with(/{%/).until_after(/%}/),
        django_value: pattern.starting_with(/{{/).until_after(/}}/),
        django_comment: pattern.starting_with(/{#/).until_after(/#}/),
        smarty: pattern.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
        smarty_comment: pattern.starting_with(/{\*/).until_after(/\*}/),
        smarty_literal: pattern.starting_with(/{literal}/).until_after(/{\/literal}/)
      };
    }
    TemplatablePattern.prototype = new Pattern();
    TemplatablePattern.prototype._create = function() {
      return new TemplatablePattern(this._input, this);
    };
    TemplatablePattern.prototype._update = function() {
      this.__set_templated_pattern();
    };
    TemplatablePattern.prototype.disable = function(language) {
      var result = this._create();
      result._disabled[language] = true;
      result._update();
      return result;
    };
    TemplatablePattern.prototype.read_options = function(options) {
      var result = this._create();
      for (var language in template_names) {
        result._disabled[language] = options.templating.indexOf(language) === -1;
      }
      result._update();
      return result;
    };
    TemplatablePattern.prototype.exclude = function(language) {
      var result = this._create();
      result._excluded[language] = true;
      result._update();
      return result;
    };
    TemplatablePattern.prototype.read = function() {
      var result = "";
      if (this._match_pattern) {
        result = this._input.read(this._starting_pattern);
      } else {
        result = this._input.read(this._starting_pattern, this.__template_pattern);
      }
      var next = this._read_template();
      while (next) {
        if (this._match_pattern) {
          next += this._input.read(this._match_pattern);
        } else {
          next += this._input.readUntil(this.__template_pattern);
        }
        result += next;
        next = this._read_template();
      }
      if (this._until_after) {
        result += this._input.readUntilAfter(this._until_pattern);
      }
      return result;
    };
    TemplatablePattern.prototype.__set_templated_pattern = function() {
      var items = [];
      if (!this._disabled.php) {
        items.push(this.__patterns.php._starting_pattern.source);
      }
      if (!this._disabled.handlebars) {
        items.push(this.__patterns.handlebars._starting_pattern.source);
      }
      if (!this._disabled.erb) {
        items.push(this.__patterns.erb._starting_pattern.source);
      }
      if (!this._disabled.django) {
        items.push(this.__patterns.django._starting_pattern.source);
        items.push(this.__patterns.django_value._starting_pattern.source);
        items.push(this.__patterns.django_comment._starting_pattern.source);
      }
      if (!this._disabled.smarty) {
        items.push(this.__patterns.smarty._starting_pattern.source);
      }
      if (this._until_pattern) {
        items.push(this._until_pattern.source);
      }
      this.__template_pattern = this._input.get_regexp("(?:" + items.join("|") + ")");
    };
    TemplatablePattern.prototype._read_template = function() {
      var resulting_string = "";
      var c = this._input.peek();
      if (c === "<") {
        var peek1 = this._input.peek(1);
        if (!this._disabled.php && !this._excluded.php && peek1 === "?") {
          resulting_string = resulting_string || this.__patterns.php.read();
        }
        if (!this._disabled.erb && !this._excluded.erb && peek1 === "%") {
          resulting_string = resulting_string || this.__patterns.erb.read();
        }
      } else if (c === "{") {
        if (!this._disabled.handlebars && !this._excluded.handlebars) {
          resulting_string = resulting_string || this.__patterns.handlebars_comment.read();
          resulting_string = resulting_string || this.__patterns.handlebars_unescaped.read();
          resulting_string = resulting_string || this.__patterns.handlebars.read();
        }
        if (!this._disabled.django) {
          if (!this._excluded.django && !this._excluded.handlebars) {
            resulting_string = resulting_string || this.__patterns.django_value.read();
          }
          if (!this._excluded.django) {
            resulting_string = resulting_string || this.__patterns.django_comment.read();
            resulting_string = resulting_string || this.__patterns.django.read();
          }
        }
        if (!this._disabled.smarty) {
          if (this._disabled.django && this._disabled.handlebars) {
            resulting_string = resulting_string || this.__patterns.smarty_comment.read();
            resulting_string = resulting_string || this.__patterns.smarty_literal.read();
            resulting_string = resulting_string || this.__patterns.smarty.read();
          }
        }
      }
      return resulting_string;
    };
    module.exports.TemplatablePattern = TemplatablePattern;
  }
});

// node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/javascript/tokenizer.js
var require_tokenizer2 = __commonJS({
  "node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/javascript/tokenizer.js"(exports, module) {
    "use strict";
    var InputScanner = require_inputscanner().InputScanner;
    var BaseTokenizer = require_tokenizer().Tokenizer;
    var BASETOKEN = require_tokenizer().TOKEN;
    var Directives = require_directives().Directives;
    var acorn = require_acorn();
    var Pattern = require_pattern().Pattern;
    var TemplatablePattern = require_templatablepattern().TemplatablePattern;
    function in_array(what, arr) {
      return arr.indexOf(what) !== -1;
    }
    var TOKEN = {
      START_EXPR: "TK_START_EXPR",
      END_EXPR: "TK_END_EXPR",
      START_BLOCK: "TK_START_BLOCK",
      END_BLOCK: "TK_END_BLOCK",
      WORD: "TK_WORD",
      RESERVED: "TK_RESERVED",
      SEMICOLON: "TK_SEMICOLON",
      STRING: "TK_STRING",
      EQUALS: "TK_EQUALS",
      OPERATOR: "TK_OPERATOR",
      COMMA: "TK_COMMA",
      BLOCK_COMMENT: "TK_BLOCK_COMMENT",
      COMMENT: "TK_COMMENT",
      DOT: "TK_DOT",
      UNKNOWN: "TK_UNKNOWN",
      START: BASETOKEN.START,
      RAW: BASETOKEN.RAW,
      EOF: BASETOKEN.EOF
    };
    var directives_core = new Directives(/\/\*/, /\*\//);
    var number_pattern = /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/;
    var digit = /[0-9]/;
    var dot_pattern = /[^\d\.]/;
    var positionable_operators = ">>> === !== &&= ??= ||= << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *".split(" ");
    var punct = ">>>= ... >>= <<= === >>> !== **= &&= ??= ||= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";
    punct = punct.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
    punct = "\\?\\.(?!\\d) " + punct;
    punct = punct.replace(/ /g, "|");
    var punct_pattern = new RegExp(punct);
    var line_starters = "continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(",");
    var reserved_words = line_starters.concat(["do", "in", "of", "else", "get", "set", "new", "catch", "finally", "typeof", "yield", "async", "await", "from", "as", "class", "extends"]);
    var reserved_word_pattern = new RegExp("^(?:" + reserved_words.join("|") + ")$");
    var in_html_comment;
    var Tokenizer = function(input_string, options) {
      BaseTokenizer.call(this, input_string, options);
      this._patterns.whitespace = this._patterns.whitespace.matching(
        /\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source,
        /\u2028\u2029/.source
      );
      var pattern_reader = new Pattern(this._input);
      var templatable = new TemplatablePattern(this._input).read_options(this._options);
      this.__patterns = {
        template: templatable,
        identifier: templatable.starting_with(acorn.identifier).matching(acorn.identifierMatch),
        number: pattern_reader.matching(number_pattern),
        punct: pattern_reader.matching(punct_pattern),
        // comment ends just before nearest linefeed or end of file
        comment: pattern_reader.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
        //  /* ... */ comment ends with nearest */ or end of file
        block_comment: pattern_reader.starting_with(/\/\*/).until_after(/\*\//),
        html_comment_start: pattern_reader.matching(/<!--/),
        html_comment_end: pattern_reader.matching(/-->/),
        include: pattern_reader.starting_with(/#include/).until_after(acorn.lineBreak),
        shebang: pattern_reader.starting_with(/#!/).until_after(acorn.lineBreak),
        xml: pattern_reader.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/),
        single_quote: templatable.until(/['\\\n\r\u2028\u2029]/),
        double_quote: templatable.until(/["\\\n\r\u2028\u2029]/),
        template_text: templatable.until(/[`\\$]/),
        template_expression: templatable.until(/[`}\\]/)
      };
    };
    Tokenizer.prototype = new BaseTokenizer();
    Tokenizer.prototype._is_comment = function(current_token) {
      return current_token.type === TOKEN.COMMENT || current_token.type === TOKEN.BLOCK_COMMENT || current_token.type === TOKEN.UNKNOWN;
    };
    Tokenizer.prototype._is_opening = function(current_token) {
      return current_token.type === TOKEN.START_BLOCK || current_token.type === TOKEN.START_EXPR;
    };
    Tokenizer.prototype._is_closing = function(current_token, open_token) {
      return (current_token.type === TOKEN.END_BLOCK || current_token.type === TOKEN.END_EXPR) && (open_token && (current_token.text === "]" && open_token.text === "[" || current_token.text === ")" && open_token.text === "(" || current_token.text === "}" && open_token.text === "{"));
    };
    Tokenizer.prototype._reset = function() {
      in_html_comment = false;
    };
    Tokenizer.prototype._get_next_token = function(previous_token, open_token) {
      var token = null;
      this._readWhitespace();
      var c = this._input.peek();
      if (c === null) {
        return this._create_token(TOKEN.EOF, "");
      }
      token = token || this._read_non_javascript(c);
      token = token || this._read_string(c);
      token = token || this._read_pair(c, this._input.peek(1));
      token = token || this._read_word(previous_token);
      token = token || this._read_singles(c);
      token = token || this._read_comment(c);
      token = token || this._read_regexp(c, previous_token);
      token = token || this._read_xml(c, previous_token);
      token = token || this._read_punctuation();
      token = token || this._create_token(TOKEN.UNKNOWN, this._input.next());
      return token;
    };
    Tokenizer.prototype._read_word = function(previous_token) {
      var resulting_string;
      resulting_string = this.__patterns.identifier.read();
      if (resulting_string !== "") {
        resulting_string = resulting_string.replace(acorn.allLineBreaks, "\n");
        if (!(previous_token.type === TOKEN.DOT || previous_token.type === TOKEN.RESERVED && (previous_token.text === "set" || previous_token.text === "get")) && reserved_word_pattern.test(resulting_string)) {
          if ((resulting_string === "in" || resulting_string === "of") && (previous_token.type === TOKEN.WORD || previous_token.type === TOKEN.STRING)) {
            return this._create_token(TOKEN.OPERATOR, resulting_string);
          }
          return this._create_token(TOKEN.RESERVED, resulting_string);
        }
        return this._create_token(TOKEN.WORD, resulting_string);
      }
      resulting_string = this.__patterns.number.read();
      if (resulting_string !== "") {
        return this._create_token(TOKEN.WORD, resulting_string);
      }
    };
    Tokenizer.prototype._read_singles = function(c) {
      var token = null;
      if (c === "(" || c === "[") {
        token = this._create_token(TOKEN.START_EXPR, c);
      } else if (c === ")" || c === "]") {
        token = this._create_token(TOKEN.END_EXPR, c);
      } else if (c === "{") {
        token = this._create_token(TOKEN.START_BLOCK, c);
      } else if (c === "}") {
        token = this._create_token(TOKEN.END_BLOCK, c);
      } else if (c === ";") {
        token = this._create_token(TOKEN.SEMICOLON, c);
      } else if (c === "." && dot_pattern.test(this._input.peek(1))) {
        token = this._create_token(TOKEN.DOT, c);
      } else if (c === ",") {
        token = this._create_token(TOKEN.COMMA, c);
      }
      if (token) {
        this._input.next();
      }
      return token;
    };
    Tokenizer.prototype._read_pair = function(c, d) {
      var token = null;
      if (c === "#" && d === "{") {
        token = this._create_token(TOKEN.START_BLOCK, c + d);
      }
      if (token) {
        this._input.next();
        this._input.next();
      }
      return token;
    };
    Tokenizer.prototype._read_punctuation = function() {
      var resulting_string = this.__patterns.punct.read();
      if (resulting_string !== "") {
        if (resulting_string === "=") {
          return this._create_token(TOKEN.EQUALS, resulting_string);
        } else if (resulting_string === "?.") {
          return this._create_token(TOKEN.DOT, resulting_string);
        } else {
          return this._create_token(TOKEN.OPERATOR, resulting_string);
        }
      }
    };
    Tokenizer.prototype._read_non_javascript = function(c) {
      var resulting_string = "";
      if (c === "#") {
        if (this._is_first_token()) {
          resulting_string = this.__patterns.shebang.read();
          if (resulting_string) {
            return this._create_token(TOKEN.UNKNOWN, resulting_string.trim() + "\n");
          }
        }
        resulting_string = this.__patterns.include.read();
        if (resulting_string) {
          return this._create_token(TOKEN.UNKNOWN, resulting_string.trim() + "\n");
        }
        c = this._input.next();
        var sharp = "#";
        if (this._input.hasNext() && this._input.testChar(digit)) {
          do {
            c = this._input.next();
            sharp += c;
          } while (this._input.hasNext() && c !== "#" && c !== "=");
          if (c === "#") {
          } else if (this._input.peek() === "[" && this._input.peek(1) === "]") {
            sharp += "[]";
            this._input.next();
            this._input.next();
          } else if (this._input.peek() === "{" && this._input.peek(1) === "}") {
            sharp += "{}";
            this._input.next();
            this._input.next();
          }
          return this._create_token(TOKEN.WORD, sharp);
        }
        this._input.back();
      } else if (c === "<" && this._is_first_token()) {
        resulting_string = this.__patterns.html_comment_start.read();
        if (resulting_string) {
          while (this._input.hasNext() && !this._input.testChar(acorn.newline)) {
            resulting_string += this._input.next();
          }
          in_html_comment = true;
          return this._create_token(TOKEN.COMMENT, resulting_string);
        }
      } else if (in_html_comment && c === "-") {
        resulting_string = this.__patterns.html_comment_end.read();
        if (resulting_string) {
          in_html_comment = false;
          return this._create_token(TOKEN.COMMENT, resulting_string);
        }
      }
      return null;
    };
    Tokenizer.prototype._read_comment = function(c) {
      var token = null;
      if (c === "/") {
        var comment = "";
        if (this._input.peek(1) === "*") {
          comment = this.__patterns.block_comment.read();
          var directives = directives_core.get_directives(comment);
          if (directives && directives.ignore === "start") {
            comment += directives_core.readIgnored(this._input);
          }
          comment = comment.replace(acorn.allLineBreaks, "\n");
          token = this._create_token(TOKEN.BLOCK_COMMENT, comment);
          token.directives = directives;
        } else if (this._input.peek(1) === "/") {
          comment = this.__patterns.comment.read();
          token = this._create_token(TOKEN.COMMENT, comment);
        }
      }
      return token;
    };
    Tokenizer.prototype._read_string = function(c) {
      if (c === "`" || c === "'" || c === '"') {
        var resulting_string = this._input.next();
        this.has_char_escapes = false;
        if (c === "`") {
          resulting_string += this._read_string_recursive("`", true, "${");
        } else {
          resulting_string += this._read_string_recursive(c);
        }
        if (this.has_char_escapes && this._options.unescape_strings) {
          resulting_string = unescape_string(resulting_string);
        }
        if (this._input.peek() === c) {
          resulting_string += this._input.next();
        }
        resulting_string = resulting_string.replace(acorn.allLineBreaks, "\n");
        return this._create_token(TOKEN.STRING, resulting_string);
      }
      return null;
    };
    Tokenizer.prototype._allow_regexp_or_xml = function(previous_token) {
      return previous_token.type === TOKEN.RESERVED && in_array(previous_token.text, ["return", "case", "throw", "else", "do", "typeof", "yield"]) || previous_token.type === TOKEN.END_EXPR && previous_token.text === ")" && previous_token.opened.previous.type === TOKEN.RESERVED && in_array(previous_token.opened.previous.text, ["if", "while", "for"]) || in_array(previous_token.type, [
        TOKEN.COMMENT,
        TOKEN.START_EXPR,
        TOKEN.START_BLOCK,
        TOKEN.START,
        TOKEN.END_BLOCK,
        TOKEN.OPERATOR,
        TOKEN.EQUALS,
        TOKEN.EOF,
        TOKEN.SEMICOLON,
        TOKEN.COMMA
      ]);
    };
    Tokenizer.prototype._read_regexp = function(c, previous_token) {
      if (c === "/" && this._allow_regexp_or_xml(previous_token)) {
        var resulting_string = this._input.next();
        var esc = false;
        var in_char_class = false;
        while (this._input.hasNext() && ((esc || in_char_class || this._input.peek() !== c) && !this._input.testChar(acorn.newline))) {
          resulting_string += this._input.peek();
          if (!esc) {
            esc = this._input.peek() === "\\";
            if (this._input.peek() === "[") {
              in_char_class = true;
            } else if (this._input.peek() === "]") {
              in_char_class = false;
            }
          } else {
            esc = false;
          }
          this._input.next();
        }
        if (this._input.peek() === c) {
          resulting_string += this._input.next();
          resulting_string += this._input.read(acorn.identifier);
        }
        return this._create_token(TOKEN.STRING, resulting_string);
      }
      return null;
    };
    Tokenizer.prototype._read_xml = function(c, previous_token) {
      if (this._options.e4x && c === "<" && this._allow_regexp_or_xml(previous_token)) {
        var xmlStr = "";
        var match = this.__patterns.xml.read_match();
        if (match) {
          var rootTag = match[2].replace(/^{\s+/, "{").replace(/\s+}$/, "}");
          var isCurlyRoot = rootTag.indexOf("{") === 0;
          var depth = 0;
          while (match) {
            var isEndTag = !!match[1];
            var tagName = match[2];
            var isSingletonTag = !!match[match.length - 1] || tagName.slice(0, 8) === "![CDATA[";
            if (!isSingletonTag && (tagName === rootTag || isCurlyRoot && tagName.replace(/^{\s+/, "{").replace(/\s+}$/, "}"))) {
              if (isEndTag) {
                --depth;
              } else {
                ++depth;
              }
            }
            xmlStr += match[0];
            if (depth <= 0) {
              break;
            }
            match = this.__patterns.xml.read_match();
          }
          if (!match) {
            xmlStr += this._input.match(/[\s\S]*/g)[0];
          }
          xmlStr = xmlStr.replace(acorn.allLineBreaks, "\n");
          return this._create_token(TOKEN.STRING, xmlStr);
        }
      }
      return null;
    };
    function unescape_string(s) {
      var out = "", escaped = 0;
      var input_scan = new InputScanner(s);
      var matched = null;
      while (input_scan.hasNext()) {
        matched = input_scan.match(/([\s]|[^\\]|\\\\)+/g);
        if (matched) {
          out += matched[0];
        }
        if (input_scan.peek() === "\\") {
          input_scan.next();
          if (input_scan.peek() === "x") {
            matched = input_scan.match(/x([0-9A-Fa-f]{2})/g);
          } else if (input_scan.peek() === "u") {
            matched = input_scan.match(/u([0-9A-Fa-f]{4})/g);
            if (!matched) {
              matched = input_scan.match(/u\{([0-9A-Fa-f]+)\}/g);
            }
          } else {
            out += "\\";
            if (input_scan.hasNext()) {
              out += input_scan.next();
            }
            continue;
          }
          if (!matched) {
            return s;
          }
          escaped = parseInt(matched[1], 16);
          if (escaped > 126 && escaped <= 255 && matched[0].indexOf("x") === 0) {
            return s;
          } else if (escaped >= 0 && escaped < 32) {
            out += "\\" + matched[0];
          } else if (escaped > 1114111) {
            out += "\\" + matched[0];
          } else if (escaped === 34 || escaped === 39 || escaped === 92) {
            out += "\\" + String.fromCharCode(escaped);
          } else {
            out += String.fromCharCode(escaped);
          }
        }
      }
      return out;
    }
    Tokenizer.prototype._read_string_recursive = function(delimiter, allow_unescaped_newlines, start_sub) {
      var current_char;
      var pattern;
      if (delimiter === "'") {
        pattern = this.__patterns.single_quote;
      } else if (delimiter === '"') {
        pattern = this.__patterns.double_quote;
      } else if (delimiter === "`") {
        pattern = this.__patterns.template_text;
      } else if (delimiter === "}") {
        pattern = this.__patterns.template_expression;
      }
      var resulting_string = pattern.read();
      var next = "";
      while (this._input.hasNext()) {
        next = this._input.next();
        if (next === delimiter || !allow_unescaped_newlines && acorn.newline.test(next)) {
          this._input.back();
          break;
        } else if (next === "\\" && this._input.hasNext()) {
          current_char = this._input.peek();
          if (current_char === "x" || current_char === "u") {
            this.has_char_escapes = true;
          } else if (current_char === "\r" && this._input.peek(1) === "\n") {
            this._input.next();
          }
          next += this._input.next();
        } else if (start_sub) {
          if (start_sub === "${" && next === "$" && this._input.peek() === "{") {
            next += this._input.next();
          }
          if (start_sub === next) {
            if (delimiter === "`") {
              next += this._read_string_recursive("}", allow_unescaped_newlines, "`");
            } else {
              next += this._read_string_recursive("`", allow_unescaped_newlines, "${");
            }
            if (this._input.hasNext()) {
              next += this._input.next();
            }
          }
        }
        next += pattern.read();
        resulting_string += next;
      }
      return resulting_string;
    };
    module.exports.Tokenizer = Tokenizer;
    module.exports.TOKEN = TOKEN;
    module.exports.positionable_operators = positionable_operators.slice();
    module.exports.line_starters = line_starters.slice();
  }
});

// node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/javascript/beautifier.js
var require_beautifier = __commonJS({
  "node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/javascript/beautifier.js"(exports, module) {
    "use strict";
    var Output = require_output().Output;
    var Token = require_token().Token;
    var acorn = require_acorn();
    var Options = require_options2().Options;
    var Tokenizer = require_tokenizer2().Tokenizer;
    var line_starters = require_tokenizer2().line_starters;
    var positionable_operators = require_tokenizer2().positionable_operators;
    var TOKEN = require_tokenizer2().TOKEN;
    function in_array(what, arr) {
      return arr.indexOf(what) !== -1;
    }
    function ltrim(s) {
      return s.replace(/^\s+/g, "");
    }
    function generateMapFromStrings(list) {
      var result = {};
      for (var x = 0; x < list.length; x++) {
        result[list[x].replace(/-/g, "_")] = list[x];
      }
      return result;
    }
    function reserved_word(token, word) {
      return token && token.type === TOKEN.RESERVED && token.text === word;
    }
    function reserved_array(token, words) {
      return token && token.type === TOKEN.RESERVED && in_array(token.text, words);
    }
    var special_words = ["case", "return", "do", "if", "throw", "else", "await", "break", "continue", "async"];
    var validPositionValues = ["before-newline", "after-newline", "preserve-newline"];
    var OPERATOR_POSITION = generateMapFromStrings(validPositionValues);
    var OPERATOR_POSITION_BEFORE_OR_PRESERVE = [OPERATOR_POSITION.before_newline, OPERATOR_POSITION.preserve_newline];
    var MODE = {
      BlockStatement: "BlockStatement",
      // 'BLOCK'
      Statement: "Statement",
      // 'STATEMENT'
      ObjectLiteral: "ObjectLiteral",
      // 'OBJECT',
      ArrayLiteral: "ArrayLiteral",
      //'[EXPRESSION]',
      ForInitializer: "ForInitializer",
      //'(FOR-EXPRESSION)',
      Conditional: "Conditional",
      //'(COND-EXPRESSION)',
      Expression: "Expression"
      //'(EXPRESSION)'
    };
    function remove_redundant_indentation(output, frame) {
      if (frame.multiline_frame || frame.mode === MODE.ForInitializer || frame.mode === MODE.Conditional) {
        return;
      }
      output.remove_indent(frame.start_line_index);
    }
    function split_linebreaks(s) {
      s = s.replace(acorn.allLineBreaks, "\n");
      var out = [], idx = s.indexOf("\n");
      while (idx !== -1) {
        out.push(s.substring(0, idx));
        s = s.substring(idx + 1);
        idx = s.indexOf("\n");
      }
      if (s.length) {
        out.push(s);
      }
      return out;
    }
    function is_array(mode) {
      return mode === MODE.ArrayLiteral;
    }
    function is_expression(mode) {
      return in_array(mode, [MODE.Expression, MODE.ForInitializer, MODE.Conditional]);
    }
    function all_lines_start_with(lines, c) {
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (line.charAt(0) !== c) {
          return false;
        }
      }
      return true;
    }
    function each_line_matches_indent(lines, indent) {
      var i = 0, len = lines.length, line;
      for (; i < len; i++) {
        line = lines[i];
        if (line && line.indexOf(indent) !== 0) {
          return false;
        }
      }
      return true;
    }
    function Beautifier(source_text, options) {
      options = options || {};
      this._source_text = source_text || "";
      this._output = null;
      this._tokens = null;
      this._last_last_text = null;
      this._flags = null;
      this._previous_flags = null;
      this._flag_store = null;
      this._options = new Options(options);
    }
    Beautifier.prototype.create_flags = function(flags_base, mode) {
      var next_indent_level = 0;
      if (flags_base) {
        next_indent_level = flags_base.indentation_level;
        if (!this._output.just_added_newline() && flags_base.line_indent_level > next_indent_level) {
          next_indent_level = flags_base.line_indent_level;
        }
      }
      var next_flags = {
        mode,
        parent: flags_base,
        last_token: flags_base ? flags_base.last_token : new Token(TOKEN.START_BLOCK, ""),
        // last token text
        last_word: flags_base ? flags_base.last_word : "",
        // last TOKEN.WORD passed
        declaration_statement: false,
        declaration_assignment: false,
        multiline_frame: false,
        inline_frame: false,
        if_block: false,
        else_block: false,
        class_start_block: false,
        // class A { INSIDE HERE } or class B extends C { INSIDE HERE }
        do_block: false,
        do_while: false,
        import_block: false,
        in_case_statement: false,
        // switch(..){ INSIDE HERE }
        in_case: false,
        // we're on the exact line with "case 0:"
        case_body: false,
        // the indented case-action block
        case_block: false,
        // the indented case-action block is wrapped with {}
        indentation_level: next_indent_level,
        alignment: 0,
        line_indent_level: flags_base ? flags_base.line_indent_level : next_indent_level,
        start_line_index: this._output.get_line_number(),
        ternary_depth: 0
      };
      return next_flags;
    };
    Beautifier.prototype._reset = function(source_text) {
      var baseIndentString = source_text.match(/^[\t ]*/)[0];
      this._last_last_text = "";
      this._output = new Output(this._options, baseIndentString);
      this._output.raw = this._options.test_output_raw;
      this._flag_store = [];
      this.set_mode(MODE.BlockStatement);
      var tokenizer = new Tokenizer(source_text, this._options);
      this._tokens = tokenizer.tokenize();
      return source_text;
    };
    Beautifier.prototype.beautify = function() {
      if (this._options.disabled) {
        return this._source_text;
      }
      var sweet_code;
      var source_text = this._reset(this._source_text);
      var eol = this._options.eol;
      if (this._options.eol === "auto") {
        eol = "\n";
        if (source_text && acorn.lineBreak.test(source_text || "")) {
          eol = source_text.match(acorn.lineBreak)[0];
        }
      }
      var current_token = this._tokens.next();
      while (current_token) {
        this.handle_token(current_token);
        this._last_last_text = this._flags.last_token.text;
        this._flags.last_token = current_token;
        current_token = this._tokens.next();
      }
      sweet_code = this._output.get_code(eol);
      return sweet_code;
    };
    Beautifier.prototype.handle_token = function(current_token, preserve_statement_flags) {
      if (current_token.type === TOKEN.START_EXPR) {
        this.handle_start_expr(current_token);
      } else if (current_token.type === TOKEN.END_EXPR) {
        this.handle_end_expr(current_token);
      } else if (current_token.type === TOKEN.START_BLOCK) {
        this.handle_start_block(current_token);
      } else if (current_token.type === TOKEN.END_BLOCK) {
        this.handle_end_block(current_token);
      } else if (current_token.type === TOKEN.WORD) {
        this.handle_word(current_token);
      } else if (current_token.type === TOKEN.RESERVED) {
        this.handle_word(current_token);
      } else if (current_token.type === TOKEN.SEMICOLON) {
        this.handle_semicolon(current_token);
      } else if (current_token.type === TOKEN.STRING) {
        this.handle_string(current_token);
      } else if (current_token.type === TOKEN.EQUALS) {
        this.handle_equals(current_token);
      } else if (current_token.type === TOKEN.OPERATOR) {
        this.handle_operator(current_token);
      } else if (current_token.type === TOKEN.COMMA) {
        this.handle_comma(current_token);
      } else if (current_token.type === TOKEN.BLOCK_COMMENT) {
        this.handle_block_comment(current_token, preserve_statement_flags);
      } else if (current_token.type === TOKEN.COMMENT) {
        this.handle_comment(current_token, preserve_statement_flags);
      } else if (current_token.type === TOKEN.DOT) {
        this.handle_dot(current_token);
      } else if (current_token.type === TOKEN.EOF) {
        this.handle_eof(current_token);
      } else if (current_token.type === TOKEN.UNKNOWN) {
        this.handle_unknown(current_token, preserve_statement_flags);
      } else {
        this.handle_unknown(current_token, preserve_statement_flags);
      }
    };
    Beautifier.prototype.handle_whitespace_and_comments = function(current_token, preserve_statement_flags) {
      var newlines = current_token.newlines;
      var keep_whitespace = this._options.keep_array_indentation && is_array(this._flags.mode);
      if (current_token.comments_before) {
        var comment_token = current_token.comments_before.next();
        while (comment_token) {
          this.handle_whitespace_and_comments(comment_token, preserve_statement_flags);
          this.handle_token(comment_token, preserve_statement_flags);
          comment_token = current_token.comments_before.next();
        }
      }
      if (keep_whitespace) {
        for (var i = 0; i < newlines; i += 1) {
          this.print_newline(i > 0, preserve_statement_flags);
        }
      } else {
        if (this._options.max_preserve_newlines && newlines > this._options.max_preserve_newlines) {
          newlines = this._options.max_preserve_newlines;
        }
        if (this._options.preserve_newlines) {
          if (newlines > 1) {
            this.print_newline(false, preserve_statement_flags);
            for (var j = 1; j < newlines; j += 1) {
              this.print_newline(true, preserve_statement_flags);
            }
          }
        }
      }
    };
    var newline_restricted_tokens = ["async", "break", "continue", "return", "throw", "yield"];
    Beautifier.prototype.allow_wrap_or_preserved_newline = function(current_token, force_linewrap) {
      force_linewrap = force_linewrap === void 0 ? false : force_linewrap;
      if (this._output.just_added_newline()) {
        return;
      }
      var shouldPreserveOrForce = this._options.preserve_newlines && current_token.newlines || force_linewrap;
      var operatorLogicApplies = in_array(this._flags.last_token.text, positionable_operators) || in_array(current_token.text, positionable_operators);
      if (operatorLogicApplies) {
        var shouldPrintOperatorNewline = in_array(this._flags.last_token.text, positionable_operators) && in_array(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE) || in_array(current_token.text, positionable_operators);
        shouldPreserveOrForce = shouldPreserveOrForce && shouldPrintOperatorNewline;
      }
      if (shouldPreserveOrForce) {
        this.print_newline(false, true);
      } else if (this._options.wrap_line_length) {
        if (reserved_array(this._flags.last_token, newline_restricted_tokens)) {
          return;
        }
        this._output.set_wrap_point();
      }
    };
    Beautifier.prototype.print_newline = function(force_newline, preserve_statement_flags) {
      if (!preserve_statement_flags) {
        if (this._flags.last_token.text !== ";" && this._flags.last_token.text !== "," && this._flags.last_token.text !== "=" && (this._flags.last_token.type !== TOKEN.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++")) {
          var next_token = this._tokens.peek();
          while (this._flags.mode === MODE.Statement && !(this._flags.if_block && reserved_word(next_token, "else")) && !this._flags.do_block) {
            this.restore_mode();
          }
        }
      }
      if (this._output.add_new_line(force_newline)) {
        this._flags.multiline_frame = true;
      }
    };
    Beautifier.prototype.print_token_line_indentation = function(current_token) {
      if (this._output.just_added_newline()) {
        if (this._options.keep_array_indentation && current_token.newlines && (current_token.text === "[" || is_array(this._flags.mode))) {
          this._output.current_line.set_indent(-1);
          this._output.current_line.push(current_token.whitespace_before);
          this._output.space_before_token = false;
        } else if (this._output.set_indent(this._flags.indentation_level, this._flags.alignment)) {
          this._flags.line_indent_level = this._flags.indentation_level;
        }
      }
    };
    Beautifier.prototype.print_token = function(current_token) {
      if (this._output.raw) {
        this._output.add_raw_token(current_token);
        return;
      }
      if (this._options.comma_first && current_token.previous && current_token.previous.type === TOKEN.COMMA && this._output.just_added_newline()) {
        if (this._output.previous_line.last() === ",") {
          var popped = this._output.previous_line.pop();
          if (this._output.previous_line.is_empty()) {
            this._output.previous_line.push(popped);
            this._output.trim(true);
            this._output.current_line.pop();
            this._output.trim();
          }
          this.print_token_line_indentation(current_token);
          this._output.add_token(",");
          this._output.space_before_token = true;
        }
      }
      this.print_token_line_indentation(current_token);
      this._output.non_breaking_space = true;
      this._output.add_token(current_token.text);
      if (this._output.previous_token_wrapped) {
        this._flags.multiline_frame = true;
      }
    };
    Beautifier.prototype.indent = function() {
      this._flags.indentation_level += 1;
      this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
    };
    Beautifier.prototype.deindent = function() {
      if (this._flags.indentation_level > 0 && (!this._flags.parent || this._flags.indentation_level > this._flags.parent.indentation_level)) {
        this._flags.indentation_level -= 1;
        this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
      }
    };
    Beautifier.prototype.set_mode = function(mode) {
      if (this._flags) {
        this._flag_store.push(this._flags);
        this._previous_flags = this._flags;
      } else {
        this._previous_flags = this.create_flags(null, mode);
      }
      this._flags = this.create_flags(this._previous_flags, mode);
      this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
    };
    Beautifier.prototype.restore_mode = function() {
      if (this._flag_store.length > 0) {
        this._previous_flags = this._flags;
        this._flags = this._flag_store.pop();
        if (this._previous_flags.mode === MODE.Statement) {
          remove_redundant_indentation(this._output, this._previous_flags);
        }
        this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
      }
    };
    Beautifier.prototype.start_of_object_property = function() {
      return this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || reserved_array(this._flags.last_token, ["get", "set"]));
    };
    Beautifier.prototype.start_of_statement = function(current_token) {
      var start = false;
      start = start || reserved_array(this._flags.last_token, ["var", "let", "const"]) && current_token.type === TOKEN.WORD;
      start = start || reserved_word(this._flags.last_token, "do");
      start = start || !(this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement) && reserved_array(this._flags.last_token, newline_restricted_tokens) && !current_token.newlines;
      start = start || reserved_word(this._flags.last_token, "else") && !(reserved_word(current_token, "if") && !current_token.comments_before);
      start = start || this._flags.last_token.type === TOKEN.END_EXPR && (this._previous_flags.mode === MODE.ForInitializer || this._previous_flags.mode === MODE.Conditional);
      start = start || this._flags.last_token.type === TOKEN.WORD && this._flags.mode === MODE.BlockStatement && !this._flags.in_case && !(current_token.text === "--" || current_token.text === "++") && this._last_last_text !== "function" && current_token.type !== TOKEN.WORD && current_token.type !== TOKEN.RESERVED;
      start = start || this._flags.mode === MODE.ObjectLiteral && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || reserved_array(this._flags.last_token, ["get", "set"]));
      if (start) {
        this.set_mode(MODE.Statement);
        this.indent();
        this.handle_whitespace_and_comments(current_token, true);
        if (!this.start_of_object_property()) {
          this.allow_wrap_or_preserved_newline(
            current_token,
            reserved_array(current_token, ["do", "for", "if", "while"])
          );
        }
        return true;
      }
      return false;
    };
    Beautifier.prototype.handle_start_expr = function(current_token) {
      if (!this.start_of_statement(current_token)) {
        this.handle_whitespace_and_comments(current_token);
      }
      var next_mode = MODE.Expression;
      if (current_token.text === "[") {
        if (this._flags.last_token.type === TOKEN.WORD || this._flags.last_token.text === ")") {
          if (reserved_array(this._flags.last_token, line_starters)) {
            this._output.space_before_token = true;
          }
          this.print_token(current_token);
          this.set_mode(next_mode);
          this.indent();
          if (this._options.space_in_paren) {
            this._output.space_before_token = true;
          }
          return;
        }
        next_mode = MODE.ArrayLiteral;
        if (is_array(this._flags.mode)) {
          if (this._flags.last_token.text === "[" || this._flags.last_token.text === "," && (this._last_last_text === "]" || this._last_last_text === "}")) {
            if (!this._options.keep_array_indentation) {
              this.print_newline();
            }
          }
        }
        if (!in_array(this._flags.last_token.type, [TOKEN.START_EXPR, TOKEN.END_EXPR, TOKEN.WORD, TOKEN.OPERATOR, TOKEN.DOT])) {
          this._output.space_before_token = true;
        }
      } else {
        if (this._flags.last_token.type === TOKEN.RESERVED) {
          if (this._flags.last_token.text === "for") {
            this._output.space_before_token = this._options.space_before_conditional;
            next_mode = MODE.ForInitializer;
          } else if (in_array(this._flags.last_token.text, ["if", "while", "switch"])) {
            this._output.space_before_token = this._options.space_before_conditional;
            next_mode = MODE.Conditional;
          } else if (in_array(this._flags.last_word, ["await", "async"])) {
            this._output.space_before_token = true;
          } else if (this._flags.last_token.text === "import" && current_token.whitespace_before === "") {
            this._output.space_before_token = false;
          } else if (in_array(this._flags.last_token.text, line_starters) || this._flags.last_token.text === "catch") {
            this._output.space_before_token = true;
          }
        } else if (this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
          if (!this.start_of_object_property()) {
            this.allow_wrap_or_preserved_newline(current_token);
          }
        } else if (this._flags.last_token.type === TOKEN.WORD) {
          this._output.space_before_token = false;
          var peek_back_two = this._tokens.peek(-3);
          if (this._options.space_after_named_function && peek_back_two) {
            var peek_back_three = this._tokens.peek(-4);
            if (reserved_array(peek_back_two, ["async", "function"]) || peek_back_two.text === "*" && reserved_array(peek_back_three, ["async", "function"])) {
              this._output.space_before_token = true;
            } else if (this._flags.mode === MODE.ObjectLiteral) {
              if (peek_back_two.text === "{" || peek_back_two.text === "," || peek_back_two.text === "*" && (peek_back_three.text === "{" || peek_back_three.text === ",")) {
                this._output.space_before_token = true;
              }
            } else if (this._flags.parent && this._flags.parent.class_start_block) {
              this._output.space_before_token = true;
            }
          }
        } else {
          this.allow_wrap_or_preserved_newline(current_token);
        }
        if (this._flags.last_token.type === TOKEN.RESERVED && (this._flags.last_word === "function" || this._flags.last_word === "typeof") || this._flags.last_token.text === "*" && (in_array(this._last_last_text, ["function", "yield"]) || this._flags.mode === MODE.ObjectLiteral && in_array(this._last_last_text, ["{", ","]))) {
          this._output.space_before_token = this._options.space_after_anon_function;
        }
      }
      if (this._flags.last_token.text === ";" || this._flags.last_token.type === TOKEN.START_BLOCK) {
        this.print_newline();
      } else if (this._flags.last_token.type === TOKEN.END_EXPR || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.END_BLOCK || this._flags.last_token.text === "." || this._flags.last_token.type === TOKEN.COMMA) {
        this.allow_wrap_or_preserved_newline(current_token, current_token.newlines);
      }
      this.print_token(current_token);
      this.set_mode(next_mode);
      if (this._options.space_in_paren) {
        this._output.space_before_token = true;
      }
      this.indent();
    };
    Beautifier.prototype.handle_end_expr = function(current_token) {
      while (this._flags.mode === MODE.Statement) {
        this.restore_mode();
      }
      this.handle_whitespace_and_comments(current_token);
      if (this._flags.multiline_frame) {
        this.allow_wrap_or_preserved_newline(
          current_token,
          current_token.text === "]" && is_array(this._flags.mode) && !this._options.keep_array_indentation
        );
      }
      if (this._options.space_in_paren) {
        if (this._flags.last_token.type === TOKEN.START_EXPR && !this._options.space_in_empty_paren) {
          this._output.trim();
          this._output.space_before_token = false;
        } else {
          this._output.space_before_token = true;
        }
      }
      this.deindent();
      this.print_token(current_token);
      this.restore_mode();
      remove_redundant_indentation(this._output, this._previous_flags);
      if (this._flags.do_while && this._previous_flags.mode === MODE.Conditional) {
        this._previous_flags.mode = MODE.Expression;
        this._flags.do_block = false;
        this._flags.do_while = false;
      }
    };
    Beautifier.prototype.handle_start_block = function(current_token) {
      this.handle_whitespace_and_comments(current_token);
      var next_token = this._tokens.peek();
      var second_token = this._tokens.peek(1);
      if (this._flags.last_word === "switch" && this._flags.last_token.type === TOKEN.END_EXPR) {
        this.set_mode(MODE.BlockStatement);
        this._flags.in_case_statement = true;
      } else if (this._flags.case_body) {
        this.set_mode(MODE.BlockStatement);
      } else if (second_token && (in_array(second_token.text, [":", ","]) && in_array(next_token.type, [TOKEN.STRING, TOKEN.WORD, TOKEN.RESERVED]) || in_array(next_token.text, ["get", "set", "..."]) && in_array(second_token.type, [TOKEN.WORD, TOKEN.RESERVED]))) {
        if (in_array(this._last_last_text, ["class", "interface"]) && !in_array(second_token.text, [":", ","])) {
          this.set_mode(MODE.BlockStatement);
        } else {
          this.set_mode(MODE.ObjectLiteral);
        }
      } else if (this._flags.last_token.type === TOKEN.OPERATOR && this._flags.last_token.text === "=>") {
        this.set_mode(MODE.BlockStatement);
      } else if (in_array(this._flags.last_token.type, [TOKEN.EQUALS, TOKEN.START_EXPR, TOKEN.COMMA, TOKEN.OPERATOR]) || reserved_array(this._flags.last_token, ["return", "throw", "import", "default"])) {
        this.set_mode(MODE.ObjectLiteral);
      } else {
        this.set_mode(MODE.BlockStatement);
      }
      if (this._flags.last_token) {
        if (reserved_array(this._flags.last_token.previous, ["class", "extends"])) {
          this._flags.class_start_block = true;
        }
      }
      var empty_braces = !next_token.comments_before && next_token.text === "}";
      var empty_anonymous_function = empty_braces && this._flags.last_word === "function" && this._flags.last_token.type === TOKEN.END_EXPR;
      if (this._options.brace_preserve_inline) {
        var index = 0;
        var check_token = null;
        this._flags.inline_frame = true;
        do {
          index += 1;
          check_token = this._tokens.peek(index - 1);
          if (check_token.newlines) {
            this._flags.inline_frame = false;
            break;
          }
        } while (check_token.type !== TOKEN.EOF && !(check_token.type === TOKEN.END_BLOCK && check_token.opened === current_token));
      }
      if ((this._options.brace_style === "expand" || this._options.brace_style === "none" && current_token.newlines) && !this._flags.inline_frame) {
        if (this._flags.last_token.type !== TOKEN.OPERATOR && (empty_anonymous_function || this._flags.last_token.type === TOKEN.EQUALS || reserved_array(this._flags.last_token, special_words) && this._flags.last_token.text !== "else")) {
          this._output.space_before_token = true;
        } else {
          this.print_newline(false, true);
        }
      } else {
        if (is_array(this._previous_flags.mode) && (this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.COMMA)) {
          if (this._flags.last_token.type === TOKEN.COMMA || this._options.space_in_paren) {
            this._output.space_before_token = true;
          }
          if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR && this._flags.inline_frame) {
            this.allow_wrap_or_preserved_newline(current_token);
            this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame;
            this._flags.multiline_frame = false;
          }
        }
        if (this._flags.last_token.type !== TOKEN.OPERATOR && this._flags.last_token.type !== TOKEN.START_EXPR) {
          if (in_array(this._flags.last_token.type, [TOKEN.START_BLOCK, TOKEN.SEMICOLON]) && !this._flags.inline_frame) {
            this.print_newline();
          } else {
            this._output.space_before_token = true;
          }
        }
      }
      this.print_token(current_token);
      this.indent();
      if (!empty_braces && !(this._options.brace_preserve_inline && this._flags.inline_frame)) {
        this.print_newline();
      }
    };
    Beautifier.prototype.handle_end_block = function(current_token) {
      this.handle_whitespace_and_comments(current_token);
      while (this._flags.mode === MODE.Statement) {
        this.restore_mode();
      }
      var empty_braces = this._flags.last_token.type === TOKEN.START_BLOCK;
      if (this._flags.inline_frame && !empty_braces) {
        this._output.space_before_token = true;
      } else if (this._options.brace_style === "expand") {
        if (!empty_braces) {
          this.print_newline();
        }
      } else {
        if (!empty_braces) {
          if (is_array(this._flags.mode) && this._options.keep_array_indentation) {
            this._options.keep_array_indentation = false;
            this.print_newline();
            this._options.keep_array_indentation = true;
          } else {
            this.print_newline();
          }
        }
      }
      this.restore_mode();
      this.print_token(current_token);
    };
    Beautifier.prototype.handle_word = function(current_token) {
      if (current_token.type === TOKEN.RESERVED) {
        if (in_array(current_token.text, ["set", "get"]) && this._flags.mode !== MODE.ObjectLiteral) {
          current_token.type = TOKEN.WORD;
        } else if (current_token.text === "import" && in_array(this._tokens.peek().text, ["(", "."])) {
          current_token.type = TOKEN.WORD;
        } else if (in_array(current_token.text, ["as", "from"]) && !this._flags.import_block) {
          current_token.type = TOKEN.WORD;
        } else if (this._flags.mode === MODE.ObjectLiteral) {
          var next_token = this._tokens.peek();
          if (next_token.text === ":") {
            current_token.type = TOKEN.WORD;
          }
        }
      }
      if (this.start_of_statement(current_token)) {
        if (reserved_array(this._flags.last_token, ["var", "let", "const"]) && current_token.type === TOKEN.WORD) {
          this._flags.declaration_statement = true;
        }
      } else if (current_token.newlines && !is_expression(this._flags.mode) && (this._flags.last_token.type !== TOKEN.OPERATOR || (this._flags.last_token.text === "--" || this._flags.last_token.text === "++")) && this._flags.last_token.type !== TOKEN.EQUALS && (this._options.preserve_newlines || !reserved_array(this._flags.last_token, ["var", "let", "const", "set", "get"]))) {
        this.handle_whitespace_and_comments(current_token);
        this.print_newline();
      } else {
        this.handle_whitespace_and_comments(current_token);
      }
      if (this._flags.do_block && !this._flags.do_while) {
        if (reserved_word(current_token, "while")) {
          this._output.space_before_token = true;
          this.print_token(current_token);
          this._output.space_before_token = true;
          this._flags.do_while = true;
          return;
        } else {
          this.print_newline();
          this._flags.do_block = false;
        }
      }
      if (this._flags.if_block) {
        if (!this._flags.else_block && reserved_word(current_token, "else")) {
          this._flags.else_block = true;
        } else {
          while (this._flags.mode === MODE.Statement) {
            this.restore_mode();
          }
          this._flags.if_block = false;
          this._flags.else_block = false;
        }
      }
      if (this._flags.in_case_statement && reserved_array(current_token, ["case", "default"])) {
        this.print_newline();
        if (!this._flags.case_block && (this._flags.case_body || this._options.jslint_happy)) {
          this.deindent();
        }
        this._flags.case_body = false;
        this.print_token(current_token);
        this._flags.in_case = true;
        return;
      }
      if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
        if (!this.start_of_object_property() && !// start of object property is different for numeric values with +/- prefix operators
        (in_array(this._flags.last_token.text, ["+", "-"]) && this._last_last_text === ":" && this._flags.parent.mode === MODE.ObjectLiteral)) {
          this.allow_wrap_or_preserved_newline(current_token);
        }
      }
      if (reserved_word(current_token, "function")) {
        if (in_array(this._flags.last_token.text, ["}", ";"]) || this._output.just_added_newline() && !(in_array(this._flags.last_token.text, ["(", "[", "{", ":", "=", ","]) || this._flags.last_token.type === TOKEN.OPERATOR)) {
          if (!this._output.just_added_blankline() && !current_token.comments_before) {
            this.print_newline();
            this.print_newline(true);
          }
        }
        if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD) {
          if (reserved_array(this._flags.last_token, ["get", "set", "new", "export"]) || reserved_array(this._flags.last_token, newline_restricted_tokens)) {
            this._output.space_before_token = true;
          } else if (reserved_word(this._flags.last_token, "default") && this._last_last_text === "export") {
            this._output.space_before_token = true;
          } else if (this._flags.last_token.text === "declare") {
            this._output.space_before_token = true;
          } else {
            this.print_newline();
          }
        } else if (this._flags.last_token.type === TOKEN.OPERATOR || this._flags.last_token.text === "=") {
          this._output.space_before_token = true;
        } else if (!this._flags.multiline_frame && (is_expression(this._flags.mode) || is_array(this._flags.mode))) {
        } else {
          this.print_newline();
        }
        this.print_token(current_token);
        this._flags.last_word = current_token.text;
        return;
      }
      var prefix = "NONE";
      if (this._flags.last_token.type === TOKEN.END_BLOCK) {
        if (this._previous_flags.inline_frame) {
          prefix = "SPACE";
        } else if (!reserved_array(current_token, ["else", "catch", "finally", "from"])) {
          prefix = "NEWLINE";
        } else {
          if (this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && current_token.newlines) {
            prefix = "NEWLINE";
          } else {
            prefix = "SPACE";
            this._output.space_before_token = true;
          }
        }
      } else if (this._flags.last_token.type === TOKEN.SEMICOLON && this._flags.mode === MODE.BlockStatement) {
        prefix = "NEWLINE";
      } else if (this._flags.last_token.type === TOKEN.SEMICOLON && is_expression(this._flags.mode)) {
        prefix = "SPACE";
      } else if (this._flags.last_token.type === TOKEN.STRING) {
        prefix = "NEWLINE";
      } else if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD || this._flags.last_token.text === "*" && (in_array(this._last_last_text, ["function", "yield"]) || this._flags.mode === MODE.ObjectLiteral && in_array(this._last_last_text, ["{", ","]))) {
        prefix = "SPACE";
      } else if (this._flags.last_token.type === TOKEN.START_BLOCK) {
        if (this._flags.inline_frame) {
          prefix = "SPACE";
        } else {
          prefix = "NEWLINE";
        }
      } else if (this._flags.last_token.type === TOKEN.END_EXPR) {
        this._output.space_before_token = true;
        prefix = "NEWLINE";
      }
      if (reserved_array(current_token, line_starters) && this._flags.last_token.text !== ")") {
        if (this._flags.inline_frame || this._flags.last_token.text === "else" || this._flags.last_token.text === "export") {
          prefix = "SPACE";
        } else {
          prefix = "NEWLINE";
        }
      }
      if (reserved_array(current_token, ["else", "catch", "finally"])) {
        if ((!(this._flags.last_token.type === TOKEN.END_BLOCK && this._previous_flags.mode === MODE.BlockStatement) || this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && current_token.newlines) && !this._flags.inline_frame) {
          this.print_newline();
        } else {
          this._output.trim(true);
          var line = this._output.current_line;
          if (line.last() !== "}") {
            this.print_newline();
          }
          this._output.space_before_token = true;
        }
      } else if (prefix === "NEWLINE") {
        if (reserved_array(this._flags.last_token, special_words)) {
          this._output.space_before_token = true;
        } else if (this._flags.last_token.text === "declare" && reserved_array(current_token, ["var", "let", "const"])) {
          this._output.space_before_token = true;
        } else if (this._flags.last_token.type !== TOKEN.END_EXPR) {
          if ((this._flags.last_token.type !== TOKEN.START_EXPR || !reserved_array(current_token, ["var", "let", "const"])) && this._flags.last_token.text !== ":") {
            if (reserved_word(current_token, "if") && reserved_word(current_token.previous, "else")) {
              this._output.space_before_token = true;
            } else {
              this.print_newline();
            }
          }
        } else if (reserved_array(current_token, line_starters) && this._flags.last_token.text !== ")") {
          this.print_newline();
        }
      } else if (this._flags.multiline_frame && is_array(this._flags.mode) && this._flags.last_token.text === "," && this._last_last_text === "}") {
        this.print_newline();
      } else if (prefix === "SPACE") {
        this._output.space_before_token = true;
      }
      if (current_token.previous && (current_token.previous.type === TOKEN.WORD || current_token.previous.type === TOKEN.RESERVED)) {
        this._output.space_before_token = true;
      }
      this.print_token(current_token);
      this._flags.last_word = current_token.text;
      if (current_token.type === TOKEN.RESERVED) {
        if (current_token.text === "do") {
          this._flags.do_block = true;
        } else if (current_token.text === "if") {
          this._flags.if_block = true;
        } else if (current_token.text === "import") {
          this._flags.import_block = true;
        } else if (this._flags.import_block && reserved_word(current_token, "from")) {
          this._flags.import_block = false;
        }
      }
    };
    Beautifier.prototype.handle_semicolon = function(current_token) {
      if (this.start_of_statement(current_token)) {
        this._output.space_before_token = false;
      } else {
        this.handle_whitespace_and_comments(current_token);
      }
      var next_token = this._tokens.peek();
      while (this._flags.mode === MODE.Statement && !(this._flags.if_block && reserved_word(next_token, "else")) && !this._flags.do_block) {
        this.restore_mode();
      }
      if (this._flags.import_block) {
        this._flags.import_block = false;
      }
      this.print_token(current_token);
    };
    Beautifier.prototype.handle_string = function(current_token) {
      if (current_token.text.startsWith("`") && current_token.newlines === 0 && current_token.whitespace_before === "" && (current_token.previous.text === ")" || this._flags.last_token.type === TOKEN.WORD)) {
      } else if (this.start_of_statement(current_token)) {
        this._output.space_before_token = true;
      } else {
        this.handle_whitespace_and_comments(current_token);
        if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD || this._flags.inline_frame) {
          this._output.space_before_token = true;
        } else if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
          if (!this.start_of_object_property()) {
            this.allow_wrap_or_preserved_newline(current_token);
          }
        } else if (current_token.text.startsWith("`") && this._flags.last_token.type === TOKEN.END_EXPR && (current_token.previous.text === "]" || current_token.previous.text === ")") && current_token.newlines === 0) {
          this._output.space_before_token = true;
        } else {
          this.print_newline();
        }
      }
      this.print_token(current_token);
    };
    Beautifier.prototype.handle_equals = function(current_token) {
      if (this.start_of_statement(current_token)) {
      } else {
        this.handle_whitespace_and_comments(current_token);
      }
      if (this._flags.declaration_statement) {
        this._flags.declaration_assignment = true;
      }
      this._output.space_before_token = true;
      this.print_token(current_token);
      this._output.space_before_token = true;
    };
    Beautifier.prototype.handle_comma = function(current_token) {
      this.handle_whitespace_and_comments(current_token, true);
      this.print_token(current_token);
      this._output.space_before_token = true;
      if (this._flags.declaration_statement) {
        if (is_expression(this._flags.parent.mode)) {
          this._flags.declaration_assignment = false;
        }
        if (this._flags.declaration_assignment) {
          this._flags.declaration_assignment = false;
          this.print_newline(false, true);
        } else if (this._options.comma_first) {
          this.allow_wrap_or_preserved_newline(current_token);
        }
      } else if (this._flags.mode === MODE.ObjectLiteral || this._flags.mode === MODE.Statement && this._flags.parent.mode === MODE.ObjectLiteral) {
        if (this._flags.mode === MODE.Statement) {
          this.restore_mode();
        }
        if (!this._flags.inline_frame) {
          this.print_newline();
        }
      } else if (this._options.comma_first) {
        this.allow_wrap_or_preserved_newline(current_token);
      }
    };
    Beautifier.prototype.handle_operator = function(current_token) {
      var isGeneratorAsterisk = current_token.text === "*" && (reserved_array(this._flags.last_token, ["function", "yield"]) || in_array(this._flags.last_token.type, [TOKEN.START_BLOCK, TOKEN.COMMA, TOKEN.END_BLOCK, TOKEN.SEMICOLON]));
      var isUnary = in_array(current_token.text, ["-", "+"]) && (in_array(this._flags.last_token.type, [TOKEN.START_BLOCK, TOKEN.START_EXPR, TOKEN.EQUALS, TOKEN.OPERATOR]) || in_array(this._flags.last_token.text, line_starters) || this._flags.last_token.text === ",");
      if (this.start_of_statement(current_token)) {
      } else {
        var preserve_statement_flags = !isGeneratorAsterisk;
        this.handle_whitespace_and_comments(current_token, preserve_statement_flags);
      }
      if (current_token.text === "*" && this._flags.last_token.type === TOKEN.DOT) {
        this.print_token(current_token);
        return;
      }
      if (current_token.text === "::") {
        this.print_token(current_token);
        return;
      }
      if (in_array(current_token.text, ["-", "+"]) && this.start_of_object_property()) {
        this.print_token(current_token);
        return;
      }
      if (this._flags.last_token.type === TOKEN.OPERATOR && in_array(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)) {
        this.allow_wrap_or_preserved_newline(current_token);
      }
      if (current_token.text === ":" && this._flags.in_case) {
        this.print_token(current_token);
        this._flags.in_case = false;
        this._flags.case_body = true;
        if (this._tokens.peek().type !== TOKEN.START_BLOCK) {
          this.indent();
          this.print_newline();
          this._flags.case_block = false;
        } else {
          this._flags.case_block = true;
          this._output.space_before_token = true;
        }
        return;
      }
      var space_before = true;
      var space_after = true;
      var in_ternary = false;
      if (current_token.text === ":") {
        if (this._flags.ternary_depth === 0) {
          space_before = false;
        } else {
          this._flags.ternary_depth -= 1;
          in_ternary = true;
        }
      } else if (current_token.text === "?") {
        this._flags.ternary_depth += 1;
      }
      if (!isUnary && !isGeneratorAsterisk && this._options.preserve_newlines && in_array(current_token.text, positionable_operators)) {
        var isColon = current_token.text === ":";
        var isTernaryColon = isColon && in_ternary;
        var isOtherColon = isColon && !in_ternary;
        switch (this._options.operator_position) {
          case OPERATOR_POSITION.before_newline:
            this._output.space_before_token = !isOtherColon;
            this.print_token(current_token);
            if (!isColon || isTernaryColon) {
              this.allow_wrap_or_preserved_newline(current_token);
            }
            this._output.space_before_token = true;
            return;
          case OPERATOR_POSITION.after_newline:
            this._output.space_before_token = true;
            if (!isColon || isTernaryColon) {
              if (this._tokens.peek().newlines) {
                this.print_newline(false, true);
              } else {
                this.allow_wrap_or_preserved_newline(current_token);
              }
            } else {
              this._output.space_before_token = false;
            }
            this.print_token(current_token);
            this._output.space_before_token = true;
            return;
          case OPERATOR_POSITION.preserve_newline:
            if (!isOtherColon) {
              this.allow_wrap_or_preserved_newline(current_token);
            }
            space_before = !(this._output.just_added_newline() || isOtherColon);
            this._output.space_before_token = space_before;
            this.print_token(current_token);
            this._output.space_before_token = true;
            return;
        }
      }
      if (isGeneratorAsterisk) {
        this.allow_wrap_or_preserved_newline(current_token);
        space_before = false;
        var next_token = this._tokens.peek();
        space_after = next_token && in_array(next_token.type, [TOKEN.WORD, TOKEN.RESERVED]);
      } else if (current_token.text === "...") {
        this.allow_wrap_or_preserved_newline(current_token);
        space_before = this._flags.last_token.type === TOKEN.START_BLOCK;
        space_after = false;
      } else if (in_array(current_token.text, ["--", "++", "!", "~"]) || isUnary) {
        if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR) {
          this.allow_wrap_or_preserved_newline(current_token);
        }
        space_before = false;
        space_after = false;
        if (current_token.newlines && (current_token.text === "--" || current_token.text === "++" || current_token.text === "~")) {
          var new_line_needed = reserved_array(this._flags.last_token, special_words) && current_token.newlines;
          if (new_line_needed && (this._previous_flags.if_block || this._previous_flags.else_block)) {
            this.restore_mode();
          }
          this.print_newline(new_line_needed, true);
        }
        if (this._flags.last_token.text === ";" && is_expression(this._flags.mode)) {
          space_before = true;
        }
        if (this._flags.last_token.type === TOKEN.RESERVED) {
          space_before = true;
        } else if (this._flags.last_token.type === TOKEN.END_EXPR) {
          space_before = !(this._flags.last_token.text === "]" && (current_token.text === "--" || current_token.text === "++"));
        } else if (this._flags.last_token.type === TOKEN.OPERATOR) {
          space_before = in_array(current_token.text, ["--", "-", "++", "+"]) && in_array(this._flags.last_token.text, ["--", "-", "++", "+"]);
          if (in_array(current_token.text, ["+", "-"]) && in_array(this._flags.last_token.text, ["--", "++"])) {
            space_after = true;
          }
        }
        if ((this._flags.mode === MODE.BlockStatement && !this._flags.inline_frame || this._flags.mode === MODE.Statement) && (this._flags.last_token.text === "{" || this._flags.last_token.text === ";")) {
          this.print_newline();
        }
      }
      this._output.space_before_token = this._output.space_before_token || space_before;
      this.print_token(current_token);
      this._output.space_before_token = space_after;
    };
    Beautifier.prototype.handle_block_comment = function(current_token, preserve_statement_flags) {
      if (this._output.raw) {
        this._output.add_raw_token(current_token);
        if (current_token.directives && current_token.directives.preserve === "end") {
          this._output.raw = this._options.test_output_raw;
        }
        return;
      }
      if (current_token.directives) {
        this.print_newline(false, preserve_statement_flags);
        this.print_token(current_token);
        if (current_token.directives.preserve === "start") {
          this._output.raw = true;
        }
        this.print_newline(false, true);
        return;
      }
      if (!acorn.newline.test(current_token.text) && !current_token.newlines) {
        this._output.space_before_token = true;
        this.print_token(current_token);
        this._output.space_before_token = true;
        return;
      } else {
        this.print_block_commment(current_token, preserve_statement_flags);
      }
    };
    Beautifier.prototype.print_block_commment = function(current_token, preserve_statement_flags) {
      var lines = split_linebreaks(current_token.text);
      var j;
      var javadoc = false;
      var starless = false;
      var lastIndent = current_token.whitespace_before;
      var lastIndentLength = lastIndent.length;
      this.print_newline(false, preserve_statement_flags);
      this.print_token_line_indentation(current_token);
      this._output.add_token(lines[0]);
      this.print_newline(false, preserve_statement_flags);
      if (lines.length > 1) {
        lines = lines.slice(1);
        javadoc = all_lines_start_with(lines, "*");
        starless = each_line_matches_indent(lines, lastIndent);
        if (javadoc) {
          this._flags.alignment = 1;
        }
        for (j = 0; j < lines.length; j++) {
          if (javadoc) {
            this.print_token_line_indentation(current_token);
            this._output.add_token(ltrim(lines[j]));
          } else if (starless && lines[j]) {
            this.print_token_line_indentation(current_token);
            this._output.add_token(lines[j].substring(lastIndentLength));
          } else {
            this._output.current_line.set_indent(-1);
            this._output.add_token(lines[j]);
          }
          this.print_newline(false, preserve_statement_flags);
        }
        this._flags.alignment = 0;
      }
    };
    Beautifier.prototype.handle_comment = function(current_token, preserve_statement_flags) {
      if (current_token.newlines) {
        this.print_newline(false, preserve_statement_flags);
      } else {
        this._output.trim(true);
      }
      this._output.space_before_token = true;
      this.print_token(current_token);
      this.print_newline(false, preserve_statement_flags);
    };
    Beautifier.prototype.handle_dot = function(current_token) {
      if (this.start_of_statement(current_token)) {
      } else {
        this.handle_whitespace_and_comments(current_token, true);
      }
      if (this._flags.last_token.text.match("^[0-9]+$")) {
        this._output.space_before_token = true;
      }
      if (reserved_array(this._flags.last_token, special_words)) {
        this._output.space_before_token = false;
      } else {
        this.allow_wrap_or_preserved_newline(
          current_token,
          this._flags.last_token.text === ")" && this._options.break_chained_methods
        );
      }
      if (this._options.unindent_chained_methods && this._output.just_added_newline()) {
        this.deindent();
      }
      this.print_token(current_token);
    };
    Beautifier.prototype.handle_unknown = function(current_token, preserve_statement_flags) {
      this.print_token(current_token);
      if (current_token.text[current_token.text.length - 1] === "\n") {
        this.print_newline(false, preserve_statement_flags);
      }
    };
    Beautifier.prototype.handle_eof = function(current_token) {
      while (this._flags.mode === MODE.Statement) {
        this.restore_mode();
      }
      this.handle_whitespace_and_comments(current_token);
    };
    module.exports.Beautifier = Beautifier;
  }
});

// node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/javascript/index.js
var require_javascript = __commonJS({
  "node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/javascript/index.js"(exports, module) {
    "use strict";
    var Beautifier = require_beautifier().Beautifier;
    var Options = require_options2().Options;
    function js_beautify(js_source_text, options) {
      var beautifier = new Beautifier(js_source_text, options);
      return beautifier.beautify();
    }
    module.exports = js_beautify;
    module.exports.defaultOptions = function() {
      return new Options();
    };
  }
});

// node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/css/options.js
var require_options3 = __commonJS({
  "node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/css/options.js"(exports, module) {
    "use strict";
    var BaseOptions = require_options().Options;
    function Options(options) {
      BaseOptions.call(this, options, "css");
      this.selector_separator_newline = this._get_boolean("selector_separator_newline", true);
      this.newline_between_rules = this._get_boolean("newline_between_rules", true);
      var space_around_selector_separator = this._get_boolean("space_around_selector_separator");
      this.space_around_combinator = this._get_boolean("space_around_combinator") || space_around_selector_separator;
      var brace_style_split = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
      this.brace_style = "collapse";
      for (var bs = 0; bs < brace_style_split.length; bs++) {
        if (brace_style_split[bs] !== "expand") {
          this.brace_style = "collapse";
        } else {
          this.brace_style = brace_style_split[bs];
        }
      }
    }
    Options.prototype = new BaseOptions();
    module.exports.Options = Options;
  }
});

// node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/css/beautifier.js
var require_beautifier2 = __commonJS({
  "node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/css/beautifier.js"(exports, module) {
    "use strict";
    var Options = require_options3().Options;
    var Output = require_output().Output;
    var InputScanner = require_inputscanner().InputScanner;
    var Directives = require_directives().Directives;
    var directives_core = new Directives(/\/\*/, /\*\//);
    var lineBreak = /\r\n|[\r\n]/;
    var allLineBreaks = /\r\n|[\r\n]/g;
    var whitespaceChar = /\s/;
    var whitespacePattern = /(?:\s|\n)+/g;
    var block_comment_pattern = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g;
    var comment_pattern = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
    function Beautifier(source_text, options) {
      this._source_text = source_text || "";
      this._options = new Options(options);
      this._ch = null;
      this._input = null;
      this.NESTED_AT_RULE = {
        "page": true,
        "font-face": true,
        "keyframes": true,
        // also in CONDITIONAL_GROUP_RULE below
        "media": true,
        "supports": true,
        "document": true
      };
      this.CONDITIONAL_GROUP_RULE = {
        "media": true,
        "supports": true,
        "document": true
      };
      this.NON_SEMICOLON_NEWLINE_PROPERTY = [
        "grid-template-areas",
        "grid-template"
      ];
    }
    Beautifier.prototype.eatString = function(endChars) {
      var result = "";
      this._ch = this._input.next();
      while (this._ch) {
        result += this._ch;
        if (this._ch === "\\") {
          result += this._input.next();
        } else if (endChars.indexOf(this._ch) !== -1 || this._ch === "\n") {
          break;
        }
        this._ch = this._input.next();
      }
      return result;
    };
    Beautifier.prototype.eatWhitespace = function(allowAtLeastOneNewLine) {
      var result = whitespaceChar.test(this._input.peek());
      var newline_count = 0;
      while (whitespaceChar.test(this._input.peek())) {
        this._ch = this._input.next();
        if (allowAtLeastOneNewLine && this._ch === "\n") {
          if (newline_count === 0 || newline_count < this._options.max_preserve_newlines) {
            newline_count++;
            this._output.add_new_line(true);
          }
        }
      }
      return result;
    };
    Beautifier.prototype.foundNestedPseudoClass = function() {
      var openParen = 0;
      var i = 1;
      var ch = this._input.peek(i);
      while (ch) {
        if (ch === "{") {
          return true;
        } else if (ch === "(") {
          openParen += 1;
        } else if (ch === ")") {
          if (openParen === 0) {
            return false;
          }
          openParen -= 1;
        } else if (ch === ";" || ch === "}") {
          return false;
        }
        i++;
        ch = this._input.peek(i);
      }
      return false;
    };
    Beautifier.prototype.print_string = function(output_string) {
      this._output.set_indent(this._indentLevel);
      this._output.non_breaking_space = true;
      this._output.add_token(output_string);
    };
    Beautifier.prototype.preserveSingleSpace = function(isAfterSpace) {
      if (isAfterSpace) {
        this._output.space_before_token = true;
      }
    };
    Beautifier.prototype.indent = function() {
      this._indentLevel++;
    };
    Beautifier.prototype.outdent = function() {
      if (this._indentLevel > 0) {
        this._indentLevel--;
      }
    };
    Beautifier.prototype.beautify = function() {
      if (this._options.disabled) {
        return this._source_text;
      }
      var source_text = this._source_text;
      var eol = this._options.eol;
      if (eol === "auto") {
        eol = "\n";
        if (source_text && lineBreak.test(source_text || "")) {
          eol = source_text.match(lineBreak)[0];
        }
      }
      source_text = source_text.replace(allLineBreaks, "\n");
      var baseIndentString = source_text.match(/^[\t ]*/)[0];
      this._output = new Output(this._options, baseIndentString);
      this._input = new InputScanner(source_text);
      this._indentLevel = 0;
      this._nestedLevel = 0;
      this._ch = null;
      var parenLevel = 0;
      var insideRule = false;
      var insidePropertyValue = false;
      var enteringConditionalGroup = false;
      var insideNonNestedAtRule = false;
      var insideScssMap = false;
      var topCharacter = this._ch;
      var insideNonSemiColonValues = false;
      var whitespace;
      var isAfterSpace;
      var previous_ch;
      while (true) {
        whitespace = this._input.read(whitespacePattern);
        isAfterSpace = whitespace !== "";
        previous_ch = topCharacter;
        this._ch = this._input.next();
        if (this._ch === "\\" && this._input.hasNext()) {
          this._ch += this._input.next();
        }
        topCharacter = this._ch;
        if (!this._ch) {
          break;
        } else if (this._ch === "/" && this._input.peek() === "*") {
          this._output.add_new_line();
          this._input.back();
          var comment = this._input.read(block_comment_pattern);
          var directives = directives_core.get_directives(comment);
          if (directives && directives.ignore === "start") {
            comment += directives_core.readIgnored(this._input);
          }
          this.print_string(comment);
          this.eatWhitespace(true);
          this._output.add_new_line();
        } else if (this._ch === "/" && this._input.peek() === "/") {
          this._output.space_before_token = true;
          this._input.back();
          this.print_string(this._input.read(comment_pattern));
          this.eatWhitespace(true);
        } else if (this._ch === "$") {
          this.preserveSingleSpace(isAfterSpace);
          this.print_string(this._ch);
          var variable = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
          if (variable.match(/[ :]$/)) {
            variable = this.eatString(": ").replace(/\s+$/, "");
            this.print_string(variable);
            this._output.space_before_token = true;
          }
          if (parenLevel === 0 && variable.indexOf(":") !== -1) {
            insidePropertyValue = true;
            this.indent();
          }
        } else if (this._ch === "@") {
          this.preserveSingleSpace(isAfterSpace);
          if (this._input.peek() === "{") {
            this.print_string(this._ch + this.eatString("}"));
          } else {
            this.print_string(this._ch);
            var variableOrRule = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
            if (variableOrRule.match(/[ :]$/)) {
              variableOrRule = this.eatString(": ").replace(/\s+$/, "");
              this.print_string(variableOrRule);
              this._output.space_before_token = true;
            }
            if (parenLevel === 0 && variableOrRule.indexOf(":") !== -1) {
              insidePropertyValue = true;
              this.indent();
            } else if (variableOrRule in this.NESTED_AT_RULE) {
              this._nestedLevel += 1;
              if (variableOrRule in this.CONDITIONAL_GROUP_RULE) {
                enteringConditionalGroup = true;
              }
            } else if (parenLevel === 0 && !insidePropertyValue) {
              insideNonNestedAtRule = true;
            }
          }
        } else if (this._ch === "#" && this._input.peek() === "{") {
          this.preserveSingleSpace(isAfterSpace);
          this.print_string(this._ch + this.eatString("}"));
        } else if (this._ch === "{") {
          if (insidePropertyValue) {
            insidePropertyValue = false;
            this.outdent();
          }
          insideNonNestedAtRule = false;
          if (enteringConditionalGroup) {
            enteringConditionalGroup = false;
            insideRule = this._indentLevel >= this._nestedLevel;
          } else {
            insideRule = this._indentLevel >= this._nestedLevel - 1;
          }
          if (this._options.newline_between_rules && insideRule) {
            if (this._output.previous_line && this._output.previous_line.item(-1) !== "{") {
              this._output.ensure_empty_line_above("/", ",");
            }
          }
          this._output.space_before_token = true;
          if (this._options.brace_style === "expand") {
            this._output.add_new_line();
            this.print_string(this._ch);
            this.indent();
            this._output.set_indent(this._indentLevel);
          } else {
            if (previous_ch === "(") {
              this._output.space_before_token = false;
            } else if (previous_ch !== ",") {
              this.indent();
            }
            this.print_string(this._ch);
          }
          this.eatWhitespace(true);
          this._output.add_new_line();
        } else if (this._ch === "}") {
          this.outdent();
          this._output.add_new_line();
          if (previous_ch === "{") {
            this._output.trim(true);
          }
          if (insidePropertyValue) {
            this.outdent();
            insidePropertyValue = false;
          }
          this.print_string(this._ch);
          insideRule = false;
          if (this._nestedLevel) {
            this._nestedLevel--;
          }
          this.eatWhitespace(true);
          this._output.add_new_line();
          if (this._options.newline_between_rules && !this._output.just_added_blankline()) {
            if (this._input.peek() !== "}") {
              this._output.add_new_line(true);
            }
          }
          if (this._input.peek() === ")") {
            this._output.trim(true);
            if (this._options.brace_style === "expand") {
              this._output.add_new_line(true);
            }
          }
        } else if (this._ch === ":") {
          for (var i = 0; i < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; i++) {
            if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[i])) {
              insideNonSemiColonValues = true;
              break;
            }
          }
          if ((insideRule || enteringConditionalGroup) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !insideNonNestedAtRule && parenLevel === 0) {
            this.print_string(":");
            if (!insidePropertyValue) {
              insidePropertyValue = true;
              this._output.space_before_token = true;
              this.eatWhitespace(true);
              this.indent();
            }
          } else {
            if (this._input.lookBack(" ")) {
              this._output.space_before_token = true;
            }
            if (this._input.peek() === ":") {
              this._ch = this._input.next();
              this.print_string("::");
            } else {
              this.print_string(":");
            }
          }
        } else if (this._ch === '"' || this._ch === "'") {
          var preserveQuoteSpace = previous_ch === '"' || previous_ch === "'";
          this.preserveSingleSpace(preserveQuoteSpace || isAfterSpace);
          this.print_string(this._ch + this.eatString(this._ch));
          this.eatWhitespace(true);
        } else if (this._ch === ";") {
          insideNonSemiColonValues = false;
          if (parenLevel === 0) {
            if (insidePropertyValue) {
              this.outdent();
              insidePropertyValue = false;
            }
            insideNonNestedAtRule = false;
            this.print_string(this._ch);
            this.eatWhitespace(true);
            if (this._input.peek() !== "/") {
              this._output.add_new_line();
            }
          } else {
            this.print_string(this._ch);
            this.eatWhitespace(true);
            this._output.space_before_token = true;
          }
        } else if (this._ch === "(") {
          if (this._input.lookBack("url")) {
            this.print_string(this._ch);
            this.eatWhitespace();
            parenLevel++;
            this.indent();
            this._ch = this._input.next();
            if (this._ch === ")" || this._ch === '"' || this._ch === "'") {
              this._input.back();
            } else if (this._ch) {
              this.print_string(this._ch + this.eatString(")"));
              if (parenLevel) {
                parenLevel--;
                this.outdent();
              }
            }
          } else {
            var space_needed = false;
            if (this._input.lookBack("with")) {
              space_needed = true;
            }
            this.preserveSingleSpace(isAfterSpace || space_needed);
            this.print_string(this._ch);
            if (insidePropertyValue && previous_ch === "$" && this._options.selector_separator_newline) {
              this._output.add_new_line();
              insideScssMap = true;
            } else {
              this.eatWhitespace();
              parenLevel++;
              this.indent();
            }
          }
        } else if (this._ch === ")") {
          if (parenLevel) {
            parenLevel--;
            this.outdent();
          }
          if (insideScssMap && this._input.peek() === ";" && this._options.selector_separator_newline) {
            insideScssMap = false;
            this.outdent();
            this._output.add_new_line();
          }
          this.print_string(this._ch);
        } else if (this._ch === ",") {
          this.print_string(this._ch);
          this.eatWhitespace(true);
          if (this._options.selector_separator_newline && (!insidePropertyValue || insideScssMap) && parenLevel === 0 && !insideNonNestedAtRule) {
            this._output.add_new_line();
          } else {
            this._output.space_before_token = true;
          }
        } else if ((this._ch === ">" || this._ch === "+" || this._ch === "~") && !insidePropertyValue && parenLevel === 0) {
          if (this._options.space_around_combinator) {
            this._output.space_before_token = true;
            this.print_string(this._ch);
            this._output.space_before_token = true;
          } else {
            this.print_string(this._ch);
            this.eatWhitespace();
            if (this._ch && whitespaceChar.test(this._ch)) {
              this._ch = "";
            }
          }
        } else if (this._ch === "]") {
          this.print_string(this._ch);
        } else if (this._ch === "[") {
          this.preserveSingleSpace(isAfterSpace);
          this.print_string(this._ch);
        } else if (this._ch === "=") {
          this.eatWhitespace();
          this.print_string("=");
          if (whitespaceChar.test(this._ch)) {
            this._ch = "";
          }
        } else if (this._ch === "!" && !this._input.lookBack("\\")) {
          this._output.space_before_token = true;
          this.print_string(this._ch);
        } else {
          var preserveAfterSpace = previous_ch === '"' || previous_ch === "'";
          this.preserveSingleSpace(preserveAfterSpace || isAfterSpace);
          this.print_string(this._ch);
          if (!this._output.just_added_newline() && this._input.peek() === "\n" && insideNonSemiColonValues) {
            this._output.add_new_line();
          }
        }
      }
      var sweetCode = this._output.get_code(eol);
      return sweetCode;
    };
    module.exports.Beautifier = Beautifier;
  }
});

// node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/css/index.js
var require_css = __commonJS({
  "node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/css/index.js"(exports, module) {
    "use strict";
    var Beautifier = require_beautifier2().Beautifier;
    var Options = require_options3().Options;
    function css_beautify(source_text, options) {
      var beautifier = new Beautifier(source_text, options);
      return beautifier.beautify();
    }
    module.exports = css_beautify;
    module.exports.defaultOptions = function() {
      return new Options();
    };
  }
});

// node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/html/options.js
var require_options4 = __commonJS({
  "node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/html/options.js"(exports, module) {
    "use strict";
    var BaseOptions = require_options().Options;
    function Options(options) {
      BaseOptions.call(this, options, "html");
      if (this.templating.length === 1 && this.templating[0] === "auto") {
        this.templating = ["django", "erb", "handlebars", "php"];
      }
      this.indent_inner_html = this._get_boolean("indent_inner_html");
      this.indent_body_inner_html = this._get_boolean("indent_body_inner_html", true);
      this.indent_head_inner_html = this._get_boolean("indent_head_inner_html", true);
      this.indent_handlebars = this._get_boolean("indent_handlebars", true);
      this.wrap_attributes = this._get_selection(
        "wrap_attributes",
        ["auto", "force", "force-aligned", "force-expand-multiline", "aligned-multiple", "preserve", "preserve-aligned"]
      );
      this.wrap_attributes_min_attrs = this._get_number("wrap_attributes_min_attrs", 2);
      this.wrap_attributes_indent_size = this._get_number("wrap_attributes_indent_size", this.indent_size);
      this.extra_liners = this._get_array("extra_liners", ["head", "body", "/html"]);
      this.inline = this._get_array("inline", [
        "a",
        "abbr",
        "area",
        "audio",
        "b",
        "bdi",
        "bdo",
        "br",
        "button",
        "canvas",
        "cite",
        "code",
        "data",
        "datalist",
        "del",
        "dfn",
        "em",
        "embed",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "map",
        "mark",
        "math",
        "meter",
        "noscript",
        "object",
        "output",
        "progress",
        "q",
        "ruby",
        "s",
        "samp",
        /* 'script', */
        "select",
        "small",
        "span",
        "strong",
        "sub",
        "sup",
        "svg",
        "template",
        "textarea",
        "time",
        "u",
        "var",
        "video",
        "wbr",
        "text",
        // obsolete inline tags
        "acronym",
        "big",
        "strike",
        "tt"
      ]);
      this.inline_custom_elements = this._get_boolean("inline_custom_elements", true);
      this.void_elements = this._get_array("void_elements", [
        // HTLM void elements - aka self-closing tags - aka singletons
        // https://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "keygen",
        "link",
        "menuitem",
        "meta",
        "param",
        "source",
        "track",
        "wbr",
        // NOTE: Optional tags are too complex for a simple list
        // they are hard coded in _do_optional_end_element
        // Doctype and xml elements
        "!doctype",
        "?xml",
        // obsolete tags
        // basefont: https://www.computerhope.com/jargon/h/html-basefont-tag.htm
        // isndex: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/isindex
        "basefont",
        "isindex"
      ]);
      this.unformatted = this._get_array("unformatted", []);
      this.content_unformatted = this._get_array("content_unformatted", [
        "pre",
        "textarea"
      ]);
      this.unformatted_content_delimiter = this._get_characters("unformatted_content_delimiter");
      this.indent_scripts = this._get_selection("indent_scripts", ["normal", "keep", "separate"]);
    }
    Options.prototype = new BaseOptions();
    module.exports.Options = Options;
  }
});

// node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/html/tokenizer.js
var require_tokenizer3 = __commonJS({
  "node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/html/tokenizer.js"(exports, module) {
    "use strict";
    var BaseTokenizer = require_tokenizer().Tokenizer;
    var BASETOKEN = require_tokenizer().TOKEN;
    var Directives = require_directives().Directives;
    var TemplatablePattern = require_templatablepattern().TemplatablePattern;
    var Pattern = require_pattern().Pattern;
    var TOKEN = {
      TAG_OPEN: "TK_TAG_OPEN",
      TAG_CLOSE: "TK_TAG_CLOSE",
      CONTROL_FLOW_OPEN: "TK_CONTROL_FLOW_OPEN",
      CONTROL_FLOW_CLOSE: "TK_CONTROL_FLOW_CLOSE",
      ATTRIBUTE: "TK_ATTRIBUTE",
      EQUALS: "TK_EQUALS",
      VALUE: "TK_VALUE",
      COMMENT: "TK_COMMENT",
      TEXT: "TK_TEXT",
      UNKNOWN: "TK_UNKNOWN",
      START: BASETOKEN.START,
      RAW: BASETOKEN.RAW,
      EOF: BASETOKEN.EOF
    };
    var directives_core = new Directives(/<\!--/, /-->/);
    var Tokenizer = function(input_string, options) {
      BaseTokenizer.call(this, input_string, options);
      this._current_tag_name = "";
      var templatable_reader = new TemplatablePattern(this._input).read_options(this._options);
      var pattern_reader = new Pattern(this._input);
      this.__patterns = {
        word: templatable_reader.until(/[\n\r\t <]/),
        word_control_flow_close_excluded: templatable_reader.until(/[\n\r\t <}]/),
        single_quote: templatable_reader.until_after(/'/),
        double_quote: templatable_reader.until_after(/"/),
        attribute: templatable_reader.until(/[\n\r\t =>]|\/>/),
        element_name: templatable_reader.until(/[\n\r\t >\/]/),
        angular_control_flow_start: pattern_reader.matching(/\@[a-zA-Z]+[^({]*[({]/),
        handlebars_comment: pattern_reader.starting_with(/{{!--/).until_after(/--}}/),
        handlebars: pattern_reader.starting_with(/{{/).until_after(/}}/),
        handlebars_open: pattern_reader.until(/[\n\r\t }]/),
        handlebars_raw_close: pattern_reader.until(/}}/),
        comment: pattern_reader.starting_with(/<!--/).until_after(/-->/),
        cdata: pattern_reader.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
        // https://en.wikipedia.org/wiki/Conditional_comment
        conditional_comment: pattern_reader.starting_with(/<!\[/).until_after(/]>/),
        processing: pattern_reader.starting_with(/<\?/).until_after(/\?>/)
      };
      if (this._options.indent_handlebars) {
        this.__patterns.word = this.__patterns.word.exclude("handlebars");
        this.__patterns.word_control_flow_close_excluded = this.__patterns.word_control_flow_close_excluded.exclude("handlebars");
      }
      this._unformatted_content_delimiter = null;
      if (this._options.unformatted_content_delimiter) {
        var literal_regexp = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
        this.__patterns.unformatted_content_delimiter = pattern_reader.matching(literal_regexp).until_after(literal_regexp);
      }
    };
    Tokenizer.prototype = new BaseTokenizer();
    Tokenizer.prototype._is_comment = function(current_token) {
      return false;
    };
    Tokenizer.prototype._is_opening = function(current_token) {
      return current_token.type === TOKEN.TAG_OPEN || current_token.type === TOKEN.CONTROL_FLOW_OPEN;
    };
    Tokenizer.prototype._is_closing = function(current_token, open_token) {
      return current_token.type === TOKEN.TAG_CLOSE && (open_token && ((current_token.text === ">" || current_token.text === "/>") && open_token.text[0] === "<" || current_token.text === "}}" && open_token.text[0] === "{" && open_token.text[1] === "{")) || current_token.type === TOKEN.CONTROL_FLOW_CLOSE && (current_token.text === "}" && open_token.text.endsWith("{"));
    };
    Tokenizer.prototype._reset = function() {
      this._current_tag_name = "";
    };
    Tokenizer.prototype._get_next_token = function(previous_token, open_token) {
      var token = null;
      this._readWhitespace();
      var c = this._input.peek();
      if (c === null) {
        return this._create_token(TOKEN.EOF, "");
      }
      token = token || this._read_open_handlebars(c, open_token);
      token = token || this._read_attribute(c, previous_token, open_token);
      token = token || this._read_close(c, open_token);
      token = token || this._read_control_flows(c, open_token);
      token = token || this._read_raw_content(c, previous_token, open_token);
      token = token || this._read_content_word(c, open_token);
      token = token || this._read_comment_or_cdata(c);
      token = token || this._read_processing(c);
      token = token || this._read_open(c, open_token);
      token = token || this._create_token(TOKEN.UNKNOWN, this._input.next());
      return token;
    };
    Tokenizer.prototype._read_comment_or_cdata = function(c) {
      var token = null;
      var resulting_string = null;
      var directives = null;
      if (c === "<") {
        var peek1 = this._input.peek(1);
        if (peek1 === "!") {
          resulting_string = this.__patterns.comment.read();
          if (resulting_string) {
            directives = directives_core.get_directives(resulting_string);
            if (directives && directives.ignore === "start") {
              resulting_string += directives_core.readIgnored(this._input);
            }
          } else {
            resulting_string = this.__patterns.cdata.read();
          }
        }
        if (resulting_string) {
          token = this._create_token(TOKEN.COMMENT, resulting_string);
          token.directives = directives;
        }
      }
      return token;
    };
    Tokenizer.prototype._read_processing = function(c) {
      var token = null;
      var resulting_string = null;
      var directives = null;
      if (c === "<") {
        var peek1 = this._input.peek(1);
        if (peek1 === "!" || peek1 === "?") {
          resulting_string = this.__patterns.conditional_comment.read();
          resulting_string = resulting_string || this.__patterns.processing.read();
        }
        if (resulting_string) {
          token = this._create_token(TOKEN.COMMENT, resulting_string);
          token.directives = directives;
        }
      }
      return token;
    };
    Tokenizer.prototype._read_open = function(c, open_token) {
      var resulting_string = null;
      var token = null;
      if (!open_token || open_token.type === TOKEN.CONTROL_FLOW_OPEN) {
        if (c === "<") {
          resulting_string = this._input.next();
          if (this._input.peek() === "/") {
            resulting_string += this._input.next();
          }
          resulting_string += this.__patterns.element_name.read();
          token = this._create_token(TOKEN.TAG_OPEN, resulting_string);
        }
      }
      return token;
    };
    Tokenizer.prototype._read_open_handlebars = function(c, open_token) {
      var resulting_string = null;
      var token = null;
      if (!open_token || open_token.type === TOKEN.CONTROL_FLOW_OPEN) {
        if (this._options.indent_handlebars && c === "{" && this._input.peek(1) === "{") {
          if (this._input.peek(2) === "!") {
            resulting_string = this.__patterns.handlebars_comment.read();
            resulting_string = resulting_string || this.__patterns.handlebars.read();
            token = this._create_token(TOKEN.COMMENT, resulting_string);
          } else {
            resulting_string = this.__patterns.handlebars_open.read();
            token = this._create_token(TOKEN.TAG_OPEN, resulting_string);
          }
        }
      }
      return token;
    };
    Tokenizer.prototype._read_control_flows = function(c, open_token) {
      var resulting_string = "";
      var token = null;
      if (!this._options.templating.includes("angular") || !this._options.indent_handlebars) {
        return token;
      }
      if (c === "@") {
        resulting_string = this.__patterns.angular_control_flow_start.read();
        if (resulting_string === "") {
          return token;
        }
        var opening_parentheses_count = resulting_string.endsWith("(") ? 1 : 0;
        var closing_parentheses_count = 0;
        while (!(resulting_string.endsWith("{") && opening_parentheses_count === closing_parentheses_count)) {
          var next_char = this._input.next();
          if (next_char === null) {
            break;
          } else if (next_char === "(") {
            opening_parentheses_count++;
          } else if (next_char === ")") {
            closing_parentheses_count++;
          }
          resulting_string += next_char;
        }
        token = this._create_token(TOKEN.CONTROL_FLOW_OPEN, resulting_string);
      } else if (c === "}" && open_token && open_token.type === TOKEN.CONTROL_FLOW_OPEN) {
        resulting_string = this._input.next();
        token = this._create_token(TOKEN.CONTROL_FLOW_CLOSE, resulting_string);
      }
      return token;
    };
    Tokenizer.prototype._read_close = function(c, open_token) {
      var resulting_string = null;
      var token = null;
      if (open_token && open_token.type === TOKEN.TAG_OPEN) {
        if (open_token.text[0] === "<" && (c === ">" || c === "/" && this._input.peek(1) === ">")) {
          resulting_string = this._input.next();
          if (c === "/") {
            resulting_string += this._input.next();
          }
          token = this._create_token(TOKEN.TAG_CLOSE, resulting_string);
        } else if (open_token.text[0] === "{" && c === "}" && this._input.peek(1) === "}") {
          this._input.next();
          this._input.next();
          token = this._create_token(TOKEN.TAG_CLOSE, "}}");
        }
      }
      return token;
    };
    Tokenizer.prototype._read_attribute = function(c, previous_token, open_token) {
      var token = null;
      var resulting_string = "";
      if (open_token && open_token.text[0] === "<") {
        if (c === "=") {
          token = this._create_token(TOKEN.EQUALS, this._input.next());
        } else if (c === '"' || c === "'") {
          var content = this._input.next();
          if (c === '"') {
            content += this.__patterns.double_quote.read();
          } else {
            content += this.__patterns.single_quote.read();
          }
          token = this._create_token(TOKEN.VALUE, content);
        } else {
          resulting_string = this.__patterns.attribute.read();
          if (resulting_string) {
            if (previous_token.type === TOKEN.EQUALS) {
              token = this._create_token(TOKEN.VALUE, resulting_string);
            } else {
              token = this._create_token(TOKEN.ATTRIBUTE, resulting_string);
            }
          }
        }
      }
      return token;
    };
    Tokenizer.prototype._is_content_unformatted = function(tag_name) {
      return this._options.void_elements.indexOf(tag_name) === -1 && (this._options.content_unformatted.indexOf(tag_name) !== -1 || this._options.unformatted.indexOf(tag_name) !== -1);
    };
    Tokenizer.prototype._read_raw_content = function(c, previous_token, open_token) {
      var resulting_string = "";
      if (open_token && open_token.text[0] === "{") {
        resulting_string = this.__patterns.handlebars_raw_close.read();
      } else if (previous_token.type === TOKEN.TAG_CLOSE && previous_token.opened.text[0] === "<" && previous_token.text[0] !== "/") {
        var tag_name = previous_token.opened.text.substr(1).toLowerCase();
        if (tag_name === "script" || tag_name === "style") {
          var token = this._read_comment_or_cdata(c);
          if (token) {
            token.type = TOKEN.TEXT;
            return token;
          }
          resulting_string = this._input.readUntil(new RegExp("</" + tag_name + "[\\n\\r\\t ]*?>", "ig"));
        } else if (this._is_content_unformatted(tag_name)) {
          resulting_string = this._input.readUntil(new RegExp("</" + tag_name + "[\\n\\r\\t ]*?>", "ig"));
        }
      }
      if (resulting_string) {
        return this._create_token(TOKEN.TEXT, resulting_string);
      }
      return null;
    };
    Tokenizer.prototype._read_content_word = function(c, open_token) {
      var resulting_string = "";
      if (this._options.unformatted_content_delimiter) {
        if (c === this._options.unformatted_content_delimiter[0]) {
          resulting_string = this.__patterns.unformatted_content_delimiter.read();
        }
      }
      if (!resulting_string) {
        resulting_string = open_token && open_token.type === TOKEN.CONTROL_FLOW_OPEN ? this.__patterns.word_control_flow_close_excluded.read() : this.__patterns.word.read();
      }
      if (resulting_string) {
        return this._create_token(TOKEN.TEXT, resulting_string);
      }
    };
    module.exports.Tokenizer = Tokenizer;
    module.exports.TOKEN = TOKEN;
  }
});

// node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/html/beautifier.js
var require_beautifier3 = __commonJS({
  "node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/html/beautifier.js"(exports, module) {
    "use strict";
    var Options = require_options4().Options;
    var Output = require_output().Output;
    var Tokenizer = require_tokenizer3().Tokenizer;
    var TOKEN = require_tokenizer3().TOKEN;
    var lineBreak = /\r\n|[\r\n]/;
    var allLineBreaks = /\r\n|[\r\n]/g;
    var Printer = function(options, base_indent_string) {
      this.indent_level = 0;
      this.alignment_size = 0;
      this.max_preserve_newlines = options.max_preserve_newlines;
      this.preserve_newlines = options.preserve_newlines;
      this._output = new Output(options, base_indent_string);
    };
    Printer.prototype.current_line_has_match = function(pattern) {
      return this._output.current_line.has_match(pattern);
    };
    Printer.prototype.set_space_before_token = function(value, non_breaking) {
      this._output.space_before_token = value;
      this._output.non_breaking_space = non_breaking;
    };
    Printer.prototype.set_wrap_point = function() {
      this._output.set_indent(this.indent_level, this.alignment_size);
      this._output.set_wrap_point();
    };
    Printer.prototype.add_raw_token = function(token) {
      this._output.add_raw_token(token);
    };
    Printer.prototype.print_preserved_newlines = function(raw_token) {
      var newlines = 0;
      if (raw_token.type !== TOKEN.TEXT && raw_token.previous.type !== TOKEN.TEXT) {
        newlines = raw_token.newlines ? 1 : 0;
      }
      if (this.preserve_newlines) {
        newlines = raw_token.newlines < this.max_preserve_newlines + 1 ? raw_token.newlines : this.max_preserve_newlines + 1;
      }
      for (var n = 0; n < newlines; n++) {
        this.print_newline(n > 0);
      }
      return newlines !== 0;
    };
    Printer.prototype.traverse_whitespace = function(raw_token) {
      if (raw_token.whitespace_before || raw_token.newlines) {
        if (!this.print_preserved_newlines(raw_token)) {
          this._output.space_before_token = true;
        }
        return true;
      }
      return false;
    };
    Printer.prototype.previous_token_wrapped = function() {
      return this._output.previous_token_wrapped;
    };
    Printer.prototype.print_newline = function(force) {
      this._output.add_new_line(force);
    };
    Printer.prototype.print_token = function(token) {
      if (token.text) {
        this._output.set_indent(this.indent_level, this.alignment_size);
        this._output.add_token(token.text);
      }
    };
    Printer.prototype.indent = function() {
      this.indent_level++;
    };
    Printer.prototype.deindent = function() {
      if (this.indent_level > 0) {
        this.indent_level--;
        this._output.set_indent(this.indent_level, this.alignment_size);
      }
    };
    Printer.prototype.get_full_indent = function(level) {
      level = this.indent_level + (level || 0);
      if (level < 1) {
        return "";
      }
      return this._output.get_indent_string(level);
    };
    var get_type_attribute = function(start_token) {
      var result = null;
      var raw_token = start_token.next;
      while (raw_token.type !== TOKEN.EOF && start_token.closed !== raw_token) {
        if (raw_token.type === TOKEN.ATTRIBUTE && raw_token.text === "type") {
          if (raw_token.next && raw_token.next.type === TOKEN.EQUALS && raw_token.next.next && raw_token.next.next.type === TOKEN.VALUE) {
            result = raw_token.next.next.text;
          }
          break;
        }
        raw_token = raw_token.next;
      }
      return result;
    };
    var get_custom_beautifier_name = function(tag_check, raw_token) {
      var typeAttribute = null;
      var result = null;
      if (!raw_token.closed) {
        return null;
      }
      if (tag_check === "script") {
        typeAttribute = "text/javascript";
      } else if (tag_check === "style") {
        typeAttribute = "text/css";
      }
      typeAttribute = get_type_attribute(raw_token) || typeAttribute;
      if (typeAttribute.search("text/css") > -1) {
        result = "css";
      } else if (typeAttribute.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/) > -1) {
        result = "javascript";
      } else if (typeAttribute.search(/(text|application|dojo)\/(x-)?(html)/) > -1) {
        result = "html";
      } else if (typeAttribute.search(/test\/null/) > -1) {
        result = "null";
      }
      return result;
    };
    function in_array(what, arr) {
      return arr.indexOf(what) !== -1;
    }
    function TagFrame(parent, parser_token, indent_level) {
      this.parent = parent || null;
      this.tag = parser_token ? parser_token.tag_name : "";
      this.indent_level = indent_level || 0;
      this.parser_token = parser_token || null;
    }
    function TagStack(printer) {
      this._printer = printer;
      this._current_frame = null;
    }
    TagStack.prototype.get_parser_token = function() {
      return this._current_frame ? this._current_frame.parser_token : null;
    };
    TagStack.prototype.record_tag = function(parser_token) {
      var new_frame = new TagFrame(this._current_frame, parser_token, this._printer.indent_level);
      this._current_frame = new_frame;
    };
    TagStack.prototype._try_pop_frame = function(frame) {
      var parser_token = null;
      if (frame) {
        parser_token = frame.parser_token;
        this._printer.indent_level = frame.indent_level;
        this._current_frame = frame.parent;
      }
      return parser_token;
    };
    TagStack.prototype._get_frame = function(tag_list, stop_list) {
      var frame = this._current_frame;
      while (frame) {
        if (tag_list.indexOf(frame.tag) !== -1) {
          break;
        } else if (stop_list && stop_list.indexOf(frame.tag) !== -1) {
          frame = null;
          break;
        }
        frame = frame.parent;
      }
      return frame;
    };
    TagStack.prototype.try_pop = function(tag, stop_list) {
      var frame = this._get_frame([tag], stop_list);
      return this._try_pop_frame(frame);
    };
    TagStack.prototype.indent_to_tag = function(tag_list) {
      var frame = this._get_frame(tag_list);
      if (frame) {
        this._printer.indent_level = frame.indent_level;
      }
    };
    function Beautifier(source_text, options, js_beautify, css_beautify) {
      this._source_text = source_text || "";
      options = options || {};
      this._js_beautify = js_beautify;
      this._css_beautify = css_beautify;
      this._tag_stack = null;
      var optionHtml = new Options(options, "html");
      this._options = optionHtml;
      this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, "force".length) === "force";
      this._is_wrap_attributes_force_expand_multiline = this._options.wrap_attributes === "force-expand-multiline";
      this._is_wrap_attributes_force_aligned = this._options.wrap_attributes === "force-aligned";
      this._is_wrap_attributes_aligned_multiple = this._options.wrap_attributes === "aligned-multiple";
      this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, "preserve".length) === "preserve";
      this._is_wrap_attributes_preserve_aligned = this._options.wrap_attributes === "preserve-aligned";
    }
    Beautifier.prototype.beautify = function() {
      if (this._options.disabled) {
        return this._source_text;
      }
      var source_text = this._source_text;
      var eol = this._options.eol;
      if (this._options.eol === "auto") {
        eol = "\n";
        if (source_text && lineBreak.test(source_text)) {
          eol = source_text.match(lineBreak)[0];
        }
      }
      source_text = source_text.replace(allLineBreaks, "\n");
      var baseIndentString = source_text.match(/^[\t ]*/)[0];
      var last_token = {
        text: "",
        type: ""
      };
      var last_tag_token = new TagOpenParserToken();
      var printer = new Printer(this._options, baseIndentString);
      var tokens = new Tokenizer(source_text, this._options).tokenize();
      this._tag_stack = new TagStack(printer);
      var parser_token = null;
      var raw_token = tokens.next();
      while (raw_token.type !== TOKEN.EOF) {
        if (raw_token.type === TOKEN.TAG_OPEN || raw_token.type === TOKEN.COMMENT) {
          parser_token = this._handle_tag_open(printer, raw_token, last_tag_token, last_token, tokens);
          last_tag_token = parser_token;
        } else if (raw_token.type === TOKEN.ATTRIBUTE || raw_token.type === TOKEN.EQUALS || raw_token.type === TOKEN.VALUE || raw_token.type === TOKEN.TEXT && !last_tag_token.tag_complete) {
          parser_token = this._handle_inside_tag(printer, raw_token, last_tag_token, last_token);
        } else if (raw_token.type === TOKEN.TAG_CLOSE) {
          parser_token = this._handle_tag_close(printer, raw_token, last_tag_token);
        } else if (raw_token.type === TOKEN.TEXT) {
          parser_token = this._handle_text(printer, raw_token, last_tag_token);
        } else if (raw_token.type === TOKEN.CONTROL_FLOW_OPEN) {
          parser_token = this._handle_control_flow_open(printer, raw_token);
        } else if (raw_token.type === TOKEN.CONTROL_FLOW_CLOSE) {
          parser_token = this._handle_control_flow_close(printer, raw_token);
        } else {
          printer.add_raw_token(raw_token);
        }
        last_token = parser_token;
        raw_token = tokens.next();
      }
      var sweet_code = printer._output.get_code(eol);
      return sweet_code;
    };
    Beautifier.prototype._handle_control_flow_open = function(printer, raw_token) {
      var parser_token = {
        text: raw_token.text,
        type: raw_token.type
      };
      printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== "", true);
      if (raw_token.newlines) {
        printer.print_preserved_newlines(raw_token);
      } else {
        printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== "", true);
      }
      printer.print_token(raw_token);
      printer.indent();
      return parser_token;
    };
    Beautifier.prototype._handle_control_flow_close = function(printer, raw_token) {
      var parser_token = {
        text: raw_token.text,
        type: raw_token.type
      };
      printer.deindent();
      if (raw_token.newlines) {
        printer.print_preserved_newlines(raw_token);
      } else {
        printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== "", true);
      }
      printer.print_token(raw_token);
      return parser_token;
    };
    Beautifier.prototype._handle_tag_close = function(printer, raw_token, last_tag_token) {
      var parser_token = {
        text: raw_token.text,
        type: raw_token.type
      };
      printer.alignment_size = 0;
      last_tag_token.tag_complete = true;
      printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== "", true);
      if (last_tag_token.is_unformatted) {
        printer.add_raw_token(raw_token);
      } else {
        if (last_tag_token.tag_start_char === "<") {
          printer.set_space_before_token(raw_token.text[0] === "/", true);
          if (this._is_wrap_attributes_force_expand_multiline && last_tag_token.has_wrapped_attrs) {
            printer.print_newline(false);
          }
        }
        printer.print_token(raw_token);
      }
      if (last_tag_token.indent_content && !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
        printer.indent();
        last_tag_token.indent_content = false;
      }
      if (!last_tag_token.is_inline_element && !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
        printer.set_wrap_point();
      }
      return parser_token;
    };
    Beautifier.prototype._handle_inside_tag = function(printer, raw_token, last_tag_token, last_token) {
      var wrapped = last_tag_token.has_wrapped_attrs;
      var parser_token = {
        text: raw_token.text,
        type: raw_token.type
      };
      printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== "", true);
      if (last_tag_token.is_unformatted) {
        printer.add_raw_token(raw_token);
      } else if (last_tag_token.tag_start_char === "{" && raw_token.type === TOKEN.TEXT) {
        if (printer.print_preserved_newlines(raw_token)) {
          raw_token.newlines = 0;
          printer.add_raw_token(raw_token);
        } else {
          printer.print_token(raw_token);
        }
      } else {
        if (raw_token.type === TOKEN.ATTRIBUTE) {
          printer.set_space_before_token(true);
        } else if (raw_token.type === TOKEN.EQUALS) {
          printer.set_space_before_token(false);
        } else if (raw_token.type === TOKEN.VALUE && raw_token.previous.type === TOKEN.EQUALS) {
          printer.set_space_before_token(false);
        }
        if (raw_token.type === TOKEN.ATTRIBUTE && last_tag_token.tag_start_char === "<") {
          if (this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) {
            printer.traverse_whitespace(raw_token);
            wrapped = wrapped || raw_token.newlines !== 0;
          }
          if (this._is_wrap_attributes_force && last_tag_token.attr_count >= this._options.wrap_attributes_min_attrs && (last_token.type !== TOKEN.TAG_OPEN || // ie. second attribute and beyond
          this._is_wrap_attributes_force_expand_multiline)) {
            printer.print_newline(false);
            wrapped = true;
          }
        }
        printer.print_token(raw_token);
        wrapped = wrapped || printer.previous_token_wrapped();
        last_tag_token.has_wrapped_attrs = wrapped;
      }
      return parser_token;
    };
    Beautifier.prototype._handle_text = function(printer, raw_token, last_tag_token) {
      var parser_token = {
        text: raw_token.text,
        type: "TK_CONTENT"
      };
      if (last_tag_token.custom_beautifier_name) {
        this._print_custom_beatifier_text(printer, raw_token, last_tag_token);
      } else if (last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) {
        printer.add_raw_token(raw_token);
      } else {
        printer.traverse_whitespace(raw_token);
        printer.print_token(raw_token);
      }
      return parser_token;
    };
    Beautifier.prototype._print_custom_beatifier_text = function(printer, raw_token, last_tag_token) {
      var local = this;
      if (raw_token.text !== "") {
        var text = raw_token.text, _beautifier, script_indent_level = 1, pre = "", post = "";
        if (last_tag_token.custom_beautifier_name === "javascript" && typeof this._js_beautify === "function") {
          _beautifier = this._js_beautify;
        } else if (last_tag_token.custom_beautifier_name === "css" && typeof this._css_beautify === "function") {
          _beautifier = this._css_beautify;
        } else if (last_tag_token.custom_beautifier_name === "html") {
          _beautifier = function(html_source, options) {
            var beautifier = new Beautifier(html_source, options, local._js_beautify, local._css_beautify);
            return beautifier.beautify();
          };
        }
        if (this._options.indent_scripts === "keep") {
          script_indent_level = 0;
        } else if (this._options.indent_scripts === "separate") {
          script_indent_level = -printer.indent_level;
        }
        var indentation = printer.get_full_indent(script_indent_level);
        text = text.replace(/\n[ \t]*$/, "");
        if (last_tag_token.custom_beautifier_name !== "html" && text[0] === "<" && text.match(/^(<!--|<!\[CDATA\[)/)) {
          var matched = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(text);
          if (!matched) {
            printer.add_raw_token(raw_token);
            return;
          }
          pre = indentation + matched[1] + "\n";
          text = matched[4];
          if (matched[5]) {
            post = indentation + matched[5];
          }
          text = text.replace(/\n[ \t]*$/, "");
          if (matched[2] || matched[3].indexOf("\n") !== -1) {
            matched = matched[3].match(/[ \t]+$/);
            if (matched) {
              raw_token.whitespace_before = matched[0];
            }
          }
        }
        if (text) {
          if (_beautifier) {
            var Child_options = function() {
              this.eol = "\n";
            };
            Child_options.prototype = this._options.raw_options;
            var child_options = new Child_options();
            text = _beautifier(indentation + text, child_options);
          } else {
            var white = raw_token.whitespace_before;
            if (white) {
              text = text.replace(new RegExp("\n(" + white + ")?", "g"), "\n");
            }
            text = indentation + text.replace(/\n/g, "\n" + indentation);
          }
        }
        if (pre) {
          if (!text) {
            text = pre + post;
          } else {
            text = pre + text + "\n" + post;
          }
        }
        printer.print_newline(false);
        if (text) {
          raw_token.text = text;
          raw_token.whitespace_before = "";
          raw_token.newlines = 0;
          printer.add_raw_token(raw_token);
          printer.print_newline(true);
        }
      }
    };
    Beautifier.prototype._handle_tag_open = function(printer, raw_token, last_tag_token, last_token, tokens) {
      var parser_token = this._get_tag_open_token(raw_token);
      if ((last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) && !last_tag_token.is_empty_element && raw_token.type === TOKEN.TAG_OPEN && !parser_token.is_start_tag) {
        printer.add_raw_token(raw_token);
        parser_token.start_tag_token = this._tag_stack.try_pop(parser_token.tag_name);
      } else {
        printer.traverse_whitespace(raw_token);
        this._set_tag_position(printer, raw_token, parser_token, last_tag_token, last_token);
        if (!parser_token.is_inline_element) {
          printer.set_wrap_point();
        }
        printer.print_token(raw_token);
      }
      if (parser_token.is_start_tag && this._is_wrap_attributes_force) {
        var peek_index = 0;
        var peek_token;
        do {
          peek_token = tokens.peek(peek_index);
          if (peek_token.type === TOKEN.ATTRIBUTE) {
            parser_token.attr_count += 1;
          }
          peek_index += 1;
        } while (peek_token.type !== TOKEN.EOF && peek_token.type !== TOKEN.TAG_CLOSE);
      }
      if (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) {
        parser_token.alignment_size = raw_token.text.length + 1;
      }
      if (!parser_token.tag_complete && !parser_token.is_unformatted) {
        printer.alignment_size = parser_token.alignment_size;
      }
      return parser_token;
    };
    var TagOpenParserToken = function(parent, raw_token) {
      this.parent = parent || null;
      this.text = "";
      this.type = "TK_TAG_OPEN";
      this.tag_name = "";
      this.is_inline_element = false;
      this.is_unformatted = false;
      this.is_content_unformatted = false;
      this.is_empty_element = false;
      this.is_start_tag = false;
      this.is_end_tag = false;
      this.indent_content = false;
      this.multiline_content = false;
      this.custom_beautifier_name = null;
      this.start_tag_token = null;
      this.attr_count = 0;
      this.has_wrapped_attrs = false;
      this.alignment_size = 0;
      this.tag_complete = false;
      this.tag_start_char = "";
      this.tag_check = "";
      if (!raw_token) {
        this.tag_complete = true;
      } else {
        var tag_check_match;
        this.tag_start_char = raw_token.text[0];
        this.text = raw_token.text;
        if (this.tag_start_char === "<") {
          tag_check_match = raw_token.text.match(/^<([^\s>]*)/);
          this.tag_check = tag_check_match ? tag_check_match[1] : "";
        } else {
          tag_check_match = raw_token.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/);
          this.tag_check = tag_check_match ? tag_check_match[1] : "";
          if ((raw_token.text.startsWith("{{#>") || raw_token.text.startsWith("{{~#>")) && this.tag_check[0] === ">") {
            if (this.tag_check === ">" && raw_token.next !== null) {
              this.tag_check = raw_token.next.text.split(" ")[0];
            } else {
              this.tag_check = raw_token.text.split(">")[1];
            }
          }
        }
        this.tag_check = this.tag_check.toLowerCase();
        if (raw_token.type === TOKEN.COMMENT) {
          this.tag_complete = true;
        }
        this.is_start_tag = this.tag_check.charAt(0) !== "/";
        this.tag_name = !this.is_start_tag ? this.tag_check.substr(1) : this.tag_check;
        this.is_end_tag = !this.is_start_tag || raw_token.closed && raw_token.closed.text === "/>";
        var handlebar_starts = 2;
        if (this.tag_start_char === "{" && this.text.length >= 3) {
          if (this.text.charAt(2) === "~") {
            handlebar_starts = 3;
          }
        }
        this.is_end_tag = this.is_end_tag || this.tag_start_char === "{" && (this.text.length < 3 || /[^#\^]/.test(this.text.charAt(handlebar_starts)));
      }
    };
    Beautifier.prototype._get_tag_open_token = function(raw_token) {
      var parser_token = new TagOpenParserToken(this._tag_stack.get_parser_token(), raw_token);
      parser_token.alignment_size = this._options.wrap_attributes_indent_size;
      parser_token.is_end_tag = parser_token.is_end_tag || in_array(parser_token.tag_check, this._options.void_elements);
      parser_token.is_empty_element = parser_token.tag_complete || parser_token.is_start_tag && parser_token.is_end_tag;
      parser_token.is_unformatted = !parser_token.tag_complete && in_array(parser_token.tag_check, this._options.unformatted);
      parser_token.is_content_unformatted = !parser_token.is_empty_element && in_array(parser_token.tag_check, this._options.content_unformatted);
      parser_token.is_inline_element = in_array(parser_token.tag_name, this._options.inline) || this._options.inline_custom_elements && parser_token.tag_name.includes("-") || parser_token.tag_start_char === "{";
      return parser_token;
    };
    Beautifier.prototype._set_tag_position = function(printer, raw_token, parser_token, last_tag_token, last_token) {
      if (!parser_token.is_empty_element) {
        if (parser_token.is_end_tag) {
          parser_token.start_tag_token = this._tag_stack.try_pop(parser_token.tag_name);
        } else {
          if (this._do_optional_end_element(parser_token)) {
            if (!parser_token.is_inline_element) {
              printer.print_newline(false);
            }
          }
          this._tag_stack.record_tag(parser_token);
          if ((parser_token.tag_name === "script" || parser_token.tag_name === "style") && !(parser_token.is_unformatted || parser_token.is_content_unformatted)) {
            parser_token.custom_beautifier_name = get_custom_beautifier_name(parser_token.tag_check, raw_token);
          }
        }
      }
      if (in_array(parser_token.tag_check, this._options.extra_liners)) {
        printer.print_newline(false);
        if (!printer._output.just_added_blankline()) {
          printer.print_newline(true);
        }
      }
      if (parser_token.is_empty_element) {
        if (parser_token.tag_start_char === "{" && parser_token.tag_check === "else") {
          this._tag_stack.indent_to_tag(["if", "unless", "each"]);
          parser_token.indent_content = true;
          var foundIfOnCurrentLine = printer.current_line_has_match(/{{#if/);
          if (!foundIfOnCurrentLine) {
            printer.print_newline(false);
          }
        }
        if (parser_token.tag_name === "!--" && last_token.type === TOKEN.TAG_CLOSE && last_tag_token.is_end_tag && parser_token.text.indexOf("\n") === -1) {
        } else {
          if (!(parser_token.is_inline_element || parser_token.is_unformatted)) {
            printer.print_newline(false);
          }
          this._calcluate_parent_multiline(printer, parser_token);
        }
      } else if (parser_token.is_end_tag) {
        var do_end_expand = false;
        do_end_expand = parser_token.start_tag_token && parser_token.start_tag_token.multiline_content;
        do_end_expand = do_end_expand || !parser_token.is_inline_element && !(last_tag_token.is_inline_element || last_tag_token.is_unformatted) && !(last_token.type === TOKEN.TAG_CLOSE && parser_token.start_tag_token === last_tag_token) && last_token.type !== "TK_CONTENT";
        if (parser_token.is_content_unformatted || parser_token.is_unformatted) {
          do_end_expand = false;
        }
        if (do_end_expand) {
          printer.print_newline(false);
        }
      } else {
        parser_token.indent_content = !parser_token.custom_beautifier_name;
        if (parser_token.tag_start_char === "<") {
          if (parser_token.tag_name === "html") {
            parser_token.indent_content = this._options.indent_inner_html;
          } else if (parser_token.tag_name === "head") {
            parser_token.indent_content = this._options.indent_head_inner_html;
          } else if (parser_token.tag_name === "body") {
            parser_token.indent_content = this._options.indent_body_inner_html;
          }
        }
        if (!(parser_token.is_inline_element || parser_token.is_unformatted) && (last_token.type !== "TK_CONTENT" || parser_token.is_content_unformatted)) {
          printer.print_newline(false);
        }
        this._calcluate_parent_multiline(printer, parser_token);
      }
    };
    Beautifier.prototype._calcluate_parent_multiline = function(printer, parser_token) {
      if (parser_token.parent && printer._output.just_added_newline() && !((parser_token.is_inline_element || parser_token.is_unformatted) && parser_token.parent.is_inline_element)) {
        parser_token.parent.multiline_content = true;
      }
    };
    var p_closers = ["address", "article", "aside", "blockquote", "details", "div", "dl", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "main", "menu", "nav", "ol", "p", "pre", "section", "table", "ul"];
    var p_parent_excludes = ["a", "audio", "del", "ins", "map", "noscript", "video"];
    Beautifier.prototype._do_optional_end_element = function(parser_token) {
      var result = null;
      if (parser_token.is_empty_element || !parser_token.is_start_tag || !parser_token.parent) {
        return;
      }
      if (parser_token.tag_name === "body") {
        result = result || this._tag_stack.try_pop("head");
      } else if (parser_token.tag_name === "li") {
        result = result || this._tag_stack.try_pop("li", ["ol", "ul", "menu"]);
      } else if (parser_token.tag_name === "dd" || parser_token.tag_name === "dt") {
        result = result || this._tag_stack.try_pop("dt", ["dl"]);
        result = result || this._tag_stack.try_pop("dd", ["dl"]);
      } else if (parser_token.parent.tag_name === "p" && p_closers.indexOf(parser_token.tag_name) !== -1) {
        var p_parent = parser_token.parent.parent;
        if (!p_parent || p_parent_excludes.indexOf(p_parent.tag_name) === -1) {
          result = result || this._tag_stack.try_pop("p");
        }
      } else if (parser_token.tag_name === "rp" || parser_token.tag_name === "rt") {
        result = result || this._tag_stack.try_pop("rt", ["ruby", "rtc"]);
        result = result || this._tag_stack.try_pop("rp", ["ruby", "rtc"]);
      } else if (parser_token.tag_name === "optgroup") {
        result = result || this._tag_stack.try_pop("optgroup", ["select"]);
      } else if (parser_token.tag_name === "option") {
        result = result || this._tag_stack.try_pop("option", ["select", "datalist", "optgroup"]);
      } else if (parser_token.tag_name === "colgroup") {
        result = result || this._tag_stack.try_pop("caption", ["table"]);
      } else if (parser_token.tag_name === "thead") {
        result = result || this._tag_stack.try_pop("caption", ["table"]);
        result = result || this._tag_stack.try_pop("colgroup", ["table"]);
      } else if (parser_token.tag_name === "tbody" || parser_token.tag_name === "tfoot") {
        result = result || this._tag_stack.try_pop("caption", ["table"]);
        result = result || this._tag_stack.try_pop("colgroup", ["table"]);
        result = result || this._tag_stack.try_pop("thead", ["table"]);
        result = result || this._tag_stack.try_pop("tbody", ["table"]);
      } else if (parser_token.tag_name === "tr") {
        result = result || this._tag_stack.try_pop("caption", ["table"]);
        result = result || this._tag_stack.try_pop("colgroup", ["table"]);
        result = result || this._tag_stack.try_pop("tr", ["table", "thead", "tbody", "tfoot"]);
      } else if (parser_token.tag_name === "th" || parser_token.tag_name === "td") {
        result = result || this._tag_stack.try_pop("td", ["table", "thead", "tbody", "tfoot", "tr"]);
        result = result || this._tag_stack.try_pop("th", ["table", "thead", "tbody", "tfoot", "tr"]);
      }
      parser_token.parent = this._tag_stack.get_parser_token();
      return result;
    };
    module.exports.Beautifier = Beautifier;
  }
});

// node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/html/index.js
var require_html = __commonJS({
  "node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/html/index.js"(exports, module) {
    "use strict";
    var Beautifier = require_beautifier3().Beautifier;
    var Options = require_options4().Options;
    function style_html(html_source, options, js_beautify, css_beautify) {
      var beautifier = new Beautifier(html_source, options, js_beautify, css_beautify);
      return beautifier.beautify();
    }
    module.exports = style_html;
    module.exports.defaultOptions = function() {
      return new Options();
    };
  }
});

// node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/index.js
var require_src = __commonJS({
  "node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/src/index.js"(exports, module) {
    "use strict";
    var js_beautify = require_javascript();
    var css_beautify = require_css();
    var html_beautify = require_html();
    function style_html(html_source, options, js, css) {
      js = js || js_beautify;
      css = css || css_beautify;
      return html_beautify(html_source, options, js, css);
    }
    style_html.defaultOptions = html_beautify.defaultOptions;
    module.exports.js = js_beautify;
    module.exports.css = css_beautify;
    module.exports.html = style_html;
  }
});

// node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/index.js
var require_js = __commonJS({
  "node_modules/.pnpm/js-beautify@1.15.1/node_modules/js-beautify/js/index.js"(exports, module) {
    "use strict";
    function get_beautify(js_beautify, css_beautify, html_beautify) {
      var beautify2 = function(src, config) {
        return js_beautify.js_beautify(src, config);
      };
      beautify2.js = js_beautify.js_beautify;
      beautify2.css = css_beautify.css_beautify;
      beautify2.html = html_beautify.html_beautify;
      beautify2.js_beautify = js_beautify.js_beautify;
      beautify2.css_beautify = css_beautify.css_beautify;
      beautify2.html_beautify = html_beautify.html_beautify;
      return beautify2;
    }
    if (typeof define === "function" && define.amd) {
      define(
        [
          "./lib/beautify",
          "./lib/beautify-css",
          "./lib/beautify-html"
        ],
        function(js_beautify, css_beautify, html_beautify) {
          return get_beautify(js_beautify, css_beautify, html_beautify);
        }
      );
    } else {
      (function(mod) {
        var beautifier = require_src();
        beautifier.js_beautify = beautifier.js;
        beautifier.css_beautify = beautifier.css;
        beautifier.html_beautify = beautifier.html;
        mod.exports = get_beautify(beautifier, beautifier, beautifier);
      })(module);
    }
  }
});

// @/hooks/useFunctionBindings.ts
var KEY = "functionBindings";
var getFunctionBindings = async (sheetId) => {
  const bindings = await localForageInstance.getItem(
    KEY
  );
  const fns = await localForageInstance.getItem("functions") || [];
  if (fns === null) {
    throw new Error("Failed to load functions");
  }
  const resources = DEFAULT_RESOURCES;
  const fnIdToFn = fns.reduce((acc, fn) => {
    acc[fn.id] = fn;
    return acc;
  }, {});
  const resourceIdToResource = resources.reduce((acc, resource) => {
    acc[resource.id] = resource;
    return acc;
  }, {});
  const res = bindings?.find((f) => f.sheetId === sheetId);
  const namesSet = /* @__PURE__ */ new Set();
  if (bindings === null || res === void 0) {
    const functionBindings = [];
    fns.forEach((fn) => {
      let name = fn.functionName;
      if (namesSet.has(name)) {
        let i = 1;
        while (namesSet.has(`${name}_${i}`)) {
          i++;
        }
        name = `${name}_${i}`;
      }
      namesSet.add(name);
      functionBindings.push({
        name,
        functionId: fn.id,
        isCustom: true,
        function: {
          ...fn,
          resource: fn.type === "llm" ? resourceIdToResource[fn.resourceId] : null
        }
      });
    });
    return {
      sheetId,
      functionBindings
    };
  }
  return {
    sheetId,
    functionBindings: res.functionBindings.map((binding) => ({
      ...binding,
      function: fnIdToFn[binding.functionId] ? {
        ...fnIdToFn[binding.functionId],
        resource: fnIdToFn[binding.functionId].type === "llm" ? resourceIdToResource[fnIdToFn[binding.functionId].resourceId] : null
      } : null
    }))
  };
};
var useFunctionBindings = (sheetId) => {
  return useQuery({
    queryKey: [KEY, sheetId],
    queryFn: async () => {
      return getFunctionBindings(
        sheetId
      );
    }
  });
};
var useNormalizedBindings = (spreadsheetId) => {
  const { data: functionBindings } = useFunctionBindings(spreadsheetId);
  return useQuery({
    queryKey: [
      "normalizedBindings",
      spreadsheetId,
      functionBindings === void 0 ? "false" : "true"
    ],
    queryFn: () => {
      if (!functionBindings) {
        return [];
      }
      const bindings = functionBindings.functionBindings.sort(
        (a, b) => a.name.localeCompare(b.name)
      );
      const normalized = bindings.map((fn) => {
        let params = "";
        if (fn.function?.type === "function") {
          const runFn = getRunFunction(fn.function?.functionBody ?? "");
          params = runFn.params;
        } else if (fn.function?.type === "llm") {
          const variables = fn.function.messages.flatMap(
            (message) => extractMustacheVariables(message.content)
          );
          params = `args:{${variables.map((varName) => `${varName}: string`).join(", ")}}`;
        }
        return {
          ...fn,
          name: fn.name.toLowerCase(),
          params: `${params}`,
          description: fn.function?.description
        };
      });
      return normalized;
    }
  });
};
var UpdatefunctionBindingsArgs = z.object({
  sheetId: z.string(),
  functionBindings: z.array(
    z.object({
      name: z.string(),
      functionId: z.string(),
      isCustom: z.boolean()
    })
  )
});
var useUpdatefunctionBindings = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updatefunctionBindings"],
    mutationFn: async (args) => {
      const functionBindings = await localForageInstance.getItem(KEY) ?? [];
      const newfunctionBindings = functionBindings.filter(
        (f) => f.sheetId !== args.sheetId
      );
      newfunctionBindings.push(args);
      await localForageInstance.setItem(KEY, newfunctionBindings);
      const res = newfunctionBindings.find((f) => f.sheetId === args.sheetId);
      if (res === void 0) {
        throw new Error("Failed to update function bindings");
      }
      const newBindings = await getFunctionBindings(args.sheetId);
      queryClient.setQueryData([KEY, args.sheetId], newBindings);
    }
  });
};

// @/store/useSheetStore.ts
var import_react3 = __toESM(require_react(), 1);

// node_modules/.pnpm/zustand@4.5.5_@types+react@18.3.3_react@18.3.1/node_modules/zustand/esm/vanilla.mjs
var createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState2 = () => state;
  const getInitialState = () => initialState2;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => {
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
      );
    }
    listeners.clear();
  };
  const api = { setState, getState: getState2, getInitialState, subscribe, destroy };
  const initialState2 = state = createState(setState, getState2, api);
  return api;
};
var createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

// node_modules/.pnpm/zustand@4.5.5_@types+react@18.3.3_react@18.3.1/node_modules/zustand/esm/index.mjs
var import_react = __toESM(require_react(), 1);
var import_with_selector = __toESM(require_with_selector(), 1);
var { useDebugValue } = import_react.default;
var { useSyncExternalStoreWithSelector } = import_with_selector.default;
var didWarnAboutEqualityFn = false;
var identity = (arg) => arg;
function useStore(api, selector = identity, equalityFn) {
  if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && equalityFn && !didWarnAboutEqualityFn) {
    console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    );
    didWarnAboutEqualityFn = true;
  }
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getInitialState,
    selector,
    equalityFn
  );
  useDebugValue(slice);
  return slice;
}

// node_modules/.pnpm/zustand@4.5.5_@types+react@18.3.3_react@18.3.1/node_modules/zustand/esm/middleware.mjs
var trackedConnections = /* @__PURE__ */ new Map();
var getTrackedConnectionState = (name) => {
  const api = trackedConnections.get(name);
  if (!api)
    return {};
  return Object.fromEntries(
    Object.entries(api.stores).map(([key, api2]) => [key, api2.getState()])
  );
};
var extractConnectionInformation = (store, extensionConnector, options) => {
  if (store === void 0) {
    return {
      type: "untracked",
      connection: extensionConnector.connect(options)
    };
  }
  const existingConnection = trackedConnections.get(options.name);
  if (existingConnection) {
    return { type: "tracked", store, ...existingConnection };
  }
  const newConnection = {
    connection: extensionConnector.connect(options),
    stores: {}
  };
  trackedConnections.set(options.name, newConnection);
  return { type: "tracked", store, ...newConnection };
};
var devtoolsImpl = (fn, devtoolsOptions = {}) => (set, get, api) => {
  const { enabled, anonymousActionType, store, ...options } = devtoolsOptions;
  let extensionConnector;
  try {
    extensionConnector = (enabled != null ? enabled : (import.meta.env ? import.meta.env.MODE : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch (_e) {
  }
  if (!extensionConnector) {
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && enabled) {
      console.warn(
        "[zustand devtools middleware] Please install/enable Redux devtools extension"
      );
    }
    return fn(set, get, api);
  }
  const { connection, ...connectionInformation } = extractConnectionInformation(store, extensionConnector, options);
  let isRecording = true;
  api.setState = (state, replace, nameOrAction) => {
    const r = set(state, replace);
    if (!isRecording)
      return r;
    const action = nameOrAction === void 0 ? { type: anonymousActionType || "anonymous" } : typeof nameOrAction === "string" ? { type: nameOrAction } : nameOrAction;
    if (store === void 0) {
      connection == null ? void 0 : connection.send(action, get());
      return r;
    }
    connection == null ? void 0 : connection.send(
      {
        ...action,
        type: `${store}/${action.type}`
      },
      {
        ...getTrackedConnectionState(options.name),
        [store]: api.getState()
      }
    );
    return r;
  };
  const setStateFromDevtools = (...a) => {
    const originalIsRecording = isRecording;
    isRecording = false;
    set(...a);
    isRecording = originalIsRecording;
  };
  const initialState2 = fn(api.setState, get, api);
  if (connectionInformation.type === "untracked") {
    connection == null ? void 0 : connection.init(initialState2);
  } else {
    connectionInformation.stores[connectionInformation.store] = api;
    connection == null ? void 0 : connection.init(
      Object.fromEntries(
        Object.entries(connectionInformation.stores).map(([key, store2]) => [
          key,
          key === connectionInformation.store ? initialState2 : store2.getState()
        ])
      )
    );
  }
  if (api.dispatchFromDevtools && typeof api.dispatch === "function") {
    let didWarnAboutReservedActionType = false;
    const originalDispatch = api.dispatch;
    api.dispatch = (...a) => {
      if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && a[0].type === "__setState" && !didWarnAboutReservedActionType) {
        console.warn(
          '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
        );
        didWarnAboutReservedActionType = true;
      }
      originalDispatch(...a);
    };
  }
  connection.subscribe((message) => {
    var _a;
    switch (message.type) {
      case "ACTION":
        if (typeof message.payload !== "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return parseJsonThen(
          message.payload,
          (action) => {
            if (action.type === "__setState") {
              if (store === void 0) {
                setStateFromDevtools(action.state);
                return;
              }
              if (Object.keys(action.state).length !== 1) {
                console.error(
                  `
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
                );
              }
              const stateFromDevtools = action.state[store];
              if (stateFromDevtools === void 0 || stateFromDevtools === null) {
                return;
              }
              if (JSON.stringify(api.getState()) !== JSON.stringify(stateFromDevtools)) {
                setStateFromDevtools(stateFromDevtools);
              }
              return;
            }
            if (!api.dispatchFromDevtools)
              return;
            if (typeof api.dispatch !== "function")
              return;
            api.dispatch(action);
          }
        );
      case "DISPATCH":
        switch (message.payload.type) {
          case "RESET":
            setStateFromDevtools(initialState2);
            if (store === void 0) {
              return connection == null ? void 0 : connection.init(api.getState());
            }
            return connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
          case "COMMIT":
            if (store === void 0) {
              connection == null ? void 0 : connection.init(api.getState());
              return;
            }
            return connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
          case "ROLLBACK":
            return parseJsonThen(message.state, (state) => {
              if (store === void 0) {
                setStateFromDevtools(state);
                connection == null ? void 0 : connection.init(api.getState());
                return;
              }
              setStateFromDevtools(state[store]);
              connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return parseJsonThen(message.state, (state) => {
              if (store === void 0) {
                setStateFromDevtools(state);
                return;
              }
              if (JSON.stringify(api.getState()) !== JSON.stringify(state[store])) {
                setStateFromDevtools(state[store]);
              }
            });
          case "IMPORT_STATE": {
            const { nextLiftedState } = message.payload;
            const lastComputedState = (_a = nextLiftedState.computedStates.slice(-1)[0]) == null ? void 0 : _a.state;
            if (!lastComputedState)
              return;
            if (store === void 0) {
              setStateFromDevtools(lastComputedState);
            } else {
              setStateFromDevtools(lastComputedState[store]);
            }
            connection == null ? void 0 : connection.send(
              null,
              // FIXME no-any
              nextLiftedState
            );
            return;
          }
          case "PAUSE_RECORDING":
            return isRecording = !isRecording;
        }
        return;
    }
  });
  return initialState2;
};
var devtools = devtoolsImpl;
var parseJsonThen = (stringified, f) => {
  let parsed;
  try {
    parsed = JSON.parse(stringified);
  } catch (e) {
    console.error(
      "[zustand devtools middleware] Could not parse the received json",
      e
    );
  }
  if (parsed !== void 0)
    f(parsed);
};
var subscribeWithSelectorImpl = (fn) => (set, get, api) => {
  const origSubscribe = api.subscribe;
  api.subscribe = (selector, optListener, options) => {
    let listener = selector;
    if (optListener) {
      const equalityFn = (options == null ? void 0 : options.equalityFn) || Object.is;
      let currentSlice = selector(api.getState());
      listener = (state) => {
        const nextSlice = selector(state);
        if (!equalityFn(currentSlice, nextSlice)) {
          const previousSlice = currentSlice;
          optListener(currentSlice = nextSlice, previousSlice);
        }
      };
      if (options == null ? void 0 : options.fireImmediately) {
        optListener(currentSlice, currentSlice);
      }
    }
    return origSubscribe(listener);
  };
  const initialState2 = fn(set, get, api);
  return initialState2;
};
var subscribeWithSelector = subscribeWithSelectorImpl;

// node_modules/.pnpm/zustand@4.5.5_@types+react@18.3.3_react@18.3.1/node_modules/zustand/esm/react/shallow.mjs
var import_react2 = __toESM(require_react(), 1);
function shallow(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  if (objA instanceof Map && objB instanceof Map) {
    if (objA.size !== objB.size)
      return false;
    for (const [key, value] of objA) {
      if (!Object.is(value, objB.get(key))) {
        return false;
      }
    }
    return true;
  }
  if (objA instanceof Set && objB instanceof Set) {
    if (objA.size !== objB.size)
      return false;
    for (const value of objA) {
      if (!objB.has(value)) {
        return false;
      }
    }
    return true;
  }
  const keysA = Object.keys(objA);
  if (keysA.length !== Object.keys(objB).length) {
    return false;
  }
  for (const keyA of keysA) {
    if (!Object.prototype.hasOwnProperty.call(objB, keyA) || !Object.is(objA[keyA], objB[keyA])) {
      return false;
    }
  }
  return true;
}
var { useRef } = import_react2.default;
function useShallow(selector) {
  const prev = useRef();
  return (state) => {
    const next = selector(state);
    return shallow(prev.current, next) ? prev.current : prev.current = next;
  };
}

// @/store/useSheetStore.ts
var SheetStateContext = (0, import_react3.createContext)(null);
var createSheetStateStore = (initialSpreadsheet, sheetId) => {
  const seletedSheet = initialSpreadsheet.sheets.find((s) => s.id === sheetId);
  const store = createStore()(
    subscribeWithSelector(
      devtools((set, get) => ({
        spreadsheet: initialSpreadsheet,
        setSpreadsheet: (spreadsheet) => {
          set({ spreadsheet });
        },
        currentSheetState: seletedSheet || initialSpreadsheet.sheets[0] || {
          ...initialState,
          id: sheetId || v4_default()
        },
        currentSheetId: sheetId || initialSpreadsheet.sheets[0]?.id || v4_default(),
        setCurrentSheetId: (id) => {
          const sheet = get().spreadsheet.sheets.find((s) => s.id === id);
          if (sheet) {
            set({ currentSheetState: sheet, currentSheetId: id });
          }
        },
        tableRef: { current: null },
        activePromises: /* @__PURE__ */ new Set(),
        undoStack: [],
        redoStack: [],
        dispatch: (action, functionBindings, secretKeys) => {
          const { currentSheetState } = get();
          const inverseAction = getInverseAction(currentSheetState, action);
          const newState = applyAction(
            currentSheetState,
            action,
            functionBindings,
            secretKeys
          );
          const newUndoStack = [...newState.undoStack ?? []];
          if (inverseAction) {
            newUndoStack.unshift(inverseAction);
          }
          const newSheetState = {
            ...newState,
            undoStack: newUndoStack
          };
          set({
            currentSheetState: newSheetState,
            spreadsheet: {
              ...get().spreadsheet,
              sheets: get().spreadsheet.sheets.map(
                (s) => s.id === newSheetState.id ? newSheetState : s
              )
            }
          });
          void updateSheet(get().spreadsheet.id, {
            ...newSheetState,
            promises: null
          });
          if (newState.promises !== null) {
            handlePromises(get, set, newState.promises);
          }
          return newSheetState;
        }
      }))
    )
  );
  return store;
};
var handlePromises = (get, set, promises) => {
  Object.entries(promises).forEach(([colStr, rows]) => {
    const colIndex = parseInt(colStr, 10);
    Object.entries(rows).forEach(([rowStr, promise]) => {
      const rowIndex = parseInt(rowStr, 10);
      const promiseKey = `${colIndex}-${rowIndex}`;
      if (promise instanceof Promise && !get().activePromises.has(promiseKey)) {
        get().activePromises.add(promiseKey);
        promise.then((value) => {
          const updatedState = handleValueUpdate(get().currentSheetState, {
            col: colIndex,
            row: rowIndex,
            value: typeof value === "object" ? JSON.stringify(value) : value,
            display: get().currentSheetState.cellStates[colIndex][rowIndex].display
          });
          updatedState.cellStates[colIndex][rowIndex] = {
            ...updatedState.cellStates[colIndex][rowIndex],
            type: typeof value
          };
          const newPromises = {
            ...promises
          };
          delete newPromises[colIndex][rowIndex];
          set({
            currentSheetState: {
              ...updatedState,
              promises: newPromises
            },
            spreadsheet: {
              ...get().spreadsheet,
              sheets: get().spreadsheet.sheets.map(
                (s) => s.id === updatedState.id ? updatedState : s
              )
            }
          });
          void updateSheet(get().spreadsheet.id, {
            ...updatedState,
            promises: null
          });
          get().activePromises.delete(promiseKey);
        }).catch((error) => {
          const updatedState = handleValueUpdate(get().currentSheetState, {
            col: colIndex,
            row: rowIndex,
            value: "#ERROR",
            display: get().currentSheetState.cellStates[colIndex][rowIndex].display
          });
          updatedState.cellStates[colIndex][rowIndex] = {
            ...updatedState.cellStates[colIndex][rowIndex],
            type: "string",
            promise: void 0
          };
          console.error(error);
          const newPromises = {
            ...promises
          };
          delete newPromises[colIndex][rowIndex];
          set({
            currentSheetState: {
              ...updatedState,
              promises: newPromises
            },
            spreadsheet: {
              ...get().spreadsheet,
              sheets: get().spreadsheet.sheets.map(
                (s) => s.id === updatedState.id ? updatedState : s
              )
            }
          });
          get().activePromises.delete(promiseKey);
          void updateSheet(get().spreadsheet.id, {
            ...updatedState,
            promises: null
          });
        });
      }
    });
  });
};
var useDispatch = (spreadsheetId) => {
  const { data: functionBindings } = useFunctionBindings(spreadsheetId);
  const { data: secretKeys } = useSecretKeys();
  const sheetStateStore = (0, import_react3.useContext)(SheetStateContext);
  if (!sheetStateStore) {
    throw new Error("useSheetState must be used within a SheetProvider");
  }
  const dispatchFunction = useStore(
    sheetStateStore,
    useShallow((state) => state.dispatch)
  );
  const dispatch = (0, import_react3.useCallback)(
    (action) => {
      const newState = dispatchFunction(action, functionBindings, secretKeys);
      return newState;
    },
    [dispatchFunction, functionBindings, secretKeys]
  );
  return dispatch;
};

// @/components/Sheet.tsx
var import_react32 = __toESM(require_react(), 1);

// @/components/ClickableInput.tsx
var import_react4 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var ClickableInput = ({
  value,
  parse,
  placeholder,
  description,
  type = "text",
  label,
  onClick,
  onBlur,
  rootClassName,
  inputClassName,
  buttonClassName,
  disabled = false
}) => {
  const [isClicked, setIsClicked] = (0, import_react4.useState)(false);
  const [inputText, setInputText] = (0, import_react4.useState)(value);
  (0, import_react4.useEffect)(() => {
    setInputText(value);
  }, [value]);
  const [error, setError] = (0, import_react4.useState)(void 0);
  const handleFinish = () => {
    if (error !== void 0) {
      return;
    }
    setIsClicked(false);
    onBlur?.(inputText);
  };
  const isEmpty = inputText === "";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn(["flex", "flex-col", "gap-1", rootClassName]), children: [
    label !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "label",
      {
        className: cn([
          "px-2",
          "text-xs",
          "text-stone-500",
          "dark:text-stone-400"
        ]),
        children: label
      },
      void 0,
      false,
      {
        fileName: "@/components/ClickableInput.tsx",
        lineNumber: 58,
        columnNumber: 9
      },
      this
    ),
    !isClicked && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Button,
      {
        variant: "unstyled",
        onClick: () => {
          setIsClicked(true);
          onClick?.();
        },
        className: cn([
          "px-2",
          "py-1",
          "rounded-md",
          "justify-start",
          `text-left`,
          "focus:border-none",
          "min-h-8",
          "focus-visible:outline-0",
          "focus-visible:ring-0",
          "focus-visible:border-none",
          "text-sm",
          isEmpty && ["text-stone-400", "dark:text-stone-500"],
          buttonClassName
        ]),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: isEmpty ? placeholder : inputText }, void 0, false, {
          fileName: "@/components/ClickableInput.tsx",
          lineNumber: 92,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "@/components/ClickableInput.tsx",
        lineNumber: 70,
        columnNumber: 9
      },
      this
    ),
    isClicked && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        className: cn([
          "rounded-md",
          "px-2",
          "py-1",
          "min-h-8",
          "border",
          "ring-0",
          "outline-0",
          "focus-visible:outline-0",
          "focus-visible:ring-0",
          "focus-visible:border-none",
          "text-sm",
          "bg-transparent",
          inputClassName
        ]),
        autoFocus: true,
        type,
        disabled,
        onBlur: () => handleFinish(),
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === "Escape") {
            handleFinish();
          }
        },
        value: inputText,
        onChange: (event) => {
          try {
            setInputText(parse(event.target.value));
            setError(void 0);
          } catch (e) {
            setInputText(event.target.value);
            if (e instanceof ZodError && e.errors.length > 0) {
              setError(e.errors[0]?.message);
            } else if (e instanceof Error) {
              setError(e.message);
            }
          }
        }
      },
      void 0,
      false,
      {
        fileName: "@/components/ClickableInput.tsx",
        lineNumber: 96,
        columnNumber: 9
      },
      this
    ),
    error === void 0 && description !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "p",
      {
        className: cn([
          "word-wrap",
          "px-2",
          "text-xs",
          "text-stone-500",
          "dark:text-stone-400"
        ]),
        children: description
      },
      void 0,
      false,
      {
        fileName: "@/components/ClickableInput.tsx",
        lineNumber: 138,
        columnNumber: 9
      },
      this
    ),
    error !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "p",
      {
        className: cn([
          "word-wrap",
          "px-2",
          "text-xs",
          "text-red-500",
          "dark:text-red-400"
        ]),
        children: error
      },
      void 0,
      false,
      {
        fileName: "@/components/ClickableInput.tsx",
        lineNumber: 151,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "@/components/ClickableInput.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
};

// @/components/ContextMenu.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var ContextMenu = ({
  position,
  disabledMenuItems,
  onClose,
  onInsertRow,
  onInsertRowBelow,
  onInsertColumn,
  onInsertColumnRight,
  onWrapText,
  onDeleteRow,
  onDeleteColumn,
  onRunCell
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenu, { open: true, onOpenChange: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    DropdownMenuContent,
    {
      className: "w-52 z-[1000] rounded-none",
      style: { position: "absolute", top: position.y, left: position.x },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { onClick: onInsertRow, children: "Insert Row Above" }, void 0, false, {
          fileName: "@/components/ContextMenu.tsx",
          lineNumber: 50,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { onClick: onInsertRowBelow, children: "Insert Row Below" }, void 0, false, {
          fileName: "@/components/ContextMenu.tsx",
          lineNumber: 53,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { onClick: onInsertColumn, children: "Insert Column Left" }, void 0, false, {
          fileName: "@/components/ContextMenu.tsx",
          lineNumber: 56,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { onClick: onInsertColumnRight, children: "Insert Column Right" }, void 0, false, {
          fileName: "@/components/ContextMenu.tsx",
          lineNumber: 59,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
          fileName: "@/components/ContextMenu.tsx",
          lineNumber: 62,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { onClick: onWrapText, children: "Wrap Text" }, void 0, false, {
          fileName: "@/components/ContextMenu.tsx",
          lineNumber: 63,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
          fileName: "@/components/ContextMenu.tsx",
          lineNumber: 64,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          DropdownMenuItem,
          {
            disabled: disabledMenuItems.includes("runCell"),
            onClick: onRunCell,
            children: "Run Cell"
          },
          void 0,
          false,
          {
            fileName: "@/components/ContextMenu.tsx",
            lineNumber: 65,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
          fileName: "@/components/ContextMenu.tsx",
          lineNumber: 71,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { onClick: onDeleteRow, children: "Delete Row" }, void 0, false, {
          fileName: "@/components/ContextMenu.tsx",
          lineNumber: 72,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { onClick: onDeleteColumn, children: "Delete Column" }, void 0, false, {
          fileName: "@/components/ContextMenu.tsx",
          lineNumber: 73,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "@/components/ContextMenu.tsx",
      lineNumber: 46,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "@/components/ContextMenu.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
};
var RowContextMenu = ({
  position,
  numRows,
  onClose,
  onInsertRow,
  onInsertRowBelow,
  onDeleteRow,
  onResizeRow
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenu, { open: true, onOpenChange: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    DropdownMenuContent,
    {
      className: "w-52 z-[1000] rounded-none",
      style: { position: "absolute", top: position.y, left: position.x },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { onClick: onInsertRow, children: `Insert ${numRows} row${numRows > 1 ? "s" : ""} above` }, void 0, false, {
          fileName: "@/components/ContextMenu.tsx",
          lineNumber: 107,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { onClick: onInsertRowBelow, children: `Insert ${numRows} row${numRows > 1 ? "s" : ""} below` }, void 0, false, {
          fileName: "@/components/ContextMenu.tsx",
          lineNumber: 110,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { onClick: onDeleteRow, children: `Delete ${numRows} row${numRows > 1 ? "s" : ""}` }, void 0, false, {
          fileName: "@/components/ContextMenu.tsx",
          lineNumber: 113,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { onClick: onResizeRow, children: `Resize ${numRows} row${numRows > 1 ? "s" : ""}` }, void 0, false, {
          fileName: "@/components/ContextMenu.tsx",
          lineNumber: 115,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "@/components/ContextMenu.tsx",
      lineNumber: 103,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "@/components/ContextMenu.tsx",
    lineNumber: 102,
    columnNumber: 5
  }, this);
};

// @/components/CopySheetDialog.tsx
var import_react5 = __toESM(require_react(), 1);

// @/components/ui/radio-group.tsx
var React3 = __toESM(require_react(), 1);

// node_modules/.pnpm/@radix-ui+react-radio-group@1.2.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3._7gkyksohyqqlw7i77w7n7uwtda/node_modules/@radix-ui/react-radio-group/dist/index.mjs
var React2 = __toESM(require_react(), 1);
var React = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
"use client";
var RADIO_NAME = "Radio";
var [createRadioContext, createRadioScope] = createContextScope(RADIO_NAME);
var [RadioProvider, useRadioContext] = createRadioContext(RADIO_NAME);
var Radio = React.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRadio,
      name,
      checked = false,
      required,
      disabled,
      value = "on",
      onCheck,
      ...radioProps
    } = props;
    const [button, setButton] = React.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = React.useRef(false);
    const isFormControl = button ? Boolean(button.closest("form")) : true;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioProvider, { scope: __scopeRadio, checked, disabled, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Primitive.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": checked,
          "data-state": getState(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...radioProps,
          ref: composedRefs,
          onClick: composeEventHandlers(props.onClick, (event) => {
            if (!checked)
              onCheck?.();
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current)
                event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        BubbleInput,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Radio.displayName = RADIO_NAME;
var INDICATOR_NAME = "RadioIndicator";
var RadioIndicator = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeRadio, forceMount, ...indicatorProps } = props;
    const context = useRadioContext(INDICATOR_NAME, __scopeRadio);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, { present: forceMount || context.checked, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Primitive.span,
      {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...indicatorProps,
        ref: forwardedRef
      }
    ) });
  }
);
RadioIndicator.displayName = INDICATOR_NAME;
var BubbleInput = (props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = React.useRef(null);
  const prevChecked = usePrevious(checked);
  const controlSize = useSize(control);
  React.useEffect(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", { bubbles });
      setChecked.call(input, checked);
      input.dispatchEvent(event);
    }
  }, [prevChecked, checked, bubbles]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "input",
    {
      type: "radio",
      "aria-hidden": true,
      defaultChecked: checked,
      ...inputProps,
      tabIndex: -1,
      ref,
      style: {
        ...props.style,
        ...controlSize,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function getState(checked) {
  return checked ? "checked" : "unchecked";
}
var ARROW_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var RADIO_GROUP_NAME = "RadioGroup";
var [createRadioGroupContext, createRadioGroupScope] = createContextScope(RADIO_GROUP_NAME, [
  createRovingFocusGroupScope,
  createRadioScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var useRadioScope = createRadioScope();
var [RadioGroupProvider, useRadioGroupContext] = createRadioGroupContext(RADIO_GROUP_NAME);
var RadioGroup = React2.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRadioGroup,
      name,
      defaultValue,
      value: valueProp,
      required = false,
      disabled = false,
      orientation,
      dir,
      loop = true,
      onValueChange,
      ...groupProps
    } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue,
      onChange: onValueChange
    });
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      RadioGroupProvider,
      {
        scope: __scopeRadioGroup,
        name,
        required,
        disabled,
        value,
        onValueChange: setValue,
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          Root,
          {
            asChild: true,
            ...rovingFocusGroupScope,
            orientation,
            dir: direction,
            loop,
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              Primitive.div,
              {
                role: "radiogroup",
                "aria-required": required,
                "aria-orientation": orientation,
                "data-disabled": disabled ? "" : void 0,
                dir: direction,
                ...groupProps,
                ref: forwardedRef
              }
            )
          }
        )
      }
    );
  }
);
RadioGroup.displayName = RADIO_GROUP_NAME;
var ITEM_NAME = "RadioGroupItem";
var RadioGroupItem = React2.forwardRef(
  (props, forwardedRef) => {
    const { __scopeRadioGroup, disabled, ...itemProps } = props;
    const context = useRadioGroupContext(ITEM_NAME, __scopeRadioGroup);
    const isDisabled = context.disabled || disabled;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
    const radioScope = useRadioScope(__scopeRadioGroup);
    const ref = React2.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const checked = context.value === itemProps.value;
    const isArrowKeyPressedRef = React2.useRef(false);
    React2.useEffect(() => {
      const handleKeyDown = (event) => {
        if (ARROW_KEYS.includes(event.key)) {
          isArrowKeyPressedRef.current = true;
        }
      };
      const handleKeyUp = () => isArrowKeyPressedRef.current = false;
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("keyup", handleKeyUp);
      };
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !isDisabled,
        active: checked,
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          Radio,
          {
            disabled: isDisabled,
            required: context.required,
            checked,
            ...radioScope,
            ...itemProps,
            name: context.name,
            ref: composedRefs,
            onCheck: () => context.onValueChange(itemProps.value),
            onKeyDown: composeEventHandlers((event) => {
              if (event.key === "Enter")
                event.preventDefault();
            }),
            onFocus: composeEventHandlers(itemProps.onFocus, () => {
              if (isArrowKeyPressedRef.current)
                ref.current?.click();
            })
          }
        )
      }
    );
  }
);
RadioGroupItem.displayName = ITEM_NAME;
var INDICATOR_NAME2 = "RadioGroupIndicator";
var RadioGroupIndicator = React2.forwardRef(
  (props, forwardedRef) => {
    const { __scopeRadioGroup, ...indicatorProps } = props;
    const radioScope = useRadioScope(__scopeRadioGroup);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RadioIndicator, { ...radioScope, ...indicatorProps, ref: forwardedRef });
  }
);
RadioGroupIndicator.displayName = INDICATOR_NAME2;
var Root2 = RadioGroup;
var Item2 = RadioGroupItem;
var Indicator = RadioGroupIndicator;

// @/components/ui/radio-group.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
"use client";
var RadioGroup2 = React3.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    Root2,
    {
      className: cn("grid gap-2", className),
      ...props,
      ref
    },
    void 0,
    false,
    {
      fileName: "@/components/ui/radio-group.tsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  );
});
RadioGroup2.displayName = Root2.displayName;
var RadioGroupItem2 = React3.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    Item2,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-stone-200 border-stone-900 text-stone-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-stone-800 dark:border-stone-50 dark:text-stone-50 dark:ring-offset-stone-950 dark:focus-visible:ring-stone-300",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Circle, { className: "h-2.5 w-2.5 fill-current text-current" }, void 0, false, {
        fileName: "@/components/ui/radio-group.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "@/components/ui/radio-group.tsx",
        lineNumber: 36,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "@/components/ui/radio-group.tsx",
      lineNumber: 28,
      columnNumber: 5
    },
    this
  );
});
RadioGroupItem2.displayName = Item2.displayName;

// @/components/CopySheetDialog.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
var CopySheetDialog = ({
  isOpen,
  onClose,
  sheetId
}) => {
  const [copyOption, setCopyOption] = (0, import_react5.useState)("existing");
  const [newSpreadsheetName, setNewSpreadsheetName] = (0, import_react5.useState)("");
  const handleCopy = () => {
    onClose();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dialog, { open: isOpen, onOpenChange: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DialogContent, { className: "w-full max-w-md h-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DialogTitle, { children: "Copy Sheet" }, void 0, false, {
      fileName: "@/components/CopySheetDialog.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "@/components/CopySheetDialog.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(RadioGroup2, { value: copyOption, onValueChange: (value) => setCopyOption(value), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(RadioGroupItem2, { value: "existing", id: "existing" }, void 0, false, {
          fileName: "@/components/CopySheetDialog.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Label, { htmlFor: "existing", children: "Copy within the current spreadsheet" }, void 0, false, {
          fileName: "@/components/CopySheetDialog.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "@/components/CopySheetDialog.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(RadioGroupItem2, { value: "new", id: "new" }, void 0, false, {
          fileName: "@/components/CopySheetDialog.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Label, { htmlFor: "new", children: "Copy to a new spreadsheet" }, void 0, false, {
          fileName: "@/components/CopySheetDialog.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "@/components/CopySheetDialog.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "@/components/CopySheetDialog.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    copyOption === "new" && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Label, { htmlFor: "newSpreadsheetName", children: "New Spreadsheet Name" }, void 0, false, {
        fileName: "@/components/CopySheetDialog.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        Input,
        {
          id: "newSpreadsheetName",
          value: newSpreadsheetName,
          onChange: (e) => setNewSpreadsheetName(e.target.value)
        },
        void 0,
        false,
        {
          fileName: "@/components/CopySheetDialog.tsx",
          lineNumber: 45,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "@/components/CopySheetDialog.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DialogFooter, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { onClick: onClose, variant: "outline", children: "Cancel" }, void 0, false, {
        fileName: "@/components/CopySheetDialog.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { onClick: handleCopy, disabled: copyOption === "new" && !newSpreadsheetName, children: "Copy" }, void 0, false, {
        fileName: "@/components/CopySheetDialog.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "@/components/CopySheetDialog.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "@/components/CopySheetDialog.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "@/components/CopySheetDialog.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
};
var CopySheetDialog_default = CopySheetDialog;

// node_modules/.pnpm/usehooks-ts@3.1.0_react@18.3.1/node_modules/usehooks-ts/dist/index.js
var import_react6 = __toESM(require_react(), 1);
var import_lodash = __toESM(require_lodash(), 1);
function useUnmount(func) {
  const funcRef = (0, import_react6.useRef)(func);
  funcRef.current = func;
  (0, import_react6.useEffect)(
    () => () => {
      funcRef.current();
    },
    []
  );
}
function useDebounceCallback(func, delay = 500, options) {
  const debouncedFunc = (0, import_react6.useRef)();
  useUnmount(() => {
    if (debouncedFunc.current) {
      debouncedFunc.current.cancel();
    }
  });
  const debounced = (0, import_react6.useMemo)(() => {
    const debouncedFuncInstance = (0, import_lodash.default)(func, delay, options);
    const wrappedFunc = (...args) => {
      return debouncedFuncInstance(...args);
    };
    wrappedFunc.cancel = () => {
      debouncedFuncInstance.cancel();
    };
    wrappedFunc.isPending = () => {
      return !!debouncedFunc.current;
    };
    wrappedFunc.flush = () => {
      return debouncedFuncInstance.flush();
    };
    return wrappedFunc;
  }, [func, delay, options]);
  (0, import_react6.useEffect)(() => {
    debouncedFunc.current = (0, import_lodash.default)(func, delay, options);
  }, [func, delay, options]);
  return debounced;
}

// @/components/FunctionBindingsDialog.tsx
var import_react8 = __toESM(require_react(), 1);

// node_modules/.pnpm/react-icons@5.3.0_react@18.3.1/node_modules/react-icons/pi/index.mjs
function PiFunction(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 256 256", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "d": "M208,40a8,8,0,0,1-8,8H170.71a24,24,0,0,0-23.62,19.71L137.59,120H184a8,8,0,0,1,0,16H134.68l-10,55.16A40,40,0,0,1,85.29,224H56a8,8,0,0,1,0-16H85.29a24,24,0,0,0,23.62-19.71l9.5-52.29H72a8,8,0,0,1,0-16h49.32l10-55.16A40,40,0,0,1,170.71,32H200A8,8,0,0,1,208,40Z" }, "child": [] }] })(props);
}

// @/components/FunctionBindingsSelectPanel.tsx
var import_react7 = __toESM(require_react(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
var FunctionBindingsSelectPanel = ({ selectedFunctionBinding, onBack, onFunctionSelect }) => {
  const [newSelectedFunctionId, setNewSelectedFunctionId] = (0, import_react7.useState)("");
  const { data: functions } = useFunctions();
  const selectedFunctionId = newSelectedFunctionId !== "" ? newSelectedFunctionId : selectedFunctionBinding.functionId;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DialogHeader, { className: "sticky top-0 bg-white dark:bg-stone-950", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { onClick: () => onBack(), variant: "icon", className: "p-0 gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ChevronLeft, { size: 16 }, void 0, false, {
            fileName: "@/components/FunctionBindingsSelectPanel.tsx",
            lineNumber: 42,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Back to bindings list" }, void 0, false, {
            fileName: "@/components/FunctionBindingsSelectPanel.tsx",
            lineNumber: 43,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "@/components/FunctionBindingsSelectPanel.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DialogClose, {}, void 0, false, {
          fileName: "@/components/FunctionBindingsSelectPanel.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "@/components/FunctionBindingsSelectPanel.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DialogTitle, { children: `Select a function for '${selectedFunctionBinding.functionName}'` }, void 0, false, {
        fileName: "@/components/FunctionBindingsSelectPanel.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DialogDescription, { className: "text-xsm", children: `Choose a function to bind to '${selectedFunctionBinding.functionName}'. When you type =${selectedFunctionBinding.functionName} in a cell, the selected function will be called.` }, void 0, false, {
        fileName: "@/components/FunctionBindingsSelectPanel.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "@/components/FunctionBindingsSelectPanel.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "div",
      {
        className: cn(
          "flex overflow-hidden border-y border-y-stone-200 dark:border-y-stone-800",
          "border-r border-r-stone-200 dark:border-r-stone-800"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            FunctionListPanel,
            {
              selectedFunctionId: newSelectedFunctionId !== "" ? newSelectedFunctionId : selectedFunctionBinding.functionId,
              onSelectFunction: (id) => setNewSelectedFunctionId(id),
              showCreateFunctionButton: false
            },
            void 0,
            false,
            {
              fileName: "@/components/FunctionBindingsSelectPanel.tsx",
              lineNumber: 60,
              columnNumber: 9
            },
            this
          ),
          selectedFunctionId !== "" && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FunctionDetailPanel, { id: selectedFunctionId, showMenuButton: false }, void 0, false, {
            fileName: "@/components/FunctionBindingsSelectPanel.tsx",
            lineNumber: 70,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "@/components/FunctionBindingsSelectPanel.tsx",
        lineNumber: 54,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      Button,
      {
        onClick: () => {
          onFunctionSelect(
            selectedFunctionBinding.functionName,
            newSelectedFunctionId
          );
          onBack();
        },
        disabled: selectedFunctionId === "",
        children: selectedFunctionId === "" ? "Select a function" : `Use '${functions?.find((f) => f.id === selectedFunctionId)?.functionName ?? ""}-${selectedFunctionId.toString().slice(0, 6)}' for '${selectedFunctionBinding.functionName}'`
      },
      void 0,
      false,
      {
        fileName: "@/components/FunctionBindingsSelectPanel.tsx",
        lineNumber: 74,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "@/components/FunctionBindingsSelectPanel.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "@/components/FunctionBindingsSelectPanel.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
};

// @/components/FunctionBindingsDialog.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
var FunctionBindingsDialog = ({
  sheetId
}) => {
  const [selectedFunctionBinding, setSelectedFunctionBinding] = (0, import_react8.useState)(null);
  const [openCreateNew, setOpenCreateNew] = (0, import_react8.useState)(false);
  const { data: functions } = useFunctions();
  const { data: functionBindings, refetch } = useFunctionBindings(sheetId);
  const [isSaved, setIsSaved] = (0, import_react8.useState)(false);
  const { mutateAsync: updateFunctionBindings } = useUpdatefunctionBindings();
  const showSavedIndicator = (0, import_react8.useCallback)(() => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2e3);
  }, []);
  const [newFunction, setNewFunction] = (0, import_react8.useState)({
    name: "",
    functionId: ""
  });
  const debouncedUpdateFunctionBindings = useDebounceCallback(
    async (newBindings) => {
      await updateFunctionBindings({
        sheetId,
        functionBindings: newBindings
      });
      await refetch();
      showSavedIndicator();
    },
    150
    // 150ms debounce
  );
  const handleAddFunction = async () => {
    if (!functionBindings) {
      return;
    }
    if (newFunction.name === "" || newFunction.functionId === "") {
      return;
    }
    const newFunctionBindings = [...functionBindings.functionBindings];
    newFunctionBindings.push({
      name: newFunction.name,
      functionId: newFunction.functionId,
      isCustom: true,
      function: null
    });
    await updateFunctionBindings({
      sheetId,
      functionBindings: newFunctionBindings
    });
  };
  const handleRemoveFunction = async (name) => {
    if (!functionBindings) {
      return;
    }
    const newFunctionBindings = functionBindings.functionBindings.filter(
      (f) => f.name !== name
    );
    await updateFunctionBindings({
      sheetId,
      functionBindings: newFunctionBindings
    });
    await refetch();
  };
  const handleFunctionNameChange = (0, import_react8.useCallback)(
    (prevName, newName) => {
      if (!functionBindings) {
        return;
      }
      const newFunctionBindings = [...functionBindings.functionBindings];
      const index = newFunctionBindings.findIndex((f) => f.name === prevName);
      if (index === -1) {
        return;
      }
      newFunctionBindings[index].name = newName;
      debouncedUpdateFunctionBindings(newFunctionBindings);
    },
    [functionBindings, debouncedUpdateFunctionBindings]
  );
  const handleFunctionSelectForNew = (0, import_react8.useCallback)(
    (_, newFunctionId) => {
      setNewFunction({ ...newFunction, functionId: newFunctionId });
    },
    [newFunction]
  );
  const handleFunctionSelect = (0, import_react8.useCallback)(
    (name, newFunctionId) => {
      if (!functionBindings) {
        return;
      }
      const newFunctionBindings = [...functionBindings.functionBindings];
      const index = newFunctionBindings.findIndex((f) => f.name === name);
      if (index === -1) {
        return;
      }
      newFunctionBindings[index].functionId = newFunctionId;
      debouncedUpdateFunctionBindings(newFunctionBindings);
    },
    [functionBindings, debouncedUpdateFunctionBindings]
  );
  const nameExists = (name) => functionBindings?.functionBindings.some(
    (f) => f.name.toUpperCase() === name.toUpperCase()
  );
  const customFunctionBindings = (0, import_react8.useMemo)(
    () => functionBindings?.functionBindings.filter((f) => f.isCustom) ?? [],
    [functionBindings]
  );
  const isExistingName = functionBindings?.functionBindings.some(
    (f) => f.name.toUpperCase() === newFunction.name.toUpperCase()
  );
  const isEmptyName = newFunction.name === "";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    Dialog,
    {
      onOpenChange: (isOpen) => {
        if (!isOpen) {
          setSelectedFunctionBinding(null);
        }
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DialogTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { variant: "ghost", size: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PiFunction, { size: 16 }, void 0, false, {
          fileName: "@/components/FunctionBindingsDialog.tsx",
          lineNumber: 159,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "@/components/FunctionBindingsDialog.tsx",
          lineNumber: 158,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "@/components/FunctionBindingsDialog.tsx",
          lineNumber: 157,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DialogContent, { className: "flex flex-col align-top", children: [
          selectedFunctionBinding === null && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DialogHeader, { className: "sticky top-0 bg-white dark:bg-stone-950", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DialogTitle, { children: "Function Bindings" }, void 0, false, {
                  fileName: "@/components/FunctionBindingsDialog.tsx",
                  lineNumber: 167,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center h-auto", children: [
                  isSaved && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-xs font-medium mr-8 text-stone-500", children: "Saved" }, void 0, false, {
                    fileName: "@/components/FunctionBindingsDialog.tsx",
                    lineNumber: 170,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DialogClose, {}, void 0, false, {
                    fileName: "@/components/FunctionBindingsDialog.tsx",
                    lineNumber: 174,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "@/components/FunctionBindingsDialog.tsx",
                  lineNumber: 168,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "@/components/FunctionBindingsDialog.tsx",
                lineNumber: 166,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DialogDescription, { className: "text-xsm", children: "Customize the functions available in this sheet by binding a name to the specific implementation of a function. You can map the default names to custom functions or create a new binding and map it to a custom function." }, void 0, false, {
                fileName: "@/components/FunctionBindingsDialog.tsx",
                lineNumber: 177,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "@/components/FunctionBindingsDialog.tsx",
              lineNumber: 165,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "max-w-screen-lg flex flex-col overflow-y-auto gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "div",
                {
                  className: cn(
                    "flex",
                    "justify-between",
                    "items-center",
                    "flex-shrink-0",
                    "text-xsm",
                    "h-8",
                    "w-full",
                    "ring-none",
                    "border-none",
                    "sticky",
                    "top-0",
                    "dark:bg-stone-950",
                    "bg-white"
                  ),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "h-full flex gap-2 items-center", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Bindings" }, void 0, false, {
                        fileName: "@/components/FunctionBindingsDialog.tsx",
                        lineNumber: 205,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-stone-700 dark:text-stone-400", children: `${customFunctionBindings?.length}` }, void 0, false, {
                        fileName: "@/components/FunctionBindingsDialog.tsx",
                        lineNumber: 206,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, true, {
                      fileName: "@/components/FunctionBindingsDialog.tsx",
                      lineNumber: 204,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      Button,
                      {
                        size: "sm",
                        variant: "secondary",
                        className: "gap-2 flex-shrink-0",
                        onClick: () => setOpenCreateNew(true),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Plus, { size: 16 }, void 0, false, {
                            fileName: "@/components/FunctionBindingsDialog.tsx",
                            lineNumber: 214,
                            columnNumber: 21
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Add new" }, void 0, false, {
                            fileName: "@/components/FunctionBindingsDialog.tsx",
                            lineNumber: 215,
                            columnNumber: 21
                          }, this)
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "@/components/FunctionBindingsDialog.tsx",
                        lineNumber: 208,
                        columnNumber: 19
                      },
                      this
                    )
                  ]
                },
                void 0,
                true,
                {
                  fileName: "@/components/FunctionBindingsDialog.tsx",
                  lineNumber: 187,
                  columnNumber: 17
                },
                this
              ),
              openCreateNew && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex-shrink-0 h-auto p-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                  "div",
                  {
                    className: cn(
                      "flex items-center flex-shrink-0 h-full gap-2"
                    ),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full h-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                        Input,
                        {
                          className: "w-full h-full",
                          onChange: (e) => setNewFunction({
                            ...newFunction,
                            name: e.target.value.toUpperCase()
                          }),
                          value: newFunction.name,
                          placeholder: "Type a name to call a function..."
                        },
                        void 0,
                        false,
                        {
                          fileName: "@/components/FunctionBindingsDialog.tsx",
                          lineNumber: 226,
                          columnNumber: 25
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "@/components/FunctionBindingsDialog.tsx",
                        lineNumber: 225,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full h-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                        Button,
                        {
                          onClick: () => {
                            setSelectedFunctionBinding({
                              functionName: newFunction.name,
                              functionId: newFunction.functionId
                            });
                          },
                          variant: "ghost",
                          className: "w-full h-full rounded-none",
                          disabled: isExistingName || isEmptyName,
                          children: newFunction.functionId !== "" ? functions?.find(
                            (f) => f.id === newFunction.functionId
                          )?.functionName : "Select a function"
                        },
                        void 0,
                        false,
                        {
                          fileName: "@/components/FunctionBindingsDialog.tsx",
                          lineNumber: 239,
                          columnNumber: 25
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "@/components/FunctionBindingsDialog.tsx",
                        lineNumber: 238,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex gap-2 h-8 justify-end", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                          Button,
                          {
                            onClick: () => {
                              setOpenCreateNew(false);
                            },
                            variant: "ghost",
                            className: "h-full",
                            children: "Cancel"
                          },
                          void 0,
                          false,
                          {
                            fileName: "@/components/FunctionBindingsDialog.tsx",
                            lineNumber: 258,
                            columnNumber: 25
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                          Button,
                          {
                            className: "h-full",
                            onClick: () => {
                              handleAddFunction();
                              setNewFunction({ name: "", functionId: "" });
                              setOpenCreateNew(false);
                            },
                            disabled: isExistingName || isEmptyName || newFunction.functionId === "",
                            children: "Save"
                          },
                          void 0,
                          false,
                          {
                            fileName: "@/components/FunctionBindingsDialog.tsx",
                            lineNumber: 267,
                            columnNumber: 25
                          },
                          this
                        )
                      ] }, void 0, true, {
                        fileName: "@/components/FunctionBindingsDialog.tsx",
                        lineNumber: 257,
                        columnNumber: 23
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "@/components/FunctionBindingsDialog.tsx",
                    lineNumber: 220,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "px-1 py-1", children: [
                  isExistingName && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-xs text-destructive", children: "Name already exists" }, void 0, false, {
                    fileName: "@/components/FunctionBindingsDialog.tsx",
                    lineNumber: 286,
                    columnNumber: 25
                  }, this),
                  isEmptyName && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-xs text-destructive", children: "Name cannot be empty" }, void 0, false, {
                    fileName: "@/components/FunctionBindingsDialog.tsx",
                    lineNumber: 291,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "@/components/FunctionBindingsDialog.tsx",
                  lineNumber: 284,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "@/components/FunctionBindingsDialog.tsx",
                lineNumber: 219,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: cn("flex flex-col gap-2"), children: customFunctionBindings?.map((binding, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "div",
                {
                  className: "flex flex-shrink-0 items-center gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full flex items-center text-xsm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      ClickableInput,
                      {
                        rootClassName: "w-full",
                        buttonClassName: "border hover:border-blue-500 dark:hover:border-blue-500 dark:hover:border",
                        inputClassName: "focus-visible:ring focus-visible:ring-blue-500",
                        value: binding.name,
                        onBlur: (value) => handleFunctionNameChange(binding.name, value),
                        parse: (value) => {
                          if (nameExists(value) && value !== binding.name) {
                            throw new Error("Name already exists");
                          }
                          return value;
                        },
                        placeholder: "Function name"
                      },
                      void 0,
                      false,
                      {
                        fileName: "@/components/FunctionBindingsDialog.tsx",
                        lineNumber: 305,
                        columnNumber: 25
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "@/components/FunctionBindingsDialog.tsx",
                      lineNumber: 304,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex h-full w-full items-center h-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      Button,
                      {
                        className: "w-full h-8 gap-2 flex justify-between",
                        variant: "secondary",
                        onClick: () => setSelectedFunctionBinding({
                          functionName: binding.name,
                          functionId: binding.functionId
                        }),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: binding.function?.functionName }, void 0, false, {
                            fileName: "@/components/FunctionBindingsDialog.tsx",
                            lineNumber: 334,
                            columnNumber: 27
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ChevronRight, { size: 16 }, void 0, false, {
                            fileName: "@/components/FunctionBindingsDialog.tsx",
                            lineNumber: 335,
                            columnNumber: 27
                          }, this)
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "@/components/FunctionBindingsDialog.tsx",
                        lineNumber: 324,
                        columnNumber: 25
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "@/components/FunctionBindingsDialog.tsx",
                      lineNumber: 323,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      Button,
                      {
                        size: "sm",
                        variant: "icon",
                        className: cn(
                          "w-8",
                          "flex-shrink-0",
                          "text-destructive",
                          "dark:text-destructive",
                          "hover:dark:text-red-500",
                          "hover:text-red-500"
                        ),
                        onClick: () => handleRemoveFunction(binding.name),
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Trash2, { size: 16 }, void 0, false, {
                          fileName: "@/components/FunctionBindingsDialog.tsx",
                          lineNumber: 351,
                          columnNumber: 25
                        }, this)
                      },
                      void 0,
                      false,
                      {
                        fileName: "@/components/FunctionBindingsDialog.tsx",
                        lineNumber: 338,
                        columnNumber: 23
                      },
                      this
                    )
                  ]
                },
                index,
                true,
                {
                  fileName: "@/components/FunctionBindingsDialog.tsx",
                  lineNumber: 300,
                  columnNumber: 21
                },
                this
              )) }, void 0, false, {
                fileName: "@/components/FunctionBindingsDialog.tsx",
                lineNumber: 298,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "@/components/FunctionBindingsDialog.tsx",
              lineNumber: 186,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "@/components/FunctionBindingsDialog.tsx",
              lineNumber: 184,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "@/components/FunctionBindingsDialog.tsx",
            lineNumber: 164,
            columnNumber: 11
          }, this),
          selectedFunctionBinding !== null && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            FunctionBindingsSelectPanel,
            {
              sheetId,
              selectedFunctionBinding,
              onBack: () => setSelectedFunctionBinding(null),
              onFunctionSelect: selectedFunctionBinding.functionName === newFunction.name ? handleFunctionSelectForNew : handleFunctionSelect
            },
            void 0,
            false,
            {
              fileName: "@/components/FunctionBindingsDialog.tsx",
              lineNumber: 361,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, true, {
          fileName: "@/components/FunctionBindingsDialog.tsx",
          lineNumber: 162,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "@/components/FunctionBindingsDialog.tsx",
      lineNumber: 150,
      columnNumber: 5
    },
    this
  );
};

// @/components/ResizeRowDialog.tsx
var import_react9 = __toESM(require_react(), 1);
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
var ResizeRowDialog = ({
  isOpen,
  onClose,
  onConfirm,
  selectedRows
}) => {
  const [resizeType, setResizeType] = (0, import_react9.useState)("specific");
  const [specificHeight, setSpecificHeight] = (0, import_react9.useState)("21");
  const handleConfirm = () => {
    if (resizeType === "specific") {
      onConfirm(resizeType, parseInt(specificHeight, 10));
    } else {
      onConfirm(resizeType, null);
    }
  };
  const formatSelectedRows = (rows) => {
    if (rows.length <= 3) {
      return rows.join(", ");
    }
    return `${rows[0]}-${rows[rows.length - 1]}`;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Dialog, { open: isOpen, onOpenChange: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DialogContent, { className: "z-[1000] h-auto w-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DialogTitle, { children: [
      "Resize row ",
      formatSelectedRows(selectedRows)
    ] }, void 0, true, {
      fileName: "@/components/ResizeRowDialog.tsx",
      lineNumber: 51,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "@/components/ResizeRowDialog.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DialogDescription, {}, void 0, false, {
      fileName: "@/components/ResizeRowDialog.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      RadioGroup2,
      {
        className: "flex flex-col gap-4",
        value: resizeType,
        onValueChange: (value) => setResizeType(value),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-start space-x-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(RadioGroupItem2, { value: "specific", id: "specific" }, void 0, false, {
              fileName: "@/components/ResizeRowDialog.tsx",
              lineNumber: 62,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Label, { htmlFor: "specific", children: "Specify row height" }, void 0, false, {
                fileName: "@/components/ResizeRowDialog.tsx",
                lineNumber: 64,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center space-x-2 text-sm", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  Input,
                  {
                    type: "number",
                    value: specificHeight,
                    onChange: (e) => setSpecificHeight(e.target.value),
                    className: "w-20"
                  },
                  void 0,
                  false,
                  {
                    fileName: "@/components/ResizeRowDialog.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "pixels (Default: 21)" }, void 0, false, {
                  fileName: "@/components/ResizeRowDialog.tsx",
                  lineNumber: 72,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "@/components/ResizeRowDialog.tsx",
                lineNumber: 65,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "@/components/ResizeRowDialog.tsx",
              lineNumber: 63,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "@/components/ResizeRowDialog.tsx",
            lineNumber: 61,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(RadioGroupItem2, { value: "fit", id: "fit" }, void 0, false, {
              fileName: "@/components/ResizeRowDialog.tsx",
              lineNumber: 77,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Label, { htmlFor: "fit", children: "Fit to data" }, void 0, false, {
              fileName: "@/components/ResizeRowDialog.tsx",
              lineNumber: 78,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "@/components/ResizeRowDialog.tsx",
            lineNumber: 76,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "@/components/ResizeRowDialog.tsx",
        lineNumber: 56,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DialogFooter, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button, { onClick: handleConfirm, children: "OK" }, void 0, false, {
        fileName: "@/components/ResizeRowDialog.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button, { variant: "outline", onClick: onClose, children: "Cancel" }, void 0, false, {
        fileName: "@/components/ResizeRowDialog.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "@/components/ResizeRowDialog.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "@/components/ResizeRowDialog.tsx",
    lineNumber: 49,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "@/components/ResizeRowDialog.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
};

// @/components/SheetContext.tsx
var import_react11 = __toESM(require_react(), 1);
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
var SheetProvider = ({ children, initialSpreadsheet }) => {
  const [queryParams, _] = useSearchParams();
  const sheetId = queryParams.get("sheetId");
  const store = (0, import_react11.useRef)(
    createSheetStateStore(initialSpreadsheet, sheetId)
  ).current;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SheetStateContext.Provider, { value: store, children }, void 0, false, {
    fileName: "@/components/SheetContext.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
};

// node_modules/.pnpm/@radix-ui+react-toggle-group@1.1.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3_gz6jllznlx7sjgli2jjusxbq4q/node_modules/@radix-ui/react-toggle-group/dist/index.mjs
var import_react12 = __toESM(require_react(), 1);

// node_modules/.pnpm/@radix-ui+react-toggle@1.1.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-toggle/dist/index.mjs
var React5 = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
"use client";
var NAME = "Toggle";
var Toggle = React5.forwardRef((props, forwardedRef) => {
  const { pressed: pressedProp, defaultPressed = false, onPressedChange, ...buttonProps } = props;
  const [pressed = false, setPressed] = useControllableState({
    prop: pressedProp,
    onChange: onPressedChange,
    defaultProp: defaultPressed
  });
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    Primitive.button,
    {
      type: "button",
      "aria-pressed": pressed,
      "data-state": pressed ? "on" : "off",
      "data-disabled": props.disabled ? "" : void 0,
      ...buttonProps,
      ref: forwardedRef,
      onClick: composeEventHandlers(props.onClick, () => {
        if (!props.disabled) {
          setPressed(!pressed);
        }
      })
    }
  );
});
Toggle.displayName = NAME;
var Root3 = Toggle;

// node_modules/.pnpm/@radix-ui+react-toggle-group@1.1.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3_gz6jllznlx7sjgli2jjusxbq4q/node_modules/@radix-ui/react-toggle-group/dist/index.mjs
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
"use client";
var TOGGLE_GROUP_NAME = "ToggleGroup";
var [createToggleGroupContext, createToggleGroupScope] = createContextScope(TOGGLE_GROUP_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope2 = createRovingFocusGroupScope();
var ToggleGroup = import_react12.default.forwardRef((props, forwardedRef) => {
  const { type, ...toggleGroupProps } = props;
  if (type === "single") {
    const singleProps = toggleGroupProps;
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ToggleGroupImplSingle, { ...singleProps, ref: forwardedRef });
  }
  if (type === "multiple") {
    const multipleProps = toggleGroupProps;
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ToggleGroupImplMultiple, { ...multipleProps, ref: forwardedRef });
  }
  throw new Error(`Missing prop \`type\` expected on \`${TOGGLE_GROUP_NAME}\``);
});
ToggleGroup.displayName = TOGGLE_GROUP_NAME;
var [ToggleGroupValueProvider, useToggleGroupValueContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImplSingle = import_react12.default.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
    },
    ...toggleGroupSingleProps
  } = props;
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    ToggleGroupValueProvider,
    {
      scope: props.__scopeToggleGroup,
      type: "single",
      value: value ? [value] : [],
      onItemActivate: setValue,
      onItemDeactivate: import_react12.default.useCallback(() => setValue(""), [setValue]),
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ToggleGroupImpl, { ...toggleGroupSingleProps, ref: forwardedRef })
    }
  );
});
var ToggleGroupImplMultiple = import_react12.default.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
    },
    ...toggleGroupMultipleProps
  } = props;
  const [value = [], setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  const handleButtonActivate = import_react12.default.useCallback(
    (itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]),
    [setValue]
  );
  const handleButtonDeactivate = import_react12.default.useCallback(
    (itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)),
    [setValue]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    ToggleGroupValueProvider,
    {
      scope: props.__scopeToggleGroup,
      type: "multiple",
      value,
      onItemActivate: handleButtonActivate,
      onItemDeactivate: handleButtonDeactivate,
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ToggleGroupImpl, { ...toggleGroupMultipleProps, ref: forwardedRef })
    }
  );
});
ToggleGroup.displayName = TOGGLE_GROUP_NAME;
var [ToggleGroupContext, useToggleGroupContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImpl = import_react12.default.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeToggleGroup,
      disabled = false,
      rovingFocus = true,
      orientation,
      dir,
      loop = true,
      ...toggleGroupProps
    } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope2(__scopeToggleGroup);
    const direction = useDirection(dir);
    const commonProps = { role: "group", dir: direction, ...toggleGroupProps };
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ToggleGroupContext, { scope: __scopeToggleGroup, rovingFocus, disabled, children: rovingFocus ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      Root,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation,
        dir: direction,
        loop,
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Primitive.div, { ...commonProps, ref: forwardedRef })
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Primitive.div, { ...commonProps, ref: forwardedRef }) });
  }
);
var ITEM_NAME2 = "ToggleGroupItem";
var ToggleGroupItem = import_react12.default.forwardRef(
  (props, forwardedRef) => {
    const valueContext = useToggleGroupValueContext(ITEM_NAME2, props.__scopeToggleGroup);
    const context = useToggleGroupContext(ITEM_NAME2, props.__scopeToggleGroup);
    const rovingFocusGroupScope = useRovingFocusGroupScope2(props.__scopeToggleGroup);
    const pressed = valueContext.value.includes(props.value);
    const disabled = context.disabled || props.disabled;
    const commonProps = { ...props, pressed, disabled };
    const ref = import_react12.default.useRef(null);
    return context.rovingFocus ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: pressed,
        ref,
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ToggleGroupItemImpl, { ...commonProps, ref: forwardedRef })
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ToggleGroupItemImpl, { ...commonProps, ref: forwardedRef });
  }
);
ToggleGroupItem.displayName = ITEM_NAME2;
var ToggleGroupItemImpl = import_react12.default.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToggleGroup, value, ...itemProps } = props;
    const valueContext = useToggleGroupValueContext(ITEM_NAME2, __scopeToggleGroup);
    const singleProps = { role: "radio", "aria-checked": props.pressed, "aria-pressed": void 0 };
    const typeProps = valueContext.type === "single" ? singleProps : void 0;
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      Toggle,
      {
        ...typeProps,
        ...itemProps,
        ref: forwardedRef,
        onPressedChange: (pressed) => {
          if (pressed) {
            valueContext.onItemActivate(value);
          } else {
            valueContext.onItemDeactivate(value);
          }
        }
      }
    );
  }
);
var Root22 = ToggleGroup;
var Item22 = ToggleGroupItem;

// @/components/ui/toggle-group.tsx
var React8 = __toESM(require_react(), 1);

// @/components/ui/toggle.tsx
var React7 = __toESM(require_react(), 1);
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
"use client";
var toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors hover:bg-stone-100 hover:text-stone-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-stone-100 data-[state=on]:text-stone-900 dark:ring-offset-stone-950 dark:hover:bg-stone-800 dark:hover:text-stone-400 dark:focus-visible:ring-stone-300 dark:data-[state=on]:bg-stone-800 dark:data-[state=on]:text-stone-50",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-stone-200 bg-transparent hover:bg-stone-100 hover:text-stone-900 dark:border-stone-800 dark:hover:bg-stone-800 dark:hover:text-stone-50"
      },
      size: {
        default: "h-7 min-w-7 px-2 flex-shrink-0",
        sm: "h-8 rounded-md min-w-8 px-2",
        lg: "h-10 rounded-md min-w-10 px-2"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Toggle2 = React7.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
  Root3,
  {
    ref,
    className: cn(toggleVariants({ variant, size, className })),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/toggle.tsx",
    lineNumber: 36,
    columnNumber: 3
  },
  this
));
Toggle2.displayName = Root3.displayName;

// @/components/ui/toggle-group.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
"use client";
var ToggleGroupContext2 = React8.createContext({
  size: "default",
  variant: "default"
});
var ToggleGroup2 = React8.forwardRef(({ className, variant, size, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
  Root22,
  {
    ref,
    className: cn("flex items-center justify-center gap-1", className),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ToggleGroupContext2.Provider, { value: { variant, size }, children }, void 0, false, {
      fileName: "@/components/ui/toggle-group.tsx",
      lineNumber: 27,
      columnNumber: 5
    }, this)
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/toggle-group.tsx",
    lineNumber: 22,
    columnNumber: 3
  },
  this
));
ToggleGroup2.displayName = Root22.displayName;
var ToggleGroupItem2 = React8.forwardRef(({ className, children, variant, size, ...props }, ref) => {
  const context = React8.useContext(ToggleGroupContext2);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    Item22,
    {
      ref,
      className: cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size
        }),
        "flex items-center justify-center",
        "hover:bg-stone-100 hover:dark:bg-stone-800 text-stone-950 dark:text-stone-50",
        "hover:text-stone-950 dark:hover:text-stone-50",
        `data-[state=on]:bg-stone-200 dark:data-[state=on]:bg-stone-700`,
        className
      ),
      ...props,
      children
    },
    void 0,
    false,
    {
      fileName: "@/components/ui/toggle-group.tsx",
      lineNumber: 43,
      columnNumber: 5
    },
    this
  );
});
ToggleGroupItem2.displayName = Item22.displayName;

// @/state/utils.ts
var getRowHeight = ({
  rowIndex,
  rowStates
}) => {
  if (rowStates[rowIndex]?.specifiedHeight !== null && rowStates[rowIndex]?.specifiedHeight !== void 0) {
    return rowStates[rowIndex].specifiedHeight;
  }
  const height = Math.max(
    DEFAULT_CELL_HEIGHT,
    rowStates[rowIndex]?.height ?? 0
  );
  return height;
};

// node_modules/.pnpm/@tanstack+react-virtual@3.10.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tanstack/react-virtual/dist/esm/index.js
var React9 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/.pnpm/@tanstack+virtual-core@3.10.8/node_modules/@tanstack/virtual-core/dist/esm/utils.js
function memo(getDeps, fn, opts) {
  let deps = opts.initialDeps ?? [];
  let result;
  return () => {
    var _a, _b, _c2, _d;
    let depTime;
    if (opts.key && ((_a = opts.debug) == null ? void 0 : _a.call(opts)))
      depTime = Date.now();
    const newDeps = getDeps();
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && ((_b = opts.debug) == null ? void 0 : _b.call(opts)))
      resultTime = Date.now();
    result = fn(...newDeps);
    if (opts.key && ((_c2 = opts.debug) == null ? void 0 : _c2.call(opts))) {
      const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      const resultFpsPercentage = resultEndTime / 16;
      const pad = (str, num) => {
        str = String(str);
        while (str.length < num) {
          str = " " + str;
        }
        return str;
      };
      console.info(
        `%c\u23F1 ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * resultFpsPercentage, 120)
        )}deg 100% 31%);`,
        opts == null ? void 0 : opts.key
      );
    }
    (_d = opts == null ? void 0 : opts.onChange) == null ? void 0 : _d.call(opts, result);
    return result;
  };
}
function notUndefined(value, msg) {
  if (value === void 0) {
    throw new Error(`Unexpected undefined${msg ? `: ${msg}` : ""}`);
  } else {
    return value;
  }
}
var approxEqual = (a, b) => Math.abs(a - b) < 1;
var debounce2 = (targetWindow, fn, ms) => {
  let timeoutId;
  return function(...args) {
    targetWindow.clearTimeout(timeoutId);
    timeoutId = targetWindow.setTimeout(() => fn.apply(this, args), ms);
  };
};

// node_modules/.pnpm/@tanstack+virtual-core@3.10.8/node_modules/@tanstack/virtual-core/dist/esm/index.js
var defaultKeyExtractor = (index) => index;
var defaultRangeExtractor = (range) => {
  const start = Math.max(range.startIndex - range.overscan, 0);
  const end = Math.min(range.endIndex + range.overscan, range.count - 1);
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};
var observeElementRect = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  const handler = (rect) => {
    const { width, height } = rect;
    cb({ width: Math.round(width), height: Math.round(height) });
  };
  handler(element.getBoundingClientRect());
  if (!targetWindow.ResizeObserver) {
    return () => {
    };
  }
  const observer = new targetWindow.ResizeObserver((entries) => {
    const entry = entries[0];
    if (entry == null ? void 0 : entry.borderBoxSize) {
      const box = entry.borderBoxSize[0];
      if (box) {
        handler({ width: box.inlineSize, height: box.blockSize });
        return;
      }
    }
    handler(element.getBoundingClientRect());
  });
  observer.observe(element, { box: "border-box" });
  return () => {
    observer.unobserve(element);
  };
};
var addEventListenerOptions = {
  passive: true
};
var supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
var observeElementOffset = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  let offset = 0;
  const fallback = supportsScrollend ? () => void 0 : debounce2(
    targetWindow,
    () => {
      cb(offset, false);
    },
    instance.options.isScrollingResetDelay
  );
  const createHandler = (isScrolling) => () => {
    const { horizontal, isRtl } = instance.options;
    offset = horizontal ? element["scrollLeft"] * (isRtl && -1 || 1) : element["scrollTop"];
    fallback();
    cb(offset, isScrolling);
  };
  const handler = createHandler(true);
  const endHandler = createHandler(false);
  endHandler();
  element.addEventListener("scroll", handler, addEventListenerOptions);
  element.addEventListener("scrollend", endHandler, addEventListenerOptions);
  return () => {
    element.removeEventListener("scroll", handler);
    element.removeEventListener("scrollend", endHandler);
  };
};
var measureElement = (element, entry, instance) => {
  if (entry == null ? void 0 : entry.borderBoxSize) {
    const box = entry.borderBoxSize[0];
    if (box) {
      const size = Math.round(
        box[instance.options.horizontal ? "inlineSize" : "blockSize"]
      );
      return size;
    }
  }
  return Math.round(
    element.getBoundingClientRect()[instance.options.horizontal ? "width" : "height"]
  );
};
var elementScroll = (offset, {
  adjustments = 0,
  behavior
}, instance) => {
  var _a, _b;
  const toOffset = offset + adjustments;
  (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
    [instance.options.horizontal ? "left" : "top"]: toOffset,
    behavior
  });
};
var Virtualizer = class {
  constructor(opts) {
    this.unsubs = [];
    this.scrollElement = null;
    this.targetWindow = null;
    this.isScrolling = false;
    this.scrollToIndexTimeoutId = null;
    this.measurementsCache = [];
    this.itemSizeCache = /* @__PURE__ */ new Map();
    this.pendingMeasuredCacheIndexes = [];
    this.scrollRect = null;
    this.scrollOffset = null;
    this.scrollDirection = null;
    this.scrollAdjustments = 0;
    this.elementsCache = /* @__PURE__ */ new Map();
    this.observer = /* @__PURE__ */ (() => {
      let _ro = null;
      const get = () => {
        if (_ro) {
          return _ro;
        }
        if (!this.targetWindow || !this.targetWindow.ResizeObserver) {
          return null;
        }
        return _ro = new this.targetWindow.ResizeObserver((entries) => {
          entries.forEach((entry) => {
            this._measureElement(entry.target, entry);
          });
        });
      };
      return {
        disconnect: () => {
          var _a;
          (_a = get()) == null ? void 0 : _a.disconnect();
          _ro = null;
        },
        observe: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.observe(target, { box: "border-box" });
        },
        unobserve: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.unobserve(target);
        }
      };
    })();
    this.range = null;
    this.setOptions = (opts2) => {
      Object.entries(opts2).forEach(([key, value]) => {
        if (typeof value === "undefined")
          delete opts2[key];
      });
      this.options = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: defaultKeyExtractor,
        rangeExtractor: defaultRangeExtractor,
        onChange: () => {
        },
        measureElement,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: true,
        isRtl: false,
        ...opts2
      };
    };
    this.notify = (sync) => {
      var _a, _b;
      (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, sync);
    };
    this.maybeNotify = memo(
      () => {
        this.calculateRange();
        return [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ];
      },
      (isScrolling) => {
        this.notify(isScrolling);
      },
      {
        key: "maybeNotify",
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    );
    this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((d) => d());
      this.unsubs = [];
      this.observer.disconnect();
      this.scrollElement = null;
      this.targetWindow = null;
    };
    this._didMount = () => {
      return () => {
        this.cleanup();
      };
    };
    this._willUpdate = () => {
      var _a;
      const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== scrollElement) {
        this.cleanup();
        if (!scrollElement) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = scrollElement;
        if (this.scrollElement && "ownerDocument" in this.scrollElement) {
          this.targetWindow = this.scrollElement.ownerDocument.defaultView;
        } else {
          this.targetWindow = ((_a = this.scrollElement) == null ? void 0 : _a.window) ?? null;
        }
        this.elementsCache.forEach((cached) => {
          this.observer.observe(cached);
        });
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
        this.unsubs.push(
          this.options.observeElementRect(this, (rect) => {
            this.scrollRect = rect;
            this.maybeNotify();
          })
        );
        this.unsubs.push(
          this.options.observeElementOffset(this, (offset, isScrolling) => {
            this.scrollAdjustments = 0;
            this.scrollDirection = isScrolling ? this.getScrollOffset() < offset ? "forward" : "backward" : null;
            this.scrollOffset = offset;
            this.isScrolling = isScrolling;
            this.maybeNotify();
          })
        );
      }
    };
    this.getSize = () => {
      if (!this.options.enabled) {
        this.scrollRect = null;
        return 0;
      }
      this.scrollRect = this.scrollRect ?? this.options.initialRect;
      return this.scrollRect[this.options.horizontal ? "width" : "height"];
    };
    this.getScrollOffset = () => {
      if (!this.options.enabled) {
        this.scrollOffset = null;
        return 0;
      }
      this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset);
      return this.scrollOffset;
    };
    this.getFurthestMeasurement = (measurements, index) => {
      const furthestMeasurementsFound = /* @__PURE__ */ new Map();
      const furthestMeasurements = /* @__PURE__ */ new Map();
      for (let m2 = index - 1; m2 >= 0; m2--) {
        const measurement = measurements[m2];
        if (furthestMeasurementsFound.has(measurement.lane)) {
          continue;
        }
        const previousFurthestMeasurement = furthestMeasurements.get(
          measurement.lane
        );
        if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
          furthestMeasurements.set(measurement.lane, measurement);
        } else if (measurement.end < previousFurthestMeasurement.end) {
          furthestMeasurementsFound.set(measurement.lane, true);
        }
        if (furthestMeasurementsFound.size === this.options.lanes) {
          break;
        }
      }
      return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a, b) => {
        if (a.end === b.end) {
          return a.index - b.index;
        }
        return a.end - b.end;
      })[0] : void 0;
    };
    this.getMeasurementOptions = memo(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (count, paddingStart, scrollMargin, getItemKey, enabled) => {
        this.pendingMeasuredCacheIndexes = [];
        return {
          count,
          paddingStart,
          scrollMargin,
          getItemKey,
          enabled
        };
      },
      {
        key: false
      }
    );
    this.getMeasurements = memo(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count, paddingStart, scrollMargin, getItemKey, enabled }, itemSizeCache) => {
        if (!enabled) {
          this.measurementsCache = [];
          this.itemSizeCache.clear();
          return [];
        }
        if (this.measurementsCache.length === 0) {
          this.measurementsCache = this.options.initialMeasurementsCache;
          this.measurementsCache.forEach((item) => {
            this.itemSizeCache.set(item.key, item.size);
          });
        }
        const min = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const measurements = this.measurementsCache.slice(0, min);
        for (let i = min; i < count; i++) {
          const key = getItemKey(i);
          const furthestMeasurement = this.options.lanes === 1 ? measurements[i - 1] : this.getFurthestMeasurement(measurements, i);
          const start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
          const measuredSize = itemSizeCache.get(key);
          const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i);
          const end = start + size;
          const lane = furthestMeasurement ? furthestMeasurement.lane : i % this.options.lanes;
          measurements[i] = {
            index: i,
            start,
            size,
            end,
            key,
            lane
          };
        }
        this.measurementsCache = measurements;
        return measurements;
      },
      {
        key: "getMeasurements",
        debug: () => this.options.debug
      }
    );
    this.calculateRange = memo(
      () => [this.getMeasurements(), this.getSize(), this.getScrollOffset()],
      (measurements, outerSize, scrollOffset) => {
        return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
          measurements,
          outerSize,
          scrollOffset
        }) : null;
      },
      {
        key: "calculateRange",
        debug: () => this.options.debug
      }
    );
    this.getIndexes = memo(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (rangeExtractor, range, overscan, count) => {
        return range === null ? [] : rangeExtractor({
          startIndex: range.startIndex,
          endIndex: range.endIndex,
          overscan,
          count
        });
      },
      {
        key: "getIndexes",
        debug: () => this.options.debug
      }
    );
    this.indexFromElement = (node) => {
      const attributeName = this.options.indexAttribute;
      const indexStr = node.getAttribute(attributeName);
      if (!indexStr) {
        console.warn(
          `Missing attribute name '${attributeName}={index}' on measured element.`
        );
        return -1;
      }
      return parseInt(indexStr, 10);
    };
    this._measureElement = (node, entry) => {
      const index = this.indexFromElement(node);
      const item = this.measurementsCache[index];
      if (!item) {
        return;
      }
      const key = item.key;
      const prevNode = this.elementsCache.get(key);
      if (prevNode !== node) {
        if (prevNode) {
          this.observer.unobserve(prevNode);
        }
        this.observer.observe(node);
        this.elementsCache.set(key, node);
      }
      if (node.isConnected) {
        this.resizeItem(index, this.options.measureElement(node, entry, this));
      }
    };
    this.resizeItem = (index, size) => {
      const item = this.measurementsCache[index];
      if (!item) {
        return;
      }
      const itemSize = this.itemSizeCache.get(item.key) ?? item.size;
      const delta = size - itemSize;
      if (delta !== 0) {
        if (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(item, delta, this) : item.start < this.getScrollOffset() + this.scrollAdjustments) {
          if (this.options.debug) {
            console.info("correction", delta);
          }
          this._scrollToOffset(this.getScrollOffset(), {
            adjustments: this.scrollAdjustments += delta,
            behavior: void 0
          });
        }
        this.pendingMeasuredCacheIndexes.push(item.index);
        this.itemSizeCache = new Map(this.itemSizeCache.set(item.key, size));
        this.notify(false);
      }
    };
    this.measureElement = (node) => {
      if (!node) {
        this.elementsCache.forEach((cached, key) => {
          if (!cached.isConnected) {
            this.observer.unobserve(cached);
            this.elementsCache.delete(key);
          }
        });
        return;
      }
      this._measureElement(node, void 0);
    };
    this.getVirtualItems = memo(
      () => [this.getIndexes(), this.getMeasurements()],
      (indexes, measurements) => {
        const virtualItems = [];
        for (let k3 = 0, len = indexes.length; k3 < len; k3++) {
          const i = indexes[k3];
          const measurement = measurements[i];
          virtualItems.push(measurement);
        }
        return virtualItems;
      },
      {
        key: "getVirtualItems",
        debug: () => this.options.debug
      }
    );
    this.getVirtualItemForOffset = (offset) => {
      const measurements = this.getMeasurements();
      if (measurements.length === 0) {
        return void 0;
      }
      return notUndefined(
        measurements[findNearestBinarySearch(
          0,
          measurements.length - 1,
          (index) => notUndefined(measurements[index]).start,
          offset
        )]
      );
    };
    this.getOffsetForAlignment = (toOffset, align) => {
      const size = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        if (toOffset <= scrollOffset) {
          align = "start";
        } else if (toOffset >= scrollOffset + size) {
          align = "end";
        } else {
          align = "start";
        }
      }
      if (align === "start") {
        toOffset = toOffset;
      } else if (align === "end") {
        toOffset = toOffset - size;
      } else if (align === "center") {
        toOffset = toOffset - size / 2;
      }
      const scrollSizeProp = this.options.horizontal ? "scrollWidth" : "scrollHeight";
      const scrollSize = this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[scrollSizeProp] : this.scrollElement[scrollSizeProp] : 0;
      const maxOffset = scrollSize - size;
      return Math.max(Math.min(maxOffset, toOffset), 0);
    };
    this.getOffsetForIndex = (index, align = "auto") => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      const item = this.measurementsCache[index];
      if (!item) {
        return void 0;
      }
      const size = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        if (item.end >= scrollOffset + size - this.options.scrollPaddingEnd) {
          align = "end";
        } else if (item.start <= scrollOffset + this.options.scrollPaddingStart) {
          align = "start";
        } else {
          return [scrollOffset, align];
        }
      }
      const toOffset = align === "end" ? item.end + this.options.scrollPaddingEnd : item.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(toOffset, align), align];
    };
    this.isDynamicMode = () => this.elementsCache.size > 0;
    this.cancelScrollToIndex = () => {
      if (this.scrollToIndexTimeoutId !== null && this.targetWindow) {
        this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId);
        this.scrollToIndexTimeoutId = null;
      }
    };
    this.scrollToOffset = (toOffset, { align = "start", behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getOffsetForAlignment(toOffset, align), {
        adjustments: void 0,
        behavior
      });
    };
    this.scrollToIndex = (index, { align: initialAlign = "auto", behavior } = {}) => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      const offsetAndAlign = this.getOffsetForIndex(index, initialAlign);
      if (!offsetAndAlign)
        return;
      const [offset, align] = offsetAndAlign;
      this._scrollToOffset(offset, { adjustments: void 0, behavior });
      if (behavior !== "smooth" && this.isDynamicMode() && this.targetWindow) {
        this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
          this.scrollToIndexTimeoutId = null;
          const elementInDOM = this.elementsCache.has(
            this.options.getItemKey(index)
          );
          if (elementInDOM) {
            const [latestOffset] = notUndefined(
              this.getOffsetForIndex(index, align)
            );
            if (!approxEqual(latestOffset, this.getScrollOffset())) {
              this.scrollToIndex(index, { align, behavior });
            }
          } else {
            this.scrollToIndex(index, { align, behavior });
          }
        });
      }
    };
    this.scrollBy = (delta, { behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getScrollOffset() + delta, {
        adjustments: void 0,
        behavior
      });
    };
    this.getTotalSize = () => {
      var _a;
      const measurements = this.getMeasurements();
      let end;
      if (measurements.length === 0) {
        end = this.options.paddingStart;
      } else {
        end = this.options.lanes === 1 ? ((_a = measurements[measurements.length - 1]) == null ? void 0 : _a.end) ?? 0 : Math.max(
          ...measurements.slice(-this.options.lanes).map((m2) => m2.end)
        );
      }
      return Math.max(
        end - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    };
    this._scrollToOffset = (offset, {
      adjustments,
      behavior
    }) => {
      this.options.scrollToFn(offset, { behavior, adjustments }, this);
    };
    this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map();
      this.notify(false);
    };
    this.setOptions(opts);
  }
};
var findNearestBinarySearch = (low, high, getCurrentValue, value) => {
  while (low <= high) {
    const middle = (low + high) / 2 | 0;
    const currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function calculateRange({
  measurements,
  outerSize,
  scrollOffset
}) {
  const count = measurements.length - 1;
  const getOffset = (index) => measurements[index].start;
  const startIndex = findNearestBinarySearch(0, count, getOffset, scrollOffset);
  let endIndex = startIndex;
  while (endIndex < count && measurements[endIndex].end < scrollOffset + outerSize) {
    endIndex++;
  }
  return { startIndex, endIndex };
}

// node_modules/.pnpm/@tanstack+react-virtual@3.10.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tanstack/react-virtual/dist/esm/index.js
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? React9.useLayoutEffect : React9.useEffect;
function useVirtualizerBase(options) {
  const rerender = React9.useReducer(() => ({}), {})[1];
  const resolvedOptions = {
    ...options,
    onChange: (instance2, sync) => {
      var _a;
      if (sync) {
        (0, import_react_dom.flushSync)(rerender);
      } else {
        rerender();
      }
      (_a = options.onChange) == null ? void 0 : _a.call(options, instance2, sync);
    }
  };
  const [instance] = React9.useState(
    () => new Virtualizer(resolvedOptions)
  );
  instance.setOptions(resolvedOptions);
  React9.useEffect(() => {
    return instance._didMount();
  }, []);
  useIsomorphicLayoutEffect(() => {
    return instance._willUpdate();
  });
  return instance;
}
function useVirtualizer(options) {
  return useVirtualizerBase({
    observeElementRect,
    observeElementOffset,
    scrollToFn: elementScroll,
    ...options
  });
}

// @/components/VirtualizedSheet.tsx
var import_react30 = __toESM(require_react(), 1);

// @/hooks/useElementResize.ts
var import_react13 = __toESM(require_react(), 1);
var useElementResize = ({
  onResizeX,
  onResizeY
}) => {
  const [isResizing, setIsResizing] = (0, import_react13.useState)(false);
  const [resizingColumn, setResizingColumn] = (0, import_react13.useState)(null);
  const [resizeStartX, setResizeStartX] = (0, import_react13.useState)(null);
  const [resizeStartWidth, setResizeStartWidth] = (0, import_react13.useState)(null);
  const [resizeEndX, setResizeEndX] = (0, import_react13.useState)(null);
  const [resizingRow, setResizingRow] = (0, import_react13.useState)(null);
  const [resizeStartY, setResizeStartY] = (0, import_react13.useState)(null);
  const [resizeStartHeight, setResizeStartHeight] = (0, import_react13.useState)(
    null
  );
  const [resizeEndY, setResizeEndY] = (0, import_react13.useState)(null);
  const handleMouseDownX = (0, import_react13.useCallback)(
    ({
      e,
      width,
      colIndex
    }) => {
      e.preventDefault();
      setIsResizing(true);
      setResizingColumn(colIndex);
      setResizeStartX(e.clientX);
      setResizeStartWidth(width);
    },
    []
  );
  const handleMouseLeaveX = (0, import_react13.useCallback)(() => {
    setIsResizing(false);
    setResizingColumn(null);
    setResizeStartX(null);
    setResizeStartWidth(null);
    setResizeEndX(null);
    if (resizeEndX !== null && resizingColumn !== null) {
      onResizeX({ colIndex: resizingColumn, width: resizeEndX });
    }
  }, [
    onResizeX,
    resizeEndX,
    resizingColumn,
    setIsResizing,
    setResizingColumn,
    setResizeStartX,
    setResizeStartWidth
  ]);
  const handleMouseDownY = (0, import_react13.useCallback)(
    ({
      e,
      height,
      rowIndex
    }) => {
      e.preventDefault();
      setIsResizing(true);
      setResizingRow(rowIndex);
      setResizeStartY(e.clientY);
      setResizeStartHeight(height);
    },
    []
  );
  const handleMouseLeaveY = (0, import_react13.useCallback)(() => {
    setIsResizing(false);
    setResizingRow(null);
    setResizeStartY(null);
    setResizeStartHeight(null);
    setResizeEndY(null);
    if (resizeEndY !== null && resizingRow !== null) {
      onResizeY({ rowIndex: resizingRow, height: resizeEndY });
    }
  }, [
    onResizeY,
    resizeEndY,
    resizingRow,
    setIsResizing,
    setResizingRow,
    setResizeStartY,
    setResizeStartHeight
  ]);
  (0, import_react13.useEffect)(() => {
    if (!isResizing)
      return;
    const handleMouseMove = (e) => {
      if (resizingColumn === null && resizingRow === null || resizeStartX === null && resizeStartY === null || resizeStartWidth === null && resizeStartHeight === null)
        return;
      if (resizingColumn !== null && resizeStartX !== null && resizeStartWidth !== null) {
        const deltaX = (e.clientX - resizeStartX) * 1;
        const newWidth = Math.max(50, resizeStartWidth + deltaX);
        setResizeEndX(newWidth);
      } else if (resizingRow !== null && resizeStartY !== null && resizeStartHeight !== null) {
        const deltaY = (e.clientY - resizeStartY) * 1;
        const newHeight = Math.max(DEFAULT_CELL_HEIGHT, resizeStartHeight + deltaY);
        setResizeEndY(newHeight);
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [
    isResizing,
    resizingColumn,
    resizingRow,
    resizeStartX,
    resizeStartY,
    resizeStartWidth,
    resizeStartHeight
  ]);
  return {
    isResizing,
    resizingColumn,
    resizingRow,
    resizeStartX,
    resizeStartY,
    resizeEndX,
    resizeEndY,
    handleMouseDownX,
    handleMouseDownY,
    handleMouseLeaveX,
    handleMouseLeaveY
  };
};

// @/components/Row.tsx
var import_fast_deep_equal2 = __toESM(require_fast_deep_equal(), 1);
var import_react29 = __toESM(require_react(), 1);

// @/components/Cell.tsx
var import_fast_deep_equal = __toESM(require_fast_deep_equal(), 1);
var import_js_beautify = __toESM(require_js(), 1);
var import_react28 = __toESM(require_react(), 1);

// node_modules/.pnpm/cmdk@1.0.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/cmdk/dist/chunk-NZJY6EH4.mjs
var U = 1;
var Y = 0.9;
var H = 0.8;
var J = 0.17;
var p = 0.1;
var u = 0.999;
var $ = 0.9999;
var k = 0.99;
var m = /[\\\/_+.#"@\[\(\{&]/;
var B = /[\\\/_+.#"@\[\(\{&]/g;
var K = /[\s-]/;
var X = /[\s-]/g;
function G(_, C, h, P, A, f, O) {
  if (f === C.length)
    return A === _.length ? U : k;
  var T2 = `${A},${f}`;
  if (O[T2] !== void 0)
    return O[T2];
  for (var L = P.charAt(f), c = h.indexOf(L, A), S = 0, E, N2, R, M2; c >= 0; )
    E = G(_, C, h, P, c + 1, f + 1, O), E > S && (c === A ? E *= U : m.test(_.charAt(c - 1)) ? (E *= H, R = _.slice(A, c - 1).match(B), R && A > 0 && (E *= Math.pow(u, R.length))) : K.test(_.charAt(c - 1)) ? (E *= Y, M2 = _.slice(A, c - 1).match(X), M2 && A > 0 && (E *= Math.pow(u, M2.length))) : (E *= J, A > 0 && (E *= Math.pow(u, c - A))), _.charAt(c) !== C.charAt(f) && (E *= $)), (E < p && h.charAt(c - 1) === P.charAt(f + 1) || P.charAt(f + 1) === P.charAt(f) && h.charAt(c - 1) !== P.charAt(f)) && (N2 = G(_, C, h, P, c + 1, f + 2, O), N2 * p > E && (E = N2 * p)), E > S && (S = E), c = h.indexOf(L, c + 1);
  return O[T2] = S, S;
}
function D(_) {
  return _.toLowerCase().replace(X, " ");
}
function W(_, C, h) {
  return _ = h && h.length > 0 ? `${_ + " " + h.join(" ")}` : _, G(_, C, D(_), D(C), 0, 0, {});
}

// node_modules/.pnpm/@radix-ui+react-dialog@1.0.5_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-dialog/dist/index.mjs
var import_react27 = __toESM(require_react(), 1);

// node_modules/.pnpm/@radix-ui+primitive@1.0.1/node_modules/@radix-ui/primitive/dist/index.mjs
function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented)
      return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
  };
}

// node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var import_react14 = __toESM(require_react(), 1);
function $6ed0406888f73fc4$var$setRef(ref, value) {
  if (typeof ref === "function")
    ref(value);
  else if (ref !== null && ref !== void 0)
    ref.current = value;
}
function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
  return (node) => refs.forEach(
    (ref) => $6ed0406888f73fc4$var$setRef(ref, node)
  );
}
function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
  return (0, import_react14.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
}

// node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-context/dist/index.mjs
var import_react15 = __toESM(require_react(), 1);
function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
  const Context = /* @__PURE__ */ (0, import_react15.createContext)(defaultContext);
  function Provider(props) {
    const { children, ...context } = props;
    const value = (0, import_react15.useMemo)(
      () => context,
      Object.values(context)
    );
    return /* @__PURE__ */ (0, import_react15.createElement)(Context.Provider, {
      value
    }, children);
  }
  function useContext6(consumerName) {
    const context = (0, import_react15.useContext)(Context);
    if (context)
      return context;
    if (defaultContext !== void 0)
      return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  Provider.displayName = rootComponentName + "Provider";
  return [
    Provider,
    useContext6
  ];
}
function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function $c512c27ab02ef895$export$fd42f52fd3ae11092(rootComponentName, defaultContext) {
    const BaseContext = /* @__PURE__ */ (0, import_react15.createContext)(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [
      ...defaultContexts,
      defaultContext
    ];
    function Provider(props) {
      const { scope, children, ...context } = props;
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;
      const value = (0, import_react15.useMemo)(
        () => context,
        Object.values(context)
      );
      return /* @__PURE__ */ (0, import_react15.createElement)(Context.Provider, {
        value
      }, children);
    }
    function useContext6(consumerName, scope) {
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;
      const context = (0, import_react15.useContext)(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [
      Provider,
      useContext6
    ];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return /* @__PURE__ */ (0, import_react15.createContext)(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
      return (0, import_react15.useMemo)(
        () => ({
          [`__scope${scopeName}`]: {
            ...scope,
            [scopeName]: contexts
          }
        }),
        [
          scope,
          contexts
        ]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [
    $c512c27ab02ef895$export$fd42f52fd3ae11092,
    $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
  ];
}
function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope1 = () => {
    const scopeHooks = scopes.map(
      (createScope) => ({
        useScope: createScope(),
        scopeName: createScope.scopeName
      })
    );
    return function useComposedScopes(overrideScopes) {
      const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return {
          ...nextScopes,
          ...currentScope
        };
      }, {});
      return (0, import_react15.useMemo)(
        () => ({
          [`__scope${baseScope.scopeName}`]: nextScopes1
        }),
        [
          nextScopes1
        ]
      );
    };
  };
  createScope1.scopeName = baseScope.scopeName;
  return createScope1;
}

// node_modules/.pnpm/@radix-ui+react-id@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-id/dist/index.mjs
var $2AODx$react = __toESM(require_react(), 1);

// node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var import_react16 = __toESM(require_react(), 1);
var $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? import_react16.useLayoutEffect : () => {
};

// node_modules/.pnpm/@radix-ui+react-id@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-id/dist/index.mjs
var $1746a345f3d73bb7$var$useReactId = $2AODx$react["useId".toString()] || (() => void 0);
var $1746a345f3d73bb7$var$count = 0;
function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId) {
  const [id, setId] = $2AODx$react.useState($1746a345f3d73bb7$var$useReactId());
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (!deterministicId)
      setId(
        (reactId) => reactId !== null && reactId !== void 0 ? reactId : String($1746a345f3d73bb7$var$count++)
      );
  }, [
    deterministicId
  ]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var import_react18 = __toESM(require_react(), 1);

// node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var import_react17 = __toESM(require_react(), 1);
function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
  const callbackRef = (0, import_react17.useRef)(callback);
  (0, import_react17.useEffect)(() => {
    callbackRef.current = callback;
  });
  return (0, import_react17.useMemo)(
    () => (...args) => {
      var _callbackRef$current;
      return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
    },
    []
  );
}

// node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
function $71cd76cc60e0454e$export$6f32135080cb4c3({ prop, defaultProp, onChange = () => {
} }) {
  const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value1 = isControlled ? prop : uncontrolledProp;
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  const setValue = (0, import_react18.useCallback)((nextValue) => {
    if (isControlled) {
      const setter = nextValue;
      const value = typeof nextValue === "function" ? setter(prop) : nextValue;
      if (value !== prop)
        handleChange(value);
    } else
      setUncontrolledProp(nextValue);
  }, [
    isControlled,
    prop,
    setUncontrolledProp,
    handleChange
  ]);
  return [
    value1,
    setValue
  ];
}
function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp, onChange }) {
  const uncontrolledState = (0, import_react18.useState)(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = (0, import_react18.useRef)(value);
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  (0, import_react18.useEffect)(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [
    value,
    prevValueRef,
    handleChange
  ]);
  return uncontrolledState;
}

// node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.0.5_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom_kdxoghzqbwas7c2iswehnhyspy/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var import_react22 = __toESM(require_react(), 1);

// node_modules/.pnpm/@radix-ui+react-primitive@1.0.3_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_react20 = __toESM(require_react(), 1);
var import_react_dom2 = __toESM(require_react_dom(), 1);

// node_modules/.pnpm/@radix-ui+react-slot@1.0.2_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs
var import_react19 = __toESM(require_react(), 1);
var $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = import_react19.Children.toArray(children);
  const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (import_react19.Children.count(newElement) > 1)
          return import_react19.Children.only(null);
        return /* @__PURE__ */ (0, import_react19.isValidElement)(newElement) ? newElement.props.children : null;
      } else
        return child;
    });
    return /* @__PURE__ */ (0, import_react19.createElement)($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
      ref: forwardedRef
    }), /* @__PURE__ */ (0, import_react19.isValidElement)(newElement) ? /* @__PURE__ */ (0, import_react19.cloneElement)(newElement, void 0, newChildren) : null);
  }
  return /* @__PURE__ */ (0, import_react19.createElement)($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
    ref: forwardedRef
  }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = "Slot";
var $5e63c961fc1ce211$var$SlotClone = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (/* @__PURE__ */ (0, import_react19.isValidElement)(children))
    return /* @__PURE__ */ (0, import_react19.cloneElement)(children, {
      ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
      ref: forwardedRef ? $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref) : children.ref
    });
  return import_react19.Children.count(children) > 1 ? import_react19.Children.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone.displayName = "SlotClone";
var $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) => {
  return /* @__PURE__ */ (0, import_react19.createElement)(import_react19.Fragment, null, children);
};
function $5e63c961fc1ce211$var$isSlottable(child) {
  return /* @__PURE__ */ (0, import_react19.isValidElement)(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
  const overrideProps = {
    ...childProps
  };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue)
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      else if (slotPropValue)
        overrideProps[propName] = slotPropValue;
    } else if (propName === "style")
      overrideProps[propName] = {
        ...slotPropValue,
        ...childPropValue
      };
    else if (propName === "className")
      overrideProps[propName] = [
        slotPropValue,
        childPropValue
      ].filter(Boolean).join(" ");
  }
  return {
    ...slotProps,
    ...overrideProps
  };
}

// node_modules/.pnpm/@radix-ui+react-primitive@1.0.3_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-primitive/dist/index.mjs
var $8927f6f2acc4f386$var$NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
  const Node = /* @__PURE__ */ (0, import_react20.forwardRef)((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
    (0, import_react20.useEffect)(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []);
    return /* @__PURE__ */ (0, import_react20.createElement)(Comp, _extends({}, primitiveProps, {
      ref: forwardedRef
    }));
  });
  Node.displayName = `Primitive.${node}`;
  return {
    ...primitive,
    [node]: Node
  };
}, {});
function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
  if (target)
    (0, import_react_dom2.flushSync)(
      () => target.dispatchEvent(event)
    );
}

// node_modules/.pnpm/@radix-ui+react-use-escape-keydown@1.0.3_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
var import_react21 = __toESM(require_react(), 1);
function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const onEscapeKeyDown = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEscapeKeyDownProp);
  (0, import_react21.useEffect)(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape")
        onEscapeKeyDown(event);
    };
    ownerDocument.addEventListener("keydown", handleKeyDown);
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown);
  }, [
    onEscapeKeyDown,
    ownerDocument
  ]);
}

// node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.0.5_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom_kdxoghzqbwas7c2iswehnhyspy/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var $5cb92bef7577960e$var$CONTEXT_UPDATE = "dismissableLayer.update";
var $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var $5cb92bef7577960e$var$FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var $5cb92bef7577960e$var$originalBodyPointerEvents;
var $5cb92bef7577960e$var$DismissableLayerContext = /* @__PURE__ */ (0, import_react22.createContext)({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var $5cb92bef7577960e$export$177fb62ff3ec1f22 = /* @__PURE__ */ (0, import_react22.forwardRef)((props, forwardedRef) => {
  var _node$ownerDocument;
  const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
  const context = (0, import_react22.useContext)($5cb92bef7577960e$var$DismissableLayerContext);
  const [node1, setNode] = (0, import_react22.useState)(null);
  const ownerDocument = (_node$ownerDocument = node1 === null || node1 === void 0 ? void 0 : node1.ownerDocument) !== null && _node$ownerDocument !== void 0 ? _node$ownerDocument : globalThis === null || globalThis === void 0 ? void 0 : globalThis.document;
  const [, force] = (0, import_react22.useState)({});
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setNode(node)
  );
  const layers = Array.from(context.layers);
  const [highestLayerWithOutsidePointerEventsDisabled] = [
    ...context.layersWithOutsidePointerEventsDisabled
  ].slice(-1);
  const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
  const index = node1 ? layers.indexOf(node1) : -1;
  const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
  const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
  const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside((event) => {
    const target = event.target;
    const isPointerDownOnBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (!isPointerEventsEnabled || isPointerDownOnBranch)
      return;
    onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  const focusOutside = $5cb92bef7577960e$var$useFocusOutside((event) => {
    const target = event.target;
    const isFocusInBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (isFocusInBranch)
      return;
    onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  $addc16e1bbe58fd0$export$3a72a57244d6e765((event) => {
    const isHighestLayer = index === context.layers.size - 1;
    if (!isHighestLayer)
      return;
    onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
    if (!event.defaultPrevented && onDismiss) {
      event.preventDefault();
      onDismiss();
    }
  }, ownerDocument);
  (0, import_react22.useEffect)(() => {
    if (!node1)
      return;
    if (disableOutsidePointerEvents) {
      if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
        $5cb92bef7577960e$var$originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
        ownerDocument.body.style.pointerEvents = "none";
      }
      context.layersWithOutsidePointerEventsDisabled.add(node1);
    }
    context.layers.add(node1);
    $5cb92bef7577960e$var$dispatchUpdate();
    return () => {
      if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1)
        ownerDocument.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
    };
  }, [
    node1,
    ownerDocument,
    disableOutsidePointerEvents,
    context
  ]);
  (0, import_react22.useEffect)(() => {
    return () => {
      if (!node1)
        return;
      context.layers.delete(node1);
      context.layersWithOutsidePointerEventsDisabled.delete(node1);
      $5cb92bef7577960e$var$dispatchUpdate();
    };
  }, [
    node1,
    context
  ]);
  (0, import_react22.useEffect)(() => {
    const handleUpdate = () => force({});
    document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
    return () => document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
  }, []);
  return /* @__PURE__ */ (0, import_react22.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, layerProps, {
    ref: composedRefs,
    style: {
      pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
      ...props.style
    },
    onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusCapture, focusOutside.onFocusCapture),
    onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlurCapture, focusOutside.onBlurCapture),
    onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
  }));
});
function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handlePointerDownOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPointerDownOutside);
  const isPointerInsideReactTreeRef = (0, import_react22.useRef)(false);
  const handleClickRef = (0, import_react22.useRef)(() => {
  });
  (0, import_react22.useEffect)(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent = function() {
          $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
            discrete: true
          });
        };
        const eventDetail = {
          originalEvent: event
        };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent;
          ownerDocument.addEventListener("click", handleClickRef.current, {
            once: true
          });
        } else
          handleAndDispatchPointerDownOutsideEvent();
      } else
        ownerDocument.removeEventListener("click", handleClickRef.current);
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [
    ownerDocument,
    handlePointerDownOutside
  ]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handleFocusOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onFocusOutside);
  const isFocusInsideReactTreeRef = (0, import_react22.useRef)(false);
  (0, import_react22.useEffect)(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = {
          originalEvent: event
        };
        $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [
    ownerDocument,
    handleFocusOutside
  ]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function $5cb92bef7577960e$var$dispatchUpdate() {
  const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  if (handler)
    target.addEventListener(name, handler, {
      once: true
    });
  if (discrete)
    $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event);
  else
    target.dispatchEvent(event);
}

// node_modules/.pnpm/@radix-ui+react-focus-scope@1.0.4_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3._jrqf24my3cdc2p4vkyzbbzdnty/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var import_react23 = __toESM(require_react(), 1);
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var $d3863c46a17e8a28$var$EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
var $d3863c46a17e8a28$export$20e40289641fbbb6 = /* @__PURE__ */ (0, import_react23.forwardRef)((props, forwardedRef) => {
  const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
  const [container1, setContainer] = (0, import_react23.useState)(null);
  const onMountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onMountAutoFocusProp);
  const onUnmountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onUnmountAutoFocusProp);
  const lastFocusedElementRef = (0, import_react23.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContainer(node)
  );
  const focusScope = (0, import_react23.useRef)({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  (0, import_react23.useEffect)(() => {
    if (trapped) {
      let handleFocusIn = function(event) {
        if (focusScope.paused || !container1)
          return;
        const target = event.target;
        if (container1.contains(target))
          lastFocusedElementRef.current = target;
        else
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      }, handleFocusOut = function(event) {
        if (focusScope.paused || !container1)
          return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null)
          return;
        if (!container1.contains(relatedTarget))
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      }, handleMutations = function(mutations) {
        const focusedElement = document.activeElement;
        if (focusedElement !== document.body)
          return;
        for (const mutation of mutations)
          if (mutation.removedNodes.length > 0)
            $d3863c46a17e8a28$var$focus(container1);
      };
      document.addEventListener("focusin", handleFocusIn);
      document.addEventListener("focusout", handleFocusOut);
      const mutationObserver = new MutationObserver(handleMutations);
      if (container1)
        mutationObserver.observe(container1, {
          childList: true,
          subtree: true
        });
      return () => {
        document.removeEventListener("focusin", handleFocusIn);
        document.removeEventListener("focusout", handleFocusOut);
        mutationObserver.disconnect();
      };
    }
  }, [
    trapped,
    container1,
    focusScope.paused
  ]);
  (0, import_react23.useEffect)(() => {
    if (container1) {
      $d3863c46a17e8a28$var$focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container1.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
        container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container1.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          $d3863c46a17e8a28$var$focusFirst($d3863c46a17e8a28$var$removeLinks($d3863c46a17e8a28$var$getTabbableCandidates(container1)), {
            select: true
          });
          if (document.activeElement === previouslyFocusedElement)
            $d3863c46a17e8a28$var$focus(container1);
        }
      }
      return () => {
        container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
          container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container1.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented)
            $d3863c46a17e8a28$var$focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
              select: true
            });
          container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          $d3863c46a17e8a28$var$focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [
    container1,
    onMountAutoFocus,
    onUnmountAutoFocus,
    focusScope
  ]);
  const handleKeyDown = (0, import_react23.useCallback)((event) => {
    if (!loop && !trapped)
      return;
    if (focusScope.paused)
      return;
    const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
    const focusedElement = document.activeElement;
    if (isTabKey && focusedElement) {
      const container = event.currentTarget;
      const [first, last] = $d3863c46a17e8a28$var$getTabbableEdges(container);
      const hasTabbableElementsInside = first && last;
      if (!hasTabbableElementsInside) {
        if (focusedElement === container)
          event.preventDefault();
      } else {
        if (!event.shiftKey && focusedElement === last) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(first, {
              select: true
            });
        } else if (event.shiftKey && focusedElement === first) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(last, {
              select: true
            });
        }
      }
    }
  }, [
    loop,
    trapped,
    focusScope.paused
  ]);
  return /* @__PURE__ */ (0, import_react23.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    tabIndex: -1
  }, scopeProps, {
    ref: composedRefs,
    onKeyDown: handleKeyDown
  }));
});
function $d3863c46a17e8a28$var$focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    $d3863c46a17e8a28$var$focus(candidate, {
      select
    });
    if (document.activeElement !== previouslyFocusedElement)
      return;
  }
}
function $d3863c46a17e8a28$var$getTabbableEdges(container) {
  const candidates = $d3863c46a17e8a28$var$getTabbableCandidates(container);
  const first = $d3863c46a17e8a28$var$findVisible(candidates, container);
  const last = $d3863c46a17e8a28$var$findVisible(candidates.reverse(), container);
  return [
    first,
    last
  ];
}
function $d3863c46a17e8a28$var$getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function $d3863c46a17e8a28$var$findVisible(elements, container) {
  for (const element of elements) {
    if (!$d3863c46a17e8a28$var$isHidden(element, {
      upTo: container
    }))
      return element;
  }
}
function $d3863c46a17e8a28$var$isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden")
    return true;
  while (node) {
    if (upTo !== void 0 && node === upTo)
      return false;
    if (getComputedStyle(node).display === "none")
      return true;
    node = node.parentElement;
  }
  return false;
}
function $d3863c46a17e8a28$var$isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function $d3863c46a17e8a28$var$focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({
      preventScroll: true
    });
    if (element !== previouslyFocusedElement && $d3863c46a17e8a28$var$isSelectableInput(element) && select)
      element.select();
  }
}
var $d3863c46a17e8a28$var$focusScopesStack = $d3863c46a17e8a28$var$createFocusScopesStack();
function $d3863c46a17e8a28$var$createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope)
        activeFocusScope === null || activeFocusScope === void 0 || activeFocusScope.pause();
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      var _stack$;
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume();
    }
  };
}
function $d3863c46a17e8a28$var$arrayRemove(array, item) {
  const updatedArray = [
    ...array
  ];
  const index = updatedArray.indexOf(item);
  if (index !== -1)
    updatedArray.splice(index, 1);
  return updatedArray;
}
function $d3863c46a17e8a28$var$removeLinks(items) {
  return items.filter(
    (item) => item.tagName !== "A"
  );
}

// node_modules/.pnpm/@radix-ui+react-portal@1.0.4_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-portal/dist/index.mjs
var import_react24 = __toESM(require_react(), 1);
var import_react_dom3 = __toESM(require_react_dom(), 1);
var $f1701beae083dbae$export$602eac185826482c = /* @__PURE__ */ (0, import_react24.forwardRef)((props, forwardedRef) => {
  var _globalThis$document;
  const { container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body, ...portalProps } = props;
  return container ? /* @__PURE__ */ import_react_dom3.default.createPortal(/* @__PURE__ */ (0, import_react24.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, portalProps, {
    ref: forwardedRef
  })), container) : null;
});

// node_modules/.pnpm/@radix-ui+react-presence@1.0.1_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-presence/dist/index.mjs
var import_react25 = __toESM(require_react(), 1);
var import_react_dom4 = __toESM(require_react_dom(), 1);
function $fe963b355347cc68$export$3e6543de14f8614f(initialState2, machine) {
  return (0, import_react25.useReducer)((state, event) => {
    const nextState = machine[state][event];
    return nextState !== null && nextState !== void 0 ? nextState : state;
  }, initialState2);
}
var $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props) => {
  const { present, children } = props;
  const presence = $921a889cee6df7e8$var$usePresence(present);
  const child = typeof children === "function" ? children({
    present: presence.isPresent
  }) : import_react25.Children.only(children);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? /* @__PURE__ */ (0, import_react25.cloneElement)(child, {
    ref
  }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
function $921a889cee6df7e8$var$usePresence(present) {
  const [node1, setNode] = (0, import_react25.useState)();
  const stylesRef = (0, import_react25.useRef)({});
  const prevPresentRef = (0, import_react25.useRef)(present);
  const prevAnimationNameRef = (0, import_react25.useRef)("none");
  const initialState2 = present ? "mounted" : "unmounted";
  const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState2, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  (0, import_react25.useEffect)(() => {
    const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [
    state
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
      if (present)
        send("MOUNT");
      else if (currentAnimationName === "none" || (styles === null || styles === void 0 ? void 0 : styles.display) === "none")
        send("UNMOUNT");
      else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating)
          send("ANIMATION_OUT");
        else
          send("UNMOUNT");
      }
      prevPresentRef.current = present;
    }
  }, [
    present,
    send
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (node1) {
      const handleAnimationEnd = (event) => {
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node1 && isCurrentAnimation)
          (0, import_react_dom4.flushSync)(
            () => send("ANIMATION_END")
          );
      };
      const handleAnimationStart = (event) => {
        if (event.target === node1)
          prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
      };
      node1.addEventListener("animationstart", handleAnimationStart);
      node1.addEventListener("animationcancel", handleAnimationEnd);
      node1.addEventListener("animationend", handleAnimationEnd);
      return () => {
        node1.removeEventListener("animationstart", handleAnimationStart);
        node1.removeEventListener("animationcancel", handleAnimationEnd);
        node1.removeEventListener("animationend", handleAnimationEnd);
      };
    } else
      send("ANIMATION_END");
  }, [
    node1,
    send
  ]);
  return {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(state),
    ref: (0, import_react25.useCallback)((node) => {
      if (node)
        stylesRef.current = getComputedStyle(node);
      setNode(node);
    }, [])
  };
}
function $921a889cee6df7e8$var$getAnimationName(styles) {
  return (styles === null || styles === void 0 ? void 0 : styles.animationName) || "none";
}

// node_modules/.pnpm/@radix-ui+react-focus-guards@1.0.1_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var import_react26 = __toESM(require_react(), 1);
var $3db38b7d1fb3fe6a$var$count = 0;
function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {
  (0, import_react26.useEffect)(() => {
    var _edgeGuards$, _edgeGuards$2;
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $3db38b7d1fb3fe6a$var$createFocusGuard());
    document.body.insertAdjacentElement("beforeend", (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $3db38b7d1fb3fe6a$var$createFocusGuard());
    $3db38b7d1fb3fe6a$var$count++;
    return () => {
      if ($3db38b7d1fb3fe6a$var$count === 1)
        document.querySelectorAll("[data-radix-focus-guard]").forEach(
          (node) => node.remove()
        );
      $3db38b7d1fb3fe6a$var$count--;
    };
  }, []);
}
function $3db38b7d1fb3fe6a$var$createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none";
  return element;
}

// node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.3.3_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/Combination.js
var React12 = __toESM(require_react());

// node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.3.3_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/UI.js
var React10 = __toESM(require_react());

// node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.3.3_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.3.3_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React10.forwardRef(function(props, parentRef) {
  var ref = React10.useRef(null);
  var _a = React10.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
  var SideCar = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React10.createElement(
    React10.Fragment,
    null,
    enabled && React10.createElement(SideCar, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
    forwardProps ? React10.cloneElement(React10.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React10.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.3.3_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React11 = __toESM(require_react());

// node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.3.3_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.3.3_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
      if (s > d) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== document.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll2 = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll2) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll2;
        availableScrollTop += position;
      }
    }
    target = target.parentNode;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.3.3_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React11.useRef([]);
  var touchStartRef = React11.useRef([0, 0]);
  var activeAxis = React11.useRef();
  var id = React11.useState(idCounter++)[0];
  var Style = React11.useState(function() {
    return styleSingleton();
  })[0];
  var lastProps = React11.useRef(props);
  React11.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React11.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React11.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React11.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React11.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React11.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React11.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React11.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React11.useEffect(function() {
    lockStack.push(Style);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React11.createElement(
    React11.Fragment,
    null,
    inert ? React11.createElement(Style, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React11.createElement(RemoveScrollBar, { gapMode: "margin" }) : null
  );
}

// node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.3.3_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.3.3_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React12.forwardRef(function(props, ref) {
  return React12.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// node_modules/.pnpm/@radix-ui+react-dialog@1.0.5_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-dialog/dist/index.mjs
var $5d3850c4d0b4e6c7$var$DIALOG_NAME = "Dialog";
var [$5d3850c4d0b4e6c7$var$createDialogContext, $5d3850c4d0b4e6c7$export$cc702773b8ea3e41] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($5d3850c4d0b4e6c7$var$DIALOG_NAME);
var [$5d3850c4d0b4e6c7$var$DialogProvider, $5d3850c4d0b4e6c7$var$useDialogContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$DIALOG_NAME);
var $5d3850c4d0b4e6c7$export$3ddf2d174ce01153 = (props) => {
  const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
  const triggerRef = (0, import_react27.useRef)(null);
  const contentRef = (0, import_react27.useRef)(null);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_react27.createElement)($5d3850c4d0b4e6c7$var$DialogProvider, {
    scope: __scopeDialog,
    triggerRef,
    contentRef,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    titleId: $1746a345f3d73bb7$export$f680877a34711e37(),
    descriptionId: $1746a345f3d73bb7$export$f680877a34711e37(),
    open,
    onOpenChange: setOpen,
    onOpenToggle: (0, import_react27.useCallback)(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    ),
    modal
  }, children);
};
var $5d3850c4d0b4e6c7$var$PORTAL_NAME = "DialogPortal";
var [$5d3850c4d0b4e6c7$var$PortalProvider, $5d3850c4d0b4e6c7$var$usePortalContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, {
  forceMount: void 0
});
var $5d3850c4d0b4e6c7$export$dad7c95542bacce0 = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, __scopeDialog);
  return /* @__PURE__ */ (0, import_react27.createElement)($5d3850c4d0b4e6c7$var$PortalProvider, {
    scope: __scopeDialog,
    forceMount
  }, import_react27.Children.map(
    children,
    (child) => /* @__PURE__ */ (0, import_react27.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      present: forceMount || context.open
    }, /* @__PURE__ */ (0, import_react27.createElement)($f1701beae083dbae$export$602eac185826482c, {
      asChild: true,
      container
    }, child))
  ));
};
var $5d3850c4d0b4e6c7$var$OVERLAY_NAME = "DialogOverlay";
var $5d3850c4d0b4e6c7$export$bd1d06c79be19e17 = /* @__PURE__ */ (0, import_react27.forwardRef)((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  return context.modal ? /* @__PURE__ */ (0, import_react27.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ (0, import_react27.createElement)($5d3850c4d0b4e6c7$var$DialogOverlayImpl, _extends({}, overlayProps, {
    ref: forwardedRef
  }))) : null;
});
var $5d3850c4d0b4e6c7$var$DialogOverlayImpl = /* @__PURE__ */ (0, import_react27.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, __scopeDialog);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ (0, import_react27.createElement)(Combination_default, {
      as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
      allowPinchZoom: true,
      shards: [
        context.contentRef
      ]
    }, /* @__PURE__ */ (0, import_react27.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
      "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
    }, overlayProps, {
      ref: forwardedRef,
      style: {
        pointerEvents: "auto",
        ...overlayProps.style
      }
    })))
  );
});
var $5d3850c4d0b4e6c7$var$CONTENT_NAME = "DialogContent";
var $5d3850c4d0b4e6c7$export$b6d9565de1e068cf = /* @__PURE__ */ (0, import_react27.forwardRef)((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  return /* @__PURE__ */ (0, import_react27.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, context.modal ? /* @__PURE__ */ (0, import_react27.createElement)($5d3850c4d0b4e6c7$var$DialogContentModal, _extends({}, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ (0, import_react27.createElement)($5d3850c4d0b4e6c7$var$DialogContentNonModal, _extends({}, contentProps, {
    ref: forwardedRef
  })));
});
var $5d3850c4d0b4e6c7$var$DialogContentModal = /* @__PURE__ */ (0, import_react27.forwardRef)((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const contentRef = (0, import_react27.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.contentRef, contentRef);
  (0, import_react27.useEffect)(() => {
    const content = contentRef.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ (0, import_react27.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: true,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      event.preventDefault();
      (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      if (isRightClick)
        event.preventDefault();
    }),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocusOutside,
      (event) => event.preventDefault()
    )
  }));
});
var $5d3850c4d0b4e6c7$var$DialogContentNonModal = /* @__PURE__ */ (0, import_react27.forwardRef)((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const hasInteractedOutsideRef = (0, import_react27.useRef)(false);
  const hasPointerDownOutsideRef = (0, import_react27.useRef)(false);
  return /* @__PURE__ */ (0, import_react27.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: (event) => {
      var _props$onCloseAutoFoc;
      (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
      if (!event.defaultPrevented) {
        var _context$triggerRef$c2;
        if (!hasInteractedOutsideRef.current)
          (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus();
        event.preventDefault();
      }
      hasInteractedOutsideRef.current = false;
      hasPointerDownOutsideRef.current = false;
    },
    onInteractOutside: (event) => {
      var _props$onInteractOuts, _context$triggerRef$c3;
      (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
      if (!event.defaultPrevented) {
        hasInteractedOutsideRef.current = true;
        if (event.detail.originalEvent.type === "pointerdown")
          hasPointerDownOutsideRef.current = true;
      }
      const target = event.target;
      const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
      if (targetIsTrigger)
        event.preventDefault();
      if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current)
        event.preventDefault();
    }
  }));
});
var $5d3850c4d0b4e6c7$var$DialogContentImpl = /* @__PURE__ */ (0, import_react27.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, __scopeDialog);
  const contentRef = (0, import_react27.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  return /* @__PURE__ */ (0, import_react27.createElement)(import_react27.Fragment, null, /* @__PURE__ */ (0, import_react27.createElement)($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    loop: true,
    trapped: trapFocus,
    onMountAutoFocus: onOpenAutoFocus,
    onUnmountAutoFocus: onCloseAutoFocus
  }, /* @__PURE__ */ (0, import_react27.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, _extends({
    role: "dialog",
    id: context.contentId,
    "aria-describedby": context.descriptionId,
    "aria-labelledby": context.titleId,
    "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
  }, contentProps, {
    ref: composedRefs,
    onDismiss: () => context.onOpenChange(false)
  }))), false);
});
var $5d3850c4d0b4e6c7$var$TITLE_NAME = "DialogTitle";
function $5d3850c4d0b4e6c7$var$getState(open) {
  return open ? "open" : "closed";
}
var $5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME = "DialogTitleWarning";
var [$5d3850c4d0b4e6c7$export$69b62a49393917d6, $5d3850c4d0b4e6c7$var$useWarningContext] = $c512c27ab02ef895$export$fd42f52fd3ae1109($5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME, {
  contentName: $5d3850c4d0b4e6c7$var$CONTENT_NAME,
  titleName: $5d3850c4d0b4e6c7$var$TITLE_NAME,
  docsSlug: "dialog"
});
var $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9 = $5d3850c4d0b4e6c7$export$3ddf2d174ce01153;
var $5d3850c4d0b4e6c7$export$602eac185826482c = $5d3850c4d0b4e6c7$export$dad7c95542bacce0;
var $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff = $5d3850c4d0b4e6c7$export$bd1d06c79be19e17;
var $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2 = $5d3850c4d0b4e6c7$export$b6d9565de1e068cf;

// node_modules/.pnpm/cmdk@1.0.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/cmdk/dist/index.mjs
var t = __toESM(require_react(), 1);
var V = '[cmdk-group=""]';
var X2 = '[cmdk-group-items=""]';
var ge = '[cmdk-group-heading=""]';
var Y2 = '[cmdk-item=""]';
var le = `${Y2}:not([aria-disabled="true"])`;
var Q = "cmdk-item-select";
var M = "data-value";
var Re = (r, o, n) => W(r, o, n);
var ue = t.createContext(void 0);
var G2 = () => t.useContext(ue);
var de = t.createContext(void 0);
var Z = () => t.useContext(de);
var fe = t.createContext(void 0);
var me = t.forwardRef((r, o) => {
  let n = k2(() => {
    var e, s;
    return { search: "", value: (s = (e = r.value) != null ? e : r.defaultValue) != null ? s : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), u2 = k2(() => /* @__PURE__ */ new Set()), c = k2(() => /* @__PURE__ */ new Map()), d = k2(() => /* @__PURE__ */ new Map()), f = k2(() => /* @__PURE__ */ new Set()), p2 = pe(r), { label: v, children: b, value: l, onValueChange: y, filter: S, shouldFilter: C, loop: L, disablePointerSelection: ee = false, vimBindings: j = true, ...H2 } = r, te = t.useId(), $2 = t.useId(), K2 = t.useId(), x = t.useRef(null), g = Me();
  T(() => {
    if (l !== void 0) {
      let e = l.trim();
      n.current.value = e, h.emit();
    }
  }, [l]), T(() => {
    g(6, re);
  }, []);
  let h = t.useMemo(() => ({ subscribe: (e) => (f.current.add(e), () => f.current.delete(e)), snapshot: () => n.current, setState: (e, s, i) => {
    var a, m2, R;
    if (!Object.is(n.current[e], s)) {
      if (n.current[e] = s, e === "search")
        z2(), q(), g(1, U2);
      else if (e === "value" && (i || g(5, re), ((a = p2.current) == null ? void 0 : a.value) !== void 0)) {
        let E = s != null ? s : "";
        (R = (m2 = p2.current).onValueChange) == null || R.call(m2, E);
        return;
      }
      h.emit();
    }
  }, emit: () => {
    f.current.forEach((e) => e());
  } }), []), B2 = t.useMemo(() => ({ value: (e, s, i) => {
    var a;
    s !== ((a = d.current.get(e)) == null ? void 0 : a.value) && (d.current.set(e, { value: s, keywords: i }), n.current.filtered.items.set(e, ne(s, i)), g(2, () => {
      q(), h.emit();
    }));
  }, item: (e, s) => (u2.current.add(e), s && (c.current.has(s) ? c.current.get(s).add(e) : c.current.set(s, /* @__PURE__ */ new Set([e]))), g(3, () => {
    z2(), q(), n.current.value || U2(), h.emit();
  }), () => {
    d.current.delete(e), u2.current.delete(e), n.current.filtered.items.delete(e);
    let i = O();
    g(4, () => {
      z2(), (i == null ? void 0 : i.getAttribute("id")) === e && U2(), h.emit();
    });
  }), group: (e) => (c.current.has(e) || c.current.set(e, /* @__PURE__ */ new Set()), () => {
    d.current.delete(e), c.current.delete(e);
  }), filter: () => p2.current.shouldFilter, label: v || r["aria-label"], disablePointerSelection: ee, listId: te, inputId: K2, labelId: $2, listInnerRef: x }), []);
  function ne(e, s) {
    var a, m2;
    let i = (m2 = (a = p2.current) == null ? void 0 : a.filter) != null ? m2 : Re;
    return e ? i(e, n.current.search, s) : 0;
  }
  function q() {
    if (!n.current.search || p2.current.shouldFilter === false)
      return;
    let e = n.current.filtered.items, s = [];
    n.current.filtered.groups.forEach((a) => {
      let m2 = c.current.get(a), R = 0;
      m2.forEach((E) => {
        let P = e.get(E);
        R = Math.max(P, R);
      }), s.push([a, R]);
    });
    let i = x.current;
    A().sort((a, m2) => {
      var P, _;
      let R = a.getAttribute("id"), E = m2.getAttribute("id");
      return ((P = e.get(E)) != null ? P : 0) - ((_ = e.get(R)) != null ? _ : 0);
    }).forEach((a) => {
      let m2 = a.closest(X2);
      m2 ? m2.appendChild(a.parentElement === m2 ? a : a.closest(`${X2} > *`)) : i.appendChild(a.parentElement === i ? a : a.closest(`${X2} > *`));
    }), s.sort((a, m2) => m2[1] - a[1]).forEach((a) => {
      let m2 = x.current.querySelector(`${V}[${M}="${encodeURIComponent(a[0])}"]`);
      m2 == null || m2.parentElement.appendChild(m2);
    });
  }
  function U2() {
    let e = A().find((i) => i.getAttribute("aria-disabled") !== "true"), s = e == null ? void 0 : e.getAttribute(M);
    h.setState("value", s || void 0);
  }
  function z2() {
    var s, i, a, m2;
    if (!n.current.search || p2.current.shouldFilter === false) {
      n.current.filtered.count = u2.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let e = 0;
    for (let R of u2.current) {
      let E = (i = (s = d.current.get(R)) == null ? void 0 : s.value) != null ? i : "", P = (m2 = (a = d.current.get(R)) == null ? void 0 : a.keywords) != null ? m2 : [], _ = ne(E, P);
      n.current.filtered.items.set(R, _), _ > 0 && e++;
    }
    for (let [R, E] of c.current)
      for (let P of E)
        if (n.current.filtered.items.get(P) > 0) {
          n.current.filtered.groups.add(R);
          break;
        }
    n.current.filtered.count = e;
  }
  function re() {
    var s, i, a;
    let e = O();
    e && (((s = e.parentElement) == null ? void 0 : s.firstChild) === e && ((a = (i = e.closest(V)) == null ? void 0 : i.querySelector(ge)) == null || a.scrollIntoView({ block: "nearest" })), e.scrollIntoView({ block: "nearest" }));
  }
  function O() {
    var e;
    return (e = x.current) == null ? void 0 : e.querySelector(`${Y2}[aria-selected="true"]`);
  }
  function A() {
    var e;
    return Array.from((e = x.current) == null ? void 0 : e.querySelectorAll(le));
  }
  function W2(e) {
    let i = A()[e];
    i && h.setState("value", i.getAttribute(M));
  }
  function J2(e) {
    var R;
    let s = O(), i = A(), a = i.findIndex((E) => E === s), m2 = i[a + e];
    (R = p2.current) != null && R.loop && (m2 = a + e < 0 ? i[i.length - 1] : a + e === i.length ? i[0] : i[a + e]), m2 && h.setState("value", m2.getAttribute(M));
  }
  function oe(e) {
    let s = O(), i = s == null ? void 0 : s.closest(V), a;
    for (; i && !a; )
      i = e > 0 ? we(i, V) : Ie(i, V), a = i == null ? void 0 : i.querySelector(le);
    a ? h.setState("value", a.getAttribute(M)) : J2(e);
  }
  let ie = () => W2(A().length - 1), ae = (e) => {
    e.preventDefault(), e.metaKey ? ie() : e.altKey ? oe(1) : J2(1);
  }, se = (e) => {
    e.preventDefault(), e.metaKey ? W2(0) : e.altKey ? oe(-1) : J2(-1);
  };
  return t.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, { ref: o, tabIndex: -1, ...H2, "cmdk-root": "", onKeyDown: (e) => {
    var s;
    if ((s = H2.onKeyDown) == null || s.call(H2, e), !e.defaultPrevented)
      switch (e.key) {
        case "n":
        case "j": {
          j && e.ctrlKey && ae(e);
          break;
        }
        case "ArrowDown": {
          ae(e);
          break;
        }
        case "p":
        case "k": {
          j && e.ctrlKey && se(e);
          break;
        }
        case "ArrowUp": {
          se(e);
          break;
        }
        case "Home": {
          e.preventDefault(), W2(0);
          break;
        }
        case "End": {
          e.preventDefault(), ie();
          break;
        }
        case "Enter":
          if (!e.nativeEvent.isComposing && e.keyCode !== 229) {
            e.preventDefault();
            let i = O();
            if (i) {
              let a = new Event(Q);
              i.dispatchEvent(a);
            }
          }
      }
  } }, t.createElement("label", { "cmdk-label": "", htmlFor: B2.inputId, id: B2.labelId, style: De }, v), F(r, (e) => t.createElement(de.Provider, { value: h }, t.createElement(ue.Provider, { value: B2 }, e))));
});
var be = t.forwardRef((r, o) => {
  var K2, x;
  let n = t.useId(), u2 = t.useRef(null), c = t.useContext(fe), d = G2(), f = pe(r), p2 = (x = (K2 = f.current) == null ? void 0 : K2.forceMount) != null ? x : c == null ? void 0 : c.forceMount;
  T(() => {
    if (!p2)
      return d.item(n, c == null ? void 0 : c.id);
  }, [p2]);
  let v = ve(n, u2, [r.value, r.children, u2], r.keywords), b = Z(), l = D2((g) => g.value && g.value === v.current), y = D2((g) => p2 || d.filter() === false ? true : g.search ? g.filtered.items.get(n) > 0 : true);
  t.useEffect(() => {
    let g = u2.current;
    if (!(!g || r.disabled))
      return g.addEventListener(Q, S), () => g.removeEventListener(Q, S);
  }, [y, r.onSelect, r.disabled]);
  function S() {
    var g, h;
    C(), (h = (g = f.current).onSelect) == null || h.call(g, v.current);
  }
  function C() {
    b.setState("value", v.current, true);
  }
  if (!y)
    return null;
  let { disabled: L, value: ee, onSelect: j, forceMount: H2, keywords: te, ...$2 } = r;
  return t.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, { ref: N([u2, o]), ...$2, id: n, "cmdk-item": "", role: "option", "aria-disabled": !!L, "aria-selected": !!l, "data-disabled": !!L, "data-selected": !!l, onPointerMove: L || d.disablePointerSelection ? void 0 : C, onClick: L ? void 0 : S }, r.children);
});
var he = t.forwardRef((r, o) => {
  let { heading: n, children: u2, forceMount: c, ...d } = r, f = t.useId(), p2 = t.useRef(null), v = t.useRef(null), b = t.useId(), l = G2(), y = D2((C) => c || l.filter() === false ? true : C.search ? C.filtered.groups.has(f) : true);
  T(() => l.group(f), []), ve(f, p2, [r.value, r.heading, v]);
  let S = t.useMemo(() => ({ id: f, forceMount: c }), [c]);
  return t.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, { ref: N([p2, o]), ...d, "cmdk-group": "", role: "presentation", hidden: y ? void 0 : true }, n && t.createElement("div", { ref: v, "cmdk-group-heading": "", "aria-hidden": true, id: b }, n), F(r, (C) => t.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? b : void 0 }, t.createElement(fe.Provider, { value: S }, C))));
});
var ye = t.forwardRef((r, o) => {
  let { alwaysRender: n, ...u2 } = r, c = t.useRef(null), d = D2((f) => !f.search);
  return !n && !d ? null : t.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, { ref: N([c, o]), ...u2, "cmdk-separator": "", role: "separator" });
});
var Ee = t.forwardRef((r, o) => {
  let { onValueChange: n, ...u2 } = r, c = r.value != null, d = Z(), f = D2((l) => l.search), p2 = D2((l) => l.value), v = G2(), b = t.useMemo(() => {
    var y;
    let l = (y = v.listInnerRef.current) == null ? void 0 : y.querySelector(`${Y2}[${M}="${encodeURIComponent(p2)}"]`);
    return l == null ? void 0 : l.getAttribute("id");
  }, []);
  return t.useEffect(() => {
    r.value != null && d.setState("search", r.value);
  }, [r.value]), t.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.input, { ref: o, ...u2, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: false, "aria-autocomplete": "list", role: "combobox", "aria-expanded": true, "aria-controls": v.listId, "aria-labelledby": v.labelId, "aria-activedescendant": b, id: v.inputId, type: "text", value: c ? r.value : f, onChange: (l) => {
    c || d.setState("search", l.target.value), n == null || n(l.target.value);
  } });
});
var Se = t.forwardRef((r, o) => {
  let { children: n, label: u2 = "Suggestions", ...c } = r, d = t.useRef(null), f = t.useRef(null), p2 = G2();
  return t.useEffect(() => {
    if (f.current && d.current) {
      let v = f.current, b = d.current, l, y = new ResizeObserver(() => {
        l = requestAnimationFrame(() => {
          let S = v.offsetHeight;
          b.style.setProperty("--cmdk-list-height", S.toFixed(1) + "px");
        });
      });
      return y.observe(v), () => {
        cancelAnimationFrame(l), y.unobserve(v);
      };
    }
  }, []), t.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, { ref: N([d, o]), ...c, "cmdk-list": "", role: "listbox", "aria-label": u2, id: p2.listId }, F(r, (v) => t.createElement("div", { ref: N([f, p2.listInnerRef]), "cmdk-list-sizer": "" }, v)));
});
var Ce = t.forwardRef((r, o) => {
  let { open: n, onOpenChange: u2, overlayClassName: c, contentClassName: d, container: f, ...p2 } = r;
  return t.createElement($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9, { open: n, onOpenChange: u2 }, t.createElement($5d3850c4d0b4e6c7$export$602eac185826482c, { container: f }, t.createElement($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, { "cmdk-overlay": "", className: c }), t.createElement($5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2, { "aria-label": r.label, "cmdk-dialog": "", className: d }, t.createElement(me, { ref: o, ...p2 }))));
});
var xe = t.forwardRef((r, o) => D2((u2) => u2.filtered.count === 0) ? t.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, { ref: o, ...r, "cmdk-empty": "", role: "presentation" }) : null);
var Pe = t.forwardRef((r, o) => {
  let { progress: n, children: u2, label: c = "Loading...", ...d } = r;
  return t.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, { ref: o, ...d, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": c }, F(r, (f) => t.createElement("div", { "aria-hidden": true }, f)));
});
var He = Object.assign(me, { List: Se, Item: be, Input: Ee, Group: he, Separator: ye, Dialog: Ce, Empty: xe, Loading: Pe });
function we(r, o) {
  let n = r.nextElementSibling;
  for (; n; ) {
    if (n.matches(o))
      return n;
    n = n.nextElementSibling;
  }
}
function Ie(r, o) {
  let n = r.previousElementSibling;
  for (; n; ) {
    if (n.matches(o))
      return n;
    n = n.previousElementSibling;
  }
}
function pe(r) {
  let o = t.useRef(r);
  return T(() => {
    o.current = r;
  }), o;
}
var T = typeof window == "undefined" ? t.useEffect : t.useLayoutEffect;
function k2(r) {
  let o = t.useRef();
  return o.current === void 0 && (o.current = r()), o;
}
function N(r) {
  return (o) => {
    r.forEach((n) => {
      typeof n == "function" ? n(o) : n != null && (n.current = o);
    });
  };
}
function D2(r) {
  let o = Z(), n = () => r(o.snapshot());
  return t.useSyncExternalStore(o.subscribe, n, n);
}
function ve(r, o, n, u2 = []) {
  let c = t.useRef(), d = G2();
  return T(() => {
    var v;
    let f = (() => {
      var b;
      for (let l of n) {
        if (typeof l == "string")
          return l.trim();
        if (typeof l == "object" && "current" in l)
          return l.current ? (b = l.current.textContent) == null ? void 0 : b.trim() : c.current;
      }
    })(), p2 = u2.map((b) => b.trim());
    d.value(r, f, p2), (v = o.current) == null || v.setAttribute(M, f), c.current = f;
  }), c;
}
var Me = () => {
  let [r, o] = t.useState(), n = k2(() => /* @__PURE__ */ new Map());
  return T(() => {
    n.current.forEach((u2) => u2()), n.current = /* @__PURE__ */ new Map();
  }, [r]), (u2, c) => {
    n.current.set(u2, c), o({});
  };
};
function Te(r) {
  let o = r.type;
  return typeof o == "function" ? o(r.props) : "render" in o ? o.render(r.props) : r;
}
function F({ asChild: r, children: o }, n) {
  return r && t.isValidElement(o) ? t.cloneElement(Te(o), { ref: o.ref }, n(o.props.children)) : n(o);
}
var De = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };

// @/components/ui/command.tsx
var React13 = __toESM(require_react(), 1);
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
var Command = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
  He,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-white dark:bg-stone-950 text-popover-foreground border border-stone-200 dark:border-stone-800",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/command.tsx",
    lineNumber: 13,
    columnNumber: 3
  },
  this
));
Command.displayName = He.displayName;
var CommandInput = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }, void 0, false, {
    fileName: "@/components/ui/command.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    He.Input,
    {
      ref,
      className: cn(
        "flex h-8 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "@/components/ui/command.tsx",
      lineNumber: 44,
      columnNumber: 5
    },
    this
  )
] }, void 0, true, {
  fileName: "@/components/ui/command.tsx",
  lineNumber: 42,
  columnNumber: 3
}, this));
CommandInput.displayName = He.Input.displayName;
var CommandList = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
  He.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/command.tsx",
    lineNumber: 61,
    columnNumber: 3
  },
  this
));
CommandList.displayName = He.List.displayName;
var CommandEmpty = React13.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
  He.Empty,
  {
    ref,
    className: "py-6 text-center text-sm",
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/command.tsx",
    lineNumber: 74,
    columnNumber: 3
  },
  this
));
CommandEmpty.displayName = He.Empty.displayName;
var CommandGroup = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
  He.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/command.tsx",
    lineNumber: 87,
    columnNumber: 3
  },
  this
));
CommandGroup.displayName = He.Group.displayName;
var CommandSeparator = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
  He.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/command.tsx",
    lineNumber: 103,
    columnNumber: 3
  },
  this
));
CommandSeparator.displayName = He.Separator.displayName;
var CommandItem = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
  He.Item,
  {
    ref,
    className: cn(
      "relative",
      "flex",
      "cursor-default",
      "select-none",
      "items-center",
      "rounded-sm",
      "px-2",
      "py-1.5",
      "text-sm",
      "outline-none",
      "data-[disabled=true]:pointer-events-none",
      // "data-[selected='true']:dark:bg-stone-800",
      // "data-[selected='true']:bg-stone-200",
      // "data-[selected='true']:text-accent-foreground",
      "data-[disabled=true]:opacity-50",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/components/ui/command.tsx",
    lineNumber: 115,
    columnNumber: 3
  },
  this
));
CommandItem.displayName = He.Item.displayName;
var CommandShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
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
      fileName: "@/components/ui/command.tsx",
      lineNumber: 146,
      columnNumber: 5
    },
    this
  );
};
CommandShortcut.displayName = "CommandShortcut";

// @/components/Cell.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime(), 1);
var prettifyParams = (params) => {
  return import_js_beautify.default.js(params, {
    indent_size: 2
  });
};
var Cell = (0, import_react28.memo)(
  ({
    spreadsheetId,
    rowIndex,
    colIndex,
    isSelected,
    isRowSelected,
    isTopRowSelected,
    isBottomRowSelected,
    isEditing,
    isPromise,
    cellState,
    baseWidth,
    baseHeight,
    editingValue,
    rangeState,
    clipboard,
    showClipboard,
    normalizedBindings,
    onContextMenu,
    onMouseDown,
    onBlur,
    dispatch,
    autofillRange,
    onAutofillInitiate
  }) => {
    const { data: functionBindings } = useFunctionBindings(spreadsheetId);
    const [cursorPosition, setCursorPosition] = (0, import_react28.useState)(0);
    const cellRef = (0, import_react28.useRef)(null);
    const textareaRef = (0, import_react28.useRef)(null);
    const pRef = (0, import_react28.useRef)(null);
    const [selectedIndex, setSelectedIndex] = (0, import_react28.useState)(-1);
    const {
      isInRange,
      isBottomBorderInRange,
      isTopBorderInRange,
      isLeftBorderInRange,
      isRightBorderInRange
    } = rangeState;
    const isCurrentlyEditing = isEditing && editingValue !== null && textareaRef.current !== document.activeElement;
    const isFormula = isEditing && editingValue !== null && editingValue.startsWith("=");
    const font = `${DEFAULT_FONT_SIZE}px ${DEFAULT_FONT_FAMILY}`;
    const { pHeight } = (0, import_react28.useMemo)(() => {
      if (isEditing) {
        return {
          pHeight: baseHeight
        };
      }
      const text = cellState.value;
      const textWidth = baseWidth;
      const height = calculateTextHeight({
        text,
        width: textWidth - DEFAULT_CELL_BORDER_WIDTH * 4 - DEFAULT_CELL_PADDING * 4,
        font,
        display: cellState.display,
        lineHeight: DEFAULT_LINE_HEIGHT
      });
      return {
        pWidth: textWidth,
        pHeight: height > baseHeight ? height : baseHeight
      };
    }, [
      cellState.value,
      cellState.display,
      baseWidth,
      baseHeight,
      font,
      isEditing
    ]);
    const { textareaWidth, textareaHeight } = (0, import_react28.useMemo)(() => {
      if (!isEditing || editingValue === null) {
        return {
          textareaWidth: 0,
          textareaHeight: 0
        };
      }
      const textWidth = getTextWidth(editingValue, font) + 30;
      const cellRect = cellRef.current?.getBoundingClientRect();
      const maxWidth = window.innerWidth - (cellRect?.left || 0);
      const finalWidth = Math.min(Math.max(textWidth, baseWidth), maxWidth);
      const height = calculateTextHeight({
        text: editingValue,
        width: finalWidth,
        font,
        display: "wrap",
        lineHeight: DEFAULT_LINE_HEIGHT
      });
      return {
        textareaWidth: finalWidth,
        textareaHeight: height >= baseHeight ? height : baseHeight
      };
    }, [isEditing, editingValue, baseWidth, font, baseHeight]);
    const handleTextareaChange = (0, import_react28.useCallback)(
      (e) => {
        if (!isEditing) {
          return;
        }
        dispatch({
          type: "SET_EDITING_VALUE",
          payload: e.target.value
        });
        setCursorPosition(e.target.selectionStart);
      },
      [dispatch, isEditing]
    );
    const handleCursorChange = (0, import_react28.useCallback)(
      (e) => {
        const cursorPos = e.currentTarget.selectionStart;
        setCursorPosition(cursorPos);
      },
      []
    );
    const handleFunctionSelect = (0, import_react28.useCallback)(
      (func) => {
        if (textareaRef.current && editingValue !== null) {
          const cursorPosition2 = textareaRef.current.selectionStart;
          const prefix = editingValue.slice(0, cursorPosition2);
          const suffix = editingValue.slice(cursorPosition2);
          const lastEqual = prefix.lastIndexOf("=");
          const lastParen = prefix.lastIndexOf("(");
          const functionStart = Math.max(lastEqual, lastParen) + 1;
          const beforeFunction = editingValue.slice(0, functionStart);
          const newValue = `${beforeFunction}${func.toUpperCase()}(`;
          dispatch({
            type: "SET_EDITING_VALUE",
            payload: `${newValue}${suffix}`
          });
          const newCursorPosition = beforeFunction.length + func.length + 1;
          textareaRef.current?.setSelectionRange(
            newCursorPosition,
            newCursorPosition
          );
          textareaRef.current?.focus();
          setCursorPosition(newCursorPosition);
        }
      },
      [dispatch, editingValue]
    );
    (0, import_react28.useEffect)(() => {
      if (isCurrentlyEditing) {
        textareaRef.current?.focus({
          preventScroll: true
        });
        textareaRef.current?.setSelectionRange(
          editingValue.length,
          editingValue.length
        );
        setCursorPosition(editingValue.length);
      }
    }, [editingValue, isCurrentlyEditing]);
    const handleEscape = (0, import_react28.useCallback)(() => {
      if (!isEditing || editingValue === null) {
        return;
      }
      dispatch({
        type: "HANDLE_BLUR_CELL"
      });
      onBlur();
    }, [isEditing, editingValue, dispatch, onBlur]);
    const handleUpdate = (0, import_react28.useCallback)(() => {
      if (!isEditing || editingValue === null) {
        return;
      }
      dispatch({
        type: "HANDLE_UPDATE_CELL",
        payload: {
          row: rowIndex,
          col: colIndex,
          value: editingValue,
          display: cellState.display
        }
      });
      onBlur();
    }, [
      isEditing,
      editingValue,
      dispatch,
      rowIndex,
      colIndex,
      cellState.display,
      onBlur
    ]);
    const handleMouseDown = (0, import_react28.useCallback)(
      async (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.button === 0 || e.button === 1) {
          if (e.shiftKey) {
            dispatch({
              type: "HANDLE_DRAG_CELLS",
              payload: { row: rowIndex, col: colIndex }
            });
          } else {
            dispatch({
              type: "HANDLE_UNCLICKED_TO_CLICKED_CELL",
              payload: { row: rowIndex, col: colIndex }
            });
          }
        }
        onMouseDown(e);
      },
      [colIndex, dispatch, onMouseDown, rowIndex]
    );
    const handleDoubleClick = (0, import_react28.useCallback)(() => {
      dispatch({
        type: "HANDLE_DOUBLE_CLICK_CELL",
        payload: { row: rowIndex, col: colIndex }
      });
    }, [dispatch, rowIndex, colIndex]);
    const currentFunctionStr = (0, import_react28.useMemo)(() => {
      if (!editingValue || isFormula === false) {
        return null;
      }
      if (!editingValue.startsWith("=")) {
        return null;
      }
      if (cursorPosition === 0) {
        return null;
      }
      const formula = editingValue.substring(1, cursorPosition);
      const stack = [];
      const regex = /([A-Za-z_][A-Za-z0-9_]*)\s*\(|\)/g;
      let match;
      while ((match = regex.exec(formula)) !== null) {
        if (match[1]) {
          stack.push(match[1].toUpperCase());
        } else {
          stack.pop();
        }
      }
      return stack.length > 0 ? stack[stack.length - 1] : null;
    }, [editingValue, cursorPosition, isFormula]);
    const filteredFunctions = (0, import_react28.useMemo)(() => {
      if (!functionBindings || !editingValue || !normalizedBindings) {
        return [];
      }
      const value = editingValue.startsWith("=") ? editingValue.slice(1, cursorPosition) : editingValue.slice(0, cursorPosition);
      const tokens = value.split(/[\s,()]+/);
      const currentInput = tokens[tokens.length - 1]?.toLowerCase() || "";
      const lastChar = value.slice(-1);
      const isFunctionComplete = lastChar === "(";
      if (isFunctionComplete || currentInput === "") {
        return normalizedBindings;
      }
      const filtered = normalizedBindings.filter(
        (b) => b.name.startsWith(currentInput)
      );
      return filtered;
    }, [functionBindings, editingValue, normalizedBindings, cursorPosition]);
    const handleTextareaKeyDown = (0, import_react28.useCallback)(
      (e) => {
        if (!isEditing) {
          return;
        }
        if (e.key === "Escape") {
          if (isFormula && selectedIndex !== -1) {
            e.preventDefault();
            e.stopPropagation();
            setSelectedIndex(-1);
            return;
          }
          e.preventDefault();
          e.stopPropagation();
          handleEscape();
          return;
        }
        if (e.key === "Enter" && e.altKey) {
          e.preventDefault();
          e.stopPropagation();
          if (textareaRef.current) {
            const textarea = textareaRef.current;
            const { selectionStart, selectionEnd } = textarea;
            const beforeCursor = editingValue?.slice(0, selectionStart);
            const afterCursor = editingValue?.slice(selectionEnd);
            const newValue = `${beforeCursor}
${afterCursor}`;
            dispatch({
              type: "SET_EDITING_VALUE",
              payload: newValue
            });
            setTimeout(() => {
              textarea.setSelectionRange(
                selectionStart + 1,
                selectionStart + 1
              );
              setCursorPosition(selectionStart + 1);
            }, 0);
          }
          return;
        }
        if (e.key === "Enter") {
          e.preventDefault();
          e.stopPropagation();
          handleUpdate();
          return;
        }
      },
      [
        isEditing,
        isFormula,
        selectedIndex,
        handleEscape,
        dispatch,
        editingValue,
        handleUpdate
      ]
    );
    const handleAutofillMouseDown = (0, import_react28.useCallback)(
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        onAutofillInitiate({ row: rowIndex, col: colIndex });
      },
      [rowIndex, colIndex, onAutofillInitiate]
    );
    const handleCellKeyDown = (0, import_react28.useCallback)(
      (e) => {
        if (isEditing) {
          return;
        }
        if (e.key === "Enter") {
          dispatch({
            type: "HANDLE_UNCLICKED_TO_CLICKED_CELL",
            payload: { row: rowIndex, col: colIndex }
          });
          textareaRef.current?.focus({
            preventScroll: true
          });
          return;
        }
      },
      [isEditing, rowIndex, colIndex, dispatch]
    );
    const handleContextMenu = (0, import_react28.useCallback)(
      (e) => {
        if (!isRowSelected) {
          dispatch({
            type: "HANDLE_UNCLICKED_TO_CLICKED_CELL",
            payload: { row: rowIndex, col: colIndex }
          });
        }
        onContextMenu(e);
      },
      [onContextMenu, isRowSelected, dispatch, rowIndex, colIndex]
    );
    const isCopied = clipboard && showClipboard !== false && rowIndex >= clipboard.start.row && rowIndex <= clipboard.end.row && colIndex >= clipboard.start.col && colIndex <= clipboard.end.col;
    const _isValidCopy = isCopied && clipboard;
    const isOnTopBorder = _isValidCopy && rowIndex === clipboard.start.row;
    const isOnBottomBorder = _isValidCopy && rowIndex === clipboard.end.row;
    const isOnLeftBorder = _isValidCopy && colIndex === clipboard.start.col;
    const isOnRightBorder = _isValidCopy && colIndex === clipboard.end.col;
    const clipboardBorderClasses = [
      isOnTopBorder && "border-t border-dashed border-blue-600 dark:border-t-blue-400",
      isOnBottomBorder && "border-b border-dashed border-blue-600 dark:border-b-blue-400",
      isOnLeftBorder && "border-l border-dashed border-blue-600 dark:border-l-blue-400",
      isOnRightBorder && "border-r border-dashed border-blue-600 dark:border-r-blue-400"
    ].join(" ");
    const rangedBorderClasses = [
      isTopBorderInRange && "border-t-blue-500 dark:border-t-blue-500",
      isBottomBorderInRange && "border-b-blue-500 dark:border-b-blue-500",
      isLeftBorderInRange && "border-l-blue-500 dark:border-l-blue-500",
      isRightBorderInRange && "border-r-blue-500 dark:border-r-blue-500"
    ].join(" ");
    const isInAutofillRange = autofillRange && autofillRange.start !== null && autofillRange.end !== null && rowIndex > autofillRange.start?.row && rowIndex <= autofillRange.end?.row && colIndex >= autofillRange.start?.col && colIndex <= autofillRange.end?.col;
    const isAutofillTopBorder = isInAutofillRange && rowIndex === autofillRange.start?.row;
    const isAutofillBottomBorder = isInAutofillRange && rowIndex === autofillRange.end?.row;
    const isAutofillLeftBorder = isInAutofillRange && colIndex === autofillRange.start?.col;
    const isAutofillRightBorder = isInAutofillRange && colIndex === autofillRange.end?.col;
    const autofillBorderClasses = [
      isAutofillTopBorder && "border-dashed border-t-stone-500 dark:border-t-stone-500",
      isAutofillBottomBorder && "border-dashed border-b-stone-500 dark:border-b-stone-500",
      isAutofillLeftBorder && "border-dashed border-l-stone-500 dark:border-l-stone-500",
      isAutofillRightBorder && "border-dashed border-r-stone-500 dark:border-r-stone-500"
    ].join(" ");
    const cellContent = isEditing && editingValue !== null ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        Textarea,
        {
          id: `textarea-${rowIndex}-${colIndex}`,
          ref: textareaRef,
          value: editingValue,
          onChange: handleTextareaChange,
          onSelect: handleCursorChange,
          onKeyUp: handleCursorChange,
          onKeyDown: handleTextareaKeyDown,
          className: cn(
            "rounded-none",
            "border-none",
            "focus-visible:outline-none",
            "text-black",
            "dark:text-stone-300",
            "py-0",
            "border-0",
            "resize-none",
            "overflow-hidden",
            "border-box",
            "break-all",
            `min-h-[${baseHeight}px]`
          ),
          style: {
            paddingLeft: `${DEFAULT_CELL_PADDING}px`,
            paddingRight: `${DEFAULT_CELL_PADDING}px`,
            width: `${textareaWidth}px`,
            height: `${textareaHeight}px`,
            fontSize: `${DEFAULT_FONT_SIZE}px`,
            fontFamily: DEFAULT_FONT_FAMILY,
            lineHeight: `${DEFAULT_LINE_HEIGHT}`
          }
        },
        void 0,
        false,
        {
          fileName: "@/components/Cell.tsx",
          lineNumber: 533,
          columnNumber: 11
        },
        this
      ),
      isFormula && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "absolute min-w-64", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Command, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(CommandList, { role: "listbox", "aria-label": "Function List", children: [
        currentFunctionStr !== null && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(CommandGroup, { className: "p-2 sticky top-0 bg-white dark:bg-stone-950 z-10", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-xs text-stone-500 dark:text-stone-400", children: "Current function" }, void 0, false, {
              fileName: "@/components/Cell.tsx",
              lineNumber: 572,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("pre", { className: "text-xs whitespace-pre-wrap", children: [
              currentFunctionStr,
              "(",
              prettifyParams(
                normalizedBindings?.find(
                  (fn) => fn.name.toLowerCase().trim() === currentFunctionStr?.toLowerCase().trim()
                )?.params || ""
              ),
              ")"
            ] }, void 0, true, {
              fileName: "@/components/Cell.tsx",
              lineNumber: 575,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "@/components/Cell.tsx",
            lineNumber: 571,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(CommandSeparator, {}, void 0, false, {
            fileName: "@/components/Cell.tsx",
            lineNumber: 587,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "@/components/Cell.tsx",
          lineNumber: 570,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(CommandGroup, { children: filteredFunctions.map((fn, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          CommandItem,
          {
            value: fn.name,
            onSelect: (currentValue) => {
              handleFunctionSelect(currentValue);
              setSelectedIndex(-1);
            },
            onMouseEnter: () => setSelectedIndex(index),
            className: cn(
              "flex flex-col items-start gap-1",
              index === selectedIndex && "bg-stone-50 dark:bg-stone-850"
            ),
            role: "option",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex items-start justify-between w-full text-wrap whitespace-pre text-xs", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("pre", { className: "text-xs whitespace-pre-wrap", children: `${fn.name.toUpperCase()}(${prettifyParams(
                  fn.params
                )})` }, void 0, false, {
                  fileName: "@/components/Cell.tsx",
                  lineNumber: 608,
                  columnNumber: 27
                }, this),
                fn.function?.resource?.logoUrl ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                  "img",
                  {
                    src: fn.function.resource.logoUrl,
                    alt: fn.name,
                    className: "w-5 h-5 mr-2"
                  },
                  void 0,
                  false,
                  {
                    fileName: "@/components/Cell.tsx",
                    lineNumber: 614,
                    columnNumber: 29
                  },
                  this
                ) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "w-5 h-5 mr-2 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(TbLambda, { size: 16 }, void 0, false, {
                  fileName: "@/components/Cell.tsx",
                  lineNumber: 621,
                  columnNumber: 31
                }, this) }, void 0, false, {
                  fileName: "@/components/Cell.tsx",
                  lineNumber: 620,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "@/components/Cell.tsx",
                lineNumber: 607,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                "p",
                {
                  className: cn(
                    "text-[10px]",
                    "text-stone-500",
                    "dark:text-stone-400"
                  ),
                  children: fn.description ?? "No description"
                },
                void 0,
                false,
                {
                  fileName: "@/components/Cell.tsx",
                  lineNumber: 625,
                  columnNumber: 25
                },
                this
              )
            ]
          },
          fn.name,
          true,
          {
            fileName: "@/components/Cell.tsx",
            lineNumber: 592,
            columnNumber: 23
          },
          this
        )) }, void 0, false, {
          fileName: "@/components/Cell.tsx",
          lineNumber: 590,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(CommandEmpty, { children: "No function found." }, void 0, false, {
          fileName: "@/components/Cell.tsx",
          lineNumber: 637,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "@/components/Cell.tsx",
        lineNumber: 568,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "@/components/Cell.tsx",
        lineNumber: 567,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "@/components/Cell.tsx",
        lineNumber: 566,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "@/components/Cell.tsx",
      lineNumber: 532,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      "p",
      {
        ref: pRef,
        className: cn(
          "py-0",
          "m-0",
          "text-sm",
          "border-transparent",
          "text-black dark:text-white",
          "hover:cursor-default",
          "focus:cursor-default",
          "text-stone-800",
          "dark:text-stone-350",
          "focus-visible:cursor-default",
          cellState.display === "wrap" ? "whitespace-pre-wrap break-all" : "whitespace-pre overflow-hidden"
        ),
        style: {
          paddingLeft: `${DEFAULT_CELL_PADDING}px`,
          paddingRight: `${DEFAULT_CELL_PADDING}px`,
          width: `${baseWidth - 1}px`,
          minHeight: `${pHeight}px`,
          fontSize: `${DEFAULT_FONT_SIZE}px`,
          fontFamily: DEFAULT_FONT_FAMILY,
          lineHeight: `${DEFAULT_LINE_HEIGHT}`
        },
        children: isPromise ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "w-full h-full flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Loader, { size: 16, className: "animate-spin" }, void 0, false, {
          fileName: "@/components/Cell.tsx",
          lineNumber: 673,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "@/components/Cell.tsx",
          lineNumber: 672,
          columnNumber: 13
        }, this) : cellState.type === "object" ? cellState.value : cellState.value
      },
      void 0,
      false,
      {
        fileName: "@/components/Cell.tsx",
        lineNumber: 644,
        columnNumber: 9
      },
      this
    );
    return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      "div",
      {
        ref: cellRef,
        "data-cell-row": rowIndex,
        "data-cell-col": colIndex,
        className: cn(
          "flex-shrink-0",
          `border-[0.5px]`,
          "bg-white",
          "dark:bg-stone-950",
          "border-stone-200",
          "dark:border-stone-800",
          "relative",
          "p-0",
          "border-spacing-0",
          "z-0",
          "hover:cursor-default",
          "focus:cursor-default",
          "focus-visible:cursor-default",
          isSelected ? "z-[10] ring-1 ring-blue-500 dark:ring-blue-500 ring-inset border-blue-500 dark:border-blue-500" : "",
          isInRange ? `bg-blue-50 dark:bg-blue-900 ${rangedBorderClasses}` : "",
          isRowSelected ? "bg-blue-50 dark:bg-blue-900" : "",
          isTopRowSelected ? "border-t border-t-blue-600 dark:border-t-blue-400 bg-blue-50 dark:bg-blue-900" : "",
          isBottomRowSelected ? "border-b border-b-blue-600 dark:border-b-blue-400 bg-blue-50 dark:bg-blue-900" : "",
          autofillBorderClasses,
          isCopied ? clipboardBorderClasses : ""
        ),
        style: {
          width: baseWidth,
          height: pHeight
        },
        tabIndex: 0,
        onKeyDown: handleCellKeyDown,
        onDoubleClick: isEditing ? void 0 : handleDoubleClick,
        onContextMenu: isEditing ? void 0 : handleContextMenu,
        onMouseDown: isEditing ? void 0 : handleMouseDown,
        children: [
          cellContent,
          (isInRange && isBottomBorderInRange && isRightBorderInRange || !isInRange && isSelected) && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            "div",
            {
              className: "z-[100] absolute bottom-0 right-0 w-2 h-2 bg-blue-500 rounded-full hover:cursor-crosshair",
              style: {
                transform: "translate(50%, 50%)"
              },
              onMouseDown: handleAutofillMouseDown
            },
            void 0,
            false,
            {
              fileName: "@/components/Cell.tsx",
              lineNumber: 729,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "@/components/Cell.tsx",
        lineNumber: 684,
        columnNumber: 7
      },
      this
    );
  },
  (prev, next) => {
    return (0, import_fast_deep_equal.default)(prev, next);
  }
);
Cell.displayName = "Cell";
var Cell_default = Cell;

// @/components/Row.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime(), 1);
var Row = ({
  spreadsheetId,
  rowIndex,
  top,
  rowStates,
  headerStates,
  cellRowStates,
  isDraggingRows,
  promises,
  selectedRows,
  selectedCellPosition,
  editingCellPosition,
  editingValue,
  selectedCellRange,
  clipboard,
  showClipboard,
  normalizedBindings,
  handleRowContextMenu,
  handleRowMouseDown,
  handleRowMouseEnter,
  handleMouseDown,
  handleCellClick,
  onContextMenu,
  handleTextareaBlur,
  handleMouseDownRowHeader,
  dispatch,
  handleMouseEnter,
  autofillRange,
  onAutofillInitiate
}) => {
  const { start, end } = (0, import_react29.useMemo)(() => {
    if (selectedCellRange === null) {
      return { start: null, end: null };
    }
    return getSortedCellRange({
      maybeStart: selectedCellRange.start,
      maybeEnd: selectedCellRange.end
    });
  }, [selectedCellRange]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    "div",
    {
      className: cn("flex hover:bg-stone-100 dark:hover:bg-stone-900 relative"),
      style: {
        position: "absolute",
        top,
        left: 0
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "div",
          {
            style: {
              width: "46px",
              height: getRowHeight({
                rowIndex,
                rowStates
              }),
              position: "sticky",
              left: 0
            },
            onContextMenu: (e) => handleRowContextMenu(e, rowIndex),
            onMouseDown: (e) => handleRowMouseDown(e, rowIndex),
            onMouseEnter: isDraggingRows ? (e) => {
              e.preventDefault();
              handleRowMouseEnter(rowIndex);
            } : void 0,
            className: cn(
              "flex",
              "items-center",
              "justify-center",
              "text-[11px]",
              "px-0",
              "z-[100]",
              "overflow-hidden",
              "text-stone-600",
              "dark:text-stone-400",
              "bg-stone-50",
              "dark:bg-stone-900",
              "border-b-[0.5px]",
              "border-t-[0.5px]",
              "border-r",
              "border-stone-300",
              "dark:border-stone-700",
              selectedRows.includes(rowIndex) && "bg-blue-500 dark:bg-blue-500 text-white dark:text-white font-bold dark:border-blue-400 border-blue-600 dark:border-blue-400"
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "cursor-default", children: rowIndex + 1 }, void 0, false, {
                fileName: "@/components/Row.tsx",
                lineNumber: 157,
                columnNumber: 9
              }, this),
              !isDraggingRows && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                "div",
                {
                  className: cn(
                    "absolute",
                    "w-[46px]",
                    "z-[100]",
                    "bottom-[-4.5px]",
                    "left-0",
                    "right-0",
                    "h-[9px]",
                    "cursor-row-resize",
                    "bg-transparent",
                    "hover:bg-stone-300",
                    "dark:hover:bg-stone-700"
                  ),
                  onMouseDown: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (e.button === 2) {
                      return;
                    }
                    handleMouseDownRowHeader({
                      e,
                      height: getRowHeight({ rowIndex, rowStates }),
                      rowIndex
                    });
                  }
                },
                void 0,
                false,
                {
                  fileName: "@/components/Row.tsx",
                  lineNumber: 159,
                  columnNumber: 11
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "@/components/Row.tsx",
            lineNumber: 116,
            columnNumber: 7
          },
          this
        ),
        headerStates.map((_, colIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "div",
          {
            className: cn(start !== null && end !== null && start.row <= rowIndex && end.row >= rowIndex && start.col <= colIndex && end.col >= colIndex && "z-[1]"),
            onMouseEnter: (e) => handleMouseEnter(e, rowIndex, colIndex),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              Cell_default,
              {
                spreadsheetId,
                rowIndex,
                colIndex,
                cellState: cellRowStates[colIndex],
                isRowSelected: selectedRows.includes(rowIndex),
                isTopRowSelected: selectedRows[0] === rowIndex,
                isBottomRowSelected: selectedRows[selectedRows.length - 1] === rowIndex,
                isSelected: selectedCellPosition?.row === rowIndex && selectedCellPosition?.col === colIndex,
                isEditing: editingCellPosition?.row === rowIndex && editingCellPosition?.col === colIndex,
                isPromise: promises !== null && promises[colIndex] !== void 0 && promises[colIndex][rowIndex] !== null && promises[colIndex][rowIndex] !== void 0,
                baseWidth: headerStates[colIndex]?.width || DEFAULT_COLUMN_WIDTH,
                baseHeight: rowStates[rowIndex]?.specifiedHeight || rowStates[rowIndex]?.height || DEFAULT_CELL_HEIGHT,
                editingValue: editingCellPosition?.row === rowIndex && editingCellPosition?.col === colIndex ? editingValue : null,
                normalizedBindings,
                rangeState: {
                  isInRange: start !== null && end !== null && start.row <= rowIndex && end.row >= rowIndex && start.col <= colIndex && end.col >= colIndex,
                  isTopBorderInRange: start?.row === rowIndex,
                  isBottomBorderInRange: end?.row === rowIndex,
                  isLeftBorderInRange: start?.col === colIndex,
                  isRightBorderInRange: end?.col === colIndex
                },
                clipboard,
                showClipboard,
                onMouseDown: handleMouseDown,
                onClick: handleCellClick,
                onContextMenu,
                onBlur: handleTextareaBlur,
                dispatch,
                autofillRange,
                onAutofillInitiate
              },
              void 0,
              false,
              {
                fileName: "@/components/Row.tsx",
                lineNumber: 201,
                columnNumber: 11
              },
              this
            )
          },
          `${rowIndex}:${colIndex}`,
          false,
          {
            fileName: "@/components/Row.tsx",
            lineNumber: 189,
            columnNumber: 9
          },
          this
        ))
      ]
    },
    `row-${rowIndex}`,
    true,
    {
      fileName: "@/components/Row.tsx",
      lineNumber: 107,
      columnNumber: 5
    },
    this
  );
};
var Row_default = (0, import_react29.memo)(Row, (prev, next) => {
  const isEqual = (0, import_fast_deep_equal2.default)(prev, next);
  return isEqual;
});

// @/components/VirtualizedSheet.tsx
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime(), 1);
var VirtualizedSheet = ({
  spreadsheetId,
  onContextMenu
}) => {
  const sheetStateStore = (0, import_react30.useContext)(SheetStateContext);
  if (!sheetStateStore) {
    throw new Error("SheetStateContext is not provided");
  }
  const {
    headerStates,
    selectedCellPosition,
    editingCellPosition,
    cellStates,
    rowStates,
    promises,
    rowCount,
    selectedRows,
    editingValue,
    selectedCellRange,
    clipboard,
    showClipboard
  } = useStore(
    sheetStateStore,
    useShallow((state) => state.currentSheetState)
  );
  const tableRef = useStore(
    sheetStateStore,
    useShallow((state) => state.tableRef)
  );
  const dispatch = useDispatch(spreadsheetId);
  const { data: normalizedBindings } = useNormalizedBindings(spreadsheetId);
  const [isDragging, setIsDragging] = (0, import_react30.useState)(false);
  const [scrollTop, setScrollTop] = (0, import_react30.useState)(0);
  const [scrollLeft, setScrollLeft] = (0, import_react30.useState)(0);
  const [isDraggingRows, setIsDraggingRows] = (0, import_react30.useState)(false);
  const [dragStartRow, setDragStartRow] = (0, import_react30.useState)(null);
  const containerRef = (0, import_react30.useRef)(null);
  const BUFFER_ROWS = 5;
  const totalWidth = (0, import_react30.useMemo)(
    () => headerStates.reduce((acc, header) => acc + header.width, 0) + 46,
    // Add total width of all columns plus row header width
    [headerStates]
  );
  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => containerRef.current,
    estimateSize: (index) => getRowHeight({ rowIndex: index, rowStates }),
    measureElement: typeof window !== "undefined" && navigator.userAgent.indexOf("Firefox") === -1 ? (element) => element?.getBoundingClientRect().height : void 0,
    overscan: BUFFER_ROWS
  });
  const virtualRows = rowVirtualizer.getVirtualItems();
  const {
    isResizing,
    resizeStartX,
    resizeEndX,
    resizingColumn,
    handleMouseDownX: handleMouseDownColumnHeader,
    handleMouseLeaveX: handleMouseLeaveColumnHeader,
    resizeStartY,
    resizeEndY,
    resizingRow,
    handleMouseDownY: handleMouseDownRowHeader,
    handleMouseLeaveY: handleMouseLeaveRowHeader
  } = useElementResize({
    onResizeX: ({ colIndex, width }) => {
      dispatch({
        type: "HANDLE_RESIZE_COLUMN",
        payload: { colIndex, width }
      });
    },
    onResizeY: ({ rowIndex, height }) => {
      if (selectedRows.length > 0) {
        dispatch({
          type: "HANDLE_RESIZE_ROWS",
          payload: selectedRows.map((i) => ({ rowIndex: i, height }))
        });
      } else {
        dispatch({
          type: "HANDLE_RESIZE_ROWS",
          payload: [{ rowIndex, height }]
        });
      }
      rowVirtualizer.measure();
    }
  });
  const [autoScrollDirection, setAutoScrollDirection] = (0, import_react30.useState)(null);
  const autoScrollAnimationFrame = (0, import_react30.useRef)(null);
  const autoScrollMargin = 5;
  const scrollSpeed = 10;
  const handleMouseMove = (0, import_react30.useCallback)(
    (e) => {
      if (!isDragging)
        return;
      const container = containerRef.current;
      if (!container)
        return;
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      let directionX = 0;
      let directionY = 0;
      if (mouseX < autoScrollMargin) {
        directionX = -1;
      } else if (mouseX > rect.width - autoScrollMargin) {
        directionX = 1;
      }
      if (mouseY < autoScrollMargin) {
        directionY = -1;
      } else if (mouseY > rect.height - autoScrollMargin) {
        directionY = 1;
      }
      if (directionX !== 0 || directionY !== 0) {
        setAutoScrollDirection({ x: directionX, y: directionY });
      } else {
        setAutoScrollDirection(null);
      }
    },
    [isDragging]
  );
  (0, import_react30.useEffect)(() => {
    if (isDragging || isDraggingRows) {
      document.addEventListener("mousemove", handleMouseMove);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging, isDraggingRows, handleMouseMove]);
  const performScroll = (0, import_react30.useCallback)(() => {
    if (autoScrollDirection && containerRef.current) {
      const { x, y } = autoScrollDirection;
      containerRef.current.scrollBy(x * scrollSpeed, y * scrollSpeed);
      autoScrollAnimationFrame.current = requestAnimationFrame(performScroll);
    }
  }, [autoScrollDirection, scrollSpeed]);
  (0, import_react30.useEffect)(() => {
    if (autoScrollDirection) {
      autoScrollAnimationFrame.current = requestAnimationFrame(performScroll);
    } else {
      if (autoScrollAnimationFrame.current) {
        cancelAnimationFrame(autoScrollAnimationFrame.current);
        autoScrollAnimationFrame.current = null;
      }
    }
    return () => {
      if (autoScrollAnimationFrame.current) {
        cancelAnimationFrame(autoScrollAnimationFrame.current);
        autoScrollAnimationFrame.current = null;
      }
    };
  }, [autoScrollDirection, performScroll]);
  const handleMouseUp = (0, import_react30.useCallback)(() => {
    setIsDragging(false);
    setAutoScrollDirection(null);
  }, []);
  (0, import_react30.useEffect)(() => {
    tableRef.current?.focus({
      preventScroll: true
    });
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseUp, tableRef]);
  const handleMouseEnter = (0, import_react30.useCallback)(
    (_, rowIndex, colIndex) => {
      if (!isDragging) {
        return;
      }
      dispatch({
        type: "HANDLE_DRAG_CELLS",
        payload: { row: rowIndex, col: colIndex }
      });
    },
    [dispatch, isDragging]
  );
  const handleCellClick = (0, import_react30.useCallback)(() => {
    tableRef.current?.focus({
      preventScroll: true
    });
  }, [tableRef]);
  const handleMouseDown = (0, import_react30.useCallback)(() => {
    tableRef.current?.focus({
      preventScroll: true
    });
    setIsDragging(true);
  }, [tableRef]);
  const handleTextareaBlur = (0, import_react30.useCallback)(() => {
    tableRef.current?.focus({
      preventScroll: true
    });
  }, [tableRef]);
  (0, import_react30.useEffect)(() => {
    rowVirtualizer.measure();
  }, [rowStates, rowVirtualizer]);
  const scrollToCell = (0, import_react30.useCallback)(
    (row, col) => {
      if (!containerRef.current)
        return;
      const boundingClient = containerRef.current.getBoundingClientRect();
      const containerWidth = boundingClient.width;
      const containerHeight = boundingClient.height;
      const visibleWindowLeft = scrollLeft;
      const visibleWindowTop = scrollTop;
      const headerHeight = COLUMN_HEADER_HEIGHT;
      const indexWidth = 48;
      let cellLeft = indexWidth;
      for (let i = 0; i < col; i++) {
        cellLeft += headerStates[i].width;
      }
      const cellRight = cellLeft + headerStates[col].width;
      let cellTop = headerHeight;
      for (let i = 0; i < row; i++) {
        cellTop += getRowHeight({ rowIndex: i, rowStates });
      }
      const cellBottom = cellTop + getRowHeight({ rowIndex: row, rowStates });
      const visibleLeft = visibleWindowLeft + indexWidth;
      const visibleRight = visibleWindowLeft + containerWidth;
      const visibleTop = visibleWindowTop + headerHeight;
      const visibleBottom = visibleWindowTop + containerHeight;
      let newScrollLeft = scrollLeft;
      let newScrollTop = scrollTop;
      if (cellLeft < visibleLeft) {
        newScrollLeft = cellLeft - indexWidth;
      } else if (cellRight > visibleRight) {
        newScrollLeft = cellRight - containerWidth + indexWidth;
      }
      if (cellTop < visibleTop) {
        newScrollTop = cellTop - headerHeight;
      } else if (cellBottom > visibleBottom) {
        newScrollTop = cellBottom - containerHeight;
      }
      newScrollLeft = Math.max(0, newScrollLeft);
      newScrollTop = Math.max(0, newScrollTop);
      if (newScrollLeft !== scrollLeft || newScrollTop !== scrollTop) {
        containerRef.current.scrollTo({
          left: newScrollLeft,
          top: newScrollTop
        });
        setScrollLeft(newScrollLeft);
        setScrollTop(newScrollTop);
        rowVirtualizer.scrollToIndex(row, { align: "center" });
      }
    },
    [
      headerStates,
      rowStates,
      scrollLeft,
      scrollTop,
      containerRef,
      rowVirtualizer
    ]
  );
  const handleTableKeyDown = (0, import_react30.useCallback)(
    (event) => {
      const newState = dispatch({
        type: "HANDLE_TABLE_KEYBOARD_EVENT",
        payload: event
      });
      if (newState !== null) {
        if (event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "ArrowLeft" || event.key === "ArrowRight") {
          if (event.shiftKey) {
            if (!newState.selectedCellRange) {
              return;
            }
            const { end } = newState.selectedCellRange;
            scrollToCell(end.row, end.col);
          } else {
            if (!newState.selectedCellPosition) {
              return;
            }
            const { row, col } = newState.selectedCellPosition;
            scrollToCell(row, col);
          }
          event.preventDefault();
          event.stopPropagation();
        }
      }
      if (event.metaKey && (event.key === "c" || event.key === "v") || event.ctrlKey && (event.key === "c" || event.key === "v") || event.metaKey && event.key === "a" || event.ctrlKey && event.key === "a") {
        event.preventDefault();
        event.stopPropagation();
      }
      if (event.key === "Enter") {
        event.preventDefault();
        event.stopPropagation();
        tableRef.current?.focus({
          preventScroll: true
        });
      }
    },
    [dispatch, scrollToCell, tableRef]
  );
  const handleSelectRow = (0, import_react30.useCallback)(
    (rowIndex) => {
      dispatch({
        type: "HANDLE_DRAG_ROWS",
        payload: [rowIndex]
      });
      setDragStartRow(rowIndex);
      setIsDraggingRows(true);
    },
    [dispatch]
  );
  const handleSelectRows = (0, import_react30.useCallback)(
    (from, to) => {
      const newSelection = Array.from(
        { length: to - from + 1 },
        (_, i) => from + i
      );
      dispatch({
        type: "HANDLE_DRAG_ROWS",
        payload: newSelection
      });
    },
    [dispatch]
  );
  const handleRowMouseEnter = (0, import_react30.useCallback)(
    (rowIndex) => {
      if (isDraggingRows && dragStartRow !== null) {
        const start = Math.min(dragStartRow, rowIndex);
        const end = Math.max(dragStartRow, rowIndex);
        const selectedRows2 = Array.from(
          { length: end - start + 1 },
          (_, i) => start + i
        );
        dispatch({
          type: "HANDLE_DRAG_ROWS",
          payload: selectedRows2
        });
      }
    },
    [isDraggingRows, dragStartRow, dispatch]
  );
  const handleRowMouseUp = (0, import_react30.useCallback)(() => {
    setIsDraggingRows(false);
    setDragStartRow(null);
  }, []);
  (0, import_react30.useEffect)(() => {
    document.addEventListener("mouseup", handleRowMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleRowMouseUp);
    };
  }, [handleRowMouseUp]);
  const handleRowContextMenu = (0, import_react30.useCallback)(
    (e, rowIndex) => {
      e.preventDefault();
      e.stopPropagation();
      if (!selectedRows.includes(rowIndex)) {
        handleSelectRow(rowIndex);
      }
      onContextMenu(e);
    },
    [handleSelectRow, selectedRows, onContextMenu]
  );
  const handleRowMouseDown = (0, import_react30.useCallback)(
    (e, rowIndex) => {
      e.preventDefault();
      if (e.shiftKey && selectedRows.length > 0) {
        const lastSelectedRow = selectedRows[selectedRows.length - 1];
        const start = Math.min(lastSelectedRow, rowIndex);
        const end = Math.max(lastSelectedRow, rowIndex);
        handleSelectRows(start, end);
      } else {
        if (!selectedRows.includes(rowIndex)) {
          handleSelectRow(rowIndex);
        }
      }
    },
    [selectedRows, handleSelectRows, handleSelectRow]
  );
  const handleScroll2 = (0, import_react30.useCallback)(
    (e) => {
      const newScrollTop = e.currentTarget.scrollTop;
      const newScrollLeft = e.currentTarget.scrollLeft;
      if (!containerRef.current) {
        return;
      }
      const prevScrollTop = scrollTop;
      setScrollTop(newScrollTop);
      setScrollLeft(newScrollLeft);
      const allRows = rowVirtualizer.getVirtualItems();
      const newScrollEnd = newScrollTop + containerRef.current.clientHeight;
      const visibleRowsWithoutBuffer = allRows.filter(
        (row) => row.start >= newScrollTop && row.start < newScrollEnd
      );
      if (isDragging && newScrollTop > prevScrollTop) {
        const lastRow = visibleRowsWithoutBuffer[visibleRowsWithoutBuffer.length - 1];
        if (lastRow && selectedCellRange?.end !== void 0) {
          dispatch({
            type: "HANDLE_DRAG_CELLS",
            payload: {
              row: lastRow.index,
              col: selectedCellRange.end.col
            }
          });
        }
      }
      if (isDragging && newScrollTop < prevScrollTop) {
        const firstRow = visibleRowsWithoutBuffer[0];
        if (firstRow && selectedCellRange?.end !== void 0) {
          dispatch({
            type: "HANDLE_DRAG_CELLS",
            payload: {
              row: firstRow.index,
              col: selectedCellRange?.end.col
            }
          });
        }
      }
      if (dragStartRow !== null && isDraggingRows && newScrollTop > prevScrollTop) {
        const lastRow = visibleRowsWithoutBuffer[visibleRowsWithoutBuffer.length - 1];
        const start = Math.min(dragStartRow, lastRow.index);
        const end = Math.max(dragStartRow, lastRow.index);
        const newSelection = Array.from(
          { length: end - start + 1 },
          (_, i) => start + i
        );
        dispatch({
          type: "HANDLE_DRAG_ROWS",
          payload: newSelection
        });
      }
      if (dragStartRow !== null && isDraggingRows && newScrollTop < prevScrollTop) {
        const firstRow = visibleRowsWithoutBuffer[0];
        const start = Math.min(dragStartRow, firstRow.index);
        const end = Math.max(dragStartRow, firstRow.index);
        const newSelection = Array.from(
          { length: end - start + 1 },
          (_, i) => start + i
        );
        dispatch({
          type: "HANDLE_DRAG_ROWS",
          payload: newSelection
        });
      }
    },
    [
      dispatch,
      isDragging,
      dragStartRow,
      isDraggingRows,
      selectedCellRange,
      rowVirtualizer,
      scrollTop
    ]
  );
  const [isAutofilling, setIsAutofilling] = (0, import_react30.useState)(false);
  const autofillStart = (0, import_react30.useRef)(null);
  const [autofillEnd, setAutofillEnd] = (0, import_react30.useState)(null);
  const handleInitiateAutofill = (0, import_react30.useCallback)(
    (start) => {
      setIsAutofilling(true);
      autofillStart.current = start;
    },
    []
  );
  const handleAutofillMouseMove = (0, import_react30.useCallback)(
    (e) => {
      if (isAutofilling && containerRef.current && autofillStart?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const mouseY = e.clientY - rect.top + containerRef.current.scrollTop;
        let currentRow = 0;
        let accumulatedHeight = COLUMN_HEADER_HEIGHT;
        for (let i = 0; i < rowCount; i++) {
          const rowHeight = getRowHeight({ rowIndex: i, rowStates });
          accumulatedHeight += rowHeight;
          if (mouseY < accumulatedHeight) {
            currentRow = i;
            break;
          }
        }
        setAutofillEnd({ row: currentRow, col: autofillStart.current.col });
      }
    },
    [isAutofilling, rowCount, rowStates]
  );
  const handleAutofillMouseUp = (0, import_react30.useCallback)(() => {
    if (isAutofilling && autofillStart.current && autofillEnd) {
      const start = autofillStart.current;
      const end = autofillEnd;
      dispatch({
        type: "PERFORM_AUTOFILL",
        payload: {
          fillRange: {
            start: { row: start.row, col: start.col },
            end: { row: end.row, col: end.col }
          }
        }
      });
      setIsAutofilling(false);
      autofillStart.current = null;
      setAutofillEnd(null);
    }
  }, [isAutofilling, dispatch, autofillStart, autofillEnd]);
  (0, import_react30.useEffect)(() => {
    if (isAutofilling) {
      document.addEventListener("mousemove", handleAutofillMouseMove);
      document.addEventListener("mouseup", handleAutofillMouseUp);
    } else {
      document.removeEventListener("mousemove", handleAutofillMouseMove);
      document.removeEventListener("mouseup", handleAutofillMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleAutofillMouseMove);
      document.removeEventListener("mouseup", handleAutofillMouseUp);
    };
  }, [isAutofilling, handleAutofillMouseMove, handleAutofillMouseUp]);
  const memoizedCellRowStates = (0, import_react30.useMemo)(() => {
    const cache = {};
    virtualRows.forEach((virtualRow) => {
      const row = virtualRow.index;
      cache[row] = getCellsForRow(cellStates, row);
    });
    return cache;
  }, [virtualRows, cellStates]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "div",
    {
      ref: containerRef,
      className: cn(
        `focus:outline-none h-full w-full overflow-scroll relative`
      ),
      onMouseUp: resizingColumn !== null ? handleMouseLeaveColumnHeader : resizingRow !== null ? handleMouseLeaveRowHeader : void 0,
      onScroll: (e) => {
        handleScroll2(e);
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "div",
          {
            style: { width: "46px", height: `${COLUMN_HEADER_HEIGHT}px` },
            className: cn(
              "fixed",
              "z-[1000]",
              "flex-shrink-0",
              "px-0",
              "border",
              "border-stone-300",
              "dark:border-stone-700",
              "border-r-4",
              "border-b-4",
              "bg-stone-50",
              "dark:bg-stone-900"
            )
          },
          void 0,
          false,
          {
            fileName: "@/components/VirtualizedSheet.tsx",
            lineNumber: 687,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "div",
          {
            style: {
              height: rowVirtualizer.getTotalSize(),
              width: totalWidth,
              position: "relative"
            },
            children: [
              isResizing && resizingColumn !== null && resizeEndX !== null && resizeStartX !== null && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                "div",
                {
                  className: cn(
                    "absolute top-0 bottom-0 left-[2px] w-[4px] bg-stone-300 dark:bg-stone-700 z-[1000]"
                  ),
                  style: {
                    left: `${scrollLeft + resizeStartX + resizeEndX - headerStates[resizingColumn].width}px`
                  }
                },
                void 0,
                false,
                {
                  fileName: "@/components/VirtualizedSheet.tsx",
                  lineNumber: 714,
                  columnNumber: 13
                },
                this
              ),
              isResizing && resizingRow !== null && resizeStartY !== null && resizeEndY !== null && containerRef.current?.offsetTop !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                "div",
                {
                  className: cn(
                    "absolute",
                    "top-0",
                    "left-0",
                    "right-0",
                    "w-full",
                    "h-[4px]",
                    "bg-stone-300",
                    "dark:bg-stone-700",
                    "z-[1000]"
                  ),
                  style: {
                    top: `${scrollTop + resizeStartY + resizeEndY - getRowHeight({ rowIndex: resizingRow, rowStates }) - (containerRef.current?.offsetTop ?? 0)}px`
                  }
                },
                void 0,
                false,
                {
                  fileName: "@/components/VirtualizedSheet.tsx",
                  lineNumber: 732,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "sticky top-0 left-0 z-[100]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                "div",
                {
                  className: "flex z-[100] ml-[46px]",
                  style: { position: "sticky", left: 0 },
                  children: headerStates.map((header, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                    "div",
                    {
                      className: cn(
                        "flex-shrink-0",
                        "p-0",
                        "text-center",
                        "relative",
                        "border",
                        "border-stone-300",
                        "dark:border-stone-700",
                        "bg-stone-50",
                        "dark:bg-stone-900"
                      ),
                      style: {
                        width: `${header.width}px`,
                        maxWidth: `${header.width}px`,
                        height: `${COLUMN_HEADER_HEIGHT}px`
                      },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex justify-center items-center h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-stone-600 dark:text-stone-400 text-xs", children: header.value }, void 0, false, {
                          fileName: "@/components/VirtualizedSheet.tsx",
                          lineNumber: 780,
                          columnNumber: 19
                        }, this) }, void 0, false, {
                          fileName: "@/components/VirtualizedSheet.tsx",
                          lineNumber: 779,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                          "div",
                          {
                            className: "absolute top-0 w-[9px] right-[-5px] z-10 h-full cursor-col-resize bg-transparent hover:bg-stone-300",
                            onMouseDown: (e) => handleMouseDownColumnHeader({
                              e,
                              width: header.width,
                              colIndex: index
                            })
                          },
                          void 0,
                          false,
                          {
                            fileName: "@/components/VirtualizedSheet.tsx",
                            lineNumber: 784,
                            columnNumber: 17
                          },
                          this
                        )
                      ]
                    },
                    `header-${index}`,
                    true,
                    {
                      fileName: "@/components/VirtualizedSheet.tsx",
                      lineNumber: 760,
                      columnNumber: 15
                    },
                    this
                  ))
                },
                void 0,
                false,
                {
                  fileName: "@/components/VirtualizedSheet.tsx",
                  lineNumber: 755,
                  columnNumber: 11
                },
                this
              ) }, void 0, false, {
                fileName: "@/components/VirtualizedSheet.tsx",
                lineNumber: 754,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                "div",
                {
                  onKeyDown: editingCellPosition === null ? handleTableKeyDown : void 0,
                  tabIndex: 0,
                  ref: tableRef,
                  className: cn("flex border-0 focus:outline-none relative"),
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                    "div",
                    {
                      style: {
                        height: `${rowVirtualizer.getTotalSize()}px`,
                        width: "100%",
                        position: "relative"
                      },
                      children: virtualRows.map((virtualRow) => {
                        const row = virtualRow.index;
                        const cellRowStates = memoizedCellRowStates[row];
                        return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                          Row_default,
                          {
                            spreadsheetId,
                            promises,
                            rowIndex: row,
                            top: virtualRow.start,
                            rowStates,
                            headerStates,
                            cellRowStates,
                            isDraggingRows,
                            selectedRows,
                            selectedCellPosition,
                            editingCellPosition,
                            editingValue,
                            selectedCellRange,
                            clipboard,
                            showClipboard,
                            normalizedBindings: normalizedBindings ?? [],
                            handleMouseEnter,
                            handleMouseDownRowHeader,
                            handleMouseDown,
                            handleCellClick,
                            onContextMenu,
                            handleTextareaBlur,
                            dispatch,
                            handleRowMouseEnter,
                            handleRowMouseDown,
                            handleRowContextMenu,
                            autofillRange: {
                              start: autofillStart.current,
                              end: autofillEnd
                            },
                            onAutofillInitiate: handleInitiateAutofill
                          },
                          `row-${row}`,
                          false,
                          {
                            fileName: "@/components/VirtualizedSheet.tsx",
                            lineNumber: 818,
                            columnNumber: 17
                          },
                          this
                        );
                      })
                    },
                    void 0,
                    false,
                    {
                      fileName: "@/components/VirtualizedSheet.tsx",
                      lineNumber: 807,
                      columnNumber: 11
                    },
                    this
                  )
                },
                void 0,
                false,
                {
                  fileName: "@/components/VirtualizedSheet.tsx",
                  lineNumber: 799,
                  columnNumber: 9
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "@/components/VirtualizedSheet.tsx",
            lineNumber: 703,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "@/components/VirtualizedSheet.tsx",
      lineNumber: 670,
      columnNumber: 5
    },
    this
  );
};
VirtualizedSheet.displayName = "VirtualizedSheet";
var VirtualizedSheet_default = VirtualizedSheet;

// @/components/Sheet.tsx
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime(), 1);
var DEFAULT_CELL_STATE = {
  value: "",
  display: "hide"
};
var SpreadsheetContent = ({
  spreadsheetId,
  rowCount = DEFAULT_ROW_COUNT
}) => {
  const sheetStateStore = (0, import_react32.useContext)(SheetStateContext);
  if (!sheetStateStore) {
    throw new Error("SheetStateContext is not provided");
  }
  const [queryParams, setQueryParams] = useSearchParams();
  const sheetId = queryParams.get("sheetId");
  const state = useStore(sheetStateStore, (state2) => state2.currentSheetState);
  const tableRef = useStore(sheetStateStore, (state2) => state2.tableRef);
  const spreadsheet = useStore(sheetStateStore, (state2) => state2.spreadsheet);
  const setCurrentSheetId = useStore(
    sheetStateStore,
    (state2) => state2.setCurrentSheetId
  );
  const setSpreadsheet = useStore(
    sheetStateStore,
    (state2) => state2.setSpreadsheet
  );
  const [open, setOpen] = (0, import_react32.useState)(false);
  const { mutateAsync: updateSpreadsheet } = useUpdateSpreadsheet();
  const dispatch = useDispatch(spreadsheetId);
  const {
    cellStates,
    selectedCellPosition,
    selectedCellRange,
    headerStates,
    selectedRows
  } = state;
  const [contextMenuPosition, setContextMenuPosition] = (0, import_react32.useState)(null);
  const [isResizeDialogOpen, setIsResizeDialogOpen] = (0, import_react32.useState)(false);
  const [isCopyDialogOpen, setIsCopyDialogOpen] = (0, import_react32.useState)(false);
  const [sheetToCopy, setSheetToCopy] = (0, import_react32.useState)(null);
  const handleContextMenu = (0, import_react32.useCallback)((event) => {
    event.preventDefault();
    setContextMenuPosition({ x: event.clientX, y: event.clientY });
  }, []);
  const closeContextMenu = (0, import_react32.useCallback)(() => {
    setContextMenuPosition(null);
  }, []);
  const setSelectedCellDisplay = (0, import_react32.useCallback)(
    (mode) => {
      if (selectedCellRange) {
        dispatch({
          type: "HANDLE_UPDATE_CELL_RANGE",
          payload: {
            range: selectedCellRange,
            display: mode === "wrap" ? "wrap" : "hide"
          }
        });
      } else if (selectedCellPosition) {
        dispatch({
          type: "HANDLE_UPDATE_CELL",
          payload: {
            row: selectedCellPosition.row,
            col: selectedCellPosition.col,
            value: cellStates[selectedCellPosition.col][selectedCellPosition.row].value || "",
            display: mode === "wrap" ? "wrap" : "hide"
          }
        });
        tableRef.current?.focus({
          preventScroll: true
        });
      }
    },
    [selectedCellRange, selectedCellPosition, dispatch, cellStates, tableRef]
  );
  const insertRow = (0, import_react32.useCallback)(
    (rowIndex) => {
      dispatch({
        type: "INSERT_ROW",
        payload: {
          rowIndex
        }
      });
    },
    [dispatch]
  );
  const deleteRows = (0, import_react32.useCallback)(
    (rowIndexes) => {
      dispatch({
        type: "DELETE_ROWS",
        payload: rowIndexes
      });
    },
    [dispatch]
  );
  const insertColumn = (0, import_react32.useCallback)(
    (colIndex) => {
      dispatch({
        type: "INSERT_COLUMN",
        payload: { colIndex }
      });
    },
    [dispatch]
  );
  const deleteColumn = (0, import_react32.useCallback)(
    (colIndex) => {
      dispatch({
        type: "DELETE_COLUMN",
        payload: colIndex
      });
    },
    [dispatch]
  );
  const getSelectedCell = (0, import_react32.useCallback)(() => {
    if (selectedCellPosition) {
      const selectedCell = cellStates[selectedCellPosition.col]?.[selectedCellPosition.row];
      if (selectedCell) {
        return selectedCell;
      }
    }
    return DEFAULT_CELL_STATE;
  }, [selectedCellPosition, cellStates]);
  const handleFunctionInputKeyDown = (0, import_react32.useCallback)(
    (event) => {
      dispatch({
        type: "HANDLE_TABLE_KEYBOARD_EVENT",
        payload: event
      });
    },
    [dispatch]
  );
  const handleDownloadCSV = (0, import_react32.useCallback)(() => {
    const { cellStates: cellStates2, rowStates, headerStates: headerStates2 } = state;
    const rowIndices = Object.keys(rowStates).map(Number);
    let maxRowIndex = 0;
    for (const col of cellStates2) {
      const colMaxRowIndex = Object.keys(col).map(Number).reduce((max, rowIndex) => Math.max(max, rowIndex), 0);
      maxRowIndex = Math.max(maxRowIndex, colMaxRowIndex);
    }
    maxRowIndex = Math.max(maxRowIndex, ...rowIndices);
    const headerRow = headerStates2.map((header) => `"${header.value}"`).join(",");
    const dataRows = [];
    for (let rowIndex = 0; rowIndex <= maxRowIndex; rowIndex++) {
      const rowData = headerStates2.map((_, colIndex) => {
        const cell = cellStates2[colIndex] && cellStates2[colIndex][rowIndex] || { value: "" };
        return `"${cell.value.toString().replace(/"/g, '""')}"`;
      });
      dataRows.push(rowData.join(","));
    }
    const csvContent = [headerRow, ...dataRows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "sheet_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [state]);
  const handleResizeRow = (0, import_react32.useCallback)(() => {
    setIsResizeDialogOpen(true);
  }, []);
  const handleResizeConfirm = (0, import_react32.useCallback)(
    (resizeType, height) => {
      if (selectedRows.length > 0) {
        dispatch({
          type: "HANDLE_RESIZE_ROWS",
          payload: selectedRows.map((row) => ({
            rowIndex: row,
            height: resizeType === "fit" ? null : height
          }))
        });
      }
      setIsResizeDialogOpen(false);
    },
    [dispatch, selectedRows]
  );
  const handleDeleteSheet = (sheetId2) => {
    if (spreadsheet.sheets.length === 1) {
      alert("Cannot delete the last remaining sheet.");
      return;
    }
    updateSpreadsheet({
      ...spreadsheet,
      sheets: spreadsheet.sheets.filter((sheet) => sheet.id !== sheetId2)
    });
    setSpreadsheet({
      ...spreadsheet,
      sheets: spreadsheet.sheets.filter((sheet) => sheet.id !== sheetId2)
    });
  };
  const handleAddSheet = () => {
    const newSheet = {
      ...initialState,
      id: v4_default(),
      name: "Sheet " + (spreadsheet.sheets.length + 1)
    };
    setSpreadsheet({
      ...spreadsheet,
      sheets: [...spreadsheet.sheets, newSheet]
    });
    updateSpreadsheet({
      ...spreadsheet,
      sheets: [...spreadsheet.sheets, newSheet]
    });
    setCurrentSheetId(newSheet.id);
    setQueryParams({ sheetId: newSheet.id });
  };
  const handleCopySheet = (sheetId2) => {
    setSheetToCopy(sheetId2);
    setIsCopyDialogOpen(true);
  };
  const handleSetSpreadsheetName = (name) => {
    updateSpreadsheet({
      ...spreadsheet,
      name
    });
    setSpreadsheet({
      ...spreadsheet,
      name
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex flex-col h-full w-full overflow-hidden flex-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(DrawerNavigation, { open, onClose: () => setOpen(false) }, void 0, false, {
      fileName: "@/components/Sheet.tsx",
      lineNumber: 302,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "h-12 items-center flex border-b border-b-stone-200 dark:border-b-stone-800", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Button, { onClick: () => setOpen(true), variant: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(PanelLeft, { size: 16 }, void 0, false, {
        fileName: "@/components/Sheet.tsx",
        lineNumber: 305,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "@/components/Sheet.tsx",
        lineNumber: 304,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        ClickableInput,
        {
          value: spreadsheet.name,
          onBlur: (value) => handleSetSpreadsheetName(value),
          rootClassName: "min-w-96 h-8",
          buttonClassName: "h-8 w-full border border-transparent hover:border hover:border-stone-300 dark:hover:border-stone-700",
          inputClassName: "h-8 w-full border border-transparent",
          parse: String
        },
        void 0,
        false,
        {
          fileName: "@/components/Sheet.tsx",
          lineNumber: 307,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "@/components/Sheet.tsx",
      lineNumber: 303,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex w-full bg-stone-25 dark:bg-stone-950 px-4 items-center rounded-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        ToggleGroup2,
        {
          type: "single",
          value: getSelectedCell().display,
          onValueChange: setSelectedCellDisplay,
          size: "sm",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ToggleGroupItem2, { value: "wrap", "aria-label": "Toggle wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(TbTextWrapColumn, {}, void 0, false, {
            fileName: "@/components/Sheet.tsx",
            lineNumber: 325,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "@/components/Sheet.tsx",
            lineNumber: 324,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "@/components/Sheet.tsx",
          lineNumber: 318,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(FunctionBindingsDialog, { sheetId: spreadsheetId }, void 0, false, {
        fileName: "@/components/Sheet.tsx",
        lineNumber: 329,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "@/components/Sheet.tsx",
        lineNumber: 328,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Button, { variant: "ghost", size: "sm", onClick: handleDownloadCSV, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(TbDownload, { size: 16 }, void 0, false, {
        fileName: "@/components/Sheet.tsx",
        lineNumber: 332,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "@/components/Sheet.tsx",
        lineNumber: 331,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Button, { variant: "ghost", size: "sm", onClick: () => dispatch({
        type: "UNDO"
      }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Undo2, { size: 16 }, void 0, false, {
        fileName: "@/components/Sheet.tsx",
        lineNumber: 339,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "@/components/Sheet.tsx",
        lineNumber: 334,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Button, { variant: "ghost", size: "sm", onClick: () => dispatch({
        type: "REDO"
      }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Redo2, { size: 16 }, void 0, false, {
        fileName: "@/components/Sheet.tsx",
        lineNumber: 346,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "@/components/Sheet.tsx",
        lineNumber: 341,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "@/components/Sheet.tsx",
      lineNumber: 317,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "@/components/Sheet.tsx",
      lineNumber: 316,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "px-2 flex gap-2 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: "FX" }, void 0, false, {
        fileName: "@/components/Sheet.tsx",
        lineNumber: 351,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        Input,
        {
          type: "text",
          className: cn(
            "w-full",
            "focus-visible:border-none",
            "focus-visible:outline-none",
            "focus-visible:outline-transparent",
            "dark:focus-visible:outline-none",
            "border-none",
            "dark:border-none",
            "rounded-none"
          ),
          value: getSelectedCell().formula || getSelectedCell().value,
          onKeyDown: handleFunctionInputKeyDown,
          onChange: (e) => {
            if (selectedCellPosition) {
              dispatch({
                type: "HANDLE_UPDATE_CELL",
                payload: {
                  row: selectedCellPosition.row,
                  col: selectedCellPosition.col,
                  value: e.target.value,
                  display: cellStates[selectedCellPosition.col][selectedCellPosition.row].display
                }
              });
            }
          }
        },
        void 0,
        false,
        {
          fileName: "@/components/Sheet.tsx",
          lineNumber: 352,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "@/components/Sheet.tsx",
      lineNumber: 350,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      VirtualizedSheet_default,
      {
        spreadsheetId,
        rowCount,
        onContextMenu: handleContextMenu
      },
      void 0,
      false,
      {
        fileName: "@/components/Sheet.tsx",
        lineNumber: 384,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex items-center border-t border-t-stone-200 dark:border-t-stone-800", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: cn("w-[46px]") }, void 0, false, {
        fileName: "@/components/Sheet.tsx",
        lineNumber: 390,
        columnNumber: 9
      }, this),
      spreadsheet.sheets.map((sheet, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        "div",
        {
          className: cn(
            "flex items-center",
            {
              "bg-stone-200 dark:bg-stone-800": sheetId === sheet.id || index === 0 && !sheetId
            },
            "hover:bg-stone-200 dark:hover:bg-stone-800"
          ),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              Button,
              {
                onClick: () => {
                  setQueryParams({ sheetId: sheet.id });
                  setCurrentSheetId(sheet.id);
                },
                variant: "unstyled",
                className: cn("flex h-8 items-center px-4 rounded-none", {
                  "bg-stone-200 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-800": sheetId === sheet.id || index === 0 && !sheetId
                }),
                children: sheet.name
              },
              void 0,
              false,
              {
                fileName: "@/components/Sheet.tsx",
                lineNumber: 403,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(DropdownMenu, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Button, { variant: "icon", "aria-label": "More options", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(TbCaretDownFilled, { size: 16 }, void 0, false, {
                fileName: "@/components/Sheet.tsx",
                lineNumber: 419,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "@/components/Sheet.tsx",
                lineNumber: 418,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "@/components/Sheet.tsx",
                lineNumber: 417,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(DropdownMenuContent, { className: "z-[1000]", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(DropdownMenuItem, { onSelect: () => handleCopySheet(sheet.id), children: "Copy" }, void 0, false, {
                  fileName: "@/components/Sheet.tsx",
                  lineNumber: 423,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(DropdownMenuItem, { onSelect: () => handleDeleteSheet(sheet.id), children: "Delete" }, void 0, false, {
                  fileName: "@/components/Sheet.tsx",
                  lineNumber: 426,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "@/components/Sheet.tsx",
                lineNumber: 422,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "@/components/Sheet.tsx",
              lineNumber: 416,
              columnNumber: 13
            }, this)
          ]
        },
        sheet.id,
        true,
        {
          fileName: "@/components/Sheet.tsx",
          lineNumber: 392,
          columnNumber: 11
        },
        this
      )),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        Button,
        {
          variant: "ghost",
          onClick: handleAddSheet,
          className: "flex items-center rounded-none h-full",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Plus, { size: 16 }, void 0, false, {
            fileName: "@/components/Sheet.tsx",
            lineNumber: 438,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "@/components/Sheet.tsx",
          lineNumber: 433,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "@/components/Sheet.tsx",
      lineNumber: 389,
      columnNumber: 7
    }, this),
    contextMenuPosition && selectedCellPosition && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      ContextMenu,
      {
        position: contextMenuPosition,
        disabledMenuItems: selectedCellPosition !== null && (headerStates[selectedCellPosition.col].type === "prompt" || headerStates[selectedCellPosition.col].type === "function") ? [] : ["runCell"],
        onClose: closeContextMenu,
        onInsertRow: () => selectedCellPosition && insertRow(selectedCellPosition.row),
        onInsertRowBelow: () => selectedCellPosition && insertRow(selectedCellPosition.row + 1),
        onInsertColumn: () => selectedCellPosition && insertColumn(selectedCellPosition.col),
        onInsertColumnRight: () => selectedCellPosition && insertColumn(selectedCellPosition.col + 1),
        onWrapText: () => setSelectedCellDisplay("wrap"),
        onRunCell: () => {
        },
        onDeleteRow: () => selectedCellPosition && deleteRows([selectedCellPosition.row]),
        onDeleteColumn: () => selectedCellPosition && deleteColumn(selectedCellPosition.col)
      },
      void 0,
      false,
      {
        fileName: "@/components/Sheet.tsx",
        lineNumber: 442,
        columnNumber: 9
      },
      this
    ),
    contextMenuPosition && selectedRows.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      RowContextMenu,
      {
        position: contextMenuPosition,
        numRows: selectedRows.length,
        onClose: closeContextMenu,
        onInsertRow: () => {
          for (let i = 0; i < selectedRows.length; i++) {
            insertRow(selectedRows[0]);
          }
        },
        onInsertRowBelow: () => {
          for (let i = 0; i < selectedRows.length; i++) {
            insertRow(selectedRows[0] + i + 1);
          }
        },
        onDeleteRow: () => {
          deleteRows(selectedRows);
        },
        onClearRow: () => {
        },
        onResizeRow: handleResizeRow
      },
      void 0,
      false,
      {
        fileName: "@/components/Sheet.tsx",
        lineNumber: 475,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      ResizeRowDialog,
      {
        isOpen: isResizeDialogOpen,
        onClose: () => setIsResizeDialogOpen(false),
        onConfirm: handleResizeConfirm,
        selectedRows
      },
      void 0,
      false,
      {
        fileName: "@/components/Sheet.tsx",
        lineNumber: 496,
        columnNumber: 7
      },
      this
    ),
    isCopyDialogOpen && sheetToCopy && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      CopySheetDialog_default,
      {
        isOpen: isCopyDialogOpen,
        onClose: () => setIsCopyDialogOpen(false),
        sheetId: sheetToCopy
      },
      void 0,
      false,
      {
        fileName: "@/components/Sheet.tsx",
        lineNumber: 504,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "@/components/Sheet.tsx",
    lineNumber: 301,
    columnNumber: 5
  }, this);
};
var Sheet = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(SheetProvider, { initialSpreadsheet: props.initialSpreadsheet, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(SpreadsheetContent, { ...props }, void 0, false, {
  fileName: "@/components/Sheet.tsx",
  lineNumber: 516,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "@/components/Sheet.tsx",
  lineNumber: 515,
  columnNumber: 3
}, this);
var Sheet_default = Sheet;

// @/components/SpreadsheetPage.tsx
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime(), 1);
var SpreadsheetPage = ({ id }) => {
  const { data: initialSpreadsheet, isPending } = useSpreadsheet(id);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "h-[100dvh] max-h-[100dvh] flex flex-col", children: [
    isPending && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Loader, { className: "animate-spin" }, void 0, false, {
      fileName: "@/components/SpreadsheetPage.tsx",
      lineNumber: 16,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "@/components/SpreadsheetPage.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    initialSpreadsheet && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Sheet_default, { id, initialSpreadsheet }, void 0, false, {
      fileName: "@/components/SpreadsheetPage.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "@/components/SpreadsheetPage.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
};

// app/routes/spreadsheet.$id.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/spreadsheet.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/spreadsheet.$id.tsx"
  );
  import.meta.hot.lastModified = "1728365768394.657";
}
var meta = () => {
  return [{
    title: "neosheets"
  }, {
    name: "description",
    content: "A new way to create spreadsheets"
  }];
};
function Index() {
  _s();
  const {
    id
  } = useParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(ClientOnly, { fallback: null, children: () => id ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(SpreadsheetPage, { id }, void 0, false, {
    fileName: "app/routes/spreadsheet.$id.tsx",
    lineNumber: 50,
    columnNumber: 19
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, {}, void 0, false, {
    fileName: "app/routes/spreadsheet.$id.tsx",
    lineNumber: 50,
    columnNumber: 49
  }, this) }, void 0, false, {
    fileName: "app/routes/spreadsheet.$id.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
}
_s(Index, "yQgCIz/jJfqV1l9s2yoba81MT5A=", false, function() {
  return [useParams];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=/build/routes/spreadsheet.$id-3E3SWR7G.js.map
