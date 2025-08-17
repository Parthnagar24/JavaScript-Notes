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
