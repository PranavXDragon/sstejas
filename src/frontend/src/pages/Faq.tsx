import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import { MessageCircle, Search } from "lucide-react";
import { useState } from "react";
import { Layout } from "../components/Layout";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqSection {
  title: string;
  items: FaqItem[];
}

const FAQ_DATA: FaqSection[] = [
  {
    title: "Ordering & Shipping",
    items: [
      {
        q: "How long does shipping take?",
        a: "Standard shipping takes 5–7 business days. Expedited shipping (2–3 days) and overnight options are available at checkout. Orders placed before 2pm ET ship the same day.",
      },
      {
        q: "Do you offer free shipping?",
        a: "Yes! All orders over ₹150 qualify for complimentary standard shipping. Orders under ₹150 ship for a flat ₹8 fee. International shipping rates vary by destination.",
      },
      {
        q: "How do I track my order?",
        a: "Once your order ships, you'll receive a confirmation email with a tracking number. You can also view real-time status in your account under 'My Orders'. Tracking updates every 4–6 hours.",
      },
      {
        q: "Can I change or cancel my order after placing it?",
        a: "Orders can be modified or cancelled within 1 hour of placement. After that, our fulfillment team begins processing. Contact us immediately at support@luxestep.com if you need to make changes.",
      },
      {
        q: "Do you ship internationally?",
        a: "We ship to over 40 countries worldwide. International orders typically arrive within 10–14 business days. Customs duties and taxes are the responsibility of the recipient and vary by country.",
      },
      {
        q: "What if my package is lost or damaged?",
        a: "If your order is lost or arrives damaged, please contact us within 14 days of the expected delivery date. We'll file a claim on your behalf and send a replacement or full refund.",
      },
    ],
  },
  {
    title: "Returns & Exchanges",
    items: [
      {
        q: "What is your return policy?",
        a: "We accept returns within 30 days of delivery. Items must be unworn, unwashed, and in original condition with all tags attached. Sale items and intimates are final sale.",
      },
      {
        q: "How do I start a return?",
        a: "Initiate your return online through your account or our Returns page. You'll receive a prepaid return label by email. Pack items securely and drop off at any carrier location.",
      },
      {
        q: "How long do refunds take?",
        a: "Once we receive and inspect your return (1–2 business days), refunds are processed within 5–10 business days to your original payment method. You'll receive an email confirmation.",
      },
      {
        q: "Can I exchange for a different size or color?",
        a: "Absolutely. Exchanges are handled the same way as returns — initiate through your account or the Returns page. Select 'Exchange' and choose your preferred size or color. We'll ship the new item as soon as your return is received.",
      },
    ],
  },
  {
    title: "Products & Sizing",
    items: [
      {
        q: "How do I find my size?",
        a: "Each product page includes a detailed size guide with measurements in both US and EU sizes. If you're between sizes, we generally recommend sizing up for a relaxed fit or down for a tailored look.",
      },
      {
        q: "Are your products sustainable?",
        a: "Sustainability is core to our brand. We partner with factories that use certified organic cottons, recycled fabrics, and low-impact dyes. Our packaging is 100% recyclable. We're committed to reducing our carbon footprint year over year.",
      },
      {
        q: "What fabrics do you use?",
        a: "We use premium natural and recycled materials including GOTS-certified organic cotton, TENCEL™ lyocell, recycled cashmere, and responsible wools. Fabric composition is listed on every product page.",
      },
      {
        q: "How do I care for my garments?",
        a: "Care instructions are printed on the garment label and listed on the product page. Most pieces are best cared for with a cold gentle wash and air dry. We recommend keeping knitwear flat to preserve shape.",
      },
    ],
  },
  {
    title: "Payments & Security",
    items: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit and debit cards (Visa, Mastercard, Amex), PayPal, Apple Pay, and Google Pay. All transactions are encrypted with TLS 1.3 and PCI-DSS compliant.",
      },
      {
        q: "Is my payment information secure?",
        a: "Yes. We never store your full card details. All payment data is processed securely through Stripe, a PCI Level 1 certified provider. Your information is encrypted end-to-end.",
      },
      {
        q: "Can I use a discount code?",
        a: "Discount codes can be entered at checkout in the 'Promo Code' field. Only one code may be applied per order. Codes cannot be combined with other promotions or applied to sale items.",
      },
    ],
  },
];

export default function FaqPage() {
  const [query, setQuery] = useState("");

  const filtered = FAQ_DATA.map((section) => ({
    ...section,
    items: section.items.filter(
      (item) =>
        query.trim() === "" ||
        item.q.toLowerCase().includes(query.toLowerCase()) ||
        item.a.toLowerCase().includes(query.toLowerCase()),
    ),
  })).filter((section) => section.items.length > 0);

  const totalResults = filtered.reduce((acc, s) => acc + s.items.length, 0);

  return (
    <Layout>
      {/* Page header */}
      <section className="bg-muted/40 border-b border-border py-14 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Support
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-md mx-auto">
            Everything you need to know about shopping with LUXESTEP.
          </p>
          {/* Search */}
          <div
            className="relative mt-8 max-w-xl mx-auto"
            data-ocid="faq-search"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions..."
              className="pl-11 h-12 text-base bg-card border-border rounded-sm focus-visible:ring-primary"
              data-ocid="faq-search-input"
            />
          </div>
          {query.trim() && (
            <p className="mt-3 text-sm text-muted-foreground">
              {totalResults === 0
                ? "No results found — try different keywords."
                : `${totalResults} result${totalResults !== 1 ? "s" : ""} for "${query}"`}
            </p>
          )}
        </div>
      </section>

      {/* FAQ sections */}
      <section className="container mx-auto max-w-3xl px-4 py-14">
        {filtered.length === 0 ? (
          <div className="text-center py-16" data-ocid="faq-empty">
            <p className="text-muted-foreground text-lg">
              No questions match your search.
            </p>
            <Button
              variant="ghost"
              className="mt-4"
              onClick={() => setQuery("")}
            >
              Clear search
            </Button>
          </div>
        ) : (
          <div className="space-y-12">
            {filtered.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 pb-3 border-b border-border">
                  {section.title}
                </h2>
                <Accordion
                  type="multiple"
                  className="space-y-1"
                  data-ocid={`faq-section-${section.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {section.items.map((item) => (
                    <AccordionItem
                      key={item.q}
                      value={`${section.title}-${item.q}`}
                      className="border border-border rounded-sm px-5 data-[state=open]:border-primary/40 data-[state=open]:bg-card transition-colors"
                    >
                      <AccordionTrigger className="text-left font-medium text-sm py-5 hover:text-primary hover:no-underline transition-colors [&>svg]:text-muted-foreground [&>svg]:shrink-0">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        )}

        {/* Contact CTA */}
        <div
          className="mt-16 bg-card border border-border rounded-sm p-8 text-center"
          data-ocid="faq-contact-cta"
        >
          <MessageCircle className="h-8 w-8 text-primary mx-auto mb-4" />
          <h3 className="font-display text-xl font-semibold">
            Still have questions?
          </h3>
          <p className="mt-2 text-muted-foreground text-sm max-w-sm mx-auto">
            Our support team is available Monday–Friday, 9am–6pm ET. We
            typically respond within 24 hours.
          </p>
          <Link to="/contact">
            <Button
              className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90 px-8"
              data-ocid="faq-contact-btn"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
