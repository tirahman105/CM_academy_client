import React, { useState, useEffect } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import DashboardTopNav from '../../Shared/DashboardTopNav/DashboardTopNav';

const ManageInstructors = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
 
    // data fetch from DB 

    const [instructors, setInstructors] = useState([]);
 
    useEffect(() => {
        fetch('https://cm-academy-test-server-production.up.railway.app/users/instructor')
          .then((res) => res.json())
          .then((result) => {
            setInstructors(result);
          });
      }, []);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 768); // Adjust this breakpoint as needed
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize); // Listen for window resize events

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <div className="">
             <DashboardTopNav></DashboardTopNav>
      {/* instructor table  */}

      <div className="border p-4">
      <div className="my-5 mt-4">
       <h1 className=" text-lg">
        Instructor Details 
      </h1>
      <p className="text-base mb-4">Manage courses posted by Instructors</p>
      <hr />
     </div>
            {isSmallScreen ? (
                // Card for small screens
               <div className='text-start'>
                 {
                    instructors.map((instructor, index) => <div className="bg-white shadow-md rounded-lg p-4 m-2"   key={instructor._id}>
                    
                   <div className='flex gap-4 justify-start items-center'>
                     
                   <h2 className="text-lg font-semibold p-2 rounded-full bg-slate-400">{index+1}</h2>
                   <div>
                   <h2 className="text-lg font-semibold text-[#12C29F]">{instructor.fullName}</h2>
                    <div className='flex gap-2'>
                    <span><AiOutlineMail></AiOutlineMail></span> 
                         <p className="text-gray-500 text-sm"> {instructor.email}</p>
                    </div>
                    <div className='flex gap-2'>
                    <span><IoMdCall></IoMdCall></span> 
                    <p className="text-gray-500 text-sm">{instructor?.phone}</p>
                    </div>
                   </div>
                   </div>
                   
                    
                </div>)
                }
                </div>
            ) : (
                // Table for large screens
                <table className="table-auto w-full shadow-md text-base text-start">
                    <thead>
                        <tr className='bg-gray-200 text-[#12C29F] text-left  font-bold divide-x-2'>
                            <th className="px-4 py-2 ">SL</th>
                            <th className="px-4 py-2 ">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Contact</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {
                      instructors.map((instructor, index)=> <tr
                      key={instructor._id} className='hover:bg-slate-100 duration-150'
                     >
                        <td className="border px-4 py-2">{index+1}</td>
                        <td className="border px-4 py-2">{instructor.fullName}</td>
                            <td className="border px-4 py-2">{instructor.email}</td>
                            <td className="border px-4 py-2">{instructor.phone}</td>
                      </tr>)
                  }
                      
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            )}
      </div>
        </div>
    );
};

export default ManageInstructors;
