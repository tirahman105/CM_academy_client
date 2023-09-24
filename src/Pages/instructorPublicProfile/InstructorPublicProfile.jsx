import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillPlayCircle, AiFillStar } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { useLocation } from "react-router-dom";
import CourseCard from "../Home/Categories/CourseCard";
// import bannerBackgroundImage from "../../assets/InstructorBanner.jpg"

const InstructorPublicProfile = () => {
  const location = useLocation();
  const { instructorInfo } = location.state;

  const [instructorCourses, setInstructorCourses] = useState([]);
  console.log(instructorCourses);
  useEffect(() => {
    fetch(
      `https://cm-academy-test-server-production.up.railway.app/categories/instructor/${instructorInfo.email} `
    )
      .then((response) => response.json())
      .then((data) => {
        setInstructorCourses(data);
      })

      .catch((error) => {
        console.error("Error fetching instructor courses:", error);
      });
  }, [instructorInfo.email]);

  console.log(instructorInfo);
  return (
    <div className="w-full min-h-screen bg-slate-100">
      {/*  <div className='bg-no-repeat bg-cover w-full h-[30vh] lg:h-[60vh]'
                style={{ backgroundImage: `url(${bannerBackgroundImage})` }}>
            </div> */}
      <div className="bg-gradient bg-no-repeat bg-cover w-full h-[30vh] lg:h-[50vh]"></div>
      <div className="flex flex-col lg:flex-row p-4 lg:p-20">
        <div className="lg:w-2/5 ">
          <div className="flex flex-row lg:flex-col gap-1 lg:gap-5">
            <div className="w-1/2 lg:w-full  lg:text-center">
              <div
                className="-mt-20 lg:-mt-56 w-32 h-32 lg:w-72 lg:h-72
                            lg:mx-auto mb-6 overflow-hidden rounded-full
                             ring-4 ring-[#023B56] ring-offset-base-100 ring-offset-4
                            hover:ring-sky-500
                            dark:ring-[#f8f7f1] dark:ring-offset-[#374151] dark:hover:ring-[#e4cf59] hover:ring-offset-8 hover:scale-105 transition-transform "
              >
                <img
                  src={instructorInfo.userImage}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="mt-2 lg:mt-6 lg:text-center">
                <h1
                  className="text-xl lg:text-3xl font-bold text-gray-800 mb-1
                                lg:mb-1"
                >
                  {instructorInfo.fullName}
                </h1>
                <h1 className="text-sm lg:text-xl font-semibold text-gray-700">
                  {instructorInfo.designation}
                </h1>
                
              </div>
            </div>
            <div className="w-1/2 lg:w-full mx-auto">
              <div className="flex flex-col-reverse lg:flex-col gap-3 lg:gap-2">
                <Link
                  to={instructorInfo.facebookLink}
                  className="mx-auto text-center w-28 font-extrabold border-2 border-gray-800
                  text-gray-800 rounded-2xl p-2 my-2 hover:bg-gray-700 hover:text-white duration-500"
                >
                  Follow
                </Link>
                <div
                  className="lg:w-3/5 border-t-2 lg:border-t lg:border-gray-600
                                 mx-auto"
                ></div>
                <div className="mx-auto space-y-2 mt-3  lg:mt-2 flex flex-col font-bold font-Lexend">
                  <a href={instructorInfo.facebookLink}>Facebook</a>
                  <a href={instructorInfo.githubLink}>Github</a>
                  <a href={instructorInfo.linkedinLink}>LinkedIn</a>
                  <a href={instructorInfo.facebookLink}></a>
                  <a href={instructorInfo.facebookLink}></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-3/5 ">
          <h1 className="text-2xl font-bold underline lg:mt-10 text-[#023B56]">
            About Me
          </h1>
          <p
            className="text-sm font-semibold lg:text-lg lg:tracking-wider my-4
                     text-gray-700"
          >
            {instructorInfo.aboutMe}
          </p>
        </div>
      </div>
      <div>
        <h1
          className="text-4xl lg:text-5xl mt-7 font-bold text-center text-gray-800
                font-Poppins"
        >
          My Courses
        </h1>
        {/* ------------CARD------------------ */}

        <div className="mt-4 duration-700 grid tablet:grid-cols-3   gap-4 md:px-10 py-6  tablet:max-w-7xl tablet:mx-auto">
          {instructorCourses.map((course) => (
            <CourseCard course={course} key={course._id}></CourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorPublicProfile;
