import { a as useInternetIdentity, r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-BvuKUqlt.js";
import { l as useWishlistStore, L as Layout, H as Heart, B as Button, X } from "./Layout-BIyE8-ys.js";
import { u as ue } from "./index-S4DVFX4V.js";
import { b as getProductById, P as ProductCard } from "./products-DHZrrRwK.js";
import { u as useWishlist, a as useAddToWishlist, b as useRemoveFromWishlist } from "./useBackend-CUcdyc1t.js";
function WishlistCard({
  productId,
  onRemove
}) {
  const product = getProductById(productId);
  if (!product) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", "data-ocid": "wishlist-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => onRemove(productId),
        className: "absolute top-3 right-3 p-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:border-destructive hover:text-destructive transition-all opacity-0 group-hover:opacity-100 z-10",
        "aria-label": "Remove from wishlist",
        "data-ocid": "remove-from-wishlist",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" })
      }
    )
  ] });
}
function EmptyWishlist() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center justify-center py-24 px-4 text-center",
      "data-ocid": "empty-wishlist",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-9 w-9 text-muted-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold", children: "Your wishlist is empty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground text-sm max-w-xs", children: "Save your favourite pieces here. Browse our collections and tap the heart to add items." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "mt-8 h-12 px-10 rounded-none bg-foreground text-background hover:bg-primary hover:text-primary-foreground text-xs uppercase tracking-widest font-medium transition-colors",
            "data-ocid": "start-browsing-btn",
            children: "Start Browsing"
          }
        ) })
      ]
    }
  );
}
function Wishlist() {
  const { isLoginSuccess } = useInternetIdentity();
  const isLoggedIn = isLoginSuccess;
  const { productIds: localIds, removeItem: removeLocal } = useWishlistStore();
  const { data: backendIds } = useWishlist();
  const addToWishlist = useAddToWishlist();
  const removeFromWishlist = useRemoveFromWishlist();
  const merged = Array.from(
    /* @__PURE__ */ new Set([...localIds, ...isLoggedIn && backendIds ? backendIds : []])
  );
  const syncedRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (!isLoggedIn || !backendIds || syncedRef.current) return;
    syncedRef.current = true;
    const mutate = addToWishlist.mutate;
    for (const id of localIds) {
      if (!backendIds.includes(id)) {
        mutate(id);
      }
    }
  }, [isLoggedIn, backendIds, localIds, addToWishlist.mutate]);
  const handleRemove = (id) => {
    removeLocal(id);
    if (isLoggedIn) {
      removeFromWishlist.mutate(id);
    }
    ue("Removed from wishlist", { icon: "💔", duration: 2e3 });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8 md:py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-baseline justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl md:text-3xl font-semibold tracking-tight", children: "Wishlist" }),
        merged.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
          merged.length,
          " saved item",
          merged.length !== 1 ? "s" : ""
        ] })
      ] }),
      !isLoggedIn && merged.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground hidden md:block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/profile",
            className: "underline underline-offset-2 hover:text-foreground transition-colors",
            children: "Sign in"
          }
        ),
        " ",
        "to save your wishlist across devices"
      ] })
    ] }),
    merged.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyWishlist, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      !isLoggedIn && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 px-4 py-3 bg-muted/50 border border-border text-xs text-muted-foreground flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sign in to save your wishlist and access it from any device." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/profile",
            className: "text-xs uppercase tracking-widest text-foreground underline underline-offset-2 hover:text-primary transition-colors shrink-0",
            children: "Sign In"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8",
          "data-ocid": "wishlist-grid",
          children: merged.map((id) => /* @__PURE__ */ jsxRuntimeExports.jsx(WishlistCard, { productId: id, onRemove: handleRemove }, id))
        }
      )
    ] })
  ] }) });
}
export {
  Wishlist as default
};
