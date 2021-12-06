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
} from "./Navbarqosh";
import { MijozlarContext } from "../MijozlarContext";
const Navbarqosh = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useContext(MijozlarContext);
  const onAdd = () => {
    if ((name.length !== 0 && lastName.length !== 0, age.length !== 0)) {
      setData((prev) => [
        ...prev,
        {
          id: data.length + 1,
          lastName: lastName,
          firstName: name,
          age: age,
        },
        // setName(""),
        // setLastName(""),
        // setAge("")
    ]);
}
};
  return (
    <Container>
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
