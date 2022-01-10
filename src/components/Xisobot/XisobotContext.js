import { createContext,useState } from "react";

export const XisobotCon = createContext()

const XisobotPravider = ({children})=>{
    const [data,setData] = useState([
        {
          name: "Jan",
          Active: 3000,
        },
        {
          name: "Feb",
          Active: 4000,
        },
        {
          name: "Mar",
          Active: 3000,
        },
        {
          name: "Apr",
          Active: 2000,
        },
        {
          name: "May",
          Active: 1000,
        },
        {
          name: "Jun",
          Active: 4000,
        },
        {
          name: "Jul",
          Active: 2000,
        },
        {
          name: "Agu",
          Active: 3000,
        },
        {
          name: "Sep",
          Active: 4000,
        },
        {
          name: "Oct",
          Active: 1000,
        },
        {
          name: "Nov",
          Active: 4000,
        },
        {
          name: "Dec",
          Active: 2000,
        },
      ])
    return(
        <XisobotCon.Provider value={[data,setData]}>
           {children}
        </XisobotCon.Provider>
    )
}

export default XisobotPravider