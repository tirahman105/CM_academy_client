import React, { useState } from 'react';
import CourseVideo from './CourseOutline/CourseVideo';
import CourseOutline from './CourseOutline/CourseOutline';
import Certificate from './Certificate/Certificate';

const CoursePage = () => {
  

  const milestoneList = [
    {
      milestone: 'Milestone 1: Fundamentals',
      modules: [
        {
          module: 'Module 0: ওয়েব ডেভেলপমেন্ট এর ফিউচার কি? ২০২৩ সালে কি আমার ওয়েব ডেভেলপমেন্ট শেখা উচিত? ',
          videoUrl: '6Q2jPqyhFCQ',
        },
        {
          module: 'Module 1: কোন প্রোগ্রামিং ল্যাঙ্গুয়েজ শিখবো? কোন প্রোগ্রামিং ল্যাঙ্গুয়েজ আমার জন্য ভালো হবে?',
          videoUrl: '3w5UAWhIjgQ',
        },
        {
          module: 'Module 2: ছয় মাসে কি ওয়েব ডেভেলপার হওয়া সম্ভব? ২০২৩ সালে ওয়েব ডেভেলপার হওয়ার সিরিয়াস গাইডলাইন।',
          videoUrl: 'JUwePydwbUI',
        },
      ],
    },
    {
      milestone: 'Milestone 2: Presentation Skills | Ayman Sadiq',
      modules: [
        {
          module: 'Module 0: How to Start a Presentation ',
          videoUrl: '-BDJUvaZb-A',
        },
        {
          module: 'Module 1: How to End a Presentation ',
          videoUrl: 'hIbzGyM5R1o',
        },
        {
          module: 'Module 2: How to Give a Presentation ',
          videoUrl: 'NrJLvJtr6g8',
        },
      ],
    },

    {
      milestone: 'Milestone 2: Python for Beginners | Programming Tutorial',
      modules: [
        {
          module: 'Module 0: 0 Python for Beginners ',
          videoUrl: 'QXeEoD0pB3E',
        },
        {
          module: 'Module 1: 1 Python for Beginners ',
          videoUrl: 'hEgO047GxaQ',
        },
        {
          module: 'Module 2: 1 Python for Beginners ',
          videoUrl: 'mbryl4MZJms',
        },
      ],
    },
    // ... more milestones ...
  ];


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
    <div>
    <div className="lg:flex">
      <div className="lg:w-3/4 p-4">
        <CourseVideo  videoList={milestoneList[selectedMilestone]?.modules || []}
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



<div className='flex justify-center'><button className="btn btn-primary" onClick={()=>window.my_modal_1.showModal()}>Get Certificate</button></div>

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
