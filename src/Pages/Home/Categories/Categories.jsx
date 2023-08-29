import React, { useState, useEffect } from "react";
import "./Categories.css";
import { useNavigate } from "react-router-dom";

function Categories() {
  const [courses, setCourses] = useState([]);
  const [activeCourses, setActiveCourses] = useState([]);
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);

  const navigate = useNavigate();

  console.log(courses);

  useEffect(() => {
    fetch("https://cm-academy-test-server-production.up.railway.app/categories")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setActiveCourses(data);
      });
  }, []);

  const Categories = [
    "Digital Marketing",
    "Web Development",
    "Communication Skills",
  ];

  const handleCategoryClick = (index) => {
    setActiveButtonIndex(index);
    const category = Categories[index];
    const matchingCourses = courses.filter(
      (course) => course.courseCategory === category
    );
    setActiveCourses(matchingCourses);

    console.log(matchingCourses);
  };
  const handleDetailsClick = (course) => {
    navigate("/courseDetailsDynamic", { state: { course } });

    console.log(course);
  };

  return (
    <div className="home-container">
      <div className="mt-16">
        <h1 className="text-4xl font-bold mb-5 text-center text-[#12C29F]">
          Explore Top Courses
        </h1>
        <p className="text-center font-semibold mb-10">
          Choose your desired course and start learning online!
        </p>
        <div className="flex items-center justify-center overflow-x-auto gap-2 mb-10 sticky top-[0px] z-50 bg-opacity-50 backdrop-blur-lg bg-[#bbbaba] border-slate-300">
          {Categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(index)}
              className={`md:h-[70px] px-4 py-2 rounded-md font-bold text-sm transition-all duration-300 ${
                activeButtonIndex === index
                  ? "text-[#12C29F] rounded-lg"
                  : "text-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div>
          <div className="mt-4 grid grid-cols-4 gap-4  bg-gradient px-4 md:px-10 py-6 rounded-xl">
            {activeCourses.map((activeCourse, courseIndex) => (
              <div className="border p-2 text-white" key={courseIndex}>
                <img
                  className="bg-black h-32 w-52 "
                  src={activeCourse.courseThumbnail}
                  alt=""
                />
                <h1> {activeCourse.title}</h1>
                <p>Instructor name</p>
                <p>{activeCourse.coursePrice} Tk</p>
                <button onClick={() => handleDetailsClick(activeCourse)}>
                  Details
                </button>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
