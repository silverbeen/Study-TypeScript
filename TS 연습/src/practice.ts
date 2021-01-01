/* let count = 0; //숫자
count += 1; //1

const message: string = "안녕"; //문자열

const done: boolean = true; //불리언 값

const numbers: number[] = [1, 2, 3]; // 숫자 배열

const messages: string[] = ["안녕", "반가워"]; //문자열 베열
//messages.push(1);// 숫자를 넣으려고 하면 안됨
messages.push("123");

let mightBeundefiend: string | undefined = undefined;
let nummableNumber: number | null = null;

let color: "red" | "bule" | "yellow" = "red"; // red, bule, yellow 중 하나
color = "bule";
//color = 'green' //에러

const users: Array<{ name: string; age: number }> = [
  {
    name: "eunbin",
    age: 18,
  },
  {
    name: "silverbeen",
    age: 18,
  },
];

const countNames : [number,string, string, string] = [3, 'eunbin', 'eunbin', 'eunbin'];
const countNames2 : [number, ...string[]] = [3, 'eunbin', 'eunbin', 'eunbin'];
*/

// 함수에서 타입 정의하기

function sum(x: number, y: number): number {
  return x + y;
}
sum(1, 2);

//숫자 배열의 총합을 구하는 함수
function sumArray(numbers : number[]): number {
	return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1,2,3,4,5]);
console.log(total);


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

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius); // 작동
console.log(rectangle.width);//width  가 private 이기 때문에 에러 발생


const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
	console.log(shape.getArea());
})