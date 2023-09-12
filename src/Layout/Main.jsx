import { Outlet } from "react-router";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
const Main = () => {
  return (
    <div className="">
      {/* Adjust z-index for Navbar */}

      <div>
        <div className="relative z-10">
          <Navbar />
        </div>

        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
