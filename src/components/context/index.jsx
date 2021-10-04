import React from "react";
import { Buyurtmalar } from "./Buyurtmalar/buyurtmalar";
export const MainContext = ({ children }) => {
  return (
    <div>
      <Buyurtmalar>{children}</Buyurtmalar>
    </div>
  );
};
