import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid red;
`;

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  
  i {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  a {
    color: white;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    text-shadow: 4px 4px 4px gray;
  }
`;

//메인페이지
const MainWrapper = styled.div`
  width: 100%auto;
  height: 100vh;
  background-color: #bc5be4;
`;

export { HeaderWrapper, Nav, MainWrapper };
