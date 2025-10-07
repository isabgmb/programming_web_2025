// Lodash: a swiss army knife of JS utility functions
// Arrays
_.difference(["a, b"], ["c", "b"]) // ["a"]
_.head(["a", "b", "c"]) // "a"
_.tail(["a", "b", "c"]) // "c"
_.intersection(["a", "b"], ["b", "c"]) // ["b"]
// "Collections" (objects and arrays)
_.groupBy([6.1, 4.2, 6.3], Math.floor); 
// => { '4': [4.2], '6': [6.1, 6.3] }

let items = [{n: "f", a: 48}, {n: "b", a : 36}, {n: "w", a: 38}];
let sortedItems = _.sortBy(items, "a");
// => [{n: "b", a:36}, {n: "w", a: 38}, {n: "f", a:48}]
// Lodash's `forEach()` works on BOTH arrays and objects!
_.forEach({ 'a': 1, 'b': 2 }, (value, key) => {
    console.log(key); // prints: "a", "b"
});
// Language checks
_.isEmpty(someValue) // objects, arrays, etc
_.isBoolean(someValue)
_.isNil(someValue) // null or undefined


let debounced = _.debounce(() => console.log("Hi!"));
debounced(); debounced(); debounced(); // only runs once, later

// Objects
let obj1 = {a : 2, b : 3, c : 7};
_.mapValues(obj1, val => val * 2); // {a : 4, b : 6, c : 14}

_.omit(obj1, ["b"]); // {a : 2, c : 7}
_.pick(obj1, ["b", "c"]) // {b : 3, c: 7}

// Strings
_.camelCase("Foo Bar"); // "fooBar"
_.kebabCase("Foo Bar"); // "foo-bar"
_.snakeCase("Foo Bar"); // "foo_bar"
_.startCase('fooBar'); // "Foo Bar"

_.padStart('abc', 6, "0"); // "000abc"
