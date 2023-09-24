import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { HiCurrencyBangladeshi } from "react-icons/hi";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import { MdNotStarted } from "react-icons/md";
import { Rating, StickerStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import useInstructor from "../../../Hooks/useInstructor";
import { tr } from "date-fns/locale";

const CourseCard = ({ course, handleDetailsClick, isEnrolled }) => {
  console.log(isEnrolled);
  const [isInstructor] = useInstructor();
  console.log(isInstructor);
  const navigate = useNavigate();

  const handleViewCourse = (courseOutline) => {
    navigate("/coursepage", { state: { courseOutline } });
  };

  const myStyles = {
    itemShapes: StickerStar,
    activeFillColor: "#1bbf72fa",
    inactiveFillColor: "#1bbf7240",
  };

  const instructormail = course.instructorEmail;
  const [instructorInfo, setInstructorInfo] = useState([]);

  useEffect(() => {
    fetch(
      `https://cm-academy-test-server-production.up.railway.app/users/instructor/${instructormail}/info`
    )
      .then((res) => res.json())
      .then((data) => {
        setInstructorInfo(data);
      });
  }, [instructormail]);

  console.log("instructorInfo", instructorInfo);

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="rounded-lg h-[450px]   max-w-[300px] mx-auto border-2 w-full  space-y-2 hover:shadow-md duration-300"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className=""
      >
        <img
          className="h-44 w-full rounded-t-md"
          src={course.courseThumbnail}
          alt={`Thumbnail for ${course.title}`}
        />
      </motion.div>
      <div className="px-1 h-14  ">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-bold font-Lexend "
        >
          {course.title}
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xs w-56    flex items-center gap-2  px-4 py-[4px]  "
      >
        <img
          src={instructorInfo.userImage}
          className="h-6  shadow-md w-6 rounded-full"
          alt={instructorInfo.userImage}
        />

        <Link
          to={`/instructorProfile/${instructorInfo._id}`}
          state={{ instructorInfo }}
        >
          <p className="text-gray-500 font-bold">
            {course.instructor || <Skeleton count={10}></Skeleton>}
          </p>
        </Link>
      </motion.div>
      <motion.div className=" flex justify-between px-4 items-center">
        <div className="flex items-center justify-center gap-1">
          <div className=" bg-[#f3ef78] shadow-sm  text-gray-700 font-bold px-1 text-[11px] rounded-sm  ">
            Highest Rated
          </div>
          <div className="bg-[#1bbf72fa] shadow-sm  text-white font-bold px-1 text-[11px] rounded-sm ">
            Best Seller
          </div>

          {/* <FiUsers className="text-[#1bbf72fb]" /> */}
        </div>
      </motion.div>
      <motion.div className=" flex justify-between px-4 items-center">
        <div className="flex items-center justify-center gap-1">
          <p className="font-bold text-gray-600">4.5</p>
          <Rating
            className=" "
            style={{ maxWidth: 80 }}
            value={4.5}
            readOnly
            itemStyles={myStyles}
          />

          <p className="text-sm font-semibold text-gray-500">({course.enrollCount})</p>
          {/* <FiUsers className="text-[#1bbf72fb]" /> */}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex items-center  px-[14px]"
      >
        <HiCurrencyBangladeshi className="text-[#1bbf72fa] text-xl" />
        <p className="font-bold text-gray-700 font-Poppins text-lg">
          {course.coursePrice}
        </p>
        <div
          className="relative flex items-center  ml-3 
"
        >
          <HiCurrencyBangladeshi className=" text-md text-gray-500" />
          <p className="font-bold text-gray-500 font-mono text-sm">
            {Math.floor(course.coursePrice * 1.356)}
          </p>

          <div className="bg-gray-500  absolute h-[1px] w-full "></div>
        </div>
      </motion.div>

      {/* bg-[#1bbf7216] rounded-b-lg */}
      <div className="bg-[#1bbf722a] h-[1px] "></div>

      <div className="py-2 flex justify-between px-4">
        {isEnrolled ? (
          <button
            className="flex items-center justify-center gap-1 px-2 py-1 rounded-md shadow-md border border-[#1bbf726c] duration-500 hover:bg-[#1bbf723d] hover:text-gray-700"
            onClick={() => handleViewCourse(course.courseOutline)}
          >
            <MdNotStarted className="text-[#1bbf72fb]"></MdNotStarted>

            <p className="font-bold font-mono">View Course</p>
          </button>
        ) : (
          <button
            disabled={true}
            className="flex items-center justify-center gap-1 px-2 py-1 rounded-md shadow-md border border-[#1bbf726c] duration-500 hover:bg-[#1bbf723d] hover:text-[#1bbf72fa]"
          >
            <FaCartPlus className="text-[#1bbf72fb]" />
            {isInstructor ? (
              <p className="font-bold font-mono text-[12px] text-gray-500">
                You can't buy{" "}
              </p>
            ) : (
              <Link to={`/checkout/${course._id}`}>
                <p className="font-bold font-mono">Enroll Now</p>
              </Link>
            )}
          </button>
        )}

        <button
          className=" font-Raleway border-2 font-bold text-xs rounded-md px-4 bg-gray-700 text-white  duration-500 hover:bg-[#1bbf72c9] hover:text-white shadow-md"
          onClick={() => handleDetailsClick(course)}
        >
          Details
        </button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
