import { GrNext } from "react-icons/gr";
import { PiArrowElbowUpRightFill } from "react-icons/pi";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
// import { MdOutlineQuiz } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { BsStopwatch } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./CourseDetails.css";

const CourseDetails = () => {
  const location = useLocation();
  const { subCourse } = location.state || {};

  console.log(subCourse);
  subCourse.courseOutline.map((m) => {
    console.log(m.milestone);
  });
  const videoId = "-BDJUvaZb-A"; // Replace with your actual YouTube video ID

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="relative  mx-auto max-w-[1800px]">
      {/*Banner section */}
      <section className="bg-[#007096] rounded-md sticky top-0  z-10 ">
        <div className="py-4 px-10 md:w-1/2">
          <h2 className="text-4xl font-bold text-white">{subCourse.title} </h2>
          <p className=" mt-4 text-white">{subCourse.courseDescription}</p>
          <p className="mt-2 flex  items-center gap-3">
            <span className="text-white text-xl">{subCourse.rating}</span>
            <Rating
              className=" "
              style={{ maxWidth: 150 }}
              value={subCourse.rating}
              readOnly
            />
          </p>
          <p className="text-xl text-white mt-2">
            ৳<span className="ml-2">2500</span>
          </p>
        </div>
      </section>
      {/*Banner section end*/}

      <div className="flex flex-col-reverse md:flex-row  gap-24 xl:gap-40 pr-10 pl-10 md:pr-10 md:pl-10  mt-10">
        <div className="w-full md:w-2/5 lg:w-3/5  ">
          {/*instructor section */}
          <section className="mt-10   ">
            <h2 className="text-2xl font-bold">Course Instructor</h2>
            <div className="border rounded-md p-10 flex gap-10 items-center mt-5">
              <div className="shadow-md rounded-full">
                <img
                  className="w-20 h-20 rounded-full shadow-md"
                  src="https://cdn.discordapp.com/attachments/1139410376035930184/1139410449444642996/186503160_10219069026867086_5494482271146422387_n-removebg-preview.png"
                  alt=""
                />
              </div>
              <div>
                <h4 className="flex items-center gap-2 font-bold">
                  {subCourse.instructor}
                  <Link to="/">
                    <GrNext></GrNext>
                  </Link>{" "}
                </h4>
                <p className=" w-[250px]">{subCourse.aboutInstructor}</p>
              </div>
            </div>
          </section>

          {/*outcome  section */}
          <section className="mt-10   ">
            <h2 className="text-2xl font-bold">
              What you will learn by doing the course
            </h2>
            <div className="border rounded-md p-10  mt-5">
              <div className="flex gap-4  w-full items-center">
                <PiArrowElbowUpRightFill className="text-5xl font-bold text-blue-500"></PiArrowElbowUpRightFill>
                <p className="mt-2 text-xl font-bold">
                  {subCourse.whatYouWillLearn}
                </p>
              </div>
            </div>
          </section>

          {/* Details course section */}

          {/*  Preview course section */}

          <section className="mt-10   ">
            <h2 className="text-2xl font-bold mb-8">Content preview</h2>
            <div className="">
              {subCourse.courseOutline.map((item, index) => (
                <div
                  key={index}
                  className="border p-4 mb-2 rounded-md cursor-pointer bg-slate-300"
                  onClick={() => handleToggle(index)}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">
                      Milestone {index + 1} : {item.milestone}
                    </h3>
                    <span className="text-gray-600">
                      {activeIndex === index ? "▲" : "▼"}
                    </span>
                  </div>
                  <div
                    className={`answer ${activeIndex === index ? "open" : ""}`}
                  >
                    <h1 className="font-semibold mb-2 text-slate-600">
                      Sessions:{" "}
                    </h1>
                    <ul className="list-disc pl-4">
                      {item.sessions.map((session, sessionIndex) => (
                        <li
                          className="bg-slate-400 mb-4 rounded-md px-2 text-white font-bold "
                          key={sessionIndex}
                        >
                          {" "}
                          0{sessionIndex + 1}: {session}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/*   Payment section */}
          <section className="mt-10   ">
            <h2 className="text-2xl font-bold">How to pay</h2>
            <div className="border rounded-md p-10   mt-5">
              <h1 className="text-2xl font-semibold">How To Pay?</h1>
              <br />
              <a className="underline text-blue-500" href="">
                Watch this video for details
              </a>
            </div>
          </section>

          {/*   Certificate section */}
          <section className="mt-10   ">
            <h2 className="text-2xl font-bold">Course Certificate</h2>
            <div className="border rounded-md p-10 grid grid-cols-1  gap-10 items-center mt-5">
              <p>কোর্সটি সফলভাবে শেষ করলে আপনার জন্য আছে সার্টিফিকেট -</p>

              <div className="border rounded-md">
                <img
                  src="https://cdn.discordapp.com/attachments/1135483790559543406/1141262574592217178/wepik-black-white-and-gray-modern-certificate-202308151757271rCP.jpeg"
                  alt=""
                />
              </div>
            </div>
          </section>

          {/* Nedd to join class section */}
          <section className="mt-10   ">
            <h2 className="text-2xl font-bold">Class will be required</h2>
            <div className="border rounded-md p-10 grid grid-cols-1  gap-10 items-center mt-5">
              <div className="flex gap-4 ">
                <PiArrowElbowUpRightFill className="text-5xl text-blue-500"></PiArrowElbowUpRightFill>
                <p className="mt-2">
                  Internet connection (WiFi or Mobile Internet)
                </p>
              </div>

              <div className="flex gap-4 ">
                <PiArrowElbowUpRightFill className="text-5xl text-blue-500"></PiArrowElbowUpRightFill>
                <p className="mt-2">Smartphone or PC</p>
              </div>
            </div>
          </section>

          {/*  Ask Question  section */}

          <section className="mt-10   ">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="border rounded-md p-10 flex gap-10 items-center mt-5">
              <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border-b border-b-base-300">
                  <input type="radio" name="my-accordion-4" checked="checked" />
                  <div className="collapse-title text-xl font-medium">
                    About the Course
                  </div>
                  <div className="collapse-content">
                    <p>{subCourse.faq.aboutCourse}</p>
                  </div>
                </div>

                <div className="collapse collapse-arrow join-item border-b border-b-base-300">
                  <input type="radio" name="my-accordion-4" checked="checked" />
                  <div className="collapse-title text-xl font-medium">
                    Who is This Course For?{" "}
                  </div>
                  <div className="collapse-content">
                    <p>{subCourse.faq.whoIsCourseFor}</p>
                  </div>
                </div>

                <div className="collapse collapse-arrow join-item border-b border-b-base-300">
                  <input type="radio" name="my-accordion-4" checked="checked" />
                  <div className="collapse-title text-xl font-medium">
                    Course Difference!
                  </div>
                  <div className="collapse-content">
                    <p>{subCourse.faq.courseDifference}</p>
                  </div>
                </div>

                <div className="collapse collapse-arrow join-item border-b border-b-base-300">
                  <input type="radio" name="my-accordion-4" checked="checked" />
                  <div className="collapse-title text-xl font-medium">
                    Forgot password/how to change password?
                  </div>

                  <div className="collapse-content">
                    <p>
                      - If you forget your password, click Forgot Password below
                      when logging in. Click on the option
                    </p>
                    <p>
                      {" "}
                      Enter the 4 digit OTP code received on your phone number
                      or email and click on the Submit button
                    </p>
                    <p>
                      Now enter your new password and click on the Submit
                      button. If you want to change your password in the future,
                      you can set a new password from the Change Password option
                      in your profile.
                    </p>
                  </div>
                </div>

                <div className="collapse collapse-arrow join-item border-b border-b-base-300">
                  <input type="radio" name="my-accordion-4" checked="checked" />
                  <div className="collapse-title text-xl font-medium">
                    How can I contact you?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Call 01879893229 for any query or problem. Our student
                      advisors will help you with any need.
                    </p>
                  </div>
                </div>

                <div className="collapse collapse-arrow join-item border-b border-b-base-300">
                  <input type="radio" name="my-accordion-4" checked="checked" />
                  <div className="collapse-title text-xl font-medium">
                    How long is the duration of the course?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Any CM Academies free and paid course duration is 6
                      months. After 6 months you will be unenrolled from the
                      course. After the expiry of the period you can extend the
                      period maximum once, after the extension period the course
                      access will be lost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/*   Video add  section */}
        <div className="  md:top-52 lg:top-52 xl:top-40 px-10 md:fixed  md:left-[400px] lg:left-[700px] xl:left-[1500px]  md:z-20">
          <div className="aspect-[16/9] ">
            <iframe
              className="w-full h-full rounded-t-md"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube Video"
              allowFullScreen
            ></iframe>
          </div>
          {/*   information  section */}
          <div className="md:border border-gray-300 md:p-10    ">
            {/*   First information  section */}
            <div>
              <h2 className=" mt-4 text-3xl font-semibold">{subCourse.title}</h2>
              <h1>
                <span className=" text-xl font-semibold">৳0 </span> <s>৳2500</s>{" "}
              </h1>
              <button className="mt-5 bg-blue-500 text-white p-3 w-full font-bold rounded-md">
                Enroll Course
              </button>
            </div>
            {/*    Second information  section */}

            <div className="mt-5">
              <div className="flex gap-4  ">
                <BsPeople className="text-2xl"></BsPeople>
                <p>{subCourse.doneThisCourse} people are doing the course</p>
              </div>

              <div className="flex gap-4  mt-3">
                <BsStopwatch className="text-2xl"></BsStopwatch>
                <p>It will take {subCourse.timeToFinish}</p>
              </div>

              <div className="flex gap-4  mt-3">
                <MdOutlineSlowMotionVideo className="text-2xl"></MdOutlineSlowMotionVideo>
                <p>{subCourse.videoCount} videos</p>
              </div>

              <div className="flex gap-4  mt-3">
                <AiOutlineQuestionCircle className="text-2xl"></AiOutlineQuestionCircle>
                <p>{subCourse.quizCount} sets of quizzes</p>
              </div>
            </div>
          </div>

          {/*   Third information  section */}

          <div className="mt-5 flex justify-between">
            <p>For details about the course</p>
            <p className="flex gap-3 text-xl items-center text-blue-500">
              <BsFillTelephoneFill></BsFillTelephoneFill>
              <a className="underline text-blue-500" href="">
                {" "}
                Call Us
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* releted course section */}
      <div>
        <div className="card w-80 bg-base-100 shadow-xl mt-10 px-10">
          <figure>
            <img
              src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fthumbnails%2Fskills%2Ffacebook-marketing-course-thumbnail-by-ayman-sadiq-sadman-sadik-16x9.jpg&w=384&q=75"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold">Facebook Marketinng</h2>
            <p>Raqibur Rahman Roni , Samsul Alom Asif</p>
            <p className="text-xl font-bold">৳ 1250</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
