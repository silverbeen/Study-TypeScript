## 클래스 수식어



접근 제어자

- publid : 어디서나 자유롭게 접근 가능(생략 가능)
- protected : 나와 파생된 후손 클래스 내에서 접근 가능
- private :  내꺼 



다음 수식어들은 위 접근 제어자와 함께 사용 할 수 있음

static 의 경우 정적 메소트뿐만 아니라 정적 속성도 사용 가능

- static : 정적으로 사용
- readonly : 읽기 전용으로 사용



### 차이점

#### public

```
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

```

animal 클래스의 name 속성은 퍼블릭 이기에 파생된 자식 클래스 Cat 에서 this.name 으로 참조하거나 인스턴스에서 cat.name으로 접근하는데 아무런 문제가 없음



#### protected

```
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

```

Myname 클래스의 name 은 protected 리기때문에 파생된 자식 클래스 Name 에서 this.name 으로 참조 할 수 있지만 , 인스턴스에서 names.name으로 접슨 할수 없음



#### private

```

class age {
  private age: number;
  constructor(age: number) {
    this.age = age;
  }
}

class Age extends age {
  getAge(): number {
    //return `my age is ${this.age}`; //  접근 불가
  }
}

let myAge = new Age(18);
console.log(myAge.getAge());
//console.log(myAge.age); //에러

//myAge.age = 17; // 에러
console.log(myAge.getAge());

```

private 때문에 파생된 자식클래스에서 this.age 으로 참조 할 수 없고, 인스턴스에서도 cat.name 으로 접근 불가





- 생성자 메소드에 protected 를 사용했기 때문에 인스턴스 생성에서 에러 발생

```
class MyAge {
  age : number;
  protected constructor(age: number) {
    this.age : age;
  }
}

const age = new age(16);
```





### static

 정적 속성은 클래스 바디에서 속성의 타입 선언과 같이 사용

정적 메소드와 다르게 클래스 바디에서 값을 초기화 할 수 없기때문에 constructor 혹은 메소드에서 초기화 필요

```
class test {
  static legs: number;
  constructor() {
    test.legs = 4;
  }
}
console.log(test.legs); //undefined
new test();
console.log(test.legs); //
```



`readonly`  을 사용하면 읽기 전용

```
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
```



`static` 과 `readonly` 는 접근 제어자와 같이 사용 할 수 있음

```
class Silver {
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
```

