import { useState } from "react";
import CourseVideo from "../../../src/Pages/CoursePage/CourseOutline/CourseVideo";
import CourseOutline from "../../../src/Pages/CoursePage/CourseOutline/CourseOutline";

import Certificate from "../../Pages/CoursePage/Certificate/Certificate";
import { useLocation } from "react-router-dom";
import ".././CoursePage/CourseOutline/Course.css";
import QuizModal from "./Quiz/QuizModal";

const CoursePage = () => {
  const location = useLocation();
  const { courseOutline, courseId, email } = location.state;

  console.log(courseOutline, courseId, email);

  const [selectedMilestone, setSelectedMilestone] = useState(0);
  const [selectedSession, setSelectedSession] = useState(0);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null); // Store selected quiz details

  const handleSessionSelect = (sessionIndex) => {
    setSelectedSession(sessionIndex);
  };

  const handleMilestoneSelect = (milestoneIndex) => {
    setSelectedMilestone(milestoneIndex);
    setSelectedSession(0);
  };

  const handleNextSession = () => {
    if (
      selectedSession <
      courseOutline[selectedMilestone]?.sessions.length - 1
    ) {
      setSelectedSession(selectedSession + 1);
    } else {
      if (selectedMilestone < courseOutline.length - 1) {
        setSelectedMilestone(selectedMilestone + 1);
        setSelectedSession(0);
      }
    }
  };

  const handlePreviousSession = () => {
    if (selectedSession > 0) {
      setSelectedSession(selectedSession - 1);
    } else {
      if (selectedMilestone > 0) {
        setSelectedMilestone(selectedMilestone - 1);
        setSelectedSession(courseOutline[selectedMilestone - 1].sessions.length - 1);
      }
    }
  };

  const handleOpenCertificateModal = () => {
    setShowCertificateModal(true);
  };

  const handleCloseCertificateModal = () => {
    setShowCertificateModal(false);
  };

  const handleQuizButton = (milestoneIndex) => {
    const milestone = courseOutline[milestoneIndex];
    if (milestone && milestone.quizzes && milestone.quizzes.length > 0) {
      setSelectedQuiz(milestone.quizzes); // Pass all quiz questions for the milestone
      setShowQuizModal(true);
    }
  };

  return (
    <div className="relative">
      <div className="lg:flex pt-36 cb pb-32">
        <div className="lg:w-3/4 p-4">
          <CourseVideo
            sessionList={courseOutline[selectedMilestone]?.sessions || []}
            currentSessionIndex={selectedSession}
            onNextSession={handleNextSession}
            onSessionChange={handleSessionSelect}
            onPreviousSession={handlePreviousSession}
          />
        </div>
        <div className="lg:w-2/4 p-4">
          <CourseOutline
            milestoneList={courseOutline}
            selectedMilestone={selectedMilestone}
            onSelectMilestone={handleMilestoneSelect}
            onSelectSession={handleSessionSelect}
            activeSessionIndex={selectedSession}
            onQuizButtonClick={handleQuizButton}
          />
          <div className="flex justify-center">
            <button
              className="font-bold text-white px-4 py-2 shadow-md rounded-xl border-[#36cbd3dc] border-2"
              onClick={handleOpenCertificateModal}
            >
              Get Certificate
            </button>
          </div>
          <dialog id="my_modal_1" className={`modal ${showCertificateModal ? "open" : ""}`}>
            <form method="dialog" className="modal-box">
              <Certificate />
              <div className="modal-action">
                <button className="btn" onClick={handleCloseCertificateModal}>
                  Close
                </button>
              </div>
            </form>
          </dialog>
        </div>
      </div>

      {/* Render the QuizModal */}
      {showQuizModal && selectedQuiz && (
        <QuizModal
          milestoneName={courseOutline[selectedMilestone].milestone} // Pass the milestone name
          quizzes={selectedQuiz} // Pass all quiz questions
          onClose={() => setShowQuizModal(false)}
        />
      )}

    </div>
  );
};

export default CoursePage;
