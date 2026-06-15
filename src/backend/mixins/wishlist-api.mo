import Map "mo:core/Map";
import Set "mo:core/Set";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import WishlistLib "../lib/wishlist";

mixin (
  accessControlState : AccessControl.AccessControlState,
  wishlists : Map.Map<Principal, Set.Set<Text>>,
) {
  public query ({ caller }) func getWishlist() : async [Text] {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Please log in to view your wishlist");
    };
    WishlistLib.get(wishlists, caller);
  };

  public shared ({ caller }) func addToWishlist(productId : Text) : async { #ok; #err : Text } {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      return #err("Unauthorized: Please log in to manage your wishlist");
    };
    WishlistLib.add(wishlists, caller, productId);
    #ok;
  };

  public shared ({ caller }) func removeFromWishlist(productId : Text) : async { #ok; #err : Text } {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      return #err("Unauthorized: Please log in to manage your wishlist");
    };
    WishlistLib.remove(wishlists, caller, productId);
    #ok;
  };
};
