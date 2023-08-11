import React, { useState, useEffect } from "react";
import "./Categories.css";

function Categories() {
  const [courses, setCourses] = useState([]);
  const [activeCourse, setActiveCourse] = useState(null);
  const [activeButtonPosition, setActiveButtonPosition] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(0);

  useEffect(() => {
    fetch("/courses.json")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data.courses);
        setActiveCourse(data.courses[0]);
      });
  }, []);

  const handleCourseClick = (course, index) => {
    setActiveCourse(course);
    setActiveButtonPosition(index);
  };

  return (
    <div className="py-4 bg-[#EBEBEB]">
      <div className="px-4 w-10/12 mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center text-[#12C29F]">
          Explore Top Courses
        </h1>
        <div className="flex items-center justify-center overflow-x-auto gap-2 mb-10 sticky top-[0px] z-50  bg-opacity-50 backdrop-blur-lg bg-[#EBEBEB]  

border-slate-300">
          {courses.slice(0, 5).map((course, index) => (
            <button
              key={course.title}
              onClick={() => handleCourseClick(course, index)}
              onMouseEnter={() => setUnderlineWidth(index)}
              onMouseLeave={() => setUnderlineWidth(activeButtonPosition)}
              className={`md:h-[70px] px-4 py-2 rounded-md font-bold  text-sm transition-all duration-300 relative ${
                activeCourse === course
                  ? " text-[#12C29F] rounded-lg "
                  : " text-gray-800 "
              }`}
            >
              {course.title}
              {index === activeButtonPosition && (
                <div
                  className="absolute w-[100%] h-1 bg-[#12C29F] left-0 bottom-0 transform scale-x-0 origin-left transition-transform duration-300"
                  style={{
                    transform: `scaleX(${underlineWidth == index ? 1 : 0})`,
                  }}
                ></div>
              )}
            </button>
          ))}
        </div>
        <div className="mt-4  flex items-center justify-center bg-gradient-to-b bg-gradient px-4 md:px-10 py-6 rounded-xl">
          {activeCourse && (
            <div className="">
              <h2 className="text-2xl font-bold mt-4 mb-10 text-center text-white">
                {activeCourse.title}
              </h2>
              <div className="grid md:grid-cols-4 gap-5 text-white">
                {activeCourse.subCourses.map((subCourse) => (
                  <div
                    key={subCourse.title}
                    className="mt-2 border p-4 bg-slate-100 rounded-lg shadow-md"
                  >
                    <div className="h-[200px] bg-[#123140]  rounded-lg shadow-md mb-4"></div>
                    <strong className="text-gray-800 text-xl">
                      {subCourse.title}
                    </strong>
                    <div className="text-gray-600">
                      Instructor: {subCourse.instructor}
                    </div>
                    <div className="text-gray-600">
                      Duration: {subCourse.duration}
                    </div>
                    <div className="text-gray-600">
                      Rating: {subCourse.rating}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Categories;
