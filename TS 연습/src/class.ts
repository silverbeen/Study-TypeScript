class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Cat extends Animal {
  getNameA(): string {
    return `Cat name is ${this.name}.`;
  }
}
let catA: Cat;
catA = new Cat("Lucy");
console.log(catA.getNameA()); // silver
