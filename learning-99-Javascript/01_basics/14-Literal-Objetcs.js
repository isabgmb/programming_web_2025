// Shorthand syntax for declaring key/value pairs:
let x = 0, y = 1;

let es5 = {x : x, y : y};
// Create a key 'x' whose value is the variable 'x'
let es6 = {x, y};

// Computed object property names:
let name = "abc";

let es5a = {};
es5a[name] = 123;

let es6a = {
    // Use the value of variable 'name' as the property key
    [name] : 123,
    [name + "2"] : 456,
}
// {abc : 123, abc2 : 456}


// Valid syntax for declaring functions in an object:

let obj1 = {
    // ES5: `function` keyword as the value
    func1 : function() { },

    // ES6: same thing, but with an arrow function
    func2 : () => { },

    // ES6: can declare a method directly as a property
    func3() { }
}
