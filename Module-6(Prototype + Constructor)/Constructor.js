/*1. What is a Constructor?

- A constructor in JavaScript is a special function used to create and initialize objects.
- It acts like a blueprint for objects.
- By convention, constructor function names start with a capital letter (e.g., Person, Car).
- We call them with the new keyword to create objects.
*/

function Person(name, age) {
  this.name = name;  // "this" refers to the new object being created
  this.age = age;
  this.sayHello = function() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  };
}

let p1 = new Person("Alex", 20);
let p2 = new Person("Neha", 22);

p1.sayHello(); // Hi, I'm Alex and I'm 20 years old.
p2.sayHello(); // Hi, I'm Neha and I'm 22 years old.


/*Constructor with Prototype

If we put methods inside the constructor, each object gets its own copy → not memory-efficient.
Better: put methods on the prototype.*/

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Shared by all objects
Person.prototype.sayHello = function() {
  console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
};

let p0 = new Person("Alex", 20);
let p00 = new Person("Neha", 22);

p0.sayHello(); // Hi, I'm Alex and I'm 20 years old.


//Constructor Safety Check with new.target

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}

let tea = new Drink("tea"); // works fine
let coffee = Drink("Coffee"); // ❌ throws error

/*new.target is a special built-in reference available inside constructors.

It’s undefined if the function is not called with new.

Helps enforce correct usage (forcing the function to be a constructor).*/
