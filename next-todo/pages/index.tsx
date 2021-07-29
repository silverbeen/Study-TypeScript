import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { TodoType } from "../types/todo";
import TodoList from "./components/list/TodoList";
import { fetchTodo } from "./lib/api/todos";

interface IProps {
  todos: TodoType[];
}

const index: NextPage<IProps> = ({ todos }) => {
  return (
    <>
      <TodoList todos={todos}></TodoList>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // 불러온 데이터의 타입을 지정해줄 수 있음
  try {
    console.log(process.env, "서버");
    const { data } = await fetchTodo();
    console.log(data);
    return { props: {} }; // 꼭 해야줘함!
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};

export default index;
