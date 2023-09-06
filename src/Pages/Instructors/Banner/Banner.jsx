import { Link } from "react-router-dom";
import AnimationBanner from "../../../assets/teach.json";
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <div className="css-selector flex flex-col-reverse md:flex-row gap-10 justify-around items-center p-10 pt-24 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl lg:text-6xl  font-bold text-[#191a19] font-LeagueSpartan">
          Come <span className="text-[#1BBF72]">Teach</span> With Us
        </h1>
        <p className="text-lg md:text-2xl mt-2">
          Become an instructor and change
          <br /> lives — including your own
        </p>

        <Link to="/instructorSignUp">
          <button className="mt-4 md:mt-6 bg-black w-full md:w-80 p-3 md:p-4 text-lg md:text-xl text-white font-bold">
            Get Started
          </button>
        </Link>
      </div>
      <div className="md:w-1/4 mx-auto">
        {/* <img
          className="w-2/3"
          src="https://i.ibb.co/BKqkFv0/Teach-with-us2.png"
          alt=""
        /> */}
         <Lottie animationData={AnimationBanner} loop={true} />
      </div>
    </div>
  );
};

export default Banner;
