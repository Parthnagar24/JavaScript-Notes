const numbers = [100, 2, 300, 400, 50, 60];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [2, 50, 60, 100, 300, 400]
// The sort method sorts the elements of an array in place and returns the sorted array.
// The comparison function (a, b) => a - b sorts the numbers in ascending order.
// If you want to sort in descending order, you can use (a, b) => b - a instead.
// Note: The sort method converts elements to strings and compares their sequences of UTF-16 code units by default, which may lead to unexpected results for non-numeric arrays.
// For example, ['10', '2', '1'].sort() would result in ['1', '10', '2'] instead of ['1', '2', '10'].
