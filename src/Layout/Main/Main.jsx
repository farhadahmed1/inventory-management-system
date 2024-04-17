import { Outlet } from "react-router-dom";
import Home from "../../pages/HomePage/Home/Home";
import Navbar from "./../../pages/Shared/Navbar/Navbar";
import Footer from "./../../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default Main;
