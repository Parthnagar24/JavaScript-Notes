// 1. if Statement -Executes a block of code if a condition is true.

let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
} //You are an adult.


// 2. if...else Statement -Executes one block if condition is true, another if false.

let Age = 16;

if (Age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
} //You are a minor.


// 3. if...else if...else -Checks multiple conditions sequentially.

let score = 85;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B");
} else if (score >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
} //Grade B


//4. Switch Statement -Used for multiple fixed values.

let day = 3;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
} //Wednesday

