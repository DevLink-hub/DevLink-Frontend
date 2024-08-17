import { Link } from "react-router-dom";
import K from "../constants";
import devImage from '../assets/images/dev.png';

const NavBar = () => {
  return (
    <div className="flex flex-wrap justify-between px-2 py-1 fixed w-full left-0 top-0 text-[#1F2937] font-bold items-center z-50 bg-slate-200 bg-opacity-70 sm:px-4 md:px-6 lg:px-8">
      <img src={devImage} alt="Logo" className="h-8 w-auto sm:h-10 md:h-12" />

      <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-6">
        {K.NAVLINKS.map((item, index) => (
          <Link 
            key={index} 
            to={item.path} 
            className="hover:text-[#038C7F] text-xs sm:text-sm md:text-base lg:text-lg"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
