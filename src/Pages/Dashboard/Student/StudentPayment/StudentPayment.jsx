import React, { useState, useEffect } from 'react';
import { SlCalender } from 'react-icons/sl';


const StudentPayment = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

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
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-2xl font-bold mb-3">Web Designing</h2>
                    <div className='flex justify-start items-center gap-3 text-gray-500'>
                        <SlCalender></SlCalender><p>16 Aug 2023</p>
                    </div>
                    <p className='font-semibold mt-1'>CMIN703</p>
                    <div className="divider"></div>
                    <div className='flex justify-between items-center '>
                        <p className='text-xl font-bold'>1200</p>
                        <p className='font-bold'>Bkash</p>
                        <p className='btn btn-sm bg-[#12C29F] flex justify-center'>Complete</p>
                    </div>
                </div>
            ) : (
                // Table for large screens
                <table className="table-auto w-full">
                    <thead>
                        <tr className='bg-gray-100 text-[#12C29F] font-bold divide-x-2'>
                            <th className="px-4 py-2 ">Course</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Payment Method</th>
                            <th className="px-4 py-2">Amount</th>
                            <th className="px-4 py-2">Invoice No.</th>
                            <th className="px-4 py-2">Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-center font-semibold'>
                            <td className="border px-4 py-2">Web Designing</td>
                            <td className="border px-4 py-2">16 Aug 2023</td>
                            <td className="border px-4 py-2">Bkash</td>
                            <td className="border px-4 py-2">1200</td>
                            <td className="border px-4 py-2">CMIN703</td>
                            <td className="border px-4 py-2">
                                <button className='btn btn-sm bg-[#12C29F] 
                                    border-0 text-white'>Complete</button>
                            </td>
                        </tr>
                        <tr className='text-center font-semibold'>
                            <td className="border px-4 py-2">Web Designing</td>
                            <td className="border px-4 py-2">16 Aug 2023</td>
                            <td className="border px-4 py-2">Bkash</td>
                            <td className="border px-4 py-2">1200</td>
                            <td className="border px-4 py-2">CMIN703</td>
                            <td className="border px-4 py-2">
                                <button className='btn btn-sm bg-[#12C29F] 
                                    border-0 text-white'>Complete</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            )
            }
        </div >
    );
};

export default StudentPayment;
