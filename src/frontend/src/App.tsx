import { Skeleton } from "@/components/ui/skeleton";
import {
  Link,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

// ─── Lazy-loaded pages ────────────────────────────────────────────────────────
const HomePage = lazy(() => import("./pages/Home"));
const CategoryPage = lazy(() => import("./pages/Category"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetail"));
const CartPage = lazy(() => import("./pages/Cart"));
const WishlistPage = lazy(() => import("./pages/Wishlist"));
const CheckoutPage = lazy(() => import("./pages/Checkout"));
const OrderConfirmationPage = lazy(() => import("./pages/OrderConfirmation"));
const OrdersPage = lazy(() => import("./pages/Orders"));
const ProfilePage = lazy(() => import("./pages/Profile"));
const FaqPage = lazy(() => import("./pages/Faq"));
const ContactPage = lazy(() => import("./pages/Contact"));
const ReturnsPage = lazy(() => import("./pages/Returns"));
const AdminPage = lazy(() => import("./pages/Admin"));

const SKELETON_IDS = ["a", "b", "c", "d", "e", "f", "g", "h"] as const;

function PageLoader() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-full max-w-md" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {SKELETON_IDS.map((id) => (
            <div key={id} className="space-y-3">
              <Skeleton className="aspect-[3/4] w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <p className="text-8xl font-display font-semibold text-muted-foreground/30">
        404
      </p>
      <h1 className="mt-4 text-2xl font-display font-semibold">
        Page not found
      </h1>
      <p className="mt-2 text-muted-foreground max-w-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}

// ─── Routes ──────────────────────────────────────────────────────────────────
const rootRoute = createRootRoute({
  notFoundComponent: NotFound,
});

const wrap = (Component: React.ComponentType) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => wrap(HomePage),
});

const categoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/category/$slug",
  component: () => wrap(CategoryPage),
});

const productRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/product/$id",
  component: () => wrap(ProductDetailPage),
});

const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cart",
  component: () => wrap(CartPage),
});

const wishlistRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/wishlist",
  component: () => wrap(WishlistPage),
});

const checkoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/checkout",
  component: () => wrap(CheckoutPage),
});

const orderConfirmationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/order-confirmation/$id",
  component: () => wrap(OrderConfirmationPage),
});

const ordersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/orders",
  component: () => wrap(OrdersPage),
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: () => wrap(ProfilePage),
});

const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faq",
  component: () => wrap(FaqPage),
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: () => wrap(ContactPage),
});

const returnsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/returns",
  component: () => wrap(ReturnsPage),
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: () => wrap(AdminPage),
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  categoryRoute,
  productRoute,
  cartRoute,
  wishlistRoute,
  checkoutRoute,
  orderConfirmationRoute,
  ordersRoute,
  profileRoute,
  faqRoute,
  contactRoute,
  returnsRoute,
  adminRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function AppSeeder() {
  return null;
}

export default function App() {
  return (
    <>
      <AppSeeder />
      <RouterProvider router={router} />
    </>
  );
}
