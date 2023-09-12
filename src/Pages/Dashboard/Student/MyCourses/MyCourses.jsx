import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { MdNotStarted } from "react-icons/md";
import RatingFeedbackForm from "./RatingFeedbackForm";
import Loading from "../../../Home/Home/Loading/Loading";

const MyCourses = () => {
  const { user } = useContext(AuthContext);
  const [studentCourses, setStudentCourses] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  console.log(user);

  useEffect(() => {
    // Check if the user object is available
    if (user && user.email) {
      const fetchStudentCourses = async () => {
        try {
          const response = await fetch(
            `https://cm-academy-test-server-production.up.railway.app/orders/${user.email}`
          );
          const data = await response.json();

          // Filter orders to find the ones associated with the logged-in student's email
          // const enrolledCourses = data;

          // Store the enrolled courses in state
          setStudentCourses(data);
          setLoading(false); // Set loading to false when data is fetched
        } catch (error) {
          console.error("Error fetching student courses:", error);
          setLoading(false); // Set loading to false in case of an error
        }
      };

      fetchStudentCourses();
    } else {
      setLoading(false); // Set loading to false if user is not available
    }
  }, [user]);

  const handleDetailsClick = (courseOutline, courseId, email) => {
    navigate("/coursepage", { state: { courseOutline, courseId, email } });
  };

  console.log(studentCourses);

  return (
    <div className="">
      <h1>Student Enrolled Courses</h1>

      {loading ? (
        // Render a loading message or spinner while waiting for data
        <Loading></Loading>
      ) : (
        <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:px-10 py-6 rounded-xl ">
          {studentCourses.map((course, courseIndex) => (
            <div
              className="border rounded-lg border-[#36cbd330] shadow-md  backdrop-blur-md bg-opacity-10 bg-slate-300  space-y-2   "
              key={courseIndex}
            >
              {console.log(course.course._id)}
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
                <h1 className="font-bold font-Lexend">{course.course.title}</h1>
              </div>

              <div className="bg-[#1bbf725e] h-[1px] "></div>
              <div className="py-2  px-4">
                <button
                  className="flex items-center justify-center gap-1 px-2 py-1 rounded-md shadow-md border w-full border-[#1bbf726c] duration-500 hover:bg-[#1bbf723d] hover:text-[#1bbf72fa]"
                  onClick={() =>
                    handleDetailsClick(
                      course.course.courseOutline,
                      course.course._id,
                      user.email
                    )
                  }
                >
                  <MdNotStarted className="text-[#1bbf72fb]"></MdNotStarted>

                  <p className="font-bold font-mono ">Start Your Course</p>
                </button>
              </div>
              <RatingFeedbackForm
                courseId={course.course._id}
                user={user}
                courseInstructor={course.course.instructor}
                courseTitle={course.course.title}
                courseCategory={course.course.courseCategory}
              ></RatingFeedbackForm>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCourses;
