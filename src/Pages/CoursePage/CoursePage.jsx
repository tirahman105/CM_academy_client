 

import  { useState } from 'react';
import CourseVideo from './CourseOutline/CourseVideo';
import CourseOutline from './CourseOutline/CourseOutline';

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
          videoUrl: 'MIyIIh9YpdY',
        },
        {
          module: 'Module 2: Components and Props',
          videoUrl: ' ',
        },
      ],
    },
    {
      milestone: 'Milestone 2: Advanced Topics',
      modules: [
        {
          module: 'Module 0: State Management',
          videoUrl: '8cr9Wfkolos',
        },
        {
          module: 'Module 1: Hooks and Context',
          videoUrl: 'video-url-2.1',
        },
      ],
    },
    // ... more milestones ...
  ];
  const [selectedVideo, setSelectedVideo] = useState(milestoneList[0]?.modules[0]?.videoUrl || '');
  const [selectedMilestone, setSelectedMilestone] = useState(0);
  const [selectedModule, setSelectedModule] = useState(0);

  const handleModuleSelect = (moduleIndex, videoUrl) => {
    setSelectedModule(moduleIndex);
    setSelectedVideo(videoUrl);
  };
  
  const handleMilestoneSelect = (milestoneIndex) => {
    setSelectedMilestone(milestoneIndex);
    setSelectedModule(0);
    setSelectedVideo(milestoneList[milestoneIndex]?.modules[0]?.videoUrl || '');
  };

  return (
    <div className="lg:flex">
      <div className="lg:w-3/4 p-4">
        <CourseVideo
          videoList={milestoneList.flatMap(milestone => milestone.modules)}
          currentModuleIndex={selectedModule}
          onModuleChange={handleModuleSelect}
        />
      </div>
      <div className="lg:w-2/4 p-4">
        <CourseOutline
          milestoneList={milestoneList}
          selectedMilestone={selectedMilestone}
          onSelectMilestone={handleMilestoneSelect}
          onSelectModule={handleModuleSelect}
        />
      </div>
    </div>
  );
};

export default CoursePage;