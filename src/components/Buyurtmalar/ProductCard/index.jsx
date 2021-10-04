import React from "react";
import Dane from "../../Generic/Dane";
import Cancel from "../../Generic/Cancel";
import { Container, IconWrapper, Info, Wrapper, Timer, Footer } from "./style";
import { BuyurtmaContext } from "../../context/buyurtmalar";

export const ProductCard = ({ value }) => {
  const [card, setBuyurtmaData] = BuyurtmaContext();
  const onDane = () => {
    console.log(value.id, "value");
  };
  const onCancel = () => {
    console.log(value.id, "value");
  };
  return (
    <Container>
      <Wrapper key={value.id}>
        <Info.Number>{value.orderId}</Info.Number>
        <IconWrapper>
          <Info.Save />
        </IconWrapper>
        <Timer>
          <Info.Clock></Info.Clock>
          <Info.Text>
            {value.time.getHours()}:{value.time.getMinutes()}
          </Info.Text>
        </Timer>
      </Wrapper>
      <Wrapper flex key={value.id}>
        <Info>
          <Info.User />
          <div>
            <Info.Name>{value.user.name}</Info.Name>
            <Info.Num>{value.user.phone}</Info.Num>
          </div>
        </Info>
        <Info>
          <div className="sum">
            <Info.Sum>Umumiy summa</Info.Sum>
            <Info.Price>{value.total}</Info.Price>
          </div>
          <Info right>
            <Info.PaymeIcon />
            <Info.Payme>Payme</Info.Payme>
          </Info>
        </Info>
      </Wrapper>
      <Wrapper flex key={value.id}>
        <Footer>
          <div>
            <Info.Sum operator={"true"}>Operator</Info.Sum>
            <Info.Name>{value.operator.name}</Info.Name>
          </div>
          <div  onClick={onCancel}>
            <Cancel/>
          </div>
        </Footer>
        <Footer>
          <div>
            <Info.Sum operator>Filial</Info.Sum>
            <Info.Name>
              {value.filial.title} <br /> {value.filial.location}
            </Info.Name>
          </div>
          <div onClick={onDane}>
            <Dane />
          </div>
        </Footer>
      </Wrapper>
    </Container>
  );
};
export default ProductCard;
