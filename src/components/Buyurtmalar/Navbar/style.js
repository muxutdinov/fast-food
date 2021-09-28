import styled from "styled-components";
import { ReactComponent as plus } from "../../../assets/icons/plus.svg";

// const getOrder = ({ order }) => {
//   switch (order) {
//     case "first":
//       return 1;
//     case "second":
//       return 3;
//     case "third":
//       return 2;
//     default:
//       return 1;
//   }
// };

// const getFlex = ({ order }) => {
//   switch (order) {
//     case "first":
//       return 1;
//     case "second":
//       return 3;
//     case "third":
//       return 2;
//     default:
//       return 1;
//   }
// };

export const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index:999;
  /* @madia (max-width:1900px) {
    flex-direction: column;
  } */
`;
export const Wrapper = styled.div`
  padding: 22px 40px;
  height: 60px;
  background: white;
  display: flex;
  align-items: center;
  width: ${({ align }) => (align ? "200px" : "100%")};
  border: 1px solid #e5e5e5;
  
`;
export const Plus = styled(plus)`
  padding: 11px;
  height: 30px;
  width: 30px;
  font-size: 12px;
  background: #20d472;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 12px;
`;

export const Title = styled.pre`
  font-family: SFProDisplay;
  font-size: 10px;
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
`;

Tab.Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 16px;
  width: 150px;
  color: #2d3a45;
  mix-blend-mode: normal;
  cursor: pointer;
  transition: all 0.3s;
  background: ${({ active }) => active && "white"};
  box-shadow: ${({ active }) =>
    active && "0px 2px 2px rgba(174, 176, 181, 0.314986)"};
  border-radius: 18px;
  height: 30px;
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

export const Menu = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 9px;
  margin-top: ${({ one }) => (one ? "4px" : "")};
`;

export const Group = styled.img`
  width: 14px;
  height: 14px;
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
  height: 30px;
  width: 30px;
  font-size: 12px;
  background: ${({ active }) => (active ? "white" : "transperant")};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
`;
