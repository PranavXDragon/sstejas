import { j as jsxRuntimeExports, L as Link } from "./index-JPd0Kotv.js";
import { c as createLucideIcon, L as Layout, B as Button } from "./Layout-Qf_pvXOm.js";
import { R as RefreshCw, A as ArrowRight } from "./refresh-cw-CrIajCLR.js";
import { T as Truck } from "./truck-D2Xigwhd.js";
import { C as Clock } from "./clock-DNMUGfkj.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m16 16 2 2 4-4", key: "gfu2re" }],
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]
];
const PackageCheck = createLucideIcon("package-check", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode$1);
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
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode);
const RETURN_STEPS = [
  {
    number: "01",
    icon: RotateCcw,
    title: "Initiate Online",
    description: "Log into your account, go to My Orders, and select the item(s) you'd like to return. Our system will generate a prepaid return label within minutes."
  },
  {
    number: "02",
    icon: PackageCheck,
    title: "Pack Your Items",
    description: "Fold items neatly and place them in their original packaging if possible. Ensure all tags are attached and the garments are unworn and unwashed."
  },
  {
    number: "03",
    icon: Truck,
    title: "Ship It Back",
    description: "Print your prepaid return label and attach it to your package. Drop it off at any UPS, FedEx, or USPS location. No cost to you."
  },
  {
    number: "04",
    icon: CircleCheck,
    title: "Refund Processed",
    description: "Once we receive and inspect your return (1–2 business days), your refund is issued within 5–10 business days to your original payment method."
  }
];
const NON_RETURNABLE = [
  "Final sale and clearance items (marked at checkout)",
  "Intimates, underwear, and hosiery",
  "Swimwear and bodysuits",
  "Items that have been worn, washed, or altered",
  "Items missing original tags or packaging",
  "Gift cards"
];
const REFUND_TIMELINE = [
  { step: "Item arrives at our warehouse", time: "Day 1–2" },
  { step: "Quality inspection completed", time: "Day 2–3" },
  { step: "Refund initiated to payment provider", time: "Day 3–5" },
  { step: "Funds appear in your account", time: "Day 5–10" }
];
function ReturnsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/40 border-b border-border py-14 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3", children: "Customer Care" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl font-semibold tracking-tight", children: "Returns & Exchanges" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg max-w-md mx-auto", children: "Shop with confidence. Free returns on all full-price items within 30 days." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-4xl px-4 py-14 space-y-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-sm bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-4 w-4 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold", children: "Our Return Policy" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
          {
            stat: "30 Days",
            label: "Return window",
            detail: "From date of delivery"
          },
          {
            stat: "Free",
            label: "Return shipping",
            detail: "Prepaid label provided"
          },
          {
            stat: "5–10 Days",
            label: "Refund timeline",
            detail: "After we receive the item"
          }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-sm p-6 text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-semibold text-primary", children: item.stat }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium mt-1", children: item.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: item.detail })
            ]
          },
          item.stat
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 bg-card border border-border rounded-sm p-6 text-sm text-muted-foreground leading-relaxed", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Items must be",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "unworn, unwashed, and in original condition" }),
          " ",
          "with all tags attached. Returns initiated after 30 days of delivery, or items not meeting condition requirements, may be declined."
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-sm bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-4 w-4 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold", children: "How to Return" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: RETURN_STEPS.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-sm p-6 relative overflow-hidden hover:border-primary/40 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4 font-display text-5xl font-bold text-muted/60 select-none leading-none", children: step.number }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-sm bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(step.icon, { className: "h-5 w-5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base mb-2", children: step.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: step.description }),
              i < RETURN_STEPS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 bg-background border border-border rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 text-muted-foreground" }) }) })
            ]
          },
          step.number
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-sm bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold", children: "Refund Timeline" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-sm overflow-hidden", children: REFUND_TIMELINE.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex items-center justify-between px-6 py-4 text-sm ${i < REFUND_TIMELINE.length - 1 ? "border-b border-border" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-primary", children: i + 1 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: row.step })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-medium text-xs shrink-0 ml-4", children: row.time })
            ]
          },
          row.step
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: "* Timelines are business days and may vary during peak periods. You will receive an email confirmation at each step." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-sm bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-4 w-4 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold", children: "Exchanges" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-sm p-6 space-y-4 text-sm text-muted-foreground leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Need a different size or color? Follow the same process as a return — just select",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: '"Exchange"' }),
            ' instead of "Refund" when initiating online.'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Choose your preferred replacement size or color and we'll ship it out as soon as your original item is received and inspected.",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Exchanges ship free of charge." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "If the item you want is out of stock, we'll automatically issue a refund and notify you by email." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-sm bg-destructive/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-destructive" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold", children: "Non-Returnable Items" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-sm p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4 leading-relaxed", children: "For hygiene and quality reasons, the following items cannot be returned or exchanged:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: NON_RETURNABLE.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-destructive shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: item })
          ] }, item)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          className: "bg-primary/5 border border-primary/20 rounded-sm p-8 text-center",
          "data-ocid": "returns-contact-cta",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: "Need Help with a Return?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground text-sm max-w-sm mx-auto", children: "Our customer care team is here to help. Reach out and we'll guide you through the process." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "mt-6 bg-primary text-primary-foreground hover:bg-primary/90 px-8",
                "data-ocid": "returns-contact-btn",
                children: "Contact Support"
              }
            ) })
          ]
        }
      )
    ] })
  ] });
}
export {
  ReturnsPage as default
};
