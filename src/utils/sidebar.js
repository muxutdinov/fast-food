import Buyurtmalar from "../page/Buyurtmalar";
import Xaritaa from "../page/Xarita";
import Maxsulotlar from "../page/Maxsulotlar";
import Xisobots from "../page/Xisobot";
import Catalog from "../page/Katalog";
import Mijozlarr from "../page/Mijozlar";
import Filiallarr from '../page/Filiallar'
import Kategorya from "../page/Kategoryalar";
import Hodimlarr from "../page/Hodimlarr";
//=== Icons
import { ReactComponent as buyurtmalar } from "../assets/icons/buyurtmalar.svg";
import { ReactComponent as filial } from "../assets/icons/filial.svg";
import { ReactComponent as hisobot } from "../assets/icons/hisobot.svg";
import { ReactComponent as katigoriya } from "../assets/icons/katigoriya.svg";
import { ReactComponent as maxsulotlar } from "../assets/icons/maxsulotlar.svg";
import { ReactComponent as mijozlar } from "../assets/icons/mijozlar.svg";
import { ReactComponent as hodimlar } from "../assets/icons/settings.svg";
import { ReactComponent as settings } from "../assets/icons/settings.svg";

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
    Component: Maxsulotlar,
    Icon: maxsulotlar,
    hidden: false,
  },
  // {
  //   id: 3,
  //   path: "/katigoriya",
  //   title: "Katigoriya",
  //   Component: Kategorya,
  //   Icon: katigoriya,
  //   hidden: false,
  // },
  {
    id: 4,
    path: "/filial",
    title: "Filiallar",
    Component: Filiallarr,
    Icon: filial,
    hidden: false,
  },
  {
    id: 5,
    path: "/mijozlar",
    title: "Mijozlar",
    Component: Mijozlarr,
    Icon: mijozlar,
    hidden: false,
  },
  {
    id: 6,
    path: "/hisobot",
    title: "Xisobot",
    Component: Xisobots,
    Icon: hisobot,
    hidden: false,
  },
  {
    id: 7,
    path: "/hodimlar",
    title: "Hodimlar",
    Component: Hodimlarr,
    Icon: hodimlar,
    hidden: false,
  },
  {
    id: 8,
    path: "/xarita",
    title: "Xarita",
    Component: Xaritaa,
    Icon: settings,
    hidden: false,
  },
  {
    id: 9,
    path: "/katalog",
    title: "Katalog",
    Component: Catalog,
    Icon: settings,
    hidden: false,
  },
];
