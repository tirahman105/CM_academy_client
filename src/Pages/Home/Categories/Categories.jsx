import React, { useState, useEffect, useContext, useMemo } from "react";
import "./Categories.css";
import { useNavigate } from "react-router-dom";
import CourseCard from "./CourseCard";
import { motion } from "framer-motion";
import { AuthContext } from "../../../providers/AuthProvider";
import { set } from "react-hook-form";
import jobStatImg from "../../../assets/icon/categories-3.png";

const Categories = () => {
  const { user } = useContext(AuthContext); // Get the user object from the AuthContext
  const [courses, setCourses] = useState([]);
  const [activeButtonIndex, setActiveButtonIndex] = useState(1);
  const [Categories, setCategories] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]); // Add state to store enrolled courses
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [jobOpening, setJobOpening] = useState("");
  const [projectedGrowth, setProjectedGrowth] = useState("");

  const navigate = useNavigate();

  console.log(Categories[1]?.description);
  useEffect(() => {
    fetch(
      "https://cm-academy-test-server-production.up.railway.app/categories/approved"
    )
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      });

    fetch(
      "https://cm-academy-test-server-production.up.railway.app/categoriesName"
    )
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setDescription(data[1]?.description);
        setTitle(data[1]?.name);
        setJobOpening(data[1]?.jobOpenings);
        setProjectedGrowth(data[1]?.projectedGrowth);
      });

    // Fetch the list of enrolled courses when the component mounts
    fetch(
      `https://cm-academy-test-server-production.up.railway.app/orders/${user?.email}`
    )
      .then((response) => response.json())
      .then((data) => {
        // Extract the course IDs from the enrolled courses
        const enrolledCourseIds = data.map(
          (enrolledCourse) => enrolledCourse.course._id
        );
        setEnrolledCourses(enrolledCourseIds);
      });
  }, [user]);

  const handleCategoryClick = (
    index,
    description,
    title,
    jobOpening,
    projectedGrowth
  ) => {
    setActiveButtonIndex(index);
    setDescription(description);
    setTitle(title);
    setJobOpening(jobOpening);
    setProjectedGrowth(projectedGrowth);
  };

  const handleDetailsClick = (course) => {
    navigate("/courseDetailsDynamic", { state: { course } });
  };

  const activeCourses = useMemo(() => {
    const selectedCategory = Categories[activeButtonIndex]?.name;
    return courses.filter(
      (course) => course.courseCategory === selectedCategory
    );
  }, [Categories, courses, activeButtonIndex]);

  return (
    <div className="max-w-7xl mx-auto px-2 mt-28">
      <div className="">
        <h1 className="text-4xl font-bold mb-5 font-Poppins">
          Explore Top Courses
        </h1>
        <p className="font-semibold mb-10">
          Choose your desired course and start learning online!
        </p>
        <div className="sticky top-[64px] md:top-[72px] z-[1]">
          <div className="rounded-md h-14 md:h-auto flex bg-white shadow-md shadow-[#1bbf7260] bg-opacity-70 backdrop-blur-lg justify-center gap-2 mb-10 overflow-x-auto">
            {Categories.map((category, index) => (
              <button
                key={index}
                onClick={() =>
                  handleCategoryClick(
                    index,
                    category.description,
                    category.name,
                    category.jobOpenings,
                    category.projectedGrowth
                  )
                }
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

        <div>
          <div className="sm:flex sm:gap-10 items-center     ">
            <div className="sm:w-1/2  px-3 rounded-xl py-2   h-[135px] shadow-md">
              <h1 className="sm:text-2xl font-bold mb-2 sm:mb-5 font-LeagueSpartan text-gray-600">
                {title}
              </h1>
              <p className=" text-[12px] sm:text-base font-bold text-gray-600 sm:font-semibold font-LeagueSpartan   text-justify">
                {description}
              </p>
            </div>
            <div className="sm:w-1/2 mt-4 sm:mt-0 flex gap-4 px-3 rounded-xl py-2 sm:h-[135px]  shadow-md">
              <img src={jobStatImg} alt="" className="hidden sm:block sm:h-[125px]" />
              {/* bg-[#fdfdd586] */}
              <div>
                <p className="text-xl font-bold mb-2 font-LeagueSpartan  text-gray-600">
                  Job openings : {jobOpening}+
                </p>
                <p className="text-xl font-bold mb-3 font-LeagueSpartan text-gray-600">
                  Projected 10 year growth : {projectedGrowth}
                </p>
                <h1 className="text-[11px] font-bold text-gray-500  ">
                  **Growth rate data is sourced from United States Lightcast™ Job
                  Postings Report(7/1/2022 - 6/30/2023)**
                </h1>
              </div>
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
    </div>
  );
};

export default Categories;
