import React from 'react';
import img1 from '../../../../src/assets/icon/image1.png'
import img2 from '../../../../src/assets/icon/image2.png'
import img3 from '../../../../src/assets/icon/image3.png'
import img4 from '../../../../src/assets/icon/image4.png'
import CountUp from 'react-countup';

const StatSection = () => {
    const totalStudents = 1250;
    const totalInstructors = 30;
    const totalCourses = 80;
    const totalContent = 320;

    return (

        <div className="container mx-auto px-4 pt-16">
            <h1 className="text-4xl font-bold mb-5 text-center text-[#12C29F]">Key Statistics</h1>
            <p className='text-center font-semibold mb-20'>Our Instructors give  you best resources for every course</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16 lg:mb-16">
                {/* Card 1 */}
                <div className="card">
                    <div className=" rounded-full bg-[#62D4D8] flex items-center justify-center w-40 h-40 mx-auto">
                        <img src={img1} alt="" className="p-4" />
                    </div>
                    <div className="bg-gradient-to-t from-[#ffffff] to-[#62D4D8] rounded-lg hover:shadow-lg text-center p-4 -mt-6 border-0 border-b-4 border-b-[#62D4D8]">
                        <p className="text-xl font-extrabold text-gray-800">Enrolled Students</p>
                        <p className="text-3xl font-extrabold text-[#12C29F] mt-1 transform transition-transform  hover:scale-150">
                            <CountUp end={totalStudents} />
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="card">
                    <div className="rounded-full bg-[#62D4D8] flex items-center justify-center w-40 h-40 mx-auto">
                        <img src={img2} alt="" className="p-4" />
                    </div>
                    <div className="bg-gradient-to-t from-[#ffffff] to-[#62D4D8] rounded-lg -mt-6 hover:shadow-lg text-center p-4 border-0 border-b-4 border-b-[#62D4D8]">
                        <p className="text-xl font-extrabold text-gray-800">Total Instructors</p>
                        <p className="text-3xl font-extrabold text-[#12C29F] mt-1 transform transition-transform hover:scale-150">
                            <CountUp end={totalInstructors} />

                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="card">
                    <div className="rounded-full bg-[#62D4D8] flex items-center justify-center w-40 h-40 mx-auto">
                        <img src={img3} alt="" className=" p-6 mt-3" />
                    </div>
                    <div className="bg-gradient-to-t from-[#ffffff] to-[#62D4D8] rounded-lg -mt-6 hover:shadow-lg text-center p-4 border-0 border-b-4 border-b-[#62D4D8]">
                        <p className="text-xl font-extrabold text-gray-800">Approved Courses</p>
                        <p className="text-3xl font-extrabold text-[#12C29F] mt-1 transform transition-transform hover:scale-150">
                            <CountUp end={totalCourses} />
                        </p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="card">
                    <div className="rounded-full bg-[#62D4D8] flex items-center justify-center w-40 h-40 mx-auto">
                        <img src={img4} alt="" className=" p-6" />
                    </div>
                    <div className="bg-gradient-to-t from-[#ffffff] to-[#62D4D8] rounded-lg -mt-6 hover:shadow-lg text-center p-4 border-0 border-b-4 border-b-[#62D4D8]">
                        <p className="text-xl font-extrabold text-gray-800">Total Contents</p>
                        <p className="text-3xl font-extrabold text-[#12C29F] mt-1 transform transition-transform hover:scale-150">
                            <CountUp end={totalContent} />
                        </p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default StatSection;