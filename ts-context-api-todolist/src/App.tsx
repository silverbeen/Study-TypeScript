import React from "react";
import TodoFrom from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodosContextProvider } from "./contexts/TodosContext";

const App = () => {
  return (
    <TodosContextProvider>
      <TodoFrom />
      <TodoList />
    </TodosContextProvider>
  );
};

export default App;
