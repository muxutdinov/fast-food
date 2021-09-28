import React from "react";
import Dane from "../../Generic/Dane";
import Cancel from "../../Generic/Cancel";
import { Container, IconWrapper, Info, Wrapper, Timer, Footer } from "./style";

export const ProductCard = ({value}) => {
  return (
    <Container>
      <Wrapper>
        <Info.Number>{value.orderId}</Info.Number>
        <IconWrapper>
          <Info.Save />
        </IconWrapper>
        <Timer>
          <Info.Clock></Info.Clock>
          <Info.Text>{value.time.getHours()}:{value.time.getMinutes()}</Info.Text>
        </Timer>
      </Wrapper>
      <Wrapper flex>
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
      <Wrapper flex>
        <Footer>
          <div>
            <Info.Sum operator={"true"}>Operator</Info.Sum>
            <Info.Name>{value.operator.name}</Info.Name>
          </div>
          <Cancel />
        </Footer>
        <Footer>
          <div>
            <Info.Sum operator>Filial</Info.Sum>
            <Info.Name>{value.filial.title} <br/> {value.filial.location}</Info.Name>
          </div>
          <Dane />
        </Footer>
      </Wrapper>
    </Container>
  );
};
export default ProductCard;