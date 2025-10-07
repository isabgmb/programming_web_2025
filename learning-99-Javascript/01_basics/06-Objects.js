// JS objects act like "dictionaries" or "maps" in other languages
// They're key/value pairs. Keys must be strings, values are anything
let obj1 = {
    // Most keys can be "bare" and unquoted
    a : 1,
    // But you can quote if you want
    "b" : 2,
    // Keys that aren't legal identifiers must be quoted
    "first.last" : "Mark Erikson",
    // and values can be whatever
    "dashed-name" :  {nested : {data : ["here"]}},

    someFunction : function() {}
};

// Object fields can be accessed using dot or string notation
console.log(obj1["a"]) // 1
console.log(obj1.b) // 2
console.log(obj1["dashed-name"].nested.data) // ["here"]


// And fields that don't exist return undefined
console.log(obj1.doesNotExist) // undefined

// Fields can be added or mutated at any time
obj1.c = 3;
obj1.b = "blah";

delete obj1.a;

// You can use variables to index into an object
let keyName = "c";
console.log(obj1[keyName]) // 3

// And check for property existence:
obj1.hasOwnProperty("c") // true
obj1.hasOwnProperty("d") // false
