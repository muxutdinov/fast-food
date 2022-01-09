import React from 'react';
import Done from '../../Generic/Dane';
import Cancel from '../../Generic/Cancel';
import { Container, Footer, IconWrapper, Info, Timer, Wrapper } from './style';
import { BuyurtmaContext } from '../../context/Buyurtmalar/buyurtmalar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProductCard = ({ value }) => {
  const [,dispatch] = BuyurtmaContext();

  const onCancel = (value) => {
    dispatch({ type: 'delete', payload: value });
    toast.success("Karta muvaffaqiyatli o'chirildi!")
  };
  const onDone = (value) => {
    console.log(value, 'done');
  };
  return (
    <Container>
      <ToastContainer/>
      <Wrapper>
        <Info.OrderID>{value.orderId}</Info.OrderID>
        <IconWrapper>
          <Info.Save />
        </IconWrapper>
        <Timer>
          <Info.Clock />
          <Info.Text>{`${value.time.getHours()}: ${value.time.getMinutes()}`}</Info.Text>
        </Timer>
      </Wrapper>
      <Wrapper flex>
        <Info>
          <Info.User />
          <div>
            <Info.Name>{value.user.name}</Info.Name>
            <Info.Nuber>{value.user.phone}</Info.Nuber>
          </div>
        </Info>
        <Info center>
          <div>
            <Info.Total top>Umumiy Summa</Info.Total>
            <Info.Price>{value.total} UZS</Info.Price>
          </div>
          <Info end={'true'}>
            <Info.PaymeIcon />
            <Info.Payme>Payme</Info.Payme>
          </Info>
        </Info>
      </Wrapper>
      <Wrapper flex last>
        <Footer>
          <div>
            <Info.Total>Operator</Info.Total>
            <Info.Name>{value.operator.name}</Info.Name>
          </div>
          <div onClick={() => onCancel(value)}>
            <Cancel />
          </div>
        </Footer>
        <Footer>
          <div>
            <Info.Total>Filiall</Info.Total>
            <Info.Name>
              {value.filial.title} <br /> {value.filial.location}
            </Info.Name>
          </div>
          <div onClick={() => onDone(value)}>
            <Done />
          </div>
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default ProductCard;
