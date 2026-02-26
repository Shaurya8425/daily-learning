/* class name should start with capital letter by convention. it doesn't create object it creates blue print for objects. think it like "this is structure every person object will follow." */
class Person {
  /* constructor, special method; runs automatically when we create object using new, intializes object properties. */
  constructor(name, age) {
    /* this, refers to current object being created */
    this.name = name;
    this.age = age;
  }

  /* methods r shared across all instances, stored in Person.prototype hence memory-efficient */
  greet() {
    console.log("Hi, I am " + this.name);
  }
}

/* 1. empty object is created 2. constructor runs 3. this points to that new object 4. properties r assigned */
const p1 = new Person("Shaurya", 21);
p1.greet();
const greetFn = p1.greet.bind(p1);
greetFn();

/* each object gets its own balance but methods r shared */
class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
}

/* private methods */
class counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this._increase();
  }
  _increase() {
    this.count++;
  }
}

class Counter {
  #count = 0;
  increment() {
    this.#increase();
  }
  #increase() {
    this.#count++;
  }
}