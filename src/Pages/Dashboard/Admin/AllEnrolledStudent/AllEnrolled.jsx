import React, { useEffect, useState } from 'react';
import enrollment from '../../../../assets/enrollment.png'

const AllEnrolled = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch('https://cm-academy-test-server-production.up.railway.app/orders/studentEmail')
            .then((res) => res.json())
            .then((result) => {
                setStudents(result);
            });
    }, []);

    return (
        <div>
            {students.map((student, index) => (
                <div
                    key={index}
                    className="max-w-full bg-gray-100 rounded-lg p-4 flex items-center space-x-4 mt-2"
                >
                    <img src={enrollment} alt="" className='w-20 h-20 object-cover rounded-md transition-transform duration-300 transform hover:scale-110' />
                    <div className="flex-1">
                        <p className="text-gray-900 font-bold text-lg">
                            {student?.studentName}
                        </p>
                        <p className="text-sm text-gray-600">
                            Email: {student?.email}
                        </p>
                        <p className="text-sm text-gray-600">
                            Contact: {student?.mobile}
                        </p>
                    </div>
                    <div className="border-2 bg-black text-white border-black text-base px-4 py-2 rounded-lg">
                        <p className="">{student?.totalEnrolledCourse} Courses</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllEnrolled;