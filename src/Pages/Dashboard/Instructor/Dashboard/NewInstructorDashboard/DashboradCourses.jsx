
import React, { useContext, useEffect, useState } from "react";
import { AiFillFire } from "react-icons/ai";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../../providers/AuthProvider";

const DashboradCourses = () => {
  const [status, setStatus] = useState("Approved");
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const { user } = useContext(AuthContext);

  // for pagination
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPageCount = Math.ceil(courses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage - 1; // Calculate the last index of the displayed range
  const visibleCourses = courses.slice(startIndex, endIndex + 1);

  useEffect(() => {
    // Fetch data from the API
    fetch(
      `https://cm-academy-test-server-production.up.railway.app/categories/instructor/${user?.email}/${status} `
    )
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API response contains an array of courses
        setCourses(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [status]);

  const navigate = useNavigate();
  // Function to filter courses based on the selected category
  const handleViewClick = (course) => {
    navigate("/courseDetailsDynamic", { state: { course } });
    console.log(course);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <div className="bg-yellow-100">
      <h1 className="text-2xl text-left font-bold mt-20 laptop:text-xl">Courses</h1>
      <div className="flex justify-start gap-4 text-lg items-center mb-2 mt-4 font-bold font-Jost laptop:text-base">
        <h1
          onClick={() => {
            setSelectedCategory("All Courses");
            setStatus("Approved");
          }}
          className={`cursor-pointer ${
            selectedCategory === "All Courses"
              ? "border border-gray-600 px-2 py-1 rounded-lg bg-gray-700 text-white duration-300 transition-all"
              : "text-black"
          }`}
        >
          All Approved
        </h1>
        <h1
          onClick={() => {
            setSelectedCategory("Pending");
            setStatus("Deny");
          }}
          className={`cursor-pointer ${
            selectedCategory === "Pending"
              ? "border border-gray-600 px-2 py-1 rounded-lg bg-gray-700 text-white duration-300 transition-all"
              : "text-black"
          }`}
        >
          Pending
        </h1>
        <h1
          onClick={() => setSelectedCategory("Top Rated")}
          className={`cursor-pointer ${
            selectedCategory === "Top Rated"
              ? "border border-gray-600 px-2 py-1 rounded-lg bg-gray-700 text-white duration-300 transition-all"
              : "text-black"
          }`}
        >
          Most Enrolled
        </h1>
      </div>

      {visibleCourses.map((course) => (
        <div
          key={course._id}
          className="max-w-full bg-gray-100 rounded-lg p-4 flex items-center space-x-4 mt-2"
        >
          <img
            src={course.courseThumbnail}
            alt={course.title}
            className="w-20 h-20 object-cover rounded-md transition-transform duration-300 transform hover:scale-110"
          />
          <div style={{ flex: "1" }}>
            <p className="text-gray-900 font-bold text-lg">{course.title}</p>
            <p className="text-sm text-gray-600">by {course.instructor}</p>
          </div>

          {status === "Approved" ? (
            <p className="bg-[#1bbf72fa] text-sm px-2 py-[2px] shadow-sm font-bold rounded-lg text-white">
              Approved
            </p>
          ) : (
            <p className="bg-[#f88f8f] text-sm px-2 py-[2px] shadow-sm font-bold rounded-lg text-white">
              Pending
            </p>
          )}

          <div className="flex items-center space-x-2">
            <AiFillFire />
            <p className="text-gray-600 text-sm">4.9</p>
          </div>
          <button
            onClick={() => handleViewClick(course)}
            className="border-2 hover:bg-black hover:text-white border-black text-black text-base px-4 py-2 rounded-lg transition duration-300"
          >
            View Course
          </button>
        </div>
      ))}
      {/* Pagination controls */}
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
    </div>
  );
};

export default DashboradCourses;
