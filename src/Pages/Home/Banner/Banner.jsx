import { Typewriter, Cursor } from "react-simple-typewriter";
// import BannerLottie from "../../../assets/Banner.json";
import AnimationBanner from "../../../assets/cm_banner.json";
import Lottie from "lottie-react";
import "./Banner.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="bg-gradient duration-500  relative  pt-24   "
    >
      <div>
        <div className="area  ">
          <ul className="circles ">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>

      <div>
        <div className="hero-overlay  "></div>

        <div className="flex flex-col-reverse lg:flex-row  max-w-7xl mx-auto ">
          <div className="w-full lg:w-1/2 p-5 lg:mt-24  ">
            <h1 className="text-3xl lg:text-6xl  font-bold text-[#191a19] font-LeagueSpartan">
              Empowering <span className="text-[#1BBF72]">Learning</span>{" "}
              Through Technology
            </h1>

            <p className=" py-5    lg:h-36 font-Raleway tracking-wider md:text-lg  mt-6">
              <Typewriter
                words={[
                  "Our main aim for CM Academy Empowering Learning Through Technology is to make learning easier and more fun. We want everyone, from students to professionals, to have access to great education using our online platform.",
                ]}
                typeSpeed={50}
              />

              <span className="text-white">
                <Cursor cursorStyle="|"></Cursor>
              </span>
            </p>

            <div className="laptop:mt-10 mobile:mb-7 flex gap-5  mb-14  relative ">
              <Link to="/signup">
                <button
                  className={` text-white border-2 font-bold border-white rounded-xl px-4 bg-[#1BBF72] text-[12px] md:text-sm font-Raleway cursor-pointer  py-2 ${
                    user ? "" : ""
                  } `}
                >
                  Get Stared
                </button>
              </Link>

              <Link
                className=" justify-center items-center flex text-[#1BBF72] border-2 font-bold  rounded-xl px-4 bg-white  font-Raleway text-[12px] md:text-sm  cursor-pointer border-[#1bbf729f] duration-500 
                hover:bg-[#1bbf7249] hover:text-gray-600   "
                to="/courseCategories?category=All"
              >
                <button>View Courses</button>
              </Link>
            </div>
          </div>
          <div className="  mobile:w-52 tablet:w-1/2   lg:w-1/2 mx-auto lg:px-6  animate-pulse">
            <Lottie animationData={AnimationBanner} loop={true} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
