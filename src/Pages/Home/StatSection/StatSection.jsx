import React from 'react';
import { FaUsers, FaChalkboardTeacher, FaBook } from 'react-icons/fa';

const StatSection = () => {
const totalUsers = 1250; 
    const totalInstructors = 30; 
    const totalCourses = 80; 

    return (
            <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 mb-10">
                <h1 className='text-4xl font-bold text-gray-800 text-center mt-8 mb-10'>Key Statistics</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg">
                        <div className="text-2xl text-indigo-500 mb-3">
                            <FaUsers />
                        </div>
                        <p className="text-lg font-semibold text-gray-800">Total Users</p>
                        <p className="text-3xl font-extrabold text-indigo-600 mt-2 transform transition-transform hover:scale-105">
                            {totalUsers}
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center mt-6 md:mt-0 hover:shadow-lg">
                        <div className="text-2xl text-green-500 mb-3">
                            <FaChalkboardTeacher />
                        </div>
                        <p className="text-lg font-semibold text-gray-800">Total Instructors</p>
                        <p className="text-3xl font-extrabold text-green-600 mt-2 transform transition-transform hover:scale-105">
                            {totalInstructors}
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center mt-6 md:mt-0 hover:shadow-lg">
                        <div className="text-2xl text-purple-500 mb-3">
                            <FaBook />
                        </div>
                        <p className="text-lg font-semibold text-gray-800">Total Courses</p>
                        <p className="text-3xl font-extrabold text-purple-600 mt-2 transform transition-transform hover:scale-105">
                            {totalCourses}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatSection;