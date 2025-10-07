// Objects can be destructured as well.
// Local variables are created with the name and value of fields

let obj1 = {a : 1, b : 2, c : 3, d : 4};

// This long-hand example:
let a = obj1.a;
let b = obj1.b;

// Is the same as:
let {a, b} = obj1;
// Local variables can be given different names:
let {a : differentA, c} = obj1;

// And have default values in case of undefined:
let {doesNotExist = 123} = obj1;

// The `...` "rest" operator grabs everything else as an object
let {a : a1, b : b1, ...otherLetters} = obj1;
console.log(otherLetters); // {c : 3, d : 4}


// New objects can be created with the `...` "object spread" operator
// Later field values overwrite earlier ones.

let obj2 = {a : 1, b : 2, e : 5};

let obj3 = {...obj2, a : 99}; // {a : 99, b : 2, e : 5}

// This is equivalent to:
Object.assign({}, obj3, {a : 99})
// Note that this is a _shallow_ copy, not a deep copy!
let obj4 = {
    outer1 : {inner1 : 42},
    outer2 : {inner2 : 99}
}

let obj5 = {...obj4};
obj4.outer1.inner1 = 123;
console.log(obj5.outer1.inner1) // 123 , because it's the same object!
