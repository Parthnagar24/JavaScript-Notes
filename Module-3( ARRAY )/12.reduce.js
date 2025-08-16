const numbers = [1, 2, 3, 4, 5, 6];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 21
// The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// In this case, it sums up all the numbers in the array, starting from an initial value of 0.
// The first argument to the reducer function is the accumulator (total), and the second argument is    the current value (num).
// The reduce method is often used for operations like summing values, flattening arrays, or accumulating results based on some criteria.
