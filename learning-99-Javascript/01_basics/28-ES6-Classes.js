// Basic syntax - really just sugar for "prototypes"
class MyClass {
    constructor() {
        super(); // must always call first if constructor used
    }
    // Unlike objects, no commas needed between methods
    method1() {}
    method2() {}
}
class Animal {
    constructor(name, isAwake) {
        super();
        this.name = name;
        this.isAwake = isAwake;
    }
    wakeUp() {
        this.isAwake = true;
    }
    sleep() { this.isAwake = false;}
}


// Extend parent classes
class Dog extends Animal {
    constructor(name, isAwake, isWaggingTail) {
        super(name, isAwake);
        this.isWaggingTail = isWaggingTail;
    }

    bark() {
        console.log("Woof! Woof!");
    }
}

let spot = new Dog("Spot", true, false);
spot.sleep();
// Still "prototypes" under the hood!
Animal.prototype.sleep = function() {
    console.log("Nope!")
}
spot.sleep(); // prints: "Nope!"
