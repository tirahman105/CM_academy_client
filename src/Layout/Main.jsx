import { Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            {/* Adjust z-index for Navbar */}
            <div className="relative z-10">
                <Navbar />
            </div>

            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;