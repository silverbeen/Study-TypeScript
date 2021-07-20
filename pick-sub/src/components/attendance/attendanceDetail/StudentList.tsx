import React from "react";
import { studentListType } from "../../../interface/Attendance/AttendanceInterface";
import StudentItem from "./StudentItem";
import * as S from "./style";

const StudentList = () => {
  const studentList: studentListType[] = [
    {
      check: true,
      stdtNumber: 2201,
      stdName: "강은빈",
      eightState: "",
      nineState: "string",
      tenState: "string",
    },
    {
      check: true,
      stdtNumber: 2202,
      stdName: "강은빈",
      eightState: "",
      nineState: "string",
      tenState: "string",
    },
    {
      check: true,
      stdtNumber: 2203,
      stdName: "강은빈",
      eightState: "",
      nineState: "string",
      tenState: "string",
    },
    {
      check: true,
      stdtNumber: 2204,
      stdName: "강은빈",
      eightState: "",
      nineState: "string",
      tenState: "string",
    },
    {
      check: true,
      stdtNumber: 2205,
      stdName: "강은빈",
      eightState: "",
      nineState: "string",
      tenState: "string",
    },
  ];
  return (
    <S.StudentWrapper>
      <S.HeaderBar>
        <li>확인</li>
        <li>학번</li>
        <li>이름</li>
        <li>8교시</li>
        <li>9교시</li>
        <li>10교시</li>
      </S.HeaderBar>
      {studentList.map((student, index) => (
        <StudentItem student={student} key={index} />
      ))}
    </S.StudentWrapper>
  );
};

export default StudentList;
