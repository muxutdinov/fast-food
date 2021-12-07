import React, { useContext } from "react";
import Card from "../Card";
import { FiliallarContext } from "../FiliallarCon";
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
  const [data, setData] = useContext(FiliallarContext);
  return (
    <>
      <Top>
        <Topwrapbir>FILIAL NOMI(UZ)</Topwrapbir>
        <Border />
        <Topwrapikki>FILIAL NOMI(UR)</Topwrapikki>
        <Border />
        <Topwrapuch>MO'JAL</Topwrapuch>
        <Border />
        <Topwraptort>ISH VAQTI</Topwraptort>
        <Border />
        <Topwrapbesh>Delete</Topwrapbesh>
      </Top>
      {data.map((value) => {
        return <Card key={value.id} data={value} />;
      })}
    </>
  );
};
export default Body;
