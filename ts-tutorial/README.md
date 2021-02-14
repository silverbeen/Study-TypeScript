# 정리

- useState 를 사용할 때에는 useState<string> 과 괕이 제네릭을 사용!!
- useState 릐 제네릭은 상황에 따라 생략가능!! 하지만 상태가 null 인 상황이 발생 할 수 있거나, 배열 또는 까다로운 객체를 다루는 경우 제네릭을 명시해야함
- useReducer  을 사용 할 때에는 액션에 대한 타입스크립트 타입들을 모두 준비해서 | 문자를 사용하여 결합시켜야함

```
type Action =
  | { type: "SET_COUNT"; count: number }
  | { type: "SET_TEXT"; text: string }
  | { type: "SET_COLOR"; color: Color }
  | { type: "TOGGLE_GOOD" };
```

- 타입스크립트 환경에서 useReducer 를 쓰면 자동완성이 되고 타입체킹도 잘 된다
- useRef 를 사용 할때에는 제네릭으로 타입을 정함!!!!!!
- useRef 를 사용하여 DOM 에 대한 정보를 담을땐, 초깃값을 null 로 설정해야 하고 값을 사용하기 위해서 null 체킹도 해주어야 함!!!

