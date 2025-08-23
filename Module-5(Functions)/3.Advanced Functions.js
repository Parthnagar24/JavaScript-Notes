//Higher-Order Functions
function higher(fn) {
  return fn(5);
}
console.log(higher(x => x * 2)); // 10

//Currying
const multiply = a => b => a * b;
console.log(multiply(2)(3)); // 6

//Memoization
function memoize(fn) {
  const cache = {};
  return function(x) {
    if (cache[x]) return cache[x];
    return (cache[x] = fn(x));
  };
}

const square = memoize(n => n * n);
console.log(square(5)); // 25
console.log(square(5)); // Cached 25

//Recursion
function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5)); // 120
