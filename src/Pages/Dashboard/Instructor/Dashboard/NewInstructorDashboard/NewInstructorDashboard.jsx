import React from "react";
import hello from "../../../../../assets/hello.png";
import { FaSearch } from "react-icons/fa";
import IntructorFinance from "./IntructorFinance";
import DashboradCourses from "./DashboradCourses";
import { useContext } from "react";
import { AuthContext } from "../../../../../providers/AuthProvider";
import InstructorNavProfile from "./InstructorNavProfile";
import InstructorStatistics from "./InstructorStatistics";

const NewInstructorDashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="mobile:px-4">
      <div>
        <div className="grid grid-cols-1 laptop:gap-6 laptop:grid-cols-2">
          <div className="order-2 laptop:order-1">
            <div className="rounded-lg w-full bg-white">
              <div className="mb-4 rounded-md bg-gray-100  mobile:p-8 pr-0 flex justify-around items-center laptop:w-auto laptop:p-5 laptop:pr-0 ">
                <div className="space-y-1">
                  <h1 className="text-4xl font-extrabold font-Jost tracking-wider laptop:text-2xl mobile:text-xl">
                    Hello! {user?.fullName}
                  </h1>
                  <p className="text-base font-semibold laptop:text-sm mobile:text-xs">
                    It's good to see you again on Instructor.
                  </p>
                </div>
                <div className="-mt-11">
                  <img className="" src={hello} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 laptop:order-2">
            <div className="p-6 rounded-lg laptop:p-0">
              <div className="flex items-center gap-6 justify-start mb-4">
                <div className="relative flex items-center mobile:ml-4 flex-grow rounded-md mobile:text-sm text-lg bg-gray-100">
                  <span className="flex items-center pl-4">
                    <FaSearch  className="text-gray-700 mobile:text-[12px] tablet:text-[14px] laptop:text-[16px]" />
                  </span>
                  <input
                    type="text"
                    placeholder=""
                    className="w-full focus:outline-none bg-gray-100 p-2"
                  />
                </div>
                {/* Profile */}
                <InstructorNavProfile></InstructorNavProfile>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 laptop:gap-6 laptop:grid-cols-2">
            <div className="order-2 laptop:order-1">
              <div>
                <IntructorFinance></IntructorFinance>
              </div>
            </div>
            <div className="order-1 laptop:order-2">
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-100 p-4 text-center rounded-lg flex items-center justify-center gap-4 laptop:text-base mobile:text-sm">
                  <p className="text-6xl font-extrabold laptop:text-3xl mobile:text-xl">
                    10
                  </p>
                  <p className="text-lg font-normal mobile:text-base">
                    Courses
                  </p>
                </div>
                <div className="bg-gray-100 p-4 text-center rounded-lg flex items-center justify-center gap-4 laptop:text-base mobile:text-sm">
                  <p className="text-6xl font-extrabold laptop:text-3xl mobile:text-xl">
                    5
                  </p>
                  <p className="text-lg font-normal mobile:text-base">Blogs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 laptop:gap-2 laptop:grid-cols-2">
            <div>
              <DashboradCourses></DashboradCourses>
            </div>
            <div>
              <InstructorStatistics></InstructorStatistics>
            </div>
          </div>
        </div>

        {/* <div>
                    <DashboradCourses></DashboradCourses>
                </div>
                <div>
                    <IntructorFinance></IntructorFinance>
                </div>
                <div className='grid grid-cols-2 gap-4 mt-6'>
                    <div className='bg-gray-100 p-4 text-center rounded-lg flex items-center justify-center gap-4'>

                        <p className='text-6xl font-extrabold laptop:text-3xl'>
                            10
                        </p>
                        <p className='text-lg font-normal'>
                            Courses
                        </p>
                    </div>

                    <div className='bg-gray-100 p-4 text-center rounded-lg flex items-center justify-center gap-4'>

                        <p className='text-6xl font-extrabold laptop:text-3xl'>
                            5
                        </p>
                        <p className='text-lg font-normal'>
                            Blogs
                        </p>
                    </div>


                </div>

                <div>
                    <InstructorStatistics></InstructorStatistics>
                </div> */}
      </div>
    </div>
  );
};

export default NewInstructorDashboard;
