import { useState } from 'react';
import CourseVideo from './CourseOutline/CourseVideo';
import CourseOutline from './CourseOutline/CourseOutline';
import Certificate from './Certificate/Certificate';

const CoursePage = () => {


  const milestoneList = [  {
    "_id": "64e89ed81a93e023beb3186a",
    "instructor": "Md. Raqibur Rahman Roni",
    "instructorEmail": "code.mates.team@gmail.com",
    "courseCategory": "Web Development",
    "title": "JavaScript Jumpstart",
    "courseDescription": "Embark on an exhilarating journey into the world of web development with our comprehensive \"JavaScript Jumpstart\" course. Designed for beginners, this course is your gateway to understanding the power of JavaScript, the dynamic scripting language that adds interactivity and life to websites. ",
    "whoIsCourseFor": "Aspiring web developers seeking a solid foundation in JavaScript, Individuals curious about coding and web interactivity, Creatives aiming to enhance their web design skills with interactive elements, Beginners looking to unlock the power of dynamic websites with JavaScript, Anyone eager to explore the world of coding and create captivating web experiences.",
    "courseOutline": [
      {
        "milestone": "JavaScript Fundamentals",
        "sessions": [
          {
            "sessionTitle": "Introduction to JavaScript",
            "videoLink": "https://youtu.be/xt_jO_DrQBw?list=PLEYpvDF6qy8ZUE9IyhYWrxt5zEyeXzwxq",
            "description": " Embark on your journey into web development by diving into the world of JavaScript. Learn how this versatile scripting language empowers you to add dynamic interactions to websites, making them come alive."
          }
        ],
        "quizzes": [
          {
            "question": "What is JavaScript primarily used for?",
            "options": [
              "Making coffee",
              "Styling web pages",
              "Adding interactivity to websites"
            ],
            "correctOption": 2,
            "explanation": "JavaScript is a programming language that's primarily used to add interactivity and dynamic features to websites. It enables developers to create responsive elements that respond to user actions, making web experiences engaging and interactive. "
          }
        ]
      },
      {
        "milestone": "DOM Manipulation",
        "sessions": [
          {
            "sessionTitle": "Introduction to the Document Object Model (DOM)",
            "description": "Gain insight into the magic behind web pages as you explore the Document Object Model (DOM). Learn how to access and modify HTML elements using JavaScript, turning static pages into dynamic playgrounds.",
            "videoLink": "https://youtu.be/Wi7IyS_jc44?list=PLEYpvDF6qy8ZUE9IyhYWrxt5zEyeXzwxq"
          }
        ],
        "quizzes": [
          
        ]
      }
    ],
    "faq": [
      {
        "question": " Is JavaScript a magic spell for websites?",
        "answer": "While it might seem magical, JavaScript is actually a programming language that adds interactivity and dynamic features to websites. No wands required!"
      },
      {
        "question": "Do I need to be a computer genius to understand JavaScript?",
        "answer": "Not at all! This course is tailored for beginners and designed to make JavaScript concepts accessible and understandable. No genius-level intellect required."
      }
    ],
    "coursePrice": 5000,
    "courseRequirements": [
      "nternet-connected device",
      "Basic familiarity with using a computer and the internet",
      "Eagerness to learn and explore new technology concepts",
      "No prior coding experience required",
      "Willingness to participate in hands-on coding exercises."
    ],
    "whatYouWillLearn": [
      "Build a solid foundation in JavaScript basics",
      "Master variables and data types",
      "Navigate the Document Object Model (DOM) for web element manipulation",
      "Create responsive web interactions using event handling",
      "Grasp conditionals and loops for logical structures",
      "Build interactive web elements that respond to user input."
    ],
    "courseThumbnail": "https://cdn.discordapp.com/attachments/1142694352263577653/1144606586103418900/1BPSx-c--z6r7tY29L19ukQ.png",
    "courseIntroVideo": "",
    "ApprovedStatus": "Approved",
    "enrollCount": 0
  },
]

  const [selectedMilestone, setSelectedMilestone] = useState(0);
  const [selectedModule, setSelectedModule] = useState(0);

  const [showCertificateModal, setShowCertificateModal] = useState(false);

  const handleModuleSelect = (moduleIndex, videoUrl) => {
    setSelectedModule(moduleIndex);
  };

  const handleMilestoneSelect = (milestoneIndex) => {
    setSelectedMilestone(milestoneIndex);
    setSelectedModule(0);
  };

  const handleNextModule = () => {
    if (selectedModule < milestoneList[selectedMilestone]?.modules.length - 1) {
      setSelectedModule(selectedModule + 1);
    }
  };

  const handlePreviousModule = () => {
    if (selectedModule > 0) {
      setSelectedModule(selectedModule - 1);
    }
  };

  const handleOpenCertificateModal = () => {
    setShowCertificateModal(true);
  };

  const handleCloseCertificateModal = () => {
    setShowCertificateModal(false);
  };

  return (
    <div className='pt-24'>
      <div className="lg:flex">
        <div className="lg:w-3/4 p-4">
          <CourseVideo videoList={milestoneList[selectedMilestone]?.modules || []}
            currentModuleIndex={selectedModule}
            onNextModule={handleNextModule}
            onModuleChange={handleModuleSelect}
            onPreviousModule={handlePreviousModule}
          />
        </div>
        <div className="lg:w-2/4 p-4">
          <CourseOutline
            milestoneList={milestoneList}
            selectedMilestone={selectedMilestone}
            onSelectMilestone={handleMilestoneSelect}
            onSelectModule={handleModuleSelect}
          />
          {/* <button className="btn btn-primary" onClick={handleOpenCertificateModal}>
            Get Certificate
          </button>
          {showCertificateModal && (
            <Certificate onClose={handleCloseCertificateModal} />
          )} */}



          <div className='flex justify-center'><button className="btn btn-primary" onClick={() => window.my_modal_1.showModal()}>Get Certificate</button></div>

          {/* Modal content below */}


          <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box">
              <Certificate></Certificate>
              <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        </div>

      </div>

    </div>
  );
};

export default CoursePage;
