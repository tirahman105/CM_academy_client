import React, { useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router";

const CourseProgress = ({ courses }) => {
  console.log(courses);

  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentCourseIndex > 0) {
      setCurrentCourseIndex(currentCourseIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentCourseIndex < courses.length - 1) {
      setCurrentCourseIndex(currentCourseIndex + 1);
    }
  };
  const navigate = useNavigate();

  const handleContinue = (courseId, courseOutline) => {
    navigate("/coursepage", { state: { courseOutline, courseId } });
    };

  return (
    <div>
      <div className="rounded-lg flex items-center">
        <div className="card-container w-full">
          <div className="flex justify-start items-center space-x-10 bg-gray-100 p-2 rounded-md">
            <img
              src={courses[currentCourseIndex]?.course.courseThumbnail}
              alt={courses[currentCourseIndex]?.course.title}
              className="w-16 h-16 object-cover rounded-md transition-transform duration-300 transform hover:scale-110"
            />
            <div className="flex-1 min-w-0">
              <p className="text-gray-900 font-bold text-lg truncate">
                {courses[currentCourseIndex]?.course.title}
              </p>
              <p className="text-sm text-gray-600">
                by {courses[currentCourseIndex]?.course.instructor}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                viewBox="0 0 100 100"
              >
                <circle
                  className="stroke-current text-black"
                  cx="50"
                  cy="50"
                  r="40"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="251.2"
                  strokeDashoffset={
                    251.2 -
                    (251.2 * courses[currentCourseIndex]?.progress) / 100
                  }
                  transition="stroke-dashoffset 0.5s ease-in-out"
                />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="text-gray-900 text-2xl font-bold"
                >
                  {courses[currentCourseIndex]?.course.progress}%
                </text>
              </svg>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() =>
                  handleContinue(
                    courses[currentCourseIndex]?.course._id,
                    courses[currentCourseIndex]?.course.courseOutline
                  )
                }
                className="ml-auto border-2 bg-black hover:bg-white hover:text-black text-white text-base px-4 py-2 rounded-lg transition duration-300"
              >
                Continue
              </button>
            </div>
            <div className="flex justify-between gap-4 items-center text-4xl ml-6 bg-white p-3 rounded-xl">
              <button onClick={handlePrevClick}>
                <BsArrowLeftCircle className="hover:scale-105 duration-300" />
              </button>
              <button onClick={handleNextClick}>
                <BsArrowRightCircleFill className="hover:scale-105 duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseProgress;
