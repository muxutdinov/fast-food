import React from "react";
import { Container } from "./style";
import Navbar from "./Navbar/index";
import Body from "./Body/Body";
import KategoryaPravider from "./KategoryaContext";

const Kategoryalar = () => {
  return (
    <Container>
      <KategoryaPravider>
        <Navbar />
        <Body />
      </KategoryaPravider>
    </Container>
  );
};

export default Kategoryalar;
