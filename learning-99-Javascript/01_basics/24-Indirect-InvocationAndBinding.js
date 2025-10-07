function addAndIncrement(numA, numB) {
    return numA + numB + 1;
}

// Functions are objects too!
addAndIncrement.someField = 123;

// Functions have special built-in methods
// that will execute the function itself, and
// allow specifying what `this` should be inside

// `call(thisArg, arg1, arg2, arg3...)`
addAndIncrement.call(undefined, 2, 3) // returns: 6

// `apply(thisArg, arrayOfArgs)`
addAndIncrement.apply(undefined, [1, 6]) // returns 8


function sayNameAndAge() {
    console.log(`My name is ${this.name}, and I'm ${this.age}`);
}
let joe = { name : "Joe", age : "34"}
let sarah = { name : "Sarah", age : "27"}
// The first argument to both `call`  and `apply` will
// override the value of `this` inside the function:
sayNameAndAge.call(joe) // "My name is Joe, and I'm 34"
sayNameAndAge.apply(sarah) // "My name is Sarah, and I'm 27"

// `bind()` creates a new function that _always_ uses the specified
// value for `this` inside.
let printJoe = sayNameAndAge.bind(joe);
let printSarah = sayNameAndAge.bind(sarah);

printJoe(); // "My name is Joe, and I'm 34"
printSarah(); // "My name is Sarah, and I'm 27"

// Bindings will NOT be changed by `call/apply()`!
printJoe.apply(sarah) // // "My name is Joe, and I'm 
