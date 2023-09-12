import React, { useState, useEffect } from "react";
import "./Categories.css";
import { useNavigate } from "react-router-dom";
import CourseCard from "./CourseCard";
import { motion } from "framer-motion";
function Categories() {
  const [courses, setCourses] = useState([]);
  const [activeCourses, setActiveCourses] = useState([]);
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [Categories, setCategories] = useState([]);
  const navigate = useNavigate();

  console.log(courses);

  useEffect(() => {
    fetch("https://cm-academy-test-server-production.up.railway.app/categories/approved")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setActiveCourses(data);
      });
  }, []);

  // this all categories route  https://cm-academy-test-server-production.up.railway.app/categoriesName

  

  useEffect(() => {
    fetch(
      "https://cm-academy-test-server-production.up.railway.app/categoriesName"
    )
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  console.log(Categories);

  // const Categories = [
  //   "Digital Marketing",
  //   "Web Development",
  //   "Communication Skills",
  // ];

  const handleCategoryClick = (index) => {
    setActiveButtonIndex(index);
    const selectedCategory = Categories[index]?.name; // Access the name property of the selected category
    const matchingCourses = courses.filter(
      (course) => course.courseCategory === selectedCategory
    );
    setActiveCourses(matchingCourses);

    console.log(matchingCourses);
  };

  const handleDetailsClick = (course) => {
    navigate("/courseDetailsDynamic", { state: { course } });

    console.log(course);
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
                
                {category.name} {/* Use 'category.name' here */}
              </button>
            ))}
          </div>
        </div>

        {/* Course card */}
        <motion.div className="mt-4 duration-700 grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:px-10 py-6 rounded-xl">
          {activeCourses.map((activeCourse, courseIndex) => (
            <CourseCard
              key={courseIndex}
              course={activeCourse}
              handleDetailsClick={handleDetailsClick}
              index={courseIndex}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Categories;
