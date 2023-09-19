
import hello from '../../../../../assets/hello.png'
import { FaSearch } from 'react-icons/fa';
import IntructorFinance from './IntructorFinance';
import DashboradCourses from './DashboradCourses';
import { useContext } from 'react';
import { AuthContext } from '../../../../../providers/AuthProvider';
import InstructorNavProfile from './InstructorNavProfile';
import InstructorStatistics from './InstructorStatistics';

const NewInstructorDashboard2 = () => {

    const { user } = useContext(AuthContext)
    console.log(user);

    return (
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-8 mx-auto laptop:gap-0">
            {/* Box 1 */}
            <div className="p-1 rounded-lg w-full bg-white bg-blue-300">


                <div className="mb-4  rounded-md bg-gray-100 h-25 p-8 flex justify-around items-center laptop:w-auto laptop:p-5 ">
                    <div className='space-y-1'>
                        <h1 className="text-4xl  font-extrabold font-Jost tracking-wider laptop:text-xl">Hello {user?.fullName}</h1>
                        <p className='text-base font-normal laptop:text-sm '>It’s good to see you again on Instructor.</p>
                    </div>

                    <div className='-mt-11'>
                        <img  src={hello} alt="" />
                    </div>

                </div>


                <IntructorFinance></IntructorFinance>


                <DashboradCourses></DashboradCourses>


            </div>

            {/* Box 2 */}
            <div className="p-6 rounded-lg laptop:p-0">

                <div className="flex items-center gap-6 justify-start mb-4">
                    <div className="relative  flex items-center flex-grow rounded-md text-lg bg-gray-100">
                        <span className="flex items-center pl-4">
                            <FaSearch size={24} className="text-gray-700" />
                        </span>
                        <input
                            type="text"
                            placeholder=""
                            className="w-full focus:outline-none bg-gray-100 p-2"
                        />
                    </div>


                    {/* Profile */}
                    <InstructorNavProfile></InstructorNavProfile>

                </div>

                <div className='grid grid-cols-2 gap-4 mt-6'>
                    <div className='bg-gray-100 p-4 text-center rounded-lg flex items-center justify-center gap-4'>

                        <p className='text-6xl font-extrabold laptop:text-3xl'>
                            10
                        </p>
                        <p className='text-lg font-normal'>
                            Courses
                        </p>
                    </div>

                    <div className='bg-gray-100 p-4 text-center rounded-lg flex items-center justify-center gap-4'>

                        <p className='text-6xl font-extrabold laptop:text-3xl'>
                            5
                        </p>
                        <p className='text-lg font-normal'>
                            Blogs
                        </p>
                    </div>

                </div>
                <InstructorStatistics></InstructorStatistics>

            </div>
        </div>
    );
};

export default NewInstructorDashboard2;
