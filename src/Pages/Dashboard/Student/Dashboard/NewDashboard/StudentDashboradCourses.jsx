import React, { useEffect, useState } from "react";

import Tiles from "./Tiles";

const StudentDashboradCourses = ({
  courses,
  popularCourse,
  topRated,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [selectedCourse, setSelectedCourse] = useState([]);

  // console.log(selectedCategory);

  useEffect(() => {
    if (selectedCategory === "All Courses") {
      setSelectedCourse(courses);
    }
  }, [selectedCategory, courses]);

console.log("popularCourse", popularCourse);

  return (
    <div>
      <h1 className="text-2xl text-left font-bold mt-20">Courses</h1>
      <div className="flex justify-start gap-4 text-lg items-center mb-2 mt-4 font-bold font-Jost">
        <h1
          onClick={() => {
            setSelectedCategory("All Courses");
            setSelectedCourse(courses);
          }}
          className={`cursor-pointer ${
            selectedCategory === "All Courses"
              ? "border border-gray-600 px-2 py-1 rounded-lg bg-black text-white duration-300 transition-all"
              : "text-black"
          }`}
        >
          My Courses
        </h1>

        <h1
          onClick={() => {
            setSelectedCategory("Top Rated");
            setSelectedCourse(topRated);
          }}
          className={`cursor-pointer ${
            selectedCategory === "Top Rated"
              ? "border border-gray-600 px-2 py-1 rounded-lg bg-black text-white duration-300 transition-all"
              : "text-black"
          }`}
        >
          Top Rated
        </h1>
        <h1
          onClick={() => {
            setSelectedCategory("Most Popular");
            setSelectedCourse(popularCourse);
          }}
          className={`cursor-pointer ${
            selectedCategory === "Most Popular"
              ? "border border-gray-600 px-2 py-1 rounded-lg bg-black text-white duration-300 transition-all"
              : "text-black"
          }`}
        >
          Most Popular
        </h1>
      </div>

      {selectedCourse &&
        selectedCourse.length > 0 &&
        selectedCourse.map((course, i) => (
          // Your logic here to check and map goes inside this block
          <Tiles course={course.course || course} key={i}></Tiles>
        ))}
    </div>
  );
};

export default StudentDashboradCourses;
