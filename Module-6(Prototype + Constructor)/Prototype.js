/* 1. What is a Prototype?

In JavaScript, every object has a hidden property called [[Prototype]] (sometimes referred to as __proto__).
It’s like a backup reference:
If you try to access a property or method on an object and it’s not found, JavaScript looks for it in the object’s prototype.
This process continues up the prototype chain until it either finds the property or reaches the end (null).

2. Why do we use Prototype?

To share methods and properties among many objects without duplicating code.
Saves memory and keeps code efficient.
Forms the backbone of inheritance in JavaScript. */

//1. Using __proto__ (Old Way)

let computer = { cpu: 12 };

let lenevo = {
  screen: "HD",
  __proto__: computer
};

console.log(lenevo.cpu); // 12
/*lenevo doesn’t have cpu.
JavaScript checks lenevo.__proto__ → finds computer → sees cpu: 12 → returns 12.
That’s the prototype chain in action. */
 

//2. Using Object.setPrototypeOf (Modern Way)

let genericCar = { tyres: 4 };
let tesla = { driver: "AI" };

Object.setPrototypeOf(tesla, genericCar);
/*tesla now inherits from genericCar.
So:
tesla.driver → found directly in tesla.
tesla.tyres → not in tesla, so JS looks in prototype (genericCar) → finds tyres: 4. */

console.log(tesla.tyres); // 4
console.log(Object.getPrototypeOf(tesla)); // { tyres: 4 }

