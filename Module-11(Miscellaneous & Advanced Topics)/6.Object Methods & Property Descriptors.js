const obj = { name: "Parth" };

Object.defineProperty(obj, "age", {
  value: 21,
  writable: false,
  enumerable: true
});

console.log(obj.age); // 21
obj.age = 25; // ❌ Ignored
