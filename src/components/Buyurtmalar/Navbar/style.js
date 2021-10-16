import styled from "styled-components";
import { ReactComponent as plus } from "../../../assets/icons/plus.svg";
import { ReactComponent as menuH } from "../../../assets/icons/menuH.svg";
import { ReactComponent as menuV } from "../../../assets/icons/menuV.svg";

export const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 999;
`;
export const Wrapper = styled.div`
  padding: 22px 40px;
  height: 70px;
  background: white;
  display: flex;
  align-items: center;
  width: ${({ align }) => (align ? "200px" : "100%")};
  border: 1px solid #e5e5e5;
  `;
export const Plus = styled(plus)`
padding: 11px;
  background: #20d472;
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 14px;
  `;

export const Title = styled.pre`
font-weight: 900;
  font-family: SFProDisplay;
  font-size: 12px;
  line-height: 16px;
  color: #2d3a45;
  `;

export const Tab = styled.div`
  height: 38px;
  display: flex;
  width: 100%;
  background: #edeff3;
  border-radius: 24px;
  align-items: center;
  justify-content: space-around;
  opacity: ${({active})=>!active && 0.4};
  `;

Tab.Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: SFProDisplay;
  font-size: 12px;
  line-height: 16px;
  width: 150px;
  color: #9c9fa2;
  mix-blend-mode: normal;
  cursor: pointer;
  transition: all 0.3s;
  background: ${({ active }) => active && "white"};
  box-shadow: ${({ active }) =>
    active && "0px 2px 2px rgba(174, 176, 181, 0.314986)"};
  border-radius: 18px;
  height: 26px;
`;
export const Toggle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px;
  width: 80px;
  height: 40px;
  background: #edeff3;
  border-radius: 18px;
`;

export const MenuV = styled(menuV)`
  width: 12px;
  height: 12px;
  fill: ${({ active }) => (active ? "#8d9ba8" : "transparent")};
`;

export const MenuH = styled(menuH)`
  width: 13px;
  height: 13px;
  fill: ${({ active }) => (active ? "#8d9ba8" : "transparent")};
`;

export const IconWraptwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ active }) => (active ? "white" : "transperant")};
  height: 30px;
  width: 30px;
  font-size: 12px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
`;
export const IconWrapone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  font-size: 12px;
  background: ${({ active }) => (active ? "white" : "transperant")};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
`;
