import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";



const Banner = () => {
    return (
        <Carousel>
            <div className="flex flex-col min-h-screen bg-[#A5CAD3] text-left items-center relative sm:flex-row">
                <div className="text-container sm:w-1/2 p-10">
                    <p className="text-white">Welcome to CM Academy</p>
                    <h1 className="mb-5 text-5xl font-semibold text-white">
                        Empowering Learning Through Technology
                    </h1>
                    <h1 className="mb-5 text-xl text-black">
                        Unleash Your Potential Today - Elevate Your Skills with CM Academy&apos;s
                        Engaging Courses! <br />
                        Unlock Your Potential with CM Academy&apos;s Dynamic Courses! Are you ready
                        to dive into a world of limitless possibilities? Welcome to CM
                        Academy, where learning knows no bounds.
                    </h1>
                    <p className="mb-5 text-white"></p>
                    <Link to="/" className="btn btn-success text-white p-5 m-3 ml-0">
                        Get Started
                    </Link>
                    <Link to="/" className="btn bg-white text-teal-400 font-semibold p-5 m-3">
                        View Courses
                    </Link>
                </div>
                <div className="image-container sm:w-1/2">
                    <img src="https://i.ibb.co/DMMs4fx/banner-bg-boy.png" alt="" />
                </div>
            </div>



            <div className="flex flex-col min-h-screen bg-[#A5CAD3] relative items-center text-left sm:flex-row">
                <div className="text-container sm:w-1/2 p-10">

                    <p className="text-white">Join the CM Academy Community</p>
                    <h1 className="mb-5 text-5xl font-semibold text-white">
                        Enhance Your Skills with Modern Technology
                    </h1>
                    <h1 className="mb-5 text-xl text-black">
                        Transform Your Learning Experience - Explore CM Academy&apos;s Cutting-Edge Courses! <br />
                        Embrace the Power of Knowledge with CM Academy&apos;s Innovative Courses! Are you ready
                        to embark on a journey of continuous growth? Welcome to CM
                        Academy, where education meets innovation.
                    </h1>
                    <p className="mb-5 text-white"></p>
                    <Link to="/" className="btn btn-success text-white p-5 m-3 ml-0">
                        Get Started
                    </Link>
                    <Link to="/" className="btn bg-white text-teal-400 font-semibold p-5 m-3">
                        View Courses
                    </Link>

                </div>
                <div className="image-container sm:w-1/2">
                    <img src="https://i.ibb.co/DMMs4fx/banner-bg-boy.png" alt="" />
                </div>
            </div>




            <div className="flex flex-col min-h-screen bg-[#A5CAD3]  text-left items-center sm:flex-row">
                <div className="text-container sm:w-1/2 p-10">
                    <p className="text-white">Welcome to CM Academy</p>
                    <h1 className="mb-5 text-5xl font-semibold text-white">
                        Empowering Learning Through Technology
                    </h1>
                    <h1 className="mb-5 text-xl text-black">
                        Unleash Your Potential Today - Elevate Your Skills with CM Academy&apos;s
                        Engaging Courses! <br />
                        Unlock Your Potential with CM Academy&apos;s Dynamic Courses! Are you ready
                        to dive into a world of limitless possibilities? Welcome to CM
                        Academy, where learning knows no bounds.
                    </h1>
                    <p className="mb-5 text-white"></p>
                    <Link to="/" className="btn btn-success text-white p-5 m-3 ml-0">
                        Get Started
                    </Link>
                    <Link to="/" className="btn bg-white text-teal-400 font-semibold p-5 m-3">
                        View Courses
                    </Link>
                </div>
                <div className="image-container sm:w-1/2">
                    <img src="https://i.ibb.co/DMMs4fx/banner-bg-boy.png" alt="" />
                </div>
            </div>


        </Carousel>
    );
};

export default Banner;