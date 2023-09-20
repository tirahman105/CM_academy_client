import { useState } from "react";
import CourseVideo from "../../../src/Pages/CoursePage/CourseOutline/CourseVideo";
import CourseOutline from "../../../src/Pages/CoursePage/CourseOutline/CourseOutline";

import Certificate from "../../Pages/CoursePage/Certificate/Certificate";
import { useLocation } from "react-router-dom";
import ".././CoursePage/CourseOutline/Course.css";
import QuizModal from "./Quiz/QuizModal";
import RatingFeedbackForm from "../Dashboard/Student/MyCourses/RatingFeedbackForm";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ChatWIthInstructor from "./ChatWIthInstructor";

const CoursePage = () => {
  const location = useLocation();
  const { courseOutline, courseId, email, instructor, title, courseCategory } =
    location.state;

  const { user } = useContext(AuthContext);
  console.log(courseId, user?.email);

  const [selectedMilestone, setSelectedMilestone] = useState(0);
  const [selectedSession, setSelectedSession] = useState(0);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null); // Store selected quiz details

  const [milestone, setMilestone] = useState("");


  const [refresh, setRefresh] = useState(false);

  console.log("courseOutline", courseOutline);
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
        setSelectedSession(
          courseOutline[selectedMilestone - 1].sessions.length - 1
        );
      }
    }
  };

  const handleOpenCertificateModal = () => {
    setShowModal(true);
    setShowCertificateModal(true);
  };

  const handleCloseCertificateModal = () => {
    setShowModal(false);

    setShowCertificateModal(false);
  };

  const handleQuizButton = (milestoneIndex) => {
    const milestone = courseOutline[milestoneIndex];
    if (milestone && milestone.quizzes && milestone.quizzes.length > 0) {
      setSelectedQuiz(milestone.quizzes); // Pass all quiz questions for the milestone
      setShowQuizModal(true);
    }
  };
  console.log("selectedMilestone", selectedMilestone);
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
          <div className=" mt-10  p-4 rounded-lg sm:w-5/6 sm:mx-auto backdrop-blur-md border bg-[#ced2d810] text-white boxShadowCourse border-[#36cbd330]  ">
            <RatingFeedbackForm
              courseId={courseId}
              user={user?.email}
              courseInstructor={instructor}
              courseTitle={title}
              courseCategory={courseCategory}
            >
              {" "}
            </RatingFeedbackForm>
          </div>
          <div className=" mt-10  p-4 rounded-lg sm:w-5/6 sm:mx-auto backdrop-blur-md border bg-[#ced2d810] text-white boxShadowCourse border-[#36cbd330]  ">
            <ChatWIthInstructor
              courseId={courseId}
              userId={user?._id}
            ></ChatWIthInstructor>
          </div>
        </div>
        <div className="lg:w-2/4 p-4">
          <CourseOutline
            milestoneList={courseOutline}
            selectedMilestone={selectedMilestone}
            onSelectMilestone={handleMilestoneSelect}
            onSelectSession={handleSessionSelect}
            activeSessionIndex={selectedSession}
            onQuizButtonClick={handleQuizButton}
            setMilestone={setMilestone}
            milestone={milestone}
            courseId={courseId}
            email={user?.email}
            setRefresh={setRefresh}
          />
          <div className="flex justify-center">
            <button
              className="font-bold text-white px-4 py-2 shadow-md rounded-xl border-[#36cbd3dc] border-2"
              onClick={() => window.my_modal_1.showModal()}
            >
              Get Certificate
            </button>
          </div>
          <dialog
            id="my_modal_1"
            className={`modal ${showModal ? "open" : ""}`}
          >
            <form method="dialog" className="modal-box">
              <Certificate title={title} instructor={instructor} />
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
          courseId={courseId}
          studentEmail={user?.email}
          milestoneName={milestone} // Pass the milestone name
          quizzes={selectedQuiz} // Pass all quiz questions
          onClose={() => setShowQuizModal(false)}
          setRefresh={setRefresh}
        />
      )}
    </div>
  );
};

export default CoursePage;
