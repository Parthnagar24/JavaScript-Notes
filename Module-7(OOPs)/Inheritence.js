/*2. Inheritance
Creating new classes based on existing ones, inheriting properties and methods. JavaScript uses the extends keyword and prototype chain.*/

class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  
  start() {
    console.log(`${this.brand} started`);
  }
}

class Car extends Vehicle {
  constructor(brand, doors) {
    super(brand); // Call parent constructor
    this.doors = doors;
  }
  
  honk() {
    console.log('Beep beep!');
  }
}

// Real world analogy - All mammals share common characteristics but specific mammals like dogs and cats have their unique behaviour while still being mammals.
