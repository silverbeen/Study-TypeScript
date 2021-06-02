import axios from ".";
import { TodoType } from "../../../types/todo";

export const fetchTodo = () => axios.get<TodoType[]>("/api/todos");
