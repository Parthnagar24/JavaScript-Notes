/*5. this & Binding

Concept: this refers to the context of function execution. It changes depending on how the function is called.

Rules:

Global/Function call → this is window (or undefined in strict mode)

Method call → this is the object

Constructor (new) → this is the new object

Explicit binding → call, apply, bind  */

const obj = {
  name: "JS",
  greet() { console.log(this.name); }
};

obj.greet(); // JS

const fn = obj.greet;
fn(); // undefined

const bound = fn.bind(obj);
bound(); // JS
