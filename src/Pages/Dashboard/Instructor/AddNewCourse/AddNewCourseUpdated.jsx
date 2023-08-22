import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddNewCourseUpdated = () => {
    const [activeTab, setActiveTab] = useState('basicInfo');


    // Other state variables and methods...

    const switchTab = (tabName) => {
        setActiveTab(tabName);
    };

    const [newFaqQuestion, setNewFaqQuestion] = useState('');
    const [newFaqAnswer, setNewFaqAnswer] = useState('');



    const handleFaqQuestionChange = (e) => {
        setNewFaqQuestion(e.target.value);
    };

    const handleFaqAnswerChange = (e) => {
        setNewFaqAnswer(e.target.value);
    };

    const saveFaq = () => {
        if (newFaqQuestion && newFaqAnswer) {
            const newFaqItem = {
                question: newFaqQuestion,
                answer: newFaqAnswer,
            };
            setFaq([...faq, newFaqItem]);
            setNewFaqQuestion('');
            setNewFaqAnswer('');
            setAddingFaq(false);
        }
    };



    const [newMilestoneTitle, setNewMilestoneTitle] = useState('');
    const startAddingMilestone = () => {
        setNewMilestoneTitle('');
        setNewMilestoneSessions([]);
        setAddingMilestone(true);
    };




    const [others, setOthers] = useState([]);
    const [addingOthers, setAddingOthers] = useState(false);
    const [selectedOtherOption, setSelectedOtherOption] = useState(''); // Dropdown option

    const startAddingOthers = () => {
        setSelectedOtherOption('');
        setAddingOthers(true);
    };

    const saveOther = () => {
        if (selectedOtherOption) {
            setOthers([...others, { option: selectedOtherOption, value: '' }]);
            setSelectedOtherOption('');
            setAddingOthers(false);
        }
    };

    const handleOtherValueChange = (index, value) => {
        const updatedOthers = [...others];
        updatedOthers[index].value = value;
        setOthers(updatedOthers);
    };


    const [faq, setFaq] = useState([]);
    const [addingFaq, setAddingFaq] = useState(false);
    const [courseCategory, setCourseCategory] = useState('Digital Marketing'); // Default category

    const startAddingFaq = () => {
        setNewFaqQuestion('');
        setNewFaqAnswer('');
        setAddingFaq(true);
    };



    const { register, handleSubmit } = useForm();
    const [courseOutline, setCourseOutline] = useState([]);

    const onSubmit = (data) => {
        const courseSessions = newMilestoneSessions.map(session => ({
            sessionTitle: session.sessionTitle,
            description: session.description,
            videoLink: session.videoLink
        }));

        const courseMilestones = courseOutline.map(milestone => ({
            milestone: milestone.milestone,
            sessions: milestone.sessions
        }));

        const faqList = faq.map(faqItem => ({
            question: faqItem.question,
            answer: faqItem.answer
        }));

        const formData = {
            courseCategory: data.courseCategory,
            title: data.title,
            instructor: data.instructor,
            rating: parseFloat(data.rating),
            courseDescription: data.courseDescription,
            aboutInstructor: data.aboutInstructor,
            instructorImage: data.instructorImage,
            whatYouWillLearn: data.whatYouWillLearn,
            whoIsCourseFor: data.whoIsCourseFor,
            courseOutline: courseMilestones,
            faq: faqList, // Use the modified faqList array here
            doneThisCourse: parseInt(data.doneThisCourse),
            timeToFinish: data.timeToFinish,
            videoCount: parseInt(data.videoCount),
            noteCount: parseInt(data.noteCount),
            quizCount: parseInt(data.quizCount)
        };

        console.log(formData);
    };







    const [newMilestoneSessions, setNewMilestoneSessions] = useState([
        {
            sessionTitle: '',
            description: '',
            videoLink: ''
        }
    ]);

    const [addingMilestone, setAddingMilestone] = useState(false);



    const addNewSession = () => {
        if (newMilestoneSessions.length < 10) {
            setNewMilestoneSessions([...newMilestoneSessions, '']);
        }
    };


    const handleSessionChange = (index, updatedSession) => {
        const updatedSessions = [...newMilestoneSessions];
        updatedSessions[index] = updatedSession;
        setNewMilestoneSessions(updatedSessions);
    };


    const saveMilestone = () => {
        if (newMilestoneTitle && newMilestoneSessions.length > 0) {
            const newMilestone = {
                milestone: newMilestoneTitle,
                sessions: newMilestoneSessions,
            };
            setCourseOutline([...courseOutline, newMilestone]);
            setAddingMilestone(false);
        }
    };


    return (
        <div>
            <h1 className='text-5xl font-extrabold text-[#0AAE8D] text-center mb-10'>Add New Course</h1>
            <form className='w-3/5 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4 flex justify-center'>
                    <div
                        className={`cursor-pointer p-2 border ${activeTab === 'basicInfo' ? 'border-[#0AAE8D] bg-[#0AAE8D] text-white' : ''}`}
                        onClick={() => switchTab('basicInfo')}
                    >
                        Basic Info
                    </div>
                    <div
                        className={`cursor-pointer p-2 border ${activeTab === 'courseCurriculum' ? 'border-[#0AAE8D] bg-[#0AAE8D] text-white' : ''}`}
                        onClick={() => switchTab('courseCurriculum')}
                    >
                        Course Curriculum
                    </div>
                </div>

                {/* Render Basic Info form fields */}
                {activeTab === 'basicInfo' && (
                    <div>
                        <div className='form-control mb-3'>
                            <div className='form-control mb-3'>
                                <label className='label'>
                                    <span className='text-sm font-bold'>Course Category</span>
                                </label>
                                <select
                                    name='courseCategory'
                                    className='input input-bordered bg-gray-200 h-10'
                                    {...register('courseCategory')}
                                >
                                    <option value='Digital Marketing'>Digital Marketing</option>
                                    <option value='Web Development'>Web Development</option>
                                    <option value='Photography'>Photography</option>
                                    <option value='Communication Skills'>Communication Skills</option>
                                </select>
                            </div>

                            <div className='form-control mb-3'>
                                <label className='label'>
                                    <span className='text-sm font-bold'>Course Title</span>
                                </label>
                                <input
                                    type='text'
                                    name='title'
                                    placeholder='Title'
                                    className='input input-bordered bg-gray-200 h-10'
                                    {...register('title')}
                                />
                            </div>
                            <div className='form-control mb-3'>
                                <label className='label'>
                                    <span className='text-sm font-bold'>Instructor</span>
                                </label>
                                <input
                                    type='text'
                                    name='instructor'
                                    placeholder='Instructor'
                                    className='input input-bordered bg-gray-200 h-10'
                                    {...register('instructor')}
                                />
                            </div>

                            {/* Course Description */}
                            <div className='form-control mb-3'>
                                <label className='label'>
                                    <span className='text-sm font-bold'>Course Description</span>
                                </label>
                                <textarea
                                    name='courseDescription'
                                    placeholder='Course Description'
                                    className='input input-bordered bg-gray-200 h-20'
                                    {...register('courseDescription')}
                                />
                            </div>
                            {/* Who is Course For*/}
                            <div className='form-control mb-3'>
                                <label className='label'>
                                    <span className='text-sm font-bold'>Who is Course For</span>
                                </label>
                                <textarea
                                    name='whoIsCourseFor'
                                    placeholder='Who is Course For'
                                    className='input input-bordered bg-gray-200 h-20'
                                    {...register('whoIsCourseFor')}
                                />
                            </div>
                            {/* Who is Course For */}
                        </div>
                        <div className='flex justify-center mt-4'>
                            <button type='button' className='btn btn-success  mb-5' onClick={() => switchTab('courseCurriculum')}>
                                Add Curriculum
                            </button>
                        </div>
                    </div>
                )}

                {/* Render Course Curriculum form fields */}
                {activeTab === 'courseCurriculum' && (
                    <div>
                        <div className='form-control mb-3'>
                            <div className='form-control mb-3'>
                                <label className='label'>
                                    <span className='text-xl font-bold'>Course Outline</span>
                                </label>
                                <div className='space-y-4'>
                                    <div className='space-y-4'>
                                        {courseOutline.map((milestone, milestoneIndex) => (
                                            <div key={milestoneIndex}>
                                                <h4 className='font-semibold'>{milestone.milestone}</h4>
                                                <ul className='list-disc pl-6 space-y-2'>
                                                    {milestone.sessions.map((session, sessionIndex) => (
                                                        <li key={sessionIndex}>
                                                            <strong>{session.sessionTitle}</strong>
                                                            <p>{session.description}</p>
                                                            <a href={session.videoLink} target='_blank' rel='noopener noreferrer'>
                                                                Watch Video
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>

                                    {!addingMilestone && (
                                        <button
                                            type='button'
                                            className='btn btn-success mt-2'
                                            onClick={() => startAddingMilestone()}
                                        >
                                            Add Milestone
                                        </button>
                                    )}
                                    {addingMilestone && (
                                        <div>
                                            <div>
                                                <div>
                                                    <input
                                                        type='text'
                                                        className='input input-bordered bg-gray-200 h-100 m-3  ml-0 w-full'
                                                        placeholder='Milestone Title'
                                                        value={newMilestoneTitle}
                                                        onChange={(e) => setNewMilestoneTitle(e.target.value)}
                                                    />
                                                </div>
                                                <div>
                                                    {newMilestoneSessions.map((session, sessionIndex) => (
                                                        <div key={sessionIndex}>
                                                            <input
                                                                type='text'
                                                                className='input input-bordered bg-gray-200 h-100 m-3 w-full'
                                                                placeholder={`Session ${sessionIndex + 1} Title`}
                                                                value={session.sessionTitle}
                                                                onChange={(e) => handleSessionChange(sessionIndex, { ...session, sessionTitle: e.target.value })}
                                                            />
                                                            {/* Add textarea for session description */}
                                                            <textarea
                                                                className='input input-bordered bg-gray-200 h-20 m-3 w-full'
                                                                placeholder={`Session ${sessionIndex + 1} Description`}
                                                                value={session.description}
                                                                onChange={(e) => handleSessionChange(sessionIndex, { ...session, description: e.target.value })}
                                                            />
                                                            <input
                                                                type='text'
                                                                className='input input-bordered bg-gray-200 h-100 m-3 w-full'
                                                                placeholder={`Session ${sessionIndex + 1} Video Link`}
                                                                value={session.videoLink}
                                                                onChange={(e) => handleSessionChange(sessionIndex, { ...session, videoLink: e.target.value })}
                                                            />
                                                        </div>
                                                    ))}



                                                    <button type='button' className='btn btn-outline mr-3 btn-sm mt-2' onClick={addNewSession}>
                                                        Add Session
                                                    </button>
                                                </div>

                                                <div>

                                                    <Link to='/quiz'>
                                                        <button
                                                            type='button'
                                                            className='btn btn-outline mr-3 btn-sm mt-2'
                                                           
                                                        >
                                                            Add Quiz
                                                        </button>


                                                    </Link>

                                                </div>
                                            </div>
                                            <button type='button' className='btn btn-outline mr-3 btn-sm mt-2' onClick={saveMilestone}>
                                                Save Milestone
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='form-control mb-3'>
                            <div className='form-control mb-3'>
                                <label className='label'>
                                    <span className='text-xl font-bold'>FAQ</span>
                                </label>
                                <div className='space-y-4'>
                                    {faq.map((faqItem, faqIndex) => (
                                        <div key={faqIndex}>
                                            <h4 className='font-semibold'>{faqItem.question}</h4>
                                            <p>{faqItem.answer}</p>
                                        </div>
                                    ))}
                                    {!addingFaq && (
                                        <button
                                            type='button'
                                            className='btn btn-success mt-2'
                                            onClick={() => startAddingFaq()}
                                        >
                                            Add FAQ
                                        </button>
                                    )}
                                    {addingFaq && (
                                        <div>
                                            <div>
                                                <input
                                                    type='text'
                                                    className='input input-bordered bg-gray-200 h-100 m-3 ml-0'
                                                    placeholder='Question'
                                                    value={newFaqQuestion}
                                                    onChange={handleFaqQuestionChange}
                                                />
                                            </div>
                                            <div>
                                                <textarea
                                                    className='input input-bordered bg-gray-200 h-40 m-3'
                                                    placeholder='Answer'
                                                    value={newFaqAnswer}
                                                    onChange={handleFaqAnswerChange}
                                                />
                                            </div>
                                            <button type='button' className='btn btn-outline mr-3 btn-sm mt-2' onClick={saveFaq}>
                                                Save FAQ
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center '>
                            {/* <div className='flex justify-center mt-4'>
                                <button type='button' className='btn btn-success' onClick={() => switchTab('basicInfo')}>
                                    Back to Basic Info
                                </button>
                            </div> */}
                            <div className='flex justify-center'>
                                <button type='submit' className='btn btn-success mt-4 mb-5'>
                                    Add Your Course
                                </button>
                            </div>
                        </div>
                    </div>

                )}


            </form>
        </div>
    );
};

export default AddNewCourseUpdated;
