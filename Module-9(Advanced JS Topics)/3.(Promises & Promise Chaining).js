/*3. Promises & Promise Chaining

Concept: Promises represent a future value from an async operation. States: pending, fulfilled, rejected.*/

let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});

promise
  .then(result => {
    console.log(result); // Done!
    return "Next Step";
  })
  .then(step => console.log(step)); // Next Step
//✅ Chaining allows sequential async operations without “callback hell.”
