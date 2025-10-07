// `let` and `const` are "block scoped", as you'd expect:
function func2() {
    console.log(a);
    if(true) {
        let a = 1;
    } 
}
func2() // Error: a is not defined

// And you can "shadow" variables:
function func3() {
    let a = 1;

    if(true) {
        const a = 2;
        console.log(a); // 2
    }

    console.log(a); // 1
}


// `let` allows reassigning to the same variable
let a = 1;
a = 2;

// `const` does not:
const b = 3;
b = 4; // error!

// However, `const` objects and arrays can be mutated!
const obj1 = {};
obj1.c = 5;

const arr1 = [];
arr1[0] = 6;
arr1.push(7);

// Strong style suggestion: prefer to always declare variables as const by default, 
// and only use let if you know you will reassign the variable!
