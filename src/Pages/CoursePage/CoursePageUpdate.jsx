
// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import MilestoneAccordion from "../CourseDetails/MilestoneAccordion";

// const CoursePageUpdate = () => {
//   const location = useLocation();
//   const { course } = location.state;
//   const [activeMilestones, setActiveMilestones] = useState(
//     course.courseOutline.map(() => false)
//   );


//   const handleToggleMilestone = (index) => {
//     setActiveMilestones((prevActiveMilestones) => {
//       const newActiveMilestones = prevActiveMilestones.map((isActive, i) =>
//         i === index ? !isActive : false
//       );
//       return newActiveMilestones;
//     });
//   };
//   console.log(course);
//   return (
//     <div className="pt-24">
//       This is course page after enrollment.
//         <h1 className="text-6xl">{course.title}</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 ">

//         {/* video player  */}
//         <div className="bg-slate-500">
//           Video link here 

//         </div>

//         {/* coures contennt  */}
//         <div>

//             <MilestoneAccordion
//              courseOutline={course.courseOutline}
//              activeMilestones={activeMilestones}
//              handleToggleMilestone={handleToggleMilestone}
//             ></MilestoneAccordion>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoursePageUpdate;


import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import MilestoneAccordion from "../CourseDetails/MilestoneAccordion";

const CoursePageUpdate = () => {
  const location = useLocation();
  const { course } = location.state;
  const [activeMilestones, setActiveMilestones] = useState(
    course.courseOutline.map(() => false)
  );
  const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState(-1);
 

  const handleToggleMilestone = (index) => {
    setActiveMilestones((prevActiveMilestones) => {
      const newActiveMilestones = prevActiveMilestones.map((isActive, i) =>
        i === index ? !isActive : false
      );
      return newActiveMilestones;
    });
    setSelectedMilestoneIndex(index); // Update the selected milestone index
  };

  const selectedMilestone =
    selectedMilestoneIndex !== -1
      ? course.courseOutline[selectedMilestoneIndex]
      : null;
      console.log(selectedMilestone)
  return (
    <div className="pt-24">
      This is the course page after enrollment.
      <h1 className="text-6xl">{course.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* video player */}
        <div>
          {selectedMilestone && (
            <iframe
              title={selectedMilestone.sessionTitle}
              width="560"
              height="315"
              src={selectedMilestone.videoLink}
              
            ></iframe>
          )}
        </div>
        {/* course content */}
        <div>
          <MilestoneAccordion
            courseOutline={course.courseOutline}
            activeMilestones={activeMilestones}
            handleToggleMilestone={handleToggleMilestone}
          ></MilestoneAccordion>
        </div>
      </div>
    </div>
  );
};

export default CoursePageUpdate;
