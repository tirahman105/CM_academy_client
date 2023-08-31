import Lottie from "lottie-react";
import supportAnimation from "../../../assets/CallCenter.json"
const Support = () => {
  return (
    <div className="mt-5 md:mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-10">
    <div className="mx-auto">
        {/* <img src="https://www.localexposure.co.uk/wp-content/uploads/2020/05/website-support-nottingham.png" alt="" className="w-full" /> */}

        <Lottie animationData={supportAnimation} loop={true} />

    </div>
    <div className="w-full mx-auto text-center px-4 lg:px-8">
        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">You won’t have to do it alone</h2>
        <p className="mt-3 md:mt-4 text-base md:text-lg lg:text-base xl:text-lg px-2 lg:px-4">Our <span className="font-bold">Instructor Support Team</span> is here to answer your questions and review your test video, while our Teaching Center gives you plenty of resources to help you through the process. Plus, get the support of experienced instructors in our online community.</p>
        <p className="mt-4 text-center">
            <a className="underline text-base md:text-lg lg:text-xl xl:text-2xl text-blue-500 hover:text-blue-600 font-bold" href="#">Need more details before you start? Learn more.</a>
        </p>
    </div>
</div>

  );
};

export default Support;