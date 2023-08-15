import React from 'react';
import { FaLightbulb, FaChalkboardTeacher, FaChartLine } from 'react-icons/fa';
import Lottie from 'lottie-react';
import animationData from '../../../../src/assets/animation_ll3r94gu.json';

const WhyUs = () => {


    return (
        <div className="pt-12 md:pt-20">
            <div className="container mx-auto px-4">
                <h1 className='text-4xl font-bold mb-5 text-center text-[#12C29F]'>Why Choose us?</h1>
                <p className="text-center font-semibold mb-20">
                    Empowering Futures, One Click at a Time. <br />
                    Discover Excellence with Personalized Learning, Expert Educators, and
                    Seamless Technology. Join us in Redefining Education.</p>
                <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
                    <div className="md:w-1/2 mb-6 md:mb-0">
                        <Lottie animationData={animationData} height={300} width={300} />
                    </div>
                    <div className="md:w-1/2 text-gray-800">
                        <div className="mb-8">
                            <FaLightbulb className="text-4xl text-indigo-600 mb-2" />
                            <h2 className="text-3xl font-semibold mb-2">Inspire Curiosity</h2>
                            <p className="text-gray-600">
                                Discover our platform that encourages curiosity and enhances your learning experience. Our courses are designed to foster critical thinking and creativity.
                            </p>
                        </div>
                        <div className="mb-8">
                            <FaChalkboardTeacher className="text-4xl text-green-600 mb-2" />
                            <h2 className="text-3xl font-semibold mb-2">Learn from Experts</h2>
                            <p className="text-gray-600">
                                Gain insights from experienced educators who are experts in their fields. Engage in interactive lessons, real-world projects, and peer collaboration.
                            </p>
                        </div>
                        <div>
                            <FaChartLine className="text-4xl text-purple-600 mb-2" />
                            <h2 className="text-3xl font-semibold mb-2">Shape Your Future</h2>
                            <p className="text-gray-600">
                                Explore a vast array of subjects and courses, from technology and business to arts and sciences. Uncover your passion and shape your future.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
