import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  PackageCheck,
  RefreshCw,
  RotateCcw,
  Truck,
} from "lucide-react";
import { Layout } from "../components/Layout";

const RETURN_STEPS = [
  {
    number: "01",
    icon: RotateCcw,
    title: "Initiate Online",
    description:
      "Log into your account, go to My Orders, and select the item(s) you'd like to return. Our system will generate a prepaid return label within minutes.",
  },
  {
    number: "02",
    icon: PackageCheck,
    title: "Pack Your Items",
    description:
      "Fold items neatly and place them in their original packaging if possible. Ensure all tags are attached and the garments are unworn and unwashed.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Ship It Back",
    description:
      "Print your prepaid return label and attach it to your package. Drop it off at any UPS, FedEx, or USPS location. No cost to you.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Refund Processed",
    description:
      "Once we receive and inspect your return (1–2 business days), your refund is issued within 5–10 business days to your original payment method.",
  },
];

const NON_RETURNABLE = [
  "Final sale and clearance items (marked at checkout)",
  "Intimates, underwear, and hosiery",
  "Swimwear and bodysuits",
  "Items that have been worn, washed, or altered",
  "Items missing original tags or packaging",
  "Gift cards",
];

const REFUND_TIMELINE = [
  { step: "Item arrives at our warehouse", time: "Day 1–2" },
  { step: "Quality inspection completed", time: "Day 2–3" },
  { step: "Refund initiated to payment provider", time: "Day 3–5" },
  { step: "Funds appear in your account", time: "Day 5–10" },
];

export default function ReturnsPage() {
  return (
    <Layout>
      {/* Page header */}
      <section className="bg-muted/40 border-b border-border py-14 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Customer Care
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Returns &amp; Exchanges
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-md mx-auto">
            Shop with confidence. Free returns on all full-price items within 30
            days.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-14 space-y-16">
        {/* Policy overview */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-8 rounded-sm bg-primary/10 flex items-center justify-center">
              <RefreshCw className="h-4 w-4 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-semibold">
              Our Return Policy
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                stat: "30 Days",
                label: "Return window",
                detail: "From date of delivery",
              },
              {
                stat: "Free",
                label: "Return shipping",
                detail: "Prepaid label provided",
              },
              {
                stat: "5–10 Days",
                label: "Refund timeline",
                detail: "After we receive the item",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="bg-card border border-border rounded-sm p-6 text-center"
              >
                <p className="font-display text-3xl font-semibold text-primary">
                  {item.stat}
                </p>
                <p className="text-sm font-medium mt-1">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-card border border-border rounded-sm p-6 text-sm text-muted-foreground leading-relaxed">
            <p>
              Items must be{" "}
              <strong className="text-foreground">
                unworn, unwashed, and in original condition
              </strong>{" "}
              with all tags attached. Returns initiated after 30 days of
              delivery, or items not meeting condition requirements, may be
              declined.
            </p>
          </div>
        </section>

        {/* How to return */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-8 rounded-sm bg-primary/10 flex items-center justify-center">
              <Truck className="h-4 w-4 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-semibold">
              How to Return
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {RETURN_STEPS.map((step, i) => (
              <div
                key={step.number}
                className="bg-card border border-border rounded-sm p-6 relative overflow-hidden hover:border-primary/40 transition-colors"
              >
                <div className="absolute top-4 right-4 font-display text-5xl font-bold text-muted/60 select-none leading-none">
                  {step.number}
                </div>
                <div className="h-10 w-10 rounded-sm bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {i < RETURN_STEPS.length - 1 && (
                  <div className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="h-6 w-6 bg-background border border-border rounded-full flex items-center justify-center">
                      <ArrowRight className="h-3 w-3 text-muted-foreground" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Refund timeline */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-8 rounded-sm bg-primary/10 flex items-center justify-center">
              <Clock className="h-4 w-4 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-semibold">
              Refund Timeline
            </h2>
          </div>
          <div className="bg-card border border-border rounded-sm overflow-hidden">
            {REFUND_TIMELINE.map((row, i) => (
              <div
                key={row.step}
                className={`flex items-center justify-between px-6 py-4 text-sm ${i < REFUND_TIMELINE.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                  </div>
                  <span>{row.step}</span>
                </div>
                <span className="text-muted-foreground font-medium text-xs shrink-0 ml-4">
                  {row.time}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            * Timelines are business days and may vary during peak periods. You
            will receive an email confirmation at each step.
          </p>
        </section>

        {/* Exchanges */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-8 rounded-sm bg-primary/10 flex items-center justify-center">
              <RefreshCw className="h-4 w-4 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-semibold">Exchanges</h2>
          </div>
          <div className="bg-card border border-border rounded-sm p-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Need a different size or color? Follow the same process as a
              return — just select{" "}
              <strong className="text-foreground">"Exchange"</strong> instead of
              "Refund" when initiating online.
            </p>
            <p>
              Choose your preferred replacement size or color and we'll ship it
              out as soon as your original item is received and inspected.{" "}
              <strong className="text-foreground">
                Exchanges ship free of charge.
              </strong>
            </p>
            <p>
              If the item you want is out of stock, we'll automatically issue a
              refund and notify you by email.
            </p>
          </div>
        </section>

        {/* Non-returnable items */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-8 rounded-sm bg-destructive/10 flex items-center justify-center">
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </div>
            <h2 className="font-display text-2xl font-semibold">
              Non-Returnable Items
            </h2>
          </div>
          <div className="bg-card border border-border rounded-sm p-6">
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              For hygiene and quality reasons, the following items cannot be
              returned or exchanged:
            </p>
            <ul className="space-y-3">
              {NON_RETURNABLE.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact CTA */}
        <section
          className="bg-primary/5 border border-primary/20 rounded-sm p-8 text-center"
          data-ocid="returns-contact-cta"
        >
          <h3 className="font-display text-xl font-semibold">
            Need Help with a Return?
          </h3>
          <p className="mt-2 text-muted-foreground text-sm max-w-sm mx-auto">
            Our customer care team is here to help. Reach out and we'll guide
            you through the process.
          </p>
          <Link to="/contact">
            <Button
              className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90 px-8"
              data-ocid="returns-contact-btn"
            >
              Contact Support
            </Button>
          </Link>
        </section>
      </div>
    </Layout>
  );
}
