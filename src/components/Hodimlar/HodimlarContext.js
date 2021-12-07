import { createContext, useState } from "react";

export const HodimlarContext = createContext();

const HodimlarContextPravider = ({ children }) => {
  const [data, setData] = useState([
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 19 },
    { id: 6, lastName: "Melisandre", firstName: "Find", age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 10, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 11, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 12, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 13, lastName: "Stark", firstName: "Arya", age: 16 },
  ]);
  return (
    <HodimlarContext.Provider value={[data, setData]}>
      {children}
    </HodimlarContext.Provider>
  );
};
export default HodimlarContextPravider;
