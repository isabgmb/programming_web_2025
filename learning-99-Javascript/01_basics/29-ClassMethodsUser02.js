class User {
    constructor(name) {
      this.name = name;
      // Bind the class method so `this` is always right
      this.sayNameBound = this.sayNameMethod.bind(this);
    }

    sayNameMethod() {
      console.log(`Name: ${this.name}`)
    }
    // Stage 3 "Class Properties" syntax - arrows autobind!
    sayNameArrow = () => {
      console.log(`Name: ${this.name}`)
    }
}

let joe = new User("Joe");
let {sayNameMethod, sayNameBound, sayNameArrow} = joe;
sayNameMethod(); // Error - `this` isn't Joe!
sayNameBound(); // Works - bound function
sayNameArrow(); // Also works - bound via Class Properties arrow
