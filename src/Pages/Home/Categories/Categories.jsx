import { useState, useEffect } from "react";

function Categories() {
  const [courses, setCourses] = useState([]);
  const [activeCourse, setActiveCourse] = useState(null);

  useEffect(() => {
    fetch("/courses.json")
      .then((response) => response.json())
      .then((data) => setCourses(data.courses));
  }, []);

  const handleCourseClick = (course) => {
    console.log(course);
    setActiveCourse(course);
  };
//TODO: Animation will be added soon
  return (
    <div className="p-4 ">
      <h1 className="text-4xl font-semibold mb-10 text-center">
        Explore Top Courses
      </h1>
      <div className="flex space-x-4 mb-10">
        {courses.map((course) => (
          <button
            key={course.title}
            onClick={() => handleCourseClick(course)}
            className={`px-4 py-2 rounded-md font-bold text-white ${
              activeCourse === course
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
          >
            {course.title}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {activeCourse && (
          <div className="">
            <h2 className="text-2xl font-bold mt-4 mb-10 text-center">
              {activeCourse.title}
            </h2>
            <div className="list-disc pl-6 grid md:grid-cols-4 gap-5 text-white">
              {activeCourse.subCourses.map((subCourse) => (
                <div
                  key={subCourse.title}
                  className="mt-2 border p-4 bg-slate-400 rounded-lg shadow-md"
                >
                  <strong>{subCourse.title}</strong>
                  <div>Duration: {subCourse.duration}</div>
                  <div>Instructor: {subCourse.instructor}</div>
                  <div>Rating: {subCourse.rating}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Categories;
