
import { CgNotes } from "react-icons/cg";
import { RiArticleLine } from "react-icons/ri";
import { MdOutlinePayments , MdAccountBalance, MdOutlinePostAdd, MdOutlineGroup} from "react-icons/md";
import { GrChapterAdd } from "react-icons/gr";
const InstructorDAshboard = () => {
    
    return (
        <div className="p-10 border">
       
            <div className='grid grid-cols-4 gap-3'>
            <div className='bg-slate-300 rounded-md  p-10 flex gap-4 justify-start items-center cursor-pointer'>
               <div>
               <CgNotes className="text-7xl text-green-700" />
               </div>
               <div>
               <h1>courses</h1>
                <h1 className="text-5xl font-bold">10</h1>
               </div>
            
            </div>
            <div className='bg-slate-300 rounded-md  p-10 flex gap-4 justify-start items-center cursor-pointer'>
               <div>
               <RiArticleLine className="text-7xl" />
               </div>
               <div>
               <h1>Blogs</h1>
                <h1 className="text-5xl font-bold">13</h1>
               </div>
            
            </div>


            <div className='bg-slate-300 rounded-md  p-10 flex gap-4 justify-start items-center cursor-pointer'>
               <div>
               <MdOutlineGroup className="text-7xl" />
               </div>
               <div>
               <h1>Students</h1>
                <h1 className="text-5xl font-bold">188</h1>
               </div>
            
            </div>
            <div className='bg-slate-300 rounded-md  p-10 flex gap-4 justify-start items-center cursor-pointer'>
               <div>
               <MdOutlinePayments className="text-7xl" />
               </div>
               <div>
               <h1>Income</h1>
                <h1 className="text-4xl font-bold">13810 tk</h1>
               </div>
            
            </div>
            </div>

            {/* --------------------------- */}

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 ">
                <div className="bg-[#B6DFDB] p-10 rounded-md flex gap-5">
                    <GrChapterAdd className="text-5xl"></GrChapterAdd>
                    <h1>Add new course</h1>
                </div>
                <div className="bg-[#B6DFDB] p-10 rounded-md flex gap-5">
                    <MdOutlinePostAdd className="text-5xl"></MdOutlinePostAdd>
                    <h1>Add new Blog</h1>
                </div>
            </div>
        </div>
    );
};

export default InstructorDAshboard;