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
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useContext(HodimlarContext);
  const onAdd = () => {
    if (name.length !== 0 && lastName.length !== 0 && age.length !== 0) {
      setData((prev) => [
        ...prev,
        {
          id: Date.now(),
          lastName: lastName,
          firstName: name,
          age: age,
        },
      ]);
      setName("");
      setLastName("");
      setAge("");
      toast.success("Hodim muvaffaqiyatli qo'shildi!")
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
          <Text>Mijoz familyasi</Text>
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </RightWrapper>
        <RightWrapper>
          <Text>Mijoz yoshi</Text>
          <Input value={age} onChange={(e) => setAge(e.target.value)} />
        </RightWrapper>
        <Saqlashbtn onClick={onAdd}>
          <SaqlashText>Saqlash</SaqlashText>
        </Saqlashbtn>
      </Right>
    </Container>
  );
};

export default Navbarqosh;
