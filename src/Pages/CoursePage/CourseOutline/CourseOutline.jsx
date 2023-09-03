import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CourseOutline = ({
  milestoneList,
  selectedMilestone,
  unlockedSessions, // Receive unlocked sessions state
  onSelectMilestone,
  onSelectSession,
  onSessionComplete, // Function to notify when a session is completed
}) => {
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
      milestone.sessions.some((session) => session.sessionTitle.includes(query))
    );
    setFilteredMilestones(filtered);
  };

  return (
    <div className="p-4 mb-6 rounded-lg backdrop-blur-md bg-slate-200 boxShadowCourse bg-opacity-30">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-[18px] md:text-xl w-full md:w-3/5 md:mb-3 mt-3 font-bold">
          Course Outline
        </h2>
        <progress
          className="progress progress-info w-full md:w-1/3 lg:w-1/4 xl:w-1/3 h-4"
          value="70"
          max="100"
        ></progress>
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
      <ul className="p-5 mt-5">
        {filteredMilestones.map((milestone, milestoneIndex) => (
          <motion.li
            key={milestoneIndex}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`w-full px-5 py-5 mb-4 h-0 border-2 border-gray-300 shadow-md text-xl md:text-2xl rounded-lg`}
          >
            <span
              className={`cursor-pointer rounded-md text-[18px] font-TitilliumWeb md:text-2xl font-bold`}
              onClick={() => toggleMilestone(milestoneIndex)}
            >
              {milestone.milestone}
            </span>
            <AnimatePresence>
              {expandedMilestone === milestoneIndex && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-black w-full"
                >
                  {milestone.sessions.map((session, sessionIndex) => (
                    <motion.button
                      key={sessionIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ delay: 0.2 }}
                      className={`px-3 py-1 mt-5 w-full text-left duration-700 text-[14px] md:text-lg text-gray-700 font-bold font-TitilliumWeb border-l-8 border-r-8 border-gray-100 shadow-md bg-[#1bbf7215] rounded-lg ${
                        sessionIndex <= unlockedSessions[milestoneIndex]
                          ? 'unlocked'
                          : 'locked'
                      } ${
                        sessionIndex === selectedMilestone &&
                        unlockedSessions[milestoneIndex] >= sessionIndex
                          ? 'selected'
                          : ''
                      } ${
                        sessionIndex > unlockedSessions[milestoneIndex]
                          ? 'pointer-events-none'
                          : ''
                      }`}
                      onClick={() => {
                        if (
                          sessionIndex <= unlockedSessions[milestoneIndex] &&
                          unlockedSessions[milestoneIndex] >= sessionIndex
                        ) {
                          onSelectMilestone(milestoneIndex);
                          onSelectSession(sessionIndex, session.videoLink);
                          onSessionComplete(milestoneIndex, sessionIndex);
                        }
                      }}
                    >
                      <span
                        className={`cursor-pointer px-3 rounded-md ${
                          sessionIndex <= unlockedSessions[milestoneIndex]
                            ? 'unlocked'
                            : 'locked'
                        }`}
                      >
                        {session.sessionTitle}
                      </span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        ))}
      </ul>
      <div className="mt-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          className={`text-gray-700 font-Raleway border-2 font-bold py-4 text-lg rounded-xl px-4 css-selector hover:border-[#1bbf7246] duration-500 ${
            unlockedSessions[selectedMilestone] >=
            milestoneList[selectedMilestone].sessions.length - 1
              ? 'disabled'
              : ''
          }`}
          onClick={() => {
            if (
              unlockedSessions[selectedMilestone] >=
              milestoneList[selectedMilestone].sessions.length - 1
            ) {
              onSelectMilestone(selectedMilestone + 1);
            }
          }}
        >
          Course Summary
        </motion.button>
      </div>
    </div>
  );
};

export default CourseOutline;
