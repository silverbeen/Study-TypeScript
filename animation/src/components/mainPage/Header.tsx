import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

function Header() {
  return (
    <S.HeaderWrapper>
      <S.Nav>
        <i>
          <Link to="/rotation">ROTATION</Link>
          <Link to="/mouse">EYES MOUSE</Link>
          <Link to="/dispersion">COLOR DISPERSION</Link>
          <a href="https://github.com/silverbeen/Study-TypeScript/tree/master/animation">
            GIT
          </a>
          <Link to="/sign-in">SIGN IN</Link>
        </i>
      </S.Nav>
    </S.HeaderWrapper>
  );
}

export default Header;
