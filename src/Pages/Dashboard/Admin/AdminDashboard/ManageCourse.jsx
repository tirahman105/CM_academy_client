import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const ManageCourse = ({ courses, courseActions, handleActionChange, handlePerformAction }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const coursesToDisplay = courses.slice(startIndex, endIndex);

  const totalPages = Math.ceil(courses.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    // Listen for changes in the courseActions state and trigger actions immediately
    for (const courseId in courseActions) {
      if (courseActions[courseId]) {
        handlePerformAction(courseId);
      }
    }
  }, [courseActions, handlePerformAction]);

  return (
    <div>
      {coursesToDisplay.map((course) => (
        <div key={course._id} className='max-w-full bg-gray-100 rounded-lg mobile:px-1 mobile:py-2 tablet:p-4 flex mobile:gap-4 items-center desktop:space-x-4 tablet:space-x-6 laptop:space-x-2 mt-2'>
          <img src={course.courseThumbnail} alt={course.title} className='tablet:w-20 tablet:h-20 mobile:w-10 mobile:h-10 laptop:w-14 laptop:h-14 desktop:w-20 desktop:h-20 object-cover rounded-md transition-transform duration-300 transform hover:scale-110' />
          <div className='flex-1 min-w-[100px]'>
            <p className='text-gray-900 mobile:text-[14px] tablet:text-sm font-bold desktop:text-lg truncate '>{course.title}</p>
            <p className='text-sm text-gray-600 truncate'>by {course.instructor}</p>
          </div>
          <div className='flex items-center gap-2'>
            <p className={`text-sm ${course.ApprovedStatus === 'Approved' ? 'bg-[#1bbf72fa] mobile:w-[52px] tablet:w-20 mobile:h-4 desktop:h-full flex items-center mobile:text-[9px] tablet:text-sm laptop:text-[10px] desktop:text-sm tablet:px-2 laptop:px-1 laptop:w-[54px] desktop:w-20 laptop:h-4 desktop:px-2 mobile:px-1 tablet:py-[2px] shadow-sm font-bold rounded-md text-white' : 'text-red-700 bg-red-200  mobile:w-[52px] tablet:w-20 mobile:h-4 desktop:h-full flex items-center mobile:text-[9px] tablet:text-sm laptop:text-[10px] desktop:text-sm tablet:px-2 laptop:px-1 laptop:w-[54px] desktop:w-20 laptop:h-4 desktop:px-2 mobile:px-1 tablet:py-[2px] shadow-sm font-bold rounded-md '}`}>
              {course.ApprovedStatus}
            </p>
          </div>
          <div className='flex flex-rown items-center'>
            <select
              className='border-2 hover:bg-black hover:text-white border-black mobile:h-5 mobile:flex mobile:items-center mobile:px-0 text-black mobile:text-[9px] tablet:text-sm tablet:px-2 tablet:py-1 rounded-lg transition duration-300 font-LeagueSpartan'
              onChange={(e) => handleActionChange(course._id, e.target.value)}
              value={courseActions[course._id] || ''}
            >
              <option value=''>Select Action</option>
              <option value='Approved'>Approve</option>
              <option value='Denied'>Deny</option>
              <option value='delete'>Delete</option>
            </select>
          </div>
        </div>
      ))}

      <div className="mt-4 flex justify-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="mr-2 tablet:px-3 tablet:py-1 bg-gray-200 rounded-md"
        >
          <GrFormPrevious></GrFormPrevious>
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 text-sm ${
              currentPage === index + 1
                ? 'bg-green-600 text-white'
                : 'bg-gray-200'
            } rounded-md`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="ml-2 tablet:px-3 tablet:py-1 bg-gray-200 rounded-md"
        >
          <p className="text-green-600">
            <GrFormNext />
          </p>
        </button>
      </div>
    </div>
  );
};

export default ManageCourse;
