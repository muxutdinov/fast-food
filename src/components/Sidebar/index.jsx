import React from "react";
import { Container, LogoWrapper, Text, Wrapper, Link, Item } from "./style";
import logo from "../../assets/imgs/logo.png";
import { sidebar } from "../../utils/sidebar";

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
        {sidebar.map(({ id, icon, title, path, Icon}) => {
          return (
            <Item>
                <Icon className="icon"/>
              <Link key={id} to={path}>
                {title}
              </Link>
            </Item>
          );
        })}
      </Wrapper>
    </Container>
  );
};
export default Sidebar;

