import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  min-width: 200px;
  height: 765px;
  padding: 18px 0 24px 0;
  background-color: white;
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin-bottom: 44px;
  padding: 0 24px;
`;
LogoWrapper.Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

Text.Title = styled.div`
  font-weight: 900;
  font-family: SFProDisplay bold;
  font-size: 12px;
  line-height: 13px;
  color: #2d3a45;
`;

Text.Desc = styled.div`
  font-size: 8px;
  line-height: 10px;
  color: #2d3a45;
  mix-blend-mode: normal;
  opacity: 0.5;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: ${({ chiqish }) => (chiqish ? "center" : "column")};
  flex-direction: ${({ chiqish }) => (chiqish ? "row" : "column")};
  margin-top: ${({ chiqish }) => chiqish && "auto"};
  cursor: ${({ chiqish }) => chiqish && "pointer"};
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 0 14px 14px 0;
  height: 38px;
`;
export const Link = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  font-family: SFProDisplay;
  font-size: 10px;
  line-height: 13px;
  color: #2d3a45;
  text-decoration: none;
  border-radius: 0px 6px 6px 0px;
  .icon {
    margin-right: 15px;
    width: 28px;
    height: 28px;
    padding: 10px;
    border-radius: 6px;
    background: #f6f6f6;
    margin-left: 25px;
  }
  transition: all 0.2s;
`;
export const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8px;
  height: 8px;
  border-radius: 6px;
`;
export const ComWrap = styled.div`
  border-radius: 6px;
  margin-left: 25px;
  height: 28px;
  width: 28px;
  background: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
`;
Wrapper.Title = styled.div`
  margin-left: 15px;
  font-family: SFProDisplay;
  font-size: 10px;
  line-height: 13px;
  color: #2d3a45;
`;
export const activeStyle = {
  color: "white",
  background: "#FCB600",
  padding: "7px 0",
};
