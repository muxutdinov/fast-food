import styled from "styled-components";
import { ReactComponent as plus } from "../../../assets/icons/plus.svg";
import { ReactComponent as filter } from "../../../assets/icons/filter.svg";
import { ReactComponent as search } from "../../../assets/icons/search.svg";
import { ReactComponent as chart } from "../../../assets/icons/chart.svg";
import { ReactComponent as notchart } from "../../../assets/icons/notchart.svg";

export const Container = styled.div`
  position: sticky;
  display: flex;
  flex-direction: row;
  width: 1115px;
  height: 70px;
  background: #ffffff;
`;
export const Wrapper = styled.div`
  padding: 22px 40px;
  padding-right: 0;
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
export const Wrapinput = styled.div`
  margin-left: 80px;
  width: 280px;
  height: 40px;
  background: #edeff3;
  border-radius: 20px;
`;
export const Wrapput = styled.div`
  display: flex;
  .input {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;
export const Mintext = styled.div`
  width: 42px;
  margin-top: 10px;
  margin-left: 20px;
  height: 16px;
  font-family: SFProDisplay;
  font-size: 13px;
  line-height: 15px;
  color: #2d3a45;
  mix-blend-mode: normal;
  opacity: 0.4;
`;

export const Search = styled(search)`
  width: 16px;
  height: 16px;
  margin-left: 180px;
  margin-top: 10px;
`;
export const Filtered = styled.div`
  margin-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: #edeff3;
  border-radius: 24px;
  cursor: pointer;
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 18px;
`;
export const Filtericon = styled(filter)`
  width: 16px;
  height: 14.4px;
`;
export const Border = styled.div`
  margin-left: 26px;
  height: 70px;
  width: 1.7px;
  opacity: 0.3;
  background-color: gray;
`;
export const Borders = styled.div`
  margin-left: 320px;
  height: 70px;
  width: 2px;
  opacity: 0.3;
  background-color: gray;
`;
export const Lastcontainer = styled.div`
  margin-left: auto;
  height: 70px;
  width: 170px;
  /* background-color: yellow; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapperlasticons = styled.div`
  width: 97px;
  height: 48px;
  background: #edeff3;
  border-radius: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const LastIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 18px;
`;
export const Chart = styled(chart)`
  width: 25px;
  height: 25px;
`;
export const NotChart = styled(notchart)`
  width: 20px;
  height: 20px;
`;
