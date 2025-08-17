/* 2. Closures

Concept: A closure is a function that remembers its outer scope even after that scope has finished execution.

Why useful?

Data encapsulation
Private variables
Functional programming   */

function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
//inner “closes over” count.
