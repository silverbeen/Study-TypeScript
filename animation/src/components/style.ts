import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(240, 195, 49);
  overflow: hidden;

  span {
    color: white;
    font-size: 20px;
    font-weight: 600;
  }

  .button-wrapper {
    position: absolute;
    right: 10px;
    width: 100px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

const MouseWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(74 216 239);
  img {
    width: 600px;
  }

  #circle {
    width: 60px;
    height: 60px;
    background-color: black;
    border-radius: 80%;
    position: absolute;
    margin-right: 90px;
    margin-bottom: 350px;
  }
`;

export { MainWrapper, MouseWrapper };
