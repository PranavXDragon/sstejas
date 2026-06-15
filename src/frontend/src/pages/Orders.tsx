import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ChevronDown,
  ChevronUp,
  Clock,
  Package,
  ShoppingBag,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { useUserOrders } from "../hooks/useBackend";
import { formatDate, formatPrice, getOrderStatusColor } from "../lib/utils";
import type { Order } from "../types";

// ─── Status Badge ─────────────────────────────────────────────────────────────

const STATUS_ICONS: Record<string, React.ReactNode> = {
  Pending: <Clock className="h-3 w-3" />,
  Processing: <Package className="h-3 w-3" />,
  Shipped: <Package className="h-3 w-3" />,
  Delivered: <Package className="h-3 w-3" />,
  Cancelled: <Package className="h-3 w-3" />,
};

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium border rounded-full ${getOrderStatusColor(status)}`}
    >
      {STATUS_ICONS[status]}
      {status}
    </span>
  );
}

// ─── Order Row ────────────────────────────────────────────────────────────────

function OrderRow({ order }: { order: Order }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-card border border-border" data-ocid="order-row">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="w-full text-left p-5 hover:bg-muted/30 transition-colors"
        aria-expanded={expanded}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-10 h-10 bg-muted flex items-center justify-center shrink-0">
              <Package className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="min-w-0">
              <p className="font-mono text-sm font-semibold truncate">
                #{order.id.slice(0, 8).toUpperCase()}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {formatDate(order.createdAt)} · {order.items.length}{" "}
                {order.items.length === 1 ? "item" : "items"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 ml-14 sm:ml-0">
            <StatusBadge status={order.status} />
            <span className="font-display font-semibold text-sm">
              {formatPrice(order.totalAmount)}
            </span>
            {expanded ? (
              <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" />
            ) : (
              <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
            )}
          </div>
        </div>
      </button>

      {expanded && (
        <div className="border-t border-border p-5 bg-background/50 space-y-3">
          {order.items.map((item) => (
            <div
              key={`${item.productId}-${item.size}-${item.color}`}
              className="flex items-center justify-between gap-4"
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
          <div className="pt-3 border-t border-border">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-muted-foreground">
              <div>
                <span className="font-semibold text-foreground block mb-0.5">
                  Shipping to
                </span>
                {order.shippingAddress.city}, {order.shippingAddress.state}
              </div>
              <div>
                <span className="font-semibold text-foreground block mb-0.5">
                  Order total
                </span>
                {formatPrice(order.totalAmount)}
              </div>
              <div>
                <span className="font-semibold text-foreground block mb-0.5">
                  Status
                </span>
                <StatusBadge status={order.status} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Loading Skeletons ────────────────────────────────────────────────────────

function OrdersSkeleton() {
  return (
    <div className="space-y-3">
      {["a", "b", "c"].map((k) => (
        <Skeleton key={k} className="h-20 w-full" />
      ))}
    </div>
  );
}

// ─── Orders Page ──────────────────────────────────────────────────────────────

export default function Orders() {
  const { isLoginSuccess, login } = useInternetIdentity();
  const navigate = useNavigate();
  const { data: orders, isLoading } = useUserOrders();

  useEffect(() => {
    if (!isLoginSuccess) {
      // Give a moment for auth to resolve before redirecting
      const t = setTimeout(() => {
        if (!isLoginSuccess) {
          void navigate({ to: "/" });
        }
      }, 1500);
      return () => clearTimeout(t);
    }
  }, [isLoginSuccess, navigate]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          {/* Page header */}
          <div className="mb-8">
            <h1 className="font-display text-3xl font-semibold tracking-tight">
              My Orders
            </h1>
            <p className="mt-1 text-muted-foreground">
              Track and manage your purchase history
            </p>
          </div>

          {/* Auth gate */}
          {!isLoginSuccess ? (
            <div
              className="bg-card border border-border p-12 text-center"
              data-ocid="orders-auth-gate"
            >
              <Package
                className="h-12 w-12 text-muted-foreground mx-auto mb-4"
                strokeWidth={1}
              />
              <h2 className="font-display font-semibold text-lg mb-2">
                Sign in to view your orders
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                Keep track of your purchases and order history
              </p>
              <Button
                onClick={login}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                data-ocid="orders-login-btn"
              >
                Sign In
              </Button>
            </div>
          ) : isLoading ? (
            <OrdersSkeleton />
          ) : !orders || orders.length === 0 ? (
            <div
              className="bg-card border border-border p-16 text-center"
              data-ocid="orders-empty-state"
            >
              <ShoppingBag
                className="h-12 w-12 text-muted-foreground mx-auto mb-4"
                strokeWidth={1}
              />
              <h2 className="font-display font-semibold text-xl mb-2">
                No orders yet
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                Looks like you haven't made any purchases. Start exploring our
                collection.
              </p>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                data-ocid="start-shopping-btn"
              >
                <Link to="/">Start Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-3" data-ocid="orders-list">
              {(orders as Order[]).map((order) => (
                <OrderRow key={order.id} order={order} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
