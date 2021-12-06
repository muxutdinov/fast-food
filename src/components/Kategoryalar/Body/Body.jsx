import React, { useContext } from "react";
import Card from "../Card/index";
import { KategoryaCon } from "../KategoryaContext";
import {
  Top,
  Topwrapbir,
  Topwrapikki,
  Topwrapuch,
  Topwrapbesh,
  Border,
} from "./BodyStyle";
export const KategoryaBody = () => {
  const [data, setData] = useContext(KategoryaCon);
  return (
    <>
      <Top>
        <Topwrapbir>KATEGORIYA(UZ)</Topwrapbir>
        <Border />
        <Topwrapikki>KATEGORIYA(RU)</Topwrapikki>
        <Border />
        <Topwrapuch>BOSH KATEGORIYA</Topwrapuch>
        <Border />
        <Topwrapbesh>Delete</Topwrapbesh>
      </Top>
      {data.map((value) => {
        return <Card key={value.id} data={value} />;
      })}
    </>
  );
};
export default KategoryaBody;
