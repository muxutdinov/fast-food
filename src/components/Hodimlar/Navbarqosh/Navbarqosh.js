import styled from "styled-components";

export const Container = styled.div`
  right: 0px;
  position: absolute;
  top: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  transition: all 0.1s;
`;
export const Left = styled.div`
  width: 650px;
  background-color: black;
  opacity: 0.1;
  height: 90vh;
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 90vh;
  width: 465px;
  display: flex;
  background-color: white;
`;
export const RightWrapper = styled.div``;
export const Title = styled.div`
  width: 152px;
  height: 18px;
  font-family: SFProDisplay;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.533333px;
  color: #2d3a45;
`;
export const Text = styled.div`
  width: 100px;
  height: 18px;
  font-family: SFProDisplay;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.4px;
  color: #2d3a45;
  mix-blend-mode: normal;
  opacity: 0.6;
`;
export const Input = styled.input`
  width: 318px;
  height: 44px;
  border: 1px solid #edeff3;
  box-sizing: border-box;
  border-radius: 6px;
`;
export const Saqlashbtn = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #20d472;
  border-radius: 4px;
  width: 80px;
  height: 40px;
`;
export const SaqlashText = styled.div`
  height: 18px;
  top: calc(50% - 18px / 2 + 0.5px);
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.466667px;
  color: #ffffff;
`;
