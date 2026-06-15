import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistStore {
  productIds: string[];
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  hasItem: (productId: string) => boolean;
  toggle: (productId: string) => void;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      productIds: [],

      addItem: (productId) => {
        set((state) => ({
          productIds: state.productIds.includes(productId)
            ? state.productIds
            : [...state.productIds, productId],
        }));
      },

      removeItem: (productId) => {
        set((state) => ({
          productIds: state.productIds.filter((id) => id !== productId),
        }));
      },

      hasItem: (productId) => get().productIds.includes(productId),

      toggle: (productId) => {
        if (get().hasItem(productId)) {
          get().removeItem(productId);
        } else {
          get().addItem(productId);
        }
      },
    }),
    { name: "aethera-wishlist" },
  ),
);
