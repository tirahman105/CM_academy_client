import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import UpdatedWithdrawRequest from '../WithdarwRequest/UpdatedWithdrawRequest';
import ManageCourse from './ManageCourse';
import AllEnrolled from '../AllEnrolledStudent/AllEnrolled';

const AdminManagement = ({ courses, setCourses }) => {
    const [selectedCategory, setSelectedCategory] = useState('Manage Course');
    const [courseActions, setCourseActions] = useState({});
    const [showWithdrawRequest, setShowWithdrawRequest] = useState(false);

    const getCurrentCourses = () => {
        return courses;
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
                setCourseActions({ ...courseActions, [courseId]: '' });
            } catch (error) {
                console.error('Error performing action:', error);
            }
        } else if (selectedAction === 'delete') {
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
                    try {
                        const response = await fetch(
                            `https://cm-academy-test-server-production.up.railway.app/categories/${courseId}`,
                            {
                                method: 'DELETE',
                            }
                        );

                        console.log(response);

                        if (response.ok) {
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
                setCourseActions({ ...courseActions, [courseId]: '' });
               

            });
        }
    };

    return (
        <div className=''>
            <h1 className='text-2xl text-left font-bold mt-10 font-LeagueSpartan '>Courses</h1>
            <div className='flex justify-start gap-4 text-lg items-center mb-2 mt-4 font-bold font-Jost laptop:text-sm'>
                <h1
                    onClick={() => {
                        setSelectedCategory('Manage Course');
                        setShowWithdrawRequest(false);
                    }}
                    className={`cursor-pointer mobile:text-[11px]   mobile:font-Lexend ${selectedCategory === 'Manage Course'
                        ? 'border border-gray-600 px-2 mobile:py-0 mobile:px-1 py-1 rounded-lg bg-gray-700 text-white duration-300 transition-all'
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
                    className={`cursor-pointer mobile:text-[11px] mobile:font-Lexend ${selectedCategory === 'Withdraw Requests'
                        ? 'border border-gray-600 px-2 mobile:py-0 mobile:px-1 py-1 rounded-lg bg-gray-700 text-white duration-300 transition-all'
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
                    className={`cursor-pointer mobile:text-[12px] mobile:font-Lexend${selectedCategory === 'Enrolled Students'
                        ? 'border border-gray-600 px-2 mobile:py-0 mobile:px-1 py-1 rounded-lg bg-gray-700 text-white duration-300 transition-all'
                        : 'text-black'
                    }`}
                >
                    Enrolled Students
                </h1>
            </div>

            {selectedCategory === 'Manage Course' && (
                <ManageCourse
                    courses={getCurrentCourses()}
                    courseActions={courseActions}
                    handleActionChange={handleActionChange}
                    handlePerformAction={handlePerformAction}
                />
            )}

            {selectedCategory === 'Withdraw Requests' && showWithdrawRequest && (
                <UpdatedWithdrawRequest
                    courses={getCurrentCourses()}
                />
            )}

            {selectedCategory === 'Enrolled Students' && (
                <AllEnrolled
                    courses={getCurrentCourses()}
                />
            )}
        </div>
    );
};

export default AdminManagement;
