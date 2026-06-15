import { j as jsxRuntimeExports, L as Link, f as formatPrice, c as cn } from "./index-JPd0Kotv.js";
import { c as createLucideIcon, k as useCartStore, L as Layout, m as ShoppingBag, B as Button } from "./Layout-Qf_pvXOm.js";
import { S as Separator } from "./separator-ldOsHIT_.js";
import { u as ue } from "./index-D0mCjvVI.js";
import { M as Minus, P as Plus } from "./plus-ClvpMgPO.js";
import "./index-B66CLKM9.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
function CartRow({ item }) {
  const { updateQuantity, removeItem } = useCartStore();
  const handleRemove = () => {
    removeItem(item.product.id, item.size, item.color);
    ue("Item removed from cart", { duration: 2e3 });
  };
  const img = item.product.images[0] ?? `https://picsum.photos/seed/${item.product.id}/200/260`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex gap-4 py-5 border-b border-border",
      "data-ocid": "cart-row",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/product/$id",
            params: { id: item.product.id },
            className: "shrink-0",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: img,
                alt: item.product.name,
                className: "w-20 h-26 md:w-24 md:h-32 object-cover bg-muted",
                style: { aspectRatio: "3/4" }
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 gap-4 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/product/$id",
                params: { id: item.product.id },
                className: "hover:text-primary transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5", children: item.product.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-sm leading-snug truncate", children: item.product.name })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Size: ",
                item.size
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Colour: ",
                item.color
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mt-2 text-primary", children: formatPrice(item.product.price) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end justify-between shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "inline-flex items-center border border-border",
                "data-ocid": "cart-quantity",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => updateQuantity(
                        item.product.id,
                        item.size,
                        item.color,
                        item.quantity - 1
                      ),
                      className: "w-8 h-8 flex items-center justify-center hover:bg-muted transition-colors",
                      "aria-label": "Decrease quantity",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3 w-3" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 text-center text-sm tabular-nums font-medium", children: item.quantity }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => updateQuantity(
                        item.product.id,
                        item.size,
                        item.color,
                        item.quantity + 1
                      ),
                      className: "w-8 h-8 flex items-center justify-center hover:bg-muted transition-colors",
                      "aria-label": "Increase quantity",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold tabular-nums", children: formatPrice(item.product.price * item.quantity) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: handleRemove,
                className: "text-muted-foreground hover:text-destructive transition-colors",
                "aria-label": "Remove item",
                "data-ocid": "remove-item",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function OrderSummary() {
  const { subtotal, tax, shipping, total, items } = useCartStore();
  const sub = subtotal();
  const taxAmt = tax();
  const ship = shipping();
  const tot = total();
  const rows = [
    { label: "Subtotal", value: formatPrice(sub) },
    { label: "Tax (8%)", value: formatPrice(taxAmt) },
    {
      label: "Shipping",
      value: ship === 0 ? "Free" : formatPrice(ship),
      highlight: ship === 0
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border p-6 md:sticky md:top-24",
      "data-ocid": "order-summary",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-base font-semibold uppercase tracking-widest mb-5", children: "Order Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: rows.map(({ label, value, highlight }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("font-medium", highlight && "text-primary"), children: value })
        ] }, label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-baseline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold uppercase tracking-widest text-sm", children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-semibold", children: formatPrice(tot) })
        ] }),
        sub < 15e3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-3 text-center", children: [
          "Add ",
          formatPrice(15e3 - sub),
          " more for free shipping"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/checkout", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "w-full mt-5 h-12 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 text-xs uppercase tracking-widest font-medium",
            disabled: items.length === 0,
            "data-ocid": "checkout-btn",
            children: "Proceed to Checkout"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "block mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            className: "w-full h-10 rounded-none text-xs uppercase tracking-widest font-medium text-muted-foreground",
            children: "Continue Shopping"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 pt-5 border-t border-border space-y-1.5", children: ["Secure SSL Checkout", "Free 30-day Returns"].map((txt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-[10px] text-muted-foreground text-center uppercase tracking-widest",
            children: txt
          },
          txt
        )) })
      ]
    }
  );
}
function EmptyCart() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center justify-center py-24 px-4 text-center",
      "data-ocid": "empty-cart",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-9 w-9 text-muted-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold", children: "Your cart is empty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground text-sm max-w-xs", children: "Looks like you haven't added anything yet. Explore our collections to find something you love." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "mt-8 h-12 px-10 rounded-none bg-foreground text-background hover:bg-primary hover:text-primary-foreground text-xs uppercase tracking-widest font-medium transition-colors",
            "data-ocid": "shop-now-btn",
            children: "Shop Now"
          }
        ) })
      ]
    }
  );
}
function Cart() {
  const { items } = useCartStore();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8 md:py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl md:text-3xl font-semibold tracking-tight", children: "Shopping Cart" }),
      items.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
        items.reduce((s, i) => s + i.quantity, 0),
        " item",
        items.reduce((s, i) => s + i.quantity, 0) !== 1 ? "s" : ""
      ] })
    ] }),
    items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyCart, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[1fr_340px] gap-8 lg:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "cart-items", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        CartRow,
        {
          item
        },
        `${item.product.id}-${item.size}-${item.color}`
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OrderSummary, {})
    ] })
  ] }) });
}
export {
  Cart as default
};
