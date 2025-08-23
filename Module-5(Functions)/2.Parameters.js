//Parameters

//Default Parameters

function multiply(a, b = 2) {
  return a * b;
}
console.log(multiply(5)); // 10


//Rest Parameters (collect arguments into an array)

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10


//Spread Operator (expands array/object)

const arr = [1, 2, 3];
console.log(Math.max(...arr)); // 3
