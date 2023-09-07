
import { CgNotes } from "react-icons/cg";
import { RiArticleLine } from "react-icons/ri";
import { MdOutlinePayments , MdAccountBalance, MdOutlinePostAdd, MdOutlineGroup} from "react-icons/md";
import { GrChapterAdd } from "react-icons/gr";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { useState } from "react";
import { Link } from "react-router-dom";
const InstructorDAshboard = () => {
    const { user } = useContext(AuthContext);
    const [blogs, setBlogs] = useState([]);
    const userEmail = user?.email;
    const [instructorCourses, setInstructorCourses] = useState([]);



    // for course count 
    useEffect(() => {
      fetch(
        `https://cm-academy-test-server-production.up.railway.app/categories/instructor/${user?.email} `
      )
        .then((response) => response.json())
        .then((data) => {
          setInstructorCourses(data);
        })
  
        .catch((error) => {
          console.error("Error fetching instructor courses:", error);
        });
    }, [user?.email]);


    // for blog count 

    useEffect(() => {
        // Fetch all blogs from your server
        fetch('https://cm-academy-test-server-production.up.railway.app/all-blog')
            .then((response) => response.json())
            .then((data) => {
                // Filter blogs based on the user's email
                const filteredBlogs = data.filter((blog) => blog.email === userEmail);
                setBlogs(filteredBlogs);
            })
            .catch((error) => {
                console.error('Error fetching blogs:', error);
            });
    }, [userEmail]);

    



    return (
        <div className="p-10 border">
       
            <div className='grid grid-cols-4 gap-3'>
          <Link to="/dashboard/my-courses-instructor">
          <div className='bg-slate-300 rounded-md  p-10 flex gap-4 justify-start items-center cursor-pointer'>
               <div>
               <CgNotes className="text-7xl text-green-700" />
               </div>
               <div>
               <h1>courses</h1>
                <h1 className="text-5xl font-bold">{instructorCourses.length}</h1>
               </div>
            
            </div>
          </Link>
            <Link to="/dashboard/my-blogs">
            <div className='bg-slate-300 rounded-md  p-10 flex gap-4 justify-start items-center cursor-pointer'>
               <div>
               <RiArticleLine className="text-7xl" />
               </div>
               <div>
               <h1>Blogs</h1>
                <h1 className="text-5xl font-bold">{blogs.length}</h1>
               </div>
            
            </div>
            </Link>


           <Link to="/dashboard/my-enrolled-students">
           <div className='bg-slate-300 rounded-md  p-10 flex gap-4 justify-start items-center cursor-pointer'>
               <div>
               <MdOutlineGroup className="text-7xl" />
               </div>
               <div>
               <h1>Students</h1>
                <h1 className="text-5xl font-bold">188</h1>
               </div>
            
            </div>
           </Link>
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
                <Link to="/dashboard/add-course">
                <div className="bg-[#B6DFDB] p-10 rounded-md flex gap-5">
                    <GrChapterAdd className="text-5xl"></GrChapterAdd>
                    <h1>Add new course</h1>
                </div>
                </Link>
                <Link to="/dashboard/add-blog">
                <div className="bg-[#B6DFDB] p-10 rounded-md flex gap-5">
                    <MdOutlinePostAdd className="text-5xl"></MdOutlinePostAdd>
                    <h1>Add new Blog</h1>
                </div>
                </Link>
            </div>
        </div>
    );
};

export default InstructorDAshboard;