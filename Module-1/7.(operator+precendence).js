//Operators
// Arithmetic Operators
let a = 10,
  b = 3;

console.log(a + b); // 13 (addition)
console.log(a - b); // 7  (subtraction)
console.log(a * b); // 30 (multiplication)
console.log(a / b); // 3.33... (division)
console.log(a % b); // 1  (remainder/modulus)
console.log(a ** b); // 1000 (exponentiation)

// Assignment Operators
let x = 5;

x += 3; // x = x + 3  → 8
x -= 2; // x = x - 2  → 6
x *= 4; // x = x * 4  → 24
x /= 3; // x = x / 3  → 8
x %= 3; // x = x % 3  → 2

// Comparison Operators
let c = 5,
  d = 10;

console.log(c == d); // false (equal value)
console.log(c === d); // false (equal value and type)
console.log(c != d); // true  (not equal)
console.log(c !== d); // true  (not equal value or type)
console.log(c < d); // true  (less than)
console.log(c > d); // false (greater than)
console.log(c <= d); // true  (less than or equal)
console.log(c >= d); // false (greater than or equal)

// Logical Operators
let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin); // false (AND - both must be true)
console.log(isLoggedIn || isAdmin); // true  (OR - one must be true)
console.log(!isLoggedIn); // false (NOT - opposite)

//Increment and Decrement Operators
let count = 0;
count++; // Increment by 1 (count is now 1)
count--; // Decrement by 1 (count is now 0)

// Ternary Operator
let age = 18;
let canVote = age >= 18 ? "Yes" : "No"; //
console.log(canVote); // "Yes"

// Typeof Operator
console.log(typeof c); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
