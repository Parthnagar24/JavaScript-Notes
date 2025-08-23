function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
for (let val of gen()) console.log(val); // 1 2 3

// Async
async function* asyncGen() {
  yield await Promise.resolve(1);
}
(async () => {
  for await (let val of asyncGen()) console.log(val);
})();
