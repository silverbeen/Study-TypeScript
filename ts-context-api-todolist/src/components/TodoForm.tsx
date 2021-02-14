//새로운 할 일을 등록할 때 사용
import React, { useState } from "react";
import { useTodosDispatch } from "../contexts/TodosContext";

function TodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useTodosDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //새 할목 생성하기
    dispatch({
      type: "CREATE",
      text: value,
    });
    setValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        placeholder="무엇을 하실 건가요?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button>등록</button>
    </form>
  );
}

export default TodoForm;
