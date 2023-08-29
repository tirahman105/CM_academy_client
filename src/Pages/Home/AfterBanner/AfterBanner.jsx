import React from "react";

const AfterBanner = () => {
  return (
    <div className="max-w-7xl px-2 mx-auto  mt-16 ">
      <div className="grid gap-4 md:grid-cols-3  ">
        {/* ///////////////// */}
        <div className=" items-center gap-6 shadow-lg rounded-md flex hover:scale-105 duration-500 px-6 py-5 md:w-96 bg-[#1bbf721f]  border-2 border-[#1bbf723b]">
          <img src="https://i.ibb.co/nLhxHCL/learning.png" alt="" />

          <div>
            <h1 className="text-lg font-bold font-Roboto">Expedite Learning</h1>
            <p className="text-gray-600 font-Roboto text-sm">
              Adopting fast learning techniques by real-world experts
            </p>
          </div>
        </div>
        {/* ////////////// */}
        <div className=" items-center gap-6 border-2 shadow-lg rounded-md flex hover:scale-105 duration-500  px-6 py-5 md:w-96 bg-[#1bbf721f] border-[#1bbf723b]">
          <img src="https://i.ibb.co/nLhxHCL/learning.png" alt="" />

          <div>
            <h1 className="text-lg font-bold font-Roboto">
              Open-source Platform
            </h1>
            <p className="text-gray-600 font-Roboto text-sm">
              The world's learning open-source platform that helps your career
            </p>
          </div>
        </div>
        {/* ////////////// */}
        <div className=" items-center gap-6 border-2 shadow-lg rounded-md hover:scale-105 duration-500  flex px-6 py-5 md:w-96 bg-[#1bbf721f] border-[#1bbf723b]">
          <img src="https://i.ibb.co/nLhxHCL/learning.png" alt="" />

          <div>
            <h1 className="text-lg font-bold font-Roboto">
              Maximum Efficiency
            </h1>
            <p className="text-gray-600 font-Roboto text-sm">
              Learning from the course has the potential to achieve maximum
              efficiency
            </p>
          </div>
        </div>
        {/* ////////////// */}
      </div>
    </div>
  );
};

export default AfterBanner;

// https://i.ibb.co/fVJs3V6/source.png
//
// https://i.ibb.co/RBvknSC/out-line.png
