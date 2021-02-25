import React, { useState } from "react";
import * as S from "../style";

interface DispersionState {
  rotateValue: number;
  color: number;
  color1: number;
}

const Circle: React.FC<{
  rotateValue: number;
  color: number;
  color1: number;
}> = ({ rotateValue, color, color1 }) => {
  return (
    <S.Circle style={{ transform: "rotate(" + rotateValue + "deg)" }}>
      <div
        style={{
          backgroundColor: "rgb( 300," + color1 + "," + color + " )",
        }}
      ></div>
    </S.Circle>
  );
};

function Dispersion() {
  const [rotateVal, setRotateVal] = useState<number>(0);
  const rotateNum = [];

  const circleSpread = () => {
    console.log(rotateVal);
    setRotateVal(20);
  };

  const returnRotate = () => {
    setRotateVal(0);
  };

  for (let i = 0; i < 18; i++) {
    rotateNum[i] = i;
  }

  const rotateApear = rotateNum.map((e) => (
    <Circle
      rotateValue={rotateVal * e}
      color={rotateVal * e}
      color1={(rotateVal * e) / 3}
    ></Circle>
  ));

  return (
    <S.MainWrapper style={{ backgroundColor: "#ec4fff" }}>
      <div className="button-wrapper">
        <i onClick={circleSpread}>open</i>
        <i onClick={returnRotate}>close</i>
      </div>
      {rotateApear}
    </S.MainWrapper>
  );
}

export default Dispersion;
