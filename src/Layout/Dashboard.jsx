import React, { useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import useInstructor from "../Hooks/useInstructor";
import useStudent from "../Hooks/useStudent";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../providers/AuthProvider";
import dashboard from "../../src/assets/iconForDashboard/dashboard.png";
import profile from "../../src/assets/iconForDashboard/user.png";
import course from "../../src/assets/iconForDashboard/homework.png";
import addCourse from "../../src/assets/iconForDashboard/add.png";
import blog from "../../src/assets/iconForDashboard/blogger.png";
import payment from "../../src/assets/iconForDashboard/bill.png";
import paymentSetup from "../../src/assets/iconForDashboard/security-payment.png";
import userManage from "../../src/assets/iconForDashboard/user_manage.png";
import enrolledCourse from "../../src/assets/iconForDashboard/page.png";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isInstructor] = useInstructor();
  const [isStudent] = useStudent();
  const [isAdmin] = useAdmin();
  const [open, setOpen] = useState(false);

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
      title: "My Dashboard",
      src: "/dashboard/student-dashboard",
      icon: dashboard,
    },
    {
      title: "My Payments",
      src: "/dashboard/student-payment",
      icon: payment,
    },
    {
      title: "My Profile",
      src: "/dashboard/student-profile",
      icon: profile,
    },
    {
      title: "Support Center",
      src: "/dashboard/student-support-center",
      icon: profile,
    },
  ];

  const AdminMenus = [
    {
      title: "Dashboard",
      src: "/dashboard/admin-dashboard",
      icon: dashboard,
    },
    {
      title: "Manage Students",
      src: "/dashboard/manage-students",
      icon: userManage,
    },
    {
      title: "All Enrolled Student",
      src: "/dashboard/All-enrolled-students",
      icon: enrolledCourse,
    },
    {
      title: "Manage instructors",
      src: "/dashboard/manage-instructors",
      icon: userManage,
    },
    {
      title: "Manage Course",
      src: "/dashboard/manage-course",
      icon: course,
    },
    {
      title: "Withdraw Request",
      src: "/dashboard/withdraw-request",
      icon: payment,
    },
    {
      title: "Add New Category",
      src: "/dashboard/Add-category",
      icon: addCourse,
    },
    {
      title: "Support Tickets",
      src: "/dashboard/support-tickets",
      icon: addCourse,
    },
  ];

  const InstructorMenus = [
    {
      title: "Dashboard",
      src: "/dashboard/new-instructor-dashboard",
      icon: dashboard,
    },
    {
      title: "My Profile",
      src: "/dashboard/instructor-profile",
      icon: profile,
    },
    {
      title: "My Courses",
      src: "/dashboard/my-courses-instructor",
      icon: course,
    },

    {
      title: "Add New Course",
      src: "/dashboard/add-course",
      icon: addCourse,
    },
    {
      title: "My Blogs",
      src: "/dashboard/my-blogs",
      icon: blog,
    },
    {
      title: "Add New Blog",
      src: "/dashboard/add-blog",
      icon: addCourse,
    },
    {
      title: "Payment Setup",
      src: "/dashboard/acc-setup",
      icon: paymentSetup,
    },
    {
      title: "Payment History",
      src: "/dashboard/my-payments",
      icon: payment,
    },
    {
      title: "Support Request",
      src: "/dashboard/support-request",
      icon: payment,
    },
  ];

  return (
    <div className="">
      <div
        className={`fixed z-10 h-full   py-4 duration-500  ${open ? " " : " "}`}
      >
        <div
          className={`${
            open ? "w-72 laptop:w-60 px-5" : "md:w-[80px]  mobile:w-0"
          } pt-8 duration-500  bg-[#2D2F31]  font-Poppins tracking-wider font-bold text-lg text-white shadow-lg rounded-xl ml-4 h-full  transform translate-x-0 md:translate-x-0 `}
        >
          <p
            className={`text-5xl absolute cursor-pointer -right-6 md:-right-3 top-9 bg-slate-600 rounded-lg px-2 ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          >
            &lt;
          </p>
          <div className="flex items-center ">
            <img src="https://i.ibb.co/xgF8nhd/cmLogo.png" alt="" />

            <h1 className={`text-white ${!open && "scale-0"}`}>
              <Link to="/"> CM Academy</Link>
            </h1>
          </div>

          <div className=" h-full overflow-y-auto pb-20">
            <div className={` ${open ? "block duration-500" : "hidden"} `}>
              <div className="flex flex-col items-center mt-10 mb-6">
                <img
                  className="rounded-xl flex h-24 w-24 mb-2 mt-2"
                  src={user?.userImage}
                  alt=""
                />
                <h1
                  className={`laptop:text-base text-white font-semibold ${!open && "scale-0"}`}
                >
                  {user?.fullName}
                </h1>
              </div>
            </div>

            <div className="pt-6  ">
              {isStudent && (
                <>
                  {StudentMenus.map((menu, index) => (
                    <li
                      key={index}
                      className="text-white font-normal hover:text-green-400 hover:bg-[#1bbf723b] border-2 border-[#1bbf726c] ps-2 rounded-md flex items-center gap-2 mb-2 cursor-pointer mx-2"
                    >
                      <Link to={menu.src} className="flex my-2 ">
                        {" "}
                        <span className="text-3xl me-2">
                          <img src={menu?.icon} alt="" />{" "}
                        </span>
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
                      className="text-white font-normal hover:text-green-400 hover:bg-[#1bbf723b] border-2 border-[#1bbf726c] ps-2 rounded-md flex items-center gap-2 mb-2 cursor-pointer mx-2"
                    >
                      <Link to={menu.src} className="flex items-center my-2 ">
                        {" "}
                        <span className="text-3xl me-2">
                          {" "}
                          <img src={menu?.icon} alt="" />{" "}
                        </span>
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
                      className="laptop:text-sm text-white font-normal hover:text-green-400 hover:bg-[#1bbf723b] border-2 border-[#1bbf726c] ps-2 rounded-md flex items-center gap-2 mb-2 cursor-pointer mx-2"
                    >
                      <Link to={menu.src} className="flex my-2 ">
                        {" "}
                        <span className="text-3xl me-2">
                          <img src={menu?.icon} alt="" />{" "}
                        </span>
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
            </div>
            <hr className=" my-6" />
            <button
              onClick={handleLogOut}
              className="laptop:text-base text-gray-700 flex gap-3 items-center font-Raleway border-2 font-bold py-2 rounded-xl px-4 bg-white hover:border-[#1bbf7246] duration-500 hover:bg-[#1bbf7249] hover:text-gray-600 shadow-md "
            >
              <p className="text-3xl"></p>
              <span
                className={`${!open ? "hidden" : ""} origin-left duration-200 `}
              >
                Logout
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="h-screen ">
        <div
          className={`pt-7 text-2xl font-semibold flex-1 ${
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