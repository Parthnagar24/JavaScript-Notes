// Implict 

// 1.String + Number → String

console.log("5" + 2);   // "52"
console.log(2 + "5");   // "25"

//2.Number - String → Number

console.log("10" - 5);  // 5
console.log("10" * 2);  // 20
console.log("10" / 2);  // 5

//3.Boolean → Number

console.log(true + 1);   // 2   (true → 1)
console.log(false + 1);  // 1   (false → 0)

//4.Null & Undefined

console.log(null + 1);      // 1   (null → 0)
console.log(undefined + 1); // NaN (undefined → NaN)

//5.Comparion

console.log("5" == 5);   // true   (string "5" → number 5)
console.log("5" === 5);  // false  (strict equality, no coercion)



// Explicit

// Numbers
console.log(Number("123"));   // 123
console.log(Number(true));    // 1
console.log(Number(false));   // 0
console.log(Number("abc"));   // NaN

// String
console.log(String(123));   // "123"
console.log(String(true));  // "true"

// Boolean
console.log(Boolean(1));     // true
console.log(Boolean(0));     // false
console.log(Boolean(""));    // false
console.log(Boolean("hi"));  // true
