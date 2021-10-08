import styled from 'styled-components';
import { ReactComponent as save } from '../../../assets/icons/save.svg';
import { ReactComponent as clock } from '../../../assets/icons/clock.svg';
import { ReactComponent as user } from '../../../assets/icons/user.svg';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 6px;
  width: 100%;
  min-height: 300px;
  max-height: fit-content;
  padding: 0 15px 15px 15px;
  margin-bottom: 8px;
  transition: all 0.3s;
  :hover {
    box-shadow: 0px 15px 20px rgba(176, 177, 181, 0.432802);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => flex && 'column'};
  width: 100%;
  padding-bottom: ${({ last }) => !last && '25px'};

  padding-top: 20px;
  border-bottom: ${({ last }) => !last && '1px solid #d9d7d7'}; ;
`;

export const Info = styled.div`
  display: flex;
  margin-left: ${({ end }) => end && 'auto'};
  align-items: ${({ center }) => center && 'center'};
`;

Info.OrderID = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 60px;
  max-width: fit-content;
  height: 30px;

  background: #20d472;
  border-radius: 18px;

  font-family: SFProDisplay;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.466667px;
  color: #ffffff;
  margin-right: 20px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: #edeff3;
  border-radius: 18px;
`;

Info.Save = styled(save)`
  width: 12px;
  height: 14px;
`;

Info.Clock = styled(clock)`
  display: flex;
  margin-right: 10px;
  width: 18px;
  height: 18px;
`;

Info.Text = styled.div`
  display: flex;
  font-family: SFProDisplay;
  font-size: 16px;
  line-height: 18px;
  color: #2d3a45;
`;

Info.User = styled(user)`
  width: 18px;
  height: 18px;
  margin-right: 18px;
`;

export const Timer = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;

Info.Name = styled.div`
  font-family: SFProDisplay;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.533333px;
  color: #2d3a45;
`;

Info.Nuber = styled.div`
  font-family: SFProDisplay;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.4px;

  color: #2d3a45;

  mix-blend-mode: normal;
  opacity: 0.7;
  margin: 4px 0 16px 0;
`;

Info.Total = styled.div`
  font-family: SFProDisplay;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.366667px;
  color: #8d9ba8;
  margin-top: ${({ top }) => top && '15px'};
  margin-bottom: 4px;
`;

Info.Price = styled.div`
  font-family: SFProDisplay bold;
  font-size: 20px;
  line-height: 18px;
  letter-spacing: 0.666667px;

  color: #2d3a45;
`;

Info.PaymeIcon = styled.div`
  display: flex;
  margin-left: auto;
  width: 12px;
  height: 12px;
  background: #14e5e4;
  border-radius: 50%;
`;

Info.Payme = styled.div`
  display: flex;

  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 16px;
  margin-left: 10px;
  letter-spacing: 0.466667px;
  color: #2d3a45;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
`;
