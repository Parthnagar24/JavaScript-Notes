//try...catch...finally

try {
  throw new Error("Something went wrong!");
} catch (err) {
  console.log("Error:", err.message);
} finally {
  console.log("Always runs");
}
