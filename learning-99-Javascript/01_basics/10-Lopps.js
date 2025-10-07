// Standard loops:
while(someCondition) {
  // do something
  break;
}

for(let i = 0; i < 10; i++) {
    console.log("Count: " + i);
}


// Specialized loops:
// for..in loops over keys
let obj1 = { a : 1, b : 2, c : 3};

for(let key in obj1) {
  console.log("Key: " + key)
}

// for..of loops over iterable values
let valuesArray = ["a", "b", "c"];

for(let value of valuesArray) {
  console.log("Value: " + value);
}
