import { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddNewCourse = () => {
    const { register, handleSubmit } = useForm();
    const [courseOutline, setCourseOutline] = useState([]);

    const onSubmit = (data) => {
        const formData = {
            title: data.title,
            instructor: data.instructor,
            rating: parseFloat(data.rating),
            courseDescription: data.courseDescription,
            aboutInstructor: data.aboutInstructor,
            instructorImage: data.instructorImage,
            whatYouWillLearn: data.whatYouWillLearn,
            courseOutline,
            faq: {
                aboutCourse: data.aboutCourse,
                whoIsCourseFor: data.whoIsCourseFor,
                courseDifference: data.courseDifference
            },
            doneThisCourse: parseInt(data.doneThisCourse),
            timeToFinish: data.timeToFinish,
            videoCount: parseInt(data.videoCount),
            noteCount: parseInt(data.noteCount),
            quizCount: parseInt(data.quizCount)
        };

        console.log(formData);
    };

    const [newMilestoneTitle, setNewMilestoneTitle] = useState('');
    const [newMilestoneSessions, setNewMilestoneSessions] = useState([]);
    const [addingMilestone, setAddingMilestone] = useState(false);

    const startAddingMilestone = () => {
        setNewMilestoneTitle('');
        setNewMilestoneSessions([]);
        setAddingMilestone(true);
    };

    const addNewSession = () => {
        if (newMilestoneSessions.length < 10) {
            setNewMilestoneSessions([...newMilestoneSessions, '']);
        }
    };

    const handleSessionChange = (index, sessionText) => {
        const updatedSessions = [...newMilestoneSessions];
        updatedSessions[index] = sessionText;
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

                {/* Course Rating */}
                <div className='form-control mb-3'>
                    <label className='label'>
                        <span className='text-sm font-bold'>Course Rating</span>
                    </label>
                    <input
                        type='number'
                        name='rating'
                        step='0.1'
                        placeholder='Rating'
                        className='input input-bordered bg-gray-200 h-10'
                        {...register('rating')}
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

                {/* About Instructor */}
                <div className='form-control mb-3'>
                    <label className='label'>
                        <span className='text-sm font-bold'>About Instructor</span>
                    </label>
                    <textarea
                        name='aboutInstructor'
                        placeholder='About Instructor'
                        className='input input-bordered bg-gray-200 h-20'
                        {...register('aboutInstructor')}
                    />
                </div>

                {/* Course Outline */}
                <div className='form-control mb-3'>
                    <label className='label'>
                        <span className='text-sm font-bold'>Course Outline</span>
                    </label>
                    <div className='space-y-4'>
                        {courseOutline.map((milestone, milestoneIndex) => (
                            <div key={milestoneIndex}>
                                <h4 className='font-semibold'>{milestone.milestone}</h4>
                                <ul className='list-disc pl-6 space-y-2'>
                                    {milestone.sessions.map((session, sessionIndex) => (
                                        <li key={sessionIndex}>{session}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        {!addingMilestone && (
                            <button
                                type='button'
                                className='btn btn-primary mt-2'
                                onClick={() => startAddingMilestone()}
                            >
                                Add Milestone
                            </button>
                        )}
                        {addingMilestone && (
                            <div>
                                <input
                                    type='text'
                                    className='input input-bordered bg-gray-200 h-10'
                                    placeholder='Milestone Title'
                                    value={newMilestoneTitle}
                                    onChange={(e) => setNewMilestoneTitle(e.target.value)}
                                />
                                {newMilestoneSessions.map((session, sessionIndex) => (
                                    <input
                                        key={sessionIndex}
                                        type='text'
                                        className='input input-bordered bg-gray-200 h-10'
                                        placeholder={`Session ${sessionIndex + 1}`}
                                        value={session}
                                        onChange={(e) => handleSessionChange(sessionIndex, e.target.value)}
                                    />
                                ))}
                                <button type='button' className='btn btn-primary btn-sm mt-2' onClick={addNewSession}>
                                    Add Session
                                </button>
                                <button type='button' className='btn btn-success mt-2' onClick={saveMilestone}>
                                    Save Milestone
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className='flex justify-center'>
                    <button type='submit' className='btn btn-success mt-4'>
                        Add Your Course
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddNewCourse;
