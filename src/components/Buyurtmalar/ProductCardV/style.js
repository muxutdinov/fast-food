import styled from "styled-components";
import { ReactComponent as save } from "../../../assets/icons/save.svg";
import { ReactComponent as clock } from "../../../assets/icons/clock.svg";
import { ReactComponent as user } from "../../../assets/icons/user.svg";

export const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 964px;
  height: 150px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 6px;
`;
export const MinWrapbir = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  flex: 1;
  /* border-right: 2px solid  #EDEFF3; */
  padding-left: 10px;
  padding-right: 10px;
`;
export const Wrapbir = styled.div`
position: relative;
margin-bottom: 20px;
  display: flex;
`;
export const Num = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 28px;
  background: #20d472;
  border-radius: 15px;
  color: white;
  margin-right: 20px;
  margin-left: 25px;
  margin-bottom: 10px;
  `;
export const Border = styled.div`
position: absolute;
top: 40px;
left: 20px;
width: 84px;
height: 1px;
mix-blend-mode: normal;
opacity: 0.2;
border: 1px solid #979797;
`
export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: #edeff3;
  border-radius: 15px;
  `;
export const Save = styled(save)`
  width: 12.44px;
  height: 16px;
  `;
export const Soat = styled(clock)`
width: 16px;
height: 16px;
margin-left: 25px;
`
export const Time = styled.div`
font-family: SFProDisplay;
font-size: 16px;
line-height: 16px;
color: #2D3A45;
margin-left: 20px;
`
export const Last = styled.div`
width: 2px;
height: 150px;
background: #EDEFF3;
`
export const MinWrapikki = styled.div`
  flex: 1.4;
`;
export const MinWrapuch = styled.div`
  flex: 1.4;
`;
export const MinWraptort = styled.div`
  flex: 1;
`;
