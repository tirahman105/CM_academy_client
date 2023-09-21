import React, { useEffect, useState } from 'react';
import enrollment from '../../../../assets/enrollment.png'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { motion } from 'framer-motion';

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
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 0 }} // Initial animation state
                animate={{ opacity: 1, x: 0 }} // Animation when the component mounts
                transition={{ duration: 0.5, delay: index * 0.1 }} // Animation duration and delay
                className="max-w-full bg-gray-100 rounded-lg mobile:px-1 mobile:py-2 tablet:px-2 tablet:py-1 flex mobile:space-x-1 items-center desktop:space-x-6 tablet:space-x-6 laptop:space-x-2  mt-2"
                >
                    <img src={enrollment} alt="" className='tablet:w-20 tablet:h-20 mobile:w-10 mobile:h-10 laptop:w-14 laptop:h-14 desktop:w-20 desktop:h-20 object-cover rounded-md transition-transform duration-300 transform hover:scale-110' />
                    <div className="flex-1 min-w-[100px]">
                        <p className="text-gray-900 mobile:text-[14px] tablet:text-sm font-bold desktop:text-lg truncate">
                            {student?.studentName}
                        </p>
                        <p className="text-sm text-gray-600 truncate">
                            Email: {student?.email}
                        </p>
                        <p className="text-sm text-gray-600 truncate">
                            Contact: {student?.mobile}
                        </p>
                    </div>
                    <div className="border-2 bg-gray-800 text-white border-black  mobile:text-[12px] mobile:px-1  tablet:px-4 tablet:py-2 text-sm rounded-lg transition duration-300">
                        <p className="">{student?.totalEnrolledCourse} Courses</p>
                    </div>
                </motion.div>
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