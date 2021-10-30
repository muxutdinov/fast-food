import React from "react";
import { Container, Wrapper } from "./style";
import LineChart from "../Chart/LineChart";

export const Body = () => {
  return (
    <Container>
      <Wrapper>
        <LineChart />
        <LineChart />
      </Wrapper>
      <Wrapper>
        <LineChart />
        <LineChart />
      </Wrapper>
      <Wrapper>
        <LineChart />
        <LineChart />
      </Wrapper>
    </Container>
  );
};
