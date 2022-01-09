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
import { MijozlarContext } from "../MijozlarContext";
const Navbarqosh = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [soni, setSoni] = useState("");
  const [data, setData] = useContext(MijozlarContext);
  const onAdd = () => {
    if (name.length !== 0 && tel.length !== 0 && soni.length !== 0) {
      setData((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: name,
          tel: tel,
          soni: soni,
          status:"Active"
        },
      ]);
      setName("");
      setTel("");
      setSoni("");
      toast.success("Karta muvaffaqiyatli qo'shildi!")
    }
  };
  return (
    <Container>
      <ToastContainer/>
      <Left>Left</Left>
      <Right>
        <RightWrapper>
          <Title>Yangi mijoz qo'shish</Title>
        </RightWrapper>
        <RightWrapper>
          <Text>Mijoz ismi</Text>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </RightWrapper>
        <RightWrapper>
          <Text>telefon raqami</Text>
          <Input
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </RightWrapper>
        <RightWrapper>
          <Text>buyurtma soni</Text>
          <Input value={soni} onChange={(e) => setSoni(e.target.value)} />
        </RightWrapper>
        <Saqlashbtn onClick={onAdd}>
          <SaqlashText>Saqlash</SaqlashText>
        </Saqlashbtn>
      </Right>
    </Container>
  );
};

export default Navbarqosh;
