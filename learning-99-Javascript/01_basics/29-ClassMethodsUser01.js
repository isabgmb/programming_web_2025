class User {
    constructor(name) {
      // Not actually "private" - just convention
      this._name = name;
    }
    // Can create getters and setters - not widely used
    get name() {
      return this._name;
    }
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }  
    static staticMethod() {
        console.log("This is the class definition", this)
    }
}
