import React from 'react';
import img1 from '../../../../src/assets/image1.png'
import img2 from '../../../../src/assets/image2.png'
import img3 from '../../../../src/assets/image3.png'
import img4 from '../../../../src/assets/image4.png'

const StatSection = () => {
    const totalUsers = 1250;
    const totalInstructors = 30;
    const totalCourses = 80;
    const totalContent = 3208;

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 mb-10">
                <h1 className='text-4xl font-bold text-[#12C29F] text-center mt-8'>Key Statistics</h1>
                <p className='text-center mb-10'>Our Instructors give  you best resources for every course</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
                    {/* Card 1 */}
                    <div className="card">
                        <div className="rounded-full bg-[#A5CAD3] flex items-center justify-center w-40 h-40 mx-auto">
                            <img src={img1} alt="" className=" p-4" />
                        </div>
                        <div className="bg-white rounded-lg hover:shadow-lg text-center p-4 -mt-6">
                            <p className="text-xl font-bold text-gray-800">Total Users</p>
                            <p className="text-2xl font-extrabold text-[#12C29F] mt-1 transform transition-transform hover:scale-105">
                                {totalUsers}
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card">
                        <div className="rounded-full bg-[#A5CAD3] flex items-center justify-center w-40 h-40 mx-auto">
                            <img src={img2} alt="" className="p-4" />
                        </div>
                        <div className="bg-white rounded-lg -mt-6 hover:shadow-lg text-center p-4">
                            <p className="text-xl font-bold text-gray-800">Total Instructors</p>
                            <p className="text-2xl font-extrabold text-[#12C29F] mt-1 transform transition-transform hover:scale-105">
                                {totalInstructors}
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="card">
                        <div className="rounded-full bg-[#A5CAD3] flex items-center justify-center w-40 h-40 mx-auto">
                            <img src={img3} alt="" className=" p-4" />
                        </div>
                        <div className="bg-white rounded-lg -mt-6 hover:shadow-lg text-center p-4">
                            <p className="text-xl font-bold text-gray-800">Total Courses</p>
                            <p className="text-2xl font-extrabold text-[#12C29F] mt-1 transform transition-transform hover:scale-105">
                                {totalCourses}
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="card">
                        <div className="rounded-full bg-[#A5CAD3] flex items-center justify-center w-40 h-40 mx-auto">
                            <img src={img4} alt="" className=" p-4" />
                        </div>
                        <div className="bg-white rounded-lg -mt-6 hover:shadow-lg text-center p-4">
                            <p className="text-xl font-bold text-gray-800">Total Contents</p>
                            <p className="text-2xl font-extrabold text-[#12C29F] mt-1 transform transition-transform hover:scale-105">
                                {totalContent}
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default StatSection;