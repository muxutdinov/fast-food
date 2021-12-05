import React from "react";
import MijozlarBody from "./Body/MijozlarBody";
import { Container } from "./MijozlarStyle";
import Navbar from "./Navbar";

const Mijozlar = () => {
  return (
    <Container>
      <Navbar />
      <MijozlarBody />
    </Container>
  );
};

export default Mijozlar;
