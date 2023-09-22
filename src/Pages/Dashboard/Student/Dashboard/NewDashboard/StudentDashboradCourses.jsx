import React, { useEffect, useState } from "react";
import Tiles from "./Tiles";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const StudentDashboradCourses = ({ courses, popularCourse, topRated }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [selectedCourse, setSelectedCourse] = useState(courses);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const itemsPerPage = isSmallScreen ? 5 : 10;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Reset currentPage to 1 when category changes
    setCurrentPage(1);

    // Update selectedCourse when the selected category changes
    if (selectedCategory === "All Courses") {
      setSelectedCourse(courses);
    } else if (selectedCategory === "Top Rated") {
      setSelectedCourse(topRated);
    } else if (selectedCategory === "Most Popular") {
      setSelectedCourse(popularCourse);
    }
  }, [selectedCategory, courses, popularCourse, topRated]);

  const totalPageCount = selectedCourse ? Math.ceil(selectedCourse.length / itemsPerPage) : 0;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage - 1; 
  const visibleCourses = selectedCourse ? selectedCourse.slice(startIndex, endIndex + 1) : [];

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h1 className="text-2xl text-left font-bold mt-20 laptop:text-xl">
        Courses
      </h1>
      <div className="flex justify-start gap-4 text-lg items-center mb-2 mt-4 font-bold font-Jost laptop:text-base">
        <h1
          onClick={() => setSelectedCategory("All Courses")}
          className={`cursor-pointer mobile:text-[11px] mobile:font-Lexend ${
            selectedCategory === "All Courses"
              ? "border border-gray-600 px-2 py-1 rounded-lg bg-black text-white duration-300 transition-all"
              : "text-black"
          }`}
        >
          My Courses
        </h1>

        <h1
          onClick={() => setSelectedCategory("Top Rated")}
          className={`cursor-pointer mobile:text-[11px] mobile:font-Lexend${
            selectedCategory === "Top Rated"
              ? "border border-gray-600 px-2 py-1 rounded-lg bg-black text-white duration-300 transition-all"
              : "text-black"
          }`}
        >
          Top Rated
        </h1>
        <h1
          onClick={() => setSelectedCategory("Most Popular")}
          className={`cursor-pointer mobile:text-[11px] mobile:font-Lexend${
            selectedCategory === "Most Popular"
              ? "border border-gray-600 px-2 py-1 rounded-lg bg-black text-white duration-300 transition-all"
              : "text-black"
          }`}
        >
          Most Popular
        </h1>
      </div>

      {visibleCourses &&
        visibleCourses.length > 0 &&
        visibleCourses.map((course, i) => (
          <Tiles course={course.course || course} selectedCategory={selectedCategory} key={i}></Tiles>
        ))}

      {selectedCourse && selectedCourse.length > itemsPerPage && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 px-3 py-1 bg-gray-200 rounded-md"
          >
            <GrFormPrevious></GrFormPrevious>
          </button>
          {Array.from({ length: totalPageCount }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 py-1 text-sm ${
                currentPage === index + 1
                  ? "bg-green-600 text-white"
                  : "bg-gray-200"
              } rounded-md`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPageCount}
            className="ml-2 px-3 py-1 bg-gray-200 rounded-md"
          >
            <p className="text-green-600">
              <GrFormNext />
            </p>
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentDashboradCourses;
