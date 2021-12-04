import React, { useContext } from "react";
import { Maxsulot } from "../MaxContext";
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

export const Card = (props) => {
  const [data, setData] = useContext(Maxsulot);
  const onDelete = (e) => {
    setData((prev) => prev.filter((value) => value.id !== e));
  };
  return (
    <>
      <Container>
        <WrapperCon>
          <Iconbir />
          <Wraptext>{props.data.name}</Wraptext>
        </WrapperCon>
        <WrapperCon>
          <Wraptext>{props.data.title}</Wraptext>
        </WrapperCon>
        <WrapperCon>
          <Wraptext>{props.data.narx}</Wraptext>
        </WrapperCon>
        <WrapperCon>
          <Wraptext>{props.data.karegorya}</Wraptext>
        </WrapperCon>
        <WrapperCon>
          <Iconswrap>
            <Icones>
              <Icontwo />
            </Icones>
          </Iconswrap>
          <Iconswrap onClick={() => onDelete(props.data.id)}>
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
