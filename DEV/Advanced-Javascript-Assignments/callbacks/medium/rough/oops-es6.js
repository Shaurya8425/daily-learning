class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hi, I am " + this.name);
  }
}

const p1 = new Person("Shaurya", 21);
p1.greet();