import React, { useState } from "react";
import Navbarqosh from "../Navbarqosh/Navbarqosh";

import {
  Container,
  Wrapper,
  Plus,
  Title,
  Wrapinput,
  Wrapput,
  Mintext,
  Search,
  Filtered,
  Filter,
  Filtericon,
  Border,
  Pluss,
  IconWrapper,
} from "./style";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Container>
        <Wrapper>
          <Plus onClick={() => setToggle(!toggle)} />
          <Title>
            Yangi  filial <br /> qo'shish
          </Title>
          {
            toggle ? <Navbarqosh/> : ""
          }
          <Border />
          <Wrapinput placeholder="Qidirish"></Wrapinput>
          <Search />
          <Filtered>
            <Filter>
              <Filtericon />
            </Filter>
          </Filtered>
        </Wrapper>
      </Container>
    </>
  );
};
export default Navbar;