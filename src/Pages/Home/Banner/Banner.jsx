import { Typewriter, Cursor } from "react-simple-typewriter";
import banner from "../../../assets/banner/img1.jpg"
import BannerLottie from "../../../assets/Banner.json"
import Lottie from "lottie-react";
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-50"></div>

            <div className="flex flex-col-reverse lg:flex-row lg:px-24">
                <div className="w-full lg:w-1/2 p-5 lg:mt-24">


                    <h1 className="text-3xl lg:text-6xl  font-bold text-[#e3f0eb]"
                        style={{ textShadow: "2px 2px 2px rgba(10, 174, 141, 1)" }}>
                        Empowering Learning
                    </h1>

                    <h1 className="lg:mt-4 text-3xl lg:text-6xl font-bold text-[#e3f0eb]"
                        style={{ textShadow: "2px 2px 2px rgba(10, 174, 141, 1)" }}>
                        Through Technology
                    </h1>

                    <p className="py-10  text-white h-72 lg:h-36">
                        <Typewriter
                            words={
                                ["Our main aim for CM Academy Empowering Learning Through Technology is to make learning easier and more fun. We want everyone, from students to professionals, to have access to great education using our online platform. Our platform will have cool features that help both educators and learners. We want to create a friendly place where people can share what they know and learn new things together."]}

                            typeSpeed={50}

                        />

                        <span className="text-white">
                            <Cursor cursorStyle="|"></Cursor>
                        </span>
                    </p>

                    <div className="lg:mt-10 flex gap-5">

                        <button className="btn border-0 text-white bg-[#0AAE8D]
                         hover:bg-white hover:text-[#0AAE8D]
                          hover:animate-pulse">Get Stared</button>

                        <button className="btn border-0 text-[#0AAE8D] bg-white 
                        hover:bg-[#0AAE8D] hover:text-white
                        hover:animate-pulse">View Courses</button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 mx-auto lg:px-6  animate-pulse">
                    <Lottie animationData={BannerLottie} loop={true} />

                </div>
            </div>

        </div>
    );
};

export default Banner;