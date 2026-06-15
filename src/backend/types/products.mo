module {
  public type ProductCategory = {
    #Men;
    #Women;
    #Kids;
    #Accessories;
  };

  public type Product = {
    id : Text;
    name : Text;
    category : ProductCategory;
    price : Nat;
    originalPrice : Nat;
    description : Text;
    sizes : [Text];
    colors : [Text];
    images : [Text];
    rating : Float;
    reviewCount : Nat;
    inStock : Bool;
    tags : [Text];
    featured : Bool;
  };
};
