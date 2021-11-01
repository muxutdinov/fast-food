import React, { useState } from "react";
import {
  Container,
  Plus,
  Title,
  Wrapper,
  Tab,
  Toggle,
  IconWraptwo,
  IconWrapone,
  MenuH,
  MenuV,
} from "./style";

export const Navbar = (props) => {
  const [isTabActive, setIsTabActive] = useState(true);
  const { isActive, setActive } = props;
  return (
    <>
      <Container>
        <Wrapper align order="first">
          <Plus />
          <Title>
            Yangi buyurtma <br /> qo'shish
          </Title>
        </Wrapper>
        <Wrapper order="second">
          <Tab active={isTabActive}>
            <Tab.Item
              active={isActive === "Yangi"}
              onClick={() => setActive("Yangi")}
            >
              Yangi
            </Tab.Item>
            <Tab.Item
              active={isActive === "Qabul"}
              onClick={() => isTabActive && setActive("Qabul")}
            >
              Qabul qilingan
            </Tab.Item>
            <Tab.Item
              active={isActive === "Jo'natilgan"}
              onClick={() => isTabActive && setActive("Jo'natilgan")}
            >
              Jo'natilgan
            </Tab.Item>
            <Tab.Item
              active={isActive === "Yopilgan"}
              onClick={() => isTabActive && setActive("Yopilgan")}
            >
              Yopilgan
            </Tab.Item>
          </Tab>
        </Wrapper>
        <Wrapper align order="third">
          <Toggle>
            <IconWrapone
              active={isTabActive}
              onClick={() => {
                setIsTabActive(true);
                props.onClick(true);
              }}
            >
              <MenuV active={isTabActive} />
            </IconWrapone>
            <IconWraptwo
              active={!isTabActive}
              onClick={() => {
                setIsTabActive(false);
                props.onClick(false);
              }}
            >
              <MenuH active={!isTabActive} />
            </IconWraptwo>
          </Toggle>
        </Wrapper>
      </Container>
    </>
  );
};
export default Navbar;
