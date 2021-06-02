import Axios from "axios";

// 앞으로 baseURL 입력하지 않아도 됨
const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default axios;
