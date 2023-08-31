import React, { useState, useEffect } from "react";
import "./Categories.css";
import { useNavigate } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { FaStar, FaBuromobelexperte, FaCartPlus } from "react-icons/fa";
import { HiCurrencyBangladeshi } from "react-icons/hi";

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
    <div className="max-w-7xl mx-auto px-2 mt-28 ">
      <div className="">
        <h1 className="text-4xl font-bold mb-5  font-Poppins">
          Explore Top Courses
        </h1>
        <p className=" font-semibold mb-10">
          Choose your desired course and start learning online!
        </p>
        <div className="sticky top-[64px] md:top-[72px] z-50   ">
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
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="">
          <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-4 gap-4    md:px-10 py-6 rounded-xl ">
            {activeCourses.map((activeCourse, courseIndex) => (
              <div
                className=" rounded-lg shadow-md border-4 backdrop-blur-md bg-opacity-25  space-y-2   "
                key={courseIndex}
              >
                {/* ////image past start///// */}
                <div className="relative">
                  <img
                    className=" h-44 w-full rounded-md  "
                    src={activeCourse.courseThumbnail}
                    alt=""
                  />
                  <div className="shadow-md text-xs w-56 bg-gray-700 border-2 text-white bg-opacity-80 backdrop-blur-md flex items-center gap-2 absolute rounded-e-md px-4 py-[4px] bottom-3 z-10   ">
                    <img
                      src="https://media.discordapp.net/attachments/1137192144587739287/1144607311084654622/videos-teachers-768x432.jpg"
                      className="h-6 shadow-md w-6 rounded-full"
                      alt=""
                    />
                    <p className="font-Poppins">{activeCourse.instructor}</p>
                  </div>
                </div>
                {/* /////image past end////// */}
                <div className="px-5 h-14 ">
                  <h1 className="font-bold font-Lexend">
                    {activeCourse.title}
                  </h1>

                  
                </div>
                <div className="flex items-center  gap-1 px-4">
                    <HiCurrencyBangladeshi className="text-[#1bbf72fa] text-lg"></HiCurrencyBangladeshi>
                    <p className="font-bold font-mono text-sm">
                      {activeCourse.coursePrice}.00
                    </p>
                  </div>

                <div className=" font-mono h-14 flex justify-between px-4 items-center ">
                  <div className="flex items-center justify-center gap-1">
                    <FaBuromobelexperte className="text-[#1bbf72f6]"></FaBuromobelexperte>
                    <p className="font-semibold font-LeagueSpartan ">Advance</p>
                  </div>

                  <div className="flex items-center justify-center gap-1">
                    <FiUsers className="text-[#1bbf72fb]"></FiUsers>
                    <p className="font-semibold ">588</p>
                  </div>

                  <div className="flex items-center justify-center gap-1">
                    <FaStar className="text-[#1bbf72fa]"></FaStar>
                    <p className="font-semibold ">58</p>
                  </div>
                </div>
                <div className="bg-[#1bbf725e] h-[1px] "></div>
                <div className="py-2 flex justify-between px-4">
                  <button className="flex items-center justify-center gap-1 px-2 py-1 rounded-md shadow-md border  border-[#1bbf726c] duration-500 hover:bg-[#1bbf723d] hover:text-[#1bbf72fa]">
                    <FaCartPlus className="text-[#1bbf72fb]"></FaCartPlus>

                    <p className="font-bold font-mono ">
                      Enroll Now
                    </p>
                  </button>
                  <button
                    className="text-gray-700 font-Raleway border-2 font-bold text-xs rounded-md px-4 css-selector   hover:border-[#1bbf7246] duration-500 
                    hover:bg-[#1bbf7249] hover:text-gray-600 shadow-md"
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
