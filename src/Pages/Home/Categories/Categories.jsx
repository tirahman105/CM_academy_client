import React, { useState, useEffect, useContext } from "react";
import "./Categories.css";
import { useNavigate } from "react-router-dom";
import CourseCard from "./CourseCard";
import { motion } from "framer-motion";
import { AuthContext } from "../../../providers/AuthProvider";

function Categories() {
  const { user } = useContext(AuthContext); // Get the user object from the AuthContext
  const [courses, setCourses] = useState([]);
  const [activeCourses, setActiveCourses] = useState([]);
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [Categories, setCategories] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]); // Add state to store enrolled courses
  const navigate = useNavigate();


  // console.log(enrolledCourses);
  useEffect(() => {
    fetch(
      "https://cm-academy-test-server-production.up.railway.app/categories/approved"
    )
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setActiveCourses(data);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://cm-academy-test-server-production.up.railway.app/categoriesName"
    )
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  // Fetch the list of enrolled courses when the component mounts
  useEffect(() => {
    fetch(
      `https://cm-academy-test-server-production.up.railway.app/orders/${user?.email}`
    ) // Replace with the actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        // Extract the course IDs from the enrolled courses
        const enrolledCourseIds = data.map(
          (enrolledCourse) => enrolledCourse.course._id
        );
        setEnrolledCourses(enrolledCourseIds);
      });
  }, []);

  const handleCategoryClick = (index) => {
    setActiveButtonIndex(index);
    const selectedCategory = Categories[index]?.name;
    const matchingCourses = courses.filter(
      (course) => course.courseCategory === selectedCategory
    );
    setActiveCourses(matchingCourses);
  };

  const handleDetailsClick = (course) => {
    navigate("/courseDetailsDynamic", { state: { course } });
  };




  return (
    <div className="max-w-7xl mx-auto px-2 mt-28 ">
      <div className="">
        <h1 className="text-4xl font-bold mb-5  font-Poppins">
          Explore Top Courses
        </h1>
        <p className=" font-semibold mb-10">
          Choose your desired course and start learning online!
        </p>
        <div className="sticky top-[64px] md:top-[72px] z-[1]  ">
          <div className=" rounded-md  h-14 md:h-auto flex bg-white shadow-md shadow-[#1bbf7260] bg-opacity-70 backdrop-blur-lg justify-center  gap-2 mb-10  overflow-x-auto ">
            {Categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(index)}
                className={`md:h-[50px] px-4 py-4 cursor-pointer rounded-md font-bold text-[10px] md:text-sm transition-all duration-300   ${
                  activeButtonIndex === index
                    ? "text-[#1BBF72] ] "
                    : "text-gray-800"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>



        <motion.div className="mt-4 duration-700 grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:px-10 py-6 rounded-xl">
          {activeCourses.map((activeCourse, courseIndex) => (
            <CourseCard
              key={courseIndex}
              course={activeCourse}
              handleDetailsClick={handleDetailsClick}
              index={courseIndex}
              // Check if the course is in the list of enrolled courses
              isEnrolled={enrolledCourses.includes(activeCourse._id)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Categories;
