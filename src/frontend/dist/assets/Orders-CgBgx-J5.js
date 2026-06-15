import { a as useInternetIdentity, b as useNavigate, r as reactExports, j as jsxRuntimeExports, L as Link, S as Skeleton, d as formatDate, f as formatPrice, g as getOrderStatusColor } from "./index-JPd0Kotv.js";
import { L as Layout, B as Button, m as ShoppingBag } from "./Layout-Qf_pvXOm.js";
import { e as useUserOrders } from "./useBackend-BO6-JLDS.js";
import { P as Package } from "./package-DDBylMvB.js";
import { C as ChevronUp } from "./chevron-up-B1BAWzoo.js";
import { C as ChevronDown } from "./chevron-down-DFD-qTqc.js";
import { C as Clock } from "./clock-DNMUGfkj.js";
const STATUS_ICONS = {
  Pending: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
  Processing: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-3 w-3" }),
  Shipped: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-3 w-3" }),
  Delivered: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-3 w-3" }),
  Cancelled: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-3 w-3" })
};
function StatusBadge({ status }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: `inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium border rounded-full ${getOrderStatusColor(status)}`,
      children: [
        STATUS_ICONS[status],
        status
      ]
    }
  );
}
function OrderRow({ order }) {
  const [expanded, setExpanded] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border", "data-ocid": "order-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setExpanded((v) => !v),
        className: "w-full text-left p-5 hover:bg-muted/30 transition-colors",
        "aria-expanded": expanded,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-muted flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-5 w-5 text-muted-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-sm font-semibold truncate", children: [
                "#",
                order.id.slice(0, 8).toUpperCase()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                formatDate(order.createdAt),
                " · ",
                order.items.length,
                " ",
                order.items.length === 1 ? "item" : "items"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 ml-14 sm:ml-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: order.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-sm", children: formatPrice(order.totalAmount) }),
            expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4 text-muted-foreground shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 text-muted-foreground shrink-0" })
          ] })
        ] })
      }
    ),
    expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border p-5 bg-background/50 space-y-3", children: [
      order.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center justify-between gap-4",
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
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-3 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground block mb-0.5", children: "Shipping to" }),
          order.shippingAddress.city,
          ", ",
          order.shippingAddress.state
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground block mb-0.5", children: "Order total" }),
          formatPrice(order.totalAmount)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground block mb-0.5", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: order.status })
        ] })
      ] }) })
    ] })
  ] });
}
function OrdersSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: ["a", "b", "c"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 w-full" }, k)) });
}
function Orders() {
  const { isLoginSuccess, login } = useInternetIdentity();
  const navigate = useNavigate();
  const { data: orders, isLoading } = useUserOrders();
  reactExports.useEffect(() => {
    if (!isLoginSuccess) {
      const t = setTimeout(() => {
        if (!isLoginSuccess) {
          void navigate({ to: "/" });
        }
      }, 1500);
      return () => clearTimeout(t);
    }
  }, [isLoginSuccess, navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-semibold tracking-tight", children: "My Orders" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-muted-foreground", children: "Track and manage your purchase history" })
    ] }),
    !isLoginSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border p-12 text-center",
        "data-ocid": "orders-auth-gate",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Package,
            {
              className: "h-12 w-12 text-muted-foreground mx-auto mb-4",
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-lg mb-2", children: "Sign in to view your orders" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "Keep track of your purchases and order history" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: login,
              className: "bg-primary text-primary-foreground hover:bg-primary/90",
              "data-ocid": "orders-login-btn",
              children: "Sign In"
            }
          )
        ]
      }
    ) : isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(OrdersSkeleton, {}) : !orders || orders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border p-16 text-center",
        "data-ocid": "orders-empty-state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ShoppingBag,
            {
              className: "h-12 w-12 text-muted-foreground mx-auto mb-4",
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-xl mb-2", children: "No orders yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "Looks like you haven't made any purchases. Start exploring our collection." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              asChild: true,
              className: "bg-primary text-primary-foreground hover:bg-primary/90",
              "data-ocid": "start-shopping-btn",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: "Start Shopping" })
            }
          )
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "orders-list", children: orders.map((order) => /* @__PURE__ */ jsxRuntimeExports.jsx(OrderRow, { order }, order.id)) })
  ] }) }) });
}
export {
  Orders as default
};
