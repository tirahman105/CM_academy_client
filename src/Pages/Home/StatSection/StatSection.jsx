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

        <div className="max-w-7xl mx-auto px-2 mt-28">
            <h1 className="text-4xl font-bold mb-5  font-Poppins mobile:text-xl">
          Key Statistics
        </h1>
        <p className="  tablet:mb-10 font-Jost">
        Our Ed Tech platform key statistics 
        </p>
        
            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 tablet:mt-16 mobile:mt-6 lg:mb-16">
                {/* Card 1 */}
             

                <div className=" items-center gap-6 border shadow-lg rounded-md hover:scale-105 duration-500 h-36 flex px-6 py-5 font-Jost  border-[#1bbf728c]">
          <img src={img1} alt="" className='w-1/4' />

          <div>
          <p className="text-sm md:text-xl lg:text-xl font-extrabold text-gray-800">Enrolled Students</p>
          <p className="text-2xl md:text-3xl lg:text-3xl font-extrabold text-[#12C29F] mt-1 ">
                            <CountUp end={totalStudents} />
                        </p>
          </div>
        </div>

                {/* Card 2 */}
             

                <div className=" items-center gap-6 border shadow-lg rounded-md hover:scale-105 duration-500 h-36 flex px-6 py-5 font-Jost border-[#1bbf728c]">
          <img src={img2} alt="" className='w-1/4' />

          <div>
          <p className="text-sm md:text-xl lg:text-xl font-extrabold text-gray-800">Total Instructors</p>
          <p className="text-2xl md:text-3xl lg:text-3xl font-extrabold text-[#12C29F] mt-1 ">
                            <CountUp end={totalInstructors} />
                        </p>
          </div>
        </div>

                {/* Card 3 */}
            


                <div className=" items-center gap-6 border shadow-lg rounded-md hover:scale-105 duration-500 h-36 flex px-6 py-5 font-Jost  border-[#1bbf728c]">
          <img src={img3} alt="" className='w-1/4' />

          <div>
          <p className="text-sm md:text-xl lg:text-xl font-extrabold text-gray-800">Approved Courses</p>
          <p className="text-2xl md:text-3xl lg:text-3xl font-extrabold text-[#12C29F] mt-1 ">
                            <CountUp end={totalCourses} />
                        </p>
          </div>
        </div>

                {/* Card 4 */}
           
                 <div className=" items-center gap-6 border shadow-lg rounded-md hover:scale-105 duration-500 h-36 flex px-6 py-5  border-[#1bbf728c] font-Jost">
          <img src={img4} alt="" className='w-1/4' />

          <div>
          <p className="text-sm md:text-xl lg:text-xl font-extrabold text-gray-800">Total Contents</p>
          <p className="text-2xl md:text-3xl lg:text-3xl font-extrabold text-[#12C29F] mt-1 ">
                            <CountUp end={totalContent} />
                        </p>
          </div>
        </div>
            </div>



        </div>
    );
};

export default StatSection;