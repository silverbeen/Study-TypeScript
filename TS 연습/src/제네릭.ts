/* function toArray(a: number, b: number): number[] {
  return [a, b];
}
toArray(1, 2);

function toSilver(a: number | string, b: number | string): (number | string)[] {
  return [a, b];
}
toSilver(2, "silver");
console.log(toSilver(2, "silver"));

function silver<T>(a: T, b: T): T[] {
  return [a, b];
}

silver<number>(1, 2);
silver<string>("silver", "gold");
silver<string | number>(1, "2");
//silver<number>(1, "f"); //에러

//인터페이스 제네릭 사용
interface Gold<T> {
  name: string;
  value: T;
}

const dataA: Gold<string> = {
  name: "silverbeen",
  value: "silver",
};

const dataB: Gold<number> = {
  name: "silver",
  value: 1235,
};

const dataC: Gold<boolean> = {
  name: "asdf",
  value: true,
};

const dataD: Gold<number[]> = {
  name: "fdf",
  value: [1, 2, 3, 4],
};

//제네릭 제약조건
//T extends U
type U = string | number | boolean; //타입 U 를 string, number, boolen으로 설정

//type 식별자 = 타입구현
type MySilver<T extends U> = string | T;

//interface 식별자 {타입구현}
interface User<T extends U> {
  name: string;
  age: T;
}

//조건부 타입
//삼항 연산자 사용
// T extends U ? x : Y

type S = string | number | boolean;

//type 식별자 = 타입구현
type MyS<T> = S extends S ? string : never;

//interface 식별자 {타입구현}
interface SUser<T> {
  name: string;
  age: T extends S ? number : never;
}

// T 는  boolen  으로 제한
interface SUsers<T extends boolean> {
  name: string;
  age: T extends true ? string : number;
  isString: T;
}

const str: SUsers<true> = {
  name: "asdf",
  age: "12",
  isString: true,
};

const num: SUsers<false> = {
  name: " 7654",
  age: 19,
  isString: false,
};

//infer
type Mytype<T> = T extends infer R ? R : null;

const a: Mytype<number> = 12;



// type ReturnType<T extends (...args: any) => any> = T extends (
//   ...args: any
// ) => infer R
//   ? R
//   : any;

function fn(num: number) {
  return num.toString();
}

const b: ReturnType<typeof fn> = "Hello";
 */