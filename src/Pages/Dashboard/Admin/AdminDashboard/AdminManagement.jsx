import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import UpdatedWithdrawRequest from '../WithdarwRequest/UpdatedWithdrawRequest';
import ManageCourse from './ManageCourse';
import AllEnrolled from '../AllEnrolledStudent/AllEnrolled';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const AdminManagement = ({ courses, setCourses }) => {
    const [selectedCategory, setSelectedCategory] = useState('Manage Course');
    const [courseActions, setCourseActions] = useState({});
    const [showWithdrawRequest, setShowWithdrawRequest] = useState(false);

     // Define pagination state
     const [currentPage, setCurrentPage] = useState(1);
     const coursesPerPage = 10; // Number of courses to display per page
 
     // Calculate the index range for the current page
     const indexOfLastCourse = currentPage * coursesPerPage;
     const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
     const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);
 
     // Calculate the total number of pages
     const totalPages = Math.ceil(courses.length / coursesPerPage);
 
     // Function to change the current page
     const handlePageChange = (pageNumber) => {
         setCurrentPage(pageNumber);
     };

   
    const updateCourseStatus = async (courseId, newStatus) => {
        try {
            const response = await fetch(
                `https://cm-academy-test-server-production.up.railway.app/categories/${courseId}/approval`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ApprovedStatus: newStatus,
                    }),
                }
            );

            if (response.ok) {
                const updatedCourses = courses.map((course) =>
                    course._id === courseId
                        ? { ...course, ApprovedStatus: newStatus }
                        : course
                );
                console.log(updatedCourses);
                setCourses(updatedCourses);
            } else {
                console.error(`Failed to update course ${newStatus} status`);
            }
        } catch (error) {
            console.error(`Error updating course ${newStatus} status:`, error);
        }
    };

    const handleActionChange = (courseId, action) => {
        setCourseActions({ ...courseActions, [courseId]: action });
    };

    const handlePerformAction = async (courseId) => {
        const selectedAction = courseActions[courseId];

        if (selectedAction === 'Approved' || selectedAction === 'Denied') {
            try {
                await updateCourseStatus(courseId, selectedAction);

                // Update the courseActions to reset the selected action for this course
                setCourseActions({ ...courseActions, [courseId]: '' });
            } catch (error) {
                console.error('Error performing action:', error);
            }
        } else if (selectedAction === 'delete') {
            // Show a confirmation dialog before deleting the course
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
            }).then(async (result) => {
                if (result.isConfirmed) {
                    // If the user confirms, send a DELETE request to delete the course
                    try {
                        const response = await fetch(
                            `https://cm-academy-test-server-production.up.railway.app/categories/${courseId}`,
                            {
                                method: 'DELETE',
                            }
                        );

                        if (response.ok) {
                            // If the delete request is successful, update the courses state
                            const remainingCourses = courses.filter(
                                (course) => course._id !== courseId
                            );
                            setCourses(remainingCourses);
                            Swal.fire(
                                'Deleted!',
                                'Your Course has been deleted.',
                                'success'
                            );
                        } else {
                            // Handle errors if the delete request fails
                            console.error('Error deleting course:', response.statusText);
                            Swal.fire(
                                'Error',
                                'An error occurred while deleting the course.',
                                'error'
                            );
                        }
                    } catch (error) {
                        console.error('Error deleting course:', error);
                        Swal.fire(
                            'Error',
                            'An error occurred while deleting the course.',
                            'error'
                        );
                    }
                }
            });
        }
    };


    return (
        <div>
            <h1 className='text-2xl text-left font-bold mt-20'>Courses</h1>
            <div className='flex justify-start gap-4 text-lg items-center mb-2 mt-4 font-bold font-Jost'>
                <h1
                    onClick={() => {
                        setSelectedCategory('Manage Course');
                        setShowWithdrawRequest(false);
                    }}
                    className={`cursor-pointer ${selectedCategory === 'Manage Course'
                        ? 'border border-gray-600 px-2 py-1 rounded-lg bg-gray-700 text-white duration-300 transition-all'
                        : 'text-black'
                    }`}
                >
                    Manage Course
                </h1>
                <h1
                    onClick={() => {
                        setSelectedCategory('Withdraw Requests');
                        setShowWithdrawRequest(true);
                    }}
                    className={`cursor-pointer ${selectedCategory === 'Withdraw Requests'
                        ? 'border border-gray-600 px-2 py-1 rounded-lg bg-gray-700 text-white duration-300 transition-all'
                        : 'text-black'
                    }`}
                >
                    Withdraw Requests
                </h1>
                <h1
                    onClick={() => {
                        setSelectedCategory('Enrolled Students');
                        setShowWithdrawRequest(false);
                    }}
                    className={`cursor-pointer ${selectedCategory === 'Enrolled Students'
                        ? 'border border-gray-600 px-2 py-1 rounded-lg bg-gray-700 text-white duration-300 transition-all'
                        : 'text-black'
                    }`}
                >
                    Enrolled Students
                </h1>
            </div>

            {selectedCategory === 'Manage Course' && (
                <ManageCourse
                courses={currentCourses}
                    courseActions={courseActions}
                    handleActionChange={handleActionChange}
                    handlePerformAction={handlePerformAction}
                />
            )}

            {selectedCategory === 'Withdraw Requests' && showWithdrawRequest && (
                <UpdatedWithdrawRequest />
            )}

            {selectedCategory === 'Enrolled Students' && (
                <AllEnrolled></AllEnrolled>
            )}

              {/* Pagination controls */}
              {/* <div className="mt-4 flex justify-center">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-1 px-3 py-1 ${
                            currentPage === index + 1
                                ? 'bg-gray-700 text-white'
                                : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                        } rounded-md`}
                    >
                        {index + 1}
                    </button>
                ))}
                </div> */}
                  {/* Pagination controls */}
      <div className="flex justify-center mt-4 mb-4">
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
                ? "bg-green-600 text-white"
                : "bg-gray-200"
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

export default AdminManagement;
