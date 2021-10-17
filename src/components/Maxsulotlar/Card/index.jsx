import React from "react";
import {
  Container,
  WrapperCon,
  Iconbir,
  Wraptext,
  Iconswrap,
  Icones,
  Icontwo,
  Iconone,
} from "./style";
export const Card = () => {
  return (
    <>
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
export default Card;
