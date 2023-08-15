import { useState } from 'react';
import faqAnimation from "../../../assets/faqAnimation.json"
import Lottie from "lottie-react";
import { HiMinus, HiPlus } from 'react-icons/hi';


const faqs = [
    {
        question: 'What are the different user roles at CM Academy?',
        answer: 'Instructors: They create and teach courses on CM Academy, upload content, interact with students, and manage their courses. Students: They enrol in courses, access course materials, complete assignments, and track their progress. Admins: They have administrative privileges and manage the overall operation of the CM Academy platform.They handle tasks such as platform maintenance, user support, content moderation, and ensuring the quality of courses and user experience.'
    },
    {
        question: 'How can I create a new course on CM Academy?',
        answer: 'Sign up as an instructor at CM Academy. Prepare your course content, including lectures, quizzes, and assignments. Navigate to your CM Academy instructor dashboard. Click on "Create a Course" and choose the course format. Set a compelling course title and description. Structure your course by organizing sections and lectures. Create engaging video lectures or other content types. Add quizzes, assignments, and other interactive elements. Set pricing options for your course. Review and publish your course. Promote your course to attract students.',
    },
    {
        question: 'Can I track my progress and know my completion status for a course?',
        answer: 'CM Academy provides a progress bar at the top of the course to track your overall course completion. Each lecture within the course has completion markers to indicate which lectures you have completed. CM Academy also offers a course checklist feature that allows you to keep track of your progress and completion status.',
    },
    {
        question: 'How do I upload and manage video lessons for my course?',
        answer: 'Access your instructor dashboard on CM Academy. Go to the course management page. Choose the section where you want to add a video lesson or create a new section. Click on "Add Lecture" and select "Video." Upload your video file or link to an external source. Provide a title and description for the video lesson. Repeat the process for each video lesson.',
    },
    {
        question: 'Can I leave reviews and ratings for the courses I have taken?',
        answer: 'Yes, as a student at CM Academy, you have the ability to leave reviews and ratings for the courses you have taken.',
    },

];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='pt-12 lg:pb-1'>
            <h1 className="text-4xl font-bold mb-5 text-center text-[#12C29F]">Frequently Asked Questions</h1>
            <p className='text-center font-semibold mb-20'>
                Common questions asked by students and instructors
            </p>

            <div className='flex flex-col md:flex-row gap-5'>
                <div className='w-full mx-auto px-6'>
                    <div className="lg:min-h-screen flex justify-center items-center">
                        <div className="w-full ">

                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className=" border-b-4  border-b-[#62D4D8] p-4 rounded-md cursor-pointer
                                         hover:bg-gray-300"
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold">{faq.question}</span>
                                            <span>{activeIndex === index ?
                                                <HiMinus size={25} /> : <HiPlus size={25} />}</span>

                                        </div>
                                        {activeIndex === index && <p className="mt-2 ">{faq.answer}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-96  mx-auto lg:px-6'>
                    <Lottie animationData={faqAnimation} loop={true} />
                </div>
            </div>
        </div>
    );
}



export default FAQ;