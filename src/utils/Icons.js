import { HiSearch, HiUsers } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { BiShoppingBag } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { GiPapers } from "react-icons/gi";

const Icons = ({ name, className }) => {
  switch (name) {
    case "search":
      return <HiSearch className={className} />;
    case "shopbag":
      return <BiShoppingBag className={className} />;
    case "profile":
      return <CgProfile className={className} />;
    case "star":
      return <FaStar className={className} />;
    case "students":
      return <HiUsers className={className} />;
    case "lessons":
      return <GiPapers className={className} />;
    default:
      return null;
  }
};

export default Icons;
