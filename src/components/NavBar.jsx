import { Link } from "react-router-dom";
import K from "../constants";

const NavBar = () => {
  return (
    <div className="flex flex-wrap justify-between px-4 py-4 fixed w-full left-0 top-0 text-[#1F2937] font-bold items-center z-50 bg-slate-200 sm:px-8 md:px-16 lg:px-32 xl:px-56">
      {/* <img src={} alt="Description" className="h-20 w-40"/> */}
      
      <div className="flex flex-wrap gap-4 sm:gap-8 md:gap-12 lg:gap-16">
        {
          K.NAVLINKS.map(
            (item, index) => (
              <Link 
                key={index} 
                to={item.path} 
                className="hover:text-[#038C7F] text-sm sm:text-base md:text-lg lg:text-xl"
              >
                {item.name}
              </Link>
            )
          )
        }
      </div>
    </div>
  )
};

export default NavBar;
