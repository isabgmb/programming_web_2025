// Standard strings can be either single or double quotes
let str1 = "This is a string";
let str2 =  'This is also a string'

// Slashes escape special characters
let str3 = "Tab: \t, newline: \n, double quote: \", 
and you can mix quotes inside, so 'quote' is okay";

// You can concatenate anything to a string, somehow
let str4 = "Numbers: " + 12.345;
let str5 = "Strings: " + "some more text";
let str6 = "Objects, sorta: " + {a : 42}; 
// ends up as: "Objects, sorta: [object Object]"

// Quoted strings can't be multi-line
let invalid = "You can't

do this";
