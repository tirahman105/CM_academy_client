import { useState } from 'react';
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
            <div className='flex '>
                <div >
                </div>

                <div className='w-5/6'>
                    <div className="mt-20">
                    <AddNewCourseUpdated2></AddNewCourseUpdated2>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default AddCourses;