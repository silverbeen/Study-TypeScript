## 1. 액션 type 선언 

 type  을 선언 할 떄에는 `as const ` 라는 키워드를 붙여야 함!!!

- `as const`는 [**const assertions**](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions)라는 TypeScript 문법
- 이 문법을 사용하면 추후 액션 생성 함수를 통해 액션 객체를 만들게 됐을 때 type의 ts 타입이 `string` 이 되지 않고 실제값을 가르기케 됨



## 2. 액션 생성 함수 선언



```
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_By,
  payload: diff,
});
```

- increase 와 decrease 의 경우 함수에서 따로 파라미터를 받지 않음!!!
- increaseBy 의 경우는 diff 라는 값을 파라미터로 받아와 액션의 payload 값으로 설정
- 이와 같은 과정에서 `payloas` 로 바꾸어 줬는데 이는 [FSA 규칙](https://github.com/redux-utilities/flux-standard-action)을 따루기 위함
- 이 규칙을 따름으로써 액션 객체의 구조를 일관성 있게 가져갈 수 있어서 추후 리듀서에서 액션을 다룰 때에도 편하고, 읽기 쉽고, 액션에 관련된 라이브러리를 사용 할 수도 있게 해줍니다. 다만, 꼭 따라야 할 필요는 없으니 만약 여러분들이 FSA가 불편하면 굳이 이렇게 `payload` 라는 이름으로 넣을 필요는 없음





## 3. 액션 객체들에 대한 type 준비하기

```
type CounterAction =
  | ㅊ<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;
```

여기서 사용된 ReturnType 은 함수에서 반환하는 타입을 가져올 수 있게 해주는 타입!!

- 이전에 액션 type 값들을 선언 할  때 as const 라는 키워드를 사용하지 않았더라면 ReturnType 을 사용 했을때 type 의 타입이 무조건 string 으로 처리됨...





## 4. 상태의 타입과 상태의 초깃값 선언하기

- 리덕스 상태의 타입을 선언 할 때에는 type 을 써도 되고 interface 를 써도 되지만 그 프로젝트에 일관성을 맞게 쓴다!!!!!!



## 5. 리듀서 작성 하기

- 함수의 반환 타입에 상태의 타입을 넣어야함 !!

```
//리듀서 작성
function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counter;
```





## 리덕스 적용하기

루트 리듀서를 만들 때 일반 js 와 동일한 방식이지만`RootState` 라는 타입을 만들어서 내보내주어야 한다는 것 !!!!

이 타입은 추후 우리가 컨테이너 컴포넌트를 만들게 될 때 스토어에서 관리하고 있는 상태를 조회하기 위해서 `useSelector`를 사용 할 때 필요!!



#### src/modules/index.ts

```tsx
import { combineReducers } from "redux";
import counter from "./counter";

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

```





## 카운터 컨테이너 컴포넌트 만들기

- 리덕스 스토어 안에 있는 상태를 조회하여 사용
- 액션을 디스패치하는 컨테이너 컴포넌트



#### src/containers/CounterContainer.tsx

```tsx
import React from "react";
import Counter from "../components/Counter";
import { RootState } from "../modules";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, increaseBy } from "../modules/counter";

function CounterContainer() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  return (
    <Counter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
}

export default CounterContainer;

```

특별한 점은 `useSelector` 부분에서 `state` 의 타입을 `RootState` 로  지정해서 사용





## 프리젠테이셔널 / 컨테이너 분리를 하지 않는다면?

만약 프리젠테이셔넝 컴포넌트와 컨테이너 컴포넌트를 따로 분리하지 않는다면 어떻게 코드를 작성해햐 할까?



> *"Hooks let me do the same thing without an arbitrary division".* [(원문)](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#99d5)
> (번역) Hooks 를 사용하여 (컴포넌트를) 임의적으로 분리하지 않아도 똑같은 작업을 할 수 있다.



- 컴포넌트를 사용 할 때 props 로 필요한 값을 받아와서 사용하지 말고, useSelector 와 useDispatch 로 이루어진 커스텀 Hook 을 만들어 이를 사용해라





Counter 컴포넌트를 리덕스와 연동하기 위해 useCounter 라는 커스텀 Hook 을 작성

#### src/hooks/useCounter.tsx

```tsx
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { increase, decrease, increaseBy } from "../modules/counter";
import { useCallback } from "react";

export default function useCounter() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onIncreaseBy = useCallback(
    (diff: number) => dispatch(increaseBy(diff)),
    [dispatch]
  );

  return {
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy,
  };
}

```

Container 를 작성하는 것과 비슷하게 리덕스와 연동하는 작업이 프리젠테이셔널 컴포넌트에서 분리되었지만, 컴포넌트가 아니라 Hook 형태로 구현되었다.

이제 `useCounter` Hook 을 프리젠테이셔넝 컴포넌트에서 사용하면 된다



```tsx
import React from "react";
import useCounter from '../hooks/useCounter';

/* type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

function Counter({
  count,
  onIncrease,
  onDecrease,
  onIncreaseBy,
}: CounterProps) {
  return (
    <>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </>
  );
} */

function Counter() {
    const {count, onIncrease, onDecrease, onIncreaseBy} = useCounter();

    return (
        <>
          <h1>{count}</h1>
          <button onClick={onIncrease}>+1</button>
          <button onClick={onDecrease}>-1</button>
          <button onClick={() => onIncreaseBy(5)}>+5</button>
        </>
      );
}

export default Counter;

```

- 필요한 값을 props 로 받아오는 것이 아닌 `useCounter`Hook 을 통해서 받아옴 !!
- 이제 컨테이너 컴포넌트는 불필요 했으니 containers 디렉터리 삭제....
- 그리고 App 컴포넌트에서 CounterContainer 대신 Counter 를 렌더링





## 정리 

1. 컨테이너 컴포넌트를 분리하는 대신에 커스텀 Hook을 작성하여 분리하는 방식도 시도해보자
2. typesafe-actions 를 사용하여 리덕스 모듈을 간단하게 작성하자
3. 리덕스 모듈이 너무 커질 것 같으면 여러 파일로 분리해서 작성하자, 단 한 디렉터리에 정리해서 관리하자.