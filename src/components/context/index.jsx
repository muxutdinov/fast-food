import React from "react";
import { Buyurtmalar } from "./buyurtmalar";
export const MainContext = ({ children }) => {
  return (
    <div>
      <Buyurtmalar>{children}</Buyurtmalar>
    </div>
  );
};
