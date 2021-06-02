import { NextApiRequest, NextApiResponse } from "next";
import { resolve } from "path/posix";
import { TodoType } from "../../types/todo";
import File from "../data/todos.json";

// api/todos 경로로 api 여청이 되면 "hello next"
export default async (req: NextApiRequest, res: NextApiResponse) => {
  // 파일 읽기 fs 요청 꼭 해줘야함!!
  const fs = require("fs");
  /* if (req.method === "GET") {
    try {
      const todosBuffer = fs.readFileSync("../data/todos.json");
      const todosString = todosBuffer.toString();
      if (!todosString) {
        res.statusCode = 200;
        res.send([]);
      }
      const todos: TodoType[] = JSON.parse(todosString);
      res.statusCode = 200;
      return res.send(todos);
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
 */
  try {
    //fs.readFile 은 비동기 함수 이므로 Promise 를 이용하여 파일을 불러올 수 있게
    //결과 값으로 TodoType[] 의 타입을 가진 todos 를 리턴
    const todos = await new Promise<TodoType[]>((resolve, reject) => {
      //fs.readFile 은 첫번째 인자로 데이터를 불러올 파일의 경로를 받음
      //두 번째 인자로는 callback을 받게된 callback 은 에러 값과 데이터 값을 받음
      fs.readFile("./pages/data/todos.json", (err: any, data: any) => {
        if (err) {
          return reject(err.message);
        }
        const todosData = data.toString();
        if (!todosData) {
          /*  todos.json 값이 비었다면 */
          return resolve([]);
        }
        const todos = JSON.parse(data.toString());
        return resolve(todos);
      });
    });
    res.statusCode === 200;
    return res.send(todos);
  } catch (e) {
    console.log(e);

    res.statusCode = 405;
    console.log(res.statusCode);
    return res.end();
  }
};
