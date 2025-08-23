const sym = Symbol("id");
const obj = { [sym]: 123 };
console.log(obj[sym]); // 123

const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();
console.log(iterator.next()); // { value: 1, done: false }
