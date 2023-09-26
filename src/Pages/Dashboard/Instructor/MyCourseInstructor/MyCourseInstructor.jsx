import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import dteailsIcon from "../../../../assets/iconForDashboard/details.png";
import msgReq from "../../../../assets/iconForDashboard/messagereq.png";
import enrolledIcon from "../../../../assets/iconForDashboard/enrolled.png";
const MyCourseInstructor = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [instructorCourses, setInstructorCourses] = useState([]);

  console.log(user?.email);
  useEffect(() => {
    fetch(
      `https://cm-academy-test-server-production.up.railway.app/categories/instructor/${user?.email}/Approved`
    )
      .then((response) => response.json())
      .then((data) => {
        setInstructorCourses(data);
      })

      .catch((error) => {
        console.error("Error fetching instructor courses:", error);
      });
  }, [user?.email]);

  const handleDetailsClick = (course) => {
    navigate("/courseDetailsDynamic", { state: { course } });

    console.log(course._id);
  };

  const handleMsgReq = ({ courseId, courseTitle }) => {
    navigate("/dashboard/msg-request", { state: { courseId, courseTitle } });
  };

  console.log(instructorCourses);
  return (
    <div className=" p-4">
      <div className=" my-4 mt-4">
        <h1 className="  font-bold text-gray-700 font-Lexend">My Courses</h1>
        <p className="text-lg font-light mb-4 text-gray-700 font-Lexend mt-4">
          {" "}
          You can view the courses you are currently instructing. Keep track of
          how many students have enrolled in each course, and easily access any
          message requests from your students. Stay connected and provide
          valuable guidance to your learners.{" "}
        </p>

        <hr />
        {instructorCourses.length === 0 && (
          <div className="flex justify-center items-center h-96">
            <h1 className="text-2xl font-bold text-gray-500">
              You haven't created any course yet!
            </h1>
          </div>
        )}
      </div>
      <div className=" ">
        {instructorCourses.map((category) => (
          <div
            key={category._id}
            className=" flex gap-2 border rounded-md p-1 mb-8 max-w-3xl"
          >
            <img
              className=" w-36 object-cover rounded-md"
              src={category.courseThumbnail}
              alt=""
            />

            <div className=" flex flex-col gap-2 justify-around">
              <h2 className=" font-Lexend mobile:text-sm text-lg text-gray-700 mb-2">
                {category.title}
              </h2>
              <p className="text-sm mobile:text-[12px] text-gray-700  font-PTSans font-light">
                {category.courseCategory}
              </p>

              <div className="flex  gap-6 mobile:gap-1 mt-2 font-semibold font-PTSans mobile:text-[12px] text-sm text-gray-500">
                <h1>Price : Tk {category.coursePrice}</h1>
                <h1 className=" flex items-center gap-1 ">
                  {" "}
                  <img className="h-[14px]" src={enrolledIcon} alt="" />{" "}
                  Enrolled : {category.enrollCount}
                </h1>
              </div>

              <div className=" tablet:flex gap-2">
                <button
                  onClick={() => handleDetailsClick(category)}
                  className=" mobile:text-[12px] mobile:mb-2 flex items-center gap-1 text-sm px-2 rounded font-PTSans font-light
                border-2 "
                >
                  <img className="h-4" src={dteailsIcon} alt="" />
                  Details
                </button>
                <button
                  onClick={() =>
                    handleMsgReq({
                      courseId: category._id,
                      courseTitle: category.title,
                    })
                  }
                  className="text-sm mobile:text-[12px] border-2 px-2 rounded font-PTSans font-light flex items-center gap-1"
                >
                  <img className="h-4" src={msgReq} alt="" />
                  View Message Request
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourseInstructor;
