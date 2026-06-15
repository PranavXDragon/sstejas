import { Button } from "@/components/ui/button";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { Link } from "@tanstack/react-router";
import { Heart, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { Layout } from "../components/Layout";
import { ProductCard } from "../components/ProductCard";
import { getProductById } from "../data/products";
import {
  useAddToWishlist,
  useRemoveFromWishlist,
  useWishlist,
} from "../hooks/useBackend";
import { useWishlistStore } from "../store/wishlistStore";

// Renders a wishlist card using static product data
function WishlistCard({
  productId,
  onRemove,
}: {
  productId: string;
  onRemove: (id: string) => void;
}) {
  const product = getProductById(productId);

  if (!product) return null;

  return (
    <div className="relative group" data-ocid="wishlist-card">
      <ProductCard product={product} />
      <button
        type="button"
        onClick={() => onRemove(productId)}
        className="absolute top-3 right-3 p-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:border-destructive hover:text-destructive transition-all opacity-0 group-hover:opacity-100 z-10"
        aria-label="Remove from wishlist"
        data-ocid="remove-from-wishlist"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

function EmptyWishlist() {
  return (
    <div
      className="flex flex-col items-center justify-center py-24 px-4 text-center"
      data-ocid="empty-wishlist"
    >
      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
        <Heart className="h-9 w-9 text-muted-foreground" />
      </div>
      <h2 className="font-display text-2xl font-semibold">
        Your wishlist is empty
      </h2>
      <p className="mt-2 text-muted-foreground text-sm max-w-xs">
        Save your favourite pieces here. Browse our collections and tap the
        heart to add items.
      </p>
      <Link to="/">
        <Button
          className="mt-8 h-12 px-10 rounded-none bg-foreground text-background hover:bg-primary hover:text-primary-foreground text-xs uppercase tracking-widest font-medium transition-colors"
          data-ocid="start-browsing-btn"
        >
          Start Browsing
        </Button>
      </Link>
    </div>
  );
}

export default function Wishlist() {
  const { isLoginSuccess } = useInternetIdentity();
  const isLoggedIn = isLoginSuccess;

  // Local store (always active)
  const { productIds: localIds, removeItem: removeLocal } = useWishlistStore();

  // Backend wishlist (only when logged in)
  const { data: backendIds } = useWishlist();
  const addToWishlist = useAddToWishlist();
  const removeFromWishlist = useRemoveFromWishlist();

  // Merge local + backend ids (deduplicated)
  const merged = Array.from(
    new Set([...localIds, ...(isLoggedIn && backendIds ? backendIds : [])]),
  );

  // Sync local items to backend once when user logs in and backend list is available
  const syncedRef = useRef(false);
  useEffect(() => {
    if (!isLoggedIn || !backendIds || syncedRef.current) return;
    syncedRef.current = true;
    const mutate = addToWishlist.mutate;
    for (const id of localIds) {
      if (!backendIds.includes(id)) {
        mutate(id);
      }
    }
  }, [isLoggedIn, backendIds, localIds, addToWishlist.mutate]);

  const handleRemove = (id: string) => {
    removeLocal(id);
    if (isLoggedIn) {
      removeFromWishlist.mutate(id);
    }
    toast("Removed from wishlist", { icon: "💔", duration: 2000 });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8 flex items-baseline justify-between">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
              Wishlist
            </h1>
            {merged.length > 0 && (
              <p className="text-sm text-muted-foreground mt-1">
                {merged.length} saved item{merged.length !== 1 ? "s" : ""}
              </p>
            )}
          </div>
          {!isLoggedIn && merged.length > 0 && (
            <p className="text-xs text-muted-foreground hidden md:block">
              <Link
                to="/profile"
                className="underline underline-offset-2 hover:text-foreground transition-colors"
              >
                Sign in
              </Link>{" "}
              to save your wishlist across devices
            </p>
          )}
        </div>

        {merged.length === 0 ? (
          <EmptyWishlist />
        ) : (
          <>
            {!isLoggedIn && (
              <div className="mb-6 px-4 py-3 bg-muted/50 border border-border text-xs text-muted-foreground flex items-center justify-between gap-4">
                <span>
                  Sign in to save your wishlist and access it from any device.
                </span>
                <Link
                  to="/profile"
                  className="text-xs uppercase tracking-widest text-foreground underline underline-offset-2 hover:text-primary transition-colors shrink-0"
                >
                  Sign In
                </Link>
              </div>
            )}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8"
              data-ocid="wishlist-grid"
            >
              {merged.map((id) => (
                <WishlistCard key={id} productId={id} onRemove={handleRemove} />
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
