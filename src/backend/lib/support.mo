import List "mo:core/List";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Types "../types/support";

module {
  public func submit(
    messages : List.List<Types.ContactMessage>,
    nextId : Nat,
    name : Text,
    email : Text,
    category : Types.ContactCategory,
    message : Text,
  ) : { msg : Types.ContactMessage; nextId : Nat } {
    let id = "msg-" # nextId.toText();
    let msg : Types.ContactMessage = {
      id;
      name;
      email;
      category;
      message;
      createdAt = Time.now();
    };
    messages.add(msg);
    { msg; nextId = nextId + 1 };
  };
};
