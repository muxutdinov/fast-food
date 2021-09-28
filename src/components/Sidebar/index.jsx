import React from "react";
import {
  Container,
  activeStyle,
  LogoWrapper,
  Text,
  Wrapper,
  Link,
  Item,
  WrapperIcon,
  ComWrap,
} from "./style";
import logo from "../../assets/imgs/logo.png";
import { sidebar } from "../../utils/sidebar";
import { ReactComponent as Chiqish } from "../../assets/icons/logout.svg";

export const Sidebar = () => {
  return (
    <Container>
      <LogoWrapper>
        <LogoWrapper.Img src={logo} alt="logo" />
        <Text>
          <Text.Title>Fast Food</Text.Title>
          <Text.Desc>Online maxsulot sotuvi</Text.Desc>
        </Text>
      </LogoWrapper>
      <Wrapper>
        {sidebar.map(({ id, title, path, Icon }) => {
          return (
            <Item key={id}>
              <Link exact key={id} to={path} activeStyle={activeStyle}>
                <Icon className="icon" />
                {title}
              </Link>
            </Item>
          );
        })}
      </Wrapper>
      <Wrapper chiqish>
        <ComWrap>
          <WrapperIcon>
            <Chiqish />
          </WrapperIcon>
        </ComWrap>
        <Wrapper.Title>Chiqish</Wrapper.Title>
      </Wrapper>
    </Container>
  );
};


export default Sidebar