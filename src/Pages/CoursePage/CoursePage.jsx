import { useState } from 'react';
import CourseVideo from './CourseOutline/CourseVideo';
import CourseOutline from './CourseOutline/CourseOutline';
import Certificate from './Certificate/Certificate';
import { useLocation } from 'react-router-dom';

const CoursePage = () => {
  const location = useLocation();
  const { courseOutline } = location.state;

  const [selectedMilestone, setSelectedMilestone] = useState(0);
  const [selectedSession, setSelectedSession] = useState(0);

  const [showCertificateModal, setShowCertificateModal] = useState(false);

  // Initialize unlocked sessions
  const [unlockedSessions, setUnlockedSessions] = useState(
    courseOutline.map(() => 0)
  );

  const handleSessionSelect = (sessionIndex, videoLink) => {
    setSelectedSession(sessionIndex);
  };

  const handleMilestoneSelect = (milestoneIndex) => {
    setSelectedMilestone(milestoneIndex);
    setSelectedSession(0);
  };

  const handleNextSession = () => {
    if (unlockedSessions[selectedMilestone] === selectedSession) {
      const updatedUnlockedSessions = [...unlockedSessions];
      updatedUnlockedSessions[selectedMilestone] += 1;
      setUnlockedSessions(updatedUnlockedSessions);
      setSelectedSession(selectedSession + 1);
    }
  };

  const handlePreviousSession = () => {
    if (selectedSession > 0) {
      setSelectedSession(selectedSession - 1);
    }
  };

  const handleOpenCertificateModal = () => {
    setShowCertificateModal(true);
  };

  const handleCloseCertificateModal = () => {
    setShowCertificateModal(false);
  };

  return (
    <div>
      <div className="lg:flex pt-36 bgCoursePage">
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
            unlockedSessions={unlockedSessions}
            onSelectMilestone={handleMilestoneSelect}
            onSelectSession={handleSessionSelect}
            onSessionComplete={(milestoneIndex, sessionIndex) => {
              if (
                unlockedSessions[milestoneIndex] === sessionIndex &&
                sessionIndex < courseOutline[milestoneIndex].sessions.length - 1
              ) {
                handleNextSession();
              }
            }}
          />
          <div className="flex justify-center">
            <button
              className=" font-bold text-gray-700 px-4 py-2 shadow-md rounded-xl border-2 "
              onClick={handleOpenCertificateModal}
            >
              Get Certificate
            </button>
          </div>
          <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box">
              <Certificate />
              <div className="modal-action ">
                <button
                  className="btn"
                  onClick={handleCloseCertificateModal}
                >
                  Close
                </button>
              </div>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
