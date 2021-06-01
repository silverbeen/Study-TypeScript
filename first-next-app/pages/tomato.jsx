import Link from "next/link";

// a 태그를 선택하게 되면 클라이언트 측 내비게이션을 실행하여 페이제 전체를 새로 불러오지 않고 주소 이동

const Tomato = () => {
  return (
    <>
      <h2>Link to 'main' page</h2>
      <Link href="/">
        <a href="Move to /"></a>
      </Link>
    </>
  );
};

export default Tomato;
