// import React, { useState, useEffect } from "react";
// import "./AllCourseCategories.css";
// import { useNavigate, useLocation } from "react-router-dom";
// import CourseCard from "../Home/Categories/CourseCard";
// import CourseCardSkeleton from "./CourseCardSkeleton"; // Import the skeleton component
// import { motion } from "framer-motion";

// function AllCourseCategories() {
//   const [courses, setCourses] = useState([]);
//   const [activeCourses, setActiveCourses] = useState([]);
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [Categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true); // Add loading state
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     // Fetch category names from the API
//     fetch(
//       "https://cm-academy-test-server-production.up.railway.app/categoriesName"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setCategories(data);
//       });

//     // Fetch all courses initially or based on the query parameter
//     const selectedCategory = new URLSearchParams(location.search).get(
//       "category"
//     );
//     if (selectedCategory && selectedCategory !== "All") {
//       setActiveCategory(selectedCategory);
//       fetch(
//         `https://cm-academy-test-server-production.up.railway.app/categories/${selectedCategory}`
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           setCourses(data);
//           setActiveCourses(data);
//           setLoading(false); // Set loading to false when data is fetched
//         });
//     } else {
//       fetch(
//         "https://cm-academy-test-server-production.up.railway.app/categories/approved"
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           setCourses(data);
//           setActiveCourses(data);
//           setLoading(false); // Set loading to false when data is fetched
//         });
//     }
//   }, [location.search]);

//   const handleCategoryClick = (categoryName) => {
//     setLoading(true); // Set loading to true when a new category is clicked
//     setActiveCategory(categoryName);

//     if (categoryName === "All") {
//       setActiveCourses(courses);
//       setLoading(false); // Set loading to false when data is fetched
//     } else {
//       fetch(`https://cm-academy-test-server-production.up.railway.app/categories/${categoryName}`)
//         .then((response) => response.json())
//         .then((data) => {
//           setActiveCourses(data);
//           setLoading(false); // Set loading to false when data is fetched
//         });
//     }

//     navigate(`/courseCategories?category=${encodeURIComponent(categoryName)}`);
//   };

//   const handleDetailsClick = (course) => {
//     navigate("/courseDetailsDynamic", { state: { course } });
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-2 pt-28">
//       <div className="">
//         <h1 className="text-4xl font-bold mb-5 font-Poppins">
//           Explore Top Courses
//         </h1>
//         <p className="font-semibold mb-10">
//           Choose your desired course and start learning online!
//         </p>
//         <div className="sticky top-[64px] md:top-[72px] z-[1]">
//           <div className="rounded-md h-14 md:h-auto flex bg-white shadow-md shadow-[#1bbf7260] bg-opacity-70 backdrop-blur-lg justify-center gap-2 mb-10 overflow-x-auto">
//             <button
//               onClick={() => handleCategoryClick("All")}
//               className={`md:h-[50px] px-4 py-4 cursor-pointer rounded-md font-bold text-[10px] md:text-sm transition-all duration-300   ${
//                 activeCategory === "All" ? "text-[#1BBF72] ] " : "text-gray-800"
//               }`}
//             >
//               All
//             </button>
//             {Categories.map((category, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleCategoryClick(category.name)}
//                 className={`md:h-[50px] px-4 py-4 cursor-pointer rounded-md font-bold text-[10px] md:text-sm transition-all duration-300   ${
//                   activeCategory === category.name
//                     ? "text-[#1BBF72] ] "
//                     : "text-gray-800"
//                 }`}
//               >
//                 {category.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Render skeleton when loading */}
//         {loading ? (
//           <div className="mt-4 duration-700 grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:px-10 py-6 rounded-xl">
//             {Array.from({ length: 8 }, (_, i) => (
//               <CourseCardSkeleton key={i} />
//             ))}
//           </div>
//         ) : (
//           // Render actual course cards when data is ready
//           <motion.div className="mt-4 duration-700 grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:px-10 py-6 rounded-xl">
//             {activeCourses.map((activeCourse, courseIndex) => (
//               <CourseCard
//                 key={courseIndex}
//                 course={activeCourse}
//                 handleDetailsClick={handleDetailsClick}
//                 index={courseIndex}
//               />
//             ))}
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AllCourseCategories;




// implimentation of redux
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
// import CourseCard from "../components/Home/Categories/CourseCard";
import CourseCardSkeleton from "./CourseCardSkeleton";
import { motion } from "framer-motion";
import {
  setActiveCategory,
  setCategories,
  setCourses,
} from "../../Store/coursesSlice";
import CourseCard from "../Home/Categories/CourseCard";

function AllCourseCategories() {
  const courses = useSelector((state) => state.courses.courses);
  const activeCategory = useSelector((state) => state.courses.activeCategory);
  const categories = useSelector((state) => state.courses.categories);
  const loadings = useSelector((state) => state.courses.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [activeCourses, setActiveCourses] = useState([]);


const [loading, setLoading] = useState(true); // Add loading state
  useEffect(() => {
    // Fetch category names from the API
    fetch(
      "https://cm-academy-test-server-production.up.railway.app/categoriesName"
    )
      .then((response) => response.json())
      .then((data) => {
        // Dispatch the action to set categories in the store
        dispatch(setCategories(data));
      });

    // Fetch all courses initially or based on the query parameter
    const selectedCategory = new URLSearchParams(location.search).get(
      "category"
    );
    if (selectedCategory && selectedCategory !== "All") {
      // Set the active category in the store
      dispatch(setActiveCategory(selectedCategory));
      fetch(
        `https://cm-academy-test-server-production.up.railway.app/categories/${selectedCategory}`
      )
        .then((response) => response.json())
        .then((data) => {
          // Dispatch the action to set courses in the store
          dispatch(setCourses(data));
          setActiveCourses(data);
          setLoading(false); // Set loading to false when data is fetched
        });
    } else {
      fetch(
        "https://cm-academy-test-server-production.up.railway.app/categories/approved"
      )
        .then((response) => response.json())
        .then((data) => {
          // Dispatch the action to set courses in the store
          dispatch(setCourses(data));
          setActiveCourses(data);
          setLoading(false); // Set loading to false when data is fetched
        });
    }
  }, [dispatch, location.search]);

  const handleCategoryClick = (categoryName) => {
    // Update the active category in the store
    dispatch(setActiveCategory(categoryName));
    setLoading(true); // Set loading to true when a new category is clicked

    if (categoryName === "All") {
      // Set active courses based on all courses in the store
      setActiveCourses(courses);
      setLoading(false); // Set loading to false when data is fetched
    } else {
      fetch(
        `https://cm-academy-test-server-production.up.railway.app/categories/${categoryName}`
      )
        .then((response) => response.json())
        .then((data) => {
          // Set active courses in the store
          dispatch(setCourses(data));
          setActiveCourses(data);
          setLoading(false); // Set loading to false when data is fetched
        });
    }

    navigate(`/courseCategories?category=${encodeURIComponent(categoryName)}`);
  };

  const handleDetailsClick = (course) => {
    navigate("/courseDetailsDynamic", { state: { course } });
  };

  console.log(loading)
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
              />
            
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default AllCourseCategories;
