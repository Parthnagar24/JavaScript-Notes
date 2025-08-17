/*Iterators: Objects with next() method returning { value, done }.

Generators: Functions that can pause execution with yield:*/

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // { value: 2, done: false }
//✅ Useful for lazy evaluation and async workflows.
