import { r as reactExports, j as jsxRuntimeExports, c as cn, L as Link } from "./index-BvuKUqlt.js";
import { c as createLucideIcon, u as useControllableState, P as Primitive, n as useId, b as composeEventHandlers, d as Presence, e as createContextScope, a as useComposedRefs, p as useLayoutEffect2, L as Layout, q as Search, I as Input, B as Button } from "./Layout-BIyE8-ys.js";
import { c as createCollection, u as useDirection } from "./index-D5cAh1Um.js";
import { C as ChevronDown } from "./chevron-down-Bma-OV_K.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode);
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCollapsible,
      open: openProp,
      defaultOpen,
      disabled,
      onOpenChange,
      ...collapsibleProps
    } = props;
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen ?? false,
      onChange: onOpenChange,
      caller: COLLAPSIBLE_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CollapsibleProvider,
      {
        scope: __scopeCollapsible,
        disabled,
        contentId: useId(),
        open,
        onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            "data-state": getState$1(open),
            "data-disabled": disabled ? "" : void 0,
            ...collapsibleProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Collapsible.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME$1 = "CollapsibleTrigger";
var CollapsibleTrigger = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCollapsible, ...triggerProps } = props;
    const context = useCollapsibleContext(TRIGGER_NAME$1, __scopeCollapsible);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        "aria-controls": context.open ? context.contentId : void 0,
        "aria-expanded": context.open || false,
        "data-state": getState$1(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        disabled: context.disabled,
        ...triggerProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
CollapsibleTrigger.displayName = TRIGGER_NAME$1;
var CONTENT_NAME$1 = "CollapsibleContent";
var CollapsibleContent = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME$1, props.__scopeCollapsible);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: ({ present }) => /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContentImpl, { ...contentProps, ref: forwardedRef, present }) });
  }
);
CollapsibleContent.displayName = CONTENT_NAME$1;
var CollapsibleContentImpl = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeCollapsible, present, children, ...contentProps } = props;
  const context = useCollapsibleContext(CONTENT_NAME$1, __scopeCollapsible);
  const [isPresent, setIsPresent] = reactExports.useState(present);
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const heightRef = reactExports.useRef(0);
  const height = heightRef.current;
  const widthRef = reactExports.useRef(0);
  const width = widthRef.current;
  const isOpen = context.open || isPresent;
  const isMountAnimationPreventedRef = reactExports.useRef(isOpen);
  const originalStylesRef = reactExports.useRef(void 0);
  reactExports.useEffect(() => {
    const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
    return () => cancelAnimationFrame(rAF);
  }, []);
  useLayoutEffect2(() => {
    const node = ref.current;
    if (node) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      };
      node.style.transitionDuration = "0s";
      node.style.animationName = "none";
      const rect = node.getBoundingClientRect();
      heightRef.current = rect.height;
      widthRef.current = rect.width;
      if (!isMountAnimationPreventedRef.current) {
        node.style.transitionDuration = originalStylesRef.current.transitionDuration;
        node.style.animationName = originalStylesRef.current.animationName;
      }
      setIsPresent(present);
    }
  }, [context.open, present]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-state": getState$1(context.open),
      "data-disabled": context.disabled ? "" : void 0,
      id: context.contentId,
      hidden: !isOpen,
      ...contentProps,
      ref: composedRefs,
      style: {
        [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
        [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
        ...props.style
      },
      children: isOpen && children
    }
  );
});
function getState$1(open) {
  return open ? "open" : "closed";
}
var Root = Collapsible;
var Trigger = CollapsibleTrigger;
var Content = CollapsibleContent;
var ACCORDION_NAME = "Accordion";
var ACCORDION_KEYS = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];
var [Collection, useCollection, createCollectionScope] = createCollection(ACCORDION_NAME);
var [createAccordionContext] = createContextScope(ACCORDION_NAME, [
  createCollectionScope,
  createCollapsibleScope
]);
var useCollapsibleScope = createCollapsibleScope();
var Accordion$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { type, ...accordionProps } = props;
    const singleProps = accordionProps;
    const multipleProps = accordionProps;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Provider, { scope: props.__scopeAccordion, children: type === "multiple" ? /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImplMultiple, { ...multipleProps, ref: forwardedRef }) : /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImplSingle, { ...singleProps, ref: forwardedRef }) });
  }
);
Accordion$1.displayName = ACCORDION_NAME;
var [AccordionValueProvider, useAccordionValueContext] = createAccordionContext(ACCORDION_NAME);
var [AccordionCollapsibleProvider, useAccordionCollapsibleContext] = createAccordionContext(
  ACCORDION_NAME,
  { collapsible: false }
);
var AccordionImplSingle = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      value: valueProp,
      defaultValue,
      onValueChange = () => {
      },
      collapsible = false,
      ...accordionSingleProps
    } = props;
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue ?? "",
      onChange: onValueChange,
      caller: ACCORDION_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionValueProvider,
      {
        scope: props.__scopeAccordion,
        value: reactExports.useMemo(() => value ? [value] : [], [value]),
        onItemOpen: setValue,
        onItemClose: reactExports.useCallback(() => collapsible && setValue(""), [collapsible, setValue]),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImpl, { ...accordionSingleProps, ref: forwardedRef }) })
      }
    );
  }
);
var AccordionImplMultiple = reactExports.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
    },
    ...accordionMultipleProps
  } = props;
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? [],
    onChange: onValueChange,
    caller: ACCORDION_NAME
  });
  const handleItemOpen = reactExports.useCallback(
    (itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]),
    [setValue]
  );
  const handleItemClose = reactExports.useCallback(
    (itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)),
    [setValue]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AccordionValueProvider,
    {
      scope: props.__scopeAccordion,
      value,
      onItemOpen: handleItemOpen,
      onItemClose: handleItemClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImpl, { ...accordionMultipleProps, ref: forwardedRef }) })
    }
  );
});
var [AccordionImplProvider, useAccordionContext] = createAccordionContext(ACCORDION_NAME);
var AccordionImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, disabled, dir, orientation = "vertical", ...accordionProps } = props;
    const accordionRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(accordionRef, forwardedRef);
    const getItems = useCollection(__scopeAccordion);
    const direction = useDirection(dir);
    const isDirectionLTR = direction === "ltr";
    const handleKeyDown = composeEventHandlers(props.onKeyDown, (event) => {
      var _a;
      if (!ACCORDION_KEYS.includes(event.key)) return;
      const target = event.target;
      const triggerCollection = getItems().filter((item) => {
        var _a2;
        return !((_a2 = item.ref.current) == null ? void 0 : _a2.disabled);
      });
      const triggerIndex = triggerCollection.findIndex((item) => item.ref.current === target);
      const triggerCount = triggerCollection.length;
      if (triggerIndex === -1) return;
      event.preventDefault();
      let nextIndex = triggerIndex;
      const homeIndex = 0;
      const endIndex = triggerCount - 1;
      const moveNext = () => {
        nextIndex = triggerIndex + 1;
        if (nextIndex > endIndex) {
          nextIndex = homeIndex;
        }
      };
      const movePrev = () => {
        nextIndex = triggerIndex - 1;
        if (nextIndex < homeIndex) {
          nextIndex = endIndex;
        }
      };
      switch (event.key) {
        case "Home":
          nextIndex = homeIndex;
          break;
        case "End":
          nextIndex = endIndex;
          break;
        case "ArrowRight":
          if (orientation === "horizontal") {
            if (isDirectionLTR) {
              moveNext();
            } else {
              movePrev();
            }
          }
          break;
        case "ArrowDown":
          if (orientation === "vertical") {
            moveNext();
          }
          break;
        case "ArrowLeft":
          if (orientation === "horizontal") {
            if (isDirectionLTR) {
              movePrev();
            } else {
              moveNext();
            }
          }
          break;
        case "ArrowUp":
          if (orientation === "vertical") {
            movePrev();
          }
          break;
      }
      const clampedIndex = nextIndex % triggerCount;
      (_a = triggerCollection[clampedIndex].ref.current) == null ? void 0 : _a.focus();
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionImplProvider,
      {
        scope: __scopeAccordion,
        disabled,
        direction: dir,
        orientation,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Slot, { scope: __scopeAccordion, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            ...accordionProps,
            "data-orientation": orientation,
            ref: composedRefs,
            onKeyDown: disabled ? void 0 : handleKeyDown
          }
        ) })
      }
    );
  }
);
var ITEM_NAME = "AccordionItem";
var [AccordionItemProvider, useAccordionItemContext] = createAccordionContext(ITEM_NAME);
var AccordionItem$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, value, ...accordionItemProps } = props;
    const accordionContext = useAccordionContext(ITEM_NAME, __scopeAccordion);
    const valueContext = useAccordionValueContext(ITEM_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    const triggerId = useId();
    const open = value && valueContext.value.includes(value) || false;
    const disabled = accordionContext.disabled || props.disabled;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionItemProvider,
      {
        scope: __scopeAccordion,
        open,
        disabled,
        triggerId,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Root,
          {
            "data-orientation": accordionContext.orientation,
            "data-state": getState(open),
            ...collapsibleScope,
            ...accordionItemProps,
            ref: forwardedRef,
            disabled,
            open,
            onOpenChange: (open2) => {
              if (open2) {
                valueContext.onItemOpen(value);
              } else {
                valueContext.onItemClose(value);
              }
            }
          }
        )
      }
    );
  }
);
AccordionItem$1.displayName = ITEM_NAME;
var HEADER_NAME = "AccordionHeader";
var AccordionHeader = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...headerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(HEADER_NAME, __scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.h3,
      {
        "data-orientation": accordionContext.orientation,
        "data-state": getState(itemContext.open),
        "data-disabled": itemContext.disabled ? "" : void 0,
        ...headerProps,
        ref: forwardedRef
      }
    );
  }
);
AccordionHeader.displayName = HEADER_NAME;
var TRIGGER_NAME = "AccordionTrigger";
var AccordionTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...triggerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(TRIGGER_NAME, __scopeAccordion);
    const collapsibleContext = useAccordionCollapsibleContext(TRIGGER_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.ItemSlot, { scope: __scopeAccordion, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trigger,
      {
        "aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
        "data-orientation": accordionContext.orientation,
        id: itemContext.triggerId,
        ...collapsibleScope,
        ...triggerProps,
        ref: forwardedRef
      }
    ) });
  }
);
AccordionTrigger$1.displayName = TRIGGER_NAME;
var CONTENT_NAME = "AccordionContent";
var AccordionContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...contentProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(CONTENT_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Content,
      {
        role: "region",
        "aria-labelledby": itemContext.triggerId,
        "data-orientation": accordionContext.orientation,
        ...collapsibleScope,
        ...contentProps,
        ref: forwardedRef,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...props.style
        }
      }
    );
  }
);
AccordionContent$1.displayName = CONTENT_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var Root2 = Accordion$1;
var Item = AccordionItem$1;
var Header = AccordionHeader;
var Trigger2 = AccordionTrigger$1;
var Content2 = AccordionContent$1;
function Accordion({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, { "data-slot": "accordion", ...props });
}
function AccordionItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Item,
    {
      "data-slot": "accordion-item",
      className: cn("border-b last:border-b-0", className),
      ...props
    }
  );
}
function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Trigger2,
    {
      "data-slot": "accordion-trigger",
      className: cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function AccordionContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content2,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pt-0 pb-4", className), children })
    }
  );
}
const FAQ_DATA = [
  {
    title: "Ordering & Shipping",
    items: [
      {
        q: "How long does shipping take?",
        a: "Standard shipping takes 5–7 business days. Expedited shipping (2–3 days) and overnight options are available at checkout. Orders placed before 2pm ET ship the same day."
      },
      {
        q: "Do you offer free shipping?",
        a: "Yes! All orders over $150 qualify for complimentary standard shipping. Orders under $150 ship for a flat $8 fee. International shipping rates vary by destination."
      },
      {
        q: "How do I track my order?",
        a: "Once your order ships, you'll receive a confirmation email with a tracking number. You can also view real-time status in your account under 'My Orders'. Tracking updates every 4–6 hours."
      },
      {
        q: "Can I change or cancel my order after placing it?",
        a: "Orders can be modified or cancelled within 1 hour of placement. After that, our fulfillment team begins processing. Contact us immediately at support@aethera.com if you need to make changes."
      },
      {
        q: "Do you ship internationally?",
        a: "We ship to over 40 countries worldwide. International orders typically arrive within 10–14 business days. Customs duties and taxes are the responsibility of the recipient and vary by country."
      },
      {
        q: "What if my package is lost or damaged?",
        a: "If your order is lost or arrives damaged, please contact us within 14 days of the expected delivery date. We'll file a claim on your behalf and send a replacement or full refund."
      }
    ]
  },
  {
    title: "Returns & Exchanges",
    items: [
      {
        q: "What is your return policy?",
        a: "We accept returns within 30 days of delivery. Items must be unworn, unwashed, and in original condition with all tags attached. Sale items and intimates are final sale."
      },
      {
        q: "How do I start a return?",
        a: "Initiate your return online through your account or our Returns page. You'll receive a prepaid return label by email. Pack items securely and drop off at any carrier location."
      },
      {
        q: "How long do refunds take?",
        a: "Once we receive and inspect your return (1–2 business days), refunds are processed within 5–10 business days to your original payment method. You'll receive an email confirmation."
      },
      {
        q: "Can I exchange for a different size or color?",
        a: "Absolutely. Exchanges are handled the same way as returns — initiate through your account or the Returns page. Select 'Exchange' and choose your preferred size or color. We'll ship the new item as soon as your return is received."
      }
    ]
  },
  {
    title: "Products & Sizing",
    items: [
      {
        q: "How do I find my size?",
        a: "Each product page includes a detailed size guide with measurements in both US and EU sizes. If you're between sizes, we generally recommend sizing up for a relaxed fit or down for a tailored look."
      },
      {
        q: "Are your products sustainable?",
        a: "Sustainability is core to our brand. We partner with factories that use certified organic cottons, recycled fabrics, and low-impact dyes. Our packaging is 100% recyclable. We're committed to reducing our carbon footprint year over year."
      },
      {
        q: "What fabrics do you use?",
        a: "We use premium natural and recycled materials including GOTS-certified organic cotton, TENCEL™ lyocell, recycled cashmere, and responsible wools. Fabric composition is listed on every product page."
      },
      {
        q: "How do I care for my garments?",
        a: "Care instructions are printed on the garment label and listed on the product page. Most pieces are best cared for with a cold gentle wash and air dry. We recommend keeping knitwear flat to preserve shape."
      }
    ]
  },
  {
    title: "Payments & Security",
    items: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit and debit cards (Visa, Mastercard, Amex), PayPal, Apple Pay, and Google Pay. All transactions are encrypted with TLS 1.3 and PCI-DSS compliant."
      },
      {
        q: "Is my payment information secure?",
        a: "Yes. We never store your full card details. All payment data is processed securely through Stripe, a PCI Level 1 certified provider. Your information is encrypted end-to-end."
      },
      {
        q: "Can I use a discount code?",
        a: "Discount codes can be entered at checkout in the 'Promo Code' field. Only one code may be applied per order. Codes cannot be combined with other promotions or applied to sale items."
      }
    ]
  }
];
function FaqPage() {
  const [query, setQuery] = reactExports.useState("");
  const filtered = FAQ_DATA.map((section) => ({
    ...section,
    items: section.items.filter(
      (item) => query.trim() === "" || item.q.toLowerCase().includes(query.toLowerCase()) || item.a.toLowerCase().includes(query.toLowerCase())
    )
  })).filter((section) => section.items.length > 0);
  const totalResults = filtered.reduce((acc, s) => acc + s.items.length, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/40 border-b border-border py-14 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3", children: "Support" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl font-semibold tracking-tight", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg max-w-md mx-auto", children: "Everything you need to know about shopping with Aethera." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative mt-8 max-w-xl mx-auto",
          "data-ocid": "faq-search",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                value: query,
                onChange: (e) => setQuery(e.target.value),
                placeholder: "Search questions...",
                className: "pl-11 h-12 text-base bg-card border-border rounded-sm focus-visible:ring-primary",
                "data-ocid": "faq-search-input"
              }
            )
          ]
        }
      ),
      query.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: totalResults === 0 ? "No results found — try different keywords." : `${totalResults} result${totalResults !== 1 ? "s" : ""} for "${query}"` })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto max-w-3xl px-4 py-14", children: [
      filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", "data-ocid": "faq-empty", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: "No questions match your search." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            className: "mt-4",
            onClick: () => setQuery(""),
            children: "Clear search"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12", children: filtered.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 pb-3 border-b border-border", children: section.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Accordion,
          {
            type: "multiple",
            className: "space-y-1",
            "data-ocid": `faq-section-${section.title.toLowerCase().replace(/\s+/g, "-")}`,
            children: section.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              AccordionItem,
              {
                value: `${section.title}-${item.q}`,
                className: "border border-border rounded-sm px-5 data-[state=open]:border-primary/40 data-[state=open]:bg-card transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-left font-medium text-sm py-5 hover:text-primary hover:no-underline transition-colors [&>svg]:text-muted-foreground [&>svg]:shrink-0", children: item.q }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-sm text-muted-foreground leading-relaxed pb-5", children: item.a })
                ]
              },
              item.q
            ))
          }
        )
      ] }, section.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "mt-16 bg-card border border-border rounded-sm p-8 text-center",
          "data-ocid": "faq-contact-cta",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-8 w-8 text-primary mx-auto mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: "Still have questions?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground text-sm max-w-sm mx-auto", children: "Our support team is available Monday–Friday, 9am–6pm ET. We typically respond within 24 hours." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "mt-6 bg-primary text-primary-foreground hover:bg-primary/90 px-8",
                "data-ocid": "faq-contact-btn",
                children: "Contact Us"
              }
            ) })
          ]
        }
      )
    ] })
  ] });
}
export {
  FaqPage as default
};
