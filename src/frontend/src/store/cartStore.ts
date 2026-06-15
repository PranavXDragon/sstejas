import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, Product } from "../types";

interface CartStore {
  items: CartItem[];
  addItem: (
    product: Product,
    quantity: number,
    size: string,
    color: string,
  ) => void;
  removeItem: (productId: string, size: string, color: string) => void;
  updateQuantity: (
    productId: string,
    size: string,
    color: string,
    quantity: number,
  ) => void;
  clearCart: () => void;
  subtotal: () => number;
  tax: () => number;
  shipping: () => number;
  total: () => number;
  itemCount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, quantity, size, color) => {
        set((state) => {
          const existing = state.items.find(
            (i) =>
              i.product.id === product.id &&
              i.size === size &&
              i.color === color,
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.product.id === product.id &&
                i.size === size &&
                i.color === color
                  ? { ...i, quantity: i.quantity + quantity }
                  : i,
              ),
            };
          }
          return {
            items: [...state.items, { product, quantity, size, color }],
          };
        });
      },

      removeItem: (productId, size, color) => {
        set((state) => ({
          items: state.items.filter(
            (i) =>
              !(
                i.product.id === productId &&
                i.size === size &&
                i.color === color
              ),
          ),
        }));
      },

      updateQuantity: (productId, size, color, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId, size, color);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.product.id === productId && i.size === size && i.color === color
              ? { ...i, quantity }
              : i,
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      subtotal: () =>
        get().items.reduce(
          (sum, item) => sum + item.product.price * item.quantity,
          0,
        ),

      tax: () => Math.round(get().subtotal() * 0.08),

      shipping: () => {
        const subtotal = get().subtotal();
        return subtotal >= 15000 ? 0 : 995; // free shipping over $150
      },

      total: () => get().subtotal() + get().tax() + get().shipping(),

      itemCount: () =>
        get().items.reduce((sum, item) => sum + item.quantity, 0),
    }),
    { name: "aethera-cart" },
  ),
);
