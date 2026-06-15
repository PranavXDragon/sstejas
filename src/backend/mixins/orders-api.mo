import List "mo:core/List";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import OrdersLib "../lib/orders";
import Types "../types/orders";

mixin (
  accessControlState : AccessControl.AccessControlState,
  orders : List.List<Types.Order>,
  nextOrderId : { var value : Nat },
) {
  public shared ({ caller }) func createOrder(
    items : [Types.OrderItem],
    shippingAddress : Types.ShippingAddress,
    totalAmount : Nat,
  ) : async { #ok : Types.Order; #err : Text } {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      return #err("Unauthorized: Please log in to place an order");
    };
    let result = OrdersLib.create(orders, nextOrderId.value, caller, items, shippingAddress, totalAmount);
    nextOrderId.value := result.nextId;
    #ok(result.order);
  };

  public query ({ caller }) func getOrdersByUser() : async [Types.Order] {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Please log in to view your orders");
    };
    OrdersLib.getByUser(orders, caller);
  };

  public query func getOrderById(id : Text) : async ?Types.Order {
    OrdersLib.getById(orders, id);
  };

  public query ({ caller }) func getAllOrders() : async [Types.Order] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin access required");
    };
    OrdersLib.getAll(orders);
  };

  public shared ({ caller }) func updateOrderStatus(
    orderId : Text,
    status : Types.OrderStatus,
  ) : async { #ok : Types.Order; #err : Text } {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      return #err("Unauthorized: Admin access required");
    };
    switch (OrdersLib.updateStatus(orders, orderId, status)) {
      case (?o) #ok(o);
      case null #err("Order not found: " # orderId);
    };
  };
};
