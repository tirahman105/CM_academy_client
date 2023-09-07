import React, { useState, useEffect } from "react";
import "./AllCourseCategories.css";
import { useNavigate, useLocation } from "react-router-dom";
import CourseCard from "../Home/Categories/CourseCard";
import { motion } from "framer-motion";

function AllCourseCategories() {
  const [courses, setCourses] = useState([]);
  const [activeCourses, setActiveCourses] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All"); // Initialize as "All"
  const [Categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Fetch category names from the API
    fetch(
      "https://cm-academy-test-server-production.up.railway.app/categoriesName"
    )
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });

    // Fetch all courses initially or based on the query parameter
    const selectedCategory = new URLSearchParams(location.search).get(
      "category"
    );
    if ( selectedCategory && selectedCategory !== "All" ) {
      console.log(selectedCategory)
      setActiveCategory(selectedCategory);
      fetch(
        `https://cm-academy-test-server-production.up.railway.app/categories/${selectedCategory}`
      )
        .then((response) => response.json())
        .then((data) => {
          setCourses(data);
          setActiveCourses(data);
        });
    } else {
      fetch(
        "https://cm-academy-test-server-production.up.railway.app/categories/approved"
      )
        .then((response) => response.json())
        .then((data) => {
          setCourses(data);
          setActiveCourses(data);
        });
    }
  }, [location.search]);


  const handleCategoryClick = (categoryName) => {
  console.log("Clicked category:", categoryName);

  // Set the active category
  setActiveCategory(categoryName);

  if (categoryName === "All") {
    console.log("Fetching all courses...");
    // If "All" is clicked, show all courses
    setActiveCourses(courses);
  } else {
    console.log("Fetching courses for:", categoryName);
    // Fetch courses based on the selected category
    fetch(`https://cm-academy-test-server-production.up.railway.app/categories/${categoryName}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched courses:", data);
        setActiveCourses(data);
      });
  }

  // Update the URL with the selected category as a query parameter
  navigate(`/courseCategories?category=${encodeURIComponent(categoryName)}`);
};

  const handleDetailsClick = (course) => {
    navigate("/courseDetailsDynamic", { state: { course } });
  };

  return (
    <div className="max-w-7xl mx-auto px-2 pt-28">
      <div className="">
        <h1 className="text-4xl font-bold mb-5 font-Poppins">
          Explore Top Courses
        </h1>
        <p className="font-semibold mb-10">
          Choose your desired course and start learning online!
        </p>
        <div className="sticky top-[64px] md:top-[72px] z-[1]">
          <div className="rounded-md h-14 md:h-auto flex bg-white shadow-md shadow-[#1bbf7260] bg-opacity-70 backdrop-blur-lg justify-center gap-2 mb-10 overflow-x-auto">
            <button
              onClick={() => handleCategoryClick("All")} // Pass "All" as the category name
              className={`md:h-[50px] px-4 py-4 cursor-pointer rounded-md font-bold text-[10px] md:text-sm transition-all duration-300   ${
                activeCategory === "All" ? "text-[#1BBF72] ] " : "text-gray-800"
              }`}
            >
              All
            </button>
            {Categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category.name)}
                className={`md:h-[50px] px-4 py-4 cursor-pointer rounded-md font-bold text-[10px] md:text-sm transition-all duration-300   ${
                  activeCategory === category.name
                    ? "text-[#1BBF72] ] "
                    : "text-gray-800"
                }`}
              >
                {category.name}
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

export default AllCourseCategories;
