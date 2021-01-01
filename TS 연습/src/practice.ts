let count = 0; //숫자
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

