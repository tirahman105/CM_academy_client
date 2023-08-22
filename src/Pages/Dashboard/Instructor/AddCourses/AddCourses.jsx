import { useState } from 'react';
import InstructorNav from '../InstructorNav/InstructorNav';
import AddNewCourse from '../AddNewCourse/AddNewCourse';
import AddNewCourseUpdated from '../AddNewCourse/AddNewCourseUpdated';
import AddNewCourseUpdated2 from '../AddNewCourse/AddNewCourseUpdated2';
import AddRNewCourse from '../AddNewCourse/AddRNewCourse';




const AddCourses = () => {
    const [showAddCourse, setShowAddCourse] = useState(false);

    const handleButtonClick = () => {
        setShowAddCourse(true);
    };

    return (
        <div>
            <InstructorNav></InstructorNav>
            <div className='flex '>
                <div className='w-1/6 bg-slate-300'>
                </div>

                <div className='w-5/6'>
                    <div className="mt-20">

                        {showAddCourse ? (
                            <div>
                          <AddNewCourseUpdated2></AddNewCourseUpdated2>
                            </div>
                        ) : (
                            <div className='flex justify-center'>
                                <button
                                    className="btn border-0 text-white bg-[#0AAE8D]
                         hover:bg-white hover:text-[#0AAE8D]
                          hover:animate-pulse"
                                    onClick={handleButtonClick}
                                >

                                    Add New Course
                                </button>
                            </div>
                        )}

                    </div>
                </div>

            </div>

        </div>
    );
};

export default AddCourses;