import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  transition: all 0.1s;
  border: 1px solid red;
  cursor: pointer;
`;
export const Left = styled.div`
  width: 650px;
  background-color: black;
  opacity: 0.1;
  height: 90vh;
`;
export const Right = styled.div`
  height: 90vh;
  width: 465px;
  display: flex;
  background-color: white;
`;
