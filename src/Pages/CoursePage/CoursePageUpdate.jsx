import React, { useEffect, useState } from "react";
import { AiFillLock } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import MilestoneAccordion from "../CourseDetails/MilestoneAccordion";

const CoursePageUpdate = () => {
  const [course, setCourse] = useState([]);
//   const [activeMilestones, setActiveMilestones] = useState();

  useEffect(() => {
    fetch(
      "https://cm-academy-test-server-production.up.railway.app/categories/64e89ed81a93e023beb3186a"
    )
      .then((response) => response.json())
      .then((data) => {
        setCourse(data);
      });
  }, []);

//   const handleToggleMilestone = (index) => {
//     setActiveMilestones((prevActiveMilestones) => {
//       const newActiveMilestones = prevActiveMilestones.map((isActive, i) =>
//         i === index ? !isActive : false
//       );
//       return newActiveMilestones;
//     });
//   };

  return (
    <div className="pt-20">
      This is course page after enrollment.
      <h1> {course.title}</h1>
      <h1>Course Instructor:{course.instructor}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2 bg-slate-400">video</div>
        
      {/* MilestoneAccordion start */}
      
        {/* MilestoneAccordion End */}
      </div>
    </div>
  );
};

export default CoursePageUpdate;
