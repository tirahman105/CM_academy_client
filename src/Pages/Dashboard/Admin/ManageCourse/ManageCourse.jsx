import React, { useState, useEffect } from "react";
import DashboardTopNav from "../../Shared/DashboardTopNav/DashboardTopNav";

const ManageCourse = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [courses, setCourses] = useState([]);

  console.log(courses)
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

  return (
    <div className="">
      <DashboardTopNav></DashboardTopNav>
     <div>
       <h1 className=" text-lg  p-5 ">
        Manage Courses
      </h1>
     </div>
      {isSmallScreen ? (
        <div className="text-start rounded-md">
          {courses.map((course, index) => (
            <div
              key={course._id}
              className="bg-white shadow-md rounded-lg p-1 m-2"
            >
              <div className="flex gap-4 justify-start py-2 bg-cyan-400 bg-opacity-30 shadow-md rounded-sm relative">
                <h2 className="h-28 w-4 flex shadow-md items-center justify-center rounded-sm text-white bg-slate-400">
                  {index + 1}
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
                      onClick={() => updateCourseStatus(course._id, "Approved")}
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
                    <button className="border px-4 py-1 rounded-2xl bg-red-600">
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
            {courses.map((course, index) => (
              <tr className="text-left" key={course._id}>
                <td className="border px-4 py-2 ">{index + 1}</td>
                <td className="border px-4 py-2">{course.title}</td>
                <td className="border px-4 py-2">
                  {course.courseCategory}
                </td>
                <td className="border px-4 py-2">Instructor</td>
                <td className="border px-4 py-2">
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
                      onClick={() => updateCourseStatus(course._id, "Approved")}
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
                    <button className="border px-4 py-1 rounded-2xl bg-red-600">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageCourse;
