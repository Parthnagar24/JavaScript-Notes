//Function Declaration

//Defined with the function keyword.

//Hoisted (can be called before defined).

// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Parth")); // ✅ Works even before function is declared
