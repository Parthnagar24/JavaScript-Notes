 // Async/Await simplifies promises:

async function fetchData() {
  try {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

fetchData();
//Promise.all runs multiple promises in parallel:

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);

Promise.all([p1, p2]).then(results => console.log(results)); // [1, 2]
