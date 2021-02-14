import React from "react";
import Greetings from "./components/Greetings";
import Counter from "./components/Counter";
import MyForm from "./components/MyForm";
import ReducerSample from "./store/modules/ReducerSample";

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} 안녕`);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <>
      <Greetings name="강은빈" onClick={onClick} />
      <Counter />
      <MyForm onSubmit={onSubmit} />
      <ReducerSample />
    </>
  );
};
export default App;
