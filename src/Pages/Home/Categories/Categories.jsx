import React, { useState, useEffect } from "react";
import "./Categories.css";
import { useNavigate } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { FaStar, FaBuromobelexperte } from "react-icons/fa";

function Categories() {
  const [courses, setCourses] = useState([]);
  const [activeCourses, setActiveCourses] = useState([]);
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);

  const navigate = useNavigate();

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
        <div className="flex items-center justify-center overflow-x-auto gap-2 mb-10 sticky top-[0px] z-50 bg-opacity-50 backdrop-blur-lg bg-[#bbbaba] border-slate-300 shadow-sm rounded-sm">
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
          <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-4 gap-4  bg-gradient px-4 md:px-10 py-6 rounded-xl">
            {activeCourses.map((activeCourse, courseIndex) => (
              <div
                className=" rounded-lg bg-white backdrop-blur-md bg-opacity-25 text-white shadow-lg  "
                key={courseIndex}
              >
                {/* ////image past start///// */}
                <div className="relative">
                  <img
                    className=" h-44 w-full rounded-lg  "
                    src={activeCourse.courseThumbnail}
                    alt=""
                  />
                  <div className="shadow-md text-xs w-56 bg-slate-800 bg-opacity-40 backdrop-blur-md flex items-center gap-2 absolute rounded-e-md px-4 py-[4px] bottom-3 z-10 text-white font-semibold font-mono ">
                    <img
                      src="https://media.discordapp.net/attachments/1137192144587739287/1144607311084654622/videos-teachers-768x432.jpg"
                      className="h-6 bg-red-600 w-6 rounded-full"
                      alt=""
                    />
                    <p>{activeCourse.instructor}</p>
                  </div>
                </div>
                {/* /////image past end////// */}
                <div className="px-5 h-14 ">
                  <h1 className="font-bold">
                   
                    {activeCourse.title} 
                  </h1>
                </div>

                <div className=" font-mono h-14 flex justify-between px-4 items-center text-white">
                  <div className="flex items-center justify-center gap-1">
                    <FaBuromobelexperte></FaBuromobelexperte>
                    <p className="font-semibold ">Advance</p>
                  </div>

                  <div className="flex items-center justify-center gap-1">
                    <FiUsers></FiUsers>
                    <p className="font-semibold ">588</p>
                  </div>

                  <div className="flex items-center justify-center gap-1">
                    <FaStar className=""></FaStar>
                    <p className="font-semibold ">588</p>
                  </div>
                </div>
                <hr />
                <div className="py-2 flex justify-between px-4">
                  <p className="font-bold font-mono">
                    {activeCourse.coursePrice}.00 Tk
                  </p>
                  <button
                    className="bg-gray-700 text-white px-2 py-[2] rounded-md font-semibold font-mono"
                    onClick={() => handleDetailsClick(activeCourse)}
                  >
                    Details
                  </button>{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
