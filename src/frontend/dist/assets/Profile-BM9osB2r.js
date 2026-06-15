import { r as reactExports, j as jsxRuntimeExports, c as cn, a as useInternetIdentity, b as useNavigate, S as Skeleton, L as Link, d as formatDate, g as getOrderStatusColor, f as formatPrice } from "./index-JPd0Kotv.js";
import { c as createLucideIcon, a as useComposedRefs, u as useControllableState, P as Primitive, b as composeEventHandlers, e as createContextScope, l as useWishlistStore, L as Layout, U as User, B as Button, H as Heart, m as ShoppingBag } from "./Layout-Qf_pvXOm.js";
import { S as Separator } from "./separator-ldOsHIT_.js";
import { u as usePrevious, a as useSize } from "./index-CY9yFxAE.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-BmUJy4Nj.js";
import { e as useUserOrders, f as useProducts } from "./useBackend-BO6-JLDS.js";
import { P as Package } from "./package-DDBylMvB.js";
import { C as ChevronUp } from "./chevron-up-B1BAWzoo.js";
import { C as ChevronDown } from "./chevron-down-DFD-qTqc.js";
import "./index-B66CLKM9.js";
import "./index-DXJIGzOG.js";
import "./index-tHrD-0g7.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
];
const LogOut = createLucideIcon("log-out", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Settings = createLucideIcon("settings", __iconNode);
var SWITCH_NAME = "Switch";
var [createSwitchContext] = createContextScope(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSwitch,
      name,
      checked: checkedProp,
      defaultChecked,
      required,
      disabled,
      value = "on",
      onCheckedChange,
      form,
      ...switchProps
    } = props;
    const [button, setButton] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    const [checked, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked ?? false,
      onChange: onCheckedChange,
      caller: SWITCH_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(SwitchProvider, { scope: __scopeSwitch, checked, disabled, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": checked,
          "aria-required": required,
          "data-state": getState(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...switchProps,
          ref: composedRefs,
          onClick: composeEventHandlers(props.onClick, (event) => {
            setChecked((prevChecked) => !prevChecked);
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchBubbleInput,
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
Switch$1.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSwitch, ...thumbProps } = props;
    const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...thumbProps,
        ref: forwardedRef
      }
    );
  }
);
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "SwitchBubbleInput";
var SwitchBubbleInput = reactExports.forwardRef(
  ({
    __scopeSwitch,
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
      "input",
      {
        type: "checkbox",
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
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(checked) {
  return checked ? "checked" : "unchecked";
}
var Root = Switch$1;
var Thumb = SwitchThumb;
function Switch({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "switch",
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Thumb,
        {
          "data-slot": "switch-thumb",
          className: cn(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
function StatCard({
  label,
  value,
  icon: Icon
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border p-5 flex items-center gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-display font-bold", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: label })
    ] })
  ] });
}
function CompactOrderRow({ order }) {
  const [expanded, setExpanded] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border", "data-ocid": "profile-order-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setExpanded((v) => !v),
        className: "w-full text-left p-4 hover:bg-muted/30 transition-colors",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-sm font-semibold", children: [
              "#",
              order.id.slice(0, 8).toUpperCase()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              formatDate(order.createdAt),
              " · ",
              order.items.length,
              " item",
              order.items.length !== 1 ? "s" : ""
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `inline-flex items-center px-2 py-0.5 text-xs font-medium border rounded-full ${getOrderStatusColor(order.status)}`,
                children: order.status
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: formatPrice(order.totalAmount) }),
            expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 text-muted-foreground" })
          ] })
        ] })
      }
    ),
    expanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border p-4 bg-muted/20 space-y-2", children: order.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex justify-between text-sm",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground truncate mr-4", children: [
            item.productName,
            " (",
            item.size,
            ", ",
            item.color,
            ") ×",
            item.quantity
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium shrink-0", children: formatPrice(item.price * item.quantity) })
        ]
      },
      `${item.productId}-${item.size}-${item.color}`
    )) })
  ] });
}
function WishlistCard({
  product,
  onRemove
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "group bg-card border border-border overflow-hidden",
      "data-ocid": "wishlist-item",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/product/$id", params: { id: product.id }, className: "block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[3/4] bg-muted relative overflow-hidden", children: product.images[0] ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.images[0],
              alt: product.name,
              className: "w-full h-full object-cover group-hover:scale-105 transition-zoom"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ShoppingBag,
            {
              className: "h-8 w-8 text-muted-foreground",
              strokeWidth: 1
            }
          ) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium truncate", children: product.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary font-semibold mt-0.5", children: formatPrice(product.price) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: onRemove,
            className: "text-xs text-muted-foreground hover:text-destructive transition-colors flex items-center gap-1",
            "aria-label": "Remove from wishlist",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-3 w-3 fill-current" }),
              "Remove"
            ]
          }
        ) })
      ]
    }
  );
}
function OverviewTab({
  identity,
  orders,
  wishlistCount
}) {
  const recentOrders = orders.slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-7 w-7 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-lg", children: "Welcome back!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-mono mt-0.5 max-w-xs truncate", children: identity })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Total Orders", value: orders.length, icon: Package }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Wishlist Items", value: wishlistCount, icon: Heart })
    ] }),
    recentOrders.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-sm uppercase tracking-widest", children: "Recent Orders" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/orders", className: "text-xs text-primary hover:underline", children: "View all" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: recentOrders.map((order) => /* @__PURE__ */ jsxRuntimeExports.jsx(CompactOrderRow, { order }, order.id)) })
    ] })
  ] });
}
const NOTIFICATION_PREFS = [
  {
    id: "orderUpdates",
    label: "Order Updates",
    desc: "Shipping and delivery notifications"
  },
  {
    id: "promotions",
    label: "Promotions & Sales",
    desc: "Exclusive offers and new arrivals"
  },
  {
    id: "wishlistAlerts",
    label: "Wishlist Alerts",
    desc: "Price drops on wishlisted items"
  },
  {
    id: "newsletter",
    label: "Newsletter",
    desc: "Monthly style guides and editorial content"
  }
];
function SettingsTab() {
  const [prefs, setPrefs] = reactExports.useState({
    orderUpdates: true,
    promotions: false,
    wishlistAlerts: true,
    newsletter: false
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-semibold text-sm uppercase tracking-widest mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-4 w-4" }),
        "Notification Preferences"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: NOTIFICATION_PREFS.map((pref, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: pref.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: pref.desc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              checked: prefs[pref.id],
              onCheckedChange: (v) => setPrefs((prev) => ({ ...prev, [pref.id]: v })),
              "data-ocid": `pref-toggle-${pref.id}`
            }
          )
        ] }),
        index < NOTIFICATION_PREFS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "mt-4" })
      ] }, pref.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/40 border border-border p-5 text-sm text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Notification settings are saved locally. For full account management, sign in with your Internet Identity." }) })
  ] });
}
function Profile() {
  const { isLoginSuccess, login, clear, identity } = useInternetIdentity();
  const navigate = useNavigate();
  const { data: orders, isLoading: ordersLoading } = useUserOrders();
  const { data: allProducts } = useProducts();
  const wishlistIds = useWishlistStore((s) => s.productIds);
  const removeFromWishlist = useWishlistStore((s) => s.removeItem);
  reactExports.useEffect(() => {
    if (!isLoginSuccess) {
      const t = setTimeout(() => {
        if (!isLoginSuccess) void navigate({ to: "/" });
      }, 1500);
      return () => clearTimeout(t);
    }
  }, [isLoginSuccess, navigate]);
  const typedOrders = orders ?? [];
  const typedProducts = allProducts ?? [];
  const wishlisted = typedProducts.filter((p) => wishlistIds.includes(p.id));
  const principalStr = (identity == null ? void 0 : identity.getPrincipal().toText()) ?? "—";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-10", children: !isLoginSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-md mx-auto bg-card border border-border p-12 text-center",
      "data-ocid": "profile-auth-gate",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          User,
          {
            className: "h-12 w-12 text-muted-foreground mx-auto mb-4",
            strokeWidth: 1
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-xl mb-2", children: "Sign in to your account" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "Access your orders, wishlist, and account settings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: login,
            className: "bg-primary text-primary-foreground hover:bg-primary/90 w-full",
            "data-ocid": "profile-login-btn",
            children: "Sign In with Internet Identity"
          }
        )
      ]
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-semibold tracking-tight", children: "My Account" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-muted-foreground text-sm font-mono truncate max-w-xs", children: principalStr })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          onClick: clear,
          className: "flex items-center gap-2",
          "data-ocid": "logout-btn",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Sign Out" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "overview", "data-ocid": "profile-tabs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { className: "w-full border-b border-border rounded-none bg-transparent p-0 h-auto mb-8 justify-start gap-0", children: [
        { value: "overview", label: "Overview", icon: User },
        { value: "orders", label: "Order History", icon: Package },
        { value: "wishlist", label: "Wishlist", icon: Heart },
        { value: "settings", label: "Settings", icon: Settings }
      ].map((tab) => {
        const Icon = tab.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: tab.value,
            className: "rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2.5 flex items-center gap-2 text-sm",
            "data-ocid": `profile-tab-${tab.value}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: tab.label })
            ]
          },
          tab.value
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "overview", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        OverviewTab,
        {
          identity: principalStr,
          orders: typedOrders,
          wishlistCount: wishlistIds.length
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "orders", className: "mt-0", children: ordersLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: ["a", "b", "c"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-16 w-full" }, k)) }) : typedOrders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border p-12 text-center",
          "data-ocid": "profile-orders-empty",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ShoppingBag,
              {
                className: "h-10 w-10 text-muted-foreground mx-auto mb-3",
                strokeWidth: 1
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold", children: "No orders yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1 mb-5", children: "Start shopping to see your order history here" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                asChild: true,
                className: "bg-primary text-primary-foreground hover:bg-primary/90",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: "Browse Collection" })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "profile-orders-list", children: typedOrders.map((order) => /* @__PURE__ */ jsxRuntimeExports.jsx(CompactOrderRow, { order }, order.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "wishlist", className: "mt-0", children: wishlisted.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border p-12 text-center",
          "data-ocid": "profile-wishlist-empty",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Heart,
              {
                className: "h-10 w-10 text-muted-foreground mx-auto mb-3",
                strokeWidth: 1
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold", children: "Your wishlist is empty" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1 mb-5", children: "Save items you love for later" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                asChild: true,
                className: "bg-primary text-primary-foreground hover:bg-primary/90",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: "Explore Collection" })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4",
          "data-ocid": "profile-wishlist-grid",
          children: wishlisted.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            WishlistCard,
            {
              product,
              onRemove: () => removeFromWishlist(product.id)
            },
            product.id
          ))
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "settings", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsTab, {}) })
    ] })
  ] }) }) });
}
export {
  Profile as default
};
