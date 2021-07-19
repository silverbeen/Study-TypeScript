import React from "react";
import Header from "../../header/Header";
import Content from "./Content";
import * as S from "./style";

const AttendanceDetail = () => {
  return (
    <S.MainWrapper>
      <Header />
      <Content />
    </S.MainWrapper>
  );
};

export default AttendanceDetail;
