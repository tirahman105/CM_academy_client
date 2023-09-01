import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const MyCourses = () => {
  const { user } = useContext(AuthContext);
  const [studentCourses, setStudentCourses] = useState([]);
  const navigate = useNavigate();

  console.log(studentCourses);
  useEffect(() => {
    const fetchStudentCourses = async () => {
      try {
        const response = await fetch(
          `https://cm-academy-test-server-production.up.railway.app/orders`
        );
        const data = await response.json();

        // Filter orders to find the ones associated with the logged-in student's email
        const enrolledCourses = data.filter(
          (order) => order.order.studentEmail === user.email
        );

        // Store the enrolled courses in state
        setStudentCourses(enrolledCourses);
      } catch (error) {
        console.error("Error fetching student courses:", error);
      }
    };

    fetchStudentCourses();
  }, [user]);


  const handleDetailsClick = (course) => {
    navigate("/coursepageUpdate", { state: { course } });

    console.log(course);
  };
  return (
    <div>
      <h1>Student Enrolled Courses</h1>

      <div className=" grid grid-cols-3 gap-4">
        {studentCourses.map((course) => (
          <div className="border rounded-lg py-2 px-4" key={course._id}>
            <p>Course ID: {course.order.courseId}</p>
            <p>Date: {course.order.date}</p>
            <button
            onClick={() => handleDetailsClick(course.course)}
              className="text-gray-700 font-Raleway border-2 font-bold py-[9px]  rounded-xl px-4 css-selector   hover:border-[#1bbf7246] duration-500 
              hover:bg-[#1bbf7249] hover:text-gray-600 shadow-md"
            >
              Start Watching
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
