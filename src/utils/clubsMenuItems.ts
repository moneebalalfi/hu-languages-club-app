import { BsBookHalf } from "react-icons/bs";
import { MdOutlineVideoSettings, MdPostAdd, MdQuiz } from "react-icons/md";

const clubsMenuItems = [
  {
    id: 1,
    text: "Posts / Rooms",
    icon: MdPostAdd,
    href: "/clubs/english",
  },

  {
    id: 2,
    text: "Useful books",
    icon: BsBookHalf,
    href: "/clubs/english/useful-books",
  },
  {
    id: 4,
    text: "Tests",
    icon: MdQuiz,
    href: "/clubs/english/tests",
  },
  {
    id: 5,
    text: "Educational Videos",
    icon: MdOutlineVideoSettings,
    href: "/clubs/english/educational-videos",
  },
];

export default clubsMenuItems;
