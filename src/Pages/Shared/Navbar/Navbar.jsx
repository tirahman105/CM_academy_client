// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../../../../public/cm-logo-png.ico";
// import { AuthContext } from "../../../providers/AuthProvider";
// import useInstructor from "../../../Hooks/useInstructor";
// import useStudent from "../../../Hooks/useStudent";
// import useAdmin from "../../../Hooks/useAdmin";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [isInstructor] = useInstructor();
//   const [isStudent]= useStudent();
//   const[isAdmin]= useAdmin();

//   const [Categories, setCategories] = useState([]);
//   const navigate = useNavigate();
//   console.log(user);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .catch((error) => console.log(error));
//   };

//   useEffect(() => {
//     fetch(
//       "https://cm-academy-test-server-production.up.railway.app/categoriesName"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setCategories(data);
//       });
//   }, []);

//   const handleCategoryClick = (categoryName) => {
//     // Navigate to AllCourseCategories with the selected category name as a query parameter
//     navigate(`/courseCategories?category=${encodeURIComponent(categoryName)}`);
//   };

//   let dashboardRoute = "";
//   if (isStudent){
//     dashboardRoute= "/dashboard/student-dashboard"
//   }
//   if (isInstructor){
//     dashboardRoute= "/dashboard/new-instructor-dashboard"
//   }

//   if (isAdmin){
//     dashboardRoute= "/dashboard/admin-dashboard"
//   }

//   return (
//     <>
//       <div className="fixed left-0 right-0 px-4 mx-auto bg-gradient shadow-sm bg-opacity-70 backdrop-blur-lg">
//         <div className="navbar max-w-7xl mx-auto px-4">
//           <div className="navbar-start">
//             <div className="dropdown">
//               <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h8m-8 6h16"
//                   />
//                 </svg>
//               </label>
//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//               >
//                 <li>
//                   <Link className="">Home</Link>
//                 </li>
//                 <li className="bg-white" tabIndex={0}>
//                   <details>
//                     <summary>Course Catagories</summary>
//                     <ul className="p-2">
//                       {Categories.map((category, index) => (
//                         <li className="" key={index}>
//                           <Link
//                             to={`/courseCategories?category=${encodeURIComponent(
//                               category.name
//                             )}`}
//                             onClick={() => handleCategoryClick(category.name)} // Close the dropdown when a category is clicked
//                           >
//                             {category.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </details>
//                 </li>
//                 <li>
//                   <Link to="/instructor">Become an Instructor</Link>
//                 </li>
//                 <li>
//                   <button
//                     onClick={handleLogOut}
//                     className="btn btn-success btn-sm w-20"
//                   >
//                     Logout
//                   </button>
//                 </li>
//               </ul>
//             </div>
//             <Link
//               to="/"
//               className="font-extrabold lg:text-3xl sm:text-xl lg:-ml-8 flex gap-3 justify-start items-center"
//             >
//               <img
//                 src={logo}
//                 alt=""
//                 className="w-8 h-8 md:h-14 md:w-14 sm:ml-8"
//               />
//               <p className="  font-Jost font-bold">
//                 <span className="text-gray-600">CM</span> Academy
//               </p>
//             </Link>
//           </div>
//           <div className="navbar-center hidden lg:flex">
//             <ul className="menu menu-horizontal px-1 font-semibold">
//               <li>
//                 <Link className="  font-Raleway font-bold">
//                   Home
//                 </Link>
//               </li>
//               <li className="  font-Raleway font-bold" tabIndex={0}>
//                 <details>
//                   <summary>Course Categories</summary>
//                   <ul className="px-0">
//                     {Categories.map((category, index) => (
//                       <li className="" key={index}>
//                         <button

//                           onClick={() => handleCategoryClick(category.name)} // Close the dropdown when a category is clicked
//                         >
//                           {category.name}
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                 </details>
//               </li>
//               {!isInstructor && (
//                 <li>
//                   <Link
//                     to="/instructor"
//                     className="ml-auto   font-Raleway font-bold"
//                   >
//                     Become an Instructor
//                   </Link>
//                 </li>
//               )}
//               {user && (
//                 <li>
//                   <Link
//                     to={dashboardRoute}
//                     className="ml-auto   font-Raleway font-bold"
//                   >
//                     Dashboard
//                   </Link>
//                 </li>
//               )}
//             </ul>
//           </div>
//           <div className="navbar-end hidden sm:block">
//             {user?.email ? (
//               <div className="flex justify-end gap-12">
//                 <div className="bg-[#1bbf723b] border-2 border-[#1bbf726c] shadow-md sm:h-12 gap-2 rounded-full flex items-center justify-between px-1 py-1">
//                   <p className="text-gray-700 text-xs font-bold font-Poppins tracking-wider ml-1 hover:px-10 duration-500">
//                     {user.fullName}
//                   </p>
//                   <img
//                     className="rounded-full h-9 sm:h-10 shadow-lg sm:block"
//                     src={user.userImage}
//                     alt=""
//                   />
//                 </div>
//                 <button
//                   onClick={handleLogOut}
//                   className="text-gray-700 font-Raleway border-2 font-bold py-2 rounded-xl px-4 css-selector hover:border-[#1bbf7246] duration-500 hover:bg-[#1bbf7249] hover:text-gray-600 shadow-md"
//                 >
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <div className="flex justify-end">
//                 <Link
//                   to="/login"
//                   className="text-gray-700 font-Raleway border-2 font-bold py-[9px] rounded-xl px-4 css-selector hover:border-[#1bbf7246] duration-500 hover:bg-[#1bbf7249] hover:text-gray-600 shadow-md"
//                 >
//                   Login
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../../public/cm-logo-png.ico";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useInstructor from "../../../Hooks/useInstructor";
import { BiSolidChevronDown } from "react-icons/bi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { user, logOut } = useContext(AuthContext);
  const [isInstructor] = useInstructor();

  const [Categories, setCategories] = useState([]);
  const navigate = useNavigate();
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    // Code to open the dropdown or perform any other action on hover in.
    setAboutDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    // Code to close the dropdown or perform any other action on hover out.
    setAboutDropdownOpen(false);
  };

  const handleCategoriesButtonClick = () => {
    // Toggle the dropdown state
    setAboutDropdownOpen(!isAboutDropdownOpen);
  };

  // ----------------style------------------
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#1BBF72" : "black",
      fontWeight: isActive ? "600" : "600",
    };
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
    setAboutDropdownOpen(false);

    // Navigate to AllCourseCategories with the selected category name as a query parameter
    navigate(`/courseCategories?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="  bg-opacity-70 backdrop-blur-lg fixed py-3 left-0 right-0 ">
      <div className=" px-4 mx-auto max-w-7xl  ">
        <div className=" mx-auto flex justify-between items-center">
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
              <span className="text-gray-600">CM</span> Academy
            </p>
          </Link>

          {/* Hamburger menu button for mobile */}
          <div className="md:hidden  mr-4">
            <button
              onClick={toggleNavbar}
              className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6 text-black "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navbar links for desktop */}
          <div className="hidden md:flex justify-center items-center space-x-6">
            <NavLink to="/" style={navLinkStyle}>
              Home
            </NavLink>
            <div className="relative group">
              <div
                className="text-black font-semibold py-1 flex items-center gap-1"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleCategoriesButtonClick} // Toggle the dropdown when clicking the "Categories" button
              >
                <h1>Course Categories</h1>
                <span>
                  <BiSolidChevronDown></BiSolidChevronDown>
                </span>
              </div>
              {isAboutDropdownOpen && (
                <ul
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="absolute -left-2 bg-white p-3  w-44 rounded-lg shadow-lg "
                >
                  {Categories.map((category, index) => (
                    <li className=" mb-3   rounded px-2 py-1 " key={index}>
                      <h1
                        onClick={() => handleCategoryClick(category.name)} // Close the dropdown when a category is clicked
                      >
                        <Link className="font-semibold"> {category.name}</Link>
                      </h1>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {!isInstructor && (
              <NavLink
                to="/instructor"
                className=" font-Raleway "
                style={navLinkStyle}
              >
                Become an Instructor
              </NavLink>
            )}
            {user && (
              <NavLink
                to="/dashboard"
                className="ml-auto   font-Raleway font-bold"
                style={navLinkStyle}
              >
                Dashboard
              </NavLink>
            )}
          </div>
          <div className="hidden md:flex justify-center items-center ">
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
                  className="text-gray-700 font-Raleway border-2 font-bold  rounded-xl px-4 css-selector   hover:border-[#1bbf7246] duration-500 
                hover:bg-[#1bbf7249] hover:text-gray-600 shadow-md"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-gray-700 font-Raleway border-2 font-bold  rounded-xl px-4 css-selector   hover:border-[#1bbf7246] duration-500 
              hover:bg-[#1bbf7249] hover:text-gray-600 shadow-md "
              >
                Login
              </Link>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-5 w-2/4 ">
            <NavLink onClick={() => toggleNavbar()} style={navLinkStyle}>
              Home
            </NavLink>
            <div  className="relative group">
              <Link
                className="text-black font-semibold py-1"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleCategoriesButtonClick}
              >
                Course Categories
              </Link>
              {isAboutDropdownOpen && (
                <ul
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className=""
                >
                  {Categories.map((category, index) => (
                    <li className=" " key={index}>
                      <h1
                        onClick={() => {
                          handleCategoryClick(category.name);
                          toggleNavbar(); // Close the menu when a category is clicked
                        }}
                      >
                        <Link className="font-semibold">{category.name}</Link>
                      </h1>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {!isInstructor && (
              <NavLink
                to="/instructor"
                className=" font-Raleway"
                style={navLinkStyle}
              >
                Become an Instructor
              </NavLink>
            )}
            <br />
            {user && (
              <NavLink
                to="/dashboard"
                className="ml-auto font-Raleway font-bold"
                style={navLinkStyle}
              >
                Dashboard
              </NavLink>
            )}
            <div>
              {user?.email ? (
                <div className="flex gap-5 my-4">
                  <button
                    onClick={() => {
                      handleLogOut();
                      toggleNavbar(); // Close the menu when the Logout button is clicked
                    }}
                    className="text-gray-700 font-Raleway border-2 font-bold rounded-xl px-4 css-selector hover:border-[#1bbf7246] duration-500 hover:bg-[#1bbf7249] hover:text-gray-600 shadow-md"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="text-gray-700 font-Raleway border-2 font-bold rounded-xl px-4 css-selector hover:border-[#1bbf7246] duration-500 hover:bg-[#1bbf7249] hover:text-gray-600 shadow-md my-4"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
