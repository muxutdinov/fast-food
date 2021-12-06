import React, { useContext } from "react";
// import Card from "../Card/index";
// import { KategoryalarContext } from "../KategoryalarContext";
import {
  Top,
  Topwrapbir,
  Topwrapikki,
  Topwraptort,
  Topwrapuch,
  Topwrapbesh,
  Border,
} from "./BodyStyle";
export const KategoryaBody = () => {
  // const [data, setData] = useContext(Maxsulot);
  return (
    <>
      <Top>
        <Topwrapbir>MAXSULOT</Topwrapbir>
        <Border />
        <Topwrapikki>KATEGORIYA</Topwrapikki>
        <Border />
        <Topwrapuch>NARXI</Topwrapuch>
        <Border />
        <Topwrapbesh>Delete</Topwrapbesh>
      </Top>
      {/* {data.map((value) => {
        return <Card key={value.id} data={value} />;
      })} */}
    </>
  );
};
export default KategoryaBody;
