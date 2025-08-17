//5. AbortController

//Cancel a fetch request if it’s taking too long.

const controller = new AbortController();
const signal = controller.signal;

fetch("https://jsonplaceholder.typicode.com/posts", { signal })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => {
    if (err.name === "AbortError") console.log("Fetch aborted!");
    else console.error(err);
  });

// Cancel the request after 2 seconds
setTimeout(() => controller.abort(), 2000);
