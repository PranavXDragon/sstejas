import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Package, RefreshCw, Shield, Shuffle } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { Layout } from "../components/Layout";
import { ProductCard } from "../components/ProductCard";
import { getFeaturedProducts } from "../data/products";

// ─── Data ──────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  {
    slug: "women",
    label: "Women",
    tagline: "The Season's Edit",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop&crop=top",
  },
  {
    slug: "men",
    label: "Men",
    tagline: "Refined & Modern",
    image:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&h=800&fit=crop&crop=top",
  },
  {
    slug: "kids",
    label: "Kids",
    tagline: "Soft & Playful",
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&h=800&fit=crop&crop=top",
  },
  {
    slug: "accessories",
    label: "Accessories",
    tagline: "The Finishing Touch",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop",
  },
] as const;

const FEATURES = [
  {
    icon: Package,
    title: "Free Shipping",
    desc: "Complimentary on all orders over ₹150.",
  },
  {
    icon: RefreshCw,
    title: "Free Returns",
    desc: "30-day hassle-free returns, no questions asked.",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    desc: "SSL-encrypted checkout, every transaction.",
  },
  {
    icon: Shuffle,
    title: "Easy Exchange",
    desc: "Swap sizes or colors with zero friction.",
  },
] as const;

// ─── Hero ──────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      className="relative min-h-[96vh] flex items-end overflow-hidden bg-foreground"
      aria-label="Hero"
    >
      {/* Background editorial image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1800&h=1100&fit=crop&crop=top"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-55"
        />
        {/* Left dark gradient for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/50 to-transparent" />
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full container mx-auto px-6 lg:px-12 pb-20 lg:pb-28 pt-32">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[10px] uppercase tracking-[0.4em] text-primary mb-6 font-semibold"
          >
            New Season · 2026 Collection
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
            className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.92] text-background mb-8 tracking-tight"
          >
            The New
            <br />
            <span className="text-primary font-light italic">Minimalism</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-background/65 text-base md:text-lg leading-relaxed max-w-sm mb-10"
          >
            Curated pieces for the modern wardrobe. Timeless silhouettes,
            uncompromised quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-3"
            data-ocid="hero-ctas"
          >
            <Button
              asChild
              className="rounded-none px-8 h-12 text-[11px] uppercase tracking-[0.2em] font-semibold bg-primary text-primary-foreground hover:bg-primary/85 transition-smooth"
              data-ocid="hero-cta-women"
            >
              <Link to="/category/$slug" params={{ slug: "women" }}>
                Shop Women
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-none px-8 h-12 text-[11px] uppercase tracking-[0.2em] font-semibold border-background/40 text-background bg-transparent hover:bg-background hover:text-foreground transition-smooth"
              data-ocid="hero-cta-men"
            >
              <Link to="/category/$slug" params={{ slug: "men" }}>
                Explore Men
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    </section>
  );
}

// ─── Category Section ──────────────────────────────────────────────────────────

function CategorySection() {
  return (
    <section className="py-20 bg-background" aria-labelledby="category-heading">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-primary mb-2.5 font-semibold">
              Collections
            </p>
            <h2
              id="category-heading"
              className="font-display text-3xl md:text-4xl font-semibold"
            >
              Shop by Category
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                to="/category/$slug"
                params={{ slug: cat.slug }}
                className="group relative block aspect-[2/3] overflow-hidden bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                data-ocid={`category-card-${cat.slug}`}
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="absolute inset-0 w-full h-full object-cover transition-zoom group-hover:scale-108"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/15 to-transparent transition-smooth group-hover:from-foreground/95" />

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <p className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-primary/90 font-medium mb-1">
                    {cat.tagline}
                  </p>
                  <h3 className="font-display text-lg md:text-2xl font-semibold text-background">
                    {cat.label}
                  </h3>
                  <div className="flex items-center gap-1 mt-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-smooth">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-medium">
                      Shop Now
                    </span>
                    <ArrowRight className="h-3 w-3 text-primary" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Featured Products ─────────────────────────────────────────────────────────

function FeaturedSection() {
  const products = getFeaturedProducts();

  return (
    <section className="py-20 bg-muted/30" aria-labelledby="featured-heading">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-primary mb-2.5 font-semibold">
              Just Arrived
            </p>
            <h2
              id="featured-heading"
              className="font-display text-3xl md:text-4xl font-semibold"
            >
              New Arrivals
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-none px-6 h-10 text-[10px] uppercase tracking-[0.2em] font-medium self-start md:self-auto"
            data-ocid="view-all-arrivals"
          >
            <Link to="/category/$slug" params={{ slug: "women" }}>
              View All
              <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Link>
          </Button>
        </motion.div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
          data-ocid="featured-products"
        >
          {products.slice(0, 8).map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Shop With Us ─────────────────────────────────────────────────────────

function FeaturesSection() {
  return (
    <section
      className="py-16 bg-background border-t border-border"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          data-ocid="features-strip"
        >
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="w-12 h-12 border border-primary/25 flex items-center justify-center bg-primary/5">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold mb-1.5">
                    {f.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Editorial Banner ──────────────────────────────────────────────────────────

function EditorialBanner() {
  return (
    <section className="py-0 bg-background" aria-label="Editorial">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden aspect-[16/6] min-h-[200px]"
        >
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=525&fit=crop&crop=center"
            alt="New season editorial"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/30 to-transparent flex items-center">
            <div className="px-8 md:px-16 max-w-lg">
              <p className="text-[10px] uppercase tracking-[0.35em] text-primary font-semibold mb-3">
                Limited Edition
              </p>
              <h2 className="font-display text-2xl md:text-4xl font-semibold text-background leading-tight mb-4">
                The Autumn
                <br />
                Essentials
              </h2>
              <Button
                asChild
                className="rounded-none px-6 h-10 text-[10px] uppercase tracking-[0.2em] font-semibold bg-primary text-primary-foreground hover:bg-primary/85"
              >
                <Link to="/category/$slug" params={{ slug: "women" }}>
                  Shop the Edit
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Newsletter ───────────────────────────────────────────────────────────────

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    toast.success("You're subscribed!", {
      description: "Watch for exclusive offers and new arrivals.",
      duration: 5000,
    });
    setEmail("");
  };

  return (
    <section
      className="py-24 bg-foreground"
      aria-labelledby="newsletter-heading"
    >
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-lg mx-auto"
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-primary mb-4 font-semibold">
            Stay Connected
          </p>
          <h2
            id="newsletter-heading"
            className="font-display text-3xl md:text-4xl font-semibold text-background mb-4"
          >
            The Insider Edit
          </h2>
          <p className="text-background/55 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
            First access to new arrivals, exclusive offers, and style
            inspiration — straight to your inbox.
          </p>

          {submitted ? (
            <p className="text-primary text-sm font-medium py-4">
              ✓ Thank you for subscribing!
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex gap-0 max-w-sm mx-auto"
              data-ocid="newsletter-form"
            >
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-none border-background/20 bg-background/10 text-background placeholder:text-background/35 focus-visible:ring-primary flex-1 h-11"
                aria-label="Email address for newsletter"
                data-ocid="newsletter-email"
              />
              <Button
                type="submit"
                className="rounded-none px-6 h-11 bg-primary text-primary-foreground hover:bg-primary/85 uppercase tracking-[0.2em] text-[10px] font-semibold shrink-0"
                data-ocid="newsletter-submit"
              >
                Join
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <Layout fullWidth>
      <HeroSection />
      <CategorySection />
      <FeaturedSection />
      <FeaturesSection />
      <EditorialBanner />
      <NewsletterSection />
    </Layout>
  );
}
