// Functions can be declared with parameters
function printValues(a, b, c) {
    console.log(`A: ${a}, B: ${b}, C: ${c}`);
}
// You can call a function with more or fewer arguments than listed
printValues(1, 2, 3, 4)
// prints: "A: 1, B: 2, C: 3" - the '4' argument is ignored

// If an argument is not provided, the value is `undefined`
printValues(1, 2)
// prints: "A: 1, B: 2, C: undefined"
// You can define "default values" for parameters that will
// be used _only_ if the argument is `undefined`
function printValues2(a, b, c=5) {
    console.log(`A: ${a}, B: ${b}, C: ${c}`);
}

printValues2(1, 2)
// prints: "A: 1, B: 2, C: 5"


// You can use "rest arguments" to gather extra arguments
function manyArguments(a, b, ...otherArgs) {
  console.log(`A: ${a}, B: ${b}, other: ${otherArgs}`);
}
manyArguments(1, 2, 3, 4, 5);

// prints: "A: 1, B: 2, C: [3, 4, 5]"
// You can also "destructure" object and array arguments
function destructureArgs({ a, c }, [d, e]) {
  // Specific fields / values are extracted and turned
  // into local variables inside the function
}
destructureArgs(
  { a: 1, b: 2, c: 3 }, // 'a' and 'c' become local variables
  [4, 5, 6, 7] // 4 and 5 become local variables `d` and `e`
);
// Arrow function gotcha: implicit return of an object requires
// parentheses so curlies aren't seen as function body
const makeObject = () => ({ a: 42 });
