import React, { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
import { FiliallarContext } from "../FiliallarCon";
const Navbarqosh = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [narx, setNarx] = useState("");
  const [kategorya, setKategorya] = useState("");
  const [data, setData] = useContext(FiliallarContext);
  const onAdd = () => {
    if (name.length !== 0 && title.length !== 0 && narx.length !== 0) {
      setData((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: name,
          title: title,
          narx: narx,
          kategorya: kategorya,
        },
      ]);
      setName("");
      setTitle("");
      setNarx("");
      setKategorya("");
      toast.success("Karta muvaffaqiyatli qo'shildi!")
    }
  };
  return (
    <Container>
      <ToastContainer/>
      <Left></Left>
      <Right>
        <RightWrapper>
          <Title>Yangi Filial qo'shish</Title>
        </RightWrapper>
        <RightWrapper>
          <Text>Filial nomi uz</Text>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </RightWrapper>
        <RightWrapper>
          <Text>Filial nomi ru</Text>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </RightWrapper>
        <RightWrapper>
          <Text>Ish vaqti</Text>
          <Input value={narx} onChange={(e) => setNarx(e.target.value)} />
        </RightWrapper>
        <RightWrapper>
          <Text>Filial mo'jal</Text>
          <Input
            value={kategorya}
            onChange={(e) => setKategorya(e.target.value)}
          />
        </RightWrapper>
        <RightWrapper>
          {/* <Text>Maxsulot rasmini yuklash</Text> */}
          {/* <Input value={narx} onChange={(e) => setNarx(e.target.value)} /> */}
        </RightWrapper>
        <Saqlashbtn onClick={onAdd}>
          <SaqlashText>Saqlash</SaqlashText>
        </Saqlashbtn>
      </Right>
    </Container>
  );
};

export default Navbarqosh;
