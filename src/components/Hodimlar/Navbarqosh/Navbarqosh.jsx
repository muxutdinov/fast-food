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
} from "./Navbarqosh";
import { HodimlarContext } from "../HodimlarContext";
const Navbarqosh = () => {
  const [ism, setIsm] = useState("");
  const [familya, setFamilya] = useState("");
  const [lavozim, setLavozim] = useState("");
  const [raqam, setRaqam] = useState("");
  const [data, setData] = useContext(HodimlarContext);
  const onAdd = () => {
    if (ism.length !== 0 && familya.length !== 0 && lavozim.length !== 0 && raqam.length !== 0) {
      setData((prev) => [
        ...prev,
        {
          id: Date.now(),
          ism: ism,
          familya: familya,
          lavozim: lavozim,
          raqam: raqam,
        },
      ]);
      setIsm("");
      setFamilya("");
      setLavozim("");
      setRaqam("");
      toast.success("Hodim muvaffaqiyatli qo'shildi!")
    }
  };
  return (
    <Container>
      <ToastContainer/>
      <Left>Left</Left>
      <Right>
        <RightWrapper>
          <Title>Yangi hodim qo'shish</Title>
        </RightWrapper>
        <RightWrapper>
          <Text>hodim ismi</Text>
          <Input value={ism} onChange={(e) => setIsm(e.target.value)} />
        </RightWrapper>
        <RightWrapper>
          <Text>hodim familyasi</Text>
          <Input
            value={familya}
            onChange={(e) => setFamilya(e.target.value)}
          />
        </RightWrapper>
        <RightWrapper>
          <Text>hodim lavozim</Text>
          <Input value={lavozim} onChange={(e) => setLavozim(e.target.value)} />
        </RightWrapper>
        <RightWrapper>
          <Text>hodim raqami</Text>
          <Input value={raqam} onChange={(e) => setRaqam(e.target.value)} />
        </RightWrapper>
        <Saqlashbtn onClick={onAdd}>
          <SaqlashText>Saqlash</SaqlashText>
        </Saqlashbtn>
      </Right>
    </Container>
  );
};

export default Navbarqosh;
