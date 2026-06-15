import List "mo:core/List";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Types "../types/orders";

module {
  public func create(
    orders : List.List<Types.Order>,
    nextId : Nat,
    userId : Principal,
    items : [Types.OrderItem],
    shippingAddress : Types.ShippingAddress,
    totalAmount : Nat,
  ) : { order : Types.Order; nextId : Nat } {
    let now = Time.now();
    let id = "order-" # nextId.toText();
    let order : Types.Order = {
      id;
      userId;
      items;
      status = #Pending;
      shippingAddress;
      totalAmount;
      createdAt = now;
      updatedAt = now;
    };
    orders.add(order);
    { order; nextId = nextId + 1 };
  };

  public func getByUser(orders : List.List<Types.Order>, userId : Principal) : [Types.Order] {
    orders.filter(func(o) { o.userId == userId }).toArray();
  };

  public func getById(orders : List.List<Types.Order>, id : Text) : ?Types.Order {
    orders.find(func(o) { o.id == id });
  };

  public func getAll(orders : List.List<Types.Order>) : [Types.Order] {
    orders.toArray();
  };

  public func updateStatus(
    orders : List.List<Types.Order>,
    orderId : Text,
    status : Types.OrderStatus,
  ) : ?Types.Order {
    var updated : ?Types.Order = null;
    orders.mapInPlace(func(o) {
      if (o.id == orderId) {
        let u = { o with status; updatedAt = Time.now() };
        updated := ?u;
        u;
      } else o
    });
    updated;
  };
};
