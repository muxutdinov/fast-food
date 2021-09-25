import Generic from "../page/Generic";
import Buyurtmalar from "../page/Buyurtmalar";

//=== Icons
import {ReactComponent as buyurtmalar} from "../assets/icons/buyurtmalar.svg";
import {ReactComponent as filial} from "../assets/icons/filial.svg";
import {ReactComponent as hisobot} from "../assets/icons/hisobot.svg";
import {ReactComponent as katigoriya} from "../assets/icons/katigoriya.svg";
import {ReactComponent as maxsulotlar} from "../assets/icons/maxsulotlar.svg";
import {ReactComponent as mijozlar} from "../assets/icons/mijozlar.svg";
import {ReactComponent as hodimlar} from "../assets/icons/settings.svg";
import {ReactComponent as settings} from "../assets/icons/settings.svg";

export const sidebar = [
  {
    id: 1,
    path: "/",
    title: "Buyurtmalar",
    Component: Buyurtmalar,
    Icon: buyurtmalar,
    hidden: true,
  },
  
  {
    id: 2,
    path: "/maxsulatlar",
    title: "Maxsulotlar",
    Component: Generic,
    Icon: maxsulotlar,
    hidden: false,
  },
  {
    id: 3,
    path: "/katigoriya",
    title: "Katigoriya",
    Component: Generic,
    Icon: katigoriya,
    hidden: false,
  },
  {
    id: 4,
    path: "/filial",
    title: "Filiallar",
    Component: Generic,
    Icon: filial,
    hidden: false,
  },
  {
    id: 5,
    path: "/mijozlar",
    title: "Mijozlar",
    Component: Generic,
    Icon: mijozlar,
    hidden: false,
  },
  {
    id: 6,
    path: "/hisobot",
    title: "Xisobot",
    Component: Generic,
    Icon: hisobot,
    hidden: false,
  },
  {
    id: 7,
    path: "/hodimlar",
    title: "Hodimlar",
    Component: Generic,
    Icon: hodimlar,
    hidden: false,
  },
  {
    id: 8,
    path: "/katalog",
    title: "Katalog",
    Component: Generic,
    Icon: settings,
    hidden: false,
  },
];