//The same variable value changes type dynamically depending on the assigned value

let value;          
console.log(typeof value); // "undefined"

// Assign a number
value = 42;          
console.log(typeof value); // "number"

// Assign a string
value = "Hello";     
console.log(typeof value); // "string"

// Assign a boolean
value = true;        
console.log(typeof value); // "boolean"

// Assign an object
value = { name: "Priya" };  
console.log(typeof value); // "object"

// Assign an array
value = [1, 2, 3];  
console.log(typeof value); // "object" (arrays are objects in JS)
console.log(Array.isArray(value)); // true

// Assign a function
value = function() { return "Hi"; };  
console.log(typeof value); // "function"
