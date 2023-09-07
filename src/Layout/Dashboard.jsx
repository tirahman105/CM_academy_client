import React, { useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import {
  BiSolidDashboard,
  BiListPlus,
  BiLogOut,
  BiMoneyWithdraw,
} from "react-icons/bi";
import { RiContactsFill } from "react-icons/ri";
import {
  MdOutlinePayments,
  MdManageAccounts,
  MdAccountBalance,
  MdOutlinePostAdd,
  MdOutlineGroup,
} from "react-icons/md";
import { PiFileVideo, PiStudentBold } from "react-icons/pi";
import { LuFileCog } from "react-icons/lu";
import { GrChapterAdd } from "react-icons/gr";
import { CgNotes, CgProfile } from "react-icons/cg";
import DashboardTopNav from "../Pages/Dashboard/Shared/DashboardTopNav/DashboardTopNav";
import useInstructor from "../Hooks/useInstructor";
import useStudent from "../Hooks/useStudent";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isInstructor] = useInstructor();
  const [isStudent] = useStudent();
  const [isAdmin] = useAdmin();
  const [open, setOpen] = useState(true);

  console.log(
    "isAdmin",
    isAdmin,
    "isInstructor",
    isInstructor,
    "isStudent",
    isStudent
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const StudentMenus = [
    {
      title: "My Courses",
      icon: <PiFileVideo />,
      src: "/dashboard/my-courses",
    },
    {
      title: "My Payments",
      icon: <MdOutlinePayments />,
      src: "/dashboard/student-payment",
    },
    {
      title: "My Profile",
      icon: <RiContactsFill />,
      src: "/dashboard/student-profile",
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
      icon: <MdManageAccounts />,
      src: "/dashboard/manage-students",
    },
    {
      title: "All Enrolled Student",
      icon: <PiStudentBold />,
      src: "/dashboard/All-enrolled-students",
    },
    {
      title: "Manage instructors",
      icon: <MdManageAccounts />,
      src: "/dashboard/manage-instructors",
    },
    {
      title: "Manage Course",
      icon: <LuFileCog />,
      src: "/dashboard/manage-course",
    },
    {
      title: "Withdraw Request",
      icon: <BiMoneyWithdraw />,
      src: "/dashboard/withdraw-request",
    },
    {
      title: "Add New Category",
      icon: <BiListPlus />,
      src: "/dashboard/Add-category",
    },
  ];

  const InstructorMenus = [
    {
      title: "Dashboard",
      icon: <BiSolidDashboard />,
      src: "/dashboard/instructor-dashboard",
    },
    {
      title: "My Profile",
      icon: <CgProfile />,
      src: "/dashboard/instructor-profile",
    },
    {
      title: "My Courses",
      icon: <CgNotes />,
      src: "/dashboard/my-courses-instructor",
    },
    {
      title: "My Enrolled Students",
      icon: <MdOutlineGroup />,
      src: "/dashboard/my-enrolled-students",
    },
    {
      title: "Add New Course",
      icon: <GrChapterAdd />,
      src: "/dashboard/add-course",
    },
    {
      title: "My Blogs",
      icon: <CgNotes />,
      src: "/dashboard/my-blogs",
    },
    {
      title: "Add New Blog",
      icon: <MdOutlinePostAdd />,
      src: "/dashboard/add-blog",
    },
    {
      title: "Payment Account Setup",
      icon: <MdAccountBalance />,
      src: "/dashboard/acc-setup",
    },
    {
      title: "Payment History",
      icon: <MdOutlinePayments />,
      src: "/dashboard/my-payments",
    },
    {
      title: "Withdraw History",
      icon: <MdOutlinePayments />,
      src: "/dashboard/withdraw-history",
    },
  ];

  return (
    <div className="">
      <div
        className={`fixed z-10 h-0 py-4 duration-500 ${
          open ? "translate-x-0 h-full" : "-translate-x-full "
        }`}
      >
        <div
          className={`${
            open ? "w-72 px-5" : "md:w-24 w-0"
          } pt-8 duration-500  bg-teal-600 shadow-lg rounded-xl ml-4 h-full bg-opacity-30 backdrop-blur-md transform translate-x-0 md:translate-x-0 `}
        >
          <BsFillArrowLeftSquareFill
            className={`text-2xl absolute cursor-pointer -right-6 md:-right-3 top-9 ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          ></BsFillArrowLeftSquareFill>
          <div className="flex items-center ">
            <img src="https://i.ibb.co/xgF8nhd/cmLogo.png" alt="" />
            <Link to="/">
              {" "}
              <h1 className={`text-[#195b4e] ${!open && "scale-0"}`}>
                CM Academy
              </h1>
            </Link>
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
                <hr className="my-10" />
                <button
                  onClick={handleLogOut}
                  className="text-gray-700 flex gap-3 items-center font-Raleway border-2 font-bold py-2 rounded-xl px-4 css-selector hover:border-[#1bbf7246] duration-500 hover:bg-[#1bbf7249] hover:text-gray-600 shadow-md "
                >
                  <BiLogOut className="text-3xl"></BiLogOut>
                  <span
                    className={`${
                      !open ? "hidden" : ""
                    } origin-left duration-200 `}
                  >
                    Logout
                  </span>
                </button>
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
                <hr className="my-10" />
                <button
                  onClick={handleLogOut}
                  className="text-gray-700 flex gap-3 items-center font-Raleway border-2 font-bold py-2 rounded-xl px-4 css-selector hover:border-[#1bbf7246] duration-500 hover:bg-[#1bbf7249] hover:text-gray-600 shadow-md "
                >
                  <BiLogOut className="text-3xl"></BiLogOut>
                  <span
                    className={`${
                      !open ? "hidden" : ""
                    } origin-left duration-200 `}
                  >
                    Logout
                  </span>
                </button>
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
                <hr className="my-10" />
                <button
                  onClick={handleLogOut}
                  className="text-gray-700 flex gap-3 items-center font-Raleway border-2 font-bold py-2 rounded-xl px-4 css-selector hover:border-[#1bbf7246] duration-500 hover:bg-[#1bbf7249] hover:text-gray-600 shadow-md "
                >
                  <BiLogOut className="text-3xl"></BiLogOut>
                  <span
                    className={`${
                      !open ? "hidden" : ""
                    } origin-left duration-200 `}
                  >
                    Logout
                  </span>
                </button>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="h-screen ">
        <div
          className={`p-7 text-2xl font-semibold flex-1 ${
            open ? "md:ml-72" : "md:ml-32"
          } duration-700 mx-auto  `}
        >
          <DashboardTopNav></DashboardTopNav>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
