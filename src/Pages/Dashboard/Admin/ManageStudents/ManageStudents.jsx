import React, { useState, useEffect } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";

const ManageStudents = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
 
    // data fetch from DB 

    const [students, setStudents] = useState([]);
 
    useEffect(() => {
        fetch('https://cm-academy-test-server-production.up.railway.app/users/student')
          .then((res) => res.json())
          .then((result) => {
            setStudents(result);
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
        <div className="p-4">
            {isSmallScreen ? (
                // Card for small screens
               <div>
                 {
                    students.map(student => <div className="bg-white shadow-md rounded-lg p-4"   key={student._id}>
                    
                    
                    <h2 className="text-lg font-semibold">{student.fullName}</h2>
                    <div className='flex gap-2'>
                    <span><AiOutlineMail></AiOutlineMail></span> 
                         <p className="text-gray-500 text-sm"> {student.email}</p>
                    </div>
                    <div className='flex gap-2'>
                    <span><IoMdCall></IoMdCall></span> 
                    <p className="text-gray-500 text-xl">{student?.phone}</p>
                    </div>
                   
                    
                </div>)
                }
                </div>
            ) : (
                // Table for large screens
                <table className="table-auto w-full shadow-md">
                    <thead>
                        <tr className='bg-gray-100 text-[#12C29F] font-bold divide-x-2'>
                            <th className="px-4 py-2 ">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Contact</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {
                      students.map(student=> <tr
                      key={student._id}
                     >
                        <td className="border px-4 py-2">{student.fullName}</td>
                            <td className="border px-4 py-2">{student.email}</td>
                            <td className="border px-4 py-2">{student.phone}</td>
                      </tr>)
                  }
                        <tr>
                            <td className="border px-4 py-2">tareq</td>
                            <td className="border px-4 py-2">tirahman105@gmail.com</td>
                            <td className="border px-4 py-2">01614048774</td>
                          
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ManageStudents;
