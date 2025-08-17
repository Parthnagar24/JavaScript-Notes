/* 
1. Asynchronous JS & Event Loop

Concept: JavaScript is single-threaded (runs one thing at a time), but can handle asynchronous tasks like network requests, timers, or I/O without blocking. This is possible because of the event loop.

Event Loop Flow:

Call Stack – where JS executes code line by line.

Web APIs / Browser APIs – async operations like setTimeout, fetch.

Callback Queue / Task Queue – completed async callbacks wait here.

Event Loop – moves callbacks from queue to call stack when stack is empty.   */


console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

// Output:
// Start
// End
// Timeout
//✅ Even with 0ms, setTimeout runs last because it goes to the callback queue.
