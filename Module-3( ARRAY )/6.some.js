const numbers = [1, 2, 3, 4, 5, 6];
const hasEvenNumber = numbers.some((num) => num % 2 === 0);
console.log(hasEvenNumber); // Output: true

// The some method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
