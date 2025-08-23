//3.1 Prototype Chain
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return `Hi, I'm ${this.name}`;
};

const p = new Person("Ng24");
console.log(p.greet()); // "Hi, I'm Ng24"

//3.2 Class Syntax (ES6)
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Tommy");
dog.speak(); // Tommy barks
