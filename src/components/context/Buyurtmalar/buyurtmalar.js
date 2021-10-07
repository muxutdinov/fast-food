import React, { createContext, useContext, useReducer, useState } from "react";
import { card } from "../../../mock/card";
import { reducer } from "./reducer";

export const BuyurtmalarContext = createContext();
export const BuyurtmaContext = () => useContext(BuyurtmalarContext);

export const Buyurtmalar = ({ children }) => {
  const [data,setData] = useState(card)
  return (
    <BuyurtmalarContext.Provider value={[data,setData]}>
      {children}
    </BuyurtmalarContext.Provider>
  );
};
