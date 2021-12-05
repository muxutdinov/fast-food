import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;
export const Editbtn = styled.div`
  border-radius: 40%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 20px;
  background-color: rgb(3, 252, 94);
`;
export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  .delete {
    display: flex;
    align-items: center;
    color: red;
    cursor: pointer;
  }
`;
