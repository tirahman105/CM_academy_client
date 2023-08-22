import React, { useState } from 'react';

const CourseOutline = ({ milestoneList, selectedMilestone, onSelectMilestone, onSelectModule }) => {
  const [expandedMilestone, setExpandedMilestone] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMilestones, setFilteredMilestones] = useState(milestoneList);

  const toggleMilestone = (milestoneIndex) => {
    if (expandedMilestone === milestoneIndex) {
      setExpandedMilestone(null);
    } else {
      setExpandedMilestone(milestoneIndex);
    }
  };

  const handleSearch = (query) => {
    const filtered = milestoneList.filter((milestone) =>
      milestone.modules.some((module) => module.module.includes(query))
    );
    setFilteredMilestones(filtered);
  };

  return (
    <div className="p-4 rounded-lg">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-[18px] md:text-xl w-full md:w-3/5 md:mb-3 mt-3 font-bold">Course Outline</h2>
        <progress className=" progress progress-info w-full md:w-1/3 lg:w-1/4 xl:w-1/3 h-4" value="70" max="100"></progress>
      </div>
      <div className="w-full mt-4 md:mt-0">
        <input
          type="text"
          placeholder="Search Lesson"
          className="input input-success w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch(searchQuery);
            }
          }}
        />
      </div>
      <ul className="border border-gray-300 rounded-md p-5 mt-5">
        {filteredMilestones.map((milestone, milestoneIndex) => (
          <li className="w-full px-5 py-3 mb-4 bg-green-500 text-xl md:text-2xl" key={milestoneIndex}>
          <span
          className={`cursor-pointer p-82 rounded-md text-white text-[18px] md:text-2xl  ${
            expandedMilestone === milestoneIndex ? 'font-bold' : ''
          }`}
          onClick={() => toggleMilestone(milestoneIndex)}
        >
          {milestone.milestone}
        </span>
            {expandedMilestone === milestoneIndex && (
              <ul className="text-black mt-3 w-full bg-white">
                {milestone.modules.map((module, moduleIndex) => (
                  <li className="px-3  py-2 text-[14px]  md:text-xl border-b border-green-400 mt-4 mb-4" key={moduleIndex}>
                  <span
                  className="cursor-pointer px-3 rounded-md"
                  onClick={() => {
                    onSelectMilestone(milestoneIndex);
                    onSelectModule(moduleIndex, module.videoUrl);
                  }}
                >
                  {module.module}
                </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <button className="bg-green-500 text-lg md:text-xl text-white rounded-md py-3 px-4 w-full font-bold">
          Course Summary
        </button>
      </div>
    </div>
  );
};

export default CourseOutline;
