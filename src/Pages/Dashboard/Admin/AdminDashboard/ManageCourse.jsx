import React from 'react';
import { BsCheck2Square } from 'react-icons/bs';

const ManageCourse = ({ courses, courseActions, handleActionChange, handlePerformAction }) => {
    return (
        <div>
            {courses.map((course) => (
                <div
                    key={course._id}
                    className='max-w-full bg-gray-100 rounded-lg p-4 flex items-center space-x-4 mt-2'
                >
                    <img
                        src={course.courseThumbnail}
                        alt={course.title}
                        className='w-20 h-20 object-cover rounded-md transition-transform duration-300 transform hover:scale-110'
                    />
                    <div style={{ flex: '1' }}>
                        <p className='text-gray-900 font-bold text-lg'>{course.title}</p>
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
        </div>
    );
};

export default ManageCourse;
