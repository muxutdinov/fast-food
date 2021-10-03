import React, { createContext, useContext, useState } from "react";
import { card } from "../../mock/card";


export const BuyurtmalarContext = createContext();
export const BuyurtmaContext = ()=> useContext(BuyurtmalarContext)

export const Buyurtmalar = ({ children }) => {
    const [buyurtmaData, setBuyurtmaData] = useState(card)
  return <BuyurtmalarContext.Provider value={[buyurtmaData, setBuyurtmaData]}>{children}</BuyurtmalarContext.Provider>;
};
