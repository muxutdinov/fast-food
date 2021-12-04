import styled from "styled-components";

import { ReactComponent as bred } from "../../../assets/icons/bred.svg";
import { ReactComponent as yashik } from "../../../assets/icons/yashik.svg";
import { ReactComponent as sok } from "../../../assets/icons/sok.svg";
import { ReactComponent as kokat } from "../../../assets/icons/kokat.svg";
import { ReactComponent as trash } from "../../../assets/icons/trash.svg";
import { ReactComponent as pan } from "../../../assets/icons/pan.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  margin-left: 60px;
  width: 992px;
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 6px;
`;
export const WrapperCon = styled.div`
  /* margin-right: ${({ left }) => (left ? "50px" : "")}; */
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Iconbir = styled(bred)`
  margin-right: 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const Iconikki = styled(bred)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const Iconuch = styled(sok)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const Icontort = styled(yashik)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const Iconbesh = styled(kokat)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const Wraptext = styled.div`
  margin-right: ${({ left }) => (left ? "50px" : "")};
  width: 65px;
  height: 16px;
  font-family: SFProDisplay;
  font-size: 13px;
  line-height: 15px;
  color: #2d3a45;
`;
export const Iconswrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: #edeff3;
  border-radius: 22.4px;
  margin-left: 10px;
`;
export const Icones = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 16px;
`;
export const Iconone = styled(trash)`
  cursor: pointer;
`;
export const Icontwo = styled(pan)`
  cursor: pointer;
`;
