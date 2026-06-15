import { j as jsxRuntimeExports, L as Link, r as reactExports } from "./index-JPd0Kotv.js";
import { c as createLucideIcon, L as Layout, B as Button, I as Input } from "./Layout-Qf_pvXOm.js";
import { u as ue } from "./index-D0mCjvVI.js";
import { g as getFeaturedProducts, P as ProductCard } from "./products-BQ8Eic1q.js";
import { m as motion } from "./proxy-BnR9WvD4.js";
import { A as ArrowRight, R as RefreshCw } from "./refresh-cw-CrIajCLR.js";
import { P as Package } from "./package-DDBylMvB.js";
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
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }],
  ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
  ["path", { d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22", key: "1ailkh" }],
  ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2", key: "km57vx" }],
  ["path", { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45", key: "os18l9" }]
];
const Shuffle = createLucideIcon("shuffle", __iconNode);
const CATEGORIES = [
  {
    slug: "women",
    label: "Women",
    tagline: "The Season's Edit",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop&crop=top"
  },
  {
    slug: "men",
    label: "Men",
    tagline: "Refined & Modern",
    image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&h=800&fit=crop&crop=top"
  },
  {
    slug: "kids",
    label: "Kids",
    tagline: "Soft & Playful",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&h=800&fit=crop&crop=top"
  },
  {
    slug: "accessories",
    label: "Accessories",
    tagline: "The Finishing Touch",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop"
  }
];
const FEATURES = [
  {
    icon: Package,
    title: "Free Shipping",
    desc: "Complimentary on all orders over $150."
  },
  {
    icon: RefreshCw,
    title: "Free Returns",
    desc: "30-day hassle-free returns, no questions asked."
  },
  {
    icon: Shield,
    title: "Secure Payment",
    desc: "SSL-encrypted checkout, every transaction."
  },
  {
    icon: Shuffle,
    title: "Easy Exchange",
    desc: "Swap sizes or colors with zero friction."
  }
];
function HeroSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "relative min-h-[96vh] flex items-end overflow-hidden bg-foreground",
      "aria-label": "Hero",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1800&h=1100&fit=crop&crop=top",
              alt: "",
              "aria-hidden": "true",
              className: "w-full h-full object-cover opacity-55"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/50 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 w-full container mx-auto px-6 lg:px-12 pb-20 lg:pb-28 pt-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.1 },
              className: "text-[10px] uppercase tracking-[0.4em] text-primary mb-6 font-semibold",
              children: "New Season · 2026 Collection"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h1,
            {
              initial: { opacity: 0, y: 40 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.2 },
              className: "font-display text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.92] text-background mb-8 tracking-tight",
              children: [
                "The New",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-light italic", children: "Minimalism" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.7, delay: 0.5 },
              className: "text-background/65 text-base md:text-lg leading-relaxed max-w-sm mb-10",
              children: "Curated pieces for the modern wardrobe. Timeless silhouettes, uncompromised quality."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.7 },
              className: "flex flex-wrap gap-3",
              "data-ocid": "hero-ctas",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    asChild: true,
                    className: "rounded-none px-8 h-12 text-[11px] uppercase tracking-[0.2em] font-semibold bg-primary text-primary-foreground hover:bg-primary/85 transition-smooth",
                    "data-ocid": "hero-cta-women",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$slug", params: { slug: "women" }, children: "Shop Women" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    asChild: true,
                    variant: "outline",
                    className: "rounded-none px-8 h-12 text-[11px] uppercase tracking-[0.2em] font-semibold border-background/40 text-background bg-transparent hover:bg-background hover:text-foreground transition-smooth",
                    "data-ocid": "hero-cta-men",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$slug", params: { slug: "men" }, children: "Explore Men" })
                  }
                )
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" })
      ]
    }
  );
}
function CategorySection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", "aria-labelledby": "category-heading", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "flex items-end justify-between mb-10",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.35em] text-primary mb-2.5 font-semibold", children: "Collections" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              id: "category-heading",
              className: "font-display text-3xl md:text-4xl font-semibold",
              children: "Shop by Category"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3", children: CATEGORIES.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: i * 0.1 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/category/$slug",
            params: { slug: cat.slug },
            className: "group relative block aspect-[2/3] overflow-hidden bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            "data-ocid": `category-card-${cat.slug}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: cat.image,
                  alt: cat.label,
                  className: "absolute inset-0 w-full h-full object-cover transition-zoom group-hover:scale-108",
                  loading: "lazy"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/15 to-transparent transition-smooth group-hover:from-foreground/95" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-4 md:p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-primary/90 font-medium mb-1", children: cat.tagline }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg md:text-2xl font-semibold text-background", children: cat.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-smooth", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.2em] text-primary font-medium", children: "Shop Now" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 text-primary" })
                ] })
              ] })
            ]
          }
        )
      },
      cat.slug
    )) })
  ] }) });
}
function FeaturedSection() {
  const products = getFeaturedProducts();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/30", "aria-labelledby": "featured-heading", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.35em] text-primary mb-2.5 font-semibold", children: "Just Arrived" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                id: "featured-heading",
                className: "font-display text-3xl md:text-4xl font-semibold",
                children: "New Arrivals"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              asChild: true,
              variant: "outline",
              className: "rounded-none px-6 h-10 text-[10px] uppercase tracking-[0.2em] font-medium self-start md:self-auto",
              "data-ocid": "view-all-arrivals",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/category/$slug", params: { slug: "women" }, children: [
                "View All",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-3.5 w-3.5" })
              ] })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5",
        "data-ocid": "featured-products",
        children: products.slice(0, 8).map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: i * 0.07 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product })
          },
          product.id
        ))
      }
    )
  ] }) });
}
function FeaturesSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-16 bg-background border-t border-border",
      "aria-labelledby": "features-heading",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 lg:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8",
          "data-ocid": "features-strip",
          children: FEATURES.map((f, i) => {
            const Icon = f.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: i * 0.1 },
                className: "flex flex-col items-center text-center gap-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 border border-primary/25 flex items-center justify-center bg-primary/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm font-semibold mb-1.5", children: f.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: f.desc })
                  ] })
                ]
              },
              f.title
            );
          })
        }
      ) })
    }
  );
}
function EditorialBanner() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-0 bg-background", "aria-label": "Editorial", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 lg:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.98 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true },
      transition: { duration: 0.7 },
      className: "relative overflow-hidden aspect-[16/6] min-h-[200px]",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=525&fit=crop&crop=center",
            alt: "New season editorial",
            className: "w-full h-full object-cover",
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/30 to-transparent flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 md:px-16 max-w-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.35em] text-primary font-semibold mb-3", children: "Limited Edition" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl md:text-4xl font-semibold text-background leading-tight mb-4", children: [
            "The Autumn",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Essentials"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              asChild: true,
              className: "rounded-none px-6 h-10 text-[10px] uppercase tracking-[0.2em] font-semibold bg-primary text-primary-foreground hover:bg-primary/85",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$slug", params: { slug: "women" }, children: "Shop the Edit" })
            }
          )
        ] }) })
      ]
    }
  ) }) });
}
function NewsletterSection() {
  const [email, setEmail] = reactExports.useState("");
  const [submitted, setSubmitted] = reactExports.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    ue.success("You're subscribed!", {
      description: "Watch for exclusive offers and new arrivals.",
      duration: 5e3
    });
    setEmail("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-24 bg-foreground",
      "aria-labelledby": "newsletter-heading",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 lg:px-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.7 },
          className: "max-w-lg mx-auto",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.35em] text-primary mb-4 font-semibold", children: "Stay Connected" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                id: "newsletter-heading",
                className: "font-display text-3xl md:text-4xl font-semibold text-background mb-4",
                children: "The Insider Edit"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-background/55 text-sm leading-relaxed mb-8 max-w-sm mx-auto", children: "First access to new arrivals, exclusive offers, and style inspiration — straight to your inbox." }),
            submitted ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary text-sm font-medium py-4", children: "✓ Thank you for subscribing!" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "form",
              {
                onSubmit: handleSubmit,
                className: "flex gap-0 max-w-sm mx-auto",
                "data-ocid": "newsletter-form",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "email",
                      placeholder: "Your email address",
                      value: email,
                      onChange: (e) => setEmail(e.target.value),
                      required: true,
                      className: "rounded-none border-background/20 bg-background/10 text-background placeholder:text-background/35 focus-visible:ring-primary flex-1 h-11",
                      "aria-label": "Email address for newsletter",
                      "data-ocid": "newsletter-email"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "submit",
                      className: "rounded-none px-6 h-11 bg-primary text-primary-foreground hover:bg-primary/85 uppercase tracking-[0.2em] text-[10px] font-semibold shrink-0",
                      "data-ocid": "newsletter-submit",
                      children: "Join"
                    }
                  )
                ]
              }
            )
          ]
        }
      ) })
    }
  );
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CategorySection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EditorialBanner, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NewsletterSection, {})
  ] });
}
export {
  Home as default
};
