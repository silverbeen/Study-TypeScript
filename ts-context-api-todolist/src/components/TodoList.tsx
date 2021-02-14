// 여러 todoitem 들을 렌더링 해줌
import React from "react";
import TodoItem from "./TodoItem";
import { useTodosState } from "../contexts/TodosContext";

function TodoList() {
  const todos = useTodosState();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
