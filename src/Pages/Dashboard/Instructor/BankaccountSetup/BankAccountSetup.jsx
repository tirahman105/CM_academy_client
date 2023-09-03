import React from 'react';
import DashboardTopNav from '../../Shared/DashboardTopNav/DashboardTopNav';

const BankAccountSetup = () => {
    return (
        <div >
            <DashboardTopNav></DashboardTopNav>
            <div className='w-2/4 mx-auto pt-10'>
            <h1 className='text-center text-2xl bg-gray-200 my-2 mb-5'>Bank Account Setup</h1>
            <div className='flex gap-3 items-center mx-auto mb-2'>
                <h1 className='w-1/2'>Account holder Name</h1>
                <input type="text" placeholder="" defaultValue="Md. Tareq Ibna Rahman" className="w-1/2 input input-bordered h-8" />
            </div>
            <div className='flex gap-3 items-center mx-auto mb-2'>
                <h1 className='w-1/2'>Account No.</h1>
                <input type="text" placeholder="" defaultValue="02678358929001" className="w-1/2 input input-bordered h-8" />
            </div>
            <div className='flex gap-3 items-center mx-auto mb-2'>
                <h1 className='w-1/2'>Routing Number</h1>
                <input type="text" placeholder="" defaultValue="6394790" className="w-1/2 input input-bordered h-8" />
            </div>
            <div className='flex gap-3 items-center mx-auto mb-2'>
                <h1 className='w-1/2'>Bank Name</h1>
                <input type="text" placeholder="" defaultValue="Exim Bank" className="w-1/2 input input-bordered h-8" />
            </div>
            <div className='flex gap-3 items-center mx-auto mb-2'>
                <h1 className='w-1/2'>Bank Branch Name</h1>
                <input type="text" placeholder="" defaultValue="Bashundhara Branch" className="w-1/2 input input-bordered h-8" />
            </div>
            <div className='flex gap-3 items-center mx-auto mb-2'>
                <h1 className='w-1/2'>Phone Number</h1>
                <input type="text" placeholder="" defaultValue="01614048774" className="w-1/2 input input-bordered h-8" />
            </div>
            <div className='flex justify-center'>
                <input type="submit" name="" id="" className='ml-16 p-1 my-2 bg-green-500 rounded' />
            </div>

        </div>
        </div>
    );
};

export default BankAccountSetup;