import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import MilestoneAccordion from "../CourseDetails/MilestoneAccordion";

const CoursePageUpdate = () => {
  const location = useLocation();
  const { course } = location.state;
  const [activeMilestones, setActiveMilestones] = useState(
    course.courseOutline.map(() => false)
  );

  const handleToggleMilestone = (index) => {
    setActiveMilestones((prevActiveMilestones) => {
      const newActiveMilestones = prevActiveMilestones.map((isActive, i) =>
        i === index ? !isActive : false
      );
      return newActiveMilestones;
    });
  };
  console.log(course);
  return (
    <div className="pt-24">
      This is course page after enrollment.
      <div>
        <h1 className="text-6xl">{course.title}</h1>

        <MilestoneAccordion
          courseOutline={course.courseOutline}
          activeMilestones={activeMilestones}
          handleToggleMilestone={handleToggleMilestone}
        />
      </div>
    </div>
  );
};

export default CoursePageUpdate;
