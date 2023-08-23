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
    // const [isInstructor] = useInstructor()
    const [open, setOpen] = useState(true);
    const isAdmin = false;
    const isInstructor = true;


    // const handleLogOut = () => {
    //     logOut()
    //       .then(() => {})
    //       .catch((error) => console.log(error));
    //   };

  const AdminMenus = [
    { title: "Dashboard", icon: <BiSolidDashboard />, src: "/dashboard/admin-dashboard" },
    { title: "Manage Students", icon: <BiListPlus />, src: "/dashboard/manage-students" },
    { title: "All Enrolled Student", icon: <BiListPlus />, src: "/dashboard/All-enrolled-students" },
    { title: "Manage instructors", icon: <BiListPlus />, src: "/dashboard/manage-instructors" },
    { title: "Manage Course", icon: <BiListPlus />, src: "/dashboard/manage-course" },
    { title: "Withdraw Request", icon: <BiListPlus />, src: "/dashboard/withdraw-request" },
    { title: "Add New Category", icon: <BiListPlus />, src: "/dashboard/Add-category" },
  ];

  // ---------------------------------instructor menu----------------------
  const InstructorMenus = [
    { title: "Dashboard", icon: <BiSolidDashboard />, src: "/dashboard" },
    { title: "My Courses", icon: <BiSolidDashboard />, src: "/dashboard/my-courses" },
    { title: "My Enrolled Students", icon: <BiListPlus />, src: "/dashboard/my-enrolled-students" },
    { title: "Add New Course", icon: <BiListPlus />, src: "/dashboard/add-course" },
    { title: "Add New Blog", icon: <BiListPlus />, src: "/dashboard/add-blog" },
    { title: "Payment History", icon: <BiListPlus />, src: "/dashboard/my-payments" },
  ];
  return (
    <div className="flex">
      {/* left navbar  */}
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
        {
          isAdmin &&  
          (
           <>
            {AdminMenus.map((menu, index) => (
            <li
              key={index}
              className="text-gray-300 flex items-center gap-2 cursor-pointer mx-2"
            >
            <Link to={menu.src} className="flex my-2 ">  <span className="text-3xl">{menu.icon} </span>
              <span
                className={`${!open ? "hidden" : ""} origin-left duration-200`}
              >
                {menu.title}
              </span></Link>
            </li>
          ))}
           </>
          )
        }
          {
          isInstructor &&  
          (
           <>
            {InstructorMenus.map((menu, index) => (
            <li
              key={index}
              className="text-gray-300 flex items-center gap-2 cursor-pointer mx-2"
            >
            <Link to={menu.src} className="flex my-2 ">  <span className="text-3xl">{menu.icon} </span>
              <span
                className={`${!open ? "hidden" : ""} origin-left duration-200`}
              >
                {menu.title}
              </span></Link>
            </li>
          ))}
           </>
          )
        }

        </ul>
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 ">
        <h1>Hello!{user?.displayName}</h1>
        <hr />
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
