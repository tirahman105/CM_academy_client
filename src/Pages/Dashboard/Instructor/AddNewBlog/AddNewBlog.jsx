import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../providers/AuthProvider";

const AddNewBlog = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.displayName)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const categories = ["Technology", "programming", "writing"];

  const onSubmit = async (data) => {
    data.email = user?.email;
    try {
      const response = await fetch(
        "https://cm-academy-test-server-production.up.railway.app/blog",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        alert("Form data sent successfully");
        reset();
        // Perform any necessary actions after successful data submission
      } else {
        alert("Failed to send form data");
      }
    } catch (error) {
      alert("Error sending form data:", error);
    }
  };

  const today = new Date().toISOString().substr(0, 10);

  return (
    <div className="p-6 ">
      <div className=" my-4 mt-4">
        <h1 className=" mobile:text-lg tablet:text-2xl text-gray-700 font-Lexend font-bold ">Add New blog</h1>
        <p className="text-lg font-light mb-4 text-gray-700 font-Lexend mt-4">Add the necessary details and post you blog.</p>
        <hr />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="tablet:w-3/5 mx-auto">
        <div className="mb-4">
          <label
            htmlFor="blogImage"
            className="block text-gray-700 text-base font-medium mb-1"
          >
            Blog Image URL
          </label>
          <input
            type="text"
            id="blogImage"
            className={`w-full p-2 border  focus:outline-none focus:ring-2 focus:ring-gray-700 ${errors.blogImage ? "border-red-500" : "border-gray-300"
              }`}
            {...register("blogImage", { required: "Image URL is required" })}
          />
          {errors.blogImage && (
            <p className="text-red-500 text-base  mt-1">{errors.blogImage.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="blogTitle"
            className="block text-gray-700 text-base font-medium mb-1"
          >
            Blog Title
          </label>
          <input
            type="text"
            id="blogTitle"
            className={`w-full p-2 border  focus:outline-none focus:ring-2 focus:ring-gray-700 ${errors.blogTitle ? "border-red-500" : "border-gray-300"
              }`}
            {...register("blogTitle", { required: "Title is required" })}
          />
          {errors.blogTitle && (
            <p className="text-red-500 text-base mt-1">{errors.blogTitle.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="blogDetails"
            className="block text-gray-700 text-base font-medium mb-1"
          >
            Blog Details
          </label>
          <textarea
            id="blogDetails"
            className={`w-full p-2 border  focus:outline-none focus:ring-2 focus:ring-gray-700 ${errors.blogDetails ? "border-red-500" : "border-gray-300"
              }`}
            {...register("blogDetails", { required: "Details are required" })}
          />
          {errors.blogDetails && (
            <p className="text-red-500 text-base mt-1">{errors.blogDetails.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="blogAuthor"
            className="block text-gray-700 text-base font-medium mb-1"
          >
            Blog Author
          </label>
          <input
            type="text"
            id="blogAuthor"
            defaultValue={user?.displayName}
            className={`w-full p-2 border text-sm  focus:outline-none focus:ring-2 focus:ring-gray-700 ${errors.blogAuthor ? "border-red-500" : "border-gray-300"
              }`}
            {...register("blogAuthor", { required: "Author is required" })}
          />
          {errors.blogAuthor && (
            <p className="text-red-500 text-sm mt-1">{errors.blogAuthor.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="blogCategory"
            className="block text-gray-700 text-base font-medium mb-1"
          >
            Blog Category
          </label>
          <select
            id="blogCategory"
            className={`w-full text-base font-medium p-2 border  focus:outline-none focus:ring-2 focus:ring-gray-700 ${errors.blogCategory ? "border-red-500" : "border-gray-300"
              }`}
            {...register("blogCategory", { required: "Category is required" })}
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.blogCategory && (
            <p className="text-red-500 text-base mt-1">{errors.blogCategory.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="blogDate"
            className="block text-gray-700 text-base font-medium  mb-1"
          >
            Blog Date
          </label>
          <input
            type="date"
            id="blogDate"
            className={`w-full text-base  p-2 border  focus:outline-none focus:ring-2 focus:ring-gray-700 ${errors.blogDate ? "border-red-500" : "border-gray-300"
              }`}
            defaultValue={today}
            {...register("blogDate", { required: "Date is required" })}
          />
          {errors.blogDate && (
            <p className="text-red-500 text-base mt-1">{errors.blogDate.message}</p>
          )}
        </div>
        <button
          type="submit"
          className=" bg-gray-700 text-lg font-Lexend text-white px-2  rounded-md mt-4 mb-5 hover:bg-green-600"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddNewBlog;
