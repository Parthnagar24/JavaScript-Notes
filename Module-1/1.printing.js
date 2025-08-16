// PRINTING IN JAVASCRIPT

/* 1.Basic Printing

Prints normal messages to the console.
Commonly used for debugging or showing output.    */

console.log("Hello");

/* 2.Without Newline

Prints directly to standard output without adding a new line.  */

process.stdout.write("chai");
process.stdout.write("chai");


/* 3.Error Message

Prints messages in red (in most terminals).
Used for errors or exceptions.*/

console.error("Database connection failed!");
console.error("Error:", new Error("Invalid user ID"));

/* 4. Info Message

Prints in blue (Node.js) or normal (browser).
Used for informational messages. */

console.info("User successfully logged in");
console.info("Loading configuration from config.json");

/* 5.Warnings

Prints messages in yellow/orange.
Used for warnings about bad practices or upcoming issues. */

console.warn("API deprecated - please use v2 endpoint");
console.warn("Password strength is weak");

/* 6.Tabular Format

Displays arrays/objects in a table format.*/

console.table([
  { name: "Alice", age: 25, city: "Mumbai" },
  { name: "Bob", age: 30, city: "Delhi" },
  { name: "Charlie", age: 35, city: "Bangalore" },
]);
