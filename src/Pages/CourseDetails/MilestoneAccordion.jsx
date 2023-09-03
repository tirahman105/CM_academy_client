import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";

const MilestoneAccordion = ({ courseOutline, activeMilestones, handleToggleMilestone }) => {
  return (
    <div className="border-2 py-5 px-2 sm:w-[55%] rounded-md font-Lexend mb-16">
      {courseOutline.map((milestone, index) => (
        <div
          key={index}
          className={`py-5 md:px-5 border-b duration-500 group select-none ${
            activeMilestones[index] ? "is-active bg-white" : ""
          }`}
        >
          <div className="flex items-center cursor-pointer">
            <div
              className={`w-full font-bold text-sm ${
                activeMilestones[index] ? "font-bold" : ""
              }`}
              onClick={() => handleToggleMilestone(index)}
            >
              {milestone.milestone}
            </div>
            <div
              className={`text-xl cursor-pointer duration-500 ${
                activeMilestones[index] ? "rotate-[270deg]" : ""
              }`}
              onClick={() => handleToggleMilestone(index)}
            >
              {activeMilestones[index] ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </div>
          </div>
          <div
            className={`overflow-hidden duration-700 max-h-0   flex flex-col gap-2 ${
              activeMilestones[index] ? "max-h-[200px] md:max-h-[500px]  py-2 pr-2 md:pr-6 pl-2 md:pl-8 mt-4" : ""
            }`}
          >
            {/* Display sessionTitle */}
            {milestone.sessions.map((session, sessionIndex) => (
              <div
                key={sessionIndex}
                className="flex items-center justify-between  w-full bg-[#258d5c28] shadow-sm  py-2 pr-2 md:pr-6 pl-2 md:pl rounded-md hover:shadow-md duration-500"
              >
                <div className="flex items-center gap-2 md:gap-6 font-Poppins text-[10px] md:text-[13px] font-bold text-gray-500">
                  <p className="text-green-600 ">Session-{sessionIndex + 1} </p>
                  <h3>{session.sessionTitle}</h3>
                </div>
                <AiFillLock className="text-gray-500 text-sm"></AiFillLock>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MilestoneAccordion;
