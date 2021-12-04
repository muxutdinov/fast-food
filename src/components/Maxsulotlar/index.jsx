import React from "react";
import Navbar from "./Navbar";
import Body from "../Maxsulotlar/Body";
import MaxsulotlarPravider from "./MaxContext";
export const Maxsulotlar = () => {
  return (
    <div>
      <MaxsulotlarPravider>
        <Navbar />
        <Body />
      </MaxsulotlarPravider>
    </div>
  );
};
export default Maxsulotlar;
