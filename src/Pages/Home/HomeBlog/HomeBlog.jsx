
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs"; // Import the react-icons library for the arrow icon
import { useState } from "react";
import { useEffect } from "react";

const HomeBlog = () => {
   

    const [blogs, setBlogs] = useState([]);
  
  
    useEffect(() => {
      // Fetch the JSON data
      fetch("https://cm-academy-test-server-production.up.railway.app/all-blog")
        .then((response) => response.json())
        .then((data) => setBlogs(data))
        .catch((error) => console.error("Error fetching blogs:", error));
    }, []);

    return (
        <div className="container mx-auto px-2 pt-16 home-container">

          <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-left mb-1">Trending Blog post</h1>
          {/* <button className="text-2xl inline-block bg-gray-500 font-semibold hover:bg-gray-700 text-white px-2 py-2 rounded-lg transition-colors duration-500">
            All blogs
          </button> */}
          </div>

          <div className="w-full mx-auto md:w-3/4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
  {blogs.map((blog, index) => (
    <Link to={`/blog-details/${blog._id}`} key={index}>
      <div className="bg-white rounded-lg shadow-md p-4 transform transition duration-300 hover:shadow-lg h-full">
        <div className="relative h-40 mb-4 overflow-hidden rounded-md hover:scale-105">
          <img
            src={blog.blogImage}
            alt={blog.blogTitle}
            className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-1">
            {blog.blogTitle}
          </h2>
          <p className="text-gray-600 mb-2">
            {blog.blogDetails.split(" ").slice(0, 20).join(" ")} <span className="text-blue-600 font-bold ">Read More</span>
          </p>
          <div className="flex justify-between items-center text-gray-400 text-sm">
            <p>{blog.blogDate}</p>
            <p className="font-semibold">{blog.blogAuthor}</p>
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>

        </div>
    );
};

export default HomeBlog;
