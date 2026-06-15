import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Order {
    id: string;
    status: OrderStatus;
    userId: Principal;
    createdAt: bigint;
    updatedAt: bigint;
    totalAmount: bigint;
    shippingAddress: ShippingAddress;
    items: Array<OrderItem>;
}
export interface ShippingAddress {
    country: string;
    city: string;
    postalCode: string;
    fullName: string;
    state: string;
    addressLine1: string;
    addressLine2: string;
}
export interface OrderItem {
    color: string;
    size: string;
    productId: string;
    productName: string;
    quantity: bigint;
    price: bigint;
}
export interface Product {
    id: string;
    featured: boolean;
    inStock: boolean;
    originalPrice: bigint;
    name: string;
    tags: Array<string>;
    description: string;
    sizes: Array<string>;
    category: ProductCategory;
    rating: number;
    colors: Array<string>;
    price: bigint;
    reviewCount: bigint;
    images: Array<string>;
}
export enum OrderStatus {
    Delivered = "Delivered",
    Processing = "Processing",
    Shipped = "Shipped",
    Pending = "Pending"
}
export enum ProductCategory {
    Men = "Men",
    Accessories = "Accessories",
    Kids = "Kids",
    Women = "Women"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addToWishlist(productId: string): Promise<{
        __kind__: "ok";
        ok: null;
    } | {
        __kind__: "err";
        err: string;
    }>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createOrder(items: Array<OrderItem>, shippingAddress: ShippingAddress, totalAmount: bigint): Promise<{
        __kind__: "ok";
        ok: Order;
    } | {
        __kind__: "err";
        err: string;
    }>;
    getAllOrders(): Promise<Array<Order>>;
    getCallerUserRole(): Promise<UserRole>;
    getFeaturedProducts(): Promise<Array<Product>>;
    getOrderById(id: string): Promise<Order | null>;
    getOrdersByUser(): Promise<Array<Order>>;
    getProductById(id: string): Promise<Product | null>;
    getProducts(): Promise<Array<Product>>;
    getProductsByCategory(category: string): Promise<Array<Product>>;
    getWishlist(): Promise<Array<string>>;
    isCallerAdmin(): Promise<boolean>;
    removeFromWishlist(productId: string): Promise<{
        __kind__: "ok";
        ok: null;
    } | {
        __kind__: "err";
        err: string;
    }>;
    searchProducts(q: string): Promise<Array<Product>>;
    seedProducts(): Promise<boolean>;
    submitContactMessage(name: string, email: string, category: string, message: string): Promise<{
        __kind__: "ok";
        ok: null;
    } | {
        __kind__: "err";
        err: string;
    }>;
    updateOrderStatus(orderId: string, status: OrderStatus): Promise<{
        __kind__: "ok";
        ok: Order;
    } | {
        __kind__: "err";
        err: string;
    }>;
}
