import { Outlet } from "react-router-dom";
import Navbar from "./../../pages/Shared/Navbar/Navbar";
import Footer from "./../../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default Main;
