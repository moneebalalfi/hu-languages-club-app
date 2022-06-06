import { TSideBarItem } from "@/types";
import { FaUsersCog } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { MdArticle } from "react-icons/md";

const sideBarItems: TSideBarItem[] = [
  // {
  //   id: 1,
  //   title: "App Overview",
  //   pathName: "/",
  //   icon: MdOutlineAppRegistration,
  // },
  {
    id: 2,
    title: "Users manager",
    pathName: "users-manager",
    icon: FaUsersCog,
  },
  {
    id: 3,
    title: "Clubs manager",
    pathName: "clubs-manager",
    icon: BiCategory,
  },
  {
    id: 4,
    title: "Posts manager",
    pathName: "posts-manager",
    icon: MdArticle,
  },
];

export default sideBarItems;
