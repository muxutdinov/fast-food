import React, { useContext } from "react";
import { Maxsulot } from "../MaxContext";
import { DeleteOutline } from "@material-ui/icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {
  Container,
  WrapperCon,
  Icon,
  Wraptext,
  Iconswrap,
  Icones,
} from "./style";

export const Card = (props) => {
  const [data, setData] = useContext(Maxsulot);
  const onDelete = (e) => {
    setData((prev) => prev.filter((value) => value.id !== e));
    toast.success("Maxsulot muvaffaqiyatli o'chirildi!")
  };
  return (
    <>
      <Container>
      <ToastContainer/>
        <WrapperCon>
          <Icon src={props.data.img} />
          <Wraptext>{props.data.name}</Wraptext>
        </WrapperCon>
        <WrapperCon>
          <Wraptext>{props.data.title}</Wraptext>
        </WrapperCon>
        <WrapperCon>
          <Wraptext>{props.data.narx}</Wraptext>
        </WrapperCon>
        <WrapperCon>
          <Wraptext>{props.data.karegorya}</Wraptext>
        </WrapperCon>
        <WrapperCon>
          <Iconswrap onClick={() => onDelete(props.data.id)}>
            <Icones>
              <DeleteOutline className="maxsulotDelete"/>
            </Icones>
          </Iconswrap>
        </WrapperCon>
      </Container>
    </>
  );
};
export default Card;
