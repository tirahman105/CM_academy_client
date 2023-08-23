
import { useState } from 'react';
import { useForm } from 'react-hook-form';
const NewCourse = () => {


    const [newQuizQuestion, setNewQuizQuestion] = useState('');
    const [quizOptions, setQuizOptions] = useState([]);
    const [newQuizCorrectOption, setNewQuizCorrectOption] = useState(0);
    const [newQuizExplanation, setNewQuizExplanation] = useState('');
    const [addingQuiz, setAddingQuiz] = useState(false);
    const [quizzes, setQuizzes] = useState([]); // New state variable for holding multiple quizze
    const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState(-1);
    const [milestoneQuizzes, setMilestoneQuizzes] = useState([]);
    const addQuizOption = () => {
        setQuizOptions([...quizOptions, '']);
    };

    const removeQuizOption = (index) => {
        const updatedOptions = [...quizOptions];
        updatedOptions.splice(index, 1);
        setQuizOptions(updatedOptions);
    };

    const addNewQuiz = () => {
        if (newQuizQuestion && quizOptions.length >= 2 && newQuizCorrectOption >= 0 && newQuizCorrectOption < quizOptions.length && newQuizExplanation) {
            const newQuiz = {
                question: newQuizQuestion,
                options: quizOptions,
                correctOption: newQuizCorrectOption,
                explanation: newQuizExplanation
            };

            // Clone the array for the selected milestone and add the new quiz
            const updatedMilestoneQuizzes = [...milestoneQuizzes];

            // Initialize the milestone's quiz array if it's undefined
            if (!updatedMilestoneQuizzes[selectedMilestoneIndex]) {
                updatedMilestoneQuizzes[selectedMilestoneIndex] = [];
            }

            updatedMilestoneQuizzes[selectedMilestoneIndex].push(newQuiz);

            // Update the milestoneQuizzes state
            setMilestoneQuizzes(updatedMilestoneQuizzes);

            // Clear the input fields
            setNewQuizQuestion('');
            setQuizOptions([]);
            setNewQuizCorrectOption(0);
            setNewQuizExplanation('');
            setAddingQuiz(false);
        }
    }

    // Function to add more quizzes
    const addMoreQuiz = () => {
        setAddingQuiz(true);
        setNewQuizQuestion('');
        setQuizOptions([]);
        setNewQuizCorrectOption(0);
        setNewQuizExplanation('');
    };




    const handleQuizOptionChange = (index, value) => {
        const updatedOptions = [...quizOptions];
        updatedOptions[index] = value;
        setQuizOptions(updatedOptions);
    };


    const [courseThumbnail, setCourseThumbnail] = useState('');
    const [courseIntroVideo, setCourseIntroVideo] = useState('');

    const [activeTab, setActiveTab] = useState('basicInfo');
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

    const [faq, setFaq] = useState([]);
    const [addingFaq, setAddingFaq] = useState(false);
    const startAddingFaq = () => {
        setNewFaqQuestion('');
        setNewFaqAnswer('');
        setAddingFaq(true);
    };
    const { register, handleSubmit } = useForm();
    const [courseOutline, setCourseOutline] = useState([]);
    const [courseRequirements, setCourseRequirements] = useState([]);

    const onSubmit = (data) => {
        const courseMilestones = courseOutline.map(milestone => ({
            milestone: milestone.milestone,
            sessions: milestone.sessions,
            quizzes: milestoneQuizzes[courseOutline.indexOf(milestone)] || [], // Include the quizzes data for each milestone
        }));

        const faqList = faq.map(faqItem => ({
            question: faqItem.question,
            answer: faqItem.answer
        }));

        const formData = {
            courseCategory: data.courseCategory,
            title: data.title,
            instructor: data.instructor,
            courseDescription: data.courseDescription,
            whatYouWillLearn: data.whatYouWillLearn,
            whoIsCourseFor: data.whoIsCourseFor,
            courseOutline: courseMilestones,
            faq: faqList,
            coursePrice: parseInt(data.coursePrice),
            courseRequirements: courseRequirements,
            courseThumbnail: courseThumbnail,
            courseIntroVideo: courseIntroVideo,
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
                <div className='mb-4 flex justify-center rounded-md'>
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
                    <div
                        className={`cursor-pointer p-2 border ${activeTab === 'quiz' ? 'border-[#0AAE8D] bg-[#0AAE8D] text-white' : ''}`}
                        onClick={() => switchTab('quiz')}
                    >
                        Quiz
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

                            {/* Course Thumbnail */}
                            <div className='form-control mb-3'>
                                <label className='label'>
                                    <span className='text-sm font-bold'>Course Thumbnail</span>
                                </label>
                                <input
                                    type='text'
                                    name='courseThumbnail'
                                    placeholder='Course Thumbnail Link'
                                    className='input input-bordered bg-gray-200 h-10'
                                    value={courseThumbnail}
                                    onChange={(e) => setCourseThumbnail(e.target.value)}
                                />
                            </div>


                            {/* course intro video */}
                            <div className='form-control mb-3'>
                                <label className='label'>
                                    <span className='text-sm font-bold'>Course Intro Video</span>
                                </label>
                                <input
                                    type='text'
                                    name='courseIntroVideo'
                                    placeholder='Course Intro Video Link'
                                    className='input input-bordered bg-gray-200 h-10'
                                    value={courseIntroVideo}
                                    onChange={(e) => setCourseIntroVideo(e.target.value)}
                                />
                            </div>

                            <div className='form-control mb-3'>
                                <label className='label'>
                                    <span className='text-sm font-bold'>Course Price</span>
                                </label>
                                <input
                                    type='number'
                                    name='coursePrice'
                                    placeholder='Course Price'
                                    className='input input-bordered bg-gray-200 h-20'
                                    {...register('coursePrice')}

                                />
                            </div>

                            {/* Course Requirements */}
                            <div className='form-control mb-3'>
                                <label className='label'>
                                    <span className='text-sm font-bold'>Course Requirements</span>
                                </label>
                                <input
                                    type='text'
                                    name='courseRequirements'
                                    placeholder='Course Requirements (comma-separated)'
                                    className='input input-bordered bg-gray-200 h-10'
                                    value={courseRequirements.join(', ')} // Convert array to comma-separated string
                                    onChange={(e) => setCourseRequirements(e.target.value.split(',').map(item => item.trim()))} // Convert input to array
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
                            {/* faq section */}

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

                        </div>
                        <div className='flex justify-center mt-4'>
                            <button type='button' className='btn btn-success  mb-5' onClick={() => switchTab('courseCurriculum')}>
                                Next
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
                                            className='btn btn-outline mr-3 btn-sm mt-2'
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

                                            </div>
                                            <></>
                                            <button type='button' className='btn btn-outline mr-3 btn-sm mt-2' onClick={saveMilestone}>
                                                Save Milestone
                                            </button>


                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center '>
                            <div className='flex justify-center mt-4'>
                                <button type='button' className='btn btn-success  mb-5' onClick={() => switchTab('quiz')}>
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>

                )}

                {activeTab === 'quiz' && (
                    <div>
                        <select
                            className="input input-bordered bg-gray-200 h-10"
                            value={selectedMilestoneIndex}
                            onChange={(e) => setSelectedMilestoneIndex(parseInt(e.target.value))}
                        >
                            <option value={-1}>Select a Milestone</option>
                            {courseOutline.map((milestone, index) => (
                                <option key={index} value={index}>
                                    {milestone.milestone}
                                </option>
                            ))}
                        </select>

                        {/* Render quizzes based on the selected milestone */}
                        {selectedMilestoneIndex >= 0 && milestoneQuizzes[selectedMilestoneIndex] && (
                            <div>
                                <h2 className="text-lg font-semibold mb-2">{`Quizzes for ${courseOutline[selectedMilestoneIndex].milestone}`}</h2>
                                {milestoneQuizzes[selectedMilestoneIndex].map((quiz, index) => (
                                    <div key={index} className="border p-4 mb-4 rounded-lg shadow-md">
                                        <h4 className="text-sm font-bold mb-2">{`Question ${index + 1}: ${quiz.question}`}</h4>
                                        <ul className="text-sm list-disc pl-6 mb-2">
                                            {quiz.options.map((option, optionIndex) => (
                                                <li key={optionIndex} className="mb-1">{option}</li>
                                            ))}
                                        </ul>
                                        <p className="text-sm text-green-700">Correct Option: {quiz.options[quiz.correctOption]}</p>
                                        <p className="text-sm text-green-900">Explanation: {quiz.explanation}</p>
                                    </div>
                                ))}
                            </div>
                        )}


                        <button
                            type='button'
                            className='btn btn-outline mr-3 btn-sm mt-2 m-3'
                            onClick={() => setAddingQuiz(true)}
                        >
                            Add Quiz
                        </button>

                        {addingQuiz && (
                            <div>
                                <input
                                    type='text'
                                    className='input input-bordered bg-gray-200 h-100 m-3 ml-0 w-full'
                                    placeholder='Question'
                                    value={newQuizQuestion}
                                    onChange={(e) => setNewQuizQuestion(e.target.value)}
                                />

                                {/* Render dynamic input fields for options */}
                                {quizOptions.map((option, index) => (
                                    <div key={index}>
                                        <input
                                            type='text'
                                            className='input input-bordered bg-gray-200 h-100 m-3 w-full'
                                            placeholder={`Option ${index + 1}`}
                                            value={option}
                                            onChange={(e) => handleQuizOptionChange(index, e.target.value)}
                                        />
                                        <button
                                            type='button'
                                            className='btn btn-danger btn-sm mt-2'
                                            onClick={() => removeQuizOption(index)}
                                        >
                                            Remove Option
                                        </button>
                                    </div>
                                ))}


                                <button type='button' className='btn btn-outline mr-3 btn-sm mt-2' onClick={addQuizOption}>
                                    Add Option
                                </button>

                                <div>
                                    <label className='label'>
                                        <span className='text-sm font-bold'>Correct Option</span>
                                    </label>
                                    <select
                                        className='input input-bordered bg-gray-200 h-10'
                                        value={newQuizCorrectOption}
                                        onChange={(e) => setNewQuizCorrectOption(parseInt(e.target.value))}
                                    >
                                        {quizOptions.map((_, index) => (
                                            <option key={index} value={index}>{`Option ${index + 1}`}</option>
                                        ))}
                                    </select>
                                </div>

                                <textarea
                                    className='input input-bordered bg-gray-200 h-20 m-3 w-full'
                                    placeholder='Explanation'
                                    value={newQuizExplanation}
                                    onChange={(e) => setNewQuizExplanation(e.target.value)}
                                />

                                <button type='button' className='btn btn-outline mr-3 btn-sm mt-2' onClick={addNewQuiz}>
                                    Save Quiz
                                </button>


                                {/* Add More Quiz Button */}
                                <button type='button' className='btn btn-outline mr-3 btn-sm mt-2' onClick={addMoreQuiz}>
                                    Add More Quiz
                                </button>
                            </div>
                        )}


                        <div>
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

export default NewCourse;