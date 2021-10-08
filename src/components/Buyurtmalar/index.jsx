import React, { useState } from "react";
import { Container } from './style'
import Navbar from './Navbar'
import Body from "./Body";



export const Buyurtmalar = () => {
const [active, setActive] = useState(true)
  return <Container>
    <Navbar onClick={(state)=>setActive(state)}/>
    <Body active={active} />
  </Container>;
};
export default Buyurtmalar;
