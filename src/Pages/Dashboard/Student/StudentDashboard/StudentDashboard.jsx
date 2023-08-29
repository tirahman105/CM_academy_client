import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';


const StudentDashboard = () => {

    const {user} =useContext(AuthContext);


    return (
        <div>
            <div className='p-5 bg-gray-100 rounded-md lg:px-32 lg:h-40 flex flex-col
             items-center  lg:flex-row gap-5'>
                <div >
                    <h1 className='font-extrabold text-2xl lg:text-3xl font-serif 
                        text-center mt-5 tracking-wider'>Hello ! {user?.displayName}</h1>
                    <p className='lg:tracking-widest text-gray-700 text-center mt-4
                        text-sm font-semibold'>It is good to see you again.</p>
                </div>
                <img className='mx-auto h-32' src="https://cdn.iconscout.com/icon/free/png-256/free-developer-2309906-1943816.png" alt="" />

                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered" />
                        <button className="btn bg-[#12C29F] btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-16 gap-5 lg:px-20 
            mb-24'>
                <div className="card w-72 bg-base-100 shadow-2xl mx-auto">
                    <figure><img className='h-40 w-full'
                        src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Web Development</h2>
                        <div className='flex items-center gap-4'>
                            <progress className="progress progress-success w-56" value="40" max="100"></progress>
                            <h1>40% </h1>
                        </div>
                        <div className="card-actions justify-end">
                            <button className='btn btn-sm bg-[#12C29F] text-white mt-4'>
                                Continue</button>
                        </div>
                    </div>
                </div>
            </div>


            <h1 className='text-4xl lg:text-5xl mt-7 font-bold text-center'>Top Courses</h1>

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
                <div className="card bg-base-100 shadow-xl  mx-auto">
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
                <div className="card bg-base-100 shadow-xl  mx-auto">
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
    );
};

export default StudentDashboard;