import { createContext, useState } from "react";

export const Maxsulot = createContext()

const MaxsulotlarPravider=({children})=>{
    const [data,setData] = useState([
        {
            id: 1,
            name: "Olma",
            img:"data:image/jpeg;base64,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",
            title: "Olma mini",
            narx: "12.000 So'm",
            kategorya: "mini",
          },
          {
            id: 2,
            img:"https://yukber.uz/image/cache/catalog/product/YK4385/4385-700x700.jpg",
            name: "Nok",
            title: "Nok mini",
            narx: "22.000 So'm",
            kategorya: "Big",
          },
          {
            id: 3,
            img:"https://dostavo4ka.uz/upload-file/2021/05/05/2015/b387db2b-fa91-4a3a-8f19-50ab5d2c2e9e.jpg",
            name: "Uzum",
            title: "Tog uzum",
            narx: "33.000 So'm",
            kategorya: "narmal",
          },
          {
            id: 4,
            img:"https://cdn.globalso.com/ncgce/H99ac2b7537d64484a7ed9f75117af0fbw.jpg",
            name: "Sabzi",
            title: "narmal",
            narx: "42.000 So'm",
            kategorya: "big",
          },
          {
            id: 5,
            img:"data:image/jpeg;base64,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",
            name: "Kartoshka",
            title: "Kartoshka yangi",
            narx: "12.000 So'm",
            kategorya: "mini",
          },
          {
            id: 6,
            img:"https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg?quality=90&resize=440,400",
            name: "Banan",
            title: "Banan mini",
            narx: "22.000 So'm",
            kategorya: "Big",
          },
          {
            id: 7,
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour_edit.jpg/640px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour_edit.jpg",
            name: "Kivi",
            title: "Kivi narmal",
            narx: "27.000 So'm",
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