import Map "mo:core/Map";
import Set "mo:core/Set";

module {
  public func get(wishlists : Map.Map<Principal, Set.Set<Text>>, userId : Principal) : [Text] {
    switch (wishlists.get(userId)) {
      case (?s) s.toArray();
      case null [];
    };
  };

  public func add(wishlists : Map.Map<Principal, Set.Set<Text>>, userId : Principal, productId : Text) : () {
    switch (wishlists.get(userId)) {
      case (?s) s.add(productId);
      case null {
        let s = Set.empty<Text>();
        s.add(productId);
        wishlists.add(userId, s);
      };
    };
  };

  public func remove(wishlists : Map.Map<Principal, Set.Set<Text>>, userId : Principal, productId : Text) : () {
    switch (wishlists.get(userId)) {
      case (?s) s.remove(productId);
      case null ();
    };
  };
};
