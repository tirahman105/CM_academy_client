import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CourseOutline = ({
  milestoneList,
  selectedMilestone,
  onSelectMilestone,
  onSelectSession,
  activeSessionIndex,
  onQuizButtonClick, // Receive the callback to handle quiz button click
}) => {
  const [expandedMilestone, setExpandedMilestone] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMilestones, setFilteredMilestones] = useState(milestoneList);
  const [showQuizzesForMilestone, setShowQuizzesForMilestone] = useState(null); // Track which milestone's quizzes to show

  useEffect(() => {
    setExpandedMilestone(selectedMilestone);
  }, [selectedMilestone]);

  const toggleMilestone = (milestoneIndex) => {
    if (expandedMilestone === milestoneIndex) {
      setExpandedMilestone(null);
    } else {
      setExpandedMilestone(milestoneIndex);
    }
  };

  const handleSessionSelect = async (sessionTitle, email, courseId) => {
    try {
      // Encode the sessionTitle before appending it to the URL
      const encodedSessionTitle = encodeURIComponent(sessionTitle);

      // Make a POST request to your backend route to update the session status
      const response = await fetch(
        `http://localhost:5000/orders/${email}/${courseId}/${encodedSessionTitle}`,
        {
          method: "PUT",
        }
      );
      console.log("Response:", response);

      if (response.ok) {
        // Update the session status in the frontend state
        console.log("Session completed!");
        console.log("Response:", response);
      } else {
        console.error("Error updating session status:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating session status:", error);
    }
  };

  const handleSearch = (query) => {
    const filtered = milestoneList.filter((milestone) =>
      milestone.sessions.some((session) => session.sessionTitle.includes(query))
    );
    setFilteredMilestones(filtered);
  };

  const handleQuizButton = (milestoneIndex) => {
    if (onQuizButtonClick) {
      onQuizButtonClick(milestoneIndex); // Call the callback to handle quiz button click
    }
  };

  return (
    <div className="p-4 mb-6 border rounded-lg border-[#36cbd330] text-white backdrop-blur-md bg-[#1a2c49] shadow-md bg-opacity-60">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-[18px] md:text-xl w-full md:w-3/5 md:mb-3 mt-3 font-bold">
          Course Content
        </h2>
      </div>
      <div className="w-full mt-4 md:mt-0">
        <input
          type="text"
          style={{ outline: "none" }}
          placeholder="Search Lesson"
          className="input input-success border-2 border-[#36cbd330] w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(searchQuery);
            }
          }}
        />
      </div>
      <div className="p-5 mt-5">
        {filteredMilestones.map((milestone, milestoneIndex) => (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`w-full px-5 py-5 mb-4 h-0 border duration-700  border-[#36cbd330] bg-[#1a2c49] shadow-md text-xl md:text-2xl rounded-lg  ${milestoneIndex === selectedMilestone ? " " : ""
              }`}
            key={milestoneIndex}
          >
            <span
              className={`cursor-pointer rounded-md text-[18px] font-TitilliumWeb md:text-2xl font-bold `}
              onClick={() => toggleMilestone(milestoneIndex)}
            >
            </span>
            <span
              className={`cursor-pointer rounded-md text-[12px] font-TitilliumWeb text-base font-bold `}
              onClick={() => toggleMilestone(milestoneIndex)}
            >
              {milestone.milestone}
            </span>
            <AnimatePresence>
              {expandedMilestone === milestoneIndex && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-black w-full"
                >
                  {milestone.sessions.map((session, sessionIndex) => (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ delay: 0.3 }}
                      className={`px-3 py-1 w-full text-left mt-5 duration-700 text-[11px] text-sm  text-white font-bold font-TitilliumWeb border-l-8 border-r-8 border-white shadow-md bg-[#1bbf7215] rounded-lg ${milestoneIndex === selectedMilestone &&
                          sessionIndex === activeSessionIndex
                          ? "grBg "
                          : ""
                        }`}
                      key={sessionIndex}
                      id={`sessionButton-${milestoneIndex}-${sessionIndex}`}
                    >
                      <span
                        className="cursor-pointer px-3 rounded-md"
                        onClick={() => {
                          onSelectMilestone(milestoneIndex);
                          onSelectSession(
                            sessionIndex,
                            session.videoLink,
                            session.sessionTitle
                          );
                          handleSessionSelect(
                            session.sessionTitle,
                            email,
                            courseId
                          );
                        }}
                      >
                        {session.sessionTitle}
                      </span>
                    </motion.button>
                  ))}
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ delay: 0.4 }}
                    className={` py-1  text-left mt-5 duration-700 text-[12px] text-sm  text-white font-bold font-TitilliumWeb  shadow-md bg-[#1a2c49] border border-[#36cbd330] rounded-lg`}
                    id={``}
                  >
                    <span
                      className="cursor-pointer px-3 rounded-md"
                      onClick={() => handleQuizButton(milestoneIndex)}
                    >
                      Quizzes of {milestone.milestone} Milestone
                    </span>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <div className="mt-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          className="text-white font-Raleway duration-500 grBg font-bold py-2 text-lg rounded-xl px-4 shadow-md w-full"
        >
          Course Summary
        </motion.button>
      </div>
    </div>
  );
};

export default CourseOutline;
