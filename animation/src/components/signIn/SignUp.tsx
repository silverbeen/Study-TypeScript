import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

type SignUpProps = {
  onSubmit: (form: {
    name: string;
    email: string;
    id: string;
    pw: string;
    pwcheck: string;
  }) => void;
};

function SignUp({ onSubmit }: SignUpProps) {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    id: "",
    pw: "",
    pwCheck: "",
  });

  const { name, email, id, pw, pwCheck } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setInputs({
      name: "",
      email: "",
      id: "",
      pw: "",
      pwCheck: "",
    });

    console.log(inputs);
  };

  return (
    <S.MainWrapper style={{ backgroundColor: "black" }}>
      <S.Title>SIGN UP</S.Title>
      <S.Submit onSubmit={handleSubmit}>
        <input
          onChange={onChange}
          name="name"
          placeholder="사용하실 닉네임을 입력해주세요"
          value={name}
        />
        <input
          onChange={onChange}
          name="email"
          placeholder="EMAIL"
          value={email}
        />
        <input onChange={onChange} name="id" placeholder="ID" value={id} />
        <input
          onChange={onChange}
          name="pw"
          placeholder="PASSWORD"
          value={pw}
        />
        <input
          onChange={onChange}
          name="pwCheck"
          placeholder="PASSWORD CHECK"
          value={pwCheck}
        />
        <button type="submit">SIGN UP</button>
      </S.Submit>
      <Link to="/sign-in" style={{ color: "white" }}>
        계정이 있으신가요?
      </Link>
    </S.MainWrapper>
  );
}

export default SignUp;
