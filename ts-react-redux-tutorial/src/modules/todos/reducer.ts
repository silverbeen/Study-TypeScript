import { createReducer } from "typesafe-actions";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../todos";
import { TodosAction, TodosState } from "./types";

const initialState: TodosState = [
    {
      id: 1,
      text: "타입스크립트 배우기",
      done: false,
    },
  ];
  
  //리듀서 구현
  /* function todos(
    state: TodoState = initialState,
    action: TodosAction
  ): TodoState {
    switch (action.type) {
      case ADD_TODO:
        const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
        return state.concat({
          id: nextId,
          text: action.payload,
          done: false,
        });
      case TOGGLE_TODO:
        return state.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        );
      case REMOVE_TODO:
        return state.filter((todo) => todo.id !== action.payload);
      default:
        return state;
    }
  } */
  
  const todos = createReducer<TodosState, TodosAction>(initialState, {
    [ADD_TODO]: (state, { payload: text }) =>
      state.concat({
        id: Math.max(...state.map((todo) => todo.id)) + 1,
        text,
        done: false,
      }),
    [TOGGLE_TODO]: (state, { payload: id }) =>
      state.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    [REMOVE_TODO]: (state, { payload: id }) =>
      state.filter((todo) => todo.id !== id),
  });
  
  export default todos;
  