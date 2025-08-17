/* 1. Getters (get)

A getter allows you to access a property of an object using a method, but without calling it like a function. It’s useful if you want to compute a value dynamically.
*/

Syntax:

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person("John", "Doe");
console.log(person.fullName); // John Doe


//Notice: We don’t use parentheses when accessing a getter.
