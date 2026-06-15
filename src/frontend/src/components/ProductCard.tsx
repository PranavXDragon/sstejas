import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { toast } from "sonner";
import { cn, formatPrice } from "../lib/utils";
import { useCartStore } from "../store/cartStore";
import { useWishlistStore } from "../store/wishlistStore";
import type { Product } from "../types";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const { hasItem, toggle } = useWishlistStore();
  const isWishlisted = hasItem(product.id);
  const isOnSale = product.originalPrice > product.price;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultSize = product.sizes[0] ?? "One Size";
    const defaultColor = product.colors[0] ?? "Default";
    addItem(product, 1, defaultSize, defaultColor);
    toast.success(`${product.name} added to cart`, {
      description: `${defaultSize} · ${defaultColor}`,
      duration: 3000,
    });
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(product.id);
    toast(isWishlisted ? "Removed from wishlist" : "Added to wishlist", {
      icon: isWishlisted ? "💔" : "❤️",
      duration: 2000,
    });
  };

  const primaryImage = product.images[0] ?? "/assets/images/placeholder.svg";
  const secondaryImage = product.images[1] ?? primaryImage;

  return (
    <Link
      to="/product/$id"
      params={{ id: product.id }}
      className={cn(
        "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className,
      )}
      data-ocid="product-card"
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-muted aspect-[3/4]">
        {/* Primary image */}
        <img
          src={primaryImage}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-zoom group-hover:scale-105 group-hover:opacity-0"
          loading="lazy"
        />
        {/* Secondary image on hover */}
        <img
          src={secondaryImage}
          alt={`${product.name} alternate view`}
          className="absolute inset-0 w-full h-full object-cover transition-zoom scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-100"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {!product.inStock && (
            <Badge
              variant="secondary"
              className="text-[10px] uppercase tracking-wide rounded-none px-2"
            >
              Sold Out
            </Badge>
          )}
          {isOnSale && (
            <Badge className="text-[10px] uppercase tracking-wide rounded-none px-2 bg-primary text-primary-foreground">
              Sale
            </Badge>
          )}
          {product.featured && product.inStock && !isOnSale && (
            <Badge
              variant="secondary"
              className="text-[10px] uppercase tracking-wide rounded-none px-2"
            >
              New
            </Badge>
          )}
        </div>

        {/* Wishlist button */}
        <button
          type="button"
          onClick={handleWishlistToggle}
          className={cn(
            "absolute top-3 right-3 p-1.5 rounded-full bg-background/80 backdrop-blur-sm transition-all",
            "opacity-0 group-hover:opacity-100 hover:bg-background",
            isWishlisted && "opacity-100",
          )}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          data-ocid="wishlist-toggle"
        >
          <Heart
            className={cn(
              "h-4 w-4 transition-colors",
              isWishlisted ? "fill-primary text-primary" : "text-foreground",
            )}
          />
        </button>

        {/* Quick add button */}
        {product.inStock && (
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Button
              onClick={handleQuickAdd}
              className="w-full rounded-none h-10 bg-foreground text-background hover:bg-primary hover:text-primary-foreground text-xs uppercase tracking-widest font-medium transition-colors"
              data-ocid="quick-add"
            >
              <ShoppingBag className="h-3.5 w-3.5 mr-2" />
              Quick Add
            </Button>
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="pt-3 space-y-1">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
              {product.category}
            </p>
            <h3 className="text-sm font-medium leading-snug truncate mt-0.5 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </div>
          <div className="text-right shrink-0">
            {isOnSale ? (
              <div className="flex flex-col items-end">
                <span className="text-sm font-semibold text-primary">
                  {formatPrice(product.price)}
                </span>
                <span className="text-xs text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              </div>
            ) : (
              <span className="text-sm font-medium">
                {formatPrice(product.price)}
              </span>
            )}
          </div>
        </div>

        {/* Rating */}
        {product.reviewCount > 0 && (
          <div className="flex items-center gap-1.5 pt-0.5">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={`star-${i}-${product.id}`}
                  className={cn(
                    "h-2.5 w-2.5",
                    i < Math.round(product.rating)
                      ? "fill-primary text-primary"
                      : "fill-muted text-muted-foreground",
                  )}
                />
              ))}
            </div>
            <span className="text-[10px] text-muted-foreground">
              ({product.reviewCount})
            </span>
          </div>
        )}

        {/* Available sizes */}
        {product.sizes.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1">
            {product.sizes.slice(0, 4).map((size) => (
              <span
                key={size}
                className="text-[10px] text-muted-foreground border border-border px-1.5 py-0.5 rounded-sm"
              >
                {size}
              </span>
            ))}
            {product.sizes.length > 4 && (
              <span className="text-[10px] text-muted-foreground">
                +{product.sizes.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
