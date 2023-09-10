import { useState } from "react";
import CourseVideo from "./CourseOutline/CourseVideo";
import CourseOutline from "./CourseOutline/CourseOutline";
import Certificate from "./Certificate/Certificate";
import { useLocation } from "react-router-dom";

import ".././CoursePage/CourseOutline/Course.css";
const CoursePage = () => {
  const location = useLocation();
  const { courseOutline } = location.state;

  const [selectedMilestone, setSelectedMilestone] = useState(0);
  const [selectedSession, setSelectedSession] = useState(0);

  const [showCertificateModal, setShowCertificateModal] = useState(false);

  const handleSessionSelect = (sessionIndex, videoLink) => {
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
      // If there are no more sessions in the current milestone, move to the next milestone
      if (selectedMilestone < courseOutline.length - 1) {
        setSelectedMilestone(selectedMilestone + 1);
        setSelectedSession(0); // Reset session to the first one in the new milestone
      }
    }
  };

  console.log("selectedSession", selectedSession);

  const handlePreviousSession = () => {
    if (selectedSession > 0) {
      setSelectedSession(selectedSession - 1);
    } else {
      // If there are no previous sessions in the current milestone, move to the previous milestone
      if (selectedMilestone > 0) {
        setSelectedMilestone(selectedMilestone - 1);
        setSelectedSession(
          courseOutline[selectedMilestone - 1].sessions.length - 1
        ); // Set session to the last one in the previous milestone
      }
    }
  };

  const handleOpenCertificateModal = () => {
    setShowCertificateModal(true);
  };

  const handleCloseCertificateModal = () => {
    setShowCertificateModal(false);
  };

  return (
    <div className="cb">
      <div className="lg:flex justify-center items-center md:px-16 pt-36  pb-32">
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
          />
          <div className="flex justify-center">
            <button
              className="font-bold text-white px-4 py-2 shadow-md rounded-xl border-[#36cbd3dc] border-2"
              onClick={handleOpenCertificateModal}
            >
              Get Certificate
            </button>
          </div>
          <dialog
            id="my_modal_1"
            className={`modal ${showCertificateModal ? "open" : ""}`}
          >
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
    </div>
  );
};

export default CoursePage;
