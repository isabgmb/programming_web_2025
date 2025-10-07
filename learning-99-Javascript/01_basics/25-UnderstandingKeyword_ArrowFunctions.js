// Arrow functions keep the same `this` value from where
// they were defined, rather than defining a new `this` value
let joe = {
    name : "Joe",
    eventuallySayName() {
        // Create an arrow function
        let actuallySayName = () => console.log(this.name);
        // Call that in 1 second
        setTimeout(actuallySayName, 1000);
    },
    brokenArrow : () => console.log(this.name),
}
// Method invocation forces `this === joe` here
joe.eventuallySayName();


// In global scope, `this` is still undefined:
const arrow = () => console.log(this);
arrow() // undefined
// Also breaks - was still defined in global scope!
joe.brokenArrow(); // error: "Cannot read 'name' of undefined"

