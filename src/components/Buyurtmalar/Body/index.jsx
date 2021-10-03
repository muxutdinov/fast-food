import React from "react";
import MenuH from "../menuH";
import MenuV from "../menuV";
import { Container } from "./style";

export const Body = (props) => {
  console.log(props, "pr");
  return <Container>{props.active ? <MenuH /> : <MenuV />}</Container>;
};
export default Body;
