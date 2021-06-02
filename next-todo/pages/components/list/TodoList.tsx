import React, { useCallback, useMemo } from "react";
import { TodoType } from "../../../types/todo";
import Header from "../header/Header";
import * as S from "./style";
import TrashCanIcon from "../../static/assets/trushcan.svg";
import Check from "../../static/assets/checked.svg";

interface IProps {
  todos: TodoType[];
}

//객체 문자열 인덱스 사용하기 위한 타입
type ObjectIndexType = {
  [key: string]: number | undefined;
};

const TodoList: React.FC<IProps> = ({ todos }) => {
  const getTodoColorNums = useCallback(() => {
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let green = 0;

    todos.forEach((todo) => {
      switch (todo.color) {
        case "red":
          red += 1;
          break;
        case "orange":
          red += 1;
          break;
        case "yellow":
          red += 1;
          break;
        case "green":
          red += 1;
          break;
        default:
          break;
      }
    });

    return {
      red,
      orange,
      yellow,
      green,
    };
  }, [todos]);

  //색상 투두 개수
  //재계산 방지
  //useMemo는 변수에 종속성을 주어 함수의 재연산을 방지할 수 있음
  // useCallback 은 함수의 종속성을 줌
  const todoColorNums = useMemo(getTodoColorNums, [todos]);

  todoColorNums;

  const todoColorNums2 = useMemo(() => {
    const colors: ObjectIndexType = {};
    todos.forEach((todo) => {
      const value = colors[todo.color]; // 대괄호를 사용하면 객체의 프로퍼티 접근 가능
      //만약 존재하지 않은 색이면
      if (!value) {
        colors[`${todo.color}`] = 1;
      } else {
        colors[`${todo.color}`] = value + 1;
      }
    });
    return colors;
  }, [todos]);

  console.log(todoColorNums2);

  return (
    <S.Container>
      <Header />
      <S.TodoHeader>
        <h4> 남은 TODO {todos.length}개</h4>
      </S.TodoHeader>
      <S.Colors>
        {Object.keys(todoColorNums).map((color, index) => {
          <div key={index}>
            <div className="color-radius" color={color}></div>
            <span>{color}개</span>
          </div>;
        })}
      </S.Colors>
      <S.TodoList>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <p className={`${todo.checked ? "checked-todo-text" : ""}`}>
                {todo.text}
              </p>
              {todo.checked && (
                <>
                  <button>삭제</button>
                  <button>확인</button>
                </>
              )}
              {!todo.checked && (
                <button
                  type="button"
                  className="todo-button"
                  onClick={() => {}}
                ></button>
              )}
            </li>
          );
        })}
      </S.TodoList>
    </S.Container>
  );
};

export default TodoList;
