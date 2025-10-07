// Standard basic comparisons:
5 > 3 // true
4 <= 1 // false
"a" != "b" // true
// Comparisons between different types "coerce" / convert values
"2" > 1 // true, converts to 2

// The "double-equals" operator does conversions before comparing!
true == 1 // true, converts `true` to 1
false == 0 // true, converts `true` to 0
'' == 0 // true
'' == false // true

null == undefined // special case: true
null >= 0 // true, converts `null` to 0

// Objects and arrays are compared by reference
const obj1 = {}, obj2 = {};
obj1 == obj2; // false - different references


// The "triple-equals" operator does strict identity comparisons
true === 1 // false
false === 0 // false
'' ===  0 // false
''  ===  false // false


null === undefined // false

// Can negate strict comparisons
true !== 1 // true

// ALWAYS prefer using strict === comparisons if possible!
