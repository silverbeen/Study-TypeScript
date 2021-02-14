//액션 타입 정의
export const INCREASE = "counter/INCREASE" as const;
export const DECREASE = "counter/DECREASE" as const;
export const INCREASE_BY = "counter/INCREASE_BY" as const;
export const DECREASE_BY = "counter/ONCREASE_BY" as const;

//액션 생성 함수 선언
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});
export const decreaseBy = (diff: number) => ({
  type: DECREASE_BY,
  payload: diff,
});

//액션 타입
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>
  | ReturnType<typeof decreaseBy>;

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
function counter(state: CounterState = initialState, action: CounterAction) {
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
}

export default counter;
