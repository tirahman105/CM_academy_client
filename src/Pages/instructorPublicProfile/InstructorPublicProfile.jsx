import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillPlayCircle, AiFillStar } from 'react-icons/ai';
import { HiUserGroup } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';
// import bannerBackgroundImage from "../../assets/InstructorBanner.jpg"

const InstructorPublicProfile = () => {
    return (
        <div className='w-full min-h-screen bg-slate-100'>
            {/*  <div className='bg-no-repeat bg-cover w-full h-[30vh] lg:h-[60vh]'
                style={{ backgroundImage: `url(${bannerBackgroundImage})` }}>
            </div> */}
            <div className='css-selector bg-no-repeat bg-cover w-full h-[30vh] lg:h-[50vh]'></div>
            <div className='flex flex-col lg:flex-row p-4 lg:p-20'>
                <div className='lg:w-2/5 '>
                    <div className='flex flex-row lg:flex-col gap-1 lg:gap-5'>
                        <div className='w-1/2 lg:w-full  lg:text-center'>
                            <div className="-mt-20 lg:-mt-56 w-32 h-32 lg:w-72 lg:h-72
                            lg:mx-auto mb-6 overflow-hidden rounded-full
                             ring-4 ring-[#023B56] ring-offset-base-100 ring-offset-4
                            hover:ring-sky-500
                            dark:ring-[#f8f7f1] dark:ring-offset-[#374151] dark:hover:ring-[#e4cf59] hover:ring-offset-8 hover:scale-105 transition-transform ">
                                <img src="https://scontent.fdac145-1.fna.fbcdn.net/v/t39.30808-6/272181930_3186526674910529_8212759804538838683_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFGlRFHd_Uq3TWPKgVmtHNDTyhXrrep6pVPKFeut6nqlfaW8j314xELot30HZHgJ5-xFjReddCz3hJbX1vxqfT8&_nc_ohc=MwN4h4yRiK4AX8EdkKb&_nc_ht=scontent.fdac145-1.fna&oh=00_AfBOo0nSzLydf8E7XmUny9hlmQzKxK0sL8BnOt_xoUGOmQ&oe=64F3A466" />
                            </div>
                            <div className='mt-2 lg:mt-6 lg:text-center'>
                                <h1 className='text-xl lg:text-3xl font-bold text-[#023B56] mb-1
                                lg:mb-1'>Samsul Alam Asif</h1>
                                <h1 className='text-sm lg:text-xl font-semibold text-gray-700'>
                                    Frontend Developer</h1>
                                <h1 className='p-2 flex justify-center items-center gap-2 text-center bg-[#023B56] text-[#00FF84] font-bold text-xs w-28 rounded-lg shadow-lg lg:mx-auto my-8 lg:my-2'><AiFillStar></AiFillStar> Top Teacher</h1>
                            </div>
                        </div>
                        <div className='w-1/2 lg:w-full mx-auto'>
                            <div className='flex flex-col-reverse lg:flex-col gap-3 lg:gap-2'>
                                <Link to="https://www.facebook.com/mdsamsulalamasif" className='mx-auto text-center w-28 font-extrabold border-2 border-[#023B56]
                                 text-[#023B56] rounded-2xl p-2 my-2'>Follow</Link>
                                <div className='lg:w-3/5 border-t-2 lg:border-t lg:border-gray-600
                                 mx-auto'></div>
                                <div className='mx-auto space-y-2 mt-3  lg:mt-2'>
                                    <h1 className='flex justify-start items-center gap-3 font-semibold text-sm'>
                                        <AiFillStar className='text-cyan-600 text-xl'>
                                        </AiFillStar>5 Star Ratings</h1>
                                    <h1 className='flex justify-start items-center gap-3 font-semibold text-sm'>
                                        <AiFillPlayCircle className='text-cyan-600 text-xl'></AiFillPlayCircle>3 Courses</h1>
                                    <h1 className='flex justify-start items-center gap-3 font-semibold text-sm'>
                                        <HiUserGroup className='text-cyan-600 text-xl'>
                                        </HiUserGroup>600 Students</h1>
                                    <h1 className='flex justify-start items-center gap-3 font-semibold text-sm'>
                                        <MdLocationOn className='text-cyan-600 text-xl'>
                                        </MdLocationOn>Dhaka Bangladesh</h1>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-3/5 '>


                    <h1 className='text-2xl font-bold underline lg:mt-10 text-[#023B56]'>About Me</h1>
                    <p className='text-sm font-semibold lg:text-lg lg:tracking-wider my-4
                     text-gray-700'>
                        Hello! I&#39;m Samsul Alam, a programmer with a good level of expertise in Front-End Web Development. I&#39;m currently studying at Bachelor of Business Administration (BBA) in Management from Government Titumir College (Affiliated with the University of Dhaka).  I&#39;m a tech lover and like to write blogs about programming and web development. I&#39;m interested in MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack web development.
                        <br />
                        <br />
                        I am a hardworking, confident, enthusiastic Web developer and I want to utilize my knowledge and personal skills in Web Development. Also eagerly wants to serve a professional organization to the best of my knowledge with true dedication, hard work, and commitment. I am down to earth honest, confident, fun loving and caring as well.
                    </p>
                </div>
            </div>
            <div>
                <h1 className='text-4xl lg:text-5xl mt-7 font-bold text-center text-[#023B56]
                font-serif'>My Courses</h1>
                {/* ------------CARD------------------ */}


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-16 gap-5 lg:px-20 '>
                    <div className="card  bg-base-100 shadow-xl  mx-auto">
                        <figure><img className='h-56 w-full'
                            src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title mb-2">
                                Web Development
                                <div className="badge badge-warning">New</div>
                            </h2>
                            <p className='text-xs tracking-wider'>Learn the basics of web development, including HTML, CSS, and JavaScript.</p>
                            <div className='flex justify-between mt-2 font-semibold text-sm text-gray-500'>
                                <h1>Duration: 4 weeks</h1>
                                <h1>Price: $400</h1>
                            </div>
                            <h1 className=' text-gray-700 font-serif  mt-1'>
                                Author Name: <span className='font-semibold'>Emily Johnson</span></h1>
                            <div className='divider'></div>

                            <div className="flex justify-between items-center">
                                <p className='text-sm font-semibold text-gray-500'>Start Date: <span className=' font-bold text-gray-600'>15 Aug 23</span></p>
                                <button className='btn btn-sm bg-[#edfffc] 
                                    border-2 border-[#12C29F] text-[#12C29F]
                                    '>Enrollee Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl  mx-auto">
                        <figure><img className='h-56 w-full' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/history_and_evolution_of_digital_marketing.jpg" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title mb-2">
                                Digital Marketing
                                <div className="badge badge-warning">New</div>
                            </h2>
                            <p className='text-xs tracking-wider'>Master the art of digital marketing, from SEO to social media advertising.</p>
                            <div className='flex justify-between mt-2 font-semibold text-sm text-gray-500'>
                                <h1>Duration: 6 weeks</h1>
                                <h1>Price: $540</h1>
                            </div>
                            <h1 className=' text-gray-700 font-serif  mt-1'>
                                Author Name: <span className='font-semibold'>Sarah Davis</span></h1>
                            <div className='divider'></div>

                            <div className="flex justify-between items-center">
                                <p className='text-sm font-semibold text-gray-500'>Start Date: <span className=' font-bold text-gray-600'>15 Aug 23</span></p>
                                <button className='btn btn-sm bg-[#edfffc] 
                                    border-2 border-[#12C29F] text-[#12C29F]
                                    '>Enrollee Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl  mx-auto">
                        <figure><img className='h-56 w-full'
                            src="https://nvit.com.bd/wp-content/uploads/2021/03/ImageGraphics.jpg" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title mb-2">
                                Graphic Design
                                <div className="badge badge-warning">New</div>
                            </h2>
                            <p className='text-xs tracking-wider'>Discover the principles of graphic design and create stunning visuals.</p>
                            <div className='flex justify-between mt-2 font-semibold text-sm text-gray-500'>
                                <h1>Duration: 7 weeks</h1>
                                <h1>Price: $300</h1>
                            </div>
                            <h1 className=' text-gray-700 font-serif  mt-1'>
                                Author Name: <span className='font-semibold'>Linda White</span></h1>
                            <div className='divider'></div>

                            <div className="flex justify-between items-center">
                                <p className='text-sm font-semibold text-gray-500'>Start Date: <span className=' font-bold text-gray-600'>15 Aug 23</span></p>
                                <button className='btn btn-sm bg-[#edfffc] 
                                    border-2 border-[#12C29F] text-[#12C29F]
                                    '>Enrollee Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default InstructorPublicProfile;




