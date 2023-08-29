import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const MyCourseInstructor = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [instructorCourses, setInstructorCourses] = useState([]);

  useEffect(() => {
    fetch(`https://cm-academy-test-server-production.up.railway.app/categories`)
      .then((response) => response.json())
      .then((categories) => {
        // Filter courses based on instructor's email
        const instructorCourses = categories.filter((category) =>
          category.instructorEmail.includes(user?.email)
        );
        setInstructorCourses(instructorCourses);
      })
      .catch((error) => {
        console.error("Error fetching instructor courses:", error);
      });
  }, [user?.email]);

  const handleDetailsClick = (course) => {
    navigate("/courseDetailsDynamic", { state: { course } });

    console.log(course);
  };

  console.log(instructorCourses);
  return (
    <div>
      <h2>My Courses</h2>
      <div className="grid grid-cols-3">
        {instructorCourses.map((category) => (
          <div
            key={category._id}
            className="card  bg-base-100 shadow-xl  mx-auto"
          >
            <figure>
              <img
                className="h-56 w-full"
                src={category.courseThumbnail}
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title mb-2">
                {category.title} - {category.courseCategory}
                <div className="badge badge-warning">New</div>
              </h2>
              <p className="text-xs tracking-wider">
                Learn the basics of web development, including HTML, CSS, and
                JavaScript.
              </p>
              <div className="flex justify-between mt-2 font-semibold text-sm text-gray-500">
                <h1>Price:tk {category.coursePrice}</h1>
              </div>

              <div className="divider"></div>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleDetailsClick(category)}
                  className="btn btn-sm bg-[#edfffc] 
                border-2 border-[#12C29F] text-[#12C29F]
                "
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourseInstructor;
