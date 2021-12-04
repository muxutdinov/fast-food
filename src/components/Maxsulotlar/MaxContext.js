import { createContext, useState } from "react";

export const Maxsulot = createContext()

const MaxsulotlarPravider=({children})=>{
    const [data,setData] = useState([
        {
            id: 1,
            name: "Lavash mini",
            title: "Lavash",
            narx: "12.000 So'm",
            kategorya: "mini",
          },
          {
            id: 2,
            name: "Lavash Big",
            title: "Burger",
            narx: "22.000 So'm",
            kategorya: "Big",
          },
          {
            id: 3,
            name: "Chizburger",
            title: "burger",
            narx: "33.000 So'm",
            kategorya: "narmal",
          },
          {
            id: 4,
            name: "Very big",
            title: "Lavash",
            narx: "42.000 So'm",
            kategorya: "big",
          },
          {
            id: 5,
            name: "Lavash mini",
            title: "Lavash",
            narx: "12.000 So'm",
            kategorya: "mini",
          },
          {
            id: 6,
            name: "Lavash Big",
            title: "Burger",
            narx: "22.000 So'm",
            kategorya: "Big",
          },
    ])
    return(
        <Maxsulot.Provider value={[data,setData]}>
              {children}
        </Maxsulot.Provider>
    )
}
export default MaxsulotlarPravider
