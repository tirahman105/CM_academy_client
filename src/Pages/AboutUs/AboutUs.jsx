import { Link } from "react-router-dom";
import AnimationBanner from "../../assets/teach.json";
import Lottie from "lottie-react";

const AboutUs = () => {
    return (
        <div className="css-selector flex flex-col-reverse md:flex-row gap-10 justify-around items-center p-10 pt-24">
            <div className="max-w-7xl mx-auto md:w-1/2">
                <h1 className="text-3xl lg:text-5xl font-bold text-[#191a19] font-LeagueSpartan">
                    Welcome to CM Academy
                </h1>
                <p className="text-lg md:text-xl mt-4">
                    Empowering Minds, Shaping Futures
                </p>

                <p className="text-base md:text-lg mt-6">
                    At CM Academy, we're on a mission to redefine online education. Our
                    vision is to create a dynamic and inclusive learning environment that
                    unlocks the potential of learners worldwide.
                </p>

                <p className="text-base md:text-lg mt-4">
                    With a passionate team of educators and cutting-edge technology, we've
                    curated a vast library of courses spanning a multitude of fields.
                    Whether you're looking to advance your career, explore new passions,
                    or embark on a journey of personal growth, CM Academy has something
                    for you.
                </p>

                <p className="text-base md:text-lg mt-4">
                    Our unwavering commitment to excellence, accessibility, and
                    innovation drives us to provide a learning experience like no other.
                    We believe in breaking down barriers to education and fostering a
                    global community of curious minds.
                </p>
{/* changes by raqib */}
                <div className="flex">
                    <Link to="/signup">
                        <button className=" mr-3 mt-6 bg-black w-full md:w-80 p-3 md:p-4 text-lg md:text-xl text-white font-bold">
                            Join us on the journey (Student) 
                            
                        </button>
                    </Link>

                    <Link to="/instructorSignUp">
                        <button className="mt-6 bg-black w-full md:w-80 p-3 md:p-4 text-lg md:text-xl text-white font-bold">
                            Join us on the journey (Teacher)
                        </button>
                    </Link></div>


            </div>
            <div className="md:w-1/3">
                <Lottie animationData={AnimationBanner} loop={true} />
            </div>
        </div>
    );
};

export default AboutUs;
