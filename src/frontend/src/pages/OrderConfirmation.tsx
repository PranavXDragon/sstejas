import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { CheckCircle, Package, ShoppingBag } from "lucide-react";
import { useEffect } from "react";
import { Layout } from "../components/Layout";
import { useOrderById } from "../hooks/useBackend";
import { formatDate, formatPrice } from "../lib/utils";
import type { Order } from "../types";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function AddressBlock({ addr }: { addr: Order["shippingAddress"] }) {
  return (
    <div className="text-sm space-y-0.5">
      <p className="font-medium">{addr.fullName}</p>
      <p className="text-muted-foreground">{addr.addressLine1}</p>
      {addr.addressLine2 && (
        <p className="text-muted-foreground">{addr.addressLine2}</p>
      )}
      <p className="text-muted-foreground">
        {addr.city}, {addr.state} {addr.postalCode}
      </p>
      <p className="text-muted-foreground">{addr.country}</p>
    </div>
  );
}

// ─── Loading Skeleton ─────────────────────────────────────────────────────────

function ConfirmationSkeleton() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Skeleton className="h-24 w-24 rounded-full mx-auto" />
      <Skeleton className="h-8 w-64 mx-auto" />
      <Skeleton className="h-4 w-48 mx-auto" />
      <div className="space-y-3">
        {["a", "b", "c"].map((k) => (
          <Skeleton key={k} className="h-16 w-full" />
        ))}
      </div>
    </div>
  );
}

// ─── Order Confirmation Page ──────────────────────────────────────────────────

export default function OrderConfirmation() {
  const { id } = useParams({ from: "/order-confirmation/$id" });
  const navigate = useNavigate();
  const { data: order, isLoading } = useOrderById(id);

  // If the query resolves to null and isn't loading, order not found
  useEffect(() => {
    if (!isLoading && order === null) {
      void navigate({ to: "/orders" });
    }
  }, [isLoading, order, navigate]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {isLoading ? (
          <ConfirmationSkeleton />
        ) : order ? (
          <div className="max-w-2xl mx-auto">
            {/* Hero success section */}
            <div className="text-center mb-10">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mx-auto mb-5">
                <CheckCircle
                  className="h-10 w-10 text-primary"
                  strokeWidth={1.5}
                />
              </div>
              <h1 className="font-display text-3xl font-semibold tracking-tight">
                Order Confirmed!
              </h1>
              <p className="mt-2 text-muted-foreground">
                Thank you for your purchase. We'll get your items to you soon.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 bg-muted px-4 py-2">
                <Package className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">
                  Order{" "}
                  <span
                    className="font-mono font-semibold text-foreground"
                    data-ocid="order-number"
                  >
                    #{id.slice(0, 8).toUpperCase()}
                  </span>
                </span>
              </div>
            </div>

            {/* Order details */}
            <div className="space-y-4">
              {/* Items */}
              <div className="bg-card border border-border p-6">
                <h2 className="font-display font-semibold text-sm uppercase tracking-widest mb-4">
                  Items Ordered
                </h2>
                <div className="space-y-3">
                  {(order as Order).items.map((item) => (
                    <div
                      key={`${item.productId}-${item.size}-${item.color}`}
                      className="flex items-center justify-between gap-4"
                      data-ocid="order-item"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">
                          {item.productName}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.size} · {item.color} · Qty {item.quantity}
                        </p>
                      </div>
                      <span className="text-sm font-medium shrink-0">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between font-display font-bold">
                  <span>Total</span>
                  <span>{formatPrice((order as Order).totalAmount)}</span>
                </div>
              </div>

              {/* Shipping + Delivery */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-card border border-border p-5">
                  <h3 className="font-display font-semibold text-xs uppercase tracking-widest mb-3">
                    Shipping To
                  </h3>
                  <AddressBlock addr={(order as Order).shippingAddress} />
                </div>
                <div className="bg-card border border-border p-5">
                  <h3 className="font-display font-semibold text-xs uppercase tracking-widest mb-3">
                    Order Details
                  </h3>
                  <div className="text-sm space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Placed on</span>
                      <span>{formatDate((order as Order).createdAt)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status</span>
                      <span className="font-medium text-primary">
                        {(order as Order).status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Est. Delivery
                      </span>
                      <span>5-7 business days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button
                asChild
                variant="outline"
                className="flex-1"
                data-ocid="track-order-btn"
              >
                <Link to="/orders">
                  <Package className="h-4 w-4 mr-2" />
                  Track Your Order
                </Link>
              </Button>
              <Button
                asChild
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                data-ocid="continue-shopping-btn"
              >
                <Link to="/">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </Layout>
  );
}
