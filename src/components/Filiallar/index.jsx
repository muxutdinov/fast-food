import React from "react";
import { Container } from "./Style";
import Navbar from "./Navbar";
import Body from "./Body";
import { FiliallarConPravider } from "./FiliallarCon";

const Filiallar = () => {
  return (
    <FiliallarConPravider>
      <Container>
        <Navbar />
        <Body />
      </Container>
    </FiliallarConPravider>
  );
};

export default Filiallar;
