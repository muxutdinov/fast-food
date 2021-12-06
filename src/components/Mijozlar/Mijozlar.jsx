import React from "react";
import MijozlarBody from "./Body/MijozlarBody";
import { Container } from "./MijozlarStyle";
import Navbar from "./Navbar";
import MijozlarContextPravider from "./MijozlarContext";

const Mijozlar = () => {
  return (
    <MijozlarContextPravider>
      <Container>
        <Navbar />
        <MijozlarBody />
      </Container>
    </MijozlarContextPravider>
  );
};

export default Mijozlar;
