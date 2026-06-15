import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ChevronDown,
  ChevronUp,
  Heart,
  LogOut,
  Package,
  Settings,
  ShoppingBag,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { useProducts, useUserOrders } from "../hooks/useBackend";
import { formatDate, formatPrice, getOrderStatusColor } from "../lib/utils";
import { useWishlistStore } from "../store/wishlistStore";
import type { Order, Product } from "../types";

// ─── Stat Card ────────────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string | number;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="bg-card border border-border p-5 flex items-center gap-4">
      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="text-2xl font-display font-bold">{value}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
      </div>
    </div>
  );
}

// ─── Compact Order Row (for inline use) ──────────────────────────────────────

function CompactOrderRow({ order }: { order: Order }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border border-border" data-ocid="profile-order-row">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="w-full text-left p-4 hover:bg-muted/30 transition-colors"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="font-mono text-sm font-semibold">
              #{order.id.slice(0, 8).toUpperCase()}
            </p>
            <p className="text-xs text-muted-foreground">
              {formatDate(order.createdAt)} · {order.items.length} item
              {order.items.length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span
              className={`inline-flex items-center px-2 py-0.5 text-xs font-medium border rounded-full ${getOrderStatusColor(order.status)}`}
            >
              {order.status}
            </span>
            <span className="text-sm font-semibold">
              {formatPrice(order.totalAmount)}
            </span>
            {expanded ? (
              <ChevronUp className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
        </div>
      </button>
      {expanded && (
        <div className="border-t border-border p-4 bg-muted/20 space-y-2">
          {order.items.map((item) => (
            <div
              key={`${item.productId}-${item.size}-${item.color}`}
              className="flex justify-between text-sm"
            >
              <span className="text-muted-foreground truncate mr-4">
                {item.productName} ({item.size}, {item.color}) ×{item.quantity}
              </span>
              <span className="font-medium shrink-0">
                {formatPrice(item.price * item.quantity)}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Wishlist Product Card ────────────────────────────────────────────────────

function WishlistCard({
  product,
  onRemove,
}: {
  product: Product;
  onRemove: () => void;
}) {
  return (
    <div
      className="group bg-card border border-border overflow-hidden"
      data-ocid="wishlist-item"
    >
      <Link to="/product/$id" params={{ id: product.id }} className="block">
        <div className="aspect-[3/4] bg-muted relative overflow-hidden">
          {product.images[0] ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-zoom"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <ShoppingBag
                className="h-8 w-8 text-muted-foreground"
                strokeWidth={1}
              />
            </div>
          )}
        </div>
        <div className="p-3">
          <p className="text-sm font-medium truncate">{product.name}</p>
          <p className="text-sm text-primary font-semibold mt-0.5">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
      <div className="px-3 pb-3">
        <button
          type="button"
          onClick={onRemove}
          className="text-xs text-muted-foreground hover:text-destructive transition-colors flex items-center gap-1"
          aria-label="Remove from wishlist"
        >
          <Heart className="h-3 w-3 fill-current" />
          Remove
        </button>
      </div>
    </div>
  );
}

// ─── Overview Tab ─────────────────────────────────────────────────────────────

function OverviewTab({
  identity,
  orders,
  wishlistCount,
}: {
  identity: string;
  orders: Order[];
  wishlistCount: number;
}) {
  const recentOrders = orders.slice(0, 3);
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="bg-card border border-border p-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="h-7 w-7 text-primary" />
          </div>
          <div>
            <h2 className="font-display font-semibold text-lg">
              Welcome back!
            </h2>
            <p className="text-xs text-muted-foreground font-mono mt-0.5 max-w-xs truncate">
              {identity}
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard label="Total Orders" value={orders.length} icon={Package} />
        <StatCard label="Wishlist Items" value={wishlistCount} icon={Heart} />
      </div>

      {/* Recent orders */}
      {recentOrders.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-display font-semibold text-sm uppercase tracking-widest">
              Recent Orders
            </h3>
            <Link to="/orders" className="text-xs text-primary hover:underline">
              View all
            </Link>
          </div>
          <div className="space-y-2">
            {recentOrders.map((order) => (
              <CompactOrderRow key={order.id} order={order} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Settings Tab ─────────────────────────────────────────────────────────────

const NOTIFICATION_PREFS = [
  {
    id: "orderUpdates",
    label: "Order Updates",
    desc: "Shipping and delivery notifications",
  },
  {
    id: "promotions",
    label: "Promotions & Sales",
    desc: "Exclusive offers and new arrivals",
  },
  {
    id: "wishlistAlerts",
    label: "Wishlist Alerts",
    desc: "Price drops on wishlisted items",
  },
  {
    id: "newsletter",
    label: "Newsletter",
    desc: "Monthly style guides and editorial content",
  },
] as const;

type PrefId = (typeof NOTIFICATION_PREFS)[number]["id"];

function SettingsTab() {
  const [prefs, setPrefs] = useState<Record<PrefId, boolean>>({
    orderUpdates: true,
    promotions: false,
    wishlistAlerts: true,
    newsletter: false,
  });

  return (
    <div className="space-y-6">
      <div className="bg-card border border-border p-6">
        <h3 className="font-display font-semibold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
          <Settings className="h-4 w-4" />
          Notification Preferences
        </h3>
        <div className="space-y-4">
          {NOTIFICATION_PREFS.map((pref, index) => (
            <div key={pref.id}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium">{pref.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {pref.desc}
                  </p>
                </div>
                <Switch
                  checked={prefs[pref.id]}
                  onCheckedChange={(v) =>
                    setPrefs((prev) => ({ ...prev, [pref.id]: v }))
                  }
                  data-ocid={`pref-toggle-${pref.id}`}
                />
              </div>
              {index < NOTIFICATION_PREFS.length - 1 && (
                <Separator className="mt-4" />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-muted/40 border border-border p-5 text-sm text-muted-foreground">
        <p>
          Notification settings are saved locally. For full account management,
          sign in with your Internet Identity.
        </p>
      </div>
    </div>
  );
}

// ─── Profile Page ─────────────────────────────────────────────────────────────

export default function Profile() {
  const { isLoginSuccess, login, clear, identity } = useInternetIdentity();
  const navigate = useNavigate();
  const { data: orders, isLoading: ordersLoading } = useUserOrders();
  const { data: allProducts } = useProducts();
  const wishlistIds = useWishlistStore((s) => s.productIds);
  const removeFromWishlist = useWishlistStore((s) => s.removeItem);

  useEffect(() => {
    if (!isLoginSuccess) {
      const t = setTimeout(() => {
        if (!isLoginSuccess) void navigate({ to: "/" });
      }, 1500);
      return () => clearTimeout(t);
    }
  }, [isLoginSuccess, navigate]);

  const typedOrders = (orders ?? []) as Order[];
  const typedProducts = (allProducts ?? []) as Product[];
  const wishlisted = typedProducts.filter((p) => wishlistIds.includes(p.id));

  const principalStr = identity?.getPrincipal().toText() ?? "—";

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        {!isLoginSuccess ? (
          <div
            className="max-w-md mx-auto bg-card border border-border p-12 text-center"
            data-ocid="profile-auth-gate"
          >
            <User
              className="h-12 w-12 text-muted-foreground mx-auto mb-4"
              strokeWidth={1}
            />
            <h2 className="font-display font-semibold text-xl mb-2">
              Sign in to your account
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Access your orders, wishlist, and account settings
            </p>
            <Button
              onClick={login}
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
              data-ocid="profile-login-btn"
            >
              Sign In with Internet Identity
            </Button>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="font-display text-3xl font-semibold tracking-tight">
                  My Account
                </h1>
                <p className="mt-1 text-muted-foreground text-sm font-mono truncate max-w-xs">
                  {principalStr}
                </p>
              </div>
              <Button
                variant="outline"
                onClick={clear}
                className="flex items-center gap-2"
                data-ocid="logout-btn"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Sign Out</span>
              </Button>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" data-ocid="profile-tabs">
              <TabsList className="w-full border-b border-border rounded-none bg-transparent p-0 h-auto mb-8 justify-start gap-0">
                {[
                  { value: "overview", label: "Overview", icon: User },
                  { value: "orders", label: "Order History", icon: Package },
                  { value: "wishlist", label: "Wishlist", icon: Heart },
                  { value: "settings", label: "Settings", icon: Settings },
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2.5 flex items-center gap-2 text-sm"
                      data-ocid={`profile-tab-${tab.value}`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {/* Overview */}
              <TabsContent value="overview" className="mt-0">
                <OverviewTab
                  identity={principalStr}
                  orders={typedOrders}
                  wishlistCount={wishlistIds.length}
                />
              </TabsContent>

              {/* Order History */}
              <TabsContent value="orders" className="mt-0">
                {ordersLoading ? (
                  <div className="space-y-3">
                    {["a", "b", "c"].map((k) => (
                      <Skeleton key={k} className="h-16 w-full" />
                    ))}
                  </div>
                ) : typedOrders.length === 0 ? (
                  <div
                    className="bg-card border border-border p-12 text-center"
                    data-ocid="profile-orders-empty"
                  >
                    <ShoppingBag
                      className="h-10 w-10 text-muted-foreground mx-auto mb-3"
                      strokeWidth={1}
                    />
                    <p className="font-display font-semibold">No orders yet</p>
                    <p className="text-sm text-muted-foreground mt-1 mb-5">
                      Start shopping to see your order history here
                    </p>
                    <Button
                      asChild
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Link to="/">Browse Collection</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3" data-ocid="profile-orders-list">
                    {typedOrders.map((order) => (
                      <CompactOrderRow key={order.id} order={order} />
                    ))}
                  </div>
                )}
              </TabsContent>

              {/* Wishlist */}
              <TabsContent value="wishlist" className="mt-0">
                {wishlisted.length === 0 ? (
                  <div
                    className="bg-card border border-border p-12 text-center"
                    data-ocid="profile-wishlist-empty"
                  >
                    <Heart
                      className="h-10 w-10 text-muted-foreground mx-auto mb-3"
                      strokeWidth={1}
                    />
                    <p className="font-display font-semibold">
                      Your wishlist is empty
                    </p>
                    <p className="text-sm text-muted-foreground mt-1 mb-5">
                      Save items you love for later
                    </p>
                    <Button
                      asChild
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Link to="/">Explore Collection</Link>
                    </Button>
                  </div>
                ) : (
                  <div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                    data-ocid="profile-wishlist-grid"
                  >
                    {wishlisted.map((product) => (
                      <WishlistCard
                        key={product.id}
                        product={product}
                        onRemove={() => removeFromWishlist(product.id)}
                      />
                    ))}
                  </div>
                )}
              </TabsContent>

              {/* Settings */}
              <TabsContent value="settings" className="mt-0">
                <SettingsTab />
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </Layout>
  );
}
