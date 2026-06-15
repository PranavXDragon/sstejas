import { j as jsxRuntimeExports, L as Link, c as cn, f as formatPrice } from "./index-BvuKUqlt.js";
import { c as createLucideIcon, k as useCartStore, l as useWishlistStore, g as Badge, H as Heart, B as Button, m as ShoppingBag } from "./Layout-BIyE8-ys.js";
import { u as ue } from "./index-S4DVFX4V.js";
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
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
function ProductCard({ product, className }) {
  const addItem = useCartStore((s) => s.addItem);
  const { hasItem, toggle } = useWishlistStore();
  const isWishlisted = hasItem(product.id);
  const isOnSale = product.originalPrice > product.price;
  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultSize = product.sizes[0] ?? "One Size";
    const defaultColor = product.colors[0] ?? "Default";
    addItem(product, 1, defaultSize, defaultColor);
    ue.success(`${product.name} added to cart`, {
      description: `${defaultSize} · ${defaultColor}`,
      duration: 3e3
    });
  };
  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(product.id);
    ue(isWishlisted ? "Removed from wishlist" : "Added to wishlist", {
      icon: isWishlisted ? "💔" : "❤️",
      duration: 2e3
    });
  };
  const primaryImage = product.images[0] ?? "/assets/images/placeholder.svg";
  const secondaryImage = product.images[1] ?? primaryImage;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/product/$id",
      params: { id: product.id },
      className: cn(
        "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className
      ),
      "data-ocid": "product-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-muted aspect-[3/4]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: primaryImage,
              alt: product.name,
              className: "absolute inset-0 w-full h-full object-cover transition-zoom group-hover:scale-105 group-hover:opacity-0",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: secondaryImage,
              alt: `${product.name} alternate view`,
              className: "absolute inset-0 w-full h-full object-cover transition-zoom scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-100",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 left-3 flex flex-col gap-1.5", children: [
            !product.inStock && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "secondary",
                className: "text-[10px] uppercase tracking-wide rounded-none px-2",
                children: "Sold Out"
              }
            ),
            isOnSale && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-[10px] uppercase tracking-wide rounded-none px-2 bg-primary text-primary-foreground", children: "Sale" }),
            product.featured && product.inStock && !isOnSale && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "secondary",
                className: "text-[10px] uppercase tracking-wide rounded-none px-2",
                children: "New"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handleWishlistToggle,
              className: cn(
                "absolute top-3 right-3 p-1.5 rounded-full bg-background/80 backdrop-blur-sm transition-all",
                "opacity-0 group-hover:opacity-100 hover:bg-background",
                isWishlisted && "opacity-100"
              ),
              "aria-label": isWishlisted ? "Remove from wishlist" : "Add to wishlist",
              "data-ocid": "wishlist-toggle",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Heart,
                {
                  className: cn(
                    "h-4 w-4 transition-colors",
                    isWishlisted ? "fill-primary text-primary" : "text-foreground"
                  )
                }
              )
            }
          ),
          product.inStock && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: handleQuickAdd,
              className: "w-full rounded-none h-10 bg-foreground text-background hover:bg-primary hover:text-primary-foreground text-xs uppercase tracking-widest font-medium transition-colors",
              "data-ocid": "quick-add",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-3.5 w-3.5 mr-2" }),
                "Quick Add"
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: product.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium leading-snug truncate mt-0.5 group-hover:text-primary transition-colors", children: product.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right shrink-0", children: isOnSale ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-primary", children: formatPrice(product.price) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground line-through", children: formatPrice(product.originalPrice) })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: formatPrice(product.price) }) })
          ] }),
          product.reviewCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 pt-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Star,
              {
                className: cn(
                  "h-2.5 w-2.5",
                  i < Math.round(product.rating) ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                )
              },
              `star-${i}-${product.id}`
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
              "(",
              product.reviewCount,
              ")"
            ] })
          ] }),
          product.sizes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1 pt-1", children: [
            product.sizes.slice(0, 4).map((size) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-[10px] text-muted-foreground border border-border px-1.5 py-0.5 rounded-sm",
                children: size
              },
              size
            )),
            product.sizes.length > 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
              "+",
              product.sizes.length - 4
            ] })
          ] })
        ] })
      ]
    }
  );
}
const STATIC_PRODUCTS = [
  // ── Women ──────────────────────────────────────────────────────────────────
  {
    id: "w001",
    name: "Silk Wrap Blouse",
    category: "women",
    price: 28500,
    originalPrice: 28500,
    description: "A fluid, cross-front blouse crafted from pure silk charmeuse. Drapes beautifully, transitions effortlessly from day to evening.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Ivory", "Black", "Dusty Rose"],
    images: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.8,
    reviewCount: 142,
    inStock: true,
    tags: ["silk", "blouse", "elegant", "new-arrival"],
    featured: true
  },
  {
    id: "w002",
    name: "Wide-Leg Tailored Trousers",
    category: "women",
    price: 32e3,
    originalPrice: 42e3,
    description: "High-waisted, wide-leg trousers with a clean front pleat. Made from a luxurious wool-blend fabric with a subtle drape.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Camel", "Charcoal", "Ivory"],
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.6,
    reviewCount: 98,
    inStock: true,
    tags: ["trousers", "tailored", "sale"],
    featured: true
  },
  {
    id: "w003",
    name: "Cashmere Ribbed Cardigan",
    category: "women",
    price: 48e3,
    originalPrice: 48e3,
    description: "A relaxed-fit cardigan knitted from 100% Grade-A cashmere. Timeless silhouette with mother-of-pearl buttons.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Oatmeal", "Dusty Blue", "Black"],
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.9,
    reviewCount: 211,
    inStock: true,
    tags: ["cashmere", "knitwear", "luxury"],
    featured: true
  },
  {
    id: "w004",
    name: "Midi Slip Dress",
    category: "women",
    price: 19500,
    originalPrice: 26500,
    description: "A satin-finish midi slip dress with adjustable spaghetti straps. Versatile enough to layer or wear solo.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Champagne", "Black", "Forest Green"],
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.5,
    reviewCount: 76,
    inStock: true,
    tags: ["dress", "satin", "sale"],
    featured: false
  },
  {
    id: "w005",
    name: "Structured Wool Coat",
    category: "women",
    price: 89e3,
    originalPrice: 89e3,
    description: "A double-breasted wool coat with a belted waist and notch lapels. The season's essential outer layer.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Camel", "Black"],
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.9,
    reviewCount: 184,
    inStock: true,
    tags: ["coat", "wool", "outerwear"],
    featured: true
  },
  {
    id: "w006",
    name: "Cashmere Turtleneck Sweater",
    category: "women",
    price: 19500,
    originalPrice: 19500,
    description: "A luxuriously soft turtleneck crafted from Grade-A cashmere. Relaxed fit, ribbed collar, cuffs, and hem for a polished finish.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Camel", "Slate Blue", "Black"],
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.9,
    reviewCount: 187,
    inStock: true,
    tags: ["cashmere", "turtleneck", "knitwear", "luxury"],
    featured: true
  },
  {
    id: "w007",
    name: "Wide-Leg Linen Trousers",
    category: "women",
    price: 16500,
    originalPrice: 16500,
    description: "Breathable wide-leg trousers in a relaxed linen blend. Elasticated waist, side pockets — effortlessly chic for warm days.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Natural", "White", "Sage", "Clay"],
    images: [
      "https://images.unsplash.com/photo-1594938298603-a2c9abe9d6f7?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.6,
    reviewCount: 112,
    inStock: true,
    tags: ["linen", "trousers", "summer", "relaxed"],
    featured: false
  },
  {
    id: "w008",
    name: "Floral Midi Skirt",
    category: "women",
    price: 14500,
    originalPrice: 19500,
    description: "A flowing midi skirt in a lightweight woven fabric with an allover floral print. Elasticated waistband for an easy, flattering fit.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blush Floral", "Navy Floral"],
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.7,
    reviewCount: 94,
    inStock: true,
    tags: ["skirt", "floral", "midi", "sale"],
    featured: false
  },
  {
    id: "w009",
    name: "Leather Biker Jacket",
    category: "women",
    price: 59500,
    originalPrice: 59500,
    description: "An iconic biker jacket in supple lambskin leather. Asymmetric zip, snap lapels, and quilted shoulder panels for a timeless edge.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Cognac"],
    images: [
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    tags: ["leather", "jacket", "biker", "outerwear"],
    featured: true
  },
  {
    id: "w010",
    name: "Pleated Satin Slip Dress",
    category: "women",
    price: 28500,
    originalPrice: 36e3,
    description: "A sculpted slip dress in liquid satin with fine pleating at the bodice. Thin straps, a delicate V-neck — made for evenings.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Champagne", "Midnight", "Blush"],
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.7,
    reviewCount: 121,
    inStock: true,
    tags: ["satin", "dress", "evening", "sale"],
    featured: false
  },
  // ── Men ────────────────────────────────────────────────────────────────────
  {
    id: "m001",
    name: "Oxford Button-Down Shirt",
    category: "men",
    price: 14500,
    originalPrice: 14500,
    description: "A classic Oxford shirt with a relaxed fit and single-button cuffs. Made from a breathable cotton-linen blend.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue", "Light Grey"],
    images: [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.7,
    reviewCount: 203,
    inStock: true,
    tags: ["shirt", "oxford", "classic"],
    featured: true
  },
  {
    id: "m002",
    name: "Slim-Fit Chinos",
    category: "men",
    price: 18500,
    originalPrice: 24e3,
    description: "Tailored slim-fit chinos in a stretch-cotton fabric. Clean front profile with a mid-rise waistband.",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Navy", "Khaki", "Olive"],
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.5,
    reviewCount: 119,
    inStock: true,
    tags: ["chinos", "slim-fit", "sale"],
    featured: false
  },
  {
    id: "m003",
    name: "Merino Crewneck Sweater",
    category: "men",
    price: 26500,
    originalPrice: 26500,
    description: "A fine-gauge merino wool crewneck with a slim silhouette. Exceptionally soft against the skin — ideal for layering.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Charcoal", "Burgundy", "Oatmeal"],
    images: [
      "https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.8,
    reviewCount: 167,
    inStock: true,
    tags: ["merino", "knitwear", "sweater"],
    featured: true
  },
  {
    id: "m004",
    name: "Harrington Jacket",
    category: "men",
    price: 39500,
    originalPrice: 39500,
    description: "A clean, minimal Harrington jacket in a water-repellent cotton shell. Classic checked lining, snap-button placket.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Khaki", "Navy", "Black"],
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.6,
    reviewCount: 88,
    inStock: true,
    tags: ["jacket", "outerwear", "casual"],
    featured: false
  },
  {
    id: "m005",
    name: "Tailored Suit Trousers",
    category: "men",
    price: 34e3,
    originalPrice: 44e3,
    description: "Slim-tapered suit trousers in an Italian wool blend. Flat-front, mid-rise — versatile for business or occasion.",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Charcoal", "Navy", "Black"],
    images: [
      "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.7,
    reviewCount: 92,
    inStock: true,
    tags: ["trousers", "tailored", "formal", "sale"],
    featured: true
  },
  {
    id: "m006",
    name: "Merino Wool Crewneck",
    category: "men",
    price: 22500,
    originalPrice: 22500,
    description: "A premium fine-knit crewneck in 100% extra-fine merino wool. Lightweight, itch-free, and exceptionally warm for its weight.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Forest Green", "Midnight Blue", "Oatmeal", "Burgundy"],
    images: [
      "https://images.unsplash.com/photo-1614975059251-992f11792b9f?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1608234807905-4466023792f5?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.8,
    reviewCount: 198,
    inStock: true,
    tags: ["merino", "crewneck", "knitwear", "premium"],
    featured: true
  },
  {
    id: "m007",
    name: "Slim Chino Trousers",
    category: "men",
    price: 13500,
    originalPrice: 17500,
    description: "Versatile slim-cut chinos in a brushed stretch-cotton twill. Clean silhouette, five-pocket styling — weekend to boardroom ready.",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Stone", "Navy", "Olive", "Tan"],
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.5,
    reviewCount: 143,
    inStock: true,
    tags: ["chinos", "trousers", "casual", "sale"],
    featured: false
  },
  {
    id: "m008",
    name: "Linen Blend Shirt",
    category: "men",
    price: 11500,
    originalPrice: 11500,
    description: "A summer-ready shirt in a breathable linen-cotton blend. Relaxed fit, button-down collar, single chest pocket.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Sky Blue", "Sand", "Sage"],
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.6,
    reviewCount: 164,
    inStock: true,
    tags: ["linen", "shirt", "summer", "casual"],
    featured: false
  },
  {
    id: "m009",
    name: "Leather Chelsea Boots",
    category: "men",
    price: 44500,
    originalPrice: 44500,
    description: "Sleek Chelsea boots in smooth full-grain leather. Elastic side panels, pull tabs, and a stacked leather heel.",
    sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"],
    colors: ["Black", "Dark Brown", "Tan"],
    images: [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop"
    ],
    rating: 4.9,
    reviewCount: 231,
    inStock: true,
    tags: ["chelsea", "boots", "leather", "footwear"],
    featured: true
  },
  {
    id: "m010",
    name: "Technical Bomber Jacket",
    category: "men",
    price: 34500,
    originalPrice: 34500,
    description: "A modern bomber in a water-resistant ripstop shell with a quilted satin lining. Rib-knit cuffs, zip pockets, contrast inner collar.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Olive", "Black", "Navy"],
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.7,
    reviewCount: 109,
    inStock: true,
    tags: ["bomber", "jacket", "outerwear", "technical"],
    featured: false
  },
  // ── Kids ───────────────────────────────────────────────────────────────────
  {
    id: "k001",
    name: "Organic Cotton Hoodie",
    category: "kids",
    price: 8500,
    originalPrice: 8500,
    description: "A soft, durable hoodie made from 100% GOTS-certified organic cotton. Kangaroo pocket and adjustable drawstring.",
    sizes: ["4Y", "6Y", "8Y", "10Y", "12Y"],
    colors: ["Sky Blue", "Sage Green", "Blush Pink"],
    images: [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.8,
    reviewCount: 274,
    inStock: true,
    tags: ["organic", "hoodie", "kids"],
    featured: true
  },
  {
    id: "k002",
    name: "Pull-On Jogger Pants",
    category: "kids",
    price: 6500,
    originalPrice: 8500,
    description: "Comfortable pull-on joggers with an elastic waistband and tapered leg. Easy to dress, easy to move in.",
    sizes: ["3Y", "4Y", "6Y", "8Y", "10Y"],
    colors: ["Heather Grey", "Navy", "Black"],
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.6,
    reviewCount: 198,
    inStock: true,
    tags: ["joggers", "casual", "sale"],
    featured: false
  },
  {
    id: "k003",
    name: "Puffer Vest",
    category: "kids",
    price: 11500,
    originalPrice: 11500,
    description: "A lightweight quilted puffer vest with a zip front and mock-neck collar. Packable and water-resistant.",
    sizes: ["4Y", "6Y", "8Y", "10Y", "12Y", "14Y"],
    colors: ["Cobalt Blue", "Burnt Orange", "Moss Green"],
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.7,
    reviewCount: 143,
    inStock: true,
    tags: ["puffer", "outerwear", "kids"],
    featured: true
  },
  {
    id: "k004",
    name: "Stripe Knit Dress",
    category: "kids",
    price: 7500,
    originalPrice: 9800,
    description: "A cheerful striped knit dress with a smocked bodice and short puff sleeves. Comfortable for all-day wear.",
    sizes: ["3Y", "4Y", "6Y", "8Y"],
    colors: ["Rainbow Stripe", "Navy Stripe"],
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=800&fit=crop&crop=entropy&sig=kids4",
      "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=800&fit=crop"
    ],
    rating: 4.5,
    reviewCount: 87,
    inStock: true,
    tags: ["dress", "knit", "girls", "sale"],
    featured: false
  },
  {
    id: "k005",
    name: "Canvas Sneakers",
    category: "kids",
    price: 9500,
    originalPrice: 9500,
    description: "Classic low-top canvas sneakers with a rubber sole and cushioned insole. Durable enough for the playground.",
    sizes: ["EU 28", "EU 30", "EU 32", "EU 34", "EU 36"],
    colors: ["White", "Navy", "Red"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1520316587275-5e4f06f355e4?w=600&h=800&fit=crop"
    ],
    rating: 4.7,
    reviewCount: 312,
    inStock: true,
    tags: ["sneakers", "shoes", "canvas"],
    featured: true
  },
  {
    id: "k006",
    name: "Striped Cotton Tee",
    category: "kids",
    price: 4500,
    originalPrice: 4500,
    description: "A soft Breton-stripe tee in 100% cotton jersey. Crew neck, short sleeves — a timeless kids' wardrobe staple.",
    sizes: ["2Y", "3Y", "4Y", "6Y", "8Y", "10Y"],
    colors: ["Navy Stripe", "Red Stripe", "Green Stripe"],
    images: [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&h=800&fit=crop"
    ],
    rating: 4.7,
    reviewCount: 208,
    inStock: true,
    tags: ["tee", "stripe", "cotton", "basics"],
    featured: false
  },
  {
    id: "k007",
    name: "Denim Dungarees",
    category: "kids",
    price: 7500,
    originalPrice: 9800,
    description: "Classic dungarees in soft washed denim with adjustable shoulder straps, a bib pocket, and side snap buttons for easy dressing.",
    sizes: ["2Y", "3Y", "4Y", "6Y", "8Y"],
    colors: ["Light Wash", "Dark Wash"],
    images: [
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.8,
    reviewCount: 167,
    inStock: true,
    tags: ["denim", "dungarees", "kids", "sale"],
    featured: true
  },
  {
    id: "k008",
    name: "Floral Print Dress",
    category: "kids",
    price: 6500,
    originalPrice: 6500,
    description: "A sweet floral-print cotton dress with short puff sleeves, a gathered skirt, and a back zip. Perfect for any occasion.",
    sizes: ["3Y", "4Y", "6Y", "8Y", "10Y"],
    colors: ["Pink Floral", "Blue Floral"],
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.6,
    reviewCount: 132,
    inStock: true,
    tags: ["dress", "floral", "girls"],
    featured: false
  },
  {
    id: "k009",
    name: "Hooded Sweatshirt",
    category: "kids",
    price: 5500,
    originalPrice: 7e3,
    description: "A cosy pullover hoodie in soft French-terry cotton. Kangaroo pocket, adjustable drawstring, and ribbed cuffs.",
    sizes: ["4Y", "6Y", "8Y", "10Y", "12Y"],
    colors: ["Heather Grey", "Navy", "Coral"],
    images: [
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&h=800&fit=crop&crop=faces"
    ],
    rating: 4.7,
    reviewCount: 189,
    inStock: true,
    tags: ["hoodie", "sweatshirt", "cozy", "sale"],
    featured: false
  },
  {
    id: "k010",
    name: "Velcro Canvas Sneakers",
    category: "kids",
    price: 4800,
    originalPrice: 4800,
    description: "Easy-on velcro canvas sneakers with a non-slip rubber sole and cushioned footbed. Built for little adventurers.",
    sizes: ["EU 24", "EU 26", "EU 28", "EU 30", "EU 32"],
    colors: ["White", "Red", "Blue"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1520316587275-5e4f06f355e4?w=600&h=800&fit=crop"
    ],
    rating: 4.8,
    reviewCount: 275,
    inStock: true,
    tags: ["sneakers", "shoes", "velcro", "kids"],
    featured: false
  },
  // ── Accessories ────────────────────────────────────────────────────────────
  {
    id: "a001",
    name: "Structured Leather Tote",
    category: "accessories",
    price: 62e3,
    originalPrice: 62e3,
    description: "A roomy structured tote in full-grain leather. Interior pockets, magnetic snap closure, and detachable key clip.",
    sizes: ["One Size"],
    colors: ["Tan", "Black", "Cognac"],
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop"
    ],
    rating: 4.9,
    reviewCount: 326,
    inStock: true,
    tags: ["leather", "tote", "bag", "luxury"],
    featured: true
  },
  {
    id: "a002",
    name: "Cashmere Scarf",
    category: "accessories",
    price: 18500,
    originalPrice: 24e3,
    description: "A generously sized scarf woven from 100% pure cashmere. Lightweight yet warm, with fringed ends.",
    sizes: ["One Size"],
    colors: ["Camel", "Navy", "Burgundy", "Grey"],
    images: [
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1601924921557-45e6dea0a157?w=600&h=800&fit=crop"
    ],
    rating: 4.8,
    reviewCount: 215,
    inStock: true,
    tags: ["cashmere", "scarf", "winter", "sale"],
    featured: false
  },
  {
    id: "a003",
    name: "Aviator Sunglasses",
    category: "accessories",
    price: 23500,
    originalPrice: 23500,
    description: "Classic teardrop aviator frames with polarised lenses in premium polycarbonate. UV400 protection. Gold-tone metal frame.",
    sizes: ["One Size"],
    colors: ["Gold/Brown", "Gold/Green", "Silver/Grey"],
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=800&fit=crop"
    ],
    rating: 4.6,
    reviewCount: 178,
    inStock: true,
    tags: ["sunglasses", "aviator", "eyewear"],
    featured: true
  },
  {
    id: "a004",
    name: "Leather Belt",
    category: "accessories",
    price: 9500,
    originalPrice: 12500,
    description: "A slim full-grain leather belt with a brushed brass buckle. Minimal, refined, enduring.",
    sizes: ["S (28–30)", "M (32–34)", "L (36–38)", "XL (40–42)"],
    colors: ["Tan", "Black"],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&h=800&fit=crop"
    ],
    rating: 4.7,
    reviewCount: 134,
    inStock: true,
    tags: ["belt", "leather", "sale"],
    featured: false
  },
  {
    id: "a005",
    name: "Wool Flat Cap",
    category: "accessories",
    price: 8500,
    originalPrice: 8500,
    description: "A heritage flat cap in a warm wool-tweed blend. Structured brim, satin lining, and an adjustable inner band.",
    sizes: ["S/M", "L/XL"],
    colors: ["Herringbone", "Charcoal", "Camel"],
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&h=800&fit=crop"
    ],
    rating: 4.5,
    reviewCount: 96,
    inStock: true,
    tags: ["hat", "cap", "wool", "heritage"],
    featured: true
  },
  {
    id: "a006",
    name: "Structured Tote Bag",
    category: "accessories",
    price: 38500,
    originalPrice: 38500,
    description: "A spacious structured tote in pebbled vegan leather with a zip top, inner organiser pockets, and an adjustable crossbody strap.",
    sizes: ["One Size"],
    colors: ["Black", "Tan", "Blush"],
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop"
    ],
    rating: 4.8,
    reviewCount: 244,
    inStock: true,
    tags: ["tote", "bag", "everyday", "structured"],
    featured: false
  },
  {
    id: "a007",
    name: "Silk Scarf",
    category: "accessories",
    price: 12500,
    originalPrice: 12500,
    description: "A 90×90cm square silk scarf with a hand-rolled hem. Wear it around your neck, as a headband, or tied on your bag.",
    sizes: ["One Size"],
    colors: ["Ivory Floral", "Navy Abstract", "Terracotta"],
    images: [
      "https://images.unsplash.com/photo-1601924921557-45e6dea0a157?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=800&fit=crop"
    ],
    rating: 4.7,
    reviewCount: 118,
    inStock: true,
    tags: ["silk", "scarf", "accessory", "luxury"],
    featured: true
  },
  {
    id: "a008",
    name: "Woven Leather Belt",
    category: "accessories",
    price: 9500,
    originalPrice: 12e3,
    description: "A sleek hand-woven belt in genuine full-grain leather. Polished silver pin buckle — the finishing touch for any outfit.",
    sizes: ["S (28–30)", "M (32–34)", "L (36–38)", "XL (40–42)"],
    colors: ["Black", "Brown", "Cognac"],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&h=800&fit=crop"
    ],
    rating: 4.6,
    reviewCount: 97,
    inStock: true,
    tags: ["belt", "leather", "woven", "sale"],
    featured: false
  },
  {
    id: "a009",
    name: "Gold Hoop Earrings",
    category: "accessories",
    price: 8500,
    originalPrice: 8500,
    description: "Classic 14k gold-plated hoop earrings in a medium diameter. Lightweight, hypoallergenic posts — everyday elegance.",
    sizes: ["One Size"],
    colors: ["Gold", "Rose Gold", "Silver"],
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop"
    ],
    rating: 4.9,
    reviewCount: 312,
    inStock: true,
    tags: ["earrings", "jewelry", "gold", "hoops"],
    featured: true
  },
  {
    id: "a010",
    name: "Cashmere Beanie",
    category: "accessories",
    price: 7500,
    originalPrice: 7500,
    description: "A slouchy, ribbed beanie in cloud-soft pure cashmere. Generously cut for a relaxed fit — the winter essential you'll reach for daily.",
    sizes: ["One Size"],
    colors: ["Cream", "Black", "Camel", "Dusty Rose"],
    images: [
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop"
    ],
    rating: 4.8,
    reviewCount: 163,
    inStock: true,
    tags: ["beanie", "cashmere", "winter", "hat"],
    featured: false
  }
];
function getProductsByCategory(category) {
  return STATIC_PRODUCTS.filter((p) => p.category === category);
}
function getFeaturedProducts() {
  return STATIC_PRODUCTS.filter((p) => p.featured);
}
function getProductById(id) {
  return STATIC_PRODUCTS.find((p) => p.id === id);
}
export {
  ProductCard as P,
  Star as S,
  getProductsByCategory as a,
  getProductById as b,
  getFeaturedProducts as g
};
