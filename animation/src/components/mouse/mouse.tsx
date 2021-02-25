import React, { useState } from "react";
import { lion, 미니언즈 } from "../../assets/index";
import * as S from "../style";

const Mouse: React.FC = () => {
  //const circle = document.getElementById("circle");
  const [circle, setCircle] = useState("");

  const mouseLocation = (e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    setCircle("translate(" + x / 380 + "vw," + y / 150 + "vh)");

    /*  window && window.circle.style.transform =
      "translate(" + x / 380 + "vw," + y / 150 + "vh)"; */
  };

  return (
    <S.MainWrapper>
      <div className="button-wrapper"></div>
      <S.MouseWrapper onMouseMove={mouseLocation}>
        <img src={미니언즈} />
        <div style={{ transform: circle }} id="circle" />
      </S.MouseWrapper>
    </S.MainWrapper>
  );
};

export default Mouse;
