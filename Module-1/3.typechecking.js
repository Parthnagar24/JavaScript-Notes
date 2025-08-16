// Numbers
let age = 25;
console.log(typeof age); // "number"

let price = 99.99;
console.log(typeof price); // "number"

let notANumber = NaN;
console.log(typeof notANumber); // "number" (yes, NaN is still a number!)

let infinity = Infinity;
console.log(typeof infinity); // "number"

// Strings
let name = "John Doe";
console.log(typeof name); // "string"

// Booleans
let isActive = true;
console.log(typeof isActive); // "boolean"

// Undefined
let uninitialized;
console.log(typeof uninitialized); // "undefined"

// Null (⚠️ special case)
let emptyValue = null;
console.log(typeof emptyValue); // "object" (this is a well-known JS bug)

// Symbols
let id = Symbol("id");
console.log(typeof id); // "symbol"

// BigInt
let bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber); // "bigint"

// Object
let person = { name: "Priya", age: 28 };
console.log(typeof person); // "object"

// Array (⚠️ special case)
let colors = ["red", "green", "blue"];
console.log(typeof colors); // "object"
console.log(Array.isArray(colors)); // true (better check for arrays)

// Function
function greet() {
  return "Hello!";
}
console.log(typeof greet); // "function"


/*
📝 Special Notes

typeof null → "object" (this is a bug in JavaScript kept for backward compatibility).

To check for arrays, use:

Array.isArray(colors); // true


To check for null:

value === null;


To check if something is an object but not null or array:

typeof value === "object" && !Array.isArray(value) && value !== null
*/
