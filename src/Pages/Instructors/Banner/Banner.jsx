import { Link } from "react-router-dom";

 
// import tarekVi from '../../../assets/tarek_vi.png' 
const Banner = () => {
    return (
        <div className="bg-[#A5CAD3] flex md:flex-row flex-col-reverse    gap-10 justify-around items-center p-10">

        <div>
         <h2 className="text-5xl font-bold text-white ">Come teach <br /> with us</h2>
         <p className="text-2xl mt-2">Become an instructor and change <br /> lives — including your own</p>
         <Link to="/instructorSignUp"><button className=" mt-4 bg-black w-80 p-4 text-xl text-white font-bold">Get Started</button></Link>
        </div>
        <div>
         <img className="w-full" src="https://i.ibb.co/BKqkFv0/Teach-with-us2.png" alt="" />
        </div>
            
        </div>
    );
};

export default Banner;