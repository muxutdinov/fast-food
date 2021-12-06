import { createContext,useState } from "react";

export const KategoryaCon = createContext()

const KategoryaPravider = ({children})=>{
    const [data,setData] = useState([
        {
            id: 1,
            name: "Lavash mini",
            title: "Lavash",
            text: "12.000 So'm",
          },
          {
            id: 2,
            name: "Lavash Big",
            title: "Burger",
            narx: "22.000 So'm",
          },
          {
            id: 3,
            name: "Chizburger",
            title: "burger",
            narx: "33.000 So'm",
          },
          {
            id: 4,
            name: "Very big",
            title: "Lavash",
            narx: "42.000 So'm",
          },
    ])
    return(
        <KategoryaCon.Provider value={[data,setData]}>
             {children}
        </KategoryaCon.Provider>
    )
}
export default KategoryaPravider
