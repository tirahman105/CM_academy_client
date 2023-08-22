  
const Banner = () => {
    return (
        <div className="bg-[#A5CAD3] flex flex-col-reverse md:flex-row gap-10 justify-around items-center p-10">
        <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-0">Come teach<br /> with us</h2>
            <p className="text-lg md:text-2xl mt-2">Become an instructor and change<br /> lives — including your own</p>
            <button className="mt-4 md:mt-6 bg-black w-full md:w-80 p-3 md:p-4 text-lg md:text-xl text-white font-bold">Get Started</button>
        </div>
        <div className="md:w-1/2">
            <img className="w-full" src="https://i.ibb.co/BKqkFv0/Teach-with-us2.png" alt="" />
        </div>
    </div>
    
    );
};

export default Banner;