import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "@tanstack/react-router";
import {
  AlertCircle,
  ChevronRight,
  CreditCard,
  MapPin,
  Package,
  Truck,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Layout } from "../components/Layout";
import { useCreateOrder } from "../hooks/useBackend";
import { formatPrice } from "../lib/utils";
import { useCartStore } from "../store/cartStore";
import type { OrderItem, ShippingAddress } from "../types";

// ─── Types ────────────────────────────────────────────────────────────────────

type Step = 1 | 2 | 3 | 4;

interface ShippingFormValues {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

type DeliveryMethod = "standard" | "express" | "overnight";

const DELIVERY_OPTIONS: {
  id: DeliveryMethod;
  label: string;
  days: string;
  price: number;
  eta: string;
}[] = [
  {
    id: "standard",
    label: "Standard",
    days: "5-7 days",
    price: 0,
    eta: "Free",
  },
  {
    id: "express",
    label: "Express",
    days: "2-3 days",
    price: 1299,
    eta: "₹12.99",
  },
  {
    id: "overnight",
    label: "Overnight",
    days: "Next day",
    price: 2499,
    eta: "₹24.99",
  },
];

const STEPS = [
  { id: 1, label: "Shipping", icon: MapPin },
  { id: 2, label: "Delivery", icon: Truck },
  { id: 3, label: "Payment", icon: CreditCard },
  { id: 4, label: "Review", icon: Package },
] as const;

// ─── Progress Indicator ───────────────────────────────────────────────────────

function ProgressBar({
  currentStep,
  onBack,
}: {
  currentStep: Step;
  onBack: () => void;
}) {
  return (
    <div className="bg-card border-b border-border py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-0">
          {STEPS.map((step, index) => {
            const done = currentStep > step.id;
            const active = currentStep === step.id;
            const Icon = step.icon;
            return (
              <div key={step.id} className="flex items-center">
                <button
                  type="button"
                  onClick={step.id < currentStep ? onBack : undefined}
                  disabled={step.id >= currentStep}
                  className={`flex flex-col items-center gap-1.5 px-3 sm:px-5 group ${step.id < currentStep ? "cursor-pointer" : "cursor-default"}`}
                  aria-label={`Step ${step.id}: ${step.label}`}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all ${
                      done
                        ? "bg-primary border-primary"
                        : active
                          ? "border-primary bg-background"
                          : "border-border bg-background"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 ${done ? "text-primary-foreground" : active ? "text-primary" : "text-muted-foreground"}`}
                    />
                  </div>
                  <span
                    className={`text-xs font-medium hidden sm:block ${active ? "text-foreground" : done ? "text-primary" : "text-muted-foreground"}`}
                  >
                    {step.label}
                  </span>
                </button>
                {index < STEPS.length - 1 && (
                  <div
                    className={`h-px w-8 sm:w-16 mb-4 transition-all ${currentStep > step.id ? "bg-primary" : "bg-border"}`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Order Summary Sidebar ────────────────────────────────────────────────────

function OrderSummary({ delivery }: { delivery: DeliveryMethod }) {
  const items = useCartStore((s) => s.items);
  const subtotal = useCartStore((s) => s.subtotal());
  const tax = useCartStore((s) => s.tax());
  const deliveryPrice =
    DELIVERY_OPTIONS.find((d) => d.id === delivery)?.price ?? 0;
  const grandTotal = subtotal + tax + deliveryPrice;

  return (
    <div className="bg-card border border-border p-6 sticky top-24">
      <h3 className="font-display font-semibold text-sm uppercase tracking-widest mb-4">
        Order Summary
      </h3>
      <div className="space-y-3 max-h-60 overflow-y-auto">
        {items.map((item) => (
          <div
            key={`${item.product.id}-${item.size}-${item.color}`}
            className="flex gap-3"
          >
            <div className="w-12 h-16 bg-muted shrink-0 overflow-hidden">
              {item.product.images[0] && (
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium truncate">
                {item.product.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {item.size} · {item.color} · Qty {item.quantity}
              </p>
              <p className="text-xs font-medium mt-0.5">
                {formatPrice(item.product.price * item.quantity)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Separator className="my-4" />
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span>
            {deliveryPrice === 0 ? "Free" : formatPrice(deliveryPrice)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tax (8%)</span>
          <span>{formatPrice(tax)}</span>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex justify-between font-display font-semibold">
        <span>Total</span>
        <span>{formatPrice(grandTotal)}</span>
      </div>
    </div>
  );
}

// ─── Step 1: Shipping ─────────────────────────────────────────────────────────

function ShippingStep({
  onNext,
  defaultValues,
}: {
  onNext: (data: ShippingFormValues) => void;
  defaultValues?: ShippingFormValues;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormValues>({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-5">
      <h2 className="font-display text-xl font-semibold">Shipping Address</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            {...register("fullName", { required: "Full name is required" })}
            placeholder="Jane Smith"
            data-ocid="shipping-fullname"
          />
          {errors.fullName && (
            <p className="text-xs text-destructive">
              {errors.fullName.message}
            </p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/, message: "Invalid email" },
            })}
            placeholder="jane@example.com"
            data-ocid="shipping-email"
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone", { required: "Phone is required" })}
            placeholder="+1 (555) 000-0000"
            data-ocid="shipping-phone"
          />
          {errors.phone && (
            <p className="text-xs text-destructive">{errors.phone.message}</p>
          )}
        </div>
        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="addressLine1">Address Line 1 *</Label>
          <Input
            id="addressLine1"
            {...register("addressLine1", { required: "Address is required" })}
            placeholder="123 Fashion Avenue"
            data-ocid="shipping-address1"
          />
          {errors.addressLine1 && (
            <p className="text-xs text-destructive">
              {errors.addressLine1.message}
            </p>
          )}
        </div>
        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="addressLine2">
            Address Line 2{" "}
            <span className="text-muted-foreground text-xs">(optional)</span>
          </Label>
          <Input
            id="addressLine2"
            {...register("addressLine2")}
            placeholder="Apt 4B"
            data-ocid="shipping-address2"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="city">City *</Label>
          <Input
            id="city"
            {...register("city", { required: "City is required" })}
            placeholder="New York"
            data-ocid="shipping-city"
          />
          {errors.city && (
            <p className="text-xs text-destructive">{errors.city.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="state">State *</Label>
          <Input
            id="state"
            {...register("state", { required: "State is required" })}
            placeholder="NY"
            data-ocid="shipping-state"
          />
          {errors.state && (
            <p className="text-xs text-destructive">{errors.state.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="postalCode">ZIP Code *</Label>
          <Input
            id="postalCode"
            {...register("postalCode", { required: "ZIP code is required" })}
            placeholder="10001"
            data-ocid="shipping-zip"
          />
          {errors.postalCode && (
            <p className="text-xs text-destructive">
              {errors.postalCode.message}
            </p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="country">Country *</Label>
          <Input
            id="country"
            {...register("country", { required: "Country is required" })}
            placeholder="United States"
            defaultValue="United States"
            data-ocid="shipping-country"
          />
          {errors.country && (
            <p className="text-xs text-destructive">{errors.country.message}</p>
          )}
        </div>
      </div>
      <div className="flex justify-end pt-2">
        <Button
          type="submit"
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
          data-ocid="checkout-next-shipping"
        >
          Continue to Delivery
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}

// ─── Step 2: Delivery ─────────────────────────────────────────────────────────

function DeliveryStep({
  selected,
  onSelect,
  onNext,
  onBack,
}: {
  selected: DeliveryMethod;
  onSelect: (m: DeliveryMethod) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  function getEta(days: string) {
    const now = new Date();
    const daysMap: Record<string, number> = {
      "5-7 days": 6,
      "2-3 days": 2,
      "Next day": 1,
    };
    const d = daysMap[days] ?? 5;
    now.setDate(now.getDate() + d);
    return now.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  }

  return (
    <div className="space-y-5">
      <h2 className="font-display text-xl font-semibold">Delivery Method</h2>
      <div className="space-y-3">
        {DELIVERY_OPTIONS.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => onSelect(opt.id)}
            className={`w-full text-left p-4 border-2 transition-all flex items-center justify-between gap-4 ${
              selected === opt.id
                ? "border-primary bg-primary/5"
                : "border-border bg-card hover:border-primary/40"
            }`}
            data-ocid={`delivery-${opt.id}`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  selected === opt.id
                    ? "border-primary"
                    : "border-muted-foreground"
                }`}
              >
                {selected === opt.id && (
                  <div className="w-2 h-2 rounded-full bg-primary" />
                )}
              </div>
              <div>
                <p className="font-medium">
                  {opt.label}{" "}
                  <span className="text-muted-foreground font-normal text-sm">
                    ({opt.days})
                  </span>
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Estimated delivery: {getEta(opt.days)}
                </p>
              </div>
            </div>
            <span
              className={`font-semibold text-sm shrink-0 ${opt.price === 0 ? "text-primary" : "text-foreground"}`}
            >
              {opt.eta}
            </span>
          </button>
        ))}
      </div>
      <div className="flex justify-between pt-2">
        <Button variant="outline" onClick={onBack} data-ocid="checkout-back">
          Back
        </Button>
        <Button
          onClick={onNext}
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
          data-ocid="checkout-next-delivery"
        >
          Continue to Payment
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

// ─── Step 3: Payment ──────────────────────────────────────────────────────────

function PaymentStep({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  const formatCard = (v: string) =>
    v
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();

  const formatExpiry = (v: string) => {
    const cleaned = v.replace(/\D/g, "").slice(0, 4);
    if (cleaned.length >= 3)
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    return cleaned;
  };

  const isValid =
    cardNumber.replace(/\s/g, "").length === 16 &&
    expiry.length === 5 &&
    cvv.length >= 3 &&
    nameOnCard.trim().length > 0;

  return (
    <div className="space-y-5">
      <h2 className="font-display text-xl font-semibold">Payment Details</h2>
      <div className="bg-card border border-border p-6 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <CreditCard className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground font-medium">
            Secure Payment
          </span>
          <Badge variant="secondary" className="text-xs ml-auto">
            SSL Encrypted
          </Badge>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="nameOnCard">Name on Card</Label>
          <Input
            id="nameOnCard"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            placeholder="Jane Smith"
            data-ocid="payment-name"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="cardNumber">Card Number</Label>
          <Input
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCard(e.target.value))}
            placeholder="0000 0000 0000 0000"
            inputMode="numeric"
            data-ocid="payment-card-number"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="expiry">Expiry Date</Label>
            <Input
              id="expiry"
              value={expiry}
              onChange={(e) => setExpiry(formatExpiry(e.target.value))}
              placeholder="MM/YY"
              inputMode="numeric"
              data-ocid="payment-expiry"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="cvv">CVV</Label>
            <Input
              id="cvv"
              value={cvv}
              onChange={(e) =>
                setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))
              }
              placeholder="123"
              inputMode="numeric"
              type="password"
              data-ocid="payment-cvv"
            />
          </div>
        </div>
        <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-2">
          <AlertCircle className="h-3 w-3" />
          Your payment info is encrypted and secure. We never store card
          details.
        </p>
      </div>
      <div className="flex justify-between pt-2">
        <Button variant="outline" onClick={onBack} data-ocid="checkout-back">
          Back
        </Button>
        <Button
          onClick={onNext}
          disabled={!isValid}
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 disabled:opacity-50"
          data-ocid="checkout-next-payment"
        >
          Review Order
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

// ─── Step 4: Review ───────────────────────────────────────────────────────────

function ReviewStep({
  shipping,
  delivery,
  onBack,
  onPlaceOrder,
  isPlacing,
}: {
  shipping: ShippingFormValues;
  delivery: DeliveryMethod;
  onBack: () => void;
  onPlaceOrder: () => void;
  isPlacing: boolean;
}) {
  const items = useCartStore((s) => s.items);
  const subtotal = useCartStore((s) => s.subtotal());
  const tax = useCartStore((s) => s.tax());
  const deliveryOption = DELIVERY_OPTIONS.find((d) => d.id === delivery)!;
  const grandTotal = subtotal + tax + deliveryOption.price;

  return (
    <div className="space-y-6">
      <h2 className="font-display text-xl font-semibold">Review Your Order</h2>

      {/* Shipping */}
      <div className="bg-card border border-border p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold uppercase tracking-widest">
            Shipping Address
          </h3>
          <button
            type="button"
            onClick={onBack}
            className="text-xs text-primary hover:underline"
          >
            Edit
          </button>
        </div>
        <p className="text-sm">{shipping.fullName}</p>
        <p className="text-sm text-muted-foreground">
          {shipping.addressLine1}
          {shipping.addressLine2 ? `, ${shipping.addressLine2}` : ""}
        </p>
        <p className="text-sm text-muted-foreground">
          {shipping.city}, {shipping.state} {shipping.postalCode}
        </p>
        <p className="text-sm text-muted-foreground">{shipping.country}</p>
        <p className="text-sm text-muted-foreground mt-1">{shipping.email}</p>
      </div>

      {/* Delivery */}
      <div className="bg-card border border-border p-5">
        <h3 className="text-sm font-semibold uppercase tracking-widest mb-3">
          Delivery Method
        </h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">{deliveryOption.label}</p>
            <p className="text-xs text-muted-foreground">
              {deliveryOption.days}
            </p>
          </div>
          <span className="text-sm font-semibold">
            {deliveryOption.price === 0
              ? "Free"
              : formatPrice(deliveryOption.price)}
          </span>
        </div>
      </div>

      {/* Items */}
      <div className="bg-card border border-border p-5">
        <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">
          Items ({items.length})
        </h3>
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={`${item.product.id}-${item.size}-${item.color}`}
              className="flex gap-3"
            >
              <div className="w-12 h-16 bg-muted shrink-0 overflow-hidden">
                {item.product.images[0] && (
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">
                  {item.product.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {item.size} · {item.color} · Qty {item.quantity}
                </p>
              </div>
              <span className="text-sm font-medium shrink-0">
                {formatPrice(item.product.price * item.quantity)}
              </span>
            </div>
          ))}
        </div>
        <Separator className="my-4" />
        <div className="space-y-1.5 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Shipping</span>
            <span>
              {deliveryOption.price === 0
                ? "Free"
                : formatPrice(deliveryOption.price)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Tax</span>
            <span>{formatPrice(tax)}</span>
          </div>
        </div>
        <Separator className="my-3" />
        <div className="flex justify-between font-display font-bold text-lg">
          <span>Total</span>
          <span>{formatPrice(grandTotal)}</span>
        </div>
      </div>

      <div className="flex justify-between pt-2">
        <Button variant="outline" onClick={onBack} data-ocid="checkout-back">
          Back
        </Button>
        <Button
          onClick={onPlaceOrder}
          disabled={isPlacing}
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-3 h-auto font-semibold text-base"
          data-ocid="place-order-btn"
        >
          {isPlacing ? "Placing Order…" : "Place Order"}
        </Button>
      </div>
    </div>
  );
}

// ─── Main Checkout Page ───────────────────────────────────────────────────────

export default function Checkout() {
  const navigate = useNavigate();
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const subtotal = useCartStore((s) => s.subtotal());
  const tax = useCartStore((s) => s.tax());

  const [step, setStep] = useState<Step>(1);
  const [shippingData, setShippingData] = useState<ShippingFormValues | null>(
    null,
  );
  const [delivery, setDelivery] = useState<DeliveryMethod>("standard");
  const createOrder = useCreateOrder();

  // Guard: redirect if cart is empty
  useEffect(() => {
    if (items.length === 0) {
      void navigate({ to: "/cart" });
    }
  }, [items.length, navigate]);

  const handleShippingNext = (data: ShippingFormValues) => {
    setShippingData(data);
    setStep(2);
  };

  const handlePlaceOrder = async () => {
    if (!shippingData) return;
    const deliveryOption = DELIVERY_OPTIONS.find((d) => d.id === delivery)!;
    const grandTotal = subtotal + tax + deliveryOption.price;

    const orderItems: OrderItem[] = items.map((item) => ({
      productId: item.product.id,
      productName: item.product.name,
      price: item.product.price,
      quantity: item.quantity,
      size: item.size,
      color: item.color,
    }));

    const address: ShippingAddress = {
      fullName: shippingData.fullName,
      addressLine1: shippingData.addressLine1,
      addressLine2: shippingData.addressLine2 ?? "",
      city: shippingData.city,
      state: shippingData.state,
      postalCode: shippingData.postalCode,
      country: shippingData.country,
    };

    const result = await createOrder.mutateAsync({
      items: orderItems,
      shippingAddress: address,
      totalAmount: grandTotal,
    });

    if (result.ok) {
      const order = result.ok as { id: string };
      clearCart();
      void navigate({
        to: "/order-confirmation/$id",
        params: { id: order.id },
      });
    }
  };

  if (items.length === 0) return null;

  return (
    <Layout>
      <ProgressBar
        currentStep={step}
        onBack={() => setStep((s) => Math.max(1, s - 1) as Step)}
      />
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <ShippingStep
                onNext={handleShippingNext}
                defaultValues={shippingData ?? undefined}
              />
            )}
            {step === 2 && (
              <DeliveryStep
                selected={delivery}
                onSelect={setDelivery}
                onNext={() => setStep(3)}
                onBack={() => setStep(1)}
              />
            )}
            {step === 3 && (
              <PaymentStep
                onNext={() => setStep(4)}
                onBack={() => setStep(2)}
              />
            )}
            {step === 4 && shippingData && (
              <ReviewStep
                shipping={shippingData}
                delivery={delivery}
                onBack={() => setStep(3)}
                onPlaceOrder={handlePlaceOrder}
                isPlacing={createOrder.isPending}
              />
            )}
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block">
            <OrderSummary delivery={delivery} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
