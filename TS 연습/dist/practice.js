"use strict";
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
function sum(x, y) {
    return x + y;
}
sum(1, 2);
//숫자 배열의 총합을 구하는 함수
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
console.log(total);
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    //너비를 가져오는 함수
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(widht, height) {
        this.width = widht;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
