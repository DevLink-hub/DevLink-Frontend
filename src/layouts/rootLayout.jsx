import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import NavBar from "../components/navbar";



const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;