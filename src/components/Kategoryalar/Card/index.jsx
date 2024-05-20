import React, { useContext } from "react";
import { KategoryaCon } from "../KategoryaContext";
import { DeleteOutline } from "@material-ui/icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {
  Container,
  WrapperCon,
  Wraptext,
  Iconswrap,
  Icones,
} from "./style";

export const Card = (props) => {
  const [data, setData] = useContext(KategoryaCon);
  const onDelete = (e) => {
    setData((prev) => prev.filter((value) => value.id !== e));
    toast.success("Karta muvaffaqiyatli o'chirildi!")
  };
  return (
    <>
      <Container>
      <ToastContainer/>
      <h3>OCR va shtrix kod orqali sifatni nazorat qilish</h3>
      </Container>
    </>
  );
};
export default Card;
