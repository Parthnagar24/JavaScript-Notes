/* 1. fetch() / Axios

Used to make HTTP requests to get or send data. */

// Fetch
// GET request using fetch
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));

//Axios
// Make sure to install axios via npm or use CDN
// npm install axios
axios.get("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => console.log(response.data))
  .catch(error => console.error("Error:", error));

