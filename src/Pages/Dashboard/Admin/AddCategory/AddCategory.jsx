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
    fetch("http://localhost:5000/categoriesName", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newCategory }),
    })
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
      <h1>Category Management</h1>
      <div>
        <h2>Recent Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category._id}>{category.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Add New Category</h2>
        <input
          type="text"
          placeholder="Enter new category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button onClick={addCategory}>Add Category</button>
      </div>
    </div>
  );
}

export default CategoryManagement;
