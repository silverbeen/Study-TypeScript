import React from "react";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import TodoInsert from './components/TodoInsert';

function App() {
  return (
    <>
      <Counter />
      <TodoInsert/>
      <TodoList />
    </>
  );
}

export default App;
