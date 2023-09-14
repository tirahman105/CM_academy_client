import { AiFillFire } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import viewIcon from "../../../../../assets/iconForDashboard/icons8-video-clip-48.png";

const Tiles = (course) => {
  // console.log("Tiles", course);
  const navigate = useNavigate();

  const handleViewCourse = (courseId, courseOutline ,title, instructor) => {
    navigate("/coursepage", { state: { courseOutline, courseId , title, instructor} });
  };
  return (
    <div
      key={course.course._id}
      className="max-w-full bg-gray-100 rounded-lg p-4 flex items-center space-x-4 mt-2"
    >
      <img
        src={course.course.courseThumbnail || course.courseThumbnail}
        alt={course.course.title || course.title}
        className="w-20 h-20 object-cover rounded-md transition-transform duration-300 transform hover:scale-110"
      />
      <div style={{ flex: "1" }}>
        <p className="text-gray-900 font-bold text-lg">
          {course.course.title || course.title}
        </p>
        <p className="text-sm text-gray-600">
          by {course.course.instructor || course.instructor}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <BiTimeFive /> <p className="text-gray-600 text-sm">6h 30min</p>
      </div>
      <div className="flex items-center space-x-2">
        <AiFillFire />
        <p className="text-gray-600 text-sm">4.9</p>
      </div>
      <button
        className="border-2 flex gap-2 text-sm items-center hover:bg-gray-700 hover:text-white border-black text-black  px-4 py-2 rounded-lg transition duration-300"
        onClick={() =>
          handleViewCourse(
            course.course._id,
            course.course.courseOutline,
            course.course.instructor,
            course.course.title
          )
        }
      >
        View Course
        <img src={viewIcon} className="h-5 " alt="" />
      </button>
    </div>
  );
};

export default Tiles;
