import React from "react";
import HodimlarBody from "./Body/HodimlarBody";
import { Container } from "./HodimlarStyle";
import Navbar from "./Navbar";
import HodimlarContextPravider from "./HodimlarContext";

const Hodimlar = () => {
  return (
    <HodimlarContextPravider>
      <Container>
        <Navbar />
        <HodimlarBody />
      </Container>
    </HodimlarContextPravider>
  );
};

export default Hodimlar;
