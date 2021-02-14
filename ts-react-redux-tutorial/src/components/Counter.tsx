import React from "react";
import useCounter from "../hooks/useCounter";

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
  const {
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy,
    onDecreaseBy,
  } = useCounter();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
      <button onClick={() => onDecreaseBy(5)}>-5</button>
    </>
  );
}

export default Counter;
