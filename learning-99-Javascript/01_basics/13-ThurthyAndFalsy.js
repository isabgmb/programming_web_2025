// Boolean comparisons will implicitly convert values:
if(1) {
    console.log("This will print")
}
if(0) {
    console.log("This will not")
}
// Negation converts to boolean, then flips value
let false1 =  !"some string";
let false2 = !10;

let true1 = !"";
let true2 = !0;
// Common trick: "double-bang" to get same boolean:
let true3 = !!"some string";
let false3 = !!0;
// Can also use the Boolean constructor
let true4 = Boolean(10);
let false4 = Boolean("");


// "Truthy" values implicitly convert to `true`
if ({}) // ALL objects
if ([]) // ALL arrays
if (42) // non-zero numbers
if (-42.5) // non-zero numbers
if ("0") // non-empty strings, regardless of quote type
if (new Date()) // dates
if ( () => {} ) // functions


// "Falsy" values implicitly convert to `false`
if (null)
if (undefined)
if (0)
if (NaN)

// empty strings, regardless of quote type
if (''){}
    
