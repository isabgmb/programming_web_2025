let obj1 = {a : 1, b : 2};
let obj2 = {c : 3, d : 4};
let obj3 = obj2;

// Get arrays of the keys, values, or both
Object.keys(obj1); // ["a", "b"]
Object.values(obj1); // [1, 2]
Object.entries(obj1) // [ ["a", 1], ["b", 2]]

// Compare exact identies
Object.is(obj1, obj2) // false
Object.is(obj2, obj3) // true

NaN === NaN // false
Object.is(NaN, NaN) // true

// "Freeze" objects to prevent them from being modified
Object.freeze(obj1);
obj1.a = 99; // error!


// Bonus: Check if a value is really an array
Array.isArray([1]) // true
Array.isArray({}) // false


let target1 = {a : 1, b : 2};
let target2 = {a : 1, b : 2};
let source1 = {b : 2, c : 3};
let source2 = {b : 5, d : 6};

// Copy properties from each source to the target.
// Note: this WILL MUTATE THE TARGET!
Object.assign(target1, source1, source2);
console.log(target1);
// {a : 1, b : 5, c : 3, d : 6}
// Can be used to safely create copies if the target is a new object:
const newObject = Object.assign({}, target2, source1, source2);

// Result: newObject !== target, and target is unchanged:
console.log(newObject)
// {a : 1, b : 5, c : 3, d : 6}

console.log(target2);
// {a : 1, b : 2}

