import { Link } from "react-router-dom";
import K from "../constants";
import logoImage from '../assets/images/logo.png';

const NavBar = () => {
  return (
    <div className="flex flex-wrap justify-between px-4 py-2 fixed w-full left-0 top-0 text-[#1F2937] font-bold items-center z-50 bg-slate-200 sm:px-6 md:px-8 lg:px-12">
      <img src={logoImage} alt="Logo" className="h-12 w-auto sm:h-16 md:h-20" />

      <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
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
