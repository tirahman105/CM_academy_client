import { Link } from "react-router-dom";
import logo from "../../../../public/cm-logo-png.ico";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useInstructor from "../../../Hooks/useInstructor";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isInstructor] = useInstructor()

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="navbar bg-base-100 home-container mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                {" "}
                <Link>Home</Link>
              </li>
              <li className="bg-white" tabIndex={0}>
                <details>
                  <summary>Course Catagories</summary>
                  <ul className="p-2">
                    <Link to="/courseCategories?category=Digital%20Marketing">
                      Digital Marketing
                    </Link>
                    <Link to="/courseCategories?category=Web%20Development">
                      Web Development
                    </Link>
                    <Link to="/courseCategories?category=Photography">
                      Photography
                    </Link>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/instructor">Become an Instructor</Link>
              </li>
              <li>
                <button onClick={handleLogOut} className="btn btn-success btn-sm w-20 ">
                  Logout
                </button>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="font-extrabold lg:text-3xl sm:text-xl lg:-ml-12 flex gap-3 justify-start items-center"
          >
            <img src={logo} alt="" className="w-8 h-8 md:h-14 md:w-14 sm:ml-8" />
            <p> CM Academy</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold bg-white">
            <li>
              {" "}
              <Link>Home</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Course Catagories</summary>
                <ul className="p-2 z-[100]">
                  <li>
                    <Link to="/courseCategories?category=Digital%20Marketing">
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link to="/courseCategories?category=Web%20Development">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/courseCategories?category=Photography">
                      Photography
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            {!isInstructor && (
              <li>
                <Link to="/instructor" className="ml-auto">
                  Become an Instructor
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end  hidden sm:block ">
          {user?.email ? (
            <div className="flex justify-end gap-12">
              <div className="bg-gradient sm:h-12 gap-2 rounded-full flex items-center justify-between px-2 py-1 ">
                <p className="text-white text-xs sm:tsx font-semibold tracking-wider ml-1">
                  {user.displayName}
                </p>
                <img
                  className=" rounded-full h-9  sm:h-10 shadow-lg sm:block"
                  src={user.photoURL}
                  alt=""
                />
              </div>
              <button onClick={handleLogOut} className="btn btn-success ">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-success text-white lg:ml-96">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
