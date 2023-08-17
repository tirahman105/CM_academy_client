import React, { useState, useEffect } from "react";
import "./AllCourseCategories.css";
import { useNavigate } from "react-router-dom";

// ... Other imports

// ... Other imports

function AllCourseCategories() {
  const [courses, setCourses] = useState([]);
  const [activeCourse, setActiveCourse] = useState(null);
  const [activeButtonPosition, setActiveButtonPosition] = useState(null);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [showAllCourses, setShowAllCourses] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://cm-academy-test-server-production.up.railway.app/categories")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data[0].categories);

        if (!activeCourse) {
          setActiveCourse(data[0].categories[0]);
        }
      });
  }, [activeCourse]);

  const handleCourseClick = (course, index) => {
    setActiveCourse(course);
    setActiveButtonPosition(index === -1 ? -1 : index);
    setShowAllCourses(index === -1);
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      fetch(
        `https://cm-academy-test-server-production.up.railway.app/search?q=${searchQuery}`
      )
        .then((response) => response.json())
        .then((data) => {
          setCourses(data);
          setActiveCourse(data[0]?.categories[0]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleSubCourseClick = (subCourse) => {
    console.log(subCourse);
    navigate("/courseDetails", { state: { subCourse } });
  };

  return (
    <div className="py-4 bg-[#EBEBEB]">
      <div className="px-4 w-10/12 mx-auto">
        <div className="bg-gradient rounded-xl flex items-center justify-center overflow-x-auto gap-2 mb-10 sticky top-[0px] z-50 bg-opacity-50 backdrop-blur-lg bg-[#EBEBEB] border-slate-300">
          <button
            onClick={() => {
              setSearchQuery("");
              handleCourseClick(null, -1);
            }}
            className={`md:h-[70px] px-4 py-2 rounded-md font-semibold tracking-wider text-sm transition-all duration-300 relative ${
              showAllCourses ? "text-[#12C29F] rounded-lg" : "text-white"
            }`}
          >
            All
            {showAllCourses && (
              <div
                className="absolute w-[100%] h-1 bg-white left-0 bottom-2 transform scale-x-0 origin-left transition-transform duration-300"
                style={{
                  transform: `scaleX(${showAllCourses ? 1 : 0})`,
                }}
              ></div>
            )}
          </button>
          {courses.slice(0, 5).map((course, index) => (
            <button
              key={course.id}
              onClick={() => handleCourseClick(course, index)}
              onMouseEnter={() => setUnderlineWidth(index)}
              onMouseLeave={() => {
                if (!showAllCourses) {
                  setUnderlineWidth(activeButtonPosition);
                }
              }}
              className={`md:h-[70px] px-4 py-2 rounded-md font-semibold tracking-wider text-sm transition-all duration-300 relative ${
                !showAllCourses && activeButtonPosition === index
                  ? "text-[#12C29F] rounded-lg"
                  : "text-white "
              }`}
            >
              {course.title}
              {index === activeButtonPosition && (
                <div
                  className="absolute w-[100%] h-1 bg-white left-0 -bottom-[1px] md:bottom-2 transform scale-x-0 origin-left transition-transform duration-300"
                  style={{
                    transform: `scaleX(${underlineWidth === index ? 1 : 0})`,
                  }}
                ></div>
              )}
            </button>
          ))}

          <div className="hidden md:flex items-center gap-2 sm:block">
            <input
              type="text"
              placeholder="Search courses..."
              className=" px-4 py-2 rounded-md font-semibold tracking-wider text-sm transition-all duration-300 relative text-gray-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ outline: "none" }}
            />
            {searchQuery && (
              <button
                onClick={handleSearch}
                className={` px-4 py-2 bg-white  rounded-md font-semibold tracking-wider text-sm transition-all duration-300 relative ${
                  searchQuery ? "text-[#12C29F] rounded-lg" : "text-gray-700"
                }`}
              >
                Search
              </button>
            )}
          </div>
        </div>

        {/* sm device search */}
        <div className="sm:hidden flex items-center gap-2 justify-center sticky top-[64px] z-50">
          <input
            type="text"
            placeholder="Search courses..."
            className=" px-4 py-2 rounded-md font-semibold tracking-wider text-sm transition-all duration-300 relative text-gray-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ outline: "none" }}
          />
          {searchQuery && (
            <button
              onClick={handleSearch}
              className={` px-4 py-2 bg-white  rounded-md font-semibold tracking-wider text-sm transition-all duration-300 relative ${
                searchQuery ? "text-[#12C29F] rounded-lg" : "text-gray-700"
              }`}
            >
              Search
            </button>
          )}
        </div>

        <div className="  flex items-center justify-center bg-gradient-to-b  px-4 md:px-10 py-6 rounded-xl">
          {activeCourse && (
            <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {(showAllCourses
                ? courses.flatMap((course) => course.subCategories)
                : activeCourse.subCategories
              )
                .filter((subCourse) =>
                  subCourse.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
                )
                .map((subCourse, index) => (
                  <div
                    key={subCourse.title}
                    className="mt-2 border p-4 bg-slate-100 rounded-lg shadow-md"
                  >
                    <div className="h-[200px] bg-[#123140] rounded-lg shadow-md mb-4"></div>
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
                    <div className="w-full bg-[#0AAE8D] px-1 rounded-md text-center py-2 mt-3">
                      <button
                        className="font-bold text-lg text-white"
                        onClick={() => handleSubCourseClick(subCourse, index)}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllCourseCategories;
