import { u as useParams, b as useNavigate, r as reactExports, j as jsxRuntimeExports, f as formatPrice, d as formatDate, L as Link, S as Skeleton } from "./index-JPd0Kotv.js";
import { c as createLucideIcon, L as Layout, B as Button, m as ShoppingBag } from "./Layout-Qf_pvXOm.js";
import { S as Separator } from "./separator-ldOsHIT_.js";
import { d as useOrderById } from "./useBackend-BO6-JLDS.js";
import { P as Package } from "./package-DDBylMvB.js";
import "./index-B66CLKM9.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode);
function AddressBlock({ addr }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm space-y-0.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: addr.fullName }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: addr.addressLine1 }),
    addr.addressLine2 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: addr.addressLine2 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
      addr.city,
      ", ",
      addr.state,
      " ",
      addr.postalCode
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: addr.country })
  ] });
}
function ConfirmationSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-24 rounded-full mx-auto" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-64 mx-auto" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-48 mx-auto" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: ["a", "b", "c"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-16 w-full" }, k)) })
  ] });
}
function OrderConfirmation() {
  const { id } = useParams({ from: "/order-confirmation/$id" });
  const navigate = useNavigate();
  const { data: order, isLoading } = useOrderById(id);
  reactExports.useEffect(() => {
    if (!isLoading && order === null) {
      void navigate({ to: "/orders" });
    }
  }, [isLoading, order, navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-16", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(ConfirmationSkeleton, {}) : order ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mx-auto mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CircleCheckBig,
        {
          className: "h-10 w-10 text-primary",
          strokeWidth: 1.5
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-semibold tracking-tight", children: "Order Confirmed!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Thank you for your purchase. We'll get your items to you soon." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 inline-flex items-center gap-2 bg-muted px-4 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", children: [
          "Order",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "font-mono font-semibold text-foreground",
              "data-ocid": "order-number",
              children: [
                "#",
                id.slice(0, 8).toUpperCase()
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-sm uppercase tracking-widest mb-4", children: "Items Ordered" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: order.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center justify-between gap-4",
            "data-ocid": "order-item",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium truncate", children: item.productName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  item.size,
                  " · ",
                  item.color,
                  " · Qty ",
                  item.quantity
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium shrink-0", children: formatPrice(item.price * item.quantity) })
            ]
          },
          `${item.productId}-${item.size}-${item.color}`
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-display font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatPrice(order.totalAmount) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-xs uppercase tracking-widest mb-3", children: "Shipping To" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AddressBlock, { addr: order.shippingAddress })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-xs uppercase tracking-widest mb-3", children: "Order Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Placed on" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatDate(order.createdAt) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-primary", children: order.status })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Est. Delivery" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "5-7 business days" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 mt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          asChild: true,
          variant: "outline",
          className: "flex-1",
          "data-ocid": "track-order-btn",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/orders", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-4 w-4 mr-2" }),
            "Track Your Order"
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          asChild: true,
          className: "flex-1 bg-primary text-primary-foreground hover:bg-primary/90",
          "data-ocid": "continue-shopping-btn",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4 mr-2" }),
            "Continue Shopping"
          ] })
        }
      )
    ] })
  ] }) : null }) });
}
export {
  OrderConfirmation as default
};
