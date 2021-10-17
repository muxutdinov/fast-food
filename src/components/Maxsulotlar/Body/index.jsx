import React from "react";
import Card from "../Card";
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
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </>
  );
};
export default Body;
