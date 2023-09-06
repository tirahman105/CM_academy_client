// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { GrNext, GrPrevious } from "react-icons/gr";


// const HomeBlog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     // Fetch the JSON data
//     fetch("https://cm-academy-test-server-production.up.railway.app/all-blog")
//       .then((response) => response.json())
//       .then((data) => setBlogs(data))
//       .catch((error) => console.error("Error fetching blogs:", error));

//     // Update the window width when it changes
//     window.addEventListener("resize", handleResize);

//     // Cleanup event listener when component unmounts
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   // Function to handle window resize
//   const handleResize = () => {
//     setWindowWidth(window.innerWidth);
//   };

//   // Determine the number of blogs to display based on window width
//   const blogsPerPage = windowWidth <= 768 ? 1 : 3;

//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//   const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

//   const paginate = (pageNumber) => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setTimeout(() => {
//         setCurrentPage(pageNumber);
//         setIsAnimating(false);
//       }, 1500); // Adjust the duration as needed for your desired animation speed
//     }
//   };
//   const canGoToNextPage = indexOfLastBlog < blogs.length;
//   const canGoToPreviousPage = currentPage > 1;

//   return (
//     <div className="container mx-auto  mt-96 md:mt-16 home-container ">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-4xl font-bold text-left mb-1 ">Trending Blog post</h1>
//       </div>
     
//       <div className="flex justify-center items-center  px-4 gap-3 md:gap-0   ">
//       <button
//       onClick={() => paginate(currentPage - 1)}
//       disabled={currentPage === 1}
//       className=" bg-green-300 rounded-md h-10 w-10 flex   text-2xl justify-center items-center"
//     >
//       <GrPrevious  />
//     </button>
//       <div className="w-full mx-auto md:w-3/4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
      
//         {currentBlogs.map((blog, index) => (
//           <Link to={`/blog-details/${blog._id}`} key={index}>
//             <div className="bg-white rounded-lg shadow-md p-4 transform transition duration-300 hover:shadow-lg h-full">
//               <div className="relative h-40 mb-4 overflow-hidden rounded-md hover:scale-105">
//                 <img
//                   src={blog.blogImage}
//                   alt={blog.blogTitle}
//                   className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
//                 />
//               </div>
//               <div>
//                 <h2 className="text-xl font-semibold mb-1">{blog.blogTitle}</h2>
//                 <p className="text-gray-600 mb-2">
//                   {blog.blogDetails.split(" ").slice(0, 20).join(" ")}{" "}
//                   <span className="text-blue-600 font-bold ">Read More</span>
//                 </p>
//                 <div className="flex justify-between items-center text-gray-400 text-sm">
//                   <p>{blog.blogDate}</p>
//                   <p className="font-semibold">{blog.blogAuthor}</p>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
      
//       <button  className="  bg-green-300 rounded-md h-10 w-10 flex   text-2xl justify-center items-center"
//       onClick={() => paginate(currentPage + 1)}
//       disabled={!canGoToNextPage}
//     >
//       <GrNext />
//     </button>
//       </div>
     
//       <div >
        
      
//       </div>
//     </div>
//   );
// };

// export default HomeBlog;


 
 

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HomeBlog.css";
import { Pagination, Navigation } from "swiper/modules";

const HomeBlog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    // Fetch the JSON data
    fetch("https://cm-academy-test-server-production.up.railway.app/all-blog")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  // Define breakpoints for Swiper
  const breakpoints = {
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
    },
    // when window width is < 768px
    0: {
      slidesPerView: 1,
    },
  };

  return (
    <div className="container mx-auto mt-96 md:mt-16 home-container">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-left mb-1">Trending Blog post</h1>
      </div>

      <Swiper
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
        breakpoints={breakpoints}
      >
        <div className="w-full mx-auto md:w-3/4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <Link to={`/blog-details/${blog._id}`} key={index}>
              <SwiperSlide className="mb-10  ">
                <div className="bg-white rounded-lg shadow-md p-4 transform transition duration-300 hover:shadow-lg h-full 
               ">
                  <div className="relative h-40 mb-4 overflow-hidden rounded-md hover:scale-105">
                    <img
                      src={blog.blogImage}
                      alt={blog.blogTitle}
                      className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-1">{blog.blogTitle}</h2>
                    <p className="text-gray-600 mb-2">
                      {blog.blogDetails.split(" ").slice(0, 20).join(" ")}{" "}
                      <span className="text-blue-600 font-bold">Read More</span>
                    </p>
                    <div className="flex justify-between items-center text-gray-400 text-sm">
                      <p>{blog.blogDate}</p>
                      <p className="font-semibold">{blog.blogAuthor}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Link>
          ))}
        </div>
      </Swiper>

      <div></div>
    </div>
  );
};

export default HomeBlog;
