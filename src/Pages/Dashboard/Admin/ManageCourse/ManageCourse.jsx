import React, { useState, useEffect } from "react";
import DashboardTopNav from "../../Shared/DashboardTopNav/DashboardTopNav";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const ManageCourse = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [courses, setCourses] = useState([]);
  const itemsPerPage = isSmallScreen ? 5 : 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPageCount = Math.ceil(courses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage - 1; // Calculate the last index of the displayed range
  const visibleCourses = courses.slice(startIndex, endIndex + 1); // Adjust the visibleCourses range

  useEffect(() => {
    fetch("https://cm-academy-test-server-production.up.railway.app/categories")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const updateCourseStatus = async (courseId, newStatus) => {
    try {
      const response = await fetch(
        `https://cm-academy-test-server-production.up.railway.app/categories/${courseId}/approval`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ApprovedStatus: newStatus,
          }),
        }
      );

      if (response.ok) {
        const updatedCourses = courses.map((course) =>
          course._id === courseId
            ? { ...course, ApprovedStatus: newStatus }
            : course
        );
        setCourses(updatedCourses);
      } else {
        console.error(`Failed to update course ${newStatus} status`);
      }
    } catch (error) {
      console.error(`Error updating course ${newStatus} status:`, error);
    }
  };

  const handleDelete = (courseId) => {
    // console.log(courseId);
    fetch(`https://cm-academy-test-server-production.up.railway.app/categories/${courseId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const remainingCourses = courses.filter(
          (course) => course._id !== courseId
        );
        setCourses(remainingCourses);
      })
      .catch((error) => {
        console.error("Error deleting course:", error);
      });
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className=" ">
      {/* course table  */}

      <div className="border p-4">
        <div className="my-5 mt-4">
          <h1 className=" text-lg">Manage Courses</h1>
          <p className="text-base mb-4">Manage courses posted by Instructors</p>
          <hr />
        </div>
        {isSmallScreen ? (
          <div className="text-start rounded-md">
            {visibleCourses.map((course, index) => (
              <div
                key={course._id}
                className="bg-white shadow-md rounded-lg p-1 m-2"
              >
                <div className="flex gap-4 justify-start py-2 bg-cyan-400 bg-opacity-30 shadow-md rounded-sm relative">
                  <h2 className="h-28 w-4 flex shadow-md items-center justify-center rounded-sm text-white bg-slate-400">
                    {startIndex + index + 1}
                  </h2>
                  <div>
                    <h2 className="text-sm  text-[#12C29F]">
                      Course Name: {course.title}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Category: {course.courseCategory}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {course.ApprovedStatus}
                    </p>
                    <div className="flex gap-1 items-center justify-center text-white text-xs mb-1 absolute bottom-0 -z-10">
                      <button
                        className={`border px-4 py-1 rounded-2xl ${
                          course.ApprovedStatus === "Approved"
                            ? "bg-gray-400"
                            : "bg-green-600"
                        }`}
                        disabled={course.ApprovedStatus === "Approved"}
                        onClick={() =>
                          updateCourseStatus(course._id, "Approved")
                        }
                      >
                        Approve
                      </button>
                      <button
                        className={`border px-4 py-1 rounded-2xl ${
                          course.ApprovedStatus === "Deny"
                            ? "bg-gray-400"
                            : "bg-red-400"
                        }`}
                        disabled={course.ApprovedStatus === "Deny"}
                        onClick={() => updateCourseStatus(course._id, "Deny")}
                      >
                        Deny
                      </button>
                      <button
                        onClick={() => handleDelete(course._id)}
                        className="border px-4 py-1 rounded-2xl bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <table className="table-auto w-full shadow-md rounded-md text-base ">
            <thead>
              <tr className="bg-gray-200 text-[#12C29F] text-left  divide-x-2">
                <th className="px-4 py-2">SL</th>
                <th className="px-4 py-2">Course Name</th>
                <th className="px-4 py-2">Course Category</th>
                <th className="px-4 py-2">Instructor</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {visibleCourses.map((course, index) => (
                <tr
                  className="text-left hover:bg-slate-100 duration-150"
                  key={course._id}
                >
                  <td className="border px-4 py-2 ">
                    {startIndex + index + 1}
                  </td>
                  <td className="border px-4 py-2">{course.title}</td>
                  <td className="border px-4 py-2">{course.courseCategory}</td>
                  <td className="border px-4 py-2">{course.instructor}</td>
                  <td
                    className={`border px-4 py-2 ${
                      course.ApprovedStatus === "Approved"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {course.ApprovedStatus}
                  </td>
                  <td className="border px-4 py-2">
                    <div className="-z-10 flex gap-3 items-center justify-center text-white text-sm">
                      <button
                        className={`border px-4 py-1 rounded-2xl ${
                          course.ApprovedStatus === "Approved"
                            ? "bg-gray-400"
                            : "bg-green-600"
                        }`}
                        disabled={course.ApprovedStatus === "Approved"}
                        onClick={() =>
                          updateCourseStatus(course._id, "Approved")
                        }
                      >
                        Approve
                      </button>
                      <button
                        className={`border px-4 py-1 rounded-2xl ${
                          course.ApprovedStatus === "Deny"
                            ? "bg-gray-400"
                            : "bg-red-400"
                        }`}
                        disabled={course.ApprovedStatus === "Deny"}
                        onClick={() => updateCourseStatus(course._id, "Deny")}
                      >
                        Deny
                      </button>
                      <button
                        onClick={() => handleDelete(course._id)}
                        className="border px-4 py-1 rounded-2xl bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

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
    </div>
  );
};

export default ManageCourse;
