import React from "react";
import MenuH from '../menuH'
import MenuV from '../menuV'
import { Container } from "./style";

export const Body = (props) => {
  console.log(props, "pr");
  return (
    <Container>
      <MenuH/>
      <MenuV/>
      {/* <Wrapper>
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
      </Wrapper> */}
    </Container>
  );
};
export default Body;
