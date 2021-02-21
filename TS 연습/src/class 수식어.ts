class ExAnimal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class ExCat extends ExAnimal {
  ExgetName(): string {
    return `cat name is ${this.name}`;
  }
}

let Excat = new ExCat("silver");
console.log(Excat.ExgetName());

Excat.name = "gold";
console.log(Excat.ExgetName());

class Myname {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Name extends Myname {
  getName(): string {
    return `My name is ${this.name}`;
  }
}

let names = new Name("silver");
console.log(names.getName());
//console.log(names.name) //에러

//names.name = 'gold'; // 에러
console.log(names.getName());

/* class age {
  private age: number;
  constructor(age: number) {
    this.age = age;
  }
}

class Age extends age {
  //getAge(): number {
    //return `my age is ${this.age}`; //  접근 불가
  }
}

let myAge = new Age(18);
console.log(myAge.getAge());
//console.log(myAge.age); //에러

//myAge.age = 17; // 에러
console.log(myAge.getAge()); */

/* class MyAge {
  age : number;
  protected constructor(age: number) {
    this.age : age;
  }
}

const age = new age(16);
 */

class test {
  static legs: number;
  constructor() {
    test.legs = 4;
  }
}
console.log(test.legs); //undefined
new test();
console.log(test.legs); //

//읽기 전용
class ExTest {
  readonly name: string;
  constructor(n: string) {
    this.name = n;
  }
}

let dog = new Animal("silver");
console.log(dog.name);
dog.name = "gold"; // 일기 전용이라 이름을 바꾸지 못함

/* class Silver {
  public readonly name: string;
  protected static eyes: number;
  constructor(n: string) {
    this.name = n;
    Silver.eyes = 2;
  }
  private static getLegs();{
    return 4;
  }
}
 */