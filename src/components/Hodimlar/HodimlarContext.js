import { createContext, useState } from "react";

export const HodimlarContext = createContext();

const HodimlarContextPravider = ({ children }) => {
  const [data, setData] = useState([
    { id: 1, ism: "Snow", familya: "Jon", lavozim: "Operator", raqam:+998999-777-66-55 },
    { id: 2, ism: "Lannister", familya: "Cersei", lavozim: "Operator", raqam:+998999-777-66-55 },
    { id: 3, ism: "Lannister", familya: "Jaime", lavozim: "Operator", raqam:+998999-777-66-55 },
    { id: 4, ism: "Stark", familya: "Arya", lavozim: "Operator" , raqam:+998999-777-66-55},
    { id: 5, ism: "Targaryen", familya: "Daenerys", lavozim: "Operator" , raqam:+998999-777-66-55},
    { id: 6, ism: "Melisandre", familya: "Find", lavozim: "Operator", raqam:+998999-777-66-55 },
    { id: 7, ism: "Clifford", familya: "Ferrara", lavozim: "Operator", raqam:+998999-777-66-55 },
    { id: 8, ism: "Frances", familya: "Rossini", lavozim: "Operator" , raqam:+998999-777-66-55},
    { id: 9, ism: "Roxie", familya: "Harvey", lavozim: "Operator" , raqam:+998999-777-66-55},
    { id: 10, ism: "Snow", familya: "Jon", lavozim: "Operator" , raqam:+998999-777-66-55},
    { id: 11, ism: "Lannister", familya: "Cersei", lavozim: "Operator", raqam:+998999-777-66-55 },
    { id: 12, ism: "Lannister", familya: "Jaime", lavozim: "Operator", raqam:+998999-777-66-55 },
    { id: 13, ism: "Stark", familya: "Arya", lavozim: "Operator" , raqam:+998999-777-66-55},
  ]);
  return (
    <HodimlarContext.Provider value={[data, setData]}>
      {children}
    </HodimlarContext.Provider>
  );
};
export default HodimlarContextPravider;
