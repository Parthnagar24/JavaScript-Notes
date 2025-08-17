ES6 Modules (Browser & Modern JS)

export / import

// math.js
export function add(a, b) { return a + b; }

// main.js
import { add } from "./math.js";
console.log(add(2,3));

✅ ES6 modules are static and tree-shakable
