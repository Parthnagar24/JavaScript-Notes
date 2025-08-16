// Checking if a number is greater than another number :

let num1 = 6;
let num2 = 10;

console.log("I am regular upper code");

if (num1 > num2) {
  console.log("num1 is greater than num2");
} else {
  console.log("num2 is greater than num1");
}
console.log("I am regular bottom code");

// Check if a string is equal to another string

let username = "alexandra";
let userName = "alexandra";

if (username == userName) {
  console.log("Both username are equal");
} else {
  console.log("Not equal");
}
console.log("bottom code");

// Checking a variable is a number or not :

let score = 100;

if (typeof score === "number") {
  console.log("yup this is a number ");
} else {
  console.log("not a number");
}

// Check if a boolean value is true or not :

let isBooleanValue = false;

if (isBooleanValue) {
  console.log("!");
} else {
  console.log("`");
}

// Check if an array is empty

let array = [];
if (array.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is not empty");
}
