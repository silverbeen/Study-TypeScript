# TS 기본 타입



`let`  과 `const` 를 사용하여 특정 값을 선언 할 때 여러가지 기본타입을 지정하여 선언 하는 연습



## **숫자** 

```typescript
let count = 0 //숫자
count +=1;
count = "갑자기 분위기 문자열" // 에러!
```



## 불리언 

```typescript
const done : boolean = true; //불리언 값
```



## 배열

```typescript
const numbers: number[] = [1,2,3];// 숫자 배열

const messages: string[] = ['안녕', '반가워']; //문자열 베열
//messages.push(1);// 숫자를 넣으려고 하면 안됨
messages.push("123");
```

```typescript
const messages: string[] = ['안녕', '반가워'];
const messages: Array<string> = ['cat', 'dog', 'cow'];
```



`Array`  로 표현하는 방식은 보통 표현할 타입이 복잡할 때 많이 사용함

```typescript
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
```

 

만약 2차원 배열을 만들게 된다면

```typescript
const matrix: number[][] = [[1, 2, 3], [4, 5, 6]];
```



## 튜플(tuple)

- 원소의 갯수가 정해진 배열의 타입
- 길이가 맞지 않는다면 에러 발생

```typescript
const countNames : [number,string, string, string] = [3, 'eunbin', 'eunbin', 'eunbin'];
```

or 아래처럼 표현 가능 

- 계속해서 `string ` 타입의 값을 추가 할 수 있음

```typescript
const countNames2 : [number, ...string[]] = [3, 'eunbin', 'eunbin', 'eunbin'];
```



## enum

- JS에 없는 데이터 타입
- 특정 값들을 묶어 관리

```typescript
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;
```



- `c` 의 타입은 `color` 가 되며 `c`에 저장되는 값은 숫자 1이 된다.

```typescript
enum Color {
  Red = 1,
  Green,
  Blue
}
let c: Color = Color.Green; // 2
```



- 또한 역으로 인덱스로 값을 가져 올 수 있다.

```typescript
enum Color {
  Red,
  Green,
  Blue
}
const firstColor = Color[0]; // 타입은 string, 값은 "Red"
```



- 문자열로 이용해 enum  만들 수 있다.

```typescript
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}
let c: Color = Color.Green; // GREEN
```



## any

- TS의 타입 체킹 시스템은 서로 호환되지 않는 두 타입의 사용을 방지함

- 해당값의 타입을 모르거나 혹은 여러가지 타입이 모두 허용되고 싶을때 사용
- 타입 정보가 없는 외부 라이브러리에 대한 타이핑 하거나, JS 와 TS 를 혼용할때 유용
- any를 남용하면 코드 분석에 타입체킹의 도움을 받을 수 없음

```typescript
let myNumber: any = 10;
myNumber = "Hello"; //에러가 발생하지 않음
```



## unknown

- any 와 비슷하게 **현재 타입 정보를 모를때 사용**
- 차이점 : 해당 값을 사용할 때 타입을 확인해야 한다는 점



## void

- 어떤 타입과도 호환되지 않는 타입
- 주호 반환값이 없는 함수의 반환값에 대한 타이핑에 사용
- undufned  만 할당 할 수 있으므로 변수의 타이핑에는 사용하지 않음

```typescript
const printOut = (message: string): void => {
  console.log(message);
}
```



## never

- 어떤 타입과도 호환되지 않는 타입
- 논리적으로 끝까지 실행 될 수 없는 함수의 반환값은 never 타입

```typescript
const alwaysError = (): never => {
  throw new Error("Always error here");
}
```



## object

- 프로퍼티에 관계 없이 임의의 JS 오브젝트를 가리키기위해 사용

```typescript
const handleObject = (passedObject: object) => {
  // passedObject를 사용
}
handleObject({ hello: "World" });
```





## 기타

```typescript
let mightBeundefiend: string | undefined = undefined;
let nullableNumber: number | null= null;

let color : 'red' | 'bule' | 'yellow'= 'red'; // red, bule, yellow 중 하나
color = 'bule';
//color = 'green' //에러 
```

- mightundefined : string 일 수도 있고 undefined 일 수 도 있음

- llableNumber :  number 일 수 도 있고 null 일 수 도 있음



- 스크립트를 사용하명 이렇게 특정 병수 또는 상수의 타입을 지정 할 수 있음

- 에 지정한 타입이 아닌 값이 설정 될 대 바로 에러 발생

