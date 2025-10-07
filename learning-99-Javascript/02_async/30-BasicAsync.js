// "Callbacks": passing function references to be called later
function callback1(value) {
    console.log(`Value is: ${value}`);
}
function callback2(value) {
    console.log(value + 5);
}
function anotherFunction(someCallback) {
    // Call the function that was passed in, synchronously
    someCallback(42); 
}
// Pass in a reference to a callback function
anotherFunction(callback1); // prints: "Value is: 42"
anotherFunction(callback2); // prints: 47

// Define callback inline
anotherFunction(value => {
    console.log(value - 10); // prints: 32
})


// setTimeout: run a function N milliseconds later
function callback3() {
    console.log("Done!");
}
// Run callback3 in 1.5 seconds
setTimeout(callback3, 1500);
// setInterval: call function repeatedly, N milliseconds apart
let intervalId = setInterval(callback3, 1000);
// clearInterval to stop the repeated timer
clearInterval(intervalId);
// Timing example:
const a = () => console.log('a')
const b = () => console.log('b')
const c = () => {
  console.log('c')
    setTimeout(a, 0)
    b()
}

c() // prints:  1) "c"  2) "b" 3) "a", separately
