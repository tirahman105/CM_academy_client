import React, { useContext, useEffect, useState } from 'react';
import { MdNotificationsActive } from 'react-icons/md';
import { Link } from 'react-router-dom';
import DashboardChart from '../DashboardChart/DashboardChart';
import AdminManagement from './AdminManagement';
import hello from '../../../../assets/hello.png'
import { AuthContext } from '../../../../providers/AuthProvider';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';

const AdminDashboard = () => {
  // data fetch from DB 

  const [students, setStudents] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [courses, setCourses] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const { user } = useContext(AuthContext);

  //   user fetch 
  useEffect(() => {
    fetch('https://cm-academy-test-server-production.up.railway.app/users/student')
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);

  //   instructor fetch 
  useEffect(() => {
    fetch('https://cm-academy-test-server-production.up.railway.app/users/instructor')
      .then((res) => res.json())
      .then((result) => {
        setInstructors(result);
      });
  }, []);


  //   course fetch 

  useEffect(() => {
    fetch("https://cm-academy-test-server-production.up.railway.app/categories")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);

  // Fetch the blog
  useEffect(() => {
    fetch("https://cm-academy-test-server-production.up.railway.app/all-blog")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);



  const approvedCourses = courses.filter(course => course.ApprovedStatus === 'Approved');
  const totalApprovedCourses = approvedCourses.length;
  const deniedCourses = courses.filter(course => course.ApprovedStatus === 'Denied');
  const totalDeniedCourses = deniedCourses.length;


  return (

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto p-8">

      <div className="p-6 rounded-lg w-full bg-white">
        <div className="mb-4 rounded-md bg-gray-100 h-40 flex justify-around items-center">
          <div className='p-8 space-y-1'>
            <h1 className="xl:text-4xl lg:text-xl md:text-lg font-extrabold font-Jost tracking-wider">Hello {user?.fullName}</h1>
            <p className='text-base font-normal'>It’s good to see you again.</p>
          </div>
          <div className='-mt-9'>
            <img src={hello} alt="" />
          </div>
        </div>
        <AdminManagement courses={courses} setCourses={setCourses} />
      </div>


      {/* --------------------------- */}
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
                  <img src={user?.userImage} />
                </div>

              </label>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <Link to='/dashboard/admin-dashboard' className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
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
              {totalApprovedCourses}
            </p>
            <p className='text-lg font-normal'>
              Approved Courses
            </p>
          </div>

          <div className='bg-gray-100 p-4 text-center rounded-lg flex items-center justify-center gap-4'>

            <p className='text-6xl font-extrabold'>
              {totalDeniedCourses}
            </p>
            <p className='text-lg font-normal'>
              Denied Courses
            </p>
          </div>

        </div>
        <DashboardChart></DashboardChart>

      </div>
    </div>
  );
};

export default AdminDashboard;