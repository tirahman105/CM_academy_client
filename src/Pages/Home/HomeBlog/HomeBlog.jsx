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
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    // Fetch the JSON data
    fetch("https://cm-academy-test-server-production.up.railway.app/all-blog")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data)
        setCategoryName(data.blogCategory)
      })
      
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  // Swiper breakpoints for responsive design
  const breakpoints = {
    768: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-2 mt-28">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-4xl font-bold text-left mb-1 ml-2 font-Jost mobile:text-xl">Trending Blog post</h1>
      </div>

      <Swiper
        spaceBetween={3}
        loop={true}
        pagination={{
          clickable: true, // Make sure this is set to true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={breakpoints}
      >
        <div className="w-full mx-auto md:w-3/4 grid grid-cols-1 md:grid-cols-2  gap-6">
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <Link to={`/blog-details/${blog._id}`}>
                <div className="bg-white rounded-lg shadow-md p-4 transform transition duration-300 hover:shadow-lg h-[430px] flex flex-col justify-between">
                  <div className="relative h-40 mb-4 overflow-hidden rounded-md hover:scale-105">
                    <img
                      src={blog.blogImage}
                      alt={blog.blogTitle}
                      className="w-full h-full mobile:h-20 object-cover transition-transform duration-300 transform hover:scale-110"
                    />
                  </div>
                  <div className="text-left">
                    <p className="my-2" ><span className={`bg-[#f3ef78] font-bold text-gray-600 px-2 py-1 rounded-lg text-sm ${categoryName== "Technology"? "bg-slate-500" : ""}`}>{blog.blogCategory}</span></p>
             

                    <h2 className="mobile:text-sm font-Jost font-semibold mb-1">{blog.blogTitle}</h2>
                    <p className="text-gray-600 mb-2 mobile:text-[12px]">
                      {blog.blogDetails.split(" ").slice(0, 15).join(" ")}{" "}
                      <span className="text-blue-600 font-bold">Read More..</span>
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-0 text-gray-400 mobile:text-[12px] text-sm font-Jost">
                    <p>{blog.blogDate}</p>
                    <p className="font-Jost mobile:text-[12px] text-sm">{blog.blogAuthor}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default HomeBlog;
