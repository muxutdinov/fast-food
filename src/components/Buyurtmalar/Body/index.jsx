import React from "react";
import MenuH from "../menuH";
import MenuV from "../menuV";

export const Body = (props) => {
  return props.disign ? <MenuV  active={props.active}/> : <MenuH  />;
};
export default Body;
