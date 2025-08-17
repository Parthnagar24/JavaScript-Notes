/*4. Abstraction
Hiding complex implementation details while exposing only necessary functionality. JavaScript doesn't have true abstract classes, but you can simulate them.*/

class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error('Cannot instantiate abstract class');
    }
  }
  
  // Abstract method
  calculateArea() {
    throw new Error('Must implement calculateArea method');
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  
  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

// Real world analogy -When you drive a car you dont need to understand how the engine combustion works, how the transmission shifts gear,
//or how breaks applies friction, you must know gas pedal = goes faster , break = stop , steering wheel = turn
