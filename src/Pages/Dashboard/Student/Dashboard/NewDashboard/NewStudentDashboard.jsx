import React from "react";
import { AiFillFire, AiOutlineDown } from "react-icons/ai";
import hello from "../../../../../assets/hello.png";
import { MdNotificationsActive } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import StudentDashboradCourses from "./StudentDashboradCourses";
import { useContext } from "react";
import YourStatistics from "./YourStatistics";
import { AuthContext } from "../../../../../providers/AuthProvider";
import CourseProgress from "./CourseProgress";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useStudentCourses } from "../../../../../Context/StudentCoursesContext";

const NewStudentDashboard = () => {
  const [courses, setCourses] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  // const [studentCourses, setStudentCourses] = useState([]);

  const { studentCourses, fetchStudentCourses } = useStudentCourses();

  useEffect(() => {
    // Check if the user object is available and fetch student courses
    if (user && user.email) {
      fetchStudentCourses(user.email);
    } else {
      setLoading(false);
    }
  }, [user]);



  useEffect(() => {
    // Fetch data from the API
    fetch("https://cm-academy-test-server-production.up.railway.app/categories")
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API response contains an array of courses
        setCourses(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="mobile:px-4">


      <div className="grid grid-cols-1 laptop:gap-6 laptop:grid-cols-2">
        <div className=" laptop:order-2">

          {/* search bar with profile */}
          <div className="flex items-center gap-6 justify-start mb-4 ">
            <div className="relative flex items-center mobile:ml-4 flex-grow rounded-md mobile:text-sm text-lg bg-gray-100">
              <span className="flex items-center pl-4">
                <FaSearch size={24} className="text-gray-700 mobile:text-[12px] tablet:text-[14px] laptop:text-[16px]" />
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
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="mobile:w-7 laptop:w-12 tablet:w-9  rounded-full flex">
                    <img src={user?.userImage} alt="User" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link
                      to="/dashboard/student-profile"
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
          {/* search bar with profile  end*/}
        </div>

        <div className="mobile:order-2 rounded-lg w-full bg-white">
          <div className="mb-4 rounded-md bg-gray-100  mobile:p-8 pr-0 flex justify-around items-center laptop:w-auto laptop:p-5 laptop:pr-0">
            <div className="space-y-1">
              <h1 className="text-4xl font-extrabold font-Jost tracking-wider laptop:text-2xl mobile:text-xl">
                Hello! {user?.fullName}
              </h1>
              <p className="text-base font-semibold laptop:text-sm mobile:text-xs">It’s good to see you again.</p>
            </div>

            <div className="-mt-11">
              <img src={hello} alt="" />
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 laptop:gap-6 laptop:grid-cols-2">
        <div className="order-1 laptop:order-2">
          <div className="grid grid-cols-2 gap-4 ">
            <div className="bg-gray-100 p-4 text-center rounded-lg flex items-center justify-center gap-1 laptop:text-base mobile:text-sm">
              <p className="text-6xl font-extrabold laptop:text-3xl mobile:text-3xl">10</p>
              <p className="text-lg font-normal mobile:text-base">Courses Completed</p>
            </div>

            <div className="bg-gray-100 p-4 text-center rounded-lg flex items-center justify-center gap-1 laptop:text-base mobile:text-sm">
              <p className="text-6xl font-extrabold laptop:text-3xl mobile:text-3xl">7</p>
              <p className="text-lg font-normal mobile:text-base">Courses in Progress</p>
            </div>
          </div>

        </div>

        <div className="mobile:order-2 tablet:order-2 laptop:order-none rounded-lg w-full bg-white">
          
            <CourseProgress courses={studentCourses}></CourseProgress>
         
        </div>
      </div>

      


      <div className="grid grid-cols-1 laptop:gap-6 laptop:grid-cols-2">
        <div>
          <StudentDashboradCourses
            courses={studentCourses}
            popularCourse={courses}
          ></StudentDashboradCourses>
        </div>
        <div>
          <YourStatistics></YourStatistics>
        </div>
      </div>



    </div>
  );
};

export default NewStudentDashboard;
