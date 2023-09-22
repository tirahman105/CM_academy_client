import React from "react";
// import { FaLightbulb, FaChalkboardTeacher, FaChartLine } from 'react-icons/fa';
// import Lottie from "lottie-react";
import animationData from "../../../../src/assets/Why.json";
import Lottie from "react-lottie-player";

const WhyUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 mt-28">
        <h1 className="text-4xl font-bold mb-5  font-Poppins  mobile:text-xl">
          Why Choose us?
        </h1>
        <p className=" font-semibold tablet:mb-10 mobile:text-sm" >
          Empowering Futures, One Click at a Time. <br />
          Discover Excellence with Personalized Learning, Expert Educators, and
          Seamless Technology. Join us in Redefining Education.
        </p>
      <div className="">

        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Lottie
              animationData={animationData}
              play
              loop

              style={{ width: 350, height: 350 }} // Adjust the dimensions as needed

            />
          </div>
          <div className="md:w-1/2 text-gray-800 font-Lexend ">
            <div className="mb-8">
              <div className="flex gap-4 items-center justify-center">
                <div>
                  <h2 className="text-3xl font-semibold mb-2  mobile:text-xl">
                    Inspire Curiosity
                  </h2>
                  <p className="text-gray-600 mobile:text-sm">
                    Discover our platform that encourages curiosity and enhances
                    your learning experience. Our courses are designed to foster
                    critical thinking and creativity.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <div className="flex gap-4 items-center justify-center">
                <div>
                  <h2 className="text-3xl font-semibold mb-2 mobile:text-xl">
                    Learn from Experts
                  </h2>
                  <p className="text-gray-600 mobile:text-sm">
                    Gain insights from experienced educators who are experts in
                    their fields. Engage in interactive lessons, real-world
                    projects, and peer collaboration.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-4 items-center justify-center">
                <div>
                  <h2 className="text-3xl font-semibold mb-2 mobile:text-xl">
                    Shape Your Future
                  </h2>
                  <p className="text-gray-600 mobile:text-sm">
                    Explore a vast array of subjects and courses, from
                    technology and business to arts and sciences. Uncover your
                    passion and shape your future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
