

import React from "react";
import { useLocation } from "react-router-dom";


const CourseDetailsDynamic = () => {

    const location = useLocation();
  const { course } = location.state;

// ApprovedStatus, courseCategory,courseIntroVideo ,(courseOutline [Array] need to map),coursePrice, courseRequirements Array(5) , courseThumbnail,
// faq (array of two),instructor,instructorEmail, whatYouWillLearn(array of 6) , whoIsCourseFor(object separated by comma)


  console.log(course)
  return (
    <div className="css-selector mt-24">

      <h1>{course.title}</h1>

    </div>
  );
};

export default CourseDetailsDynamic;
