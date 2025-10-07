// Most types can be declared as a "primitive / literal" or as a constructor call.
// Note: always prefer declaring as "literals" if possible, not constructors!
let number1 = 42;
let number2 = Number(42)

let string1 = "some text"
let string2 = String("some text")

let obj1 = {}
let obj2 = Object()

let arr1 = []
let arr2 = Array()

let regex1 = /^(\w+)$/
let regex2 = RegExp("^(\w+)$")

// Either way, you can call methods on them:
console.log(number1.toString())
arr1.push("more text")
