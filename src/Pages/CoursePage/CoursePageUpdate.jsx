
import React from "react";
import { useLocation } from "react-router-dom";

const CoursePageUpdate = () => {
  const location = useLocation();
  const { course } = location.state;

  console.log(course);
  return (
    <div className="pt-24">
      This is course page after enrollment.
      <div>
        <h1 className="text-6xl">{course.title}</h1>
      </div>
    </div>
  );
};

export default CoursePageUpdate;
