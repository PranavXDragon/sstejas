// Migration: drops the old `seeded` stable field that is no longer needed.
// Products are now pre-populated at actor initialization from a static array.
module {
  type OldActor = {
    seeded : { var value : Bool };
  };

  type NewActor = {};

  public func run(_old : OldActor) : NewActor {
    // Drop `seeded` — it is intentionally not forwarded to the new version.
    {};
  };
};
