import React, { useState } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircleFill } from 'react-icons/bs';
import { HiCurrencyBangladeshi } from 'react-icons/hi';

const InstructorFinance = () => {
    const [balance, setBalance] = useState(1500); // Replace with your balance data
    const [withdrawn, setWithdrawn] = useState(500); // Replace with your withdrawn data

    return (
        <div className="flex justify-between mt-6 space-x-4">
            <div className="w-1/2 bg-green-100 rounded-lg mobile:px-2 tablet:p-4 shadow-md">
               
                <div className="flex items-center mobile:justify-center  ">
                <HiCurrencyBangladeshi className="text-[#1bbf72fa] mobile:text-[24px] laptop:text-3xl desktop:text-5xl" />
                    <span className="text-4xl laptop:text-3xl mobile:text-2xl   font-bold text-green-600"> {balance}</span>
                </div>
                <h2 className="text-xl mobile:text-[12px] font-Montserrat laptop:text-base font-semibold tablet:mb-4 text-green-800 mobile:text-center">Available Balance</h2>
            </div>
            <div className=" w-1/2 bg-red-100 rounded-lg mobile:px-2 tablet:p-4 shadow-md">
                <div className="flex items-center mobile:justify-center ">
                <HiCurrencyBangladeshi className="text-gray-600 mobile:text-[24px] laptop:text-3xl desktop:text-5xl" />
                    <span className="text-4xl laptop:text-3xl mobile:text-2xl font-bold text-gray-600">{withdrawn}</span>
                </div>
                <h2 className="text-xl mobile:text-[12px] font-Montserrat  laptop:text-base font-semibold tablet:mb-4 text-gray-700 mobile:text-center">Withdrawn</h2>
            </div>
        </div>
    );
};

export default InstructorFinance;
