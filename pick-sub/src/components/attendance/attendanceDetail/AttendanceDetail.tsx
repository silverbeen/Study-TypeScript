import React from "react";
import Header from "../../header/Header";
import SelectionBar from "./SelectionBar";
import StudentList from "./StudentList";
import * as S from "./style";

const AttendanceDetail = () => {
  return (
    <S.MainWrapper>
      <Header />
      <S.ContentWrapper>
        <S.Title>
          <h1 className="club-name">GRAM</h1>
          <span>세미나실 2-1</span>
        </S.Title>
        <SelectionBar />
        <StudentList />
      </S.ContentWrapper>
    </S.MainWrapper>
  );
};

export default AttendanceDetail;
