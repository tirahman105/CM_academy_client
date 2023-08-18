 

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
          module: 'Module 1: ছয় মাসে কি ওয়েব ডেভেলপার হওয়া সম্ভব? ২০২৩ সালে ওয়েব ডেভেলপার হওয়ার সিরিয়াস গাইডলাইন।',
          videoUrl: 'JUwePydwbUI',
        },
        {
          module: 'Module 2: ChatGPT দিয়ে ওয়েব ডেভেলপমেন্ট শেখার কমপ্লিট গাইডলাইন ।',
          videoUrl: 'l78u3rdxoVU',
        },
        {
          module: 'Module 3: ১ মাসের মধ্যে প্রোগ্রামিং শিখার নিষ্ঠুর প্ল্যান 🔥🔥🔥',
          videoUrl: 'Sbn18WSKRtE',
        },

        {
          module: 'Module 4: কিভাবে প্রব্লেম সলভিং এবং কম্পিটিটিভ প্রোগ্রামিং শুরু করবে ?',
          videoUrl: 'cq6Iz4-LSkc',
        },

        {
          module: 'Module 5: ইংরেজি শেখার চেষ্টা করেও কেন লাভ হয় না 🔥💯🔥 ইংরেজি শেখার সহজ সিস্টেম |',
          videoUrl: 'oV-M6gZL4yQ',
        },
      ],
    },
   
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