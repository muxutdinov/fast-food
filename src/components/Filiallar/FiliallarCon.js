import { createContext, useState } from "react";

export const FiliallarContext = createContext();

export const FiliallarConPravider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Shaxriston",
      title: "Shaxriston",
      narx: "Metro ro'parasi",
      kategorya: "09:00-20:00",
    },
    {
      id: 2,
      name: "Xadra fast-food",
      title: "Xadra fast-food",
      narx: "Metro yonida",
      kategorya: "09:00-20:00",
    },
    {
      id: 3,
      name: "Maksim gorkiy",
      title: "Maksim gorkiy",
      narx: "Metro ro'parasi",
      kategorya: "09:00-20:00",
    },
  ]);
  return (
    <FiliallarContext.Provider value={[data, setData]}>
      {children}
    </FiliallarContext.Provider>
  );
};
