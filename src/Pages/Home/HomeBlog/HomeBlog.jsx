
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs"; // Import the react-icons library for the arrow icon

const HomeBlog = () => {
    // Sample blog data
    const blogs = [
        {
            id: 1,
            title: "Introduction to Blogging",
            image: "https://i.ibb.co/XxCVzbv/i-Stock-000021255451-Large-780x585.jpg",
            category: "Technology",
        },
        {
            id: 2,
            title: "10 Tips for Successful Blogging",
            image: "https://i.ibb.co/XxCVzbv/i-Stock-000021255451-Large-780x585.jpg",
            category: "Writing",
        },
        {
            id: 3,
            title: "The Art of Writing Engaging Content",
            image: "https://i.ibb.co/XxCVzbv/i-Stock-000021255451-Large-780x585.jpg",
            category: "Writing",
        },
    ];

    return (
        <div className="px-8 py-12 container">

          <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-left mb-1">Trending Blog post</h1>
          {/* <button className="text-2xl inline-block bg-gray-500 font-semibold hover:bg-gray-700 text-white px-2 py-2 rounded-lg transition-colors duration-500">
            All blogs
          </button> */}
          </div>

            <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="bg-white shadow-md relative  rounded-lg overflow-hidden"
                    >
                        <Link to={`/blog/${blog.id}`}>
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-60 object-cover transition-transform duration-500 hover:scale-105"
                            />

                        </Link>
                        <div className="absolute top-2 right-2 bg-white text-gray-700 hover:bg-blue-700 hover:text-white transition-all duration-500 px-2 py-1 rounded-md">
                            {blog.category}
                        </div>

                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                            <Link
                                to={`/blog/${blog.id}`}
                                className="flex items-center text-gray-700 hover:underline transition-transform duration-300 hover:translate-x-1"
                            >
                                Read Blog <BsArrowRight className="ml-2 text-white hover:text-gray-600 font-bold transition-all duration-500 hover:bg-white bg-gray-600 rounded-full h-6 w-6 p-1" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeBlog;
