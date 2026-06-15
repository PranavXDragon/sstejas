export type ProductCategory = "men" | "women" | "kids" | "accessories";

export type OrderStatus =
  | "Pending"
  | "Processing"
  | "Shipped"
  | "Delivered"
  | "Cancelled";

export type ContactCategory = "order" | "return" | "product" | "other";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number; // in cents
  originalPrice: number; // in cents
  description: string;
  sizes: string[];
  colors: string[];
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  tags: string[];
  featured: boolean;
}

export interface OrderItem {
  productId: string;
  productName: string;
  price: number; // in cents
  quantity: number;
  size: string;
  color: string;
}

export interface ShippingAddress {
  fullName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  status: OrderStatus;
  shippingAddress: ShippingAddress;
  totalAmount: number; // in cents
  createdAt: number;
  updatedAt: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

export interface CheckoutFormData {
  shippingAddress: ShippingAddress;
  paymentMethod: "card" | "paypal";
}
