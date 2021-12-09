import { createContext, useState } from "react";

export const MijozlarContext = createContext();

const MijozlarContextPravider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Snow",
      tel: "+99899 123 45 67",
      soni: 35,
      status: "Active",
    },
    {
      id: 3,
      name: "Lannister",
      tel: "+99899 123 45 67",
      soni: 45,
      status: "Active",
    },
    {
      id: 4,
      name: "Stark",
      tel: "+99899 123 45 67",
      soni: 16,
      status: "Block",
    },
    {
      id: 5,
      name: "Targaryen",
      tel: "+99899 123 45 67",
      soni: 19,
      status: "Active",
    },
    {
      id: 2,
      name: "Lannister",
      tel: "+99899 123 45 67",
      soni: 42,
      status: "Active",
    },
    {
      id: 6,
      name: "Melisandre",
      tel: "+99899 123 45 67",
      soni: 150,
      status: "Block",
    },
    {
      id: 7,
      name: "Clifford",
      tel: "+99899 123 45 67",
      soni: 44,
      status: "Active",
    },
    {
      id: 8,
      name: "Frances",
      tel: "+99899 123 45 67",
      soni: 36,
      status: "Block",
    },
    {
      id: 9,
      name: "Roxie",
      tel: "+99899 123 45 67",
      soni: 65,
      status: "Block",
    },
    {
      id: 10,
      name: "Snow",
      tel: "+99899 123 45 67",
      soni: 35,
      status: "Block",
    },
    {
      id: 11,
      name: "Lannister",
      tel: "+99899 123 45 67",
      soni: 42,
      status: "Active",
    },
    {
      id: 12,
      name: "Lannister",
      tel: "+99899 123 45 67",
      soni: 45,
      status: "Active",
    },
    {
      id: 13,
      name: "Stark",
      tel: "+99899 123 45 67",
      soni: 16,
      status: "Block",
    },
  ]);
  return (
    <MijozlarContext.Provider value={[data, setData]}>
      {children}
    </MijozlarContext.Provider>
  );
};
export default MijozlarContextPravider;
