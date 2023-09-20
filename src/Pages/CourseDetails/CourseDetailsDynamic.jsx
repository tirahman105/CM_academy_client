import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import React, { useContext, useEffect, useState } from "react";
import { MdCheckCircle, MdLibraryBooks, MdQuiz } from "react-icons/md";
import { useLocation } from "react-router";
import "./CourseDetails.css";
import { HiCurrencyBangladeshi } from "react-icons/hi";
import { FaPlayCircle } from "react-icons/fa";
import { PiCertificateFill, PiInfinityDuotone } from "react-icons/pi";
import MilestoneAccordion from "./MilestoneAccordion";
import FaqAccordion from "./FaqAccordion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useInstructor from "../../Hooks/useInstructor";
import iconWarn from "../../assets/IconForDetails/icons8-warning-16 (1).png";

const CourseDetailsDynamic = () => {
  const [isInstructor] = useInstructor();
  const location = useLocation();
  const { course } = location.state;

  console.log(isInstructor);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeMilestones, setActiveMilestones] = useState(
    course.courseOutline.map(() => false)
  );

  const [activeFaq, setActiveFaq] = useState(-1);

  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };

  const handleToggleFaq = (index) => {
    setActiveFaq((prevActiveFaq) => (prevActiveFaq === index ? -1 : index));
  };

  const handleToggleMilestone = (index) => {
    setActiveMilestones((prevActiveMilestones) => {
      const newActiveMilestones = prevActiveMilestones.map((isActive, i) =>
        i === index ? !isActive : false
      );
      return newActiveMilestones;
    });
  };
  console.log(course);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      exit={{ opacity: 0, transition: { duration: 1.5 } }}
      className=" "
    >
      {/* Banner section start */}
      <div className="pt-[74px]   ">
        <div className=" items-center      flex   bg-gradient  ">
          <div className="flex items-center px-4 sm:px-6 py-5 gap-6  max-w-7xl mx-auto ">
            <div className="sm:w-2/4">
              <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-4xl font-bold font-Lexend leading-10 mb-4 text-gray-700 "
              >
                {course.title}
              </motion.h1>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-gray-700 font-semibold  font-TitilliumWeb   tracking-wider leading-8"
              >
                {course.courseDescription}
              </motion.p>

              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-center gap-2 font-bold"
              >
                <Rating
                  className=""
                  style={{ maxWidth: 100 }}
                  value={4.5}
                  readOnly
                />
                <p className="text-[#13ac64]">4.5 (15)</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner section end */}

      <div>
        {course.ApprovedStatus === "Deny" && (
          <>
            <div className="flex w-full bg-[#F6D7D4] gap-2 items-center justify-center">
              <img className="h-5" src={iconWarn} alt="" />
              <p className="text-center  py-2   font-bold text-[#410E0B] ">
                Your Course is not approved yet! Please wait for approval.
              </p>
            </div>
          </>
        )}
      </div>

      <div className="max-w-7xl flex    mx-auto gap-10 px-4  ">
        <div className="">
          {/* Instructor section start */}
          <div className=" mt-12  ">
            <div className="sm:flex  items-center px-6 py-5 gap-6 sm:w-[90%] border-2 relative rounded-lg ">
              <div className="bg-[#1bbf7259] absolute backdrop-blur-md top-0 left-0 px-4 shadow-sm rounded-r-md shadow-[#1bbf7283]  ">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="font-bold text-gray-700 "
                >
                  Course Instructor
                </motion.h1>{" "}
              </div>
              <img
                className="h-28 sm:w-28 "
                src="https://cdn.discordapp.com/attachments/1139410376035930184/1139410449444642996/186503160_10219069026867086_5494482271146422387_n-removebg-preview.png"
                alt=""
              />

              <div>
                <motion.h1
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-2xl font-bold font-Lexend leading-10 "
                >
                  {course.instructor}
                </motion.h1>
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="text-gray-600 font-Lexend font-semibold text-sm"
                >
                  {/* COurse instrcutor about */}
                </motion.p>
              </div>
            </div>
          </div>
          {/* Instructor section end */}

          {/* What u will learn session start */}

          <div className="  mt-12  mb-16  ">
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xl font-bold font-Lexend leading-10 mb-4"
            >
              What You Will Learn
            </motion.h1>
            <div className=" px-6 py-5  sm:w-[90%] border-2 rounded-lg ">
              <div className="grid sm:grid-cols-2  gap-4 ">
                {course.whatYouWillLearn.map((learn, index) => (
                  <div className="flex items-center gap-3" key={index}>
                    <MdCheckCircle className=" text-[#1bbf72f3] text-[8px] sm:text-sm  "></MdCheckCircle>
                    <p className="sm:text-sm text-[12px]  text-gray-700 font-semibold ">
                      {learn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What u will learn session end */}

          {/* MilestoneAccordion start */}
          <MilestoneAccordion
            courseOutline={course.courseOutline}
            activeMilestones={activeMilestones}
            handleToggleMilestone={handleToggleMilestone}
          />
          {/* MilestoneAccordion End */}

          {/* Course Requirement start */}

          <div className=" mt-12  mb-16  ">
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xl font-bold font-Lexend leading-10 mb-4"
            >
              Course Requirement
            </motion.h1>
            <div className=" px-6 py-5  sm:w-[90%] border-2 rounded-lg ">
              <div className="grid  gap-4 ">
                {course.courseRequirements.map((learn, index) => (
                  <div className="flex items-center gap-3" key={index}>
                    <MdCheckCircle className=" text-[#1bbf72f3] "></MdCheckCircle>
                    <p className="text-sm text-gray-700  font-semibold">
                      {learn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Course Requirement end */}

          {/* Who are suitable for this course start */}

          <div className="  mt-12  mb-16  ">
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xl font-bold font-Lexend leading-10 mb-4"
            >
              Who Are Suitable For This Course
            </motion.h1>
            <div className=" px-2 py-2  sm:w-[90%] border-2 rounded-lg ">
              <div className="grid  gap-4 ">
                <div className="flex items-center gap-3">
                  <p className="text-sm text-gray-600 font-semibold  bg-[#1bbf721c] px-5 py-2 rounded-md ">
                    {course.whoIsCourseFor}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Who are suitable for this course end */}

          {/* FaqAccordion start */}
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xl font-bold font-Lexend leading-10 mb-4"
          >
            FAQ
          </motion.h1>
          <FaqAccordion
            faqData={course.faq}
            activeFaq={activeFaq}
            handleToggleFaq={handleToggleFaq}
          />
          {/* FaqAccordion start */}
        </div>
        {/* course Card start */}

        <div className="hidden md:block sticky h-full pr-2  top-20 backdrop-blur-lg">
          <div className="max-w-7xl  mb-48 h-[600px] border w-[334px] boxShadow rounded-lg  relative ">
            <img
              className="w-[334px] h-[200px] rounded-lg mb-4"
              src={course.courseThumbnail}
              alt=""
            />

            <div className="px-4">
              <div className="flex items-center  gap-1 ">
                <HiCurrencyBangladeshi className="text-[#1bbf72fa] text-3xl"></HiCurrencyBangladeshi>
                <p className="font-bold font-Lexend leading-10  text-gray-700 text-2xl ">
                  {course.coursePrice} Tk
                </p>
              </div>
              <div className=" mt-7 w-full">
                <Link to={`/checkout/${course._id}`}>
                  <button
                    disabled={isInstructor}
                    className=" w-full bg-[#258d5c11] font-Lexend text-lg border-2 font-bold py-[9px]  rounded-md px-4  hover:css-selector  hover:border-[#1bbf7246] duration-500 
                  text-gray-700 boxShadowBtn "
                  >
                    {" "}
                    Enroll Now
                  </button>
                </Link>
                <p className="text-center font-Lexend text-gray-500 text-[12px] mt-2">
                  30-Day Money-Back Guarantee
                </p>
              </div>{" "}
              {/* ///////// */}
              <div className="mt-3">
                <div className="flex items-center  gap-1 ">
                  <FaPlayCircle className="text-[#1bbf72fa] "></FaPlayCircle>
                  <p className="font-bold font-Lexend leading-10  text-gray-700 ">
                    7 Hours Video
                  </p>
                </div>
                <div className="flex items-center  gap-1 ">
                  <MdQuiz className=" text-[#1bbf72fa]"></MdQuiz>
                  <p className="font-bold font-Lexend leading-10  text-gray-700 ">
                    10 Quiz
                  </p>
                </div>
                <div className="flex items-center  gap-1 ">
                  <MdLibraryBooks className="text-[#1bbf72fa] "></MdLibraryBooks>
                  <p className="font-bold font-Lexend leading-10  text-gray-700 ">
                    7 Lecture
                  </p>
                </div>
                <div className="flex items-center  gap-1 ">
                  <PiCertificateFill className=" text-[#1bbf72fa]"></PiCertificateFill>
                  <p className="font-bold font-Lexend leading-10  text-gray-700 ">
                    Certification of Completion
                  </p>
                </div>
                <div className="flex items-center  gap-1 ">
                  <PiInfinityDuotone className=" text-[#1bbf72fa]"></PiInfinityDuotone>
                  <p className="font-bold font-Lexend leading-10  text-gray-700 ">
                    Full lifetime access
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* course Card End */}
      </div>
      {/* /////////////////content end */}

      {/* ///////bottom badge bar start */}
      <div className="bg-[#242527] block  sm:h-auto w-full fixed sm:static bottom-0 z-[1000] sm:hidden  py-2">
        <div className="sm:max-w-7xl  mx-auto px-4 sm:py-2 flex justify-between items-center">
          <div className="">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="sm:text-3xl text-sm font-bold font-Lexend sm:leading-10 sm:mb-4 text-white "
            >
              {course.title}
            </motion.h1>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-center gap-1 font-bold"
            >
              <Rating
                className=""
                style={{ maxWidth: 70 }}
                value={4.5}
                readOnly
                itemStyles={myStyles}
              />
              <p className="text-[#13ac64] text-[10px] sm:text-lg">4.5 (137)</p>
            </motion.div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-center  gap-1 "
            >
              <HiCurrencyBangladeshi className="text-white sm:text-3xl"></HiCurrencyBangladeshi>
              <p className="font-bold text-[10px]  font-Lexend sm:leading-10  text-white sm:text-2xl ">
                {course.coursePrice} Tk
              </p>
            </motion.div>
            <Link to={`/checkout/${course._id}`}>
              <motion.button
                disabled={isInstructor}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className=" bg-white font-Lexend  sm:text-lg text-[10px] border-2 font-bold sm:py-[4px]  rounded-md sm:px-5 px-1 
                w-[80px] sm:w-auto  hover:css-selector  hover:border-[#1bbf7246] duration-500 
                text-gray-700 boxShadowBtn "
              >
                {" "}
                Enroll Now
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
      {/* ///////bottom badge bar end */}
    </motion.div>
  );
};

export default CourseDetailsDynamic;
