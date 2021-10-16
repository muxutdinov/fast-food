import React from "react";
import {
  Container,
  Top,
  Topwrapbir,
  Topwrapikki,
  Topwraptort,
  Topwrapuch,
  Topwrapbesh,
  Border,
  WrapperCon,
  Wraptext,
  Iconbir,
  Iconswrap,
  Iconone,
  Icontwo,
  Icones,
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
      <Container>
        <WrapperCon>
          <Iconbir />
          <Wraptext>Lavash mini</Wraptext>
        </WrapperCon>
        <WrapperCon>
          <Wraptext>Lavash</Wraptext>
        </WrapperCon>
        <WrapperCon>
          <Wraptext>18,000 UZS</Wraptext>
        </WrapperCon>
        <WrapperCon>
          <Wraptext>Kichkina</Wraptext>
        </WrapperCon>
        <WrapperCon>
          <Iconswrap>
            <Icones>
              <Icontwo />
            </Icones>
          </Iconswrap>
          <Iconswrap>
            <Icones>
              <Iconone />
            </Icones>
          </Iconswrap>
        </WrapperCon>
      </Container>
    </>
  );
};
export default Body;
