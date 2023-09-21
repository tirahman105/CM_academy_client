import { AiFillFire } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import viewIcon from "../../../../../assets/iconForDashboard/icons8-video-clip-48.png";
import { useState } from "react";

const Tiles = (course) => {
  const navigate = useNavigate();
   console.log(typeof course)
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
    <>
    <div
    key={course.course._id}
    className="max-w-full bg-gray-100 rounded-lg mobile:px-1 mobile:py-2 tablet:p-4 flex mobile:gap-4 items-center desktop:space-x-4 tablet:space-x-6 laptop:space-x-2 mt-2"
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
      <p className="text-sm text-gray-600 truncate">
        by {course.course.instructor || course.instructor}
      </p>
    </div>

    <div className="flex items-center space-x-2">
      <AiFillFire className="mobile:text-[10px] tablet:text-base" />
      <p className="text-gray-600 mobile:text-[10px] tablet:text-sm font-bold font-Lexend">
        4.9
      </p>
    </div>
    <button
      className="border-2 flex gap-2 mobile:text-[10px] mobile:px-1 text-sm items-center hover:bg-gray-700 hover:text-white border-black text-black laptop:px-2 tablet:px-4 tablet:py-2 laptop:py-1 laptop:text-[12px] desktop:px-4 desktop:py-2 rounded-lg transition duration-300"
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
      Watch
      <img src={viewIcon} className="h-5 " alt="" />
    </button>
  </div>
  
    </>
   
  );
};

export default Tiles;
