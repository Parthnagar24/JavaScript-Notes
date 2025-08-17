/*(1) Encapsulation

Bundling data and methods together while hiding internal implementation details. JavaScript uses closures and private fields (#) for encapsulation.

Example: */

class BankAccount {
  #balance = 0; // Private field
  
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }
  
  getBalance() {
    return this.#balance;
  }
}

// Real world analogy - Think of a car, we dont need to know how the engine works internally, we just use steering wheel ,pedals and gear shift to control it.
