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
  const [isActive, setIsActive] = useState("yangi");
  const [isTabActive, setIsTabActive] = useState(true);
  return (
    <Container>
      <Wrapper align test>
        <Plus />
        <Title>Yangi buyurtma qo'shish</Title>
      </Wrapper>
      <Wrapper>
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
            onClick={() => setIsActive("Jo'natilgan")}
            active={isActive === "Jo'natilgan"}
          >
            Jo'natilgan
          </Tab.Item>
          <Tab.Item
            onClick={() => setIsActive("Yopilgan")}
            active={isActive === "Yopilgan"}
          >
            Yopilgan
          </Tab.Item>
        </Tab>
      </Wrapper>
      <Wrapper align>
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
