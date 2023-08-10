import { useState, useEffect } from "react";

import "./Categories.css";

function Categories() {
  const [courses, setCourses] = useState([]);
  const [activeCourse, setActiveCourse] = useState(null);

  useEffect(() => {
    fetch("/courses.json")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data.courses);
        setActiveCourse(data.courses[0]); // Set the first course as active initially
      });
  }, []);

  const handleCourseClick = (course) => {
    console.log(course);
    setActiveCourse(course);
  };

  return (
    <div className="px-4 w-10/12 mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Explore Top Courses
      </h1>
      <div className="flex overflow-x-auto gap-2 mb-10 sticky top-[20px] z-50 ">
        {courses.map((course) => (
          <button
            key={course.title}
            onClick={() => handleCourseClick(course)}
            className={`w-[300px] px-4 py-2 rounded-md font-bold text-white text-sm transition-all duration-300 ${
              activeCourse === course
                ? "bg-cyan-600 bg-opacity-40 backdrop-blur-md text-white w-[300px]"
                : "bg-gray-500 bg-opacity-30 backdrop-blur-md text-gray-800 w-[300px]"
            }`}
          >
            {course.title}
          </button>
        ))}
      </div>
      <div className="mt-4  flex items-center justify-center">
        {activeCourse && (
          <div className="">
            <h2 className="text-2xl font-bold mt-4 mb-10 text-center">
              {activeCourse.title}
            </h2>
            <div className="  grid  md:grid-cols-4 gap-5 text-white  ">
              {activeCourse.subCourses.map((subCourse) => (
                <div
                  key={subCourse.title}
                  className="mt-2 border p-4 bg-slate-100 rounded-lg shadow-md w-[350px]"
                >
                  <div className="h-[200px] bg-cyan-500 bg-opacity-50  rounded-lg shadow-md mb-4"></div>
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
  );
}

export default Categories;
