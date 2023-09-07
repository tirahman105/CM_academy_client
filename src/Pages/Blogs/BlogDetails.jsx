import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    // Fetch the blogs data
    fetch("https://cm-academy-test-server-production.up.railway.app/all-blog")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);

        // Fetch the blog data based on the ID from the fetched blogs
        const selectedBlog = data.find((blog) => blog._id === id);
        if (selectedBlog) {
          setBlog(selectedBlog);
        } else {
          console.error("Blog not found");
        }
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, [id]);

  // relatedArticles 
  const relatedArticles = blogs
    .filter(
      (article) =>
        article._id !== id && article.category === blog?.category
    )
    .slice(0, 3);

  console.log(id);



  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-6">
        <div className="py-4 mt-16">
          <p className="text-gray-500">
            <Link to="/allBlog" className="text-blue-500 cursor-pointer hover:underline">
              Blogs
            </Link>{" "}
            &gt;&gt; Blog Details
          </p>
          <h1 className="text-3xl font-bold mt-2 mb-4">{blog?.blogTitle}</h1>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-2/3">
            <img
              src={blog?.blogImage}
              alt={blog?.blogTitle}
              className="rounded-lg mb-4 w-full h-96 object-cover"
            />
            <p className="text-gray-600 mb-2 font-semibold">
              {blog?.blogDate} | By {blog?.blogAuthor}
            </p>
            <div className="text-gray-800">{blog?.blogDetails}</div>
          </div>

          <div className="md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Related Articles</h2>
            <ul className="space-y-4">
              {relatedArticles?.map((article) => (
                <li
                  key={article._id}
                  className="flex space-x-4 items-center bg-white rounded-lg p-2 transform transition duration-300 hover:shadow-md hover:scale-105"
                >
                  <img
                    src={article.blogImage}
                    alt={article.blogTitle}
                    className="w-16 h-16 object-cover rounded-md transition-transform duration-300 transform hover:scale-110"
                  />
                  <div>
                    <p className="text-sm text-gray-600">
                      By {article.blogAuthor}
                    </p>
                    <Link to={`/blog-details/${article._id}`}>
                      <p className="text-gray-900 hover:underline text-md cursor-pointer font-semibold">
                        {article.blogTitle}
                      </p>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden">
          <div className="md:w-2/3">
            <img
              src={blog?.blogImage}
              alt={blog?.blogTitle}
              className="rounded-lg mb-4 w-full h-auto object-cover"
            />
            <p className="text-gray-600 mb-2">
              {blog?.blogDate} | By {blog?.blogAuthor}
            </p>
            <div className="text-gray-800">{blog?.blogDetails}</div>
          </div>

          <div className="md:w-1/3">
            <hr className="border border-gray-200 mt-10 mb-4"/>
            <h2 className="text-xl font-semibold mb-4">Related Articles</h2>
            <ul className="space-y-4">
              {relatedArticles?.map((article) => (
                <li
                  key={article._id}
                  className="flex space-x-4 items-center bg-white rounded-lg p-2 transform transition duration-300 hover:shadow-md hover:scale-105"
                >
                  <img
                    src={article.blogImage}
                    alt={article.blogTitle}
                    className="w-16 h-16 object-cover rounded-md transition-transform duration-300 transform hover:scale-110"
                  />
                  <div>
                    <p className="text-sm text-gray-600">
                      By {article.blogAuthor}
                    </p>
                    <Link to={`/blog-details/${article._id}`}>
                      <p className="text-gray-900 hover:underline text-md cursor-pointer">
                        {article.blogTitle}
                      </p>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
};

export default BlogDetails;
