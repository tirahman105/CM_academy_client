import React, { useState } from 'react';
import { AiFillFire } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';

const StudentDashboradCourses = ({courses}) => {
    const [selectedCategory, setSelectedCategory] = useState('All Courses');

    
    // Function to filter courses based on the selected category
    const filteredCourses = courses.filter((course) => {
        if (selectedCategory === 'All Courses') {
            return true; // Show all courses
        } else if (selectedCategory === 'Newest') {
            return course.isNewest === true;
        } else if (selectedCategory === 'Top Rated') {
            return true;
        } else if (selectedCategory === 'Most Popular') {
            return course.isPopular === true;
        }
        return false;
    });

    return (
        <div>
            <h1 className='text-2xl text-left font-bold mt-20'>Courses</h1>
            <div className='flex justify-start gap-4 text-lg items-center mb-2 mt-4 font-bold font-Jost'>
                <h1
                    onClick={() => setSelectedCategory('All Courses')}
                    className={`cursor-pointer ${selectedCategory === 'All Courses' ? 'border border-gray-600 px-2 py-1 rounded-lg bg-black text-white duration-300 transition-all' : 'text-black'}`}
                >
                    All Courses
                </h1>
                <h1
                    onClick={() => setSelectedCategory('Newest')}
                    className={`cursor-pointer ${selectedCategory === 'Newest' ? 'border border-gray-600 px-2 py-1 rounded-lg bg-black text-white duration-300 transition-all' : 'text-black'}`}
                >
                    Newest
                </h1>
                <h1
                    onClick={() => setSelectedCategory('Top Rated')}
                    className={`cursor-pointer ${selectedCategory === 'Top Rated' ? 'border border-gray-600 px-2 py-1 rounded-lg bg-black text-white duration-300 transition-all' : 'text-black'}`}
                >
                    Top Rated
                </h1>
                <h1
                    onClick={() => setSelectedCategory('Most Popular')}
                    className={`cursor-pointer ${selectedCategory === 'Most Popular' ? 'border border-gray-600 px-2 py-1 rounded-lg bg-black text-white duration-300 transition-all' : 'text-black'}`}
                >
                    Most Popular
                </h1>
            </div>

            {filteredCourses.map((course) => (
                <div
                    key={course._id}
                    className="max-w-full bg-gray-100 rounded-lg p-4 flex items-center space-x-4 mt-2"
                >
                    <img
                        src={course.courseThumbnail}
                        alt={course.title}
                        className="w-20 h-20 object-cover rounded-md transition-transform duration-300 transform hover:scale-110"
                    />
                    <div style={{ flex: '1' }}>
                        <p className="text-gray-900 font-bold text-lg">
                            {course.title}
                        </p>
                        <p className="text-sm text-gray-600">
                            by {course.instructor}
                        </p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BiTimeFive />{' '}
                        <p className="text-gray-600 text-sm">6h 30min</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <AiFillFire />
                        <p className="text-gray-600 text-sm">4.9</p>
                    </div>
                    <button className="border-2 hover:bg-black hover:text-white border-black text-black text-base px-4 py-2 rounded-lg transition duration-300">
                        View Course
                    </button>
                </div>
            ))}
        </div>
    );
};

export default StudentDashboradCourses;
