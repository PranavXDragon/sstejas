import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useParams } from "@tanstack/react-router";
import { Heart, Minus, Plus, ShoppingBag, Star, ZoomIn } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Layout } from "../components/Layout";
import { ProductCard } from "../components/ProductCard";
import { getProductById, getProductsByCategory } from "../data/products";
import {
  useAddToWishlist,
  useRemoveFromWishlist,
  useWishlist,
} from "../hooks/useBackend";
import { cn, formatPrice } from "../lib/utils";
import { useCartStore } from "../store/cartStore";
import { useWishlistStore } from "../store/wishlistStore";
import type { Product } from "../types";

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((n) => (
          <Star
            key={`star-${n}`}
            className={cn(
              "h-3.5 w-3.5",
              n <= Math.round(rating)
                ? "fill-primary text-primary"
                : "fill-muted text-muted-foreground",
            )}
          />
        ))}
      </div>
      <span className="text-sm text-muted-foreground">
        {rating.toFixed(1)} ({count} reviews)
      </span>
    </div>
  );
}

function ImageGallery({ product }: { product: Product }) {
  const allImages =
    product.images.length >= 2
      ? product.images
      : [product.images[0], product.images[0]];

  const [activeIdx, setActiveIdx] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div className="flex flex-col-reverse md:flex-row gap-3">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
        {allImages.slice(0, 4).map((src) => {
          const imgIdx = allImages.indexOf(src);
          return (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIdx(imgIdx)}
              className={cn(
                "shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors",
                activeIdx === imgIdx
                  ? "border-primary"
                  : "border-transparent hover:border-border",
              )}
              aria-label={`View image ${imgIdx + 1}`}
              data-ocid="thumbnail-btn"
            >
              <img
                src={src}
                alt={`${product.name} view ${imgIdx + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          );
        })}
      </div>

      {/* Main image */}
      <div
        className="relative flex-1 overflow-hidden bg-muted cursor-zoom-in aspect-[3/4] md:aspect-auto md:max-h-[600px]"
        onMouseEnter={() => setZoomed(true)}
        onMouseLeave={() => setZoomed(false)}
        onMouseMove={handleMouseMove}
        data-ocid="product-main-image"
      >
        <img
          src={allImages[activeIdx]}
          alt={product.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-300",
            zoomed ? "scale-150" : "scale-100",
          )}
          style={
            zoomed
              ? { transformOrigin: `${mousePos.x}% ${mousePos.y}%` }
              : undefined
          }
        />
        {!zoomed && (
          <div className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm rounded-full p-1.5 pointer-events-none">
            <ZoomIn className="h-4 w-4 text-muted-foreground" />
          </div>
        )}
        {product.originalPrice > product.price && (
          <Badge className="absolute top-3 left-3 rounded-none text-[10px] uppercase tracking-widest bg-primary text-primary-foreground">
            Sale
          </Badge>
        )}
      </div>
    </div>
  );
}

function ProductInfo({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);
  const { hasItem, toggle: toggleLocal } = useWishlistStore();
  const { data: backendWishlist } = useWishlist();
  const addToWishlist = useAddToWishlist();
  const removeFromWishlist = useRemoveFromWishlist();

  const isLocalWishlisted = hasItem(product.id);
  const isBackendWishlisted = backendWishlist?.includes(product.id) ?? false;
  const isWishlisted = isLocalWishlisted || isBackendWishlisted;

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors[0] ?? "Default",
  );
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState(false);

  const isOnSale = product.originalPrice > product.price;

  const colorMap: Record<string, string> = {
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
    Cognac: "#9A463D",
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      toast.error("Please select a size");
      return;
    }
    setSizeError(false);
    addItem(product, quantity, selectedSize, selectedColor);
    toast.success(`${product.name} added to cart`, {
      description: `Size: ${selectedSize} · Color: ${selectedColor} · Qty: ${quantity}`,
      duration: 3000,
    });
  };

  const handleWishlist = () => {
    toggleLocal(product.id);
    if (isWishlisted) {
      removeFromWishlist.mutate(product.id);
      toast("Removed from wishlist", { icon: "💔", duration: 2000 });
    } else {
      addToWishlist.mutate(product.id);
      toast("Added to wishlist", { icon: "❤️", duration: 2000 });
    }
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-muted-foreground uppercase tracking-widest">
        <Link to="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link
          to="/category/$slug"
          params={{ slug: product.category }}
          className="hover:text-foreground transition-colors capitalize"
        >
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-foreground truncate">{product.name}</span>
      </nav>

      {/* Name & Price */}
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-semibold leading-tight tracking-tight">
          {product.name}
        </h1>
        <div className="flex items-baseline gap-3 mt-2">
          <span className="text-2xl font-semibold text-primary">
            {formatPrice(product.price)}
          </span>
          {isOnSale && (
            <span className="text-base text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
          {isOnSale && (
            <span className="text-sm text-primary">
              Save{" "}
              {Math.round((1 - product.price / product.originalPrice) * 100)}%
            </span>
          )}
        </div>
      </div>

      {/* Rating */}
      {product.reviewCount > 0 && (
        <StarRating rating={product.rating} count={product.reviewCount} />
      )}

      {/* Stock badge */}
      <div>
        {product.inStock ? (
          <Badge
            variant="secondary"
            className="rounded-none text-[10px] uppercase tracking-widest bg-green-50 text-green-700 border-green-200 border"
          >
            In Stock
          </Badge>
        ) : (
          <Badge
            variant="secondary"
            className="rounded-none text-[10px] uppercase tracking-widest bg-muted text-muted-foreground"
          >
            Out of Stock
          </Badge>
        )}
      </div>

      <hr className="border-border" />

      {/* Color selector */}
      {product.colors.length > 0 && (
        <div>
          <p className="text-xs font-medium uppercase tracking-widest mb-2.5">
            Colour:{" "}
            <span className="text-muted-foreground normal-case tracking-normal font-normal">
              {selectedColor}
            </span>
          </p>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((color) => {
              const hex = colorMap[color];
              return (
                <button
                  key={color}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  title={color}
                  aria-label={`Select color ${color}`}
                  data-ocid="color-swatch"
                  className={cn(
                    "w-7 h-7 rounded-full border-2 transition-all",
                    selectedColor === color
                      ? "border-primary ring-2 ring-primary ring-offset-2"
                      : "border-border hover:border-foreground",
                  )}
                  style={hex ? { backgroundColor: hex } : undefined}
                >
                  {!hex && (
                    <span className="text-[9px] leading-none truncate px-0.5">
                      {color}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Size selector */}
      {product.sizes.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <p
              className={cn(
                "text-xs font-medium uppercase tracking-widest",
                sizeError && "text-destructive",
              )}
            >
              Size:{" "}
              {selectedSize && (
                <span className="text-muted-foreground normal-case tracking-normal font-normal">
                  {selectedSize}
                </span>
              )}
              {sizeError && (
                <span className="text-destructive normal-case tracking-normal font-normal">
                  {" "}
                  — Please select a size
                </span>
              )}
            </p>
            <button
              type="button"
              className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors"
            >
              Size guide
            </button>
          </div>
          <div className="flex flex-wrap gap-2" data-ocid="size-grid">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => {
                  setSelectedSize(size);
                  setSizeError(false);
                }}
                data-ocid="size-btn"
                className={cn(
                  "min-w-[44px] h-11 px-3 border text-sm font-medium transition-all",
                  selectedSize === size
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-border hover:border-foreground",
                  !product.inStock &&
                    "opacity-40 cursor-not-allowed line-through",
                )}
                disabled={!product.inStock}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div>
        <p className="text-xs font-medium uppercase tracking-widest mb-2.5">
          Quantity
        </p>
        <div
          className="inline-flex items-center border border-border"
          data-ocid="quantity-selector"
        >
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-11 h-11 flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-12 text-center text-sm font-medium tabular-nums">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.min(10, q + 1))}
            className="w-11 h-11 flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* CTA buttons */}
      <div className="flex gap-3">
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="flex-1 h-12 rounded-none bg-foreground text-background hover:bg-primary hover:text-primary-foreground text-xs uppercase tracking-widest font-medium transition-colors"
          data-ocid="add-to-cart-btn"
        >
          <ShoppingBag className="h-4 w-4 mr-2" />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={handleWishlist}
          className="w-12 h-12 rounded-none border-border p-0"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          data-ocid="wishlist-btn"
        >
          <Heart
            className={cn(
              "h-5 w-5 transition-colors",
              isWishlisted ? "fill-primary text-primary" : "text-foreground",
            )}
          />
        </Button>
      </div>

      {/* Trust signals */}
      <div className="border border-border p-4 space-y-2">
        {[
          "Free shipping on orders over ₹150",
          "Free returns within 30 days",
          "Secure checkout",
        ].map((text) => (
          <p
            key={text}
            className="text-xs text-muted-foreground flex items-center gap-2"
          >
            <span className="w-1 h-1 rounded-full bg-primary inline-block" />
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}

function ProductTabs({ product }: { product: Product }) {
  return (
    <Tabs defaultValue="description" className="mt-10 md:mt-16">
      <TabsList className="rounded-none border-b border-border bg-transparent h-auto p-0 w-full justify-start gap-0">
        {["description", "details", "delivery"].map((tab) => (
          <TabsTrigger
            key={tab}
            value={tab}
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-5 py-3 text-xs uppercase tracking-widest font-medium"
          >
            {tab === "description"
              ? "Description"
              : tab === "details"
                ? "Details & Care"
                : "Delivery & Returns"}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="description" className="mt-6 max-w-2xl">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        {product.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-widest border border-border px-2.5 py-1 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </TabsContent>
      <TabsContent value="details" className="mt-6 max-w-2xl">
        <div className="space-y-3 text-sm">
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 border-t border-border">
            {[
              ["Category", product.category],
              ["Available Sizes", product.sizes.join(", ")],
              ["Colours", product.colors.join(", ")],
              ["SKU", product.id.substring(0, 8).toUpperCase()],
            ].map(([label, value]) => (
              <div key={label} className="contents">
                <div className="py-2 border-b border-border text-xs uppercase tracking-widest text-muted-foreground">
                  {label}
                </div>
                <div className="py-2 border-b border-border text-sm">
                  {value}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-muted/40">
            <p className="text-xs font-medium uppercase tracking-widest mb-2">
              Care Instructions
            </p>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li>Machine wash at 30°C with similar colours</li>
              <li>Do not bleach or tumble dry</li>
              <li>Iron on low heat if needed</li>
              <li>Dry clean recommended for best results</li>
            </ul>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="delivery" className="mt-6 max-w-2xl space-y-4">
        {[
          {
            title: "Standard Delivery",
            desc: "3–5 business days · Free on orders over ₹150, otherwise ₹9.99",
          },
          {
            title: "Express Delivery",
            desc: "1–2 business days · ₹14.99",
          },
          {
            title: "Free Returns",
            desc: "Return within 30 days for a full refund. Items must be unworn with original tags.",
          },
        ].map(({ title, desc }) => (
          <div key={title} className="border-l-2 border-primary pl-4">
            <p className="text-sm font-medium">{title}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  );
}

function RelatedProducts({
  category,
  excludeId,
}: {
  category: string;
  excludeId: string;
}) {
  const related = getProductsByCategory(category)
    .filter((p) => p.id !== excludeId)
    .slice(0, 4);

  if (!related.length) return null;

  return (
    <div className="mt-16 border-t border-border pt-12">
      <h2 className="font-display text-xl font-semibold mb-6 uppercase tracking-widest text-sm">
        You May Also Like
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
        {related.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams({ from: "/product/$id" });
  const product = getProductById(id);

  if (!product) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
          <p className="text-8xl font-display font-semibold text-muted-foreground/20">
            404
          </p>
          <h1 className="mt-4 text-2xl font-display font-semibold">
            Product Not Found
          </h1>
          <p className="mt-2 text-muted-foreground max-w-sm text-sm">
            This product doesn't exist or may have been removed.
          </p>
          <Link
            to="/category/$slug"
            params={{ slug: "women" }}
            className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-foreground text-background text-xs uppercase tracking-widest font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Browse Collections
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <ImageGallery product={product} />
          <ProductInfo product={product} />
        </div>
        <ProductTabs product={product} />
        <RelatedProducts category={product.category} excludeId={product.id} />
      </div>
    </Layout>
  );
}
