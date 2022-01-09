import styled from "styled-components";
import { ReactComponent as plus } from "../../../assets/icons/plus.svg";
import { ReactComponent as filter } from "../../../assets/icons/filter.svg";
import { ReactComponent as search } from "../../../assets/icons/search.svg";

export const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  width: 1115px;
  height: 70px;
  background: #ffffff;
`;
export const Wrapper = styled.div`
  position: relative;
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
// export const Pluss = styled(x)`
//   padding: 11px;
//   background: #20d472;
//   width: 46px;
//   height: 46px;
//   min-width: 36px;
//   min-height: 36px;
//   border-radius: 50%;
//   cursor: pointer;
//   margin-right: 14px;
// `;

export const Title = styled.pre`
  font-weight: 900;
  width:100%;
  font-family: SFProDisplay;
  font-size: 22px;
  line-height: 16px;
  color: #2d3a45;
`;
export const Wrapinput = styled.input`
  padding: 10px;
  outline: none;
  margin-left: 80px;
  border: none;
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
  position: absolute;
  left: 350px;
  bottom: 26px;
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
