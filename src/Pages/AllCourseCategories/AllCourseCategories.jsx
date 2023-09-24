import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import CourseCardSkeleton from "./CourseCardSkeleton";
import { motion } from "framer-motion";
import {
  setActiveCategory,
  setCategories,
  setCourses,
} from "../../Store/coursesSlice";
import CourseCard from "../Home/Categories/CourseCard";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

function AllCourseCategories() {
  const courses = useSelector((state) => state.courses.courses);
  const activeCategory = useSelector((state) => state.courses.activeCategory);
  const categories = useSelector((state) => state.courses.categories);
  const loadings = useSelector((state) => state.courses.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext); // Get the user object from the AuthContext

  // Create a state variable to cache fetched data
  const [cachedData, setCachedData] = useState({});

  const [activeCourses, setActiveCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]); // Add state to store enrolled courses
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch category names from the API if not already cached
    if (!cachedData.categories) {
      fetch(
        "https://cm-academy-test-server-production.up.railway.app/categoriesName"
      )
        .then((response) => response.json())
        .then((data) => {
          // Cache the fetched data
          setCachedData((prevState) => ({
            ...prevState,
            categories: data,
          }));
          // Dispatch the action to set categories in the store
          dispatch(setCategories(data));
        });
    } else {
      // If data is already cached, dispatch the action to set categories in the store
      dispatch(setCategories(cachedData.categories));
    }

    // Fetch all courses initially or based on the query parameter
    const selectedCategory = new URLSearchParams(location.search).get(
      "category"
    );
console.log(selectedCategory);
    
    if (selectedCategory && selectedCategory !== "All") {
      if (!cachedData[selectedCategory]) {
        // Fetch courses for the selected category if not already cached
        fetch(
          `https://cm-academy-test-server-production.up.railway.app/categories/${selectedCategory}`
        )
          .then((response) => response.json())
          .then((data) => {
            // Cache the fetched data
            setCachedData((prevState) => ({
              ...prevState,
              [selectedCategory]: data,
            }));
            // Dispatch the action to set courses in the store
            dispatch(setCourses(data));
            setActiveCourses(data);
            setLoading(false); // Set loading to false when data is fetched
          });
      } else {
        // If data is already cached, dispatch the action to set courses in the store
        dispatch(setCourses(cachedData[selectedCategory]));
        setActiveCourses(cachedData[selectedCategory]);
        setLoading(false); // Set loading to false when data is fetched
      }
    } else {
      // Fetch courses for the "All" category if not already cached
      if (!cachedData.allCourses) {
        fetch(
          "https://cm-academy-test-server-production.up.railway.app/categories/approved"
        )
          .then((response) => response.json())
          .then((data) => {
            // Cache the fetched data
            setCachedData((prevState) => ({
              ...prevState,
              allCourses: data,
            }));
            // Dispatch the action to set courses in the store
            dispatch(setCourses(data));
            setActiveCourses(data);
            setLoading(false); // Set loading to false when data is fetched
          });
      } else {
        // If data is already cached, dispatch the action to set courses in the store
        dispatch(setCourses(cachedData.allCourses));
        setActiveCourses(cachedData.allCourses);
        setLoading(false); // Set loading to false when data is fetched
      }
    }
  }, [dispatch, location.search, cachedData]);

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

  const handleCategoryClick = (categoryName) => {
    // Update the active category in the store
    dispatch(setActiveCategory(categoryName));
    setLoading(true); // Set loading to true when a new category is clicked

    if (categoryName === "All") {
      // Set active courses based on all courses in the store
      setActiveCourses(courses);
      setLoading(false); // Set loading to false when data is fetched
    } else {
      if (!cachedData[categoryName]) {
        // Fetch courses for the selected category if not already cached
        fetch(
          `https://cm-academy-test-server-production.up.railway.app/categories/${categoryName}`
        )
          .then((response) => response.json())
          .then((data) => {
            // Set active courses in the store
            dispatch(setCourses(data));
            setActiveCourses(data);
            setLoading(false); // Set loading to false when data is fetched
            // Cache the fetched data
            setCachedData((prevState) => ({
              ...prevState,
              [categoryName]: data,
            }));
          });
      } else {
        // If data is already cached, set active courses in the store
        dispatch(setCourses(cachedData[categoryName]));
        setActiveCourses(cachedData[categoryName]);
        setLoading(false); // Set loading to false when data is fetched
      }
    }

    navigate(`/courseCategories?category=${encodeURIComponent(categoryName)}`);
  };

  const handleDetailsClick = (course) => {
    navigate("/courseDetailsDynamic", { state: { course } });
  };
  console.log(loading);
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
              onClick={() => handleCategoryClick("All")}
              className={`md:h-[50px] px-4 py-4 cursor-pointer rounded-md font-bold text-[10px] md:text-sm transition-all duration-300   ${
                activeCategory === "All" ? "text-[#1BBF72] ] " : "text-gray-800"
              }`}
            >
              All
            </button>
            {categories.map((category, index) => (
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

        {/* Render skeleton when loading */}
        {loading ? (
          <div className="mt-4 duration-700 grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:px-10 py-6 rounded-xl">
            {Array.from({ length: 8 }, (_, i) => (
              <CourseCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          // Render actual course cards when data is ready

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
        )}
      </div>
    </div>
  );
}

export default AllCourseCategories;
