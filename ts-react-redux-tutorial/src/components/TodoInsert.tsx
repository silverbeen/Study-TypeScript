import React, { ChangeEvent, FormEvent, useState } from "react";
import useAddTodo from "../hooks/useAddTodo";

function TodoInsert() {
  const [value, setValue] = useState("");
  const addTodo = useAddTodo();

  //인풋창의 값을 바꿔줌
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault(); //엔터키를  눌러도 커서가 계속 유지
    addTodo(value);
    setValue(""); // 인풋값 초기화
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="할 일을 적어주세요"
        onChange={onChange}
        value={value}
      />
      <button type="submit">할 일 등록</button>
    </form>
  );
}

export default TodoInsert;
