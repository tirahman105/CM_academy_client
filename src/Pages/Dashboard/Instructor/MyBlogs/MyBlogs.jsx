import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";

const MyBlogs = () => {
  const { user } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);
  const userEmail = user?.email;

  useEffect(() => {
    // Fetch all blogs from your server
    fetch("https://cm-academy-test-server-production.up.railway.app/all-blog")
      .then((response) => response.json())
      .then((data) => {
        // Filter blogs based on the user's email
        const filteredBlogs = data.filter((blog) => blog.email === userEmail);
        setBlogs(filteredBlogs);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, [userEmail]);

  return (
    <div className=" p-4 font-Lexend text-gray-700">
      <div className=" mt-4">
        <h1 className=" text-lg font-bold">My Blogs</h1>
        <p className="text-base mb-4 mt-3">Your posted blog</p>


        <hr />

        {
          // If the user has not posted any blog, show this message
          blogs.length === 0 && (
            <div className="flex justify-center items-center h-96">
              <h1 className="text-2xl font-bold text-gray-500">
                You haven't posted any blog yet!
              </h1>
            </div>
          )
        }
      </div>
      <div className="w-full mt-7  mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-6 ">
        {blogs.map((blog, index) => (
          <Link to={`/blog-details/${blog._id}`} key={index}>
            <div className="bg-white rounded-lg shadow-md p-4 transform transition duration-300 hover:shadow-lg">
              <div className="relative h-52 mb-4 overflow-hidden rounded-md hover:scale-105">
                <img
                  src={blog.blogImage}
                  alt={blog.blogTitle}
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  {blog.blogTitle}
                </h2>
                <p className="text-gray-600 mb-4 text-base">
                  {blog.blogDetails.slice(0, 90)}...
                  <span className="text-blue-600 font-bold ml-2">
                    Read More
                  </span>
                </p>
                <div className="flex justify-between items-center text-gray-400 text-sm">
                  <p>{new Date(blog.blogDate).toLocaleDateString()}</p>
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

export default MyBlogs;
