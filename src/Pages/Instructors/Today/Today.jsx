import { Link } from "react-router-dom";

const Today = () => {
  return (
    <div className="mt-6 md:mt-12 lg:mt-20 mb-8 md:mb-16 lg:mb-24">
      <div className="w-full md:w-1/2 mx-auto text-center px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          Become an instructor today
        </h2>
        <p className="mt-3 md:mt-4 text-base md:text-lg lg:text-xl xl:text-2xl">
          Join one of the world’s largest online learning marketplaces.
        </p>
        <div className="text-center mt-4">
          <Link to="/instructorSignUp">
            <button className="mt-4 md:mt-6 bg-black w-full md:w-80 p-3 md:p-4 text-lg md:text-xl text-white font-bold">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Today;
