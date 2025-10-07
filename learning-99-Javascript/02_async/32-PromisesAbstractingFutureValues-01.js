// Creating a Promise instance:
// Pass in a callback that receives resolve and reject callbacks
let promise1 = new Promise( (resolve, reject) => {
    // This callback executes synchronously, immediately
    // Could "resolve" the promise with a value:
    resolve("a");
})
let promise2 = new Promise( (resolve, reject) => {    
    // or, instead, reject it:
    reject("Panic!")
})
// The sync constructor could schedule resolving later:
console.log("First")
let promise3 = new Promise( (resolve, reject) => {
    console.log("Second");
    setTimeout( () => {        
        console.log("Fourth");
        resolve("a");
    }, 1000) // Resolve this promise in 1 second
})
promise3.then(() => console.log("Fifth"));
console.log("Third");


// The `then()` method forms a pipeline of new promises:
promise1 .then( (firstValue) => { // "a"
        return "b";
    })
    .then( (secondValue) => { // "b"
         // _Not_ returning a value returns `undefined`
    })
    .then( (thirdValue) => { // undefined
    })
// Throwing an error rejects the promise and skips
// down to the next `catch()` handler
promise1.then( (firstValue) => {
        throw new Error("KABOOM!");
    })
    .then( (secondValue) => {
        // Won't ever be reached!
    })
    .catch( (error) => {
        console.log(error) // "KABOOM!"
    })
