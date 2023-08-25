import React, { useState, useEffect } from "react";

const ManageCourse = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [courses, setCourses] = useState([]);

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

  const handleApprove = async (courseId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/categories/${courseId}/approval`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ApprovedStatus: "Approved",
          }),
        }
      );

      if (response.ok) {
        const updatedCourses = courses.map((course) => {
          if (course._id === courseId) {
            return {
              ...course,
              ApprovedStatus: "Approved",
            };
          }
          return course;
        });
        setCourses(updatedCourses);
      } else {
        console.error("Failed to update course approval status");
      }
    } catch (error) {
      console.error("Error updating course approval:", error);
    }
  };

  return (
    <div className="">
      <h1 className="text-center text-3xl font-bold p-5 text-[#12C29F] bg-slate-600 rounded-md">
        Manage Courses
      </h1>
      {isSmallScreen ? (
        <div className="text-start rounded-md">
          {courses.map((course, index) => (
            <div key={course._id} className="bg-white shadow-md rounded-lg p-1 m-2">
              <div className="flex gap-4 justify-start py-2 bg-cyan-400 bg-opacity-30 shadow-md rounded-sm relative">
                <h2 className="text-lg font-semibold h-28 w-4 flex shadow-md items-center justify-center rounded-sm text-white bg-slate-400">
                  {index + 1}
                </h2>
                <div>
                  <h2 className="text-sm font-semibold text-[#12C29F]">
                    Course Name: {course.title}
                  </h2>
                  <p className="text-gray-500 text-sm">Category: {course.courseCategory}</p>
                  <p className="text-gray-500 text-sm">{course.ApprovedStatus}</p>
                  <div className="flex gap-1 items-center justify-center text-white text-xs mb-1 absolute bottom-0 -z-10">
                    <button
                      className="border px-4 py-1 rounded-2xl bg-green-600"
                      disabled={course.ApprovedStatus === "Approved"}
                      onClick={() => handleApprove(course._id)}
                    >
                      Approve
                    </button>
                    <button
                      className="border px-4 py-1 rounded-2xl bg-red-400"
                      disabled={course.ApprovedStatus === "Deny"}
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
        <table className="table-auto w-full shadow-md rounded-md">
          <thead>
            <tr className="bg-gray-100 text-[#12C29F] font-bold divide-x-2">
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
              <tr key={course._id}>
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2 text-center">{course.title}</td>
                <td className="border px-4 py-2 text-center">{course.courseCategory}</td>
                <td className="border px-4 py-2 text-center">Instructor</td>
                <td className="border px-4 py-2 text-center">{course.ApprovedStatus}</td>
                <td className="border px-4 py-2 text-center">
                  <div className="-z-10 flex gap-3 items-center justify-center text-white text-sm">
                    <button
                      className="border px-4 py-1 rounded-2xl bg-green-600"
                      disabled={course.ApprovedStatus === "Approved"}
                      onClick={() => handleApprove(course._id)}
                    >
                      Approve
                    </button>
                    <button
                      className="border px-4 py-1 rounded-2xl bg-red-400"
                      disabled={course.ApprovedStatus === "Deny"}
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
