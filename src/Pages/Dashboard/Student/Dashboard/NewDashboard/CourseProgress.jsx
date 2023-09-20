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
    <div className="mobile:mt-8 tablet:mt-8 laptop:mt-0">
      <div className="rounded-lg flex items-center ">
        <div className=" w-full">
          <div className="flex justify-start laptop:gap-2 desktop:gap-0 items-center desktop:space-x-10 tablet:space-x-10 laptop:space-x-0 bg-gray-100 p-2 rounded-md">
            <img
              src={courses[currentCourseIndex]?.course.courseThumbnail}
              alt={courses[currentCourseIndex]?.course.title}
              className="tablet:w-20 tablet:h-20 mobile:w-10 mobile:h-10 laptop:w-12 laptop:h-12 desktop:w-20 desktop:h-20 object-cover rounded-md transition-transform duration-300 transform hover:scale-110"
            />
            <div className=" ml-2 min-w-0 laptop:min-w-[20px]">
              <p className="text-gray-900 mobile:text-[14px] laptop:text-[14px]  font-bold desktop:text-lg truncate">
                {courses[currentCourseIndex]?.course.title}
              </p>
              <p className="desktop:text-sm mobile:text-[10px] laptop:text-[12px] text-gray-600 truncate">
                by {courses[currentCourseIndex]?.course.instructor}
              </p>
            </div>

            <div className="mobile:ml-4 flex items-center gap-2">
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
                    (251.2 * 70 || courses[currentCourseIndex]?.progress ) / 100
                  }
                  
                />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="text-gray-900 text-2xl font-bold"
                >
                  {courses[currentCourseIndex]?.course.progress || 70}% 
                </text>
              </svg>
            </div>

            <div className="flex items-center space-x-2 mobile:ml-4">
              <button
                onClick={() =>
                  handleContinue(
                    courses[currentCourseIndex]?.course._id,
                    courses[currentCourseIndex]?.course.courseOutline
                  )
                }
                className="ml-auto tablet:border-2 bg-black hover:bg-white hover:text-black text-white  tablet:text-base mobile:text-[12px] laptop:text-[13px] desktop:text-base laptop:px-2 desktop:px-4 laptop:py-1 desktop:py-2  mobile:px-2 tablet:px-4 tablet:py-2 rounded-lg transition duration-300"
              >
                Continue
              </button>
            </div>
            <div className="flex justify-between gap-4 items-center text-4xl ml-6 tablet:bg-white p-3 rounded-xl">
              <button onClick={handlePrevClick}>
                <BsArrowLeftCircle className="hover:scale-105 duration-300 laptop:text-xl desktop:text-4xl" />
              </button>
              <button onClick={handleNextClick}>
                <BsArrowRightCircleFill className="hover:scale-105 duration-300 laptop:text-xl desktop:text-4xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseProgress;
