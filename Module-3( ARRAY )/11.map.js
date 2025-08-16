const numbers = [1, 2, 3, 4, 5, 6];
const d = numbers.map((num) => num * 2);
console.log(d); // Output: [2, 4, 6, 8, 10, 12]
// The map method creates a new array populated with the results of calling a provided function on every element in the calling array.
// In this case, each number in the original array is multiplied by 2, resulting in a new array with doubled values.
// The original array remains unchanged.
// The map method is useful for transforming data in an array without modifying the original array.
