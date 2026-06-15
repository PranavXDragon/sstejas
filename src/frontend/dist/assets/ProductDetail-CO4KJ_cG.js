import { u as useParams, j as jsxRuntimeExports, L as Link, r as reactExports, c as cn, f as formatPrice } from "./index-BvuKUqlt.js";
import { c as createLucideIcon, L as Layout, g as Badge, k as useCartStore, l as useWishlistStore, B as Button, m as ShoppingBag, H as Heart } from "./Layout-BIyE8-ys.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-DLVDYaaT.js";
import { u as ue } from "./index-S4DVFX4V.js";
import { b as getProductById, a as getProductsByCategory, P as ProductCard, S as Star } from "./products-DHZrrRwK.js";
import { u as useWishlist, a as useAddToWishlist, b as useRemoveFromWishlist } from "./useBackend-CUcdyc1t.js";
import { M as Minus, P as Plus } from "./plus-CdRAIYkI.js";
import "./index-BRqgmTUH.js";
import "./index-D5cAh1Um.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
];
const ZoomIn = createLucideIcon("zoom-in", __iconNode);
function StarRating({ rating, count }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: [1, 2, 3, 4, 5].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Star,
      {
        className: cn(
          "h-3.5 w-3.5",
          n <= Math.round(rating) ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
        )
      },
      `star-${n}`
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
      rating.toFixed(1),
      " (",
      count,
      " reviews)"
    ] })
  ] });
}
function ImageGallery({ product }) {
  const allImages = product.images.length >= 2 ? product.images : [product.images[0], product.images[0]];
  const [activeIdx, setActiveIdx] = reactExports.useState(0);
  const [zoomed, setZoomed] = reactExports.useState(false);
  const [mousePos, setMousePos] = reactExports.useState({ x: 50, y: 50 });
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * 100;
    const y = (e.clientY - rect.top) / rect.height * 100;
    setMousePos({ x, y });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col-reverse md:flex-row gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex md:flex-col gap-2 overflow-x-auto md:overflow-visible", children: allImages.slice(0, 4).map((src) => {
      const imgIdx = allImages.indexOf(src);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setActiveIdx(imgIdx),
          className: cn(
            "shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors",
            activeIdx === imgIdx ? "border-primary" : "border-transparent hover:border-border"
          ),
          "aria-label": `View image ${imgIdx + 1}`,
          "data-ocid": "thumbnail-btn",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src,
              alt: `${product.name} view ${imgIdx + 1}`,
              className: "w-full h-full object-cover",
              loading: "lazy"
            }
          )
        },
        src
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative flex-1 overflow-hidden bg-muted cursor-zoom-in aspect-[3/4] md:aspect-auto md:max-h-[600px]",
        onMouseEnter: () => setZoomed(true),
        onMouseLeave: () => setZoomed(false),
        onMouseMove: handleMouseMove,
        "data-ocid": "product-main-image",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: allImages[activeIdx],
              alt: product.name,
              className: cn(
                "w-full h-full object-cover transition-transform duration-300",
                zoomed ? "scale-150" : "scale-100"
              ),
              style: zoomed ? { transformOrigin: `${mousePos.x}% ${mousePos.y}%` } : void 0
            }
          ),
          !zoomed && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm rounded-full p-1.5 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomIn, { className: "h-4 w-4 text-muted-foreground" }) }),
          product.originalPrice > product.price && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute top-3 left-3 rounded-none text-[10px] uppercase tracking-widest bg-primary text-primary-foreground", children: "Sale" })
        ]
      }
    )
  ] });
}
function ProductInfo({ product }) {
  const addItem = useCartStore((s) => s.addItem);
  const { hasItem, toggle: toggleLocal } = useWishlistStore();
  const { data: backendWishlist } = useWishlist();
  const addToWishlist = useAddToWishlist();
  const removeFromWishlist = useRemoveFromWishlist();
  const isLocalWishlisted = hasItem(product.id);
  const isBackendWishlisted = (backendWishlist == null ? void 0 : backendWishlist.includes(product.id)) ?? false;
  const isWishlisted = isLocalWishlisted || isBackendWishlisted;
  const [selectedSize, setSelectedSize] = reactExports.useState(null);
  const [selectedColor, setSelectedColor] = reactExports.useState(
    product.colors[0] ?? "Default"
  );
  const [quantity, setQuantity] = reactExports.useState(1);
  const [sizeError, setSizeError] = reactExports.useState(false);
  const isOnSale = product.originalPrice > product.price;
  const colorMap = {
    Black: "#1A1A1A",
    White: "#F5F5F5",
    Cream: "#FFFDD0",
    Beige: "#D4C5A9",
    Navy: "#1B2A4A",
    Camel: "#C19A6B",
    Taupe: "#8B7D6B",
    Ivory: "#FFFFF0",
    Charcoal: "#36454F",
    Sand: "#C2B280",
    Olive: "#808000",
    Blush: "#FFB6C1",
    Stone: "#928E85",
    Rust: "#B7410E",
    Forest: "#228B22",
    Champagne: "#F7E7CE",
    "Dusty Rose": "#DCAE96",
    "Dusty Blue": "#6E8EAD",
    Oatmeal: "#E8DCC8",
    Khaki: "#C3B091",
    Burgundy: "#800020",
    "Sky Blue": "#87CEEB",
    "Sage Green": "#B2AC88",
    "Blush Pink": "#FFB6C1",
    "Heather Grey": "#B6B8B4",
    Cobalt: "#0047AB",
    "Burnt Orange": "#CC5500",
    "Moss Green": "#8A9A5B",
    Tan: "#D2B48C",
    Cognac: "#9A463D"
  };
  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      ue.error("Please select a size");
      return;
    }
    setSizeError(false);
    addItem(product, quantity, selectedSize, selectedColor);
    ue.success(`${product.name} added to cart`, {
      description: `Size: ${selectedSize} · Color: ${selectedColor} · Qty: ${quantity}`,
      duration: 3e3
    });
  };
  const handleWishlist = () => {
    toggleLocal(product.id);
    if (isWishlisted) {
      removeFromWishlist.mutate(product.id);
      ue("Removed from wishlist", { icon: "💔", duration: 2e3 });
    } else {
      addToWishlist.mutate(product.id);
      ue("Added to wishlist", { icon: "❤️", duration: 2e3 });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-1.5 text-xs text-muted-foreground uppercase tracking-widest", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "Home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/category/$slug",
          params: { slug: product.category },
          className: "hover:text-foreground transition-colors capitalize",
          children: product.category
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground truncate", children: product.name })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl md:text-3xl font-semibold leading-tight tracking-tight", children: product.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3 mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-semibold text-primary", children: formatPrice(product.price) }),
        isOnSale && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base text-muted-foreground line-through", children: formatPrice(product.originalPrice) }),
        isOnSale && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-primary", children: [
          "Save",
          " ",
          Math.round((1 - product.price / product.originalPrice) * 100),
          "%"
        ] })
      ] })
    ] }),
    product.reviewCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: product.rating, count: product.reviewCount }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: product.inStock ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Badge,
      {
        variant: "secondary",
        className: "rounded-none text-[10px] uppercase tracking-widest bg-green-50 text-green-700 border-green-200 border",
        children: "In Stock"
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      Badge,
      {
        variant: "secondary",
        className: "rounded-none text-[10px] uppercase tracking-widest bg-muted text-muted-foreground",
        children: "Out of Stock"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-border" }),
    product.colors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-medium uppercase tracking-widest mb-2.5", children: [
        "Colour:",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground normal-case tracking-normal font-normal", children: selectedColor })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: product.colors.map((color) => {
        const hex = colorMap[color];
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setSelectedColor(color),
            title: color,
            "aria-label": `Select color ${color}`,
            "data-ocid": "color-swatch",
            className: cn(
              "w-7 h-7 rounded-full border-2 transition-all",
              selectedColor === color ? "border-primary ring-2 ring-primary ring-offset-2" : "border-border hover:border-foreground"
            ),
            style: hex ? { backgroundColor: hex } : void 0,
            children: !hex && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] leading-none truncate px-0.5", children: color })
          },
          color
        );
      }) })
    ] }),
    product.sizes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "p",
          {
            className: cn(
              "text-xs font-medium uppercase tracking-widest",
              sizeError && "text-destructive"
            ),
            children: [
              "Size:",
              " ",
              selectedSize && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground normal-case tracking-normal font-normal", children: selectedSize }),
              sizeError && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-destructive normal-case tracking-normal font-normal", children: [
                " ",
                "— Please select a size"
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors",
            children: "Size guide"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", "data-ocid": "size-grid", children: product.sizes.map((size) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            setSelectedSize(size);
            setSizeError(false);
          },
          "data-ocid": "size-btn",
          className: cn(
            "min-w-[44px] h-11 px-3 border text-sm font-medium transition-all",
            selectedSize === size ? "border-primary bg-primary/5 text-primary" : "border-border hover:border-foreground",
            !product.inStock && "opacity-40 cursor-not-allowed line-through"
          ),
          disabled: !product.inStock,
          children: size
        },
        size
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-widest mb-2.5", children: "Quantity" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "inline-flex items-center border border-border",
          "data-ocid": "quantity-selector",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setQuantity((q) => Math.max(1, q - 1)),
                className: "w-11 h-11 flex items-center justify-center hover:bg-muted transition-colors",
                "aria-label": "Decrease quantity",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-12 text-center text-sm font-medium tabular-nums", children: quantity }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setQuantity((q) => Math.min(10, q + 1)),
                className: "w-11 h-11 flex items-center justify-center hover:bg-muted transition-colors",
                "aria-label": "Increase quantity",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" })
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: handleAddToCart,
          disabled: !product.inStock,
          className: "flex-1 h-12 rounded-none bg-foreground text-background hover:bg-primary hover:text-primary-foreground text-xs uppercase tracking-widest font-medium transition-colors",
          "data-ocid": "add-to-cart-btn",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4 mr-2" }),
            product.inStock ? "Add to Cart" : "Out of Stock"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          variant: "outline",
          onClick: handleWishlist,
          className: "w-12 h-12 rounded-none border-border p-0",
          "aria-label": isWishlisted ? "Remove from wishlist" : "Add to wishlist",
          "data-ocid": "wishlist-btn",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Heart,
            {
              className: cn(
                "h-5 w-5 transition-colors",
                isWishlisted ? "fill-primary text-primary" : "text-foreground"
              )
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border p-4 space-y-2", children: [
      "Free shipping on orders over $150",
      "Free returns within 30 days",
      "Secure checkout"
    ].map((text) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "p",
      {
        className: "text-xs text-muted-foreground flex items-center gap-2",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 rounded-full bg-primary inline-block" }),
          text
        ]
      },
      text
    )) })
  ] });
}
function ProductTabs({ product }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "description", className: "mt-10 md:mt-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { className: "rounded-none border-b border-border bg-transparent h-auto p-0 w-full justify-start gap-0", children: ["description", "details", "delivery"].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      TabsTrigger,
      {
        value: tab,
        className: "rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-5 py-3 text-xs uppercase tracking-widest font-medium",
        children: tab === "description" ? "Description" : tab === "details" ? "Details & Care" : "Delivery & Returns"
      },
      tab
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "description", className: "mt-6 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: product.description }),
      product.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-4", children: product.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "text-[10px] uppercase tracking-widest border border-border px-2.5 py-1 text-muted-foreground",
          children: tag
        },
        tag
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "details", className: "mt-6 max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-x-8 gap-y-2 border-t border-border", children: [
        ["Category", product.category],
        ["Available Sizes", product.sizes.join(", ")],
        ["Colours", product.colors.join(", ")],
        ["SKU", product.id.substring(0, 8).toUpperCase()]
      ].map(([label, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contents", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-2 border-b border-border text-xs uppercase tracking-widest text-muted-foreground", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-2 border-b border-border text-sm", children: value })
      ] }, label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 bg-muted/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-widest mb-2", children: "Care Instructions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Machine wash at 30°C with similar colours" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Do not bleach or tumble dry" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Iron on low heat if needed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Dry clean recommended for best results" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "delivery", className: "mt-6 max-w-2xl space-y-4", children: [
      {
        title: "Standard Delivery",
        desc: "3–5 business days · Free on orders over $150, otherwise $9.99"
      },
      {
        title: "Express Delivery",
        desc: "1–2 business days · $14.99"
      },
      {
        title: "Free Returns",
        desc: "Return within 30 days for a full refund. Items must be unworn with original tags."
      }
    ].map(({ title, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-primary pl-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: desc })
    ] }, title)) })
  ] });
}
function RelatedProducts({
  category,
  excludeId
}) {
  const related = getProductsByCategory(category).filter((p) => p.id !== excludeId).slice(0, 4);
  if (!related.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 border-t border-border pt-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold mb-6 uppercase tracking-widest text-sm", children: "You May Also Like" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8", children: related.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) })
  ] });
}
function ProductDetail() {
  const { id } = useParams({ from: "/product/$id" });
  const product = getProductById(id);
  if (!product) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[60vh] flex flex-col items-center justify-center text-center px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-8xl font-display font-semibold text-muted-foreground/20", children: "404" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-2xl font-display font-semibold", children: "Product Not Found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground max-w-sm text-sm", children: "This product doesn't exist or may have been removed." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/category/$slug",
          params: { slug: "women" },
          className: "mt-8 inline-flex items-center justify-center px-6 py-3 bg-foreground text-background text-xs uppercase tracking-widest font-medium hover:bg-primary hover:text-primary-foreground transition-colors",
          children: "Browse Collections"
        }
      )
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8 md:py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ImageGallery, { product }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProductInfo, { product })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductTabs, { product }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RelatedProducts, { category: product.category, excludeId: product.id })
  ] }) });
}
export {
  ProductDetail as default
};
