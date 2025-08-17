/*3. Polymorphism
Objects of different types responding to the same method call in their own way. JavaScript achieves this through method overriding.*/

class Animal {
  makeSound() {
    console.log('Some generic sound');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('Woof!');
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('Meow!');
  }
}

// Polymorphism in action
const animals = [new Dog(), new Cat()];
animals.forEach(animal => animal.makeSound()); // Different sounds

// Real world analogy- remote control Can work with different stereos . you play power and each stereos turn on own way, but you use the same interface
