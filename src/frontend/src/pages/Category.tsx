import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useParams } from "@tanstack/react-router";
import { Filter, SlidersHorizontal, X } from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { Layout } from "../components/Layout";
import { ProductCard } from "../components/ProductCard";
import { getProductsByCategory } from "../data/products";
import type { Product } from "../types";

// ─── Constants ────────────────────────────────────────────────────────────────

const CLOTHING_SIZES = ["XS", "S", "M", "L", "XL", "XXL"] as const;
const ACCESSORY_SIZES = ["One Size"] as const;

const COLORS = [
  { name: "White", swatch: "bg-white border-border" },
  { name: "Black", swatch: "bg-black border-black" },
  { name: "Navy", swatch: "bg-blue-800 border-blue-800" },
  { name: "Beige", swatch: "bg-stone-200 border-stone-300" },
  { name: "Brown", swatch: "bg-stone-700 border-stone-700" },
  { name: "Green", swatch: "bg-green-700 border-green-700" },
  { name: "Red", swatch: "bg-red-600 border-red-600" },
  { name: "Blue", swatch: "bg-blue-500 border-blue-500" },
  { name: "Pink", swatch: "bg-pink-400 border-pink-400" },
  { name: "Grey", swatch: "bg-gray-400 border-gray-400" },
] as const;

const PRICE_RANGES = [
  { label: "Under ₹50", value: "under-50" },
  { label: "₹50 – ₹100", value: "50-100" },
  { label: "₹100 – ₹200", value: "100-200" },
  { label: "Over ₹200", value: "over-200" },
] as const;

const SORT_OPTIONS = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" },
] as const;

type PriceRange = (typeof PRICE_RANGES)[number]["value"] | "";
type SortValue = (typeof SORT_OPTIONS)[number]["value"];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function categoryLabel(slug: string): string {
  const map: Record<string, string> = {
    men: "Men's Collection",
    women: "Women's Collection",
    kids: "Kids' Collection",
    accessories: "Accessories",
  };
  return map[slug] ?? `${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;
}

function matchesPrice(price: number, range: PriceRange): boolean {
  if (!range) return true;
  const dollars = price / 100;
  if (range === "under-50") return dollars < 50;
  if (range === "50-100") return dollars >= 50 && dollars <= 100;
  if (range === "100-200") return dollars > 100 && dollars <= 200;
  if (range === "over-200") return dollars > 200;
  return true;
}

function sortProducts(items: Product[], sort: SortValue): Product[] {
  const sorted = [...items];
  if (sort === "price-asc") return sorted.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") return sorted.sort((a, b) => b.price - a.price);
  if (sort === "rating") return sorted.sort((a, b) => b.rating - a.rating);
  return sorted;
}

// ─── Filter Panel ─────────────────────────────────────────────────────────────

interface FilterPanelProps {
  slug: string;
  selectedSizes: string[];
  selectedColors: string[];
  priceRange: PriceRange;
  onToggleSize: (size: string) => void;
  onToggleColor: (color: string) => void;
  onPriceChange: (val: PriceRange) => void;
  onClear: () => void;
  activeCount: number;
}

function FilterPanel({
  slug,
  selectedSizes,
  selectedColors,
  priceRange,
  onToggleSize,
  onToggleColor,
  onPriceChange,
  onClear,
  activeCount,
}: FilterPanelProps) {
  const sizes = slug === "accessories" ? ACCESSORY_SIZES : CLOTHING_SIZES;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xs uppercase tracking-[0.25em] font-medium">
          Filters
        </h3>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            data-ocid="filter-clear"
          >
            <X className="h-3 w-3" />
            Clear all
          </button>
        )}
      </div>

      <Separator />

      {/* Size */}
      <div>
        <p className="text-xs uppercase tracking-[0.2em] font-medium mb-4 text-muted-foreground">
          Size
        </p>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => {
            const checked = selectedSizes.includes(size);
            return (
              <button
                key={size}
                type="button"
                onClick={() => onToggleSize(size)}
                aria-pressed={checked}
                className={`text-xs border py-2 px-1 transition-colors font-medium ${
                  checked
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-foreground hover:border-foreground"
                }`}
                data-ocid={`filter-size-${size.toLowerCase().replace(" ", "-")}`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      <Separator />

      {/* Color */}
      <div>
        <p className="text-xs uppercase tracking-[0.2em] font-medium mb-4 text-muted-foreground">
          Color
        </p>
        <div className="flex flex-wrap gap-2.5">
          {COLORS.map((c) => {
            const active = selectedColors.includes(c.name);
            return (
              <button
                key={c.name}
                type="button"
                title={c.name}
                aria-label={`Filter by color: ${c.name}`}
                aria-pressed={active}
                onClick={() => onToggleColor(c.name)}
                className={`w-7 h-7 rounded-full border-2 transition-all ${c.swatch} ${
                  active
                    ? "ring-2 ring-offset-2 ring-primary scale-110"
                    : "hover:scale-110"
                }`}
                data-ocid={`filter-color-${c.name.toLowerCase()}`}
              />
            );
          })}
        </div>
        {selectedColors.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {selectedColors.map((c) => (
              <Badge
                key={c}
                variant="secondary"
                className="text-[10px] rounded-none px-2 cursor-pointer"
                onClick={() => onToggleColor(c)}
              >
                {c} ×
              </Badge>
            ))}
          </div>
        )}
      </div>

      <Separator />

      {/* Price */}
      <div>
        <p className="text-xs uppercase tracking-[0.2em] font-medium mb-4 text-muted-foreground">
          Price Range
        </p>
        <RadioGroup
          value={priceRange}
          onValueChange={(v) => onPriceChange(v as PriceRange)}
          data-ocid="filter-price-group"
        >
          {PRICE_RANGES.map((r) => (
            <div key={r.value} className="flex items-center gap-2.5 py-0.5">
              <RadioGroupItem
                value={r.value}
                id={`price-${r.value}`}
                data-ocid={`filter-price-${r.value}`}
              />
              <Label
                htmlFor={`price-${r.value}`}
                className="text-sm cursor-pointer"
              >
                {r.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
        {priceRange && (
          <button
            type="button"
            onClick={() => onPriceChange("")}
            className="mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Clear price filter
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Empty state ──────────────────────────────────────────────────────────────

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-24 text-center"
      data-ocid="empty-state"
    >
      <div className="w-16 h-16 border border-border flex items-center justify-center mb-6">
        <Filter className="h-6 w-6 text-muted-foreground" />
      </div>
      <h3 className="font-display text-lg font-semibold mb-2">
        No products found
      </h3>
      <p className="text-sm text-muted-foreground mb-6 max-w-xs">
        Try adjusting your filters to discover more styles.
      </p>
      <Button
        variant="outline"
        className="rounded-none text-xs uppercase tracking-widest"
        onClick={onClear}
        data-ocid="empty-state-clear"
      >
        Clear Filters
      </Button>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Category() {
  const { slug } = useParams({ from: "/category/$slug" });

  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<PriceRange>("");
  const [sort, setSort] = useState<SortValue>("newest");
  const [filterSheetOpen, setFilterSheetOpen] = useState(false);

  // Static products — always available immediately, no loading state needed
  const allProducts = getProductsByCategory(slug);

  const toggleSize = (size: string) =>
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size],
    );

  const toggleColor = (color: string) =>
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color],
    );

  const clearFilters = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceRange("");
  };

  const activeCount =
    selectedSizes.length + selectedColors.length + (priceRange ? 1 : 0);

  const filtered = useMemo(() => {
    const result = allProducts.filter((p) => {
      if (
        selectedSizes.length &&
        !selectedSizes.some((s) => p.sizes.includes(s))
      )
        return false;
      if (
        selectedColors.length &&
        !selectedColors.some((c) => p.colors.includes(c))
      )
        return false;
      if (!matchesPrice(p.price, priceRange)) return false;
      return true;
    });
    return sortProducts(result, sort);
  }, [allProducts, selectedSizes, selectedColors, priceRange, sort]);

  const filterProps: FilterPanelProps = {
    slug,
    selectedSizes,
    selectedColors,
    priceRange,
    onToggleSize: toggleSize,
    onToggleColor: toggleColor,
    onPriceChange: setPriceRange,
    onClear: clearFilters,
    activeCount,
  };

  return (
    <Layout>
      {/* Page header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-6 lg:px-12 py-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2 font-medium">
              {slug.charAt(0).toUpperCase() + slug.slice(1)}
            </p>
            <div className="flex items-baseline gap-4">
              <h1 className="font-display text-3xl md:text-4xl font-semibold">
                {categoryLabel(slug)}
              </h1>
              <span className="text-sm text-muted-foreground">
                {filtered.length}{" "}
                {filtered.length === 1 ? "product" : "products"}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-8">
          {/* Mobile filter trigger */}
          <Sheet open={filterSheetOpen} onOpenChange={setFilterSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="lg:hidden rounded-none text-xs uppercase tracking-widest"
                data-ocid="filter-sheet-trigger"
              >
                <SlidersHorizontal className="h-3.5 w-3.5 mr-2" />
                Filters
                {activeCount > 0 && (
                  <Badge className="ml-2 h-4 w-4 p-0 text-[10px] flex items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {activeCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-80 overflow-y-auto"
              data-ocid="filter-sheet"
            >
              <SheetHeader className="mb-6">
                <SheetTitle className="text-left font-display text-base uppercase tracking-wide">
                  Filter Products
                </SheetTitle>
              </SheetHeader>
              <FilterPanel {...filterProps} />
            </SheetContent>
          </Sheet>

          {/* Active chips (desktop) */}
          <div className="hidden lg:flex flex-wrap gap-2 flex-1">
            {selectedSizes.map((s) => (
              <Badge
                key={s}
                variant="secondary"
                className="text-[10px] rounded-none px-2 cursor-pointer"
                onClick={() => toggleSize(s)}
              >
                Size: {s} ×
              </Badge>
            ))}
            {selectedColors.map((c) => (
              <Badge
                key={c}
                variant="secondary"
                className="text-[10px] rounded-none px-2 cursor-pointer"
                onClick={() => toggleColor(c)}
              >
                {c} ×
              </Badge>
            ))}
            {priceRange && (
              <Badge
                variant="secondary"
                className="text-[10px] rounded-none px-2 cursor-pointer"
                onClick={() => setPriceRange("")}
              >
                {PRICE_RANGES.find((r) => r.value === priceRange)?.label} ×
              </Badge>
            )}
          </div>

          {/* Sort */}
          <Select value={sort} onValueChange={(v) => setSort(v as SortValue)}>
            <SelectTrigger
              className="w-[180px] rounded-none text-xs"
              data-ocid="sort-select"
            >
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="rounded-none">
              {SORT_OPTIONS.map((o) => (
                <SelectItem
                  key={o.value}
                  value={o.value}
                  className="text-xs"
                  data-ocid={`sort-option-${o.value}`}
                >
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Main layout: sidebar + grid */}
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 shrink-0" aria-label="Filters">
            <FilterPanel {...filterProps} />
          </aside>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <EmptyState onClear={clearFilters} />
            ) : (
              <div
                className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
                data-ocid="product-grid"
              >
                {filtered.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: Math.min(i * 0.05, 0.4),
                    }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
