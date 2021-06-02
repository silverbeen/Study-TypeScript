import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  border: 1px solid #80808069;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #80808059;
  margin: 0 auto;
`;

export const TodoHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid #80808059;

  & h4 {
    text-align: center;
    padding-bottom: 3px;
  }
`;

export const Colors = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #80808059;

  .color-radius {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
  }
`;

export const TodoList = styled.div`
  width: 100%;
  height: 500px;
  list-style: none;

  & li {
    width: 100%;
    border-bottom: 1px solid #80808059;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & p {
      padding: 10px;
    }
  }

  .todo-button {
    margin: 0 10px;
    float: right;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    border: 1px solid gray;
  }

  .checked-todo-text {
    color: gray;
    text-decoration: line-through;
  }
`;
