import { createContext, useState } from "react";

export const KategoryaCon = createContext();

const KategoryaPravider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      nameuz: "Lavash mini",
      nameru: "Lavash",
      text: "Ichimliklar",
    },
    {
      id: 2,
      nameuz: "Lavash Big",
      nameru: "Burger",
      text: "burgerlar",
    },
    {
      id: 3,
      nameuz: "Chizburger",
      nameru: "burger",
      text: "Ichimliklar",
    },
    {
      id: 4,
      nameuz: "Very big",
      nameru: "Lavash",
      text: "Ichimliklar",
    },
  ]);
  return (
    <KategoryaCon.Provider value={[data, setData]}>
      {children}
    </KategoryaCon.Provider>
  );
};
export default KategoryaPravider;
