import React, { useState, useEffect } from "react";

function CategoryManagement() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  // Fetch recent categories from the server
  useEffect(() => {
    fetch(
      "https://cm-academy-test-server-production.up.railway.app/categoriesName"
    )
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  // Function to add a new category
  const addCategory = () => {
    if (newCategory.trim() === "") {
      return;
    }

    // Send a POST request to add the new category
    fetch(
      "https://cm-academy-test-server-production.up.railway.app/categoriesName",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newCategory }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Update the categories state with the new category
        setCategories([...categories, data]);
        setNewCategory(""); // Clear the input field
      })
      .catch((error) => {
        console.error("Error adding category:", error);
      });
  };

  return (
    <div>
      <div className="border p-4  ">
        <div className="my-5 mt-4">
          <h1 className=" text-lg font-bold">Recent Categories</h1>
          <p className="text-base mb-4">All the categories in CM Academy</p>
          <hr />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 text-base text-center">
          {categories.map((category) => (
            <div
              className="border bg-slate-100 shadow-md p-4 rounded-md gap-4"
              key={category._id}
            >
              {category.name}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 border p-4 bg-slate-100 rounded-md">
        <h2 className="text-lg text-center my-3">Add New Category</h2>
        <hr />
        <div className="flex w-2/3  mx-auto p-4 gap-4">
          <input
            className=" border w-full p-2 rounded-lg bg-slate-50 shadow-md text-base"
            type="text"
            placeholder="Enter new category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button
            className="shadow-md w-1/2 text-[#1BBF72] border-2 font-bold  rounded-xl px-4 bg-white  font-Raleway text-[12px] md:text-sm  cursor-pointer border-[#1bbf729f] duration-500 
                hover:bg-[#1bbf7249] hover:text-gray-600   "
            onClick={addCategory}
          >
            Add Category
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryManagement;
