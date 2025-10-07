// Multiple "named exports" per file:
export function addTodo() {}
export const toggleTodo = () => {}
export class MyClass {}

export let a = 1;
// Can also write export separate from declaration:
const deleteTodo = () => {};
let b = 2;
export {deleteTodo, a, b as b2};

// Only one single "default export" per file:
export default 42;
// Could also do:
const c = 3;
export default c;

// Or even create an object (NOT the same as named exports!)
const exportObject = {a, b, c};
export default exportObject;
