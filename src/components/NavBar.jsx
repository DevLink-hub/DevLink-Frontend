import { Link } from "react-router-dom";
import K from "../constants";
import devImage from '../assets/images/dev.png';

const NavBar = () => {
  return (
    <div className="flex flex-wrap justify-between px-4 py-2 fixed w-full left-0 top-0 text-[#e9ecf0] font-bold items-center z-50 bg-black bg-opacity-70">
      <img src={devImage} alt="Logo" className="h-8 sm:h-10 md:h-12" />

      <div className="flex flex-wrap gap-4">
        {K.NAVLINKS.map((item, index) => (
          <Link 
            key={index} 
            to={item.path} 
            className="hover:text-[#038C7F] text-sm md:text-base"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
