// `slice()` create a new array reference with the same contents
let arr1 = ["a", "b", "c", "d", "e"];
let arr2 = arr1.slice();
arr1 === arr2; // false
console.log(arr2); // ["a", "b", "c", "d", "e"]

let arr3 = arr1.slice(2, 4); // start, exclusive end
console.log(arr3); // ["c", "d"]

let arr4 = arr1.slice(-2); // negative indices!
console.log(arr4); // ["d", "e"]
// `concat()` creates a new array with more items at the end,
// and flattens arrays passed as arguments
let arr5 = arr4.concat("f", ["g"]);
console.log(arr5); // ["d", "e", "f", "g"]

// `join()`: converts values to strings with a separator
let str1 = arr1.join(":");
console.log(str1); // "a:b:c:d:e"


// The swiss army knife: `splice()` inserts, removes, and deletes

// delete 1 item starting at index 2
let removed = arr1.splice(2, 1); 
console.log(arr1); // ["a", "b", "d", "e"]
console.log(removed); // ["c"]

// at index 2, delete nothing, add "f" and "g"
arr1.splice(2, 0, "f", "g"); 
console.log(arr1); // ["a", "b", "f", "g", "d", "e"]


const values = [3, 5, 8, 10, 13];

const timesTwo = (num) => num * 2;
const doubledNumbers = values.map(timesTwo);
// [6, 10, 16, 20, 26]

const isEven = (num) => num % 2 === 0;
const evenNumbers = values.filter(isEven);
// [8, 10]
const logValue = (num) => console.log(num);
values.forEach(logValue);
// prints: 3, 5, 8, 10, 13


const addNumbers = (lastResult, currentValue) => {
    return lastResult + currentValue;
}
const sum = values.reduce(addNumbers, 0); // 39

