import React from "react";
import MenuH from "../menuH";
import MenuV from "../menuV";

export const Body = (props) => {
  console.log(props, "pr");
  return props.active ? <MenuH /> : <MenuV />
};
export default Body;
