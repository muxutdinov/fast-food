import React from "react";
import MenuH from "../menuH";
import MenuV from "../menuV";

export const Body = (props) => {
  return props.active ? <MenuH /> : <MenuV />
};
export default Body;

