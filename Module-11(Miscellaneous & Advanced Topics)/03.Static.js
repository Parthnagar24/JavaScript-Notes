/*3. Static (static)

A static method or property belongs to the class itself, not the object instances. You cannot access static members through instances.*/

Syntax:

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(5, 3)); // 8

const calc = new Calculator();
console.log(calc.add); // undefined → can't call static via instance
