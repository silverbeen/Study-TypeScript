import React, { useEffect, useState } from "react";
import { buttonListType } from "../../../interface/Attendance/AttendanceInterface";
import * as S from "./style";

const SelectionBar = () => {
  const [selected, setSelected] = useState<number>(1);
  const [classSelected, setClassSelected] = useState<number>(1);
  const [buttonWidth, setButtonWidth] = useState<number>(0);

  const topButtonList: buttonListType[] = [
    {
      id: 1,
      title: "창조실",
    },
    {
      id: 2,
      title: "2층",
    },
    {
      id: 3,
      title: "3층",
    },
    {
      id: 4,
      title: "4층",
    },
  ];

  const classButtonList: buttonListType[] = [
    {
      id: 1,
      title: "교실 (3-1)",
    },
    {
      id: 2,
      title: "교실 (3-1)",
    },
    {
      id: 3,
      title: "교실 (3-1)",
    },
    {
      id: 4,
      title: "교실 (3-1)",
    },
    {
      id: 5,
      title: "교실 (3-1)",
    },
  ];

  useEffect(() => {
    setButtonWidth(100 / topButtonList.length);
  }, []);

  return (
    <>
      <S.SelectionBar>
        {topButtonList.map((button, index) => {
          return (
            <S.SelectionItem
              key={index}
              onClick={() => setSelected(button.id)}
              style={{
                width: buttonWidth + "%",
                backgroundColor: button.id === selected ? "#FF6E04" : "white",
                color: button.id === selected ? "white" : "black",
              }}
            >
              {button.title}
            </S.SelectionItem>
          );
        })}
      </S.SelectionBar>
      <S.SelectionBar>
        {classButtonList.map((button, index) => {
          return (
            <S.SelectionItem
              key={index}
              onClick={() => setClassSelected(button.id)}
              style={{
                width: buttonWidth + "%",
                backgroundColor:
                  button.id === classSelected ? "#FF6E04" : "white",
                color: button.id === classSelected ? "white" : "black",
              }}
            >
              {button.title}
            </S.SelectionItem>
          );
        })}
      </S.SelectionBar>
    </>
  );
};

export default SelectionBar;
