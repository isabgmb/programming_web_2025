// Functions can be declared with the `function` keyword:
function func1() {
    console.log("Hello world!");
}
// and called:
func1(); // prints: "Hello world!"

// They can also be declared with "arrow function" syntax:
let func2 = () => {
    console.log("Hello again!");
}

// Standard arguments and return values
function addTwoNumbers(a, b) {
    return a + b;
}
addTwoNumbers(3, 5); // 8

// They're just variables, and can be passed around
let alsoFunc1 = func1
alsoFunc1(); // also prints: "Hello world!"


// Functions that don't return actually return `undefined`
function doNothing() {}
console.log(doNothing()) // undefined

// Arrow functions have a variety of forms depending on arguments

// 0 or 2+ arguments: parentheses are required
let func4 = () => {}
let func3 = (a, b) => {}
// 1 argument: parentheses are optional:
let timesTwo = num => {
    return num * 2;
}

// Curly braces can also be skipped for implicit returns
let timesThree = num => num * 3;
// Don't add newlines after `return`!!!
function thisIsBroken() {
    return // semi-colon is auto-inserted here!
        2 + 2;
}
