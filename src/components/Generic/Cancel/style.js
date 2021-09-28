import styled from "styled-components";

import { ReactComponent as cancel } from "../../../assets/icons/cancel.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  min-width: 40px;
  height: 40px;
  min-height: 40px;
  background: #edeff3;
  border-radius: 50%;
  margin-top: 25px;
  margin-right: 14px;
  cursor: pointer;
`;
export const Cancel = styled(cancel)`
  width: 32px;
  height: 32px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 20px;
  padding: 10px;
`;
