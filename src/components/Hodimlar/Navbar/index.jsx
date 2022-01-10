import React, { useState } from "react";
import  Navbarqosh  from "../Navbarqosh/Navbarqosh.jsx";
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
        {
            toggle ? <Pluss onClick={()=>setToggle(!toggle)}/>  :
            <Plus onClick={() => setToggle(!toggle)} />
          }
          {toggle ? <Navbarqosh /> : ""}
          <Title>
            Yangi hodim <br /> qo'shish
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
