import { EPERM } from "constants";
import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

//컨텐츠
export const ContentWrapper = styled.div`
  width: 85%;
  height: 85%;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  border: 1px solid red;

  .club-name {
    font-weight: 500;
  }
`;

export const SelectionBar = styled.div`
  width: 100%;
  height: 4%;
  background-color: white;
`;

export const SelectionItem = styled.div`
  width: 25%;
  height: 100%;
  border: 1px solid red;
`;
