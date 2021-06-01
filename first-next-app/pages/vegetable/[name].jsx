// 파일 이름을 대괄호로 감싸서 만들게 된다면
//이 페이지는 정적 페이지가 아니라 동적 페이지를 의미하게 됨

import Link from "next/link";
import { useRouter } from "next/router";

const name = () => {
  const { query } = useRouter();

  return (
    <>
      <h2>hello! {query.name}</h2>
      <Link href="/">move!!</Link>
    </>
  );
};

export default name;
