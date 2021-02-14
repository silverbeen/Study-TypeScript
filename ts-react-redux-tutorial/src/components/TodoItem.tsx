import React from "react";
import { Todo } from "../modules/todos";
import "./TodoItem.css";
import useTodoAction from "../hooks/useTodoAction";

//할 일들을 보여줌
//리스트를 들고 와야됨
export type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  // TODO: 커스텀 Hook 사용해서 onToggle / onRemove 구현
  const { onToggle, onRemove } = useTodoAction(todo.id);

  return (
    <li className={`TodoItem ${todo.done ? "done" : ""}`}>
      <span className="text" onClick={onToggle}>
        {todo.text}
      </span>
      <span className="remove" onClick={onRemove}>
        (X)
      </span>
    </li>
  );
}

export default TodoItem;
