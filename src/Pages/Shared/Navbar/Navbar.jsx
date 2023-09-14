import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../public/cm-logo-png.ico";
import { AuthContext } from "../../../providers/AuthProvider";
import useInstructor from "../../../Hooks/useInstructor";
import useStudent from "../../../Hooks/useStudent";
import useAdmin from "../../../Hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isInstructor] = useInstructor();
  const [isStudent] = useStudent();
  const [isAdmin] = useAdmin();
  const [Categories, setCategories] = useState([]);


  const navigate = useNavigate();
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(
      "https://cm-academy-test-server-production.up.railway.app/categoriesName"
    )
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const handleCategoryClick = (categoryName) => {
    // Navigate to AllCourseCategories with the selected category name as a query parameter
    navigate(`/courseCategories?category=${encodeURIComponent(categoryName)}`);
  };

  let dashboardRoute = "";

  if (isInstructor) {
    dashboardRoute = "/dashboard/new-instructor-dashboard";
  } else if (isStudent) {
    dashboardRoute = "/dashboard/student-dashboard";
  } else if (isAdmin) {
    dashboardRoute = "/dashboard/admin-dashboard";
  }


  return (
    <>
      <div className="fixed left-0 right-0 px-4 mx-auto bg-white shadow-sm bg-opacity-70 backdrop-blur-lg">
        <div className="navbar max-w-7xl mx-auto px-4">
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
                  <Link className="">Home</Link>
                </li>
                <li className="bg-white" tabIndex={0}>
                  <details>
                    <summary>Course Catagories</summary>
                    <ul className="p-2">
                      {Categories.map((category, index) => (
                        <li className="" key={index}>
                          <Link
                            to={`/courseCategories?category=${encodeURIComponent(
                              category.name
                            )}`}
                            onClick={() => handleCategoryClick(category.name)} // Close the dropdown when a category is clicked
                          >
                            {category.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
                <li>
                  <Link to="/instructor">Become an Instructor</Link>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-success btn-sm w-20"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
            <Link
              to="/"
              className="font-extrabold lg:text-3xl sm:text-xl lg:-ml-8 flex gap-3 justify-start items-center"
            >
              <img
                src={logo}
                alt=""
                className="w-8 h-8 md:h-14 md:w-14 sm:ml-8"
              />
              <p className="  font-Jost font-bold">
                <span className="text-gray-600">CM</span> Academy
              </p>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold">
              <li>
                <Link className="  font-Raleway font-bold">Home</Link>
              </li>
              <li className="  font-Raleway font-bold" tabIndex={0}>
                <details>
                  <summary>Course Categories</summary>
                  <ul className="px-0">
                    {Categories.map((category, index) => (
                      <li className="" key={index}>
                        <button
                          onClick={() => handleCategoryClick(category.name)} // Close the dropdown when a category is clicked
                        >
                          {category.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
              {!isInstructor && (
                <li>
                  <Link
                    to="/instructor"
                    className="ml-auto   font-Raleway font-bold"
                  >
                    Become an Instructor
                  </Link>
                </li>
              )}
              {user && (
                <li>
                  <Link
                    to={dashboardRoute}
                    className="ml-auto   font-Raleway font-bold"
                  >
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="navbar-end hidden sm:block">
            {user?.email ? (
              <div className="flex justify-end gap-12">
                <div className="bg-[#1bbf723b] border-2 border-[#1bbf726c] shadow-md sm:h-12 gap-2 rounded-full flex items-center justify-between px-1 py-1">
                  <p className="text-gray-700 text-xs font-bold font-Poppins tracking-wider ml-1 hover:px-10 duration-500">
                    {user.fullName}
                  </p>
                  <img
                    className="rounded-full h-9 sm:h-10 shadow-lg sm:block"
                    src={user.userImage}
                    alt=""
                  />
                </div>
                <button
                  onClick={handleLogOut}
                  className="text-gray-700 font-Raleway border-2 font-bold py-2 rounded-xl px-4 css-selector hover:border-[#1bbf7246] duration-500 hover:bg-[#1bbf7249] hover:text-gray-600 shadow-md"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex justify-end">
                <Link
                  to="/login"
                  className="text-gray-700 font-Raleway border-2 font-bold py-[9px] rounded-xl px-4 css-selector hover:border-[#1bbf7246] duration-500 hover:bg-[#1bbf7249] hover:text-gray-600 shadow-md"
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
