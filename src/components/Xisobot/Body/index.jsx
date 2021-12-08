import React from "react";
import { Container, Wrapper } from "./style";
import FeaturedInfo from '../FeaturedInfo/FeaturedInfo'
import Chart from '../Chart/Chart'

export const Body = () => {
  return (
    <Container>
      <FeaturedInfo/>
      <Chart/>
    </Container>
  );
};
