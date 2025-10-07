// Define a function to act as a "class"
function Animal(name, isAwake) {
    this.name = name;
    this.isAwake = isAwake;
}

// Create methods by adding functions to the "prototype"
Animal.prototype.wakeUp = function() {
    this.isAwake = true;
}

Animal.prototype.sleep = function() {
    this.isAwake = false;
}
// Create an instance
let jinx = new Animal("Jinx", true);
// Call an instance method
jinx.sleep();
console.log(jinx.isAwake); // false

// Extend the "class" by calling the parent function
function Dog(name, isAwake, isWaggingTail) {
    Animal.call(this, name, isAwake);
    this.isWaggingTail = isWaggingTail;
}
Dog.prototype.bark = function() {
    console.log("Woof!  Woof!");
    this.isWaggingTail = true;
    this.isAwake = true;
}
let spot = new Dog("Spot", true, false);
// Looks up method from parent Animal based on prototype chain
spot.sleep(); 
// Exists on the Dog prototype
spot.bark();
// Alter the prototype dynamically at runtime!
Animal.prototype.sleep = function() {
    console.log("Nope!")
}
spot.sleep(); // prints: "Nope!"
