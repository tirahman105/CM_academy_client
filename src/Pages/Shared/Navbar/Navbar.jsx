import { Link } from "react-router-dom";
import logo from "../../../../public/cm-logo-png.ico";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useInstructor from "../../../Hooks/useInstructor";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isInstructor] = useInstructor();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  console.log(user)

  return (
    // bg-opacity-70 backdrop-blur-lg  fixed left-0 right-0  px-4 mx-auto rounded-md   bg-gray-100 shadow-sm
    // bg-opacity-100 backdrop-blur-lg  fixed left-0 right-0 max-w-[1300px] px-4 mx-auto rounded-md border-2 border-[#1bbf7218] bg-[#1bbf7218] shadow-md
    <>
      <div className="    fixed left-0 right-0  px-4 mx-auto   bg-white shadow-sm bg-opacity-70 backdrop-blur-lg">
        <div className="navbar max-w-7xl mx-auto px-4 ">
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
                  <Link className="">Home</Link>
                </li>
                <li className="bg-white " tabIndex={0}>
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
                  <button
                    onClick={handleLogOut}
                    className="btn btn-success btn-sm w-20 "
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
            <Link
              to="/"
              className="font-extrabold lg:text-3xl sm:text-xl lg:-ml-8 flex gap-3 justify-start items-center "
            >
              <img
                src={logo}
                alt=""
                className="w-8 h-8 md:h-14 md:w-14 sm:ml-8"
              />
              <p className="text-[#1BBF72] font-Jost font-bold">
                {" "}
                <span className="text-gray-600">CM</span> Academy
              </p>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold ">
              <li>
                {" "}
                <Link className="text-[#1BBF72] font-Raleway font-bold">
                  Home
                </Link>
              </li>
              <li
                className="text-[#1BBF72] font-Raleway font-bold"
                tabIndex={0}
              >
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
                  <Link
                    to="/instructor"
                    className="ml-auto text-[#1BBF72] font-Raleway font-bold"
                  >
                    Become an Instructor
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="navbar-end  hidden sm:block ">
            {user?.email ? (
              <div className="flex justify-end gap-12">
                <div className="bg-[#1bbf723b] border-2 border-[#1bbf726c] shadow-md sm:h-12 gap-2 rounded-full  flex items-center justify-between  px-1 py-1 ">
                  <p className="text-gray-700 text-xs font-bold  font-Poppins tracking-wider ml-1 hover:px-10 duration-500">
                    {user.displayName}
                  </p>
                  <img
                    className=" rounded-full h-9  sm:h-10 shadow-lg sm:block"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
                <button
                  onClick={handleLogOut}
                  className="text-gray-700 font-Raleway border-2 font-bold py-2  rounded-xl px-4 css-selector   hover:border-[#1bbf7246] duration-500 
                hover:bg-[#1bbf7249] hover:text-gray-600 shadow-md "
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex justify-end">
                <Link
                  to="/login"
                  className="text-gray-700 font-Raleway border-2 font-bold py-[9px]  rounded-xl px-4 css-selector   hover:border-[#1bbf7246] duration-500 
              hover:bg-[#1bbf7249] hover:text-gray-600 shadow-md "
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
