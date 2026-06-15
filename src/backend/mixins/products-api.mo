import List "mo:core/List";
import ProductsLib "../lib/products";
import Types "../types/products";

mixin (
  products : List.List<Types.Product>,
) {
  public query func getProducts() : async [Types.Product] {
    ProductsLib.getAll(products);
  };

  public query func getProductById(id : Text) : async ?Types.Product {
    ProductsLib.getById(products, id);
  };

  public query func getProductsByCategory(category : Text) : async [Types.Product] {
    let cat : ?Types.ProductCategory = switch (category) {
      case "Men" ?(#Men);
      case "Women" ?(#Women);
      case "Kids" ?(#Kids);
      case "Accessories" ?(#Accessories);
      case _ null;
    };
    switch (cat) {
      case (?c) ProductsLib.getByCategory(products, c);
      case null [];
    };
  };

  public query func getFeaturedProducts() : async [Types.Product] {
    ProductsLib.getFeatured(products);
  };

  public query func searchProducts(q : Text) : async [Types.Product] {
    ProductsLib.search(products, q);
  };

  // Kept for API compatibility. Products are pre-loaded at canister init, so
  // this is a no-op that always returns true.
  public shared func seedProducts() : async Bool {
    true;
  };
};
