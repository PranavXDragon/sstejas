import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(cents / 100);
}

export function formatDate(timestamp: number): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(timestamp));
}

export function getOrderStatusColor(status: string): string {
  switch (status) {
    case "Pending":
      return "text-amber-600 bg-amber-50 border-amber-200";
    case "Processing":
      return "text-blue-600 bg-blue-50 border-blue-200";
    case "Shipped":
      return "text-indigo-600 bg-indigo-50 border-indigo-200";
    case "Delivered":
      return "text-green-600 bg-green-50 border-green-200";
    case "Cancelled":
      return "text-red-600 bg-red-50 border-red-200";
    default:
      return "text-muted-foreground bg-muted border-border";
  }
}

export function slugToCategory(slug: string): string {
  const map: Record<string, string> = {
    men: "Men",
    women: "Women",
    kids: "Kids",
    accessories: "Accessories",
  };
  return map[slug] ?? slug;
}
