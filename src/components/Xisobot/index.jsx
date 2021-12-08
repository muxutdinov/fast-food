import React from "react";
import Navbar from "./Navbar";
import { Body } from "./Body";
import { Container } from "./style";
import XisobotPravider from "./XisobotContext";

export const Xisobot = () => {
  return (
    <XisobotPravider>
      <Container>
        <Navbar />
        <Body />
      </Container>
    </XisobotPravider>
  );
};
export default Xisobot;
