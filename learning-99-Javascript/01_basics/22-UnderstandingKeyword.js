// In the global scope, `this` refers to the global `window` object:
console.log(this === window); // => true  
this.myString = 'Hello World!';  
console.log(window.myString); // => 'Hello World!'  

// Older JS (pre-ES5): for function invocation, `this === window`:
function sum(a, b) {  
    console.log(this === window); // => true
    this.myNumber = 20; // add 'myNumber' property to global object
    return a + b;
}
// sum() is invoked as a function
// this in sum() is a global object (window)
sum(15, 16);     // => 31  
window.myNumber; // => 20  


// Newer JS (ES5+): in "strict mode", `this === undefined`

function multiply(a, b) {  
    'use strict'; // enable the strict mode
    console.log(this === undefined); // => true
    return a * b;
}
// multiply() function invocation with strict mode enabled
// this in multiply() is undefined
multiply(2, 5); // => 10  
  

// Modern JS build tools turn on strict mode by default
