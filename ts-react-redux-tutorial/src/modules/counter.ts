import { createAction, ActionType, createReducer } from "typesafe-actions";

//액션 타입 정의
export const INCREASE = "counter/INCREASE";
export const DECREASE = "counter/DECREASE";
export const INCREASE_BY = "counter/INCREASE_BY";
export const DECREASE_BY = "counter/ONCREASE_BY";

//액션 생성 함수 선언
export const increase = createAction(INCREASE)();
//() => ({ type: INCREASE });
export const decrease = createAction(DECREASE)();
//() => ({ type: DECREASE });
export const increaseBy = createAction(INCREASE_BY)<number>();
/* (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
}); */
export const decreaseBy = createAction(DECREASE_BY)<number>();
/* (diff: number) => ({
  type: DECREASE_BY,
  payload: diff,
}); */

//액션 타입
/* type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>
  | ReturnType<typeof decreaseBy>; */

//typesafe-actions에 들어있는 ActionType 유틸 타입을 사용하면 액션들의 객체 타입을 만드는 작업을 더욱 짧은 코드로 작성 할 수 있습니다.
const actions = { increase, decrease, increaseBy, decreaseBy };
type CounterAction = ActionType<typeof actions>;

//초기화

type CounterState = {
  // 일단 타입을 정해주고
  count: number;
};

const initialState: CounterState = {
  // 초기화 값을 정해줌
  count: 0,
};

//리듀서 작성
/* function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    case DECREASE_BY:
      return { count: state.count - action.payload };
    default:
      return state;
  }
} */

// createReducer를 사용하면 리듀서를 switch/case 문이 아닌 object map 형태로 구현 할 수 있어서 코드가 더욱 간결
const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: (state) => ({ count: state.count + 1 }),
  [DECREASE]: (state) => ({ count: state.count - 1 }),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
  [DECREASE_BY]: (state, action) => ({ count: state.count - action.payload }),
});

export default counter;
