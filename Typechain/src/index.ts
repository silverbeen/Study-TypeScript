/* interface Human {
  name: string;
  gender: string;
  age: number;
} */

class Human {
  public name: string;
  public age: number;
  public gender: string;

  // 클래스로부터 객체를 만들때마다 생성 됨
  constructor(name: string, age: number, gender: string) {
    this.name = name; // 같은 속성의 이름은 생성자의 이름과 같다고 표기
    this.age = age;
    this.gender = gender;
  }
}

/* const person = {
  name: "silvebeen",
  gender: "여자",
  age: 18,
}; */

const silver = new Human("silver", 18, "여자");

const sayHi = (person: Human): string => {
  return `Hello ${person.name} I am age ${person.age} My gender is ${person.gender} `;
};

console.log(sayHi(silver));

export {};
