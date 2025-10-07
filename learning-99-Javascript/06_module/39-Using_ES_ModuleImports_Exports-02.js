// Importing "named exports" requires curly braces,
// and the names _must_ match identically
import {addTodo, toggleTodo, a, b2} from "./todoActions";

// You can also turn all named imports into a single object:
import * as combinedExports from "./todoActions";
console.log(combinedExports.a) // 1

// You can rename named exports
import {a as a2} from "./todoActions";

// Importing "default exports" requires _no_ curlies,
// and you can name it whatever you want:
import TheNumberThree from "./todoActions";

// You can import both default and named exports in one line:
import Three, {addTodo, b2} from "./todoActions";
