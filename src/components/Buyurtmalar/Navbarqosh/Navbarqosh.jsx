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
import { BuyurtmalarContext } from "../../context/Buyurtmalar/buyurtmalar";
const Navbarqosh = () => {
  const notify = () => toast("Wow so easy!");
  const [name, setName] = useState("");
  const [phone,setPhone] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useContext(BuyurtmalarContext);

  

  const onAdd = () => {
    if (name.length !== 0 && phone.length !== 0 && age.length !== 0) {
      setData((prev) => [
        ...prev,
        {
          id: Date.now(),
          categoria: "yangi",
          orderId: 1234,
          time: new Date(),
          total: "60,400",
            user: {
              name: name,
              phone: phone,
            },
            operator: {
              name: "Komilova A",
            },
            filial: {
              title: "KFC",
              location: "Maksim Gorkiy",
            },
        },
      ]);
      setName("");
      setPhone("")
      setAge("");
       toast.error("tizimdagi texnik nosozlik")
    }
  };
  return (
    <Container>
      <ToastContainer/>
      <Left>Left</Left>
      <Right>
        <RightWrapper>
          <Title>Yangi buyurtma qo'shish</Title>
        </RightWrapper>
        <RightWrapper>
          <Text>Mijoz ismi</Text>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </RightWrapper>
        <RightWrapper>
          <Text>Mijoz telefon raqami</Text>
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />
        </RightWrapper>
        <RightWrapper>
          <Text>Izoh...</Text>
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

