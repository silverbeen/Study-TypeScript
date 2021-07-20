import React, { useState } from "react";
import {
  classbuttonSubMenuType,
  studentItemProps,
  subMenuProps,
} from "../../../interface/Attendance/AttendanceInterface";
import * as S from "./style";

const SubMenu = ({ disable, setSelectValue }: subMenuProps) => {
  return (
    <ul className="sub-menu" style={{ display: disable ? "flex" : "none" }}>
      <li
        onClick={() => {
          setSelectValue("현체");
          console.log("현체");
        }}
      >
        <span>현체</span>
      </li>
      <li
        onClick={() => {
          setSelectValue("귀가");
          console.log("귀가");
        }}
      >
        <span>귀가</span>
      </li>
      <li
        onClick={() => {
          setSelectValue("무단");
          console.log("무단");
        }}
      >
        <span>무단</span>
      </li>
    </ul>
  );
};

const classButtonSubMenu: classbuttonSubMenuType[] = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  { id: 3 },
];

const StudentItem = ({ student, key }: studentItemProps) => {
  const [disable, setDisable] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<string>("");
  const [selected, setSelected] = useState<number>(0);

  return (
    <S.StudentItem key={key}>
      <li>
        <input type="checkbox" />
      </li>
      <li>{student.stdtNumber}</li>
      <li>{student.stdName}</li>
      {classButtonSubMenu.map((id) => (
        <li
          onClick={() => {
            setDisable(!disable);
            setSelected(id.id);
          }}
        >
          <span>{selectValue}</span>
          {id.id === selected ? (
            <>
              <SubMenu
                disable={disable}
                setDisable={setDisable}
                setSelectValue={setSelectValue}
              />
            </>
          ) : (
            ""
          )}
        </li>
      ))}
    </S.StudentItem>
  );
};

export default StudentItem;
