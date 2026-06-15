module {
  public type Timestamp = Int;
  public type ProductId = Text;
  public type OrderId = Text;
  public type MessageId = Text;

  public type Result<T, E> = { #ok : T; #err : E };
};
