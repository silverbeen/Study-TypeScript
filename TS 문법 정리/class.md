## 클래스란 

생성자 메소드 (construcotr) 와 일반 메소드 멤버와는 다르게 속성은 name : strung와 같이 클래스 바디에 별도로 타입을 선언함

> 클래스 바디는 중괄호 {} 로 묶여잇는 영역

```
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

```

