import React, { useState } from 'react';
import { BsCheck2Square } from 'react-icons/bs';
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

    return (
        <div>
            {coursesToDisplay.map((course) => (
                <div key={course._id} className='max-w-full bg-gray-100 rounded-lg p-4 flex items-center space-x-4 mt-2'>
                    <img src={course.courseThumbnail} alt={course.title} className='w-20 h-20 object-cover rounded-md transition-transform duration-300 transform hover:scale-110' />
                    <div style={{ flex: '1' }}>
                        <p className='text-gray-900 font-bold text-base md:text-base xl:text-lg laptop:text-base'>{course.title}</p>
                        <p className='text-sm text-gray-600'>by {course.instructor}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className={`text-sm ${course.ApprovedStatus === 'Approved' ? 'text-green-700 bg-green-200 p-2 rounded-lg' : 'text-red-700 bg-red-200 p-2 rounded-lg'}`}>
                            {course.ApprovedStatus}
                        </p>
                    </div>
                    <div className='flex flex-rown items-center'>
                        <select
                            className='border-2 hover:bg-black hover:text-white border-black text-black text-base px-2 py-1 rounded-lg transition duration-300'
                            onChange={(e) => handleActionChange(course._id, e.target.value)}
                            value={courseActions[course._id] || ''}
                        >
                            <option value=''>Select Action</option>
                            <option value='Approved'>Approve</option>
                            <option value='Denied'>Deny</option>
                            <option value='delete'>Delete</option>
                        </select>
                        <button
                            className='border-2 hover:bg-black hover:text-white border-black text-black px-2 py-1 text-2xl rounded-lg transition duration-300 ml-2 cursor-pointer'
                            onClick={() => handlePerformAction(course._id)}
                            disabled={!courseActions[course._id]}
                        >
                            <BsCheck2Square className='text-green-600' />
                        </button>
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
