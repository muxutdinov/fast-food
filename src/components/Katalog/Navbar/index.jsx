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
} from "./style";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Container>
        <Wrapper>
          {/* <Plus/> */}
          <Title>
           History
          </Title>
          {/* <Border /> */}
          {/* <Wrapinput placeholder="Qidirish"></Wrapinput> */}
          {/* <Search /> */}
          {/* <Filtered> */}
            {/* <Filter> */}
              {/* <Filtericon /> */}
            {/* </Filter> */}
          {/* </Filtered> */}
        </Wrapper>
      </Container>
    </>
  );
};
export default Navbar;
