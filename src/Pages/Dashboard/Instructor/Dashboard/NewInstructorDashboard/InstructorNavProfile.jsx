import React, { useContext } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { MdNotificationsActive } from 'react-icons/md';
import { AuthContext } from '../../../../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const InstructorNavProfile = () => {

    const {user} = useContext(AuthContext)
    console.log(user);

    return (
        <div className='flex items-center '>
            <MdNotificationsActive className='text-4xl mr-4 mobile:w-6 tablet:w-7 laptop:w-9' />
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="mobile:w-7 laptop:w-12 tablet:w-9  rounded-full flex">
                        <img src={user.userImage} />
                    </div>

                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <Link to='/dashboard/instructor-profile' className="justify-between">
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
    );
};

export default InstructorNavProfile;