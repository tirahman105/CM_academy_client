import { GrNext } from "react-icons/gr";
import { PiArrowElbowUpRightFill } from "react-icons/pi";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { MdOutlineQuiz } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { BsStopwatch } from "react-icons/bs";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiOutlineQuestionCircle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


const CourseDetailsDynamic = () => {

  const location = useLocation();
  const { course } = location.state;

  console.log(course)
  const videoId = "-BDJUvaZb-A"; // Replace with your actual YouTube video ID

  const [isSticky, setIsSticky] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [activeSection, setActiveSection] = useState('presentation');


    const handleNavClick = (section) => {
      setActiveSection(section);
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
  };


  return (
    <div className="relative">
    
        {/*Banner section */}
        <section className={`bg-[#007096] rounded-md ${isSticky ? 'sticky top-0 z-10' : ''}`}>
        <div className={`py-3 px-4 md:p-6 ${isSticky ? 'hidden' : 'block'}`}>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                Presentation & Public Speaking
            </h2>
            <p className=" mt-1 text-white  md:w-2/4">
                From personal life to professional or student life, communication skills play an important role in keeping yourself one step ahead.
            </p>
<div className="flex gap-3 items-center">

<p className="mt-2 flex items-center gap-2 md:gap-3">
<span className="text-white text-base md:text-xl">5</span>
<Rating className="" style={{ maxWidth: 120 }} value={5} readOnly />
</p>
<p className="text-lg md:text-xl text-white mt-2 text-semibold sm:w-[100px]">৳ <span className="ml-2">2500</span></p>

</div>


<div className="overflow-x-hidden">
  <nav  className="bg-gray-300 fixed top-[210px] md:top-[239px] lg:top-[200px] xl:top-[220px] w-[1000px] hover-scroll">
    <ul className="flex gap-6 md:gap-12 text-blue-500 p-2">
      <li
        onClick={() => handleNavClick('learn')}
        className={`cursor-pointer text-xl font-bold ${
          activeSection === 'learn' ? 'text-black font-bold text-xl' : ''
        }`}
      >
        Learn
      </li>
      <li
        onClick={() => handleNavClick('details')}
        className={`cursor-pointer text-xl font-bold ${
          activeSection === 'details' ? 'text-black font-bold text-xl' : ''
        }`}
      >
        Details
      </li>
      <li
        onClick={() => handleNavClick('content')}
        className={`cursor-pointer text-xl font-bold ${
          activeSection === 'content' ? 'text-black font-bold text-xl' : ''
        }`}
      >
        Content
      </li>
      <li
        onClick={() => handleNavClick('payment')}
        className={`cursor-pointer text-xl font-bold ${
          activeSection === 'payment' ? 'text-black font-bold text-xl' : ''
        }`}
      >
        Payment
      </li>
      <li
        onClick={() => handleNavClick('certificate')}
        className={`cursor-pointer text-xl font-bold ${
          activeSection === 'certificate'
            ? 'text-black font-bold text-xl'
            : ''
        }`}
      >
        Certificate
      </li>
      <li
        onClick={() => handleNavClick('faq')}
        className={`cursor-pointer text-xl font-bold ${
          activeSection === 'faq' ? 'text-black font-bold text-xl' : ''
        }`}
      >
        FAQ
      </li>
    </ul>
  </nav>
</div>
 
        </div>
        {isSticky && (
            <div className="py-2 px-4 md:p-6">
                <h2 className=" md:text-xl lg:2xl font-bold text-white">
                    Presentation & Public Speaking
                </h2>

        

              <div className="md:flex items-center gap-4">
              
              <div>
              <p className="mt-2 flex items-center gap-2 md:gap-3">
             
              <Rating className="" style={{ maxWidth: 100 }} value={5} readOnly />
          </p>
              </div>
             <div className="">
             <p className="text-white mt-2  font-semibold ">৳ <span className="ml-2">2500</span></p>
             </div>

             <div className="text-white mt-2  font-semibold ">
             <p className="flex gap-1 items-center">
             <BsPeople></BsPeople>
             Enrolled: <span>10 Students</span> </p>
             </div>
              
              </div>

              <div className=" lg:hidden gap-3 ">
              
              <div>
              <button className="mt-5 bg-blue-500 text-white p-2 md:w-32 font-bold rounded-md">
              Enroll Course
            </button>
              </div>

              <div className=" flex xl:hidden  text-white  gap-2 items-center  mt-3">
              <p className="font-semibold  md:w-[200px]">Share this Course: </p>
               <div className="flex sm:w-3/4 md:mx-auto md:1/5  gap-1">
               <AiFillFacebook className="text-2xl  "></AiFillFacebook>
               <AiFillInstagram className="text-2xl"></AiFillInstagram>
                  <AiFillLinkedin  className="text-2xl"></AiFillLinkedin>
                  <AiFillTwitterSquare className="text-2xl"></AiFillTwitterSquare>
               </div>
              
            </div>

              
              </div>

            
              <nav className="bg-gray-300 fixed top-[228px] md:top-[204px] lg:top-[108px]  w-[1000px]">
              <ul className="flex gap-6 md:gap-12   text-blue-500 p-2">
               
              <li onClick={() => handleNavClick('learn')} className={`cursor-pointer text-xl font-bold ${activeSection === 'learn' ? 'text-black font-bold text-xl' : ''}`}>Learn</li>
              <li onClick={() => handleNavClick('details')} className={`cursor-pointer text-xl font-bold ${activeSection === 'details' ? 'text-black font-bold text-xl' : ''}`}>Details</li>
              <li onClick={() => handleNavClick('content')} className={`cursor-pointer text-xl font-bold ${activeSection === 'content' ? 'text-black font-bold text-xl' : ''}`}>Contner</li>
              <li onClick={() => handleNavClick('payment')} className={`cursor-pointer text-xl font-bold ${activeSection === 'payment' ? 'text-black font-bold text-xl' : ''}`}>Payment</li>
              <li onClick={() => handleNavClick('certificate')} className={`cursor-pointer text-xl font-bold ${activeSection === 'certificate' ? 'text-black font-bold text-xl' : ''}`}>Certificate</li>
              <li onClick={() => handleNavClick('faq')} className={`cursor-pointer text-xl font-bold ${activeSection === 'faq' ? 'text-black font-bold text-xl' : ''}`}>FAQ</li>
          </ul>
</nav>
              
            
             
            </div>


            
        )}


       
       

    </section>

   

      <div  className=" flex flex-col-reverse md:flex-row gap-4 md:gap-10 xl:gap-16 pr-4 pl-4 md:pr-10 md:pl-10 mt-10">
        <div className="w-full md:w-3/5 lg:w-3/5 overflow-y-auto">
      
       
          {/*instructor section */}
          <section id="instructor" className="mt-10   ">
            <h2 className="text-2xl font-bold">Course Instructor</h2>
            <div className="border rounded-md p-10 flex gap-10 items-center mt-5">
              <div>
                <img
                  className="w-20 h-20 rounded-full"
                  src="https://cdn.discordapp.com/attachments/1139410376035930184/1139410449444642996/186503160_10219069026867086_5494482271146422387_n-removebg-preview.png"
                  alt=""
                />
              </div>
              <div>
                <h4 className="flex items-center gap-2">
                  Tarek Vi{" "}
                  <Link to="/">
                    <GrNext></GrNext>
                  </Link>{" "}
                </h4>
                <p>Forbes 30 Under 30;</p>
                <p>Founder & CEO, CM Academy</p>
                <p>Young Leader;</p>
                <p>Doctor</p>
              </div>
            </div>
          </section>

          {/*outcome  section */}
          <section id="learn" className="mt-10   ">
            <h2 className="text-2xl font-bold">কোর্সটি করে যা শিখবেন</h2>
            <div className="border rounded-md p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-5">
              <div className="flex gap-4 ">
                <PiArrowElbowUpRightFill className="text-5xl text-blue-500"></PiArrowElbowUpRightFill>
                <p className="mt-2">
                  Presentation এবং Public Speaking এর সময় শ্রোতাদেরকে আপনার কথার
                  প্রতি আগ্রহী করে তোলা
                </p>
              </div>

              <div className="flex gap-4 ">
                <PiArrowElbowUpRightFill className="text-5xl text-blue-500"></PiArrowElbowUpRightFill>
                <p className="mt-2">
                  প্রেজেন্টেশন শুরু করা, ট্রানজিশন ব্যবহার করা এবং সঠিকভাবে
                  প্রেজেন্টেশন শেষ করা
                </p>
              </div>

              <div className="flex gap-4 ">
                <PiArrowElbowUpRightFill className="text-5xl text-blue-500"></PiArrowElbowUpRightFill>
                <p className="mt-2">
                  প্রেজেন্টেশন কিংবা বক্তৃতার জন্য সঠিক ড্রেস কোড ও বডি
                  ল্যাঙ্গুয়েজ
                </p>
              </div>

              <div className="flex gap-4 ">
                <PiArrowElbowUpRightFill className="text-5xl text-blue-500"></PiArrowElbowUpRightFill>
                <p className="mt-2">
                  প্রেজেন্টেশনের জন্য দারুণ কার্যকর কিছু পাওয়ারপয়েন্ট হ্যাকস
                </p>
              </div>

              <div className="flex gap-4 ">
                <PiArrowElbowUpRightFill className="text-5xl text-blue-500"></PiArrowElbowUpRightFill>
                <p className="mt-2">
                  পাবলিক স্পিকিং এর সময় দুর্বল বক্তব্য এড়ানোর উপায়
                </p>
              </div>

              <div className="flex gap-4 ">
                <PiArrowElbowUpRightFill className="text-5xl text-blue-500"></PiArrowElbowUpRightFill>
                <p className="mt-2">
                  প্রেজেন্টেশন এর সময় আত্মবিশ্বাসের সাথে বক্তব্য উপস্থাপন করার
                  গাইডলাইন
                </p>
              </div>
            </div>
          </section>

          {/* Details course section */}
          <section id='details' className="mt-10  ">
            <h2 className="text-2xl font-bold">কোর্স সম্পর্কে বিস্তারিত</h2>
            <div className="border rounded-md p-10 flex gap-10 items-center mt-5">
              <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border-b border-b-base-300">
                  <input type="radio" name="my-accordion-4" checked="checked" />
                  <div className="collapse-title text-xl font-medium">
                    Presentation & Public Speaking কোর্সটি জন্য
                  </div>
                  <div className="collapse-content">
                    <ol className="list-disc pl-6">
                      <li>
                        যারা প্রেজেন্টেশন এবং পাবলিক স্পিকিং সেশনের জন্য নিজের
                        মধ্যে আত্মবিশ্বাস তৈরি করতে চান, তাদের জন্য কোর্সটি
                        সহায়ক ভূমিকা পালন করবে।
                      </li>
                      <li>
                        যারা প্রেজেন্টেশন এবং পাবলিক স্পিকিং সেশনের জন্য নিজের
                        মধ্যে আত্মবিশ্বাস তৈরি করতে চান, তাদের জন্য কোর্সটি
                        সহায়ক ভূমিকা পালন করবে।
                      </li>
                      <li>
                        যারা প্রেজেন্টেশন এবং পাবলিক স্পিকিং সেশনের জন্য নিজের
                        মধ্যে আত্মবিশ্বাস তৈরি করতে চান, তাদের জন্য কোর্সটি
                        সহায়ক ভূমিকা পালন করবে।
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-b border-base-300">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">
                    Presentation & Public Speaking কোর্সটি জন্য
                  </div>
                  <div className="collapse-content">
                    <ol className="list-disc pl-6">
                      <li>
                        যারা প্রেজেন্টেশন এবং পাবলিক স্পিকিং সেশনের জন্য নিজের
                        মধ্যে আত্মবিশ্বাস তৈরি করতে চান, তাদের জন্য কোর্সটি
                        সহায়ক ভূমিকা পালন করবে।
                      </li>
                      <li>
                        যারা প্রেজেন্টেশন এবং পাবলিক স্পিকিং সেশনের জন্য নিজের
                        মধ্যে আত্মবিশ্বাস তৈরি করতে চান, তাদের জন্য কোর্সটি
                        সহায়ক ভূমিকা পালন করবে।
                      </li>
                      <li>
                        যারা প্রেজেন্টেশন এবং পাবলিক স্পিকিং সেশনের জন্য নিজের
                        মধ্যে আত্মবিশ্বাস তৈরি করতে চান, তাদের জন্য কোর্সটি
                        সহায়ক ভূমিকা পালন করবে।
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-b border-base-300">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">
                    Presentation & Public Speaking কোর্সটি জন্য
                  </div>
                  <div className="collapse-content">
                    <ol className="list-disc pl-6">
                      <li>
                        যারা প্রেজেন্টেশন এবং পাবলিক স্পিকিং সেশনের জন্য নিজের
                        মধ্যে আত্মবিশ্বাস তৈরি করতে চান, তাদের জন্য কোর্সটি
                        সহায়ক ভূমিকা পালন করবে।
                      </li>
                      <li>
                        যারা প্রেজেন্টেশন এবং পাবলিক স্পিকিং সেশনের জন্য নিজের
                        মধ্যে আত্মবিশ্বাস তৈরি করতে চান, তাদের জন্য কোর্সটি
                        সহায়ক ভূমিকা পালন করবে।
                      </li>
                      <li>
                        যারা প্রেজেন্টেশন এবং পাবলিক স্পিকিং সেশনের জন্য নিজের
                        মধ্যে আত্মবিশ্বাস তৈরি করতে চান, তাদের জন্য কোর্সটি
                        সহায়ক ভূমিকা পালন করবে।
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*  Preview course section */}
          <section id="content" className="mt-10   ">
            <h2 className="text-2xl font-bold">কন্টেন্ট প্রিভিউ</h2>
            <div className="border rounded-md p-10 flex gap-10 items-center mt-5">
              <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border-b border-b-base-300">
                  <input type="radio" name="my-accordion-4" checked="checked" />
                  <div className="collapse-title text-xl font-medium">
                    Chapter 01 - How to Start A Presentation
                  </div>
                  <div className="collapse-content">
                    <div className="flex gap-2 items-center">
                      <MdOutlineSlowMotionVideo className="text-2xl"></MdOutlineSlowMotionVideo>
                      <p className="">Video: </p>
                      <p>How to start A presentation </p>
                    </div>
                  </div>
                </div>

                <div className="collapse collapse-arrow join-item border-b border-b-base-300">
                  <input type="radio" name="my-accordion-4" checked="checked" />
                  <div className="collapse-title text-xl font-medium">
                    Chapter 02 - How to End A Presentation
                  </div>
                  <div className="collapse-content">
                    <div className="flex gap-2 items-center">
                      <MdOutlineSlowMotionVideo className="text-2xl"></MdOutlineSlowMotionVideo>
                      <p className="">Video: </p>
                      <p>How to End A presentation </p>
                    </div>
                  </div>
                </div>

                <div className="collapse collapse-arrow join-item border-b border-b-base-300">
                  <input type="radio" name="my-accordion-4" checked="checked" />
                  <div className="collapse-title text-xl font-medium">
                    Quiz 01
                  </div>
                  <div className="collapse-content">
                    <div className="flex gap-2 items-center">
                      <MdOutlineQuiz className="text-2xl"></MdOutlineQuiz>
                      <p className="">Quiz 01</p>
                    </div>
                  </div>
                </div>

                <div className="collapse collapse-arrow join-item border-b border-b-base-300">
                  <input type="radio" name="my-accordion-4" checked="checked" />
                  <div className="collapse-title text-xl font-medium">
                    Chapter 03 - Transition in A presentation
                  </div>
                  <div className="collapse-content">
                    <div className="flex gap-2 items-center">
                      <MdOutlineSlowMotionVideo className="text-2xl"></MdOutlineSlowMotionVideo>
                      <p className="">Video: </p>
                      <p>Transition in A presentation</p>
                    </div>
                  </div>
                </div>

                <div className="collapse collapse-arrow join-item border-b border-b-base-300">
                  <input type="radio" name="my-accordion-4" checked="checked" />
                  <div className="collapse-title text-xl font-medium">
                    Chapter 04 - Eye Contact in presentation
                  </div>
                  <div className="collapse-content">
                    <div className="flex gap-2 items-center">
                      <MdOutlineSlowMotionVideo className="text-2xl"></MdOutlineSlowMotionVideo>
                      <p className="">Video: </p>
                      <p> Eye Contact in presentation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*   Payment section */}
          <section id='payment' className="mt-10   ">
            <h2 className="text-2xl font-bold">যেভাবে পেমেন্ট করবেন</h2>
            <div className="border rounded-md p-10   mt-5">
              কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে{" "}
              <a className="underline text-blue-500" href="">
                এই ভিডিওটি দেখুন
              </a>
            </div>
          </section>

          {/*   Certificate section */}
          <section id='certificate' className="mt-10   ">
            <h2 className="text-2xl font-bold">কোর্স সার্টিফিকেট</h2>
            <div className="border rounded-md p-10 grid grid-cols-1  gap-10 items-center mt-5">
              <p>
                কোর্সটি সফলভাবে শেষ করলে আপনার জন্য আছে সার্টিফিকেট -
              </p>
           

              <div className="border rounded-md">
                <img
                  src="https://cdn.discordapp.com/attachments/1135483790559543406/1141262574592217178/wepik-black-white-and-gray-modern-certificate-202308151757271rCP.jpeg"
                  alt=""
                />
              </div>
            </div>
          </section>

          {/* Nedd to join class section */}
          <section id='need' className="mt-10   ">
            <h2 className="text-2xl font-bold">ক্লাস করার জন্য প্রয়োজন হবে</h2>
            <div className="border rounded-md p-10 grid grid-cols-1  gap-10 items-center mt-5">
              <div className="flex gap-4 ">
                <PiArrowElbowUpRightFill className="text-5xl text-blue-500"></PiArrowElbowUpRightFill>
                <p className="mt-2">
                  ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)
                </p>
              </div>

              <div className="flex gap-4 ">
                <PiArrowElbowUpRightFill className="text-5xl text-blue-500"></PiArrowElbowUpRightFill>
                <p className="mt-2">স্মার্টফোন অথবা পিসি</p>
              </div>
            </div>
          </section>

          {/*  Ask Question  section */}

          <section id='faq' className="mt-10   ">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="border rounded-md p-10 flex gap-10 items-center mt-5">
              <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border-b border-b-base-300">
                  <input type="radio" name="my-accordion-4" checked="checked" />
                  <div className="collapse-title text-xl font-medium">
                    Is it possible to cancle course admissin?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Sorry! Once a course has been purchased, you cannot cancel
                      your enrollment in that course.
                    </p>
                  </div>
                </div>

                <div className="collapse collapse-arrow join-item border-b border-b-base-300">
                  <input type="radio" name="my-accordion-4" checked="checked" />
                  <div className="collapse-title text-xl font-medium">
                    Will the certificate expire?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Your certificate never expires, you can use the
                      certificate whenever you want at your convenience.
                    </p>
                  </div>
                </div>

                <div className="collapse collapse-arrow join-item border-b border-b-base-300">
                  <input type="radio" name="my-accordion-4" checked="checked" />
                  <div className="collapse-title text-xl font-medium">
                    How do i report a technical issue?
                  </div>
                  <div className="collapse-content">
                    <p>
                      In case of any problem, call: 16910 Email:
                      support@cmacademy.com or fill this form:
                      https://forms.gle/buwAfFXP8V6c7gbY7
                    </p>
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
                      Call 16910 for any query or problem. Our student advisors
                      will help you with any need.
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
                      Any ten minute school skills free and paid course duration
                      is 6 months. After 6 months you will be unenrolled from
                      the course. After the expiry of the period you can extend
                      the period maximum once, after the extension period the
                      course access will be lost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/*   Video add  section */}
        <div className="md:w-[270px] lg:w-[330px] xl:w-[400px]   md:fixed top-20 right-5   lg:right-10 xl:right:20 h-full overflow-y-auto md:z-10">
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
              <h2 className=" mt-4 text-3xl">
                {" "}
                <span className="font-bold">৳0 </span> <s>৳2500</s>{" "}
              </h2>
              <button className="mt-5 bg-blue-500 text-white p-3 md:w-40 font-bold rounded-md">
                Enroll Course
              </button>
            </div>
            {/*    Second information  section */}

            <div className="mt-5">
              <div className="flex gap-4  ">
                <BsPeople className="text-2xl"></BsPeople>
                <p>147102 people are doing the course</p>
              </div>

              <div className="flex gap-4  mt-3">
                <BsStopwatch className="text-2xl"></BsStopwatch>
                <p>It will take 2 hours</p>
              </div>

              <div className="flex gap-4  mt-3">
                <MdOutlineSlowMotionVideo className="text-2xl"></MdOutlineSlowMotionVideo>
                <p>31 videos</p>
              </div>

              <div className="flex gap-4  mt-3">
                <AiOutlineQuestionCircle className="text-2xl"></AiOutlineQuestionCircle>
                <p>16 sets of quizzes</p>
              </div>
            </div>
            <div className="hidden  md:block md:mx-auto   xl:mx-0 xl:flex mt-3 w-[700px] xl:w-full ">
            <p className="font-bold  w-3/5">Share this Course: </p>
             <div className="flex w-3/5    gap-1">
             <AiFillFacebook className="text-2xl"></AiFillFacebook>
             <AiFillInstagram className="text-2xl"></AiFillInstagram>
                <AiFillLinkedin  className="text-2xl"></AiFillLinkedin>
                <AiFillTwitterSquare className="text-2xl"></AiFillTwitterSquare>
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
                Call(16910)
              </a>
            </p>
          </div>
        </div>
      </div>

     {/* releted course section */}
     <div>
     
   <div className="grid grid-cols-1    lg:grid-cols-2   w-3/5 md:w-3/5 lg:w-3/5   p-4 lg:gap-10">
 

<div className="md:flex justify-center items-center lg:block w-80 md:w-auto     lg:card   xl:w-96 bg-base-100 shadow-xl mt-10 px-10">
<div className="md:flex lg:block lg:card   justify-center items-center">
<figure>
<img className=" rounded-t-xl md:w-auto"
  src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fthumbnails%2Fskills%2Ffacebook-marketing-course-thumbnail-by-ayman-sadiq-sadman-sadik-16x9.jpg&w=384&q=75"
  alt="Shoes"
/>
</figure>
<div className="card-body">
<h2 className="text-xl font-bold">Facebook Marketinng</h2>
<p>Raqibur Rahman Roni , Samsul Alom Asif</p>
</div>
</div>
 <p className="text-xl font-bold  ml-8 md:ml-0 lg:ml-8  mb-3 md:mb-0 lg:mb-3">৳ 1250</p>

</div>
<div className="md:flex justify-center items-center lg:block w-80 md:w-auto     lg:card   xl:w-96 bg-base-100 shadow-xl mt-10 px-10">
<div className="md:flex lg:block lg:card   justify-center items-center">
<figure>
<img className=" rounded-t-xl md:w-auto"
  src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fthumbnails%2Fskills%2Ffacebook-marketing-course-thumbnail-by-ayman-sadiq-sadman-sadik-16x9.jpg&w=384&q=75"
  alt="Shoes"
/>
</figure>
<div className="card-body">
<h2 className="text-xl font-bold">Facebook Marketinng</h2>
<p>Raqibur Rahman Roni , Samsul Alom Asif</p>
</div>
</div>
 <p className="text-xl font-bold  ml-8 md:ml-0 lg:ml-8  mb-3 md:mb-0 lg:mb-3">৳ 1250</p>

</div>

<div className="md:flex justify-center items-center lg:block w-80 md:w-auto     lg:card   xl:w-96 bg-base-100 shadow-xl mt-10 px-10">
<div className="md:flex lg:block lg:card   justify-center items-center">
<figure>
<img className=" rounded-t-xl md:w-auto"
  src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fthumbnails%2Fskills%2Ffacebook-marketing-course-thumbnail-by-ayman-sadiq-sadman-sadik-16x9.jpg&w=384&q=75"
  alt="Shoes"
/>
</figure>
<div className="card-body">
<h2 className="text-xl font-bold">Facebook Marketinng</h2>
<p>Raqibur Rahman Roni , Samsul Alom Asif</p>
</div>
</div>
 <p className="text-xl font-bold  ml-8 md:ml-0 lg:ml-8  mb-3 md:mb-0 lg:mb-3">৳ 1250</p>

</div>

<div className="md:flex justify-center items-center lg:block w-80 md:w-auto     lg:card   xl:w-96 bg-base-100 shadow-xl mt-10 px-10">
<div className="md:flex lg:block lg:card   justify-center items-center">
<figure>
<img className=" rounded-t-xl md:w-auto"
  src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fthumbnails%2Fskills%2Ffacebook-marketing-course-thumbnail-by-ayman-sadiq-sadman-sadik-16x9.jpg&w=384&q=75"
  alt="Shoes"
/>
</figure>
<div className="card-body">
<h2 className="text-xl font-bold">Facebook Marketinng</h2>
<p>Raqibur Rahman Roni , Samsul Alom Asif</p>
</div>
</div>
 <p className="text-xl font-bold  ml-8 md:ml-0 lg:ml-8  mb-3 md:mb-0 lg:mb-3">৳ 1250</p>

</div>
   
   </div>


     </div>
    </div>
  );
};

export default CourseDetailsDynamic;
 