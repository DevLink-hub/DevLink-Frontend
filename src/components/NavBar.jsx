import { Link } from "react-router-dom";
import K from "../constants";

const NavBar = () => {
  return (
    <div className="flex justify-between px-56 py-4 fixed w-full left-0 top-0 text-[#1F2937] font-bold items-center z-50 bg-slate-200">
      {/* <img src={} alt="Description" className="h-20 w-40"/> */}
      
      <div className="flex gap-x-16">
        {
          K.NAVLINKS.map(
            (item,index) => {
              return <Link key={index} to={item.path} className="hover:text-[#038C7F]">{item.name}</Link>
            }
          )
        }
      </div>
     
    </div>
  )
};

export default NavBar;