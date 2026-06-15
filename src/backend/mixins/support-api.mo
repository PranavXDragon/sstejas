import List "mo:core/List";
import SupportLib "../lib/support";
import Types "../types/support";

mixin (
  messages : List.List<Types.ContactMessage>,
  nextMessageId : { var value : Nat },
) {
  public shared func submitContactMessage(
    name : Text,
    email : Text,
    category : Text,
    message : Text,
  ) : async { #ok; #err : Text } {
    let cat : Types.ContactCategory = switch (category) {
      case "order_issue" #order_issue;
      case "returns" #returns;
      case _ #general;
    };
    let result = SupportLib.submit(messages, nextMessageId.value, name, email, cat, message);
    nextMessageId.value := result.nextId;
    #ok;
  };
};
