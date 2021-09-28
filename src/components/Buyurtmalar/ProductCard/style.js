import styled from "styled-components";
import { ReactComponent as save } from "../../../assets/icons/save.svg";
import { ReactComponent as clock } from "../../../assets/icons/clock.svg";
import { ReactComponent as user } from "../../../assets/icons/user.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 300px;
  max-height: fit-content;
  background: #ffffff;
  margin-bottom: 6px;
  transition: all 0.3s;
  :hover {
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => flex && "column"};
  width: 100%;
  padding-bottom: ${({ last }) => !last && "20px"};
  padding-top: 15px;
  border-bottom: ${({ last }) => !last && "1px solid #979797"};
`;

export const Info = styled.div`
  display: flex;
  margin-left: ${({ right }) => right && "auto"};
  align-items: center;
  .sum {
    margin-left: 15px;
  }
`;
Info.Number = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 30px;
  background: #20d472;
  border-radius: 18px;
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.466667px;
  color: #ffffff;
  margin-left: 10px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  width: 30px;
  height: 30px;
  background: #edeff3;
  border-radius: 18px;
`;

Info.Save = styled(save)`
  width: 11px;
  height: 14px;
`;

Info.Clock = styled(clock)`
  width: 16px;
  height: 16px;
  margin-left: 10px;
`;
Info.Text = styled.div`
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 16px;
  color: #2d3a45;
  margin-left: 20px;
`;

export const Timer = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: center;
`;

Info.User = styled(user)`
  margin-left: 10px;
  margin-bottom: 20px;
`;

Info.Name = styled.div`
  font-family: SFProDisplay;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.533333px;
  color: #2d3a45;
  margin-left: 15px;
`;
Info.Num = styled.div`
  font-family: SFProDisplay;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.4px;
  color: #2d3a45;
  mix-blend-mode: normal;
  opacity: 0.7;
  margin-left: 20px;
  margin-top: 5px;
`;
Info.Sum = styled.div`
  font-family: SFProDisplay;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: 0.366667px;
  color: #8d9ba8;
  margin-top: 20px;
  margin-bottom: 5px;
  margin-left: ${({ operator }) => operator && "15px"};
`;
Info.Price = styled.div`
  font-family: SFProDisplay bold;
  font-size: 20px;
  line-height: 18px;
  letter-spacing: 0.666667px;
  color: #2d3a45;
`;
Info.PaymeIcon = styled.div`
  margin-right: 10px;
  width: 14px;
  height: 14px;
  background: #14e5e4;
  border-radius: 50%;
`;
Info.Payme = styled.div`
  margin-right: 10px;
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.466667px;
  color: #2d3a45;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
