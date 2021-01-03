# interface 사용

- 클래스 또는 객체를 위한 타입을 지정 할 때 사용되는 문법



## 클래스에서 interface 를 implements 하기 

```typescript
//Shape 라는 interface 선언
interface Shape {
	getArea() : number; // getArea 라는 함수가 꼭 있어야 하고, 반환값은 숫자
}

class Circle implements Shape{
	radius: number; //멤버 변수 radius 값을 설정 한다. 

	constructor(radius : number){
		this.radius = radius;
	}

	//너비를 가져오는 함수
	getArea() {
		return this.radius * this.radius * Math.PI;
	}
}

class Rectangle implements Shape{
	width : number;
	height : number;

	constructor(widht: number, height: number) {
		this.width = widht;
		this.height = height;
	}
	getArea(){
		return this.width * this.height;
	}
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
	console.log(shape.getArea());
})
```

 

```typescript
	//width : number;
	//height : number;

	constructor(private widht: number, private height: number) {
		this.width = widht;
		this.height = height;
	}
```

`width`,   ` height` 멤버 변수를 선언한 다음에 constructor 에서 해당 값들을 하나하나 설정하게 되면 

TS 에서는 constrctor 의 파라미터 쪽에 `public` 또는` private`   [accesso](https://www.typescriptlang.org/docs/handbook/classes.html#accessors)r 를 사용하면 하나하나 설정해주는 작업을 생략해 줄 수 있다. 





```typescript
class Rectangle implements Shape{
	//width : number;
	//height : number;

	constructor(private widht: number, private height: number) {
		this.width = widht;
		this.height = height;
	}
	getArea(){
		return this.width * this.height;
	}
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius); // 작동
console.log(rectangle.width);//width 가 private 이기 때문에 에러 발생
```

- `public` accessor 는 특정 값이 클래스의 코드 밖에서도 조회 가능하다는 것을 의미
- `rectangle.width` 를 조회 하려고 하면 컴파일 단계에서 에러가 발생





# 일반 객체를 interface 로 타입 설정하기 

클래스가 아닌 일반 객체를 interface 를 사용하여 타입을 지정하는 방법



```typescript
interface Person {
  name: string;
  //물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값
  age?: number;
}
interface Developer {
  name: string;
  age?: number;
  skills: string[];
}

const person: Person = {
  name: "강은빈",
  age: 18,
};

const expert: Developer = {
  name: "silverbeen",
  skills: ["react", "JS"],
};

const people : Person[] = [person, expert];
```

- `interface` 를 선언 할 때 다른` interface` 를 `extends` 해서 상속을 받을 수 있다. 







# 선택적 프로퍼티



- 프로퍼티 이름 끝에  ? 를 붙여 표시
- 인터페이스에 속하지 않는 프로퍼티의 사용 방지
- 사용 가능한 속성 기술

```typescript
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.clor) {
        // 에러
        newSquare.color = config.clor;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});
```

 `createSquare` 안에  `color` 프로 퍼티 이름을 잘못 입력하면 오류 메세지로 알려줌

 



# 읽기 전용 프로퍼티

- 일부 프로퍼티들은 **객체가 처음 생성 될 때만 수정 가능**
-  프로퍼티 이름 앞에 `readonly`를 넣어서 이를 지정

