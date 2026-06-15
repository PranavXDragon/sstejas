import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { OrderItem, OrderStatus, ShippingAddress } from "../types";

// ─── Seed ─────────────────────────────────────────────────────────────────────

export function useSeedProducts() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("Not connected");
      return (
        actor as unknown as { seedProducts: () => Promise<void> }
      ).seedProducts();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

// ─── Products ────────────────────────────────────────────────────────────────

export function useProducts() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      if (!actor) return [];
      return (
        actor as unknown as { getProducts: () => Promise<unknown[]> }
      ).getProducts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useFeaturedProducts() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["products", "featured"],
    queryFn: async () => {
      if (!actor) return [];
      return (
        actor as unknown as { getFeaturedProducts: () => Promise<unknown[]> }
      ).getFeaturedProducts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useProductById(id: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      if (!actor || !id) return null;
      const result = await (
        actor as unknown as { getProductById: (id: string) => Promise<unknown> }
      ).getProductById(id);
      return result ?? null;
    },
    enabled: !!actor && !isFetching && !!id,
  });
}

export function useProductsByCategory(category: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["products", "category", category],
    queryFn: async () => {
      if (!actor || !category) return [];
      return (
        actor as unknown as {
          getProductsByCategory: (cat: string) => Promise<unknown[]>;
        }
      ).getProductsByCategory(category);
    },
    enabled: !!actor && !isFetching && !!category,
  });
}

export function useSearchProducts(query: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["products", "search", query],
    queryFn: async () => {
      if (!actor || !query.trim()) return [];
      return (
        actor as unknown as {
          searchProducts: (q: string) => Promise<unknown[]>;
        }
      ).searchProducts(query);
    },
    enabled: !!actor && !isFetching && !!query.trim(),
  });
}

// ─── Orders ──────────────────────────────────────────────────────────────────

export function useUserOrders() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["orders", "user"],
    queryFn: async () => {
      if (!actor) return [];
      return (
        actor as unknown as { getOrdersByUser: () => Promise<unknown[]> }
      ).getOrdersByUser();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAllOrders() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["orders", "all"],
    queryFn: async () => {
      if (!actor) return [];
      return (
        actor as unknown as { getAllOrders: () => Promise<unknown[]> }
      ).getAllOrders();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useOrderById(orderId: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["orders", orderId],
    queryFn: async () => {
      if (!actor || !orderId) return null;
      return (actor as unknown as { getOrdersByUser: () => Promise<unknown[]> })
        .getOrdersByUser()
        .then(
          (orders) =>
            (orders as { id: string }[]).find((o) => o.id === orderId) ?? null,
        );
    },
    enabled: !!actor && !isFetching && !!orderId,
  });
}

export function useCreateOrder() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      items,
      shippingAddress,
      totalAmount,
    }: {
      items: OrderItem[];
      shippingAddress: ShippingAddress;
      totalAmount: number;
    }) => {
      if (!actor) throw new Error("Not connected");
      return (
        actor as unknown as {
          createOrder: (
            items: OrderItem[],
            addr: ShippingAddress,
            total: number,
          ) => Promise<{ ok?: unknown; err?: string }>;
        }
      ).createOrder(items, shippingAddress, totalAmount);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
}

export function useUpdateOrderStatus() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      orderId,
      status,
    }: { orderId: string; status: OrderStatus }) => {
      if (!actor) throw new Error("Not connected");
      return (
        actor as unknown as {
          updateOrderStatus: (
            id: string,
            status: OrderStatus,
          ) => Promise<{ ok?: unknown; err?: string }>;
        }
      ).updateOrderStatus(orderId, status);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
}

// ─── Wishlist ─────────────────────────────────────────────────────────────────

export function useWishlist() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      if (!actor) return [];
      return (
        actor as unknown as { getWishlist: () => Promise<string[]> }
      ).getWishlist();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddToWishlist() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (productId: string) => {
      if (!actor) throw new Error("Not connected");
      return (
        actor as unknown as {
          addToWishlist: (
            id: string,
          ) => Promise<{ ok?: unknown; err?: string }>;
        }
      ).addToWishlist(productId);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["wishlist"] }),
  });
}

export function useRemoveFromWishlist() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (productId: string) => {
      if (!actor) throw new Error("Not connected");
      return (
        actor as unknown as {
          removeFromWishlist: (
            id: string,
          ) => Promise<{ ok?: unknown; err?: string }>;
        }
      ).removeFromWishlist(productId);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["wishlist"] }),
  });
}

// ─── Contact ─────────────────────────────────────────────────────────────────

export function useSubmitContactMessage() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async ({
      name,
      email,
      category,
      message,
    }: {
      name: string;
      email: string;
      category: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return (
        actor as unknown as {
          submitContactMessage: (
            name: string,
            email: string,
            cat: string,
            msg: string,
          ) => Promise<{ ok?: unknown; err?: string }>;
        }
      ).submitContactMessage(name, email, category, message);
    },
  });
}
