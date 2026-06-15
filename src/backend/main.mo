import List "mo:core/List";
import Map "mo:core/Map";
import Set "mo:core/Set";
import AccessControl "mo:caffeineai-authorization/access-control";
import MixinAuthorization "mo:caffeineai-authorization/MixinAuthorization";
import MixinObjectStorage "mo:caffeineai-object-storage/Mixin";
import ProductTypes "types/products";
import ProductsLib "lib/products";
import OrderTypes "types/orders";
import SupportTypes "types/support";
import ProductsMixin "mixins/products-api";
import OrdersMixin "mixins/orders-api";
import WishlistMixin "mixins/wishlist-api";
import SupportMixin "mixins/support-api";
actor {
  // Authorization state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Object storage
  include MixinObjectStorage();

  // Products state — pre-populated from static array so products are always available
  let products = List.fromArray<ProductTypes.Product>(ProductsLib.ALL_PRODUCTS);

  // Orders state
  let orders = List.empty<OrderTypes.Order>();
  let nextOrderId = { var value : Nat = 1 };

  // Wishlist state
  let wishlists = Map.empty<Principal, Set.Set<Text>>();

  // Support state
  let messages = List.empty<SupportTypes.ContactMessage>();
  let nextMessageId = { var value : Nat = 1 };

  // Mixins
  include ProductsMixin(products);
  include OrdersMixin(accessControlState, orders, nextOrderId);
  include WishlistMixin(accessControlState, wishlists);
  include SupportMixin(messages, nextMessageId);
};
