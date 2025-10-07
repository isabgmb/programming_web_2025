// "Methods" are functions attached to an object
let myObject = {  
    // helloFunction is a method
    helloFunction: function() {
        return 'Hello World!';
    }
};

// "Method invocation" is using an object and a dot 
// in front of the function call
let message = myObject.helloFunction(); 
// Same thing:
[1, 2].join(',')


// For method calls, `this` points to the object in front
let person1 = {
    name : "Joe",
    sayHi() {
        console.log(`My name is ${this.name}`)
    }
}

person1.sayHi(); // "My name is Joe"
let person2 = {
    name: "Sarah",
    sayHi : person1.sayHi,
};

person2.sayHi(); // "My name is Sarah"

// Function call, not a method call!
const {sayHi} = person1;
sayHi(); // "My name is undefined"


// a "constructor" call is any use of the `new`
// keyword in front of a function.
// The `this` keyword will point to the function instance.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person3 = new Person("Joe", 34);
let person4 = new Person("Sarah", 27);

console.log(person3.name) // "Joe"
console.log(person4.name) // "Sarah"
