import React, { useContext, useEffect, useState } from "react";
import { MdNotificationsActive } from "react-icons/md";
import { Link } from "react-router-dom";
import DashboardChart from "../DashboardChart/DashboardChart";
import AdminManagement from "./AdminManagement";
import hello from "../../../../assets/hello.png";
import { AuthContext } from "../../../../providers/AuthProvider";
import { FaSearch } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";

const AdminDashboard = () => {
  // data fetch from DB

  const [students, setStudents] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [courses, setCourses] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const { user } = useContext(AuthContext);

  //   user fetch
  useEffect(() => {
    fetch(
      "https://cm-academy-test-server-production.up.railway.app/users/student"
    )
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);

  //   instructor fetch
  useEffect(() => {
    fetch(
      "https://cm-academy-test-server-production.up.railway.app/users/instructor"
    )
      .then((res) => res.json())
      .then((result) => {
        setInstructors(result);
      });
  }, []);

  //   course fetch

  useEffect(() => {
    fetch("https://cm-academy-test-server-production.up.railway.app/categories")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);

  // Fetch the blog
  useEffect(() => {
    fetch("https://cm-academy-test-server-production.up.railway.app/all-blog")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const approvedCourses = courses.filter(
    (course) => course.ApprovedStatus === "Approved"
  );
  const totalApprovedCourses = approvedCourses.length;
  const deniedCourses = courses.filter(
    (course) => course.ApprovedStatus === "Denied"
  );
  const totalDeniedCourses = deniedCourses.length;

  return (
    <div className="mobile:px-2">
      <div className="grid grid-cols-1 laptop:gap-6 laptop:grid-cols-2">
        <div className="laptop:order-2">
          <div className="">
            <div className="flex items-center gap-6 justify-start mb-4">
              <div className="relative flex items-center mobile:ml-4 flex-grow rounded-md mobile:text-sm text-lg bg-gray-100">
                <span className="flex items-center pl-4">
                  <FaSearch className="text-gray-700 mobile:text-[12px] tablet:text-[14px] laptop:text-[16px]" />
                </span>
                <input
                  type="text"
                  placeholder=""
                  className="w-full focus:outline-none bg-gray-100 p-2"
                />
              </div>

              <div className="flex items-center">
                <MdNotificationsActive className="text-4xl mr-4 mobile:w-6 tablet:w-7 laptop:w-9" />
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="mobile:w-7 laptop:w-12 tablet:w-9  rounded-full flex">
                      <img src={user?.userImage} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link
                        to="/dashboard/admin-dashboard"
                        className="justify-between"
                      >
                        Profile
                        <span className="badge">New</span>
                      </Link>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
                <AiOutlineDown className="text-base" />
              </div>
            </div>
          </div>
        </div>

        <div className="laptop:order-1 ">
          <div className="mb-4 rounded-md bg-gray-100  mobile:p-8 pr-0 flex justify-around items-center laptop:w-auto laptop:p-5 laptop:pr-0">
            <div className=" space-y-1">
              <h1 className="text-4xl font-extrabold font-Jost tracking-wider laptop:text-2xl mobile:text-xl">
                Hello {user?.fullName}
              </h1>
              <p className="text-base font-semibold laptop:text-sm mobile:text-xs">
                It’s good to see you again.
              </p>
            </div>

            <div className="-mt-9">
              <img src={hello} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 laptop:gap-6 laptop:grid-cols-2">
        <div className="laptop:order-2">
          <div className="">
            <div className="grid grid-cols-2 gap-4 mt-6 laptop:-mt-28">
              <div className="bg-gray-100 p-4 text-center rounded-lg flex items-center justify-center gap-1 laptop:text-base mobile:text-sm">
                <p className="text-6xl font-extrabold laptop:text-3xl mobile:text-3xl">
                  {totalApprovedCourses}
                </p>
                <p className="text-lg font-normal mobile:text-base laptop:text-sm desktop:text-lg">Approved Courses</p>
              </div>

              <div className="bg-gray-100 p-4 text-center rounded-lg flex items-center justify-center gap-1 laptop:text-base mobile:text-sm">
                <p className="text-6xl font-extrabold laptop:text-3xl mobile:text-3xl">{totalDeniedCourses}</p>
                <p className="text-lg font-normal mobile:text-base laptop:text-sm desktop:text-lg">Requested Courses</p>
              </div>
            </div>
          </div>
        </div>

        <div className="laptop:order-1"></div>
      </div>

      <div className="grid grid-cols-1 laptop:gap-0 laptop:grid-cols-2">
        <div className="">
          <AdminManagement courses={courses} setCourses={setCourses} />
        </div>

        <div className="">
          <DashboardChart></DashboardChart>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
