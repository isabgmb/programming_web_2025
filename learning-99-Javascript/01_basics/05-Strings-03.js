let str1 = "abcdefghij";

// Strings have a length property:
console.log(str1.length) // 10

// You can access characters, but they're still strings:
console.log(str1[3]) // "d"

// They're immutable:
str1[3] = "q" // does nothing

// Convert casing:
str1.toUpperCase()
// "ABCDEFGHIJ"

// Compare strings directly:
"abc" === "abc" // true
"abc" === "abcd" // false


// Search using indexOf()
str1.indexOf("fg");  // 5

// Can check for inclusion
str1.startsWith("abc");  // true
str1.endsWith("blah");  // false
str1.includes("fg");  // true

// Get substrings using slice()
str1.slice(3, 6); // "def"

// Split with split()
let str2 = "a:b:c";
let values = str2.split(":");
// ["a", "b", "c"]

// Remove excess whitespace
let str3 = "  abcd  ";
let trimmed = str3.trim(); // "abcd"
