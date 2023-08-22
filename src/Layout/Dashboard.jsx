import React from "react";
import { useState } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { BiSolidDashboard, BiListPlus } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";
import useInstructor from "../Hooks/useInstructor";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isInstructor] = useInstructor()
    const [open, setOpen] = useState(true);


    // const handleLogOut = () => {
    //     logOut()
    //       .then(() => {})
    //       .catch((error) => console.log(error));
    //   };

  const Menus = [
    { title: "Dashboard", icon: <BiSolidDashboard />, src: "/dashboard" },
    { title: "Add New Course", icon: <BiListPlus />, src: "/dashboard/addcourse" },
    { title: "Add New Blog", icon: <BiListPlus />, src: "/dashboard/addcourse" },
  ];
  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } p-5 pt-8 duration-300 h-screen bg-teal-600 relative`}
      >
        <BsFillArrowLeftSquareFill
          className={`text-2xl bg-teal-600  absolute cursor-pointer -right-3 top-9 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        ></BsFillArrowLeftSquareFill>
        <div className="flex items-center ">
          <img src="https://i.ibb.co/xgF8nhd/cmLogo.png" alt="" />
          <h1 className={`text-white ${!open && "scale-0"}`}>CM Academy</h1>
        </div>
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className="text-gray-300 flex items-center gap-2 cursor-pointer mx-2"
            >
            <Link to={menu.src}>  <span className="text-3xl">{menu.icon} </span>
              <span
                className={`${!open ? "hidden" : ""} origin-left duration-200`}
              >
                {menu.title}
              </span></Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Hello!{user?.displayName}</h1>
        <hr />
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
