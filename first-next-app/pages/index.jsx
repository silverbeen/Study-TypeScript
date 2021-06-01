// '/' 경로를 가지는 페이지
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const App = () => {
  const [userName, setUserName] = useState("");

  return (
    <>
      <label htmlFor="">
        useName을 입력해주세요
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <p>{userName} 깃허브 검색하기</p>
      <Link href={`/users/${userName}`}>검색하기</Link>
    </>
  );
};

export default App;
