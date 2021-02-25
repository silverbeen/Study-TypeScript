import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%auto;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Submit = styled.form`
  display: flex;
  flex-direction: column;
  align-items : center;
  width: 400px;
  margin: 0 auto;

  > input,
  button {
    width: 80%;
    height: 30px;
    margin: 2%;
    padding: 2%;
    border-radius: 50px;
    border: none;
    outline: none;
  }
  > button {
    width: 84%;
    height: 40px;
    color: white;
    background: linear-gradient(to left, #4759d8, #7f22af);
  }
`;

const Title = styled.h1`
  color: white;
`;

export { MainWrapper, Submit, Title };
