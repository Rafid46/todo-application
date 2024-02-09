/* eslint-disable no-unused-vars */
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import banner from "../assets/images/5603531_1881 (1).jpg";
const MainLayOut = () => {
  const location = useLocation();
  console.log(location);
  const isToDo = location.pathname === "/todo";
  return (
    <div
      className="bg-cover bg-center max-w-screen-[1200px] mx-auto"
      // style={{ backgroundImage: isToDo ? `url(${banner})` : " " }}
    >
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayOut;
