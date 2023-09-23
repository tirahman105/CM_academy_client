import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircleFill } from 'react-icons/bs';
import { HiCurrencyBangladeshi } from 'react-icons/hi';
import { AuthContext } from '../../../../../providers/AuthProvider';

const InstructorFinance = () => {
    const [balance, setBalance] = useState(1500); // Replace with your balance data
    const [withdrawn, setWithdrawn] = useState(0); // Replace with your withdrawn data

const {user} = useContext(AuthContext); 


    const [instructorPayment, setInstructorPayment] = useState([]);

      console.log(instructorPayment);
    
      useEffect(() => {
        const fetchPaymentHistory = async () => {
          try {
            const response = await fetch(
              `https://cm-academy-test-server-production.up.railway.app/orders`
            );
            const data = await response.json();
    
            // Filter payment history based on user's email
            const instructorPaymentHis = data.filter(
              (order) => order?.course?.instructorEmail == user?.email
            );
            setInstructorPayment(instructorPaymentHis);
          } catch (error) {
            console.error("Error fetching payment history:", error);
          }
        };
        fetchPaymentHistory();
      }, [user]);
    
      console.log(instructorPayment);

    
      const totalAmount = instructorPayment.reduce((total, payment) => {
        if (payment.paidStatus) {
          return total + payment.course.coursePrice;
        }
        return total;
      }, 0);

    return (
        <div className="flex justify-between mt-6 space-x-4">
            <div className="w-1/2 bg-green-100 rounded-lg mobile:px-2 tablet:px-4 tablet:py-2 shadow-md">
               
                <div className="flex items-center mobile:justify-center  ">
                <HiCurrencyBangladeshi className="text-[#1bbf72fa] mobile:text-[24px] laptop:text-3xl desktop:text-5xl" />
                    <span className="text-4xl laptop:text-3xl mobile:text-2xl   font-bold text-green-600"> {totalAmount}</span>
                </div>
                <h2 className="text-xl mobile:text-[12px] font-Montserrat laptop:text-[14px] font-semibold tablet:mb-4 text-green-800 mobile:text-center">Available Balance</h2>
            </div>
            <div className=" w-1/2 bg-red-100 rounded-lg mobile:px-2 tablet:px-4 tablet:py-2 shadow-md">
                <div className="flex items-center mobile:justify-center ">
                <HiCurrencyBangladeshi className="text-gray-600 mobile:text-[24px] laptop:text-3xl desktop:text-5xl" />
                    <span className="text-4xl laptop:text-3xl mobile:text-2xl font-bold text-gray-600">{withdrawn}</span>
                </div>
                <h2 className="text-xl mobile:text-[12px] font-Montserrat  laptop:text-[14px] font-semibold tablet:mb-4 text-gray-700 mobile:text-center">Withdrawn</h2>
            </div>
        </div>
    );
};

export default InstructorFinance;
