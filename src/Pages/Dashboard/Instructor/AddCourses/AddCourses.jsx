import { useState } from 'react';
import InstructorNav from '../InstructorNav/InstructorNav';
import AddNewCourse from '../AddNewCourse/AddNewCourse';



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
                              <AddNewCourse></AddNewCourse>
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