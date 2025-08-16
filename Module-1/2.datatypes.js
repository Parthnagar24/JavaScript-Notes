/* 1. Primitive Data Types
-> Immutable + stored directly in memory by value */

// A. Numbers
let age = 25;         // Integer
let price = 99.99;    // Decimal (floating point)
let negative = -42;   // Negative number
let infinity = Infinity; // Special numeric value
let notANumber = NaN; // "Not a Number"

// B. Strings
let name = "John Doe";               // Double quotes
let greeting = 'Hello, World!';      // Single quotes
let templateLiteral = `Hello, ${name}`; // Template literal (with interpolation)

//C. Booleans
let isActive = true;   // true
let isComplete = false; // false

//D. Undefined
let uninitialized; // Variable declared but not assigned
let x;             // undefined
let obj = { name: "John" };
console.log(obj.age); // undefined (property doesn't exist)

//E. Null
let emptyValue = null; // Explicitly set to "no value"

//F. Symbol(ES6+)
let id = Symbol("id");
let anotherId = Symbol("id");
console.log(id === anotherId); // false

//G.BigInt 
let bigNumber = 123456789012345678901234567890n;
let anotherBig = BigInt("999999999999999999999");


/*2.Non-Primitive Data Type
->Mutable + stored by reference */

// Objects
let person = {
  name: "Priya",
  age: 28,
  city: "Chennai"
};

//Array 
let colors = ["red", "green", "blue"];

// Functions
function greet() {
  return "Hello!";
}
