import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Layout } from "../components/Layout";
import { cn, formatPrice } from "../lib/utils";
import { useCartStore } from "../store/cartStore";
import type { CartItem } from "../types";

function CartRow({ item }: { item: CartItem }) {
  const { updateQuantity, removeItem } = useCartStore();

  const handleRemove = () => {
    removeItem(item.product.id, item.size, item.color);
    toast("Item removed from cart", { duration: 2000 });
  };

  const img =
    item.product.images[0] ??
    `https://picsum.photos/seed/${item.product.id}/200/260`;

  return (
    <div
      className="flex gap-4 py-5 border-b border-border"
      data-ocid="cart-row"
    >
      {/* Product image */}
      <Link
        to="/product/$id"
        params={{ id: item.product.id }}
        className="shrink-0"
      >
        <img
          src={img}
          alt={item.product.name}
          className="w-20 h-26 md:w-24 md:h-32 object-cover bg-muted"
          style={{ aspectRatio: "3/4" }}
        />
      </Link>

      {/* Product info */}
      <div className="flex flex-1 gap-4 min-w-0">
        <div className="flex-1 min-w-0">
          <Link
            to="/product/$id"
            params={{ id: item.product.id }}
            className="hover:text-primary transition-colors"
          >
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">
              {item.product.category}
            </p>
            <h3 className="font-medium text-sm leading-snug truncate">
              {item.product.name}
            </h3>
          </Link>
          <div className="flex gap-3 mt-1.5 text-xs text-muted-foreground">
            <span>Size: {item.size}</span>
            <span>·</span>
            <span>Colour: {item.color}</span>
          </div>
          <p className="text-sm font-semibold mt-2 text-primary">
            {formatPrice(item.product.price)}
          </p>
        </div>

        {/* Right column: qty + total + remove */}
        <div className="flex flex-col items-end justify-between shrink-0">
          {/* Quantity stepper */}
          <div
            className="inline-flex items-center border border-border"
            data-ocid="cart-quantity"
          >
            <button
              type="button"
              onClick={() =>
                updateQuantity(
                  item.product.id,
                  item.size,
                  item.color,
                  item.quantity - 1,
                )
              }
              className="w-8 h-8 flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="w-8 text-center text-sm tabular-nums font-medium">
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() =>
                updateQuantity(
                  item.product.id,
                  item.size,
                  item.color,
                  item.quantity + 1,
                )
              }
              className="w-8 h-8 flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>

          {/* Line total */}
          <p className="text-sm font-semibold tabular-nums">
            {formatPrice(item.product.price * item.quantity)}
          </p>

          {/* Remove */}
          <button
            type="button"
            onClick={handleRemove}
            className="text-muted-foreground hover:text-destructive transition-colors"
            aria-label="Remove item"
            data-ocid="remove-item"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function OrderSummary() {
  const { subtotal, tax, shipping, total, items } = useCartStore();
  const sub = subtotal();
  const taxAmt = tax();
  const ship = shipping();
  const tot = total();

  const rows = [
    { label: "Subtotal", value: formatPrice(sub) },
    { label: "Tax (8%)", value: formatPrice(taxAmt) },
    {
      label: "Shipping",
      value: ship === 0 ? "Free" : formatPrice(ship),
      highlight: ship === 0,
    },
  ];

  return (
    <div
      className="bg-card border border-border p-6 md:sticky md:top-24"
      data-ocid="order-summary"
    >
      <h2 className="font-display text-base font-semibold uppercase tracking-widest mb-5">
        Order Summary
      </h2>

      <div className="space-y-3">
        {rows.map(({ label, value, highlight }) => (
          <div key={label} className="flex justify-between text-sm">
            <span className="text-muted-foreground">{label}</span>
            <span className={cn("font-medium", highlight && "text-primary")}>
              {value}
            </span>
          </div>
        ))}
      </div>

      <Separator className="my-4" />

      <div className="flex justify-between items-baseline">
        <span className="font-display font-semibold uppercase tracking-widest text-sm">
          Total
        </span>
        <span className="text-xl font-semibold">{formatPrice(tot)}</span>
      </div>

      {sub < 15000 && (
        <p className="text-xs text-muted-foreground mt-3 text-center">
          Add {formatPrice(15000 - sub)} more for free shipping
        </p>
      )}

      <Link to="/checkout">
        <Button
          className="w-full mt-5 h-12 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 text-xs uppercase tracking-widest font-medium"
          disabled={items.length === 0}
          data-ocid="checkout-btn"
        >
          Proceed to Checkout
        </Button>
      </Link>

      <Link to="/" className="block mt-3">
        <Button
          variant="ghost"
          className="w-full h-10 rounded-none text-xs uppercase tracking-widest font-medium text-muted-foreground"
        >
          Continue Shopping
        </Button>
      </Link>

      {/* Trust */}
      <div className="mt-5 pt-5 border-t border-border space-y-1.5">
        {["Secure SSL Checkout", "Free 30-day Returns"].map((txt) => (
          <p
            key={txt}
            className="text-[10px] text-muted-foreground text-center uppercase tracking-widest"
          >
            {txt}
          </p>
        ))}
      </div>
    </div>
  );
}

function EmptyCart() {
  return (
    <div
      className="flex flex-col items-center justify-center py-24 px-4 text-center"
      data-ocid="empty-cart"
    >
      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
        <ShoppingBag className="h-9 w-9 text-muted-foreground" />
      </div>
      <h2 className="font-display text-2xl font-semibold">
        Your cart is empty
      </h2>
      <p className="mt-2 text-muted-foreground text-sm max-w-xs">
        Looks like you haven't added anything yet. Explore our collections to
        find something you love.
      </p>
      <Link to="/">
        <Button
          className="mt-8 h-12 px-10 rounded-none bg-foreground text-background hover:bg-primary hover:text-primary-foreground text-xs uppercase tracking-widest font-medium transition-colors"
          data-ocid="shop-now-btn"
        >
          Shop Now
        </Button>
      </Link>
    </div>
  );
}

export default function Cart() {
  const { items } = useCartStore();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
            Shopping Cart
          </h1>
          {items.length > 0 && (
            <p className="text-sm text-muted-foreground mt-1">
              {items.reduce((s, i) => s + i.quantity, 0)} item
              {items.reduce((s, i) => s + i.quantity, 0) !== 1 ? "s" : ""}
            </p>
          )}
        </div>

        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid md:grid-cols-[1fr_340px] gap-8 lg:gap-12">
            {/* Cart items */}
            <div data-ocid="cart-items">
              {items.map((item) => (
                <CartRow
                  key={`${item.product.id}-${item.size}-${item.color}`}
                  item={item}
                />
              ))}
            </div>

            {/* Order summary */}
            <OrderSummary />
          </div>
        )}
      </div>
    </Layout>
  );
}
