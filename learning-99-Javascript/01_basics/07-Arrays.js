// Arrays act like "lists" in other languages
// One array can hold any type of value
let arr1 = ["a", 42, {c : 99}];

// Arrays have a length property
console.log(arr1.length); // 3

// And can be indexed starting from 0:
console.log(arr1[1]); // 42

// You can modify the contents:
arr1[2] = "third";

// Reading off the end returns undefined
console.log(arr[10]); // undefined

// You _can_ assign non-contiguous values
arr1[5] = "fifth";
console.log(arr1);


// ["a", 42, "third", undefined, undefined, "fifth"]
console.log(arr1.length); // 6

// Arrays can be used as queues, modifying the end:
let arr2 = ["a", "b"];
arr2.push("c");
console.log(arr2);
// ["a", "b", "c"]
let c = arr2.pop(); // returns: "c", arr2: ["a", "b"]

// Or as stacks, modifying the front:
arr2.unshift("d");
console.log(arr2);
// ["d", "a", "b"]
let d = arr2.shift(); // returns: "d", arr2: ["a", "b"]

// toString() returns a comma-separated string
console.log(arr2.toString()); // "a,b"
