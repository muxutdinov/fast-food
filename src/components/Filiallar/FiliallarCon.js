import { createContext, useState } from "react";

export const FiliallarContext = createContext();

export const FiliallarConPravider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Food city",
      title: "Foot city",
      narx: "Metro ro'parasi",
      kategorya: "09:00-20:00",
    },
    {
      id: 2,
      name: "Xadra meva va sabzavotlar",
      title: "Xadra meva va sabzavotlar",
      narx: "Metro yonida",
      kategorya: "09:00-20:00",
    },
    {
      id: 3,
      name: "Maksim gorkiy vegetables shop",
      title: "Maksim gorkiy vegetables shop",
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
