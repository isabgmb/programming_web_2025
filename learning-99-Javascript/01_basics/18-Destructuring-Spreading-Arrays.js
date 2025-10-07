// "Destructuring" is creating local variables based on contents
let arr1 = ["a", "b", "c", "d"];

// Create multiple local variables at once, using the 
// ordering within the array.
// An empty comma skips that item
let [a, , c, d] = arr1;

// The `...` "rest" operator grabs everything else as an array
let [a1, b1, ...otherLetters] = arr1;
console.log(otherLetters) // ["c", "d"]

let [firstName, lastName] = "Weder Sousa".split(" ");

// Can even do object assignments! Notice no "let" for destructuring
let user = {};
[user.firstName, user.lastName] = "Weder Sousa".split(" ");



// Defaults can be provided if the value is `undefined`
let arr2 = ["a", "b"];
let [a2, b2, c2 = "fallback"] = arr2;

// New arrays can be created using the `...` "spread" operator
let arr3 = ["e", ...otherLetters, "f"]
// ["e", "c", "d", "f"]

// These are equivalent:
let arr4 = ["a", "b"];

let arr5 = [...arr4, "c"];
let arr6 = arr4.concat("c");
