import React, { useContext } from "react";
import Card from "../Card";
import { Maxsulot } from "../MaxContext";
import {
  Top,
  Topwrapbir,
  Topwrapikki,
  Topwraptort,
  Topwrapuch,
  Topwrapbesh,
  Border,
} from "./style";
export const Body = () => {
  const [data, setData] = useContext(Maxsulot);
  return (
    <>
      <Top>
        <Topwrapbir>MAXSULOT</Topwrapbir>
        <Border />
        <Topwrapikki>KATEGORIYA</Topwrapikki>
        <Border />
        <Topwrapuch>NARXI</Topwrapuch>
        <Border />
        <Topwraptort>QOSHIMCHA</Topwraptort>
        <Border />
        <Topwrapbesh>ACTION</Topwrapbesh>
      </Top>
      {data.map((value) => {
        return <Card key={value.id} data={value} />;
      })}
    </>
  );
};
export default Body;
