import styled from "styled-components";
import { ReactComponent as save } from "../../../assets/icons/save.svg";
import { ReactComponent as clock } from "../../../assets/icons/clock.svg";
import { ReactComponent as user } from "../../../assets/icons/user.svg";
import { ReactComponent as phone } from "../../../assets/icons/phone.svg";
import { ReactComponent as truck } from "../../../assets/icons/truck.svg";
import { ReactComponent as sum } from "../../../assets/icons/sum.svg";
import { ReactComponent as oval } from "../../../assets/icons/Oval.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
`;
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
`;
export const Time = styled.div`
  font-family: SFProDisplay;
  font-size: 16px;
  line-height: 16px;
  color: #2d3a45;
  margin-left: 20px;
`;
export const Last = styled.div`
  width: 2px;
  height: 150px;
  background: #edeff3;
`;
export const MinWrapikki = styled.div`
  flex: 1.4;
  display: flex;
  flex-direction: column;
`;
export const Wrapikki = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;
export const User = styled(user)`
  width: 14.22px;
  height: 16px;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-right: 40px;
  `;
export const Name = styled.div`
font-family: SFProDisplay;
font-size: 20px;
line-height: 20px;
letter-spacing: 0.666667px;
color: #2D3A45;
margin-bottom: 30px;
`
export const Phone = styled(phone)`
margin-right: 40px;
width: 15.15px;
height: 15.18px;
opacity: 0.5;
`
export const Tel = styled.div`
width: 144px;
height: 18px;
font-family: SFProDisplay;
font-size: 14px;
line-height: 18px;
letter-spacing: 0.466667px;
color: #2D3A45;
`
export const MinWrapuch = styled.div`
  flex: 1.4;
  position: relative;
`;
export const IconWraps = styled.div`
display: flex;
flex-direction: column;
margin-right: 120px;
margin-bottom: 30px;
`
export const Wrapuch = styled.div`
display: flex;
flex-direction: ${({number})=>number?"column":""};
justify-content: center;
margin-left:${({number})=>number?"30px":""};
`
export const Sum = styled(sum)`
width: 12.8px;
height: 16px;
mix-blend-mode: normal;
opacity: 0.5;
margin-right: 10px;
`
export const Narx = styled.div`
top: calc(50% - 18px/2);
font-family: SFProDisplay;
font-size: 14px;
line-height: 18px;
letter-spacing: 0.466667px;
color: #2D3A45;
margin-top: ${({truck})=>truck?"15px":""};
`
export const Truck = styled(truck)`
margin-top: 15px;
width: 16px;
height: 13.09px;
mix-blend-mode: normal;
opacity: 0.5;
margin-right: 10px;
`
export const Umumiy = styled.div`
font-family: SFProDisplay;
font-size: 11px;
line-height: 18px;
letter-spacing: 0.366667px;
color: #8D9BA8;
`
export const Number = styled.div`
margin-top: 10px;
font-family: SFProDisplay;
font-size: 20px;
line-height: 2px;
letter-spacing: 0.666667px;
color: #2D3A45;
`
export const Payme = styled.div`
position: absolute;
display: flex;
flex-direction: row;
align-items: center;
bottom: 90px;
left: 190px;
.pay{
  font-weight: 200;
}
`
export const Oval = styled(oval)`
border-radius: 50%;
background: #14E5E4;
height: 10px;
width: 10px;
margin-right: 10px;
`
export const MinWraptort = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Wraptort = styled.div`
margin-top: 10px;
margin-left: 30px;
margin-bottom: 10px;
display: flex;
flex-direction: column;
`
export const Oprname = styled.div`
font-weight: 500;
font-family: SFProDisplay;
font-size: 14px;
line-height: 18px;
letter-spacing: 0.466667px;
color: #2D3A45;
`