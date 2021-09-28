import React, { useState } from "react";
import two from "../../../assets/icons/two.svg";
import twos from "../../../assets/icons/twos.svg";
import group from "../../../assets/icons/Group.svg";

import {
  Container,
  Plus,
  Title,
  Wrapper,
  Tab,
  Toggle,
  Menu,
  Group,
  IconWraptwo,
  IconWrapone,
} from "./style";

export const Navbar = () => {
  const [isActive, setIsActive] = useState("Yangi");
  const [isTabActive, setIsTabActive] = useState(true);
  return (
    <Container>
      <Wrapper align order="first">
        <Plus />
        <Title>Yangi buyurtma qo'shish</Title>
      </Wrapper>
      <Wrapper order="second">
        <Tab>
          <Tab.Item
            onClick={() => setIsActive("Yangi")}
            active={isActive === "Yangi"}
          >
            Yangi
          </Tab.Item>
          <Tab.Item
            onClick={() => setIsActive("Qabul")}
            active={isActive === "Qabul"}
          >
            Qabul qilingan
          </Tab.Item>
          <Tab.Item
            active={isActive === "Jo'natilgan"}
            onClick={() => setIsActive("Jo'natilgan")}
          >
            Jo'natilgan
          </Tab.Item>
          <Tab.Item
            active={isActive === "Yopilgan"}
            onClick={() => setIsActive("Yopilgan")}
          >
            Yopilgan
          </Tab.Item>
        </Tab>
      </Wrapper>
      <Wrapper align order="third">
        <Toggle>
          <IconWrapone
            active={!isTabActive}
            onClick={() => setIsTabActive(false)}
          >
            <Menu one src={two} />
            <Menu src={twos} />
          </IconWrapone>
          <IconWraptwo
            active={isTabActive}
            onClick={() => setIsTabActive(true)}
          >
            <Group src={group} />
          </IconWraptwo>
        </Toggle>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
