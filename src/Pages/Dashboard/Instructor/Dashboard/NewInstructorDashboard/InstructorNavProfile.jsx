import React, { useContext } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { MdNotificationsActive } from 'react-icons/md';
import { AuthContext } from '../../../../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import profile from "../../../../../assets/iconForDashboard/user.png";
import logout from "../../../../../assets/iconForDashboard/logout_2.png";
import support from "../../../../../assets/iconForDashboard/message.png";


const InstructorNavProfile = () => {

    const {user, logOut} = useContext(AuthContext)
    console.log(user);

    const handleLogOut = () => {
        logOut()
          .then(() => {})
          .catch((error) => console.log(error));
      };

    return (
        <div className='flex items-center '>
            <MdNotificationsActive className='text-4xl mr-4 mobile:w-6 tablet:w-7 laptop:w-9' />
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="mobile:w-7 laptop:w-12 tablet:w-9  rounded-full flex">
                        <img src={user.userImage} />
                    </div>

                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow  menu menu-sm dropdown-content bg-base-200 rounded-box w-52">
                    <li>
                        <Link to='/dashboard/instructor-profile' className="justify-between">
                            <div className='flex gap-2'>
                                <img className='h-5' src={profile} alt="" />
                                <p>Profile</p>
                            </div>
                           
                        </Link>
                    </li>
                    <li><Link to="/dashboard/support-request">
                        
                    <div  className='flex gap-2 items-center my-2'>
                    <img className='h-5' src={support} alt="" /> <p>Support </p></div>
                        </Link></li>
                    <li onClick={handleLogOut}> <div  className='flex gap-2'>
                    <img className='h-5' src={logout} alt="" /> <p>Logout</p></div></li>
                </ul>
            </div>
            <AiOutlineDown className='text-base' />
        </div>
    );
};

export default InstructorNavProfile;