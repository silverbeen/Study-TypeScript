import React, { useState } from "react";
import { lion, 미니언즈 } from "../../assets/index";
import * as S from "../style";

const Mouse: React.FC = () => {
  const [circle, setCircle] = useState("");
  const [lion, setLion] = useState("");

  const mouseLocation = (e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    setCircle("translate(" + x / 380 + "vw," + y / 150 + "vh)");
    setLion("translate(" + x / 380 + "vw," + y / 100 + "vh)");
  };

  return (
    <S.MainWrapper>
      <div className="button-wrapper"></div>
      <S.MouseWrapper onMouseMove={mouseLocation}>
        <img src={미니언즈} alt="미니언즈" />
        <div style={{ transform: circle }} id="circle" />
        
        <img src={lion} alt="라이언" />
        <div style={{ transform: lion }} id="lion-left" />
        <div style={{ transform: lion }} id="lion-right" />
      </S.MouseWrapper>
    </S.MainWrapper>
  );
};

export default Mouse;
