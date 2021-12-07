import React, { useContext, useState } from "react";
import {
  Container,
  Left,
  Right,
  RightWrapper,
  Title,
  Text,
  Input,
  RightLast,
  Saqlash,
  Saqlashbtn,
  SaqlashText,
} from "./NavbarqoshStyle";
import { KategoryaCon } from "../KategoryaContext";
const Navbarqosh = () => {
  const [nameuz, setNameuz] = useState("");
  const [nameru, setNameru] = useState("");
  const [text, setText] = useState("");
  // const [kategorya, setKategorya] = useState("");
  const [data, setData] = useContext(KategoryaCon);
  const onAdd = () => {
    if (nameuz.length !== 0 && nameru.length !== 0) {
      setData((prev) => [
        ...prev,
        {
          id: data.length + 1,
          nameuz: nameuz,
          nameru: nameru,
          text: text,
        },
      ]);
      setNameuz("")
      setNameru("")
      setText("")
    }
  };
  return (
    <Container>
      <Left></Left>
      <Right>
        <RightWrapper>
          <Title>Yangi kategorya qo'shish</Title>
        </RightWrapper>
        <RightWrapper>
          <Text>Kategorya(uz)</Text>
          <Input value={nameuz} onChange={(e) => setNameuz(e.target.value)} />
        </RightWrapper>
        <RightWrapper>
          <Text>Kategorya(ru)</Text>
          <Input value={nameru} onChange={(e) => setNameru(e.target.value)} />
        </RightWrapper>
        <RightWrapper>
          <Text>Bosh Kategorya</Text>
          <Input value={text} onChange={(e) => setText(e.target.value)} />
        </RightWrapper>
        <Saqlashbtn onClick={onAdd}>
          <SaqlashText>Saqlash</SaqlashText>
        </Saqlashbtn>
      </Right>
    </Container>
  );
};

export default Navbarqosh;
