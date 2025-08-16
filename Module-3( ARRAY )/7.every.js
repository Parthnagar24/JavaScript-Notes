const numbers = [1, 2, 3, 4, 5, 6];
const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven); // Output: false

// The every method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// If all elements pass the test, it returns true; otherwise, it returns false.
// In this case, since not all numbers are even, the output is false.
