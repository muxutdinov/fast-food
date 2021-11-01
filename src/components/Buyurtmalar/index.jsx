import React, { useState } from "react";
import { Container } from "./style";
import Navbar from "./Navbar";
import Body from "./Body";

export const Buyurtmalar = () => {
  const [active, setActive] = useState("Yangi");
  const [disign, setDisign] = useState(true);
  return (
    <Container>
      <Navbar
        isActive={active}
        setActive={(state) => setActive(state)}
        onClick={(s) => setDisign(s)}
      />
      <Body active={active} disign={disign} />
    </Container>
  );
};
export default Buyurtmalar;
