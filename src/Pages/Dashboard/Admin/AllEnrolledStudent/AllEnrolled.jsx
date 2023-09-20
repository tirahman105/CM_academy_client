import React, { useEffect, useState } from 'react';
import enrollment from '../../../../assets/enrollment.png'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const AllEnrolled = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch('https://cm-academy-test-server-production.up.railway.app/orders/studentEmail')
            .then((res) => res.json())
            .then((result) => {
                setStudents(result);
            });
    }, []);

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const studentsToDisplay = students.slice(startIndex, endIndex);

    const totalPages = Math.ceil(students.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            {studentsToDisplay.map((student, index) => (
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


            <div className="mt-4 flex justify-center">
            <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 tablet:px-3 tablet:py-1 bg-gray-200 rounded-md"
        >
            <GrFormPrevious></GrFormPrevious>
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
            <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-1 px-3 py-1 text-sm ${
                    currentPage === index + 1
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-200'
                } rounded-md`}
            >
                {index + 1}
            </button>
        ))}
                <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="ml-2 tablet:px-3 tablet:py-1 bg-gray-200 rounded-md"
            >
                <p className="text-green-600">
                    <GrFormNext />
                </p>
            </button>
            </div>
        </div>
    );
};

export default AllEnrolled;