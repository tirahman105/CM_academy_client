import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import {  } from "react-icons/fi";
import {  } from "react-icons/hi";
import { MdNotStarted } from "react-icons/md";


const MyCourses = () => {
  const { user } = useContext(AuthContext);
  const [studentCourses, setStudentCourses] = useState([]);
  const navigate = useNavigate();

  console.log(studentCourses);
  useEffect(() => {
    const fetchStudentCourses = async () => {
      try {
        const response = await fetch(
          `https://cm-academy-test-server-production.up.railway.app/orders`
        );
        const data = await response.json();

        // Filter orders to find the ones associated with the logged-in student's email
        const enrolledCourses = data.filter(
          (order) => order.order.studentEmail === user.email
        );

        // Store the enrolled courses in state
        setStudentCourses(enrolledCourses);
      } catch (error) {
        console.error("Error fetching student courses:", error);
      }
    };

    fetchStudentCourses();
  }, [user]);


  const handleDetailsClick = (course) => {
    navigate("/coursepageUpdate", { state: { course } });

    console.log(course);
  };
  return (
    <div>
      <h1>Student Enrolled Courses</h1>



      <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-4 gap-4    md:px-10 py-6 rounded-xl ">
            {studentCourses.map((course, courseIndex) => (
              <div
                className=" rounded-lg shadow-md border-4 backdrop-blur-md bg-opacity-25  space-y-2   "
                key={courseIndex}
              >
                {/* ////image past start///// */}
                <div className="relative">
                  <img
                    className=" h-44 w-full rounded-md  "
                    src={course.course.courseThumbnail}
                    alt=""
                  />
                  <div className="shadow-md text-xs w-56 bg-gray-700 border-2 text-white bg-opacity-80 backdrop-blur-md flex items-center gap-2 absolute rounded-e-md px-4 py-[4px] bottom-3 z-10   ">
                    <img
                      src="https://media.discordapp.net/attachments/1137192144587739287/1144607311084654622/videos-teachers-768x432.jpg"
                      className="h-6 shadow-md w-6 rounded-full"
                      alt=""
                    />
                    <p className="font-Poppins">{course.course.instructor}</p>
                  </div>
                </div>
                {/* /////image past end////// */}
                <div className="px-5 h-14 ">
                  <h1 className="font-bold font-Lexend">
                    {course.course.title}
                  </h1>
                </div>
               

                <div className="bg-[#1bbf725e] h-[1px] "></div>
                <div className="py-2  px-4">
                  <button className="flex items-center justify-center gap-1 px-2 py-1 rounded-md shadow-md border w-full border-[#1bbf726c] duration-500 hover:bg-[#1bbf723d] hover:text-[#1bbf72fa]">
                    <MdNotStarted className="text-[#1bbf72fb]"></MdNotStarted>

                    
                      <p 
                      onClick={()=>handleDetailsClick(course.course)}
                      className="font-bold font-mono ">Start Your Course</p>
                    
                  </button>
              
                </div>
              </div>
            ))}
          </div>


    </div>
  );
};

export default MyCourses;
