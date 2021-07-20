import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 7%;
  left: 0px;
  top: 0px;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderSub = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  width: 10%;

  .font-bold {
    font-size: 20px;
    font-weight: 600;
  }
`;
