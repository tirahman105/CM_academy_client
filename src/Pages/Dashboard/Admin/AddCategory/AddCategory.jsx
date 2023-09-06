import React, { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const AddCategory = () => {
    const [newCategory, setNewCategory] = useState('');
    const [categories, setCategories] = useState([]);

    const handleCategoryChange = (e) => {
        setNewCategory(e.target.value);
    };

    useEffect(() => {
        fetch("https://cm-academy-test-server-production.up.railway.app/categories")
          .then((response) => response.json())
          .then((data) => {
            setCategories(data[0].categories[0]);
          });
      }, []);


    const handleAddCategory = () => {
        // Add your logic here to handle the new category (e.g., send it to an API or update state)
        console.log('New Category:', newCategory);

        // Show a SweetAlert success alert
        Swal.fire({
            icon: 'success',
            title: 'Category added successfully!',
            showConfirmButton: false,
            timer: 2000, // Close the alert after 2 seconds (adjust as needed)
        });

        // Reset the input field
        setNewCategory('');
    };

    return (
        <div className="bg-gray-100 p-4">
            <h1 className='text-2xl font-semibold mb-4'>Add Category by Admin</h1>
            <div>
                <h1>All categories</h1>
                {categories?.courseCategory}
            </div>
            <div className="flex">
                <input
                    type='text'
                    placeholder='Enter new category'
                    value={newCategory}
                    onChange={handleCategoryChange}
                    className="border border-gray-300 p-2 rounded-l-lg w-full"
                />
                <button
                    onClick={handleAddCategory}
                    className="bg-blue-500 text-white p-2 rounded-r-lg"
                >
                    Add Category
                </button>
            </div>
        </div>
    );
};

export default AddCategory;
