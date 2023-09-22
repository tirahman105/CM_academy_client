import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../providers/AuthProvider";
import { useEffect } from "react";
import InstructorImage from "../../../../assets/IconForAddCourse/Instructor.png";
import Swal from 'sweetalert2';
const Final = () => {
  const [newQuizQuestion, setNewQuizQuestion] = useState("");
  const [quizOptions, setQuizOptions] = useState([]);
  const [newQuizCorrectOption, setNewQuizCorrectOption] = useState(0);
  const [newQuizExplanation, setNewQuizExplanation] = useState("");
  const [addingQuiz, setAddingQuiz] = useState(false);
  const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState(-1);
  const [milestoneQuizzes, setMilestoneQuizzes] = useState([]);
  const addQuizOption = () => {
    setQuizOptions([...quizOptions, ""]);
  };

  const removeQuizOption = (index) => {
    const updatedOptions = [...quizOptions];
    updatedOptions.splice(index, 1);
    setQuizOptions(updatedOptions);
  };

  const addNewQuiz = () => {
    if (
      newQuizQuestion &&
      quizOptions.length >= 2 &&
      newQuizCorrectOption >= 0 &&
      newQuizCorrectOption < quizOptions.length &&
      newQuizExplanation
    ) {
      const newQuiz = {
        question: newQuizQuestion,
        options: quizOptions,
        correctOption: newQuizCorrectOption,
        explanation: newQuizExplanation,
      };

      // Clone the array for the selected milestone and add the new quiz
      const updatedMilestoneQuizzes = [...milestoneQuizzes];

      // Initialize the milestone's quiz array if it's undefined
      if (!updatedMilestoneQuizzes[selectedMilestoneIndex]) {
        updatedMilestoneQuizzes[selectedMilestoneIndex] = [];
      }

      updatedMilestoneQuizzes[selectedMilestoneIndex].push(newQuiz);

      // Update the milestoneQuizzes state
      setMilestoneQuizzes(updatedMilestoneQuizzes);

      // Clear the input fields
      setNewQuizQuestion("");
      setQuizOptions([]);
      setNewQuizCorrectOption(0);
      setNewQuizExplanation("");
      setAddingQuiz(false);
    }
  };

  const handleQuizOptionChange = (index, value) => {
    const updatedOptions = [...quizOptions];
    updatedOptions[index] = value;
    setQuizOptions(updatedOptions);
  };

  const { user } = useContext(AuthContext);

  const [courseThumbnail, setCourseThumbnail] = useState("");
  const [courseIntroVideo, setCourseIntroVideo] = useState("");

  const [activeTab, setActiveTab] = useState("basicInfo");
  const switchTab = (tabName) => {
    setActiveTab(tabName);
  };

  const [newFaqQuestion, setNewFaqQuestion] = useState("");
  const [newFaqAnswer, setNewFaqAnswer] = useState("");

  const handleFaqQuestionChange = (e) => {
    setNewFaqQuestion(e.target.value);
  };

  const handleFaqAnswerChange = (e) => {
    setNewFaqAnswer(e.target.value);
  };

  const saveFaq = () => {
    if (newFaqQuestion && newFaqAnswer) {
      const newFaqItem = {
        question: newFaqQuestion,
        answer: newFaqAnswer,
      };
      setFaq([...faq, newFaqItem]);
      setNewFaqQuestion("");
      setNewFaqAnswer("");
      setAddingFaq(false);
    }
  };

  const [newMilestoneTitle, setNewMilestoneTitle] = useState("");
  const startAddingMilestone = () => {
    setNewMilestoneTitle("");
    setNewMilestoneSessions([]);
    setAddingMilestone(true);
  };
  const [faq, setFaq] = useState([]);
  const [addingFaq, setAddingFaq] = useState(false);
  const startAddingFaq = () => {
    setNewFaqQuestion("");
    setNewFaqAnswer("");
    setAddingFaq(true);
  };
  const { register, handleSubmit } = useForm();
  const [courseOutline, setCourseOutline] = useState([]);
  const [courseRequirements, setCourseRequirements] = useState([]);
  const [whatYouWillLearn, setWhatYouWillLearn] = useState([]);



const onSubmit = async (data) => {
  // Display a confirmation dialog
  const confirmResult = await Swal.fire({
    title: 'Confirm Submission',
    text: 'Are you sure you want to submit this course?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes, submit it!',
    confirmButtonColor: '#1BBF72', // Set the button color here
    cancelButtonText: 'No, cancel',
  });

  // Check if the user confirmed the submission
  if (confirmResult.isConfirmed) {
    const courseMilestones = courseOutline.map((milestone) => ({
      milestone: milestone.milestone,
      sessions: milestone.sessions,
      quizzes: milestoneQuizzes[courseOutline.indexOf(milestone)] || [],
    }));

    const faqList = faq.map((faqItem) => ({
      question: faqItem.question,
      answer: faqItem.answer,
    }));
    const formData = {
      instructor: user.displayName,
      instructorEmail: user.email,
      courseCategory: data.courseCategory,
      title: data.title,
      courseDescription: data.courseDescription,
      whoIsCourseFor: data.whoIsCourseFor,
      courseOutline: courseMilestones,
      faq: faqList,
      coursePrice: parseInt(data.coursePrice),
      courseRequirements: courseRequirements,
      whatYouWillLearn: whatYouWillLearn,
      courseThumbnail: courseThumbnail,
      courseIntroVideo: courseIntroVideo,
      ApprovedStatus: "Deny",
      enrollCount: 0,
      rating: 0,
    };

    try {
      const response = await fetch(
        "https://cm-academy-test-server-production.up.railway.app/addCourse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        Swal.fire({
          title: 'Success',
          text: 'Course submitted successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#1BBF72', // Set the button color here
        });
        // Perform any necessary actions after successful data submission
      } else {
        Swal.fire('Error', 'Failed to submit the course', 'error');
      }
    } catch (error) {
      Swal.fire('Error', `Error submitting the course: ${error}`, 'error');
    }
  } else {
    Swal.fire({
      title: 'Cancelled',
      text: 'Course submission cancelled',
      icon: 'info',
      confirmButtonText: 'OK',
      confirmButtonColor: '#1BBF72', // Set the button color here
    });
  }
};

  
  


  const [newMilestoneSessions, setNewMilestoneSessions] = useState([
    {
      sessionTitle: "",
      description: "",
      videoLink: "",
      isCompleted: false, // Add this line
    },
  ]);
  const [addingMilestone, setAddingMilestone] = useState(false);
  const addNewSession = () => {
    if (newMilestoneSessions.length < 10) {
      setNewMilestoneSessions([...newMilestoneSessions, ""]);
    }
  };
  const handleSessionChange = (index, updatedSession) => {
    const updatedSessions = [...newMilestoneSessions];
    updatedSessions[index] = {
      ...updatedSession,
      isCompleted: false, // Make sure to include isCompleted
    };
    setNewMilestoneSessions(updatedSessions);
  };
  const saveMilestone = () => {
    if (newMilestoneTitle && newMilestoneSessions.length > 0) {
      const newMilestone = {
        milestone: newMilestoneTitle,
        sessions: newMilestoneSessions,
      };
      setCourseOutline([...courseOutline, newMilestone]);
      setAddingMilestone(false);
    }
  };
  ////////////////////////////////////
  // fetch all categories name from this route  https://cm-academy-test-server-production.up.railway.app/categoriesName and store it in a state
  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(
      "https://cm-academy-test-server-production.up.railway.app/categoriesName"
    )
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  ///////////////////////////////////////
  return (


    <div className="laptop:mt-4 desktop:mt-8">
      <div className="   flex justify-around max-w-7xl mx-auto  pt-5 pb-1  bg-white">

        <div className="w-[70%]">
          <h1 className=" text-4xl font-bold text-gray-700 font-TitilliumWeb ">
            Empower Learning: Design Your Course
          </h1>
          <p className="mt-4 text-[18px] text-gray-600 font-TitilliumWeb">
            Your knowledge can change lives. Begin your teaching journey by
            creating a course that reflects your expertise. The 'Create Course'
            page is where you lay the foundation. Define your course's title and
            description, and let your passion for teaching shine through. See < span onClick={() => document.getElementById('my_modal_3').showModal()} className="font-bold cursor-pointer text-blue-700">tutorial video</span> to add new course.
          </p>
        </div>



        {/* Modal for video starts */}

        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <form method="dialog" className="modal-bottom   ">
              {/* if there is a button in form, it will close the modal */}
              <div className="relative overflow-hidden" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/k1hI6Z7ktQ4"
                  title="How to add a new course?"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full "
                ></iframe>
              </div>
              <div className="flex justify-end mt-4"><button className="btn bg-gray-700 text-white hover:text-black">Close</button></div>
            </form>

          </div>
        </dialog>






        <img className="h-1/4" src={InstructorImage} alt="" />
      </div>
      {/* <hr /> */}
      <form className="max-w-3xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white pt-10 sticky top-[0px]">
          <div className="mb-4 text-base bg-white font-bold flex justify-center border rounded-md shadow-md  ">
            <div
              className={`w-1/3 text-center  duration-300 cursor-pointer p-2  ${activeTab === "basicInfo"
                ? "  rounded-md bg-[#1E1F1F] text-white  "
                : ""
                }`}
              onClick={() => switchTab("basicInfo")}
            >
              Basic Info
            </div>
            <div
              className={`w-1/3 text-center duration-300  cursor-pointer p-2 ${activeTab === "courseCurriculum"
                ? "rounded-md bg-[#1E1F1F] text-white "
                : ""
                }`}
              onClick={() => switchTab("courseCurriculum")}
            >
              Course Curriculum
            </div>
            <div
              className={` w-1/3 text-center duration-300  cursor-pointer p-2  ${activeTab === "quiz"
                ? "  rounded-md bg-[#1E1F1F] text-white"
                : ""
                }`}
              onClick={() => switchTab("quiz")}
            >
              Quiz
            </div>
          </div>
        </div>

        {/* Render Basic Info form fields */}
        {activeTab === "basicInfo" && (
          <div className="">
            <div className="form-control mb-3">
              <div className="form-control mb-3">
                <label className="label">
                  <span className="text-base font-bold font-Poppins">
                    Course Category
                    <br />
                    <span className="text-[12px] text-gray-600 font-mono ">
                      **Choose the relevant category for your course content.**
                    </span>
                  </span>
                </label>
                <select
                  name="courseCategory"
                  className="  bg-gray-200 h-10 text-sm font-Poppins font-semibold text-gray-600 px-4"
                  {...register("courseCategory")}
                >
                  {Categories.map((category, index) => (
                    <option
                      className="text-sm font-Poppins font-semibold text-gray-600"
                      key={index}
                      value={category.name}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control mb-3">
                <label className="label">
                  <span className="text-base font-bold font-Poppins">
                    Course Title
                    <br />
                    <span className="text-[12px] text-gray-600 font-mono ">
                      **Give your course a compelling and informative title.**
                    </span>
                  </span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className=" bg-gray-200 h-10 text-sm font-Poppins font-semibold text-gray-700 px-5"
                  {...register("title")}
                />
              </div>
              {/* Course Description */}
              <div className="form-control mb-3">
                <label className="label">
                  <span className="text-base font-bold font-Poppins">
                    Course Description
                    <br />
                    <span className="text-[12px] text-gray-600 font-mono ">
                      **Provide a concise overview of what your course covers.**
                    </span>
                  </span>
                </label>
                <textarea
                  name="courseDescription"
                  placeholder="Course Description"
                  className="bg-gray-200 h-20 text-sm font-Poppins font-semibold text-gray-700 px-5 pt-7 resize-both overflow-auto min-h-[100px] min-w-[200px] max-w-full focus:border-[#1e1f1f9f] focus:outline-none border-2 "
                  {...register("courseDescription")}
                />
              </div>
              <div className="form-control mb-3">
                <label className="label">
                  <span className="text-base font-bold font-Poppins">
                    What You Will Learn
                    <br />
                    <span className="text-[12px] text-gray-600 font-mono ">
                      **List the key takeaways learners can expect, separated by
                      commas.**
                    </span>
                  </span>
                </label>
                <input
                  type="text"
                  name="whatYouWillLearn"
                  placeholder="What You Will Learn (comma-separated)"
                  className="bg-gray-200 h-20 text-sm font-Poppins font-semibold text-gray-700 px-5  resize-both overflow-auto min-h-[100px] min-w-[200px] max-w-full focus:border-[#1e1f1f9f] focus:outline-none border-2"
                  value={whatYouWillLearn.join(", ")} // Convert array to comma-separated string
                  onChange={(e) =>
                    setWhatYouWillLearn(
                      e.target.value.split(",").map((item) => item.trim())
                    )
                  } // Convert input to array
                />
              </div>
              {/* Course Thumbnail */}
              <div className="form-control mb-3">
                <label className="label">
                  <span className="text-base font-bold font-Poppins">
                    Course Thumbnail
                    <br />
                    <span className="text-[12px] text-gray-600 font-mono ">
                      **Add a link to an image that represents your course
                      visually.**
                    </span>
                  </span>
                </label>
                <input
                  type="text"
                  name="courseThumbnail"
                  placeholder="Course Thumbnail Link"
                  className=" bg-gray-200 h-10 text-sm font-Poppins font-semibold text-gray-700 px-5  focus:border-[#1e1f1f9f] focus:outline-none border-2"
                  value={courseThumbnail}
                  onChange={(e) => setCourseThumbnail(e.target.value)}
                />
              </div>
              {/* course intro video */}
              <div className="form-control mb-3">
                <label className="label">
                  <span className="text-base font-bold font-Poppins">
                    Course Intro Video
                    <br />
                    <span className="text-[12px] text-gray-600 font-mono ">
                      **Include a link to an introductory video for your
                      course.**
                    </span>
                  </span>
                </label>
                <input
                  type="text"
                  name="courseIntroVideo"
                  placeholder="Course Intro Video Link"
                  className="bg-gray-200 h-10 text-sm font-Poppins font-semibold text-gray-700 px-5 focus:outline-none border-2  focus:border-[#1e1f1f9f]"
                  value={courseIntroVideo}
                  onChange={(e) => setCourseIntroVideo(e.target.value)}
                />
              </div>
              <div className=" mb-3">
                <label className="label">
                  <span className="text-base font-bold font-Poppins">
                    Course Price
                    <br />
                    <span className="text-[12px] text-gray-600 font-mono ">
                      **Specify the cost of enrolling in your course.**
                    </span>
                  </span>
                </label>
                <input
                  type="number"
                  name="coursePrice"
                  placeholder="Course Price"
                  className="bg-gray-200 h-10 text-sm font-Poppins font-semibold text-gray-700 px-5 focus:outline-none border-2 focus:border-[#1e1f1f9f]"
                  {...register("coursePrice")}
                />
              </div>
              {/* Course Requirements */}
              <div className="form-control mb-3">
                <label className="label">
                  <span className="text-base font-bold font-Poppins">
                    Course Requirements
                    <br />
                    <span className="text-[12px] text-gray-600 font-mono ">
                      **Outline any prerequisites or materials needed, separated
                      by commas.**
                    </span>
                  </span>
                </label>
                <input
                  type="text"
                  name="courseRequirements"
                  placeholder="Course Requirements (comma-separated)"
                  className="bg-gray-200 h-20 text-sm font-Poppins font-semibold text-gray-700 px-5  resize-both overflow-auto min-h-[100px] min-w-[200px] max-w-full focus:border-[#1e1f1f9f] focus:outline-none border-2"
                  value={courseRequirements.join(", ")} // Convert array to comma-separated string
                  onChange={(e) =>
                    setCourseRequirements(
                      e.target.value.split(",").map((item) => item.trim())
                    )
                  } // Convert input to array
                />
              </div>
              {/* Who is Course For*/}
              <div className="form-control mb-3">
                <label className="label">
                  <span className="text-base font-bold font-Poppins">
                    Who is This Course For
                    <br />
                    <span className="text-[12px] text-gray-600 font-mono ">
                      **Describe the target audience for your course.**
                    </span>
                  </span>
                </label>
                <textarea
                  name="whoIsCourseFor"
                  placeholder="Who is Course For"
                  className="bg-gray-200 h-20 text-sm font-Poppins font-semibold text-gray-700 px-5 pt-9 resize-both overflow-auto min-h-[100px] min-w-[200px] max-w-full focus:border-[#1e1f1f9f] focus:outline-none border-2"
                  {...register("whoIsCourseFor")}
                />
              </div>
              {/* faq section */}
              <div className="form-control mb-3">
                <div className="form-control mb-3">
                  <label className="label">
                    <span className="text-base font-bold font-Poppins">
                      FAQ
                      <br />
                      <span className="text-[12px] text-gray-600 font-mono ">
                        **Add frequently asked questions and their corresponding
                        answers to provide additional information about your
                        course.**
                      </span>
                    </span>
                  </label>
                  <div className="space-y-4">
                    {faq.map((faqItem, faqIndex) => (
                      <div
                        key={faqIndex}
                        className="bg-white rounded-lg shadow-md p-6"
                      >
                        <h4 className="font-semibold  mb-2 bg-gray-200 text-gray-700 text-sm font-mono p-2 rounded-lg">
                          Question {faqIndex + 1}: {faqItem.question}
                        </h4>
                        <p className="text-gray-600"></p>
                        <div className="bg-gray-200 text-sm font-mono p-4 text-gray-700  rounded-lg shadow-md">
                          <p className=" ">{faqItem.answer}</p>
                        </div>
                      </div>
                    ))}
                    {!addingFaq && (
                      <button
                        type="button"
                        className=" px-2 text-base rounded-md py-1  bg-[#1E1F1F] text-white mt-2"
                        onClick={() => startAddingFaq()}
                      >
                        Add FAQ
                      </button>
                    )}
                    {addingFaq && (
                      <div className="bg-white rounded-lg shadow-md p-6">
                        <div>
                          <input
                            type="text"
                            className="bg-gray-200 h-10 text-sm font-Poppins font-semibold text-gray-700 px-5 mb-5 focus:outline-none border-2 focus:border-[#1e1f1f9f] w-full"
                            placeholder="Question"
                            value={newFaqQuestion}
                            onChange={handleFaqQuestionChange}
                          />
                        </div>
                        <div>
                          <textarea
                            className="bg-gray-200 h-20 text-sm font-Poppins font-semibold text-gray-700 px-5 w-full resize-both overflow-auto min-h-[100px] min-w-[200px] max-w-full focus:border-[#1e1f1f9f] focus:outline-none border-2"
                            placeholder="Answer"
                            value={newFaqAnswer}
                            onChange={handleFaqAnswerChange}
                          />
                        </div>
                        <button
                          type="button"
                          className="btn btn-outline mr-3 btn-sm mt-2"
                          onClick={saveFaq}
                        >
                          Save FAQ
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="button"
                className="px-4 text-lg rounded-md py-1  bg-[#1E1F1F] text-white mt-2  mb-5"
                onClick={() => switchTab("courseCurriculum")}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {/* Render Course Curriculum form fields */}
        {activeTab === "courseCurriculum" && (
          <div>
            <div className="form-control mb-3">
              <div className="form-control mb-3">
                <label className="label">
                  <span className="text-base font-bold font-Poppins">
                    Course Outline
                    <br />
                    <span className="text-[12px] text-gray-600 font-mono ">
                      **Organize your course into milestones. For each
                      milestone, provide details such as the title, description,
                      and list of sessions and sessions video link . This helps
                      learners understand the structure and content of your
                      course.**
                    </span>
                  </span>
                </label>
                <div className="space-y-4">
                  <div className="space-y-4">
                    {courseOutline.map((milestone, milestoneIndex) => (
                      <div
                        key={milestoneIndex}
                        className="bg-white rounded-lg shadow-md p-6"
                      >
                        <h4 className="font-semibold font-mono text-lg mb-2">
                          Milestone {milestoneIndex + 1}: {milestone.milestone}
                        </h4>
                        <div className="flex flex-wrap -m-3">
                          {milestone.sessions.map((session, sessionIndex) => (
                            <div
                              key={sessionIndex}
                              className="bg-gray-100 font-LeagueSpartan p-4 rounded-lg shadow-md m-3"
                            >
                              <h5 className="text-blue-600 text-lg font-semibold">
                                Session {sessionIndex + 1}:{" "}
                                {session.sessionTitle}
                              </h5>
                              <p className="text-gray-600 text-sm">
                                {session.description}
                              </p>
                              <a
                                href={`${session.videoLink}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 text-sm hover:underline mt-1 block"
                              >
                                Watch Video
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {!addingMilestone && (
                    <button
                      type="button"
                      className="btn btn-outline mr-3 btn-sm mt-2"
                      onClick={() => startAddingMilestone()}
                    >
                      Add Milestone
                    </button>
                  )}
                  {addingMilestone && (
                    <div>
                      <div>
                        <div>
                          <input
                            type="text"
                            className="bg-gray-200 h-10 text-sm font-Poppins font-semibold text-gray-700 px-5 mb-5 focus:outline-none border-2 focus:border-[#1e1f1f9f] w-full"
                            placeholder="Milestone Title"
                            value={newMilestoneTitle}
                            onChange={(e) =>
                              setNewMilestoneTitle(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          {newMilestoneSessions.map((session, sessionIndex) => (
                            <div key={sessionIndex}>
                              <input
                                type="text"
                                className=" bg-gray-200 h-10 text-sm font-Poppins font-semibold text-gray-700 px-5 mb-5 focus:outline-none border-2 focus:border-[#1e1f1f9f] ml-[37px] w-[95%]"
                                placeholder={`Session ${sessionIndex + 1
                                  } Title`}
                                value={session.sessionTitle}
                                onChange={(e) =>
                                  handleSessionChange(sessionIndex, {
                                    ...session,
                                    sessionTitle: e.target.value,
                                  })
                                }
                              />
                              {/* Add textarea for session description */}
                              <textarea
                                className="bg-gray-200 h-20 text-sm font-Poppins font-semibold text-gray-700 px-5  resize-both overflow-auto min-h-[100px] min-w-[200px] max-w-full focus:border-[#1e1f1f9f] focus:outline-none border-2 ml-[37px] w-[95%]"
                                placeholder={`Session ${sessionIndex + 1
                                  } Description`}
                                value={session.description}
                                onChange={(e) =>
                                  handleSessionChange(sessionIndex, {
                                    ...session,
                                    description: e.target.value,
                                  })
                                }
                              />
                              <input
                                type="text"
                                className="bg-gray-200 h-10 text-sm font-Poppins font-semibold text-gray-700 px-5 mb-5 focus:outline-none border-2 focus:border-[#1e1f1f9f] ml-[37px] w-[95%] mt-5"
                                placeholder={`Session ${sessionIndex + 1
                                  } Video Link`}
                                value={session.videoLink}
                                onChange={(e) =>
                                  handleSessionChange(sessionIndex, {
                                    ...session,
                                    videoLink: e.target.value,
                                  })
                                }
                              />
                            </div>
                          ))}

                          <button
                            type="button"
                            className="btn btn-outline mr-3 btn-sm mt-2"
                            onClick={addNewSession}
                          >
                            Add Session
                          </button>
                        </div>
                      </div>
                      <></>
                      <button
                        type="button"
                        className="btn btn-outline mr-3 btn-sm mt-2"
                        onClick={saveMilestone}
                      >
                        Save Milestone
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <div className="flex justify-center mt-4">
                <button
                  type="button"
                  className="px-4 text-lg rounded-md py-1  bg-[#1E1F1F] text-white mt-2  mb-5"
                  onClick={() => switchTab("quiz")}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
        {activeTab === "quiz" && (
          <div>
            <span className="text-base font-bold font-Poppins">
              Quiz Insert Section
              <br />
              <span className="text-[12px] text-gray-600 font-mono ">
                **Enhance your course by adding quizzes at specific milestones.
                Select a milestone, create quiz questions, and define correct
                answers. Quizzes are a great way to assess your learners'
                understanding and knowledge retention.**
              </span>
            </span>
            <select
              className="bg-gray-200 h-10 text-sm font-Poppins font-semibold text-gray-700 px-5 mb-5 focus:outline-none  mt-5"
              value={selectedMilestoneIndex}
              onChange={(e) =>
                setSelectedMilestoneIndex(parseInt(e.target.value))
              }
            >
              <option value={-1}>Select a Milestone</option>
              {courseOutline.map((milestone, index) => (
                <option key={index} value={index}>
                  {milestone.milestone}
                </option>
              ))}
            </select>

            {/* Render quizzes based on the selected milestone */}
            {selectedMilestoneIndex >= 0 &&
              milestoneQuizzes[selectedMilestoneIndex] && (
                <div>
                  <h2 className="text-lg font-semibold mb-2">{`Quizzes for ${courseOutline[selectedMilestoneIndex].milestone}`}</h2>
                  {milestoneQuizzes[selectedMilestoneIndex].map(
                    (quiz, index) => (
                      <div
                        key={index}
                        className="border p-4 mb-4 rounded-lg shadow-md"
                      >
                        <h4 className="text-sm font-bold mb-2">{`Question ${index + 1
                          }: ${quiz.question}`}</h4>
                        <ul className="text-sm list-disc pl-6 mb-2">
                          {quiz.options.map((option, optionIndex) => (
                            <li key={optionIndex} className="mb-1">
                              {option}
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm text-green-700">
                          Correct Option: {quiz.options[quiz.correctOption]}
                        </p>
                        <p className="text-sm text-green-900">
                          Explanation: {quiz.explanation}
                        </p>
                      </div>
                    )
                  )}
                </div>
              )}

            <button
              type="button"
              className="btn btn-outline mr-3 btn-sm mt-2 m-3"
              onClick={() => setAddingQuiz(true)}
            >
              Add Quiz
            </button>

            {addingQuiz && (
              <div>
                <span className="text-[12px] text-gray-600 font-mono ">
                  **Create quiz questions for assessments.**
                </span>
                <input
                  type="text"
                  className="input input-bordered bg-gray-200 h-100 m-3 ml-0 w-full"
                  placeholder="Question"
                  value={newQuizQuestion}
                  onChange={(e) => setNewQuizQuestion(e.target.value)}
                />

                {/* Render dynamic input fields for options */}
                {quizOptions.map((option, index) => (
                  <div key={index}>
                    <span className="text-[12px] text-gray-600 font-mono ">
                      **Provide multiple-choice options for each quiz
                      question.**
                    </span>
                    <input
                      type="text"
                      className="input input-bordered bg-gray-200 h-100 m-3 w-full"
                      placeholder={`Option ${index + 1}`}
                      value={option}
                      onChange={(e) =>
                        handleQuizOptionChange(index, e.target.value)
                      }
                    />
                    <button
                      type="button"
                      className="px-2 text-sm rounded-md py-1  bg-[#e98686] text-white mt-2"
                      onClick={() => removeQuizOption(index)}
                    >
                      Remove Option
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  className="btn btn-outline mr-3 btn-sm mt-2"
                  onClick={addQuizOption}
                >
                  Add Option
                </button>

                <div>
                  <label className="label">
                    <span className="text-base font-bold font-Poppins">
                      Correct Option
                      <br />
                      <span className="text-[12px] text-gray-600 font-mono ">
                        **Specify the correct answer among the multiple-choice
                        options for each quiz question.**
                      </span>
                    </span>
                  </label>
                  <select
                    className="bg-gray-200 h-10 text-sm font-Poppins font-semibold text-gray-700 px-5 mb-5 focus:outline-none  mt-1"
                    value={newQuizCorrectOption}
                    onChange={(e) =>
                      setNewQuizCorrectOption(parseInt(e.target.value))
                    }
                  >
                    {quizOptions.map((_, index) => (
                      <option key={index} value={index}>{`Option ${index + 1
                        }`}</option>
                    ))}
                  </select>
                </div>

                <textarea
                  className="bg-gray-200 h-20 text-sm font-Poppins font-semibold text-gray-700 px-5  resize-both overflow-auto min-h-[100px] min-w-[200px] max-w-full focus:border-[#1e1f1f9f] focus:outline-none border-2 w-full"
                  placeholder="Explanation"
                  value={newQuizExplanation}
                  onChange={(e) => setNewQuizExplanation(e.target.value)}
                />
                <p className="text-[12px] text-gray-600 font-mono ">
                  **Provide a brief explanation or additional context for the
                  correct answer to help learners understand the concept
                  better.**
                </p>
                <button
                  type="button"
                  className="btn btn-outline mr-3 btn-sm mt-8"
                  onClick={addNewQuiz}
                >
                  Save Quiz
                </button>
              </div>
            )}

            <div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-4 text-lg rounded-md py-1  bg-[#1E1F1F] text-white mt-2  mb-5"
                >
                  Add Your Course
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Final;
