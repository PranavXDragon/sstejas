module {
  public type ContactCategory = {
    #order_issue;
    #returns;
    #general;
  };

  public type ContactMessage = {
    id : Text;
    name : Text;
    email : Text;
    category : ContactCategory;
    message : Text;
    createdAt : Int;
  };
};
