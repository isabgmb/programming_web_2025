// Mutation: changing the contents of an object.  The variable points
// to the same reference, but the values inside it are different.
let obj1 = {a : 1, b : 2, c : 3};
// Changing the value of `obj1.b` directly mutates `obj1`:
obj1.b = 99;

// "Immutable": "never changes".
// Immutable updates require making _copies_ of data,
// and only modifying those copies, not the originals
let obj2 = {
    a : 1, b : 2, c : 3,
    nested : { d : 4, e : 5}
};
// You can use the object spread operator to "shallow copy" objects,
// but you need to copy each level of nesting that is updated!
let updatedObj2 = {
    ...obj2, // copy all fields from obj2,
    nested : { // provide a new `nested` value
        ...obj2.nested, // copy fields from `obj2.nested`
    }
}


// Prefer to update immutably: ✅, avoid mutations 
// if possible: ❌
// These array methods mutate the existing array object:
array.push() // ❌ add to back
array.unshift() // ❌ add to front
array.pop() // ❌ remove from back
array.shift() // ❌ remove from front
array.splice() // ❌ can insert or remove in the middle
array.sort() // ❌ sorts the array in-place!!!
array.reverse() // ❌ reverse the array in-place

// These methods produce a new array instead, containing:
array.slice() // ✅ part or all of the original array
array.concat() // ✅ original array plus arguments
array.map() // ✅ values returned by map callback
array.filter() // ✅ original values where callback returned true

// These methods return a different value completely:
array.find() // ✅ first item matching the callback
array.findIndex() // ✅ index of first item matching the callback
array.includes() // ✅ boolean - is this exact item 

