// You can create pre-resolved or pre-rejected promises
let promise1 = Promise.resolve(42);
let promise2 = Promise.reject("PANIC!");

// Example of returning a promise:
Promise.resolve(1)
    .then( (first) => { // 1
        return promise1;
    })
    .then( (second ) => { // 42
        return promise2;
    })
    .catch( (error) => {
        console.log(error) // "PANIC!"
    })


    // Promises can be combined with `Promise.all()`
Promise.resolve()
    .then( () => {
        let promise1 = fetchData("/endpoint1");
        let promise2 = fetchData("/endpoint2");

        // Will only resolve if and when all 
        // of the argument promises resolve.
        // If any argument promises reject, this rejects.
        let promiseForBoth = Promise.all([promise1, promise2]);

        return promiseForBoth;
    })
    .then( (arrayOfResults) => {
        let [result1, result2] = arrayOfResults;
        // do something with both results here
    })
