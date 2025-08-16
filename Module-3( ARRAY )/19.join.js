const fruits = ["apple", "banana", "cherry", "date"];
const joinedFruits = fruits.join(", ");
console.log(joinedFruits); // Output: "apple, banana, cherry, date"
// The join method creates and returns a new string by concatenating all the elements of an array,
// separated by the specified separator (in this case, ", "). If no separator is provided,
// the elements are joined with a comma by default. The original array remains unchanged.
// The join method is useful for converting an array into a string representation, especially when you want
// to display the array elements in a readable format or when you need to send the data as a string.
// In this example, the fruits array is joined into a single string with each fruit separated by a comma and a space.
// The output is "apple, banana, cherry, date".
