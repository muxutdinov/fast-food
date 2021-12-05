import React, { useState } from "react";

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
          {/* <IconWrapper> */}
          {toggle ? (
            <li>
              <i class="fa-li fa fa-spinner fa-spin"></i>as bullets
            </li>
          ) : (
            // <Pluss onClick={() => setToggle(!toggle)} />
            <Plus onClick={() => setToggle(!toggle)} />
          )}
          {/* </IconWrapper> */}
          <Title>
            Yangi maxsulot <br /> qo'shish
          </Title>
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
