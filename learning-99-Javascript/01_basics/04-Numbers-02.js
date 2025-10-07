// The Math object contains various math functions,
// including rounding, trig, min/max, and more
Math.round(1.23) // nearest integer: 1
Math.floor(1.23) // lower intger: 1
Math.ceil(1.23) // higher integer: 2
Math.sin(1.23) // 0.9424888019316975
Math.min(2, 1, 3) // 1
Math.pow(2, 3) // 8


// toFixed() rounds to N decimal places and returns a string
let num1 = 12.345678;
let str1 = num1.toFixed(2); // "12.35"

// parseInt() and parseFloat() parse a string into a number
let int1 = parseInt("12.345"); // 12
let int2 = parseInt("0xff", 16); // base 16, so  255
let float1 = parseFloat("12.345"); // 12.345
