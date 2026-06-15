import { j as jsxRuntimeExports, c as cn, a as useInternetIdentity, r as reactExports, L as Link, f as formatPrice, S as Skeleton, d as formatDate, g as getOrderStatusColor } from "./index-JPd0Kotv.js";
import { c as createLucideIcon, L as Layout, m as ShoppingBag, B as Button, g as Badge, q as Search, I as Input } from "./Layout-Qf_pvXOm.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BjF3McBz.js";
import { u as ue } from "./index-D0mCjvVI.js";
import { h as useAllOrders, i as useUpdateOrderStatus } from "./useBackend-BO6-JLDS.js";
import { P as Package } from "./package-DDBylMvB.js";
import { C as ChevronUp } from "./chevron-up-B1BAWzoo.js";
import { C as ChevronDown } from "./chevron-down-DFD-qTqc.js";
import "./index-tHrD-0g7.js";
import "./index-CY9yFxAE.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
];
const DollarSign = createLucideIcon("dollar-sign", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
];
const Timer = createLucideIcon("timer", __iconNode);
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "table",
        {
          "data-slot": "table",
          className: cn("w-full caption-bottom text-sm", className),
          ...props
        }
      )
    }
  );
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      ),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
const STATUS_OPTIONS = [
  "Pending",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled"
];
const STATUS_FILTERS = ["All", ...STATUS_OPTIONS];
const SKEL_ROWS = ["sk1", "sk2", "sk3", "sk4", "sk5"];
const SKEL_COLS = ["c1", "c2", "c3", "c4", "c5", "c6", "c7"];
function truncatePrincipal(id) {
  if (id.length <= 12) return id;
  return `${id.slice(0, 6)}…${id.slice(-5)}`;
}
function StatCard({
  icon: Icon,
  label,
  value,
  sub
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-sm p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest font-semibold text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-sm bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-primary" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-semibold", children: value }),
    sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: sub })
  ] });
}
function OrderDetailRow({ order }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/30 border-t border-border px-4 py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-3", children: "Items" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: order.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex justify-between text-sm bg-background border border-border rounded-sm px-3 py-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium truncate", children: item.productName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                "Size: ",
                item.size,
                " · Color: ",
                item.color,
                " · Qty:",
                " ",
                item.quantity
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium ml-4 shrink-0", children: formatPrice(item.price * item.quantity) })
          ]
        },
        `${item.productId}-${item.size}-${item.color}`
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-3", children: "Shipping Address" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("address", { className: "text-sm text-muted-foreground not-italic bg-background border border-border rounded-sm px-3 py-2 leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: order.shippingAddress.fullName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: order.shippingAddress.addressLine1 }),
        order.shippingAddress.addressLine2 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: order.shippingAddress.addressLine2 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          order.shippingAddress.city,
          ", ",
          order.shippingAddress.state,
          " ",
          order.shippingAddress.postalCode
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: order.shippingAddress.country })
      ] })
    ] })
  ] }) });
}
function OrderRow({ order }) {
  const [expanded, setExpanded] = reactExports.useState(false);
  const [selectedStatus, setSelectedStatus] = reactExports.useState(
    order.status
  );
  const updateStatus = useUpdateOrderStatus();
  const handleUpdate = async () => {
    if (selectedStatus === order.status) {
      ue.info("Status is already set to this value.");
      return;
    }
    try {
      const res = await updateStatus.mutateAsync({
        orderId: order.id,
        status: selectedStatus
      });
      if (res && "err" in res && res.err) {
        ue.error(`Failed to update: ${res.err}`);
      } else {
        ue.success(
          `Order ${order.id.slice(0, 8)}… updated to ${selectedStatus}`
        );
      }
    } catch {
      ue.error("Failed to update order status. Please try again.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      TableRow,
      {
        className: "hover:bg-muted/30 transition-colors",
        "data-ocid": `order-row-${order.id}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setExpanded((v) => !v),
              className: "flex items-center gap-1.5 hover:text-foreground transition-colors",
              "aria-label": expanded ? "Collapse order" : "Expand order",
              children: [
                expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-3.5 w-3.5 shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5 shrink-0" }),
                order.id.slice(0, 12),
                "…"
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs text-muted-foreground", children: truncatePrincipal(order.userId) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm", children: formatDate(order.createdAt) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-sm tabular-nums", children: order.items.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-sm font-medium tabular-nums", children: formatPrice(order.totalAmount) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: cn(
                "inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-medium border",
                getOrderStatusColor(order.status)
              ),
              children: order.status
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: selectedStatus,
                onValueChange: (v) => setSelectedStatus(v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "h-8 text-xs w-32",
                      "data-ocid": `status-select-${order.id}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: STATUS_OPTIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, className: "text-xs", children: s }, s)) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                onClick: handleUpdate,
                disabled: updateStatus.isPending || selectedStatus === order.status,
                className: "h-8 text-xs bg-primary text-primary-foreground hover:bg-primary/90 px-3",
                "data-ocid": `status-update-${order.id}`,
                children: updateStatus.isPending ? "…" : "Update"
              }
            )
          ] }) })
        ]
      }
    ),
    expanded && /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 7, className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OrderDetailRow, { order }) }) })
  ] });
}
function AdminPage() {
  const { isLoginSuccess } = useInternetIdentity();
  const { data: orders = [], isLoading } = useAllOrders();
  const [statusFilter, setStatusFilter] = reactExports.useState("All");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  if (!isLoginSuccess) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[60vh] flex flex-col items-center justify-center text-center px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-8 w-8 text-muted-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold", children: "Admin Access Required" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-sm", children: "You must be signed in with an admin account to access this panel." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "mt-8 bg-primary text-primary-foreground hover:bg-primary/90", children: "Back to Store" }) })
    ] }) });
  }
  const typedOrders = orders;
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  const revenueToday = typedOrders.filter((o) => o.createdAt >= today.getTime()).reduce((acc, o) => acc + o.totalAmount, 0);
  const pendingCount = typedOrders.filter((o) => o.status === "Pending").length;
  const filtered = typedOrders.filter((order) => {
    const matchesStatus = statusFilter === "All" || order.status === statusFilter;
    const matchesSearch = !searchQuery.trim() || order.id.toLowerCase().includes(searchQuery.toLowerCase()) || order.userId.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-1", children: "Admin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-semibold tracking-tight", children: "Order Management" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Badge,
        {
          variant: "outline",
          className: "border-primary text-primary self-start",
          children: "Admin Panel"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10",
        "data-ocid": "admin-stats",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: ShoppingBag,
              label: "Total Orders",
              value: typedOrders.length,
              sub: "All time"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: Timer,
              label: "Pending",
              value: pendingCount,
              sub: "Awaiting fulfillment"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: DollarSign,
              label: "Revenue Today",
              value: formatPrice(revenueToday),
              sub: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric"
              })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: Package,
              label: "Total Products",
              value: "16+",
              sub: "In catalog"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col sm:flex-row gap-4 mb-6",
        "data-ocid": "admin-filters",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: STATUS_FILTERS.map((s) => {
            const count = s === "All" ? typedOrders.length : typedOrders.filter((o) => o.status === s).length;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setStatusFilter(s),
                className: cn(
                  "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-sm border transition-colors",
                  statusFilter === s ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                ),
                "data-ocid": `filter-${s.toLowerCase()}`,
                children: [
                  s,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: cn(
                        "text-[10px] font-bold",
                        statusFilter === s ? "text-primary-foreground/70" : "text-muted-foreground"
                      ),
                      children: count
                    }
                  )
                ]
              },
              s
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative sm:ml-auto sm:w-64", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                placeholder: "Search by order ID...",
                className: "pl-8 h-9 text-sm",
                "data-ocid": "admin-search"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-sm overflow-hidden",
        "data-ocid": "orders-table",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/40 hover:bg-muted/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs uppercase tracking-widest font-semibold w-36", children: "Order ID" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs uppercase tracking-widest font-semibold", children: "Customer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs uppercase tracking-widest font-semibold", children: "Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs uppercase tracking-widest font-semibold text-right", children: "Items" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs uppercase tracking-widest font-semibold text-right", children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs uppercase tracking-widest font-semibold", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs uppercase tracking-widest font-semibold", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: isLoading ? SKEL_ROWS.map((rowId) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: SKEL_COLS.map((colId) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }) }, colId)) }, rowId)) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TableCell,
              {
                colSpan: 7,
                className: "text-center py-16 text-muted-foreground",
                "data-ocid": "orders-empty",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-10 w-10 mx-auto mb-3 text-muted-foreground/40" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "No orders found" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: searchQuery || statusFilter !== "All" ? "Try adjusting your filters." : "Orders will appear here once customers start placing them." })
                ]
              }
            ) }) : filtered.map((order) => /* @__PURE__ */ jsxRuntimeExports.jsx(OrderRow, { order }, order.id)) })
          ] }) }),
          filtered.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border px-5 py-3 text-xs text-muted-foreground flex items-center justify-between bg-muted/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Showing ",
              filtered.length,
              " of ",
              typedOrders.length,
              " order",
              typedOrders.length !== 1 ? "s" : ""
            ] }),
            statusFilter !== "All" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setStatusFilter("All"),
                className: "text-primary hover:underline underline-offset-2",
                children: "Clear filter"
              }
            )
          ] })
        ]
      }
    )
  ] }) });
}
export {
  AdminPage as default
};
