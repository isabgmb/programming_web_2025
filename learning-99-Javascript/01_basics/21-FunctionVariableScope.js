// Variables may access values in the global scope
let a = 1;
function doStuffWithA() {
    console.log(a) // doesn't exist in the function
    a = 2; // modify the value outside
    console.log(a) // print the modified value
}

// Functions can create and return functions
function createPrintName() {
    let name = "Weder";
    function printName() {
        console.log(name);
    }
    return printName
}
const actualPrintName = createPrintName()
actualPrintName(); // prints: "Weder"


// Functions can capture references to values.
// These are called "closures".
function makeAdder(x) {
    return function(y) { return x + y;};
}
let add5 = makeAdder(5);
let add10 = makeAdder(10);
console.log(add5(2));  // 7
console.log(add10(2)); // 12
function makeCounter() {
    let timesCalled = 0;
    return function counter() {
        timesCalled++;
        console.log(`Times called: ${timesCalled}`);
    }
}
const actualCounter = makeCounter();
actualCounter(); // "Times called: 1"
actualCounter(); // "Times called: 2"
