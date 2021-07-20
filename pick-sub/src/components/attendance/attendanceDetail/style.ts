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
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 19px;
`;

export const Title = styled.div`
  .club-name {
    font-weight: 500;
  }
`;

export const SelectionBar = styled.div`
  width: 100%;
  height: 3%;
  background-color: white;
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

export const SelectionItem = styled.div`
  padding: 3px;
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 학생 출석 리스트
export const StudentWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderBar = styled.ul`
  width: 90%;
  height: 5%;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & li {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;

    :nth-child(1),
    :nth-child(2),
    :nth-child(3) {
      width: 12.5%;
    }

    :nth-child(4),
    :nth-child(5),
    :nth-child(6) {
      width: 20%;
    }
  }
`;

export const StudentItem = styled(HeaderBar)`
  border: none;
  height: 7%;
  list-style: none inside;

  & li {
    :nth-child(1) {
      & input {
        width: 100%;
        height: 25px;
      }
    }

    :nth-child(4),
    :nth-child(5),
    :nth-child(6) {
      position: relative;
      margin: 1%auto;
      width: 19%;
      height: 55%;
      border: 1px solid gray;
      border-radius: 15px;
    }
  }

  .sub-menu {
    width: 100%;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 15px #80808061;
    position: absolute;
    top: 28px;
    display: flex;
    z-index: 1;

    flex-direction: column;

    & li {
      width: 100%;
      span {
        padding: 3px;
      }
    }
  }
`;
