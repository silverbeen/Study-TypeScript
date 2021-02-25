import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

type SignInProps = {
  onSubmit: (form: { id: string; pw: string }) => void;
};

function SignIn({ onSubmit }: SignInProps) {
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
  });

  const { id, pw } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //onSubmit(inputs);

    //등록하면? 초기화
    setInputs({
      id: "",
      pw: "",
    });
    console.log(inputs);
  };

  return (
    <S.MainWrapper style={{ backgroundColor: "#43cee0" }}>
      <S.Title>SIGN IN</S.Title>
      <S.Submit onSubmit={handleSubmit}>
        <input
          name="id"
          placeholder="아이디를 입력해주세요"
          onChange={onChange}
          value={id}
        />
        <input
          name="pw"
          placeholder="비밀번호를 입력해주세요"
          onChange={onChange}
          value={pw}
        />
        <button type="submit">SIGN IN</button>
      </S.Submit>
      <Link to="/sign-up" style={{ color: "white" }}>
        계정이 없으신가요?
      </Link>
    </S.MainWrapper>
  );
}

export default SignIn;
