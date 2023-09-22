import React, { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { IoMdCall } from "react-icons/io";

const ManageStudents = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [students, setStudents] = useState([]);
  const itemsPerPage = isSmallScreen ? 10 : 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPageCount = Math.ceil(students.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage - 1; // Calculate the last index of the displayed range
  const visibleStudents = students.slice(startIndex, endIndex + 1); // Adjust the visibleCourses range

  // data fetch from DB

  useEffect(() => {
    fetch(
      "https://cm-academy-test-server-production.up.railway.app/users/student"
    )
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize); // Listen for window resize events

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="border p-4">
      <div className="my-5 mt-4">
        <h1 className=" text-lg font-bold">Students List</h1>
        <p className="text-base mb-4">All registered students list below</p>
        <hr />
      </div>
      {isSmallScreen ? (
        // Card for small screens
        <div className="h-[400px] overflow-y-auto">
          {visibleStudents.map((student) => (
            <div key={student._id}>

            <div
              className="bg-white shadow-md rounded-lg p-4 mb-3 mt-3 "
              key={student._id}
              >
              <h2 className="text-lg font-semibold">{student.fullName}</h2>
              <div className="flex gap-2">
                <span>
                  <AiOutlineMail></AiOutlineMail>
                </span>
                <p className="text-gray-500 text-sm"> {student.email}</p>
              </div>
              <div className="flex gap-2">
                <span>
                  <IoMdCall></IoMdCall>
                </span>
                <p className="text-[#12C29F] text-xl">{student?.phone}</p>
              </div>
            </div>
              </div>
          ))}
        </div>
      ) : (
        // Table for large screens
        <table className="table-auto w-full shadow-md text-base font-Roboto">
          <thead>
            <tr className="bg-gray-800 text-white text-center   divide-x-2">
              <th className="px-4 py-2 ">SL</th>
              <th className="px-4 py-2 ">Image</th>
              <th className="px-4 py-2 ">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-auto py-2">Contact</th>
            </tr>
          </thead>
          <tbody>
            {visibleStudents.map((student, index) => (
              <tr
                key={student._id}
                className="hover:bg-slate-100 duration-150s"
              >
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-auto py-2 flex items-center justify-center">
                  <img
                    src={student.userImage}
                    className="w-12 h-12 avatar rounded-full "
                    alt=""
                  />
                </td>
                <td className="border px-4 py-2">{student.fullName}</td>
                <td className="border px-4 py-2">{student.email}</td>
                <td className="border px-4 py-2">{student.contactNumber}</td>
              </tr>
            ))}
            {/* Add more rows as needed */}
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
                ? "bg-gray-800 text-white"
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

export default ManageStudents;
