
import { useState } from 'react';
import { useForm } from 'react-hook-form';
const FTest = () => {
    const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState(-1);
    const [newQuizQuestion, setNewQuizQuestion] = useState('');
    const [quizOptions, setQuizOptions] = useState([]);
    const [newQuizCorrectOption, setNewQuizCorrectOption] = useState(0);
    const [newQuizExplanation, setNewQuizExplanation] = useState('');
    const [addingQuiz, setAddingQuiz] = useState(false);
    const addQuizOption = () => {
        setQuizOptions([...quizOptions, '']);
    };
    const removeQuizOption = (index) => {
        const updatedOptions = [...quizOptions];
        updatedOptions.splice(index, 1);
        setQuizOptions(updatedOptions);
    };
    const [quizzes, setQuizzes] = useState([]);
    const addNewQuiz = () => {
        if (selectedMilestoneIndex !== -1 && newQuizQuestion && quizOptions.length >= 2 && newQuizCorrectOption >= 0 && newQuizCorrectOption < quizOptions.length && newQuizExplanation) {
            const newQuiz = {
                question: newQuizQuestion,
                options: quizOptions,
                correctOption: newQuizCorrectOption,
                explanation: newQuizExplanation
            };
            const updatedCourseOutline = [...courseOutline];
            updatedCourseOutline[selectedMilestoneIndex].quiz = newQuiz; // Add the new quiz to the selected milestone
            setCourseOutline(updatedCourseOutline); // Update the state with the new course outline
            setNewQuizQuestion('');
            setQuizOptions([]);
            setNewQuizCorrectOption(0);
            setNewQuizExplanation('');
            setAddingQuiz(false);
            setSelectedMilestoneIndex(-1); // Reset selected milestone
        }
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
    const [whatYouWillLearn, setWhatYouWillLearn] = useState([]);
    const onSubmit = (data) => {

        const courseMilestones = courseOutline.map(milestone => ({
            milestone: milestone.milestone,
            sessions: milestone.sessions,
            quiz: milestone.quiz // Include the quiz data for each milestone
        }));
        const faqList = faq.map(faqItem => ({
            question: faqItem.question,
            answer: faqItem.answer
        }));
        const formData = {
            courseCategory: data.courseCategory,
            title: data.title,
            courseDescription: data.courseDescription,
            whoIsCourseFor: data.whoIsCourseFor,
            courseOutline: courseMilestones,
            faq: faqList,
            coursePrice: parseInt(data.coursePrice),
            courseRequirements: courseRequirements,
            whatYouWillLearn: whatYouWillLearn,
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
                <div className='mb-4 flex justify-center rounded-md space-x-2'>
                    <div
                        className={`cursor-pointer p-2 border ${activeTab === 'basicInfo' ? 'border-[#0AAE8D] bg-[#0AAE8D] text-white' : 'hover:bg-[#0AAE8D] hover:text-white'} `}
                        onClick={() => switchTab('basicInfo')}
                    >
                        Basic Info
                    </div>
                    <div
                        className={`cursor-pointer p-2 border ${activeTab === 'courseCurriculum' ? 'border-[#0AAE8D] bg-[#0AAE8D] text-white' : 'hover:bg-[#0AAE8D] hover:text-white'} `}
                        onClick={() => switchTab('courseCurriculum')}
                    >
                        Course Curriculum
                    </div>
                    <div
                        className={`cursor-pointer p-2 border ${activeTab === 'quiz' ? 'border-[#0AAE8D] bg-[#0AAE8D] text-white' : 'hover:bg-[#0AAE8D] hover:text-white'} `}
                        onClick={() => switchTab('quiz')}
                    >
                        Quiz
                    </div>
                </div>

                {/* ... Rest of your form sections */}
            </form>
        </div>
    );

};

export default FTest;