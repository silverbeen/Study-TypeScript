interface Human {
  name: string;
  gender: string;
  age: number;
}

const person = {
  name: "silvebeen",
  gender: "여자",
  age: 18,
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name} I am age ${person.age} My gender is ${person.gender} `;
};

console.log(sayHi(person));

export {};
