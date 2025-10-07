// "Generator" functions can be paused and resumed later
// Generators are declared using `function*`
function* generatorFunction() {
    // They can use the `yield` keyword inside to pause
    // and return a value
    yield 1;
    // When it resumes, it will run to the next yield
    let secondResult = 1 + 2;
    yield secondResult;

    // The calling code can inject values:
    let injectedValue = yield 7;   
    yield injectedValue + 10;

    // They can still return to finish up:
    return 42;
}


// Other code calls the function to get an "iterator" object
let iterator = generatorFunction();

// Iterators are objects with a `next()` function:
let result1 = iterator.next();
console.log(result1) // {done : false, value : 1}
// You can keep calling `next()` until `done` is `false`
console.log(iterator.next()) // {done : false, value : 3}
console.log(iterator.next()) // {done : false, value : 7}

// You can inject values into `next()`:
console.log(iterator.next(5)) // {done : false, value : 15}


// The return object indicates when it's "done":
console.log(iterator.next()) // {done : true, value : 42}

// Calling it again gives a value of `undefined`:
console.log(iterator.next()) // {done : true, value : undefined}
