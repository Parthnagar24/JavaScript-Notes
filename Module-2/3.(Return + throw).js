/* 3. return

Purpose: Exit from a function immediately, optionally returning a value. */

function greet(name) {
    if (!name) {
        return; // exit function if name is not provided
    }
    console.log("Hello, " + name);
}

greet("");      // nothing printed
greet("Priya"); // Hello, Priya


/*4. throw

Purpose: Throw an error manually. Can be caught using try...catch. */

let age = -5;

if(age < 0){
    throw "Invalid age!";
} //Uncaught Invalid age!

