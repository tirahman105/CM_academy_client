import React from 'react';
import { AiFillFire, AiOutlineDown } from 'react-icons/ai';
import hello from '../../../../../assets/hello.png'
import { MdNotificationsActive } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import StudentDashboradCourses from './StudentDashboradCourses';
import { useContext } from 'react';
import YourStatistics from './YourStatistics';
import { AuthContext } from '../../../../../providers/AuthProvider';
import CourseProgress from './CourseProgress';
import { useEffect } from 'react';
import { useState } from 'react';

const NewStudentDashboard = () => {

    const [courses, setCourses] = useState([]);
    const { user } = useContext(AuthContext)
    console.log(user);


    useEffect(() => {
        // Fetch data from the API
        fetch('https://cm-academy-test-server-production.up.railway.app/categories')
            .then((response) => response.json())
            .then((data) => {
                // Assuming the API response contains an array of courses
                setCourses(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto p-8">
            {/* Box 1 */}
            <div className="p-6 rounded-lg w-full bg-white">


                <div className="mb-4 rounded-md bg-gray-100 h-40 flex justify-around items-center">
                    <div className='p-8 space-y-1'>
                        <h1 className="text-4xl font-extrabold font-Jost tracking-wider">Hello {user?.fullName}</h1>
                        <p className='text-base font-normal'>It’s good to see you again.</p>
                    </div>

                    <div className='-mt-9'>
                        <img src={hello} alt="" />
                    </div>

                </div>


                <CourseProgress courses={courses}></CourseProgress>


                <StudentDashboradCourses courses={courses}></StudentDashboradCourses>








            </div>

            {/* Box 2 */}
            <div className="p-6 rounded-lg">

                <div className="flex items-center gap-6 justify-start mb-4">
                    <div className="relative flex items-center flex-grow rounded-md text-lg bg-gray-100">
                        <span className="flex items-center pl-4">
                            <FaSearch size={24} className="text-gray-700" />
                        </span>
                        <input
                            type="text"
                            placeholder=""
                            className="w-full focus:outline-none bg-gray-100 p-2"
                        />
                    </div>
                    <div className='flex items-center'>
                        <MdNotificationsActive className='text-4xl mr-4' />
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-12 rounded-full flex">
                                    <img src="https://lh3.googleusercontent.com/a/AAcHTtcXMGB_cSc1A4bwNwmNa2L6F2k4AxXheecQNt8kry_PtrQ=s96-c" />
                                </div>

                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                        <AiOutlineDown className='text-base' />
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-4 mt-6'>
                    <div className='bg-gray-100 p-4 text-center rounded-lg flex items-center justify-center gap-4'>

                        <p className='text-6xl font-extrabold'>
                            10
                        </p>
                        <p className='text-lg font-normal'>
                            Courses Completed
                        </p>
                    </div>

                    <div className='bg-gray-100 p-4 text-center rounded-lg flex items-center justify-center gap-4'>

                        <p className='text-6xl font-extrabold'>
                            5
                        </p>
                        <p className='text-lg font-normal'>
                            Courses in Progress
                        </p>
                    </div>

                </div>
                <YourStatistics></YourStatistics>

            </div>
        </div>
    );
};

export default NewStudentDashboard;
