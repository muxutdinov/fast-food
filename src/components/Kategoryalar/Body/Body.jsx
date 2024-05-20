import React, { useContext } from "react";
import Card from "../Card/index";
import { KategoryaCon } from "../KategoryaContext";
import img from '../k.webp'
import {
  Top,
  Topwrapbir,
  Topwrapikki,
  Topwrapuch,
  Topwrapbesh,
  Border,
} from "./BodyStyle";
import { Icon } from "../Card/style";
export const KategoryaBody = () => {
  const [data, setData] = useContext(KategoryaCon);
  return (
    <>
      <Card />
      <div className="container">
       <img src={img} alt="" />
      </div>
    </>
  );
};
export default KategoryaBody;
