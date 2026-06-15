import { j as jsxRuntimeExports, c as cn, r as reactExports, L as Link } from "./index-JPd0Kotv.js";
import { c as createLucideIcon, L as Layout, B as Button, I as Input } from "./Layout-Qf_pvXOm.js";
import { L as Label } from "./label-2mqRsM2H.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BjF3McBz.js";
import { u as ue } from "./index-D0mCjvVI.js";
import { g as useSubmitContactMessage } from "./useBackend-BO6-JLDS.js";
import { C as Clock } from "./clock-DNMUGfkj.js";
import "./index-B66CLKM9.js";
import "./index-tHrD-0g7.js";
import "./index-CY9yFxAE.js";
import "./chevron-down-DFD-qTqc.js";
import "./chevron-up-B1BAWzoo.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
];
const MessageSquare = createLucideIcon("message-square", __iconNode$1);
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
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode);
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
const CATEGORIES = [
  { value: "order", label: "Order Issue" },
  { value: "return", label: "Returns & Exchanges" },
  { value: "product", label: "Product Question" },
  { value: "other", label: "General Inquiry" }
];
const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "support@aethera.com",
    detail: "We respond within 24 hours"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (800) 555-0190",
    detail: "Monday–Friday, 9am–6pm ET"
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Fri: 9am–6pm ET",
    detail: "Sat: 10am–4pm ET"
  }
];
const SOCIAL_LINKS = [
  { name: "Instagram", href: "#", handle: "@aethera" },
  { name: "Pinterest", href: "#", handle: "@aethera" },
  { name: "TikTok", href: "#", handle: "@aethera" }
];
function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.category) errors.category = "Please select a category.";
  if (!form.subject.trim()) errors.subject = "Subject is required.";
  if (!form.message.trim()) {
    errors.message = "Message is required.";
  } else if (form.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }
  return errors;
}
const EMPTY_FORM = {
  name: "",
  email: "",
  category: "",
  subject: "",
  message: ""
};
function ContactPage() {
  const [form, setForm] = reactExports.useState(EMPTY_FORM);
  const [errors, setErrors] = reactExports.useState({});
  const [submitted, setSubmitted] = reactExports.useState(false);
  const submitMessage = useSubmitContactMessage();
  const setField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: void 0 }));
  };
  const blurValidate = (field) => {
    const errs = validate(form);
    if (errs[field]) setErrors((p) => ({ ...p, [field]: errs[field] }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    try {
      const res = await submitMessage.mutateAsync({
        name: form.name,
        email: form.email,
        category: form.category,
        message: `Subject: ${form.subject}

${form.message}`
      });
      if (res && "err" in res && res.err) {
        ue.error("Failed to send message. Please try again.");
      } else {
        setSubmitted(true);
        ue.success("Message sent! We'll be in touch within 24 hours.");
      }
    } catch {
      ue.error("Something went wrong. Please try again.");
    }
  };
  const handleChatClick = () => {
    ue.info(
      "Chat support coming soon. In the meantime, email us at support@aethera.com"
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/40 border-b border-border py-14 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3", children: "Support" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl font-semibold tracking-tight", children: "Get in Touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg max-w-md mx-auto", children: "Have a question or need help? Our team is happy to assist." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto max-w-5xl px-4 py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-primary/30 rounded-sm p-10 text-center",
          "data-ocid": "contact-success",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-7 w-7 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold", children: "Message Received" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-muted-foreground", children: [
              "Thanks, ",
              form.name,
              "! We've received your message and will reply to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: form.email }),
              " within 24 hours."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "mt-8 bg-primary text-primary-foreground hover:bg-primary/90",
                onClick: () => {
                  setSubmitted(false);
                  setForm(EMPTY_FORM);
                },
                children: "Send Another Message"
              }
            )
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          noValidate: true,
          className: "space-y-6",
          "data-ocid": "contact-form",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Label,
                  {
                    htmlFor: "contact-name",
                    className: "text-xs uppercase tracking-widest font-semibold",
                    children: [
                      "Full Name ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "contact-name",
                    value: form.name,
                    onChange: (e) => setField("name", e.target.value),
                    onBlur: () => blurValidate("name"),
                    placeholder: "Your full name",
                    className: errors.name ? "border-destructive focus-visible:ring-destructive" : "",
                    "data-ocid": "contact-name"
                  }
                ),
                errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: errors.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Label,
                  {
                    htmlFor: "contact-email",
                    className: "text-xs uppercase tracking-widest font-semibold",
                    children: [
                      "Email Address ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "contact-email",
                    type: "email",
                    value: form.email,
                    onChange: (e) => setField("email", e.target.value),
                    onBlur: () => blurValidate("email"),
                    placeholder: "you@example.com",
                    className: errors.email ? "border-destructive focus-visible:ring-destructive" : "",
                    "data-ocid": "contact-email"
                  }
                ),
                errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: errors.email })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs uppercase tracking-widest font-semibold", children: [
                "Category ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.category,
                  onValueChange: (v) => setField("category", v),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        className: errors.category ? "border-destructive" : "",
                        "data-ocid": "contact-category",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select a category" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: cat.value, children: cat.label }, cat.value)) })
                  ]
                }
              ),
              errors.category && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: errors.category })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Label,
                {
                  htmlFor: "contact-subject",
                  className: "text-xs uppercase tracking-widest font-semibold",
                  children: [
                    "Subject ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "contact-subject",
                  value: form.subject,
                  onChange: (e) => setField("subject", e.target.value),
                  onBlur: () => blurValidate("subject"),
                  placeholder: "Brief description of your inquiry",
                  className: errors.subject ? "border-destructive focus-visible:ring-destructive" : "",
                  "data-ocid": "contact-subject"
                }
              ),
              errors.subject && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: errors.subject })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Label,
                {
                  htmlFor: "contact-message",
                  className: "text-xs uppercase tracking-widest font-semibold",
                  children: [
                    "Message ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "contact-message",
                  value: form.message,
                  onChange: (e) => setField("message", e.target.value),
                  onBlur: () => blurValidate("message"),
                  placeholder: "Please describe your issue or question in detail (minimum 20 characters)...",
                  rows: 6,
                  className: errors.message ? "border-destructive focus-visible:ring-destructive resize-none" : "resize-none",
                  "data-ocid": "contact-message"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                errors.message ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: errors.message }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground ml-auto", children: [
                  form.message.length,
                  " chars"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                disabled: submitMessage.isPending,
                className: "w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-10 h-11",
                "data-ocid": "contact-submit",
                children: submitMessage.isPending ? "Sending…" : "Send Message"
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-8", "data-ocid": "contact-sidebar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-5 pb-3 border-b border-border", children: "Contact Information" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: CONTACT_INFO.map((info) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-sm bg-muted flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(info.icon, { className: "h-4 w-4 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground font-medium", children: info.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium mt-0.5", children: info.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: info.detail })
            ] })
          ] }, info.label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-5 pb-3 border-b border-border", children: "Follow Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: SOCIAL_LINKS.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: link.href,
              className: "flex items-center gap-3 text-sm hover:text-primary transition-colors group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground group-hover:text-primary transition-colors font-medium w-20", children: link.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: link.handle })
              ]
            },
            link.name
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 border border-border rounded-sm p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-2", children: "Quick Help" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed", children: [
            "For order tracking, visit",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/orders",
                className: "text-primary underline underline-offset-2 hover:no-underline",
                children: "My Orders"
              }
            ),
            ". For returns, see our",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/returns",
                className: "text-primary underline underline-offset-2 hover:no-underline",
                children: "Returns Policy"
              }
            ),
            "."
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: handleChatClick,
        className: "fixed bottom-6 right-6 flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-smooth z-50 font-medium text-sm",
        "aria-label": "Chat with us",
        "data-ocid": "chat-trigger",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4" }),
          "Chat with us"
        ]
      }
    )
  ] });
}
export {
  ContactPage as default
};
