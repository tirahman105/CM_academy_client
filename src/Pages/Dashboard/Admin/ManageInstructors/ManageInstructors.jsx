import React, { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const ManageInstructors = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // data fetch from DB

  const [instructors, setInstructors] = useState([]);
  const itemsPerPage = isSmallScreen ? 3 : 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPageCount = Math.ceil(instructors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage - 1; // Calculate the last index of the displayed range
  const visibleInstructors = instructors.slice(startIndex, endIndex + 1); // Adjust the visibleCourses range

  useEffect(() => {
    fetch(
      "https://cm-academy-test-server-production.up.railway.app/users/instructor"
    )
      .then((res) => res.json())
      .then((result) => {
        setInstructors(result);
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
    <div className="">
    
      {/* instructor table  */}

      <div className="border p-4">
        <div className="my-5 mt-4">
          <h1 className=" text-lg">Instructor Details</h1>
          <p className="text-base mb-4">Manage courses posted by Instructors</p>
          <hr />
        </div>
        {isSmallScreen ? (
          // Card for small screens
          <div className="text-start">
            {visibleInstructors.map((instructor, index) => (
              <div
                className="bg-white shadow-md rounded-lg p-4 m-2"
                key={instructor._id}
              >
                <div className="flex gap-4 justify-start items-center">
                  <h2 className="text-lg font-semibold p-2 rounded-full bg-slate-400">
                    {startIndex + index + 1}
                  </h2>
                  <div>
                    <h2 className="text-lg font-semibold text-[#12C29F]">
                      {instructor.fullName}
                    </h2>
                    <div className="flex gap-2">
                      <span>
                        <AiOutlineMail></AiOutlineMail>
                      </span>
                      <p className="text-gray-500 text-sm">
                        {" "}
                        {instructor.email}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span>
                        <IoMdCall></IoMdCall>
                      </span>
                      <p className="text-gray-500 text-sm">
                        {instructor?.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Table for large screens
          <table className="table-auto w-full shadow-md text-base text-start">
            <thead>
              <tr className="bg-gray-200 text-[#12C29F] text-left  font-bold divide-x-2">
                <th className="px-4 py-2 ">SL</th>
                <th className=" py-2 ">Image</th>
                <th className="px-4 py-2 ">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Contact</th>
              </tr>
            </thead>
            <tbody>
              {visibleInstructors.map((instructor, index) => (
                <tr
                  key={instructor._id}
                  className="hover:bg-slate-100 duration-150"
                >
                  <td className="border px-4 py-2">{startIndex + index + 1}</td>
                  <td className="border px-auto py-2"><img src={instructor.userImage} className='w-12 avatar rounded-full' alt="" /></td>
                  <td className="border px-4 py-2">{instructor.fullName}</td>
                  <td className="border px-4 py-2">{instructor.email}</td>
                  <td className="border px-4 py-2">{instructor.phone}</td>
                </tr>
              ))}

              {/* Add more rows as needed */}
            </tbody>
          </table>
        )}

        {/* Pagination controls */}
        <div className="flex justify-center mt-4 border w-1/2 mx-auto px-3 py-1 rounded-lg bg-green-100 border-green-500">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 px-3 py-1 bg-green-300 rounded-md"
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
                  : "bg-green-300"
              } rounded-md`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPageCount}
            className="ml-2 px-3 py-1 bg-green-300 rounded-md"
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

export default ManageInstructors;
