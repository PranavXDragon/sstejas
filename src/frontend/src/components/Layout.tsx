import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { Link, useNavigate } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";
import { useCartStore } from "../store/cartStore";
import { useWishlistStore } from "../store/wishlistStore";

const NAV_CATEGORIES = [
  { label: "Women", slug: "women" },
  { label: "Men", slug: "men" },
  { label: "Kids", slug: "kids" },
  { label: "Accessories", slug: "accessories" },
];

const FOOTER_LINKS = {
  Shop: [
    { label: "New Arrivals", href: "/category/women" as const },
    { label: "Women", href: "/category/women" as const },
    { label: "Men", href: "/category/men" as const },
    { label: "Kids", href: "/category/kids" as const },
    { label: "Accessories", href: "/category/accessories" as const },
  ],
  Help: [
    { label: "FAQ", href: "/faq" as const },
    { label: "Contact Us", href: "/contact" as const },
    { label: "Returns & Exchanges", href: "/returns" as const },
    { label: "Order Tracking", href: "/orders" as const },
  ],
  Company: [
    { label: "About LUXESTEP", href: "/" as const },
    { label: "Sustainability", href: "/" as const },
    { label: "Careers", href: "/" as const },
    { label: "Privacy Policy", href: "/" as const },
  ],
};

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate({ to: "/category/$slug", params: { slug: "women" } });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-start justify-center pt-24 px-4 animate-fade-in">
      <div className="w-full max-w-2xl">
        <form onSubmit={handleSearch} className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for styles, brands, categories..."
            className="pl-12 pr-12 h-14 text-lg border-b-2 border-border rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-primary"
            data-ocid="search-input"
          />
          <button type="submit" className="sr-only">
            Search
          </button>
        </form>
        <p className="text-sm text-muted-foreground mt-3">
          Press Enter to search or Escape to close
        </p>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 p-2 hover:text-foreground text-muted-foreground transition-colors"
        aria-label="Close search"
      >
        <X className="h-6 w-6" />
      </button>
    </div>
  );
}

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const itemCount = useCartStore((s) => s.itemCount());
  const wishlistCount = useWishlistStore((s) => s.productIds.length);
  const { isLoginSuccess, login, clear } = useInternetIdentity();

  const isLoggedIn = isLoginSuccess;

  return (
    <>
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
      <header
        className="sticky top-0 z-40 bg-card border-b border-border shadow-subtle"
        data-ocid="main-nav"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Mobile menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="lg:hidden p-2 -ml-2"
                  aria-label="Open menu"
                  data-ocid="mobile-menu-trigger"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 bg-card p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-border">
                    <Link
                      to="/"
                      onClick={() => setMobileOpen(false)}
                      className="font-display text-xl tracking-[0.15em] uppercase font-semibold"
                    >
                      LUXESTEP
                    </Link>
                  </div>
                  <nav className="flex-1 p-6 space-y-1">
                    {NAV_CATEGORIES.map((cat) => (
                      <Link
                        key={cat.slug}
                        to="/category/$slug"
                        params={{ slug: cat.slug }}
                        onClick={() => setMobileOpen(false)}
                        className="block py-3 text-base font-medium border-b border-border/50 hover:text-primary transition-colors"
                        data-ocid={`mobile-nav-${cat.slug}`}
                      >
                        {cat.label}
                      </Link>
                    ))}
                    <Link
                      to="/wishlist"
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-base font-medium border-b border-border/50 hover:text-primary transition-colors"
                    >
                      Wishlist {wishlistCount > 0 && `(${wishlistCount})`}
                    </Link>
                    <Link
                      to="/orders"
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-base font-medium border-b border-border/50 hover:text-primary transition-colors"
                    >
                      My Orders
                    </Link>
                    <Link
                      to="/faq"
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-base font-medium border-b border-border/50 hover:text-primary transition-colors"
                    >
                      FAQ
                    </Link>
                    <Link
                      to="/contact"
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-base font-medium hover:text-primary transition-colors"
                    >
                      Contact
                    </Link>
                  </nav>
                  <div className="p-6 border-t border-border">
                    {isLoggedIn ? (
                      <Button
                        variant="outline"
                        onClick={clear}
                        className="w-full"
                      >
                        Sign Out
                      </Button>
                    ) : (
                      <Button
                        onClick={login}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        Sign In
                      </Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link
              to="/"
              className="font-display text-lg lg:text-xl tracking-[0.2em] uppercase font-semibold absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
            >
              LUXESTEP
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-8 ml-10"
              onMouseLeave={() => setActiveCategory(null)}
            >
              {NAV_CATEGORIES.map((cat) => (
                <div
                  key={cat.slug}
                  className="relative group"
                  onMouseEnter={() => setActiveCategory(cat.slug)}
                >
                  <Link
                    to="/category/$slug"
                    params={{ slug: cat.slug }}
                    className={cn(
                      "text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary pb-1",
                      activeCategory === cat.slug
                        ? "text-primary border-b border-primary"
                        : "text-foreground",
                    )}
                    data-ocid={`nav-${cat.slug}`}
                  >
                    {cat.label}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="p-2 hover:text-primary transition-colors"
                aria-label="Search"
                data-ocid="search-trigger"
              >
                <Search className="h-5 w-5" />
              </button>

              <Link
                to="/wishlist"
                className="relative p-2 hover:text-primary transition-colors hidden sm:block"
                aria-label="Wishlist"
                data-ocid="wishlist-nav"
              >
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px] bg-primary text-primary-foreground border-0 rounded-full">
                    {wishlistCount}
                  </Badge>
                )}
              </Link>

              {isLoggedIn ? (
                <Link
                  to="/profile"
                  className="p-2 hover:text-primary transition-colors hidden sm:block"
                  aria-label="Profile"
                  data-ocid="user-nav"
                >
                  <User className="h-5 w-5" />
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={login}
                  className="p-2 hover:text-primary transition-colors hidden sm:block"
                  aria-label="Sign in"
                  data-ocid="user-nav"
                >
                  <User className="h-5 w-5" />
                </button>
              )}

              <Link
                to="/cart"
                className="relative p-2 hover:text-primary transition-colors"
                aria-label="Cart"
                data-ocid="cart-nav"
              >
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px] bg-primary text-primary-foreground border-0 rounded-full">
                    {itemCount > 9 ? "9+" : itemCount}
                  </Badge>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Mega-menu dropdown */}
        {activeCategory && (
          <div
            className="hidden lg:block absolute left-0 right-0 top-full bg-card border-b border-border shadow-elevated z-50 animate-fade-in"
            onMouseEnter={() => setActiveCategory(activeCategory)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <div className="container mx-auto px-4 py-8">
              <div className="flex gap-12">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                    {
                      NAV_CATEGORIES.find((c) => c.slug === activeCategory)
                        ?.label
                    }
                  </p>
                  <ul className="space-y-3">
                    {[
                      "All Items",
                      "New Arrivals",
                      "Tops",
                      "Bottoms",
                      "Outerwear",
                      "Dresses",
                      "Accessories",
                    ].map((item) => (
                      <li key={item}>
                        <Link
                          to="/category/$slug"
                          params={{ slug: activeCategory }}
                          onClick={() => setActiveCategory(null)}
                          className="text-sm hover:text-primary transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-l border-border" />
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                    Featured
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {["New Season Edit", "Bestsellers", "Sale"].map((item) => (
                      <Link
                        key={item}
                        to="/category/$slug"
                        params={{ slug: activeCategory }}
                        onClick={() => setActiveCategory(null)}
                        className="group block aspect-[3/4] bg-muted rounded overflow-hidden relative"
                      >
                        <div className="absolute inset-0 flex items-end p-3">
                          <span className="text-xs font-medium bg-background/90 px-2 py-1 rounded">
                            {item}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function Footer() {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-display text-xl tracking-[0.2em] uppercase font-semibold"
            >
              LUXESTEP
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Curated pieces for the modern wardrobe. Timeless design,
              uncompromised quality.
            </p>
            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3">
                Newsletter
              </p>
              <form
                onSubmit={handleNewsletter}
                className="flex gap-2"
                data-ocid="newsletter-form"
              >
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="h-9 text-sm"
                  data-ocid="newsletter-email"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0"
                  data-ocid="newsletter-submit"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4">
                {heading}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {year}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link
              to="/returns"
              className="hover:text-foreground transition-colors"
            >
              Returns Policy
            </Link>
            <Link to="/faq" className="hover:text-foreground transition-colors">
              FAQ
            </Link>
            <Link
              to="/contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface LayoutProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export function Layout({ children, fullWidth = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className={cn("flex-1", !fullWidth && "")}>{children}</main>
      <Footer />
    </div>
  );
}
