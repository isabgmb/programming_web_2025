// `map`, `filter`, and `forEach` callbacks are called with 3 args:
// (currentItem, currentItemIndex, array)
let arr1 = ["one", "two", "three", "four", "five"];

arr1.forEach( (item, index, array) => {
    console.log({item, index, isArr1: array === arr1})
    // {item: "one", index: 0, isArr1: true}, etc
})

let arr2 = arr1.map( (item, index, array) => {
    return item.length;
})
// [3, 3, 5, 4, 4]

// Usually only need `item`, occasionally `index`:
let arr3 = arr1.map(item => item.length); // [3, 3, 5, 4, 4]


// `reduce` callbacks are called with two args:
//  - the return value of the last callback (sometimes called the "accumulated" value)
//  - the current item in the array
// `reduce()` itself also needs an initial value to start with:

let words = ["longer", "test", "a", "reallylong", "medium"];

let findLongestWord = (longestWord, currentWord) => {
    if(currentWord.length > longestWord.length) {
        return currentWord;
    }
    return longestWord;
}

let longestWord = words.reduce(
    findLongestWord, // callback function,
    "" // need an initial value for the first call
);
console.log(longestWord) // "reallylong"
