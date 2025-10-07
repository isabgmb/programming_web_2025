// `async` / `await` is syntax sugar for promises
// This function:
function function1() {
    let resultPromise = Promise.resolve(42);
    return resultPromise;
}
// Is the same as this function:
async function function2() {
    return 42; // converted to a promise!
}
function2()
    .then( (result) => console.log(result)) // 42
// Async functions may use the `await` keyword inside:
async function function3() {
    // Can **only** use this keyword inside `async` !
    let meaningOfLife = await function1();
    // do something with the value here
}

// This promise chain:
function fetchStuff() {
    return fetchData("/endpoint1")
        .then( (result) => {  return firstProcessStep(result)
        })
        .then( (processedResult) => {
            console.log(`Processed result: ${processedResult}`)
            return processedResult;
        })
        .catch( (err) => { console.error("PANIC!", err); })
} // Can convert to:
async function alsoFetchStuff() {
    try {
        let result = await fetchData("/endpoint1");
        let processedResult = firstProcessStep(result);
        console.log(`Processed result: ${processedResult}`)
        return processedResult;
    } catch (err) {        console.error("PANIC!", err);
    }
}
