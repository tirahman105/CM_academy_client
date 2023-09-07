import React, { useEffect, useState } from 'react';
import DashboardTopNav from '../../Shared/DashboardTopNav/DashboardTopNav';
import { GrChapterAdd } from 'react-icons/gr';
import { MdOutlineGroup, MdOutlinePayments, MdOutlinePostAdd } from 'react-icons/md';
import { RiArticleLine } from 'react-icons/ri';
import { CgNotes } from 'react-icons/cg';
import { PiChalkboardTeacher } from 'react-icons/pi';
import { FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MyPayments from '../../Instructor/MyPatments/MyPayments';
import WithdrawRequest from '../WithdarwRequest/WithdrawRequest';
import DashboardWithdrawRequest from '../WithdarwRequest/DashboardWithdrawRequest';

const AdminDashboard = () => {
        // data fetch from DB 

        const [students, setStudents] = useState([]);
        const [instructors, setInstructors] = useState([]);
        const [courses, setCourses] = useState([]);
        const [blogs, setBlogs] = useState([]);
 
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
    return (
        <div>
            
            <div className="p-10 border">
       
       <div className='grid grid-cols-4 gap-3'>
     <Link to='/dashboard/manage-students'>
     <div className='bg-slate-300 rounded-md  p-10 flex gap-4 justify-start items-center cursor-pointer'>
          <div>
          <FaUserFriends className="text-7xl" />
          </div>
          <div>
          <h1>Users</h1>
           <h1 className="text-5xl font-bold">{students.length}</h1>
          </div>
       
       </div>
       </Link>
    <Link to='/dashboard/manage-instructors'>
    <div className='bg-slate-300 rounded-md  p-10 flex gap-4 justify-start items-center cursor-pointer'>
          <div>
          <PiChalkboardTeacher className="text-7xl" />
        
          </div>
          <div>
          <h1>Instructors</h1>
           <h1 className="text-5xl font-bold">{instructors.length}</h1>
          </div>
       
       </div></Link>


       <Link to='/dashboard/manage-course'><div className='bg-slate-300 rounded-md  p-10 flex gap-4 justify-start items-center cursor-pointer'>
          <div>
          <CgNotes className="text-7xl" />
          </div>
          <div>
          <h1>Courses</h1>
           <h1 className="text-5xl font-bold">{courses.length}</h1>
          </div>
       
       </div>
       </Link>
       <div className='bg-slate-300 rounded-md  p-10 flex gap-4 justify-start items-center cursor-pointer'>
          <div>
          <RiArticleLine className="text-7xl" />
          </div>
          <div>
          <h1>Blogs</h1>
           <h1 className="text-4xl font-bold">{blogs.length}</h1>
          </div>
       
       </div>
       </div>

       {/* --------------------------- */}

       <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 ">
           <div className="border bg-slate-100 p-10 rounded-md flex gap-5">
          <DashboardWithdrawRequest></DashboardWithdrawRequest>
           </div>
           <div className="bg-[#B6DFDB] p-10 rounded-md flex gap-5">
             
           </div>
       </div>
   </div>
        </div>
    );
};

export default AdminDashboard;