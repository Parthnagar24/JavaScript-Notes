/*2. Setters (set)

A setter allows you to set a property value using a method. It’s useful if you want to validate or modify the value before storing it.*/

Syntax:

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

const person = new Person("John", "Doe");
person.fullName = "Jane Smith"; // Calls the setter
console.log(person.firstName);  // Jane
console.log(person.lastName);   // Smith


//Notice: We assign a value like a normal property, but the setter function runs behind the scenes.
