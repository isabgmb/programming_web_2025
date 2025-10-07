// "Callback Hell": a pyramid of nested callbacks
fetchData("/endpoint1", (result1) => {
    fetchData("/endpoint2", (result2) => {
        fetchData("/endpoint3", (result3) => {
            // do something with results 1 through 3
        })
    })
})
// What happens when an async call fails?
fetchData("/endpoint1", (result, err) => {
    if(err) { console.error("PANIC!");
    } else {// Do something useful
    }
})
// Can't try/catch - the error will be thrown later
try {
    fetchData("/endpoint1")
} catch(err) {
    console.log("Won't ever get here!")
}



// Promises provide a structured way to handle async results
fetchData("/endpoint1")
    .then( (result) => {
        return firstProcessStep(result)
    })
    .then( (processedResult) => {
        console.log(`Processed result: ${processedResult}`)
    })
    .catch( (err) => {
        console.error("PANIC!", err);
    })

// Conceptually equivalent to this FAKE example:
try {
    let result = fetchData();
    let processedResult = firstProcessStep(result);
    console.log(`Processed result: ${processedResult}`)
} catch(err) {
    console.error("PANIC!", err);
}
