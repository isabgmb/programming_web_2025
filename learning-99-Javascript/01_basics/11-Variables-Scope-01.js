// Up through ES5, only the `var` keyword existed:
var a = 1;
// `var` is "function scoped" - all declarations are "hoisted"
// to the top of the enclosing function:
function func1() {
    // 2) "hoisted" as if it were declared on the first line
    // technically it exists right here, but is still undefined

    if(true ) {
        var b = "test"; // 1) declared here
    }
    if(true) {
        // 3) This declaration actually overrides the other one
        var b = "blah";
    }

    // 4) Still accessible in the outer function scope
    console.log("B is: ", b); // "blah"
}



// `var` also leaks outside of a `for` loop
for(var i = 0; i < 10; i++) {}
console.log(i); // 10 - it's a global variable now

// Technically you can declare global variables without `var`
c = 42

// The root object is `window` in a browser.
console.log(window.i); // 10
console.log(window.c); // 42

// In Node.js, it's `global`:
console.log(global.c);
