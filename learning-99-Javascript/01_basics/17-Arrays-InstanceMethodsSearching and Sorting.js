let arr1 = [1, 3, 6, 7, 12, 17];
let isEven = num => num % 2 === 0;
// `indexOf()`: returns the index of the first exact match
arr1.indexOf(12) // 4
arr1.indexOf(5) // -1, not found

// `includes()`: if the array contains the exact item
arr1.includes(7) // true
arr1.includes(13) // false
// `find()`: returns the first item matching the callback
let firstEven = arr1.find(isEven); // 6

// `findIndex()`: returns the index of the first matching item
let firstEvenIndex = arr1.findIndex(isEven); // 2
// `some()`: does the callback return true for _any_ value?
let anyEven = arr1.some(isEven); // true

// `every()`: does the callback return true for _all_ values?
let allEven = arr1.every(isEven); // false


let arr2 = [15, 2, 1];
// `sort()`: sorts arrays by:
// - mutating the array in place!!!
// - treating values as if they were strings!!!
// - comparing the string values lexicographically!!!
arr2.sort();
console.log(arr2); // [1, 15, 2]
// Sort callbacks:
// - take two values to compare
// - return 1 if first is greater, 0 for same, -1 for less than
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
// Common trick for comparing numbers: subtract
let compareNumeric2 = (a, b) => a - b;
arr2.sort(compareNumeric);
console.log(arr2); // [1, 2, 15]
