import React from "react";
import ProductCard from "../ProductCard";
import { card } from "../../../mock/card";
import { Container, Wrapper } from "./style";

export const Body = () => {
  return (
    <Container>
      <h1>MenuV</h1>
      <Wrapper>
        {card.yangi.map((value) => (
          <ProductCard key={value.id} value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.Qabul.map((value) => (
          <ProductCard key={value.id} value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.jonatilgan.map((value) => (
          <ProductCard key={value.id} value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.yopilgan.map((value) => (
          <ProductCard key={value.id} value={value} />
        ))}
      </Wrapper>
    </Container>
  );
};
export default Body;
