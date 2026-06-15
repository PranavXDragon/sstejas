import { r as reactExports, j as jsxRuntimeExports, c as cn, u as useParams } from "./index-JPd0Kotv.js";
import { c as createLucideIcon, u as useControllableState, P as Primitive, a as useComposedRefs, b as composeEventHandlers, d as Presence, e as createContextScope, L as Layout, S as Sheet, f as SheetTrigger, B as Button, g as Badge, h as SheetContent, i as SheetHeader, j as SheetTitle, X } from "./Layout-Qf_pvXOm.js";
import { L as Label } from "./label-2mqRsM2H.js";
import { R as Root, I as Item, c as createRovingFocusGroupScope } from "./index-DXJIGzOG.js";
import { u as useDirection } from "./index-tHrD-0g7.js";
import { u as usePrevious, a as useSize } from "./index-CY9yFxAE.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BjF3McBz.js";
import { S as Separator } from "./separator-ldOsHIT_.js";
import { a as getProductsByCategory, P as ProductCard } from "./products-BQ8Eic1q.js";
import { m as motion } from "./proxy-BnR9WvD4.js";
import "./index-B66CLKM9.js";
import "./chevron-down-DFD-qTqc.js";
import "./chevron-up-B1BAWzoo.js";
import "./index-D0mCjvVI.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]];
const Circle = createLucideIcon("circle", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
];
const SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode);
var RADIO_NAME = "Radio";
var [createRadioContext, createRadioScope] = createContextScope(RADIO_NAME);
var [RadioProvider, useRadioContext] = createRadioContext(RADIO_NAME);
var Radio = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRadio,
      name,
      checked = false,
      required,
      disabled,
      value = "on",
      onCheck,
      form,
      ...radioProps
    } = props;
    const [button, setButton] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(RadioProvider, { scope: __scopeRadio, checked, disabled, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
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
            if (!checked) onCheck == null ? void 0 : onCheck();
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        RadioBubbleInput,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          form,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Radio.displayName = RADIO_NAME;
var INDICATOR_NAME = "RadioIndicator";
var RadioIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeRadio, forceMount, ...indicatorProps } = props;
    const context = useRadioContext(INDICATOR_NAME, __scopeRadio);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.checked, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
var BUBBLE_INPUT_NAME = "RadioBubbleInput";
var RadioBubbleInput = reactExports.forwardRef(
  ({
    __scopeRadio,
    control,
    checked,
    bubbles = true,
    ...props
  }, forwardedRef) => {
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(ref, forwardedRef);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    reactExports.useEffect(() => {
      const input = ref.current;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        setChecked.call(input, checked);
        input.dispatchEvent(event);
      }
    }, [prevChecked, checked, bubbles]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.input,
      {
        type: "radio",
        "aria-hidden": true,
        defaultChecked: checked,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
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
  }
);
RadioBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(checked) {
  return checked ? "checked" : "unchecked";
}
var ARROW_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var RADIO_GROUP_NAME = "RadioGroup";
var [createRadioGroupContext] = createContextScope(RADIO_GROUP_NAME, [
  createRovingFocusGroupScope,
  createRadioScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var useRadioScope = createRadioScope();
var [RadioGroupProvider, useRadioGroupContext] = createRadioGroupContext(RADIO_GROUP_NAME);
var RadioGroup$1 = reactExports.forwardRef(
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
      defaultProp: defaultValue ?? null,
      onChange: onValueChange,
      caller: RADIO_GROUP_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      RadioGroupProvider,
      {
        scope: __scopeRadioGroup,
        name,
        required,
        disabled,
        value,
        onValueChange: setValue,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Root,
          {
            asChild: true,
            ...rovingFocusGroupScope,
            orientation,
            dir: direction,
            loop,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
RadioGroup$1.displayName = RADIO_GROUP_NAME;
var ITEM_NAME = "RadioGroupItem";
var RadioGroupItem$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeRadioGroup, disabled, ...itemProps } = props;
    const context = useRadioGroupContext(ITEM_NAME, __scopeRadioGroup);
    const isDisabled = context.disabled || disabled;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
    const radioScope = useRadioScope(__scopeRadioGroup);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const checked = context.value === itemProps.value;
    const isArrowKeyPressedRef = reactExports.useRef(false);
    reactExports.useEffect(() => {
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
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !isDisabled,
        active: checked,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
              if (event.key === "Enter") event.preventDefault();
            }),
            onFocus: composeEventHandlers(itemProps.onFocus, () => {
              var _a;
              if (isArrowKeyPressedRef.current) (_a = ref.current) == null ? void 0 : _a.click();
            })
          }
        )
      }
    );
  }
);
RadioGroupItem$1.displayName = ITEM_NAME;
var INDICATOR_NAME2 = "RadioGroupIndicator";
var RadioGroupIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeRadioGroup, ...indicatorProps } = props;
    const radioScope = useRadioScope(__scopeRadioGroup);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioIndicator, { ...radioScope, ...indicatorProps, ref: forwardedRef });
  }
);
RadioGroupIndicator.displayName = INDICATOR_NAME2;
var Root2 = RadioGroup$1;
var Item2 = RadioGroupItem$1;
var Indicator = RadioGroupIndicator;
function RadioGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root2,
    {
      "data-slot": "radio-group",
      className: cn("grid gap-3", className),
      ...props
    }
  );
}
function RadioGroupItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Item2,
    {
      "data-slot": "radio-group-item",
      className: cn(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
const CLOTHING_SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
const ACCESSORY_SIZES = ["One Size"];
const COLORS = [
  { name: "White", swatch: "bg-white border-border" },
  { name: "Black", swatch: "bg-black border-black" },
  { name: "Navy", swatch: "bg-blue-800 border-blue-800" },
  { name: "Beige", swatch: "bg-stone-200 border-stone-300" },
  { name: "Brown", swatch: "bg-stone-700 border-stone-700" },
  { name: "Green", swatch: "bg-green-700 border-green-700" },
  { name: "Red", swatch: "bg-red-600 border-red-600" },
  { name: "Blue", swatch: "bg-blue-500 border-blue-500" },
  { name: "Pink", swatch: "bg-pink-400 border-pink-400" },
  { name: "Grey", swatch: "bg-gray-400 border-gray-400" }
];
const PRICE_RANGES = [
  { label: "Under $50", value: "under-50" },
  { label: "$50 – $100", value: "50-100" },
  { label: "$100 – $200", value: "100-200" },
  { label: "Over $200", value: "over-200" }
];
const SORT_OPTIONS = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" }
];
function categoryLabel(slug) {
  const map = {
    men: "Men's Collection",
    women: "Women's Collection",
    kids: "Kids' Collection",
    accessories: "Accessories"
  };
  return map[slug] ?? `${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;
}
function matchesPrice(price, range) {
  if (!range) return true;
  const dollars = price / 100;
  if (range === "under-50") return dollars < 50;
  if (range === "50-100") return dollars >= 50 && dollars <= 100;
  if (range === "100-200") return dollars > 100 && dollars <= 200;
  if (range === "over-200") return dollars > 200;
  return true;
}
function sortProducts(items, sort) {
  const sorted = [...items];
  if (sort === "price-asc") return sorted.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") return sorted.sort((a, b) => b.price - a.price);
  if (sort === "rating") return sorted.sort((a, b) => b.rating - a.rating);
  return sorted;
}
function FilterPanel({
  slug,
  selectedSizes,
  selectedColors,
  priceRange,
  onToggleSize,
  onToggleColor,
  onPriceChange,
  onClear,
  activeCount
}) {
  const sizes = slug === "accessories" ? ACCESSORY_SIZES : CLOTHING_SIZES;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs uppercase tracking-[0.25em] font-medium", children: "Filters" }),
      activeCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: onClear,
          className: "text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1",
          "data-ocid": "filter-clear",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" }),
            "Clear all"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] font-medium mb-4 text-muted-foreground", children: "Size" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: sizes.map((size) => {
        const checked = selectedSizes.includes(size);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => onToggleSize(size),
            "aria-pressed": checked,
            className: `text-xs border py-2 px-1 transition-colors font-medium ${checked ? "border-foreground bg-foreground text-background" : "border-border text-foreground hover:border-foreground"}`,
            "data-ocid": `filter-size-${size.toLowerCase().replace(" ", "-")}`,
            children: size
          },
          size
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] font-medium mb-4 text-muted-foreground", children: "Color" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2.5", children: COLORS.map((c) => {
        const active = selectedColors.includes(c.name);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            title: c.name,
            "aria-label": `Filter by color: ${c.name}`,
            "aria-pressed": active,
            onClick: () => onToggleColor(c.name),
            className: `w-7 h-7 rounded-full border-2 transition-all ${c.swatch} ${active ? "ring-2 ring-offset-2 ring-primary scale-110" : "hover:scale-110"}`,
            "data-ocid": `filter-color-${c.name.toLowerCase()}`
          },
          c.name
        );
      }) }),
      selectedColors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mt-3", children: selectedColors.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Badge,
        {
          variant: "secondary",
          className: "text-[10px] rounded-none px-2 cursor-pointer",
          onClick: () => onToggleColor(c),
          children: [
            c,
            " ×"
          ]
        },
        c
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] font-medium mb-4 text-muted-foreground", children: "Price Range" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        RadioGroup,
        {
          value: priceRange,
          onValueChange: (v) => onPriceChange(v),
          "data-ocid": "filter-price-group",
          children: PRICE_RANGES.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 py-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RadioGroupItem,
              {
                value: r.value,
                id: `price-${r.value}`,
                "data-ocid": `filter-price-${r.value}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: `price-${r.value}`,
                className: "text-sm cursor-pointer",
                children: r.label
              }
            )
          ] }, r.value))
        }
      ),
      priceRange && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => onPriceChange(""),
          className: "mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors",
          children: "Clear price filter"
        }
      )
    ] })
  ] });
}
function EmptyState({ onClear }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center justify-center py-24 text-center",
      "data-ocid": "empty-state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 border border-border flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "h-6 w-6 text-muted-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold mb-2", children: "No products found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6 max-w-xs", children: "Try adjusting your filters to discover more styles." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            className: "rounded-none text-xs uppercase tracking-widest",
            onClick: onClear,
            "data-ocid": "empty-state-clear",
            children: "Clear Filters"
          }
        )
      ]
    }
  );
}
function Category() {
  var _a;
  const { slug } = useParams({ from: "/category/$slug" });
  const [selectedSizes, setSelectedSizes] = reactExports.useState([]);
  const [selectedColors, setSelectedColors] = reactExports.useState([]);
  const [priceRange, setPriceRange] = reactExports.useState("");
  const [sort, setSort] = reactExports.useState("newest");
  const [filterSheetOpen, setFilterSheetOpen] = reactExports.useState(false);
  const allProducts = getProductsByCategory(slug);
  const toggleSize = (size) => setSelectedSizes(
    (prev) => prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
  );
  const toggleColor = (color) => setSelectedColors(
    (prev) => prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
  );
  const clearFilters = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceRange("");
  };
  const activeCount = selectedSizes.length + selectedColors.length + (priceRange ? 1 : 0);
  const filtered = reactExports.useMemo(() => {
    const result = allProducts.filter((p) => {
      if (selectedSizes.length && !selectedSizes.some((s) => p.sizes.includes(s)))
        return false;
      if (selectedColors.length && !selectedColors.some((c) => p.colors.includes(c)))
        return false;
      if (!matchesPrice(p.price, priceRange)) return false;
      return true;
    });
    return sortProducts(result, sort);
  }, [allProducts, selectedSizes, selectedColors, priceRange, sort]);
  const filterProps = {
    slug,
    selectedSizes,
    selectedColors,
    priceRange,
    onToggleSize: toggleSize,
    onToggleColor: toggleColor,
    onPriceChange: setPriceRange,
    onClear: clearFilters,
    activeCount
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 lg:px-12 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary mb-2 font-medium", children: slug.charAt(0).toUpperCase() + slug.slice(1) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-4xl font-semibold", children: categoryLabel(slug) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
              filtered.length,
              " ",
              filtered.length === 1 ? "product" : "products"
            ] })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 lg:px-12 py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Sheet, { open: filterSheetOpen, onOpenChange: setFilterSheetOpen, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              className: "lg:hidden rounded-none text-xs uppercase tracking-widest",
              "data-ocid": "filter-sheet-trigger",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "h-3.5 w-3.5 mr-2" }),
                "Filters",
                activeCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-2 h-4 w-4 p-0 text-[10px] flex items-center justify-center rounded-full bg-primary text-primary-foreground", children: activeCount })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            SheetContent,
            {
              side: "left",
              className: "w-80 overflow-y-auto",
              "data-ocid": "filter-sheet",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { className: "text-left font-display text-base uppercase tracking-wide", children: "Filter Products" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FilterPanel, { ...filterProps })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex flex-wrap gap-2 flex-1", children: [
          selectedSizes.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              variant: "secondary",
              className: "text-[10px] rounded-none px-2 cursor-pointer",
              onClick: () => toggleSize(s),
              children: [
                "Size: ",
                s,
                " ×"
              ]
            },
            s
          )),
          selectedColors.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              variant: "secondary",
              className: "text-[10px] rounded-none px-2 cursor-pointer",
              onClick: () => toggleColor(c),
              children: [
                c,
                " ×"
              ]
            },
            c
          )),
          priceRange && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              variant: "secondary",
              className: "text-[10px] rounded-none px-2 cursor-pointer",
              onClick: () => setPriceRange(""),
              children: [
                (_a = PRICE_RANGES.find((r) => r.value === priceRange)) == null ? void 0 : _a.label,
                " ×"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: sort, onValueChange: (v) => setSort(v), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              className: "w-[180px] rounded-none text-xs",
              "data-ocid": "sort-select",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Sort by" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { className: "rounded-none", children: SORT_OPTIONS.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectItem,
            {
              value: o.value,
              className: "text-xs",
              "data-ocid": `sort-option-${o.value}`,
              children: o.label
            },
            o.value
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "hidden lg:block w-56 shrink-0", "aria-label": "Filters", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FilterPanel, { ...filterProps }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { onClear: clearFilters }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6",
            "data-ocid": "product-grid",
            children: filtered.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: {
                  duration: 0.4,
                  delay: Math.min(i * 0.05, 0.4)
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product })
              },
              product.id
            ))
          }
        ) })
      ] })
    ] })
  ] });
}
export {
  Category as default
};
