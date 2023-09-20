import { AiFillFire } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import viewIcon from "../../../../../assets/iconForDashboard/icons8-video-clip-48.png";

const Tiles = (course) => {
  // console.log("Tiles", course);
  const navigate = useNavigate();

  console.log("Tiles", course);
  const handleViewCourse = (
    courseId,
    courseOutline,
    title,
    instructor,
    courseCategory
  ) => {
    console.log(
      "Tiles",
      courseId,
      courseOutline,
      title,
      instructor,
      courseCategory
    );
    navigate("/coursepage", {
      state: { courseOutline, courseId, title, instructor, courseCategory },
    });
  };
  return (
    <div
      key={course.course._id}
      className="max-w-full bg-gray-100 rounded-lg mobile:px-1 mobile:py-2 tablet:p-4 flex items-center space-x-4 mt-2"
    >
      <img
        src={course.course.courseThumbnail || course.courseThumbnail}
        alt={course.course.title || course.title}
        className="tablet:w-20 tablet:h-20 mobile:w-10 mobile:h-10 laptop:w-14 laptop:h-14 desktop:w-20 desktop:h-20 object-cover rounded-md transition-transform duration-300 transform hover:scale-110"
      />
      <div className="flex-1 min-w-[100px]">
        <p className="text-gray-900 mobile:text-[14px] tablet:text-sm  font-bold desktop:text-lg truncate   ">
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
            course.course.title,
            course.course.courseCategory
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
