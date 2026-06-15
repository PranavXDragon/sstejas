module {
  public type OrderStatus = {
    #Pending;
    #Processing;
    #Shipped;
    #Delivered;
  };

  public type OrderItem = {
    productId : Text;
    productName : Text;
    price : Nat;
    quantity : Nat;
    size : Text;
    color : Text;
  };

  public type ShippingAddress = {
    fullName : Text;
    addressLine1 : Text;
    addressLine2 : Text;
    city : Text;
    state : Text;
    postalCode : Text;
    country : Text;
  };

  public type Order = {
    id : Text;
    userId : Principal;
    items : [OrderItem];
    status : OrderStatus;
    shippingAddress : ShippingAddress;
    totalAmount : Nat;
    createdAt : Int;
    updatedAt : Int;
  };
};
