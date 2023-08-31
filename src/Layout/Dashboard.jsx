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
  // const [isInstructor] = useInstructor();

  
  console.log(user);
  const [open, setOpen] = useState(true);
  const isAdmin = false;

  const isInstructor = true;
const isStudent = false;


  // const handleLogOut = () => {
  //     logOut()
  //       .then(() => {})
  //       .catch((error) => console.log(error));
  //   };

  const StudentMenus = [
    {
      title: "My Courses",
      icon: <BiSolidDashboard />,
      src: "/dashboard/my-courses",
    },
    {
      title: "My Payments",
      icon: <BiListPlus />,
      src: "/dashboard/student-payment",
    },
  ];

  const AdminMenus = [
    {
      title: "Dashboard",
      icon: <BiSolidDashboard />,
      src: "/dashboard/admin-dashboard",
    },
    {
      title: "Manage Students",
      icon: <BiListPlus />,
      src: "/dashboard/manage-students",
    },
    {
      title: "All Enrolled Student",
      icon: <BiListPlus />,
      src: "/dashboard/All-enrolled-students",
    },
    {
      title: "Manage instructors",
      icon: <BiListPlus />,
      src: "/dashboard/manage-instructors",
    },
    {
      title: "Manage Course",
      icon: <BiListPlus />,
      src: "/dashboard/manage-course",
    },
    {
      title: "Withdraw Request",
      icon: <BiListPlus />,
      src: "/dashboard/withdraw-request",
    },
    {
      title: "Add New Category",
      icon: <BiListPlus />,
      src: "/dashboard/Add-category",
    },
  ];

  // ---------------------------------instructor menu----------------------
  const InstructorMenus = [
    { title: "Dashboard", icon: <BiSolidDashboard />, src: "/dashboard/instructor-dashboard" },
    {
      title: "My Courses",
      icon: <BiSolidDashboard />,
      src: "/dashboard/my-courses-instructor",
    },
    {
      title: "My Enrolled Students",
      icon: <BiListPlus />,
      src: "/dashboard/my-enrolled-students",
    },
    {
      title: "Add New Course",
      icon: <BiListPlus />,
      src: "/dashboard/add-course",
    },
    { title: "Add New Blog", icon: <BiListPlus />, src: "/dashboard/add-blog" },
    {
      title: "Payment History",
      icon: <BiListPlus />,
      src: "/dashboard/my-payments",
    },
  ];
  return (
    <div className="">
      {/* left navbar  */}

      <div className=" fixed z-10 h-full">
        <div
          className={`${
            open ? "w-72 px-5" : "md:w-24 w-0"
          }  pt-8 duration-500  bg-teal-600 h-full bg-opacity-30 backdrop-blur-md`}
        >
          <BsFillArrowLeftSquareFill
            className={`text-2xl bg-teal-600  absolute cursor-pointer -right-6 md:-right-3  top-9 ${
              !open && "rotate-180 "
            }`}
            onClick={() => setOpen(!open)}
          ></BsFillArrowLeftSquareFill>
          <div className="flex items-center ">
            <img src="https://i.ibb.co/xgF8nhd/cmLogo.png" alt="" />
            <h1 className={`text-[#195b4e] ${!open && "scale-0"}`}>
              CM Academy
            </h1>
          </div>

          <div className={` ${open ? "block duration-500" : "hidden"} `}>
            <div className="flex flex-col items-center mt-10 mb-6">
              <img
                className="rounded-xl flex h-24 w-24 mb-2 mt-2"
                src={user?.photoURL}
                alt=""
              />
              <h1
                className={`text-[#195b4e] font-semibold ${!open && "scale-0"}`}
              >
                {user?.displayName}
              </h1>
            </div>
          </div>

          <ul className="pt-6">
            {isStudent && (
              <>
                {StudentMenus.map((menu, index) => (
                  <li
                    key={index}
                    className="text-[#195b4e] font-semibold flex items-center gap-2 cursor-pointer mx-2"
                  >
                    <Link to={menu.src} className="flex my-2 ">
                      {" "}
                      <span className="text-3xl">{menu.icon} </span>
                      <span
                        className={`${
                          !open ? "hidden" : ""
                        } origin-left duration-200 `}
                      >
                        {menu.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </>
            )}
            {isAdmin && (
              <>
                {AdminMenus.map((menu, index) => (
                  <li
                    key={index}
                    className="text-[#195b4e] font-semibold flex items-center gap-2 cursor-pointer mx-2"
                  >
                    <Link to={menu.src} className="flex my-2 ">
                      {" "}
                      <span className="text-3xl">{menu.icon} </span>
                      <span
                        className={`${
                          !open ? "hidden" : ""
                        } origin-left duration-200 `}
                      >
                        {menu.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </>
            )}


            {isInstructor && (
              <>
                {InstructorMenus.map((menu, index) => (
                  <li
                    key={index}
                    className="text-[#195b4e]font-semibold flex items-center gap-2 cursor-pointer mx-2"
                  >
                    <Link to={menu.src} className="flex my-2 ">
                      {" "}
                      <span className="text-3xl">{menu.icon} </span>
                      <span
                        className={`${
                          !open ? "hidden" : ""
                        } origin-left duration-200`}
                      >
                        {menu.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="h-screen ">
        <div
          className={`p-7 text-2xl font-semibold flex-1    ${
            open ? "md:ml-72" : "md:ml-32"
          } duration-700 mx-auto  `}
        >
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
