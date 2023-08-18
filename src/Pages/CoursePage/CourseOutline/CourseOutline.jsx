import { useState } from "react";

const CourseOutline = ({ milestoneList, onSelectModule }) => {
  const [expandedMilestone, setExpandedMilestone] = useState(null);

  const toggleMilestone = (milestoneIndex) => {
    if (expandedMilestone === milestoneIndex) {
      setExpandedMilestone(null);
    } else {
      setExpandedMilestone(milestoneIndex);
    }
  };


  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMilestones, setFilteredMilestones] = useState(milestoneList);

  const handleSearch = (query) => {
    const filtered = milestoneList.filter((milestone) =>
      milestone.modules.some((module) => module.module.includes(query))
    );
    setFilteredMilestones(filtered);
  };

console.log(searchQuery)


  return (
    <div>
      <div className="p-4 rounded-lg">
      <div className=" flex items-center gap-24">
      <h2 className="text-xl w-3/5  mb-3 mt-3 font-bold">Course Outline</h2>
      {/*<progress className="progress progress-info w-80 md:w-32 lg:w-56 xl:w-80 h-4" value="70" max="100"></progress> */}
      </div>
        <div className="w-full">
          <input type="text" placeholder="Search Lesson" className="input input-success w-full" 
          
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch(searchQuery);
            }
          }}
          />
        </div>
        <ul className="border border-gray-300 rounded-md  p-5 mt-5">
          {milestoneList.map((milestone, milestoneIndex) => (
            <li className="w-full px-5 py-3  mb-4 " key={milestoneIndex}>
              <span
                className={`cursor-pointer p-4 rounded-md lg:text-2xl text-white  bg-green-500   ${
                  expandedMilestone === milestoneIndex ? 'font-bold' : ''
                }`}
                onClick={() => toggleMilestone(milestoneIndex)}
              >
                {milestone.milestone}
              </span>
              {expandedMilestone === milestoneIndex && (
                <ul className="text-black mt-3 w-full">
                  {milestone.modules.map((module, moduleIndex) => (
                    <li className="px-3 py-2 text-xl border-b border-green-400 mt-4 mb-4" key={moduleIndex}>
                      <span
                        className="cursor-pointer px-3 rounded-md"
                        onClick={() => onSelectModule(moduleIndex, module.videoUrl)}
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
      </div>
      <div className="mt-4">
        <button className="bg-green-500 text-xl text-white rounded-md py-3 px-4 w-full font-bold">
          Course Summary
        </button>
      </div>
    </div>
  );
};

export default CourseOutline;

